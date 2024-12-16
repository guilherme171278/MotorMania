function calcularSoma(arrayNumeros) {
    let somaTotal = 0;
    for (let i = 0; i < arrayNumeros.length; i++) {
        somaTotal += arrayNumeros[i];
    }
    return somaTotal;
}

let numeros = [1, 2, 3, 4, 5];
console.log(calcularSoma(numeros));