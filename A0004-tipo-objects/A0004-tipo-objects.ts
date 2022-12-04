// Criando Objeto (Melhor forma) (Melhor Design)
const objetoA = {
  chaveA: "Valor A",
  chaveB: "Valor B",
};
// Alterando Objeto

objetoA.chaveB = "Valor C";

// Criando Objeto (Forma para adicionar chave posteriormente)

const objetoB: {
  readonly chave1: string; //Não aceita ser escrita
  chave2: string;
  chave3?: string;
  [key: string]: unknown;
} = {
  chave1: "Valor A",
  chave2: "Valor B",
};
objetoB.chave5 = "Nova chave";

console.log(objetoA);
console.log(objetoB);

// Teste
const login: {
  nome: string;
  senha: number;
} = {
  nome: "vazio",
  senha: 123,
};

login.nome = "Letícia";

console.log(login.nome);
