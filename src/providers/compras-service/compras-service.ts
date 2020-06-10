import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Compra } from './../../modelos/compra';

@Injectable()
export class ComprasServiceProvider {

	private _url = 'http://localhost:3333';

	constructor( private _http: HttpClient ) {
	}

	index() {
		return this._http.get<Compra[]>( `${ this._url }/compras` );
	}

	get( compraId: number ) {
		return this._http.get<Compra>( `${ this._url }/compras/${ compraId }` );
	}

	getRandom() {
		return this._http.get<Compra>( `${ this._url }/compras/random` );
	}

	getMunicipiosProximos(orderId) {
		return this._http.get<any[]>
			(`${ this._url }/compras/${orderId}/municipios-proximos` );
	}

}
