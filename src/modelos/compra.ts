export interface Compra {
    id: number;
    ano: number;
    uf: string & { length: 2 };
    municipio: string;
    entidade: string;
    numero_dap: string;
    organico: string & { length: 1 };
    produto: string;
    documento_despesa: string;
    unidade_medida: string;
    quantidade: number;
    valor_unitario: number;
    valor_total: number;
    flag: string;
}
