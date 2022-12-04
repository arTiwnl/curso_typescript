function semRetorno(...args: string[]): void {
  console.log(args.join(" "));
}
const pessoa = {
  nome: "Arthur",
  sobrenome: "Carvalho",

  exibirNome(): void {
    console.log(this.nome + " " + this.sobrenome);
  },
};

semRetorno("Arthur", "Silva");
export { pessoa };
