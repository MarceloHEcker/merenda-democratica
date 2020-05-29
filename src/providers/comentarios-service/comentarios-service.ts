import { Injectable } from '@angular/core';
import { Comentario } from './../../modelos/comentario';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class ComentariosServiceProvider {

	private _url = 'http://localhost:3333';

	constructor( private _http: HttpClient ) {
	}

	post( comentario: Comentario ) {
		return this._http.post( `${ this._url }/comentario`, comentario );
	}

	get( comentarioId: number ) {
		return this._http.get<Comentario>( `${ this._url }/comentarios/${ comentarioId }` );
	}

	getByOrder(compraId: number) {
		return this._http.get<Comentario[]>( `${ this._url }/comentarios/${compraId}/compra` );
	}

	index() {
		return this._http.get<Comentario[]>( `${ this._url }/comentarios` );
	}

}
