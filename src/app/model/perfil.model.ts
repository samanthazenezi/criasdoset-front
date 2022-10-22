import { Solicitacao } from "./solicitacao.model";

export class Perfil {
    id: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    sector: string;
    role: string;
    orders: Solicitacao[];
    token?: string;
}