import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { EstadoBr } from 'src/modelos/estadoBR';
import { Cidade } from 'src/modelos/cidade';
import { map, take } from 'rxjs/operators';

@Injectable()
export class LocalityServiceProvider {

	private _url = 'http://localhost:3333';

	constructor( private _http: HttpClient ) {
	}

	getEstadosBr() {
		return this._http.get<EstadoBr[]>( "assets/estadosbr.json" ).pipe( take( 1 ) );
	}

	getCidades( idEstado: number ) {
		return this._http
			.get<Cidade[]>( "assets/cidades.json" )
			.pipe(
				map( ( cidades: Cidade[] ) => cidades.filter( c => c.estado === idEstado ) ),
				take( 1 )
			);
	}

}
