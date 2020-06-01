import { Injectable } from '@angular/core';
import { Previsao } from 'src/modelos/previsao';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class PrevisoesServiceProvider {

	private _url = 'http://localhost:3333';

	constructor( private _http: HttpClient ) {
	}

	index() {
		return this._http.get<Previsao[]>( `${ this._url }/previsoes` );
	}

	indexCompra( payload ) {
		return this._http.post<Previsao[]>( `${ this._url }/previsoes/compra`, payload );
	}

}
