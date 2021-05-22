// Crie um array que receba 5 itens e exiba no console.

let elementos = ["Terra", "Fogo", "Ar", "Água"]
console.log(elementos)

// Utilize um método para adicionar um nome ao inicio do array.

elementos.unshift("Metal")

// Utilize um método para remover o último nome do array.

elementos.pop()

// Utilize um método para adicionar dois nomes ao fim do array.

elementos.push("Areia", "Relâmpago")

// Utilize um método para remover o primeiro nome do array.
elementos.shift()

// Utilize um método para organizar em ordem crescente o seguinte array:
const numbers = [7,5,6,3,8,9,2,1,4]

numbers.sort(function (c, d){
    return c-d
});
console.log(numbers)

/*SE VC INVERTER OS ELEMENTOS INVERTE-SE A ORDEM, LEMBRANDO QUE É PRA NUMBER

return c-d  */