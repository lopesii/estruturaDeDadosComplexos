// 01 - Crie um array que receba 5 itens e exiba no console.
let listaDePersonagens = ["Hotwells", "Testuda", "Bertola", "Lopes", "T4mis"];
console.log(listaDePersonagens);


// 02 -  Utilize um método para adicionar um nome ao inicio do array.
listaDePersonagens.unshift("Cah");
console.log(listaDePersonagens);


 // 03 - Utilize um método para remover o último nome do array.
listaDePersonagens.pop();
console.log(listaDePersonagens);

//04 - Utilize um método para adicionar dois nomes ao fim do array.
listaDePersonagens.push("Cadu", "Nath");
console.log(listaDePersonagens);


//05 - Utilize um método para remover o primeiro nome do array.
listaDePersonagens.shift();
console.log(listaDePersonagens);


//06 - Utilize um método para organizar em ordem crescente o seguinte array:
let numbers = [7,5,6,3,8,9,2,1,4]
numbers.sort();
console.log(numbers);

//07 - Crie um objeto que receba ao menos três propriedades sobre você.

let meusDados = {
  nome: "Lopes",
  idade: "22 anos",
  altura: 1.70
}

//08 - Adicione uma nova propriedade sem alterar seu objeto inicial.
meusDados.filme = "Hobbit Uma Jornada Inesperada"

// 09 - Remova uma propriedade desse objeto.
delete meusDados.filme;


//10 - Mostre no console todas as propriedades desse objeto.
console.log(meusDados);

// 11- Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 

let cadastro = [
{
  nome: "Bertolin",
  idade: "20 anos",
  telefone: "(21)8888-8888",
  amigos: "Gigi"
},

{
  nome: "Jonathan",
  idade: "23 anos",
  telefone: "(21)7788-8888",
  amigos: "Gisa"
},

{
  nome: "Lopes",
  idade: "22 anos",
  telefone: "(21)3333-8888",
  amigos: "Nath"
},

{
  nome: "Leticia",
  idade: "60 anos",
  telefone: "(21)8222-8888",
  amigos: "Cadu"
},

{
  nome: "Cah",
  idade: "36 anos",
  telefone: "(21)9998-8888",
  amigos: "Nsei"
},
]


console.log(cadastro[0].amigos);
console.log(cadastro[1].amigos);
console.log(cadastro[2].amigos);
console.log(cadastro[3].amigos);
console.log(cadastro[4].amigos);
//12 - Mostre no console o nome de um amigo de cada lista.