// function somar(a, b){
//     return a + b;
// }

// module.exports = somar;
export const somar = (a, b) => a + b;
export const subtrair = (a, b) => a - b;
export const multiplicar = (a, b) => a * b;
export const dividir = (a, b) => a/b;
export const somarNegativos = (a,b) => a + b;
export const DivisãoZero = (a, b) => {
  if (b === 0) 
    return 0
};

export const ehPar = (num) => {
  if (num % 2 === 0) {
    return true;
  }else{
    return false;
    }
};
export const potencia=(base, expoente) => {
    return base ** expoente
};
export const porcentagem = (valor, percentual) => {
    return valor * percentual / 100
};
export const media = (a, b, c) => {
  return (a + b + c) / 3
};