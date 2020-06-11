import { Compra } from './compra';
import { Usuario } from './usuario';

export interface Avaliacao {
    id?: number;
    usuario?: Usuario;
    compra?: Compra;
    status: boolean;
    salvo?: boolean;
    usuario_id?: number;
    compra_id?: number;
}
