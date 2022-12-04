// Posso tipar com "any" para ser qualquer coisa, mas não é indicado
// Ultilizar ANY em apenas último caso
/* eslint-disable */

function ShowMessage(msg: any) {
  return msg;
}

console.log(ShowMessage([1, 2, 3]));
console.log(ShowMessage('Lilica'));
console.log(ShowMessage(1));