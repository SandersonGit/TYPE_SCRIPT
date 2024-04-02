// O código TypeScript apresenta exemplos de como realizar conversões de tipo de dados, também conhecidas como "type assertions" ou "casting":

// idade: Uma variável inicializada como any, o que permite atribuir a ela qualquer tipo de dado. Em seguida, são feitas tentativas de convertê-la explicitamente para number, string e string[] utilizando as.
// nome: Uma variável do tipo string que é atribuída a um valor numérico usando as unknown as string. Isso força a conversão do tipo de dados, ignorando os erros de compilação.
// Observações:
// as: É uma sintaxe TypeScript usada para realizar conversões de tipo de dados. É semelhante ao casting em outras linguagens.
// unknown: É um tipo introduzido no TypeScript que representa um valor que pode ser qualquer coisa. Usar unknown seguido de as permite uma conversão de tipo mais flexível.


namespace casting{
    let idade: any = 25;
    (idade as number).toFixed();
    (idade as string).length;
    (idade as string[]).push();

    let nome: string =  1 as unknown as string;
    
}
    