import { Usuario } from './usuario';
import { Indicio } from './indicio';

export interface ComentarioIndicio {
    id: number;
    indicio: Indicio;
    comentario: string;
    autor: Usuario;
}