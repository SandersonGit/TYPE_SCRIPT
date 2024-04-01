// 
// Este código TypeScript demonstra a utilização de diferentes tipos de variáveis e estruturas de dados:

// boolean: Representa valores verdadeiro/falso (true/false).
// number: Representa valores numéricos, tanto inteiros quanto de ponto flutuante.
// string: Representa valores de texto.
// string[] ou Array<string>: Representa um array de strings.
// ReadonlyArray<number>: Representa um array de números somente para leitura.
// Tupla: Uma estrutura de dados que pode conter diferentes tipos de valores em posições específicas.
// any: Representa um tipo que pode ser qualquer coisa.



let estaChovendo: Boolean = false;
estaChovendo = true;

let idade: number = 35;

let altura: number = 1.75;

const nacionalidade: string = "brasileira";

const colegas: string[] = ["sanderson", "melanie", "nacionalidade"];

const tecnologias: Array<string> = ["html", "css", "js"];

const notas: ReadonlyArray<number> = [7, 9, 5, 8];

tecnologias.push("typeScript");

const lista: [nome: string, estudante: boolean, idade: number] = ["sanderson", true, 35];

let idadeDaAna: number | string= "25";
idadeDaAna = 25;

let dadosDaApi: any;
dadosDaApi = "nome";
dadosDaApi = 10;
dadosDaApi = true;




