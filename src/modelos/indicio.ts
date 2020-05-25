import { Avaliacao } from './avaliacao';

export interface Indicio {
    id: number;
    nomeReportador: string;
    avaliacao: Avaliacao;   
}