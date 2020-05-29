import { Avaliacao } from './avaliacao';

export interface Comentario {
    id: number;
    comentario: string;
    avaliacao: Avaliacao;
}
