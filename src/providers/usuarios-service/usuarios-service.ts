import { Usuario } from './../../modelos/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

const KEY = 'user-avatar';

@Injectable()
export class UsuariosServiceProvider {
    private _loggedUser: Usuario;

    private _url: string = 'http://localhost:3333';

    constructor( private _http: HttpClient ) {
    }

    save( usuario: Usuario ) {
        return this._http.post<Usuario>( `${ this._url }/usuarios`, usuario );
    }

    doLogin( email, senha ) {
        return this._http.post<Usuario>( `${ this._url }/sessions`, { email, senha } );
    }

    getLoggedUser() {
        return this._loggedUser;
    }

    saveAvatar( avatar ) {
        localStorage.setItem( KEY, avatar );
    }

    getAvatar() {
        return localStorage.getItem( KEY )
            ? localStorage.getItem( KEY )
            : 'assets/img/avatar-padrao.jpg';
    }
}
