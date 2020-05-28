import { Compra } from './compra';
import { Usuario } from './usuario';

export interface Avaliacao {
    id: number;
    flag: string;
    usuario: Usuario;
    compra: Compra;
    status: boolean;
    horaAvaliacao: Date;
    salvo?: boolean;
}
