/* eslint-disable */

/* Sempre que ver um tipo ANYN significa que o TS não inferiu tipo e aí sim é necessário
tipar */


// Tipos básicos (aqui ocorre inferência de tipos)
// Escrever os tipos já existentes com letra minúscula

let nome: string = 'Arthur'; //Qualquer tipo de strings: '' "" ``

let idade: number = 19; // 10, 1.57, -5.55, 0xf00d 
//QUalquer tipo de número, int, float, hexadecimal...

let adulto: boolean = true; //verdadeiro ou falso

let simbolo: symbol = Symbol ('qualquer-simbolo'); //symbol
// let big: bigint = 10n; // big int

// Arrays

//Forma 1
let arrayDeNumeros1: Array<number> = [1, 2, 3];
//Forma 2
let arrayDeNumeros2: number[] = [1, 2, 3];

//Forma 1
let arrayDeString1: Array<string> = ['Arthur', 'Letícia', 'Lord'];
//Forma 2
let arrayDeString2: string[] = ['A', 'B', 'C'];


// Objetos

let pessoa: {nome: string, idade: number, adulto?: boolean} = {

    nome: 'Arthur',
    idade: 19,
    adulto: true

}


// Funções

function soma1(x: number, y:number){
    return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
