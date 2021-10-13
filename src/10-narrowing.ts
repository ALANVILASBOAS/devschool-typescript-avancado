// Narrowing ou Afunilamento é a capacidade do Typescript em analisar seu código
// e afunilar o tipo de uma variável em um tipo mais específico

function double(x: number | string): number | string {
    if (typeof x === 'number') {
        return x * 2; // x aqui é um número
    } else {
        return (Number(x) * 2).toString(); // x aqui é uma string
    }
}
