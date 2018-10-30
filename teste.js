const input = [1,5,9,4,2,6,7,8,3,10];

// ordenar

function sort(a, b){
	return (a - b)
}
input.sort(sort);

console.log('lista completa ordenada',input);

const par = [];
const impar = [];


// popular array de pares
// popular array de impares

for (let numero in input){
    if (numero%2 == 0 ) {
        par.push(numero)
    }else{
        impar.push(numero);
    }
}

console.log('pares', par);
console.log('impares', impar);