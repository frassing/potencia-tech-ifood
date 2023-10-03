// Definir lista de heróis (objetos) com as propriedades nome, vitorias e derrotas
let heroes = [
	{name: "Athen", wins: 134, defeats: 93},
	{name: "Viuan", wins: 82, defeats: 50},
	{name: "Wona", wins: 98, defeats: 72},
	{name: "Eldin", wins: 65, defeats: 18},
	{name: "Ylian", wins: 10, defeats: 4}
]


// Laço de repetição - Para cada herói dentro da lista heroes:
// Vai chamar as funções para calcular o saldo de vitórias, classificar em que nível está e escrever o resultado no console
for (let hero of heroes) {
	let saldo = calcularSaldo(hero.wins, hero.defeats)
	let nivel = classificarNivel(hero.wins)
	escrever(hero.name, saldo, nivel)
}

// retorna a diferença entre as vitórias e derrotas, se o resultado da operação for menor que 0, então retorna que o herói não tem saldo (0)
function calcularSaldo(wins, defeats) {
	let saldo = wins - defeats
	if (saldo < 0) {
		return 0
	}
	return saldo
}

// recebe o número de vitórias e a partir desse dado retorna o nível do herói
function classificarNivel(wins) {
	if (wins <= 10) {
		return "Ferro"
	} else if (wins > 10 && wins <= 20) {
		return "Bronze"
	} else if (wins > 20 && wins <= 50) {
		return "Prata"
	} else if (wins > 50 && wins <= 80) {
		return "Ouro"
	} else if (wins > 80 && wins <= 90) {
		return "Diamante"
	} else if (wins > 90 && wins <= 100) {
		return "Lendário"
	} else {
		return "Imortal"
	}
}

// escreve no console uma mensagem; recebe os dados do herói passados no for loop
function escrever(name, saldo, nivel) {
	console.log(`O herói ${name} tem saldo de ${saldo} e está no nível: ${nivel}`)
}

/* Resultado que deve sair com os dados já existentes:
O herói Athen tem saldo de 41 e está no nível: Imortal
O herói Viuan tem saldo de 32 e está no nível: Diamante
O herói Wona tem saldo de 26 e está no nível: Lendário
O herói Eldin tem saldo de 47 e está no nível: Ouro
O herói Ylian tem saldo de 6 e está no nível: Ferro
*/
