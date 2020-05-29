import { Usuario } from './usuario';

export interface Auth {
	user: Usuario;
	token: string;
}
