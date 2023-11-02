export type DueItem = {
  id: number;
  item: number;
  nfe_chave: string;
  nfe_numero: string | null;
  nfe_serie: string | null;
  nfe_item: number,
  ncm: string;
  vmle: number | null,
  vmle_moeda: number | null,
  vmcv: number | null,
  vmcv_moeda: number | null,
  peso_liquido: number | null,
  enquadramento1: string | null;
  enquadramento2: string | null,
  enquadramento3: string | null,
  enquadramento4: string | null,
  descricao_complementar: string;
};

export type Due = {
  id: number;
  declarante_cpf_cnpj: string;
  declarante_razao_social: string;
  identificacao: string;
  numero: string;
  moeda: number;
  incoterm: string;
  informacoes_complementares: string | null;
  total_vmle_moeda: number | null;
  total_vmcv_moeda: number | null;
  total_peso_liquido: number | null;
  due_itens: DueItem[];
};

export type DueJson = {
  numero: string;
  ruc: string | null;
  identificacao: string;
  declarante_cpf_cnpj: string;
  declarante_razao_social: string;
  moeda: string;
  incoterm: string;
  pais_destino: string | null;
  despacho_rfb: string | null;
  despacho_em_recinto: number | null;
  despacho_recinto: string | null;
  embarque_rfb: string | null;
  embarque_em_recinto: number | null;
  embarque_recinto: string | null;
  informacoes_complementares: string | null;
  importador_nome: string | null;
  importador_pais: string | null;
  importador_endereco: string | null;
  due_itens: DueItem[];
};