import { Usuario } from './../../modelos/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

const KEY = 'user-avatar';

@Injectable()
export class UsuariosServiceProvider {
    private _loggedUser: Usuario;

    constructor( private _http: HttpClient ) {
    }

    save( usuario: Usuario ) {
        return this._http.post<Usuario>( 'http://192.168.0.59:8080/api/usuarios', usuario );
    }

    doLogin( email, password ) {
        return this._http.post<Usuario>( 'http://192.168.0.59:8080/api/login', { email, password } );
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
