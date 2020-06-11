import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EstadoBr } from 'src/modelos/estadoBR';
import { Cidade } from 'src/modelos/cidade';
import { LocalityServiceProvider } from 'src/providers/locality-service/locality-service';
import { PrecosServiceProvider } from 'src/providers/precos-service/precos-service';
import { Preco } from 'src/modelos/preco';
import { ToastController, AlertController } from '@ionic/angular';
import { CameraService } from 'src/providers/camera-service/camera-service';

@Component( {
  selector: 'app-contribuir-preco',
  templateUrl: './contribuir-preco.page.html',
  styleUrls: [ './contribuir-preco.page.scss' ],
} )
export class ContribuirPrecoPage implements OnInit {


  @ViewChild( 'precoForm', { static: false } ) precoForm: NgForm;


  estados: EstadoBr[];
  cidades: Cidade[];
  unidades = [
    'QUILO',
    'UNIDADE',
    'MAÇO',
    'GRAMA',
    'LITRO',
    'DUZIA',
    'TONELADA',
    'MILILITRO',
    'ENVELOPE'
  ];

  estado: string;
  cidade: string;
  unidade_medida: string;
  produto: string;
  valor_unitario: number;
  fotoProduto: string;

  constructor(
    private localitySvc: LocalityServiceProvider,
    private precoSvc: PrecosServiceProvider,
    public toastController: ToastController,
    public alertController: AlertController,
    private cameraSvc: CameraService,
  ) { }

  ngOnInit() {

    this.localitySvc.getEstadosBr().subscribe( res => {
      this.estados = res;
    } );
  }

  compareWithFn = ( o1, o2 ) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };

  compareWith = this.compareWithFn;

  selectCity( event ) {

    const filteredObjectState = this.estados.filter( item => item.sigla === this.estado )[ 0 ];

    this.localitySvc.getCidades( filteredObjectState.id ).subscribe( res => {
      this.cidades = res;
    } );

  }

  async postPrice() {

    const payload: Preco = {
      uf: this.estado,
      municipio: this.cidade,
      unidade_medida: this.unidade_medida,
      produto: this.produto,
      valor_unitario: this.valor_unitario
    }

    this.precoSvc
      .post( payload )
      .subscribe(
        async ( result ) => {

          const toast = await this.toastController.create( {
            message: 'Sucesso! Obrigado por enviar o preço do produto na sua cidade',
            position: 'top',
            color: 'success',
          } );
          toast.present();

          this.clearValues();

          //this.router.navigateByUrl( '/minhas-avaliacoes' );
        },
        async () => {

          const alert = await this.alertController.create( {
            cssClass: 'my-custom-class',
            header: 'Falha ao enviar preço!',
            message: 'Problema ao enviar o preço do produto. Tente novamente.',
            buttons: [ 'OK' ]
          } );

          await alert.present();

        }
      );

  }


  async tirarFoto() {

    const photo = await this.cameraSvc.takePicture();

    if(photo.photo) {
      this.fotoProduto = photo.photo;
    }

  }

  clearValues() {
    this.estado = "";
    this.cidade = "";
    this.unidade_medida = "";
    this.produto = "";
    this.valor_unitario = null;
  }

}
