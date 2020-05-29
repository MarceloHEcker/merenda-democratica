import { Injectable } from '@angular/core';
import { Avaliacao } from './../../modelos/avaliacao';

import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class AvaliacoesServiceProvider {

    private _url = 'http://localhost:3333';

    constructor( private _http: HttpClient ) {
    }


    post( avaliacao: Avaliacao ) {
        return this._http.post( `${ this._url }/avaliacoes`, avaliacao );
    }

    get( avaliacaoId: number ) {
        return this._http.get<Avaliacao>( `${ this._url }/avaliacoes/${ avaliacaoId }` );
    }

    getByUser( usuarioId: number ) {
        return this._http.get<Avaliacao[]>( `${ this._url }/avaliacoes/${ usuarioId }/usuario` );
    }

    index() {
        return this._http.get<Avaliacao[]>( `${ this._url }/avaliacoes` );
    }

    getIndiciosFraude() {
        return this._http.get<Avaliacao[]>( `${ this._url }/avaliacoes/indicio-fraude` );
    }

}
