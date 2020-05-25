import { Injectable } from '@angular/core';
import { Avaliacao } from './../../modelos/avaliacao';

import { of } from 'rxjs';
import { catchError  } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class AvaliacoesServiceProvider {

    private _url = 'http://192.168.0.59:8080/api';

    constructor(private _http: HttpClient) {
    }


    post(avaliacao: Avaliacao) {
        return this._http.post('http://192.168.0.59:8080/api/avaliacao', avaliacao);   
    }

    get(avaliacaoId: number) {
        return this._http.get<Avaliacao>(`http://192.168.0.59:8080/api/avaliacao/${avaliacaoId}`);   
    }

    index() {
        return this._http.get<Avaliacao[]>(`http://192.168.0.59:8080/api/avaliacao`);   
    }

}