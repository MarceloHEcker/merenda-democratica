import { Compra } from './compra';

export interface Avaliacao {
    id: number;
    compra: Compra;
    status: boolean; 
    horaAvaliacao: Date;
    salvo?: boolean;
}