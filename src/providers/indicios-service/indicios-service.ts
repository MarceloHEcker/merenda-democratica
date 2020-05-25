import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Indicio } from './../../modelos/indicio';


@Injectable()
export class IndiciosServiceProvider {

    constructor(private _http: HttpClient) {
    }

    index() {
        return this._http.get<Indicio[]>('http://192.168.0.59:8080/api/carro/listaTodos');
    }

}
