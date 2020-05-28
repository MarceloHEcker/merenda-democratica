import { Injectable } from '@angular/core';
import { Compra } from './../../modelos/compra';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class ComprasServiceProvider {

	private _url = 'http://localhost:3333';

	constructor( private _http: HttpClient ) {
	}

	post( compra: Compra ) {
		return this._http.post( `${ this._url }/compras`, compra );
	}

	get( compraId: number ) {
		return this._http.get<Compra>( `${ this._url }/compras/${ compraId }` );
	}

	getRandom() {
		return this._http.get<Compra>( `${ this._url }/compras/random` );
	}

	index() {
		return this._http.get<Compra[]>( `${ this._url }/compras` );
	}

}
