import { Injectable } from '@angular/core';
import { Preco } from './../../modelos/preco';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class PrecosServiceProvider {

	private _url = 'http://localhost:3333';

	constructor( private _http: HttpClient ) {
	}

	post( preco: Preco ) {
		return this._http.post( `${ this._url }/precos`, preco );
	}
}
