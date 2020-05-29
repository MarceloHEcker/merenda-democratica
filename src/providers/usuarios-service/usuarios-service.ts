import { Usuario } from './../../modelos/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';
import { Auth } from 'src/modelos/auth';

const KEY = 'user-avatar';

@Injectable()
export class UsuariosServiceProvider {
    private _loggedUser: Usuario;

    private _url: string = 'http://localhost:3333';

    constructor(
        private _http: HttpClient,
        private storage: Storage,
    ) {
    }

    save( usuario: Usuario ) {
        return this._http.post<Usuario>( `${ this._url }/usuarios`, usuario );
    }

    update( usuario: Usuario ) {
        return this._http.put<Usuario>( `${ this._url }/usuarios`, usuario );
    }

    doLogin( email, senha ) {
        return this._http.post<any>( `${ this._url }/sessions`, { email, senha } );
    }


    async isLoggedIn(): Promise<boolean> {
        const loggedUser = await this.storage.get( 'loggedUser' );

        return !!loggedUser;
    }

    async getCurrentUser(): Promise<Usuario> {
        const loggedUser = await this.storage.get( 'loggedUser' );

        return loggedUser ? loggedUser.user : {};
    }

    async getLoggedUserCached(): Promise<Auth> {
        const loggedObject = await this.storage.get( 'loggedUser' );

        return loggedObject;
    }

    async logout() {
        await this.clearUserData();
    }

    private async clearUserData() {
        return this.storage.remove( 'loggedUser' );
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
