// Definir variáveis
let heroName = "Kalama"  // Altere para o nome que desejar, que tal "Halle", "Levy", "Fin" ou "Temisa"?
let heroXp = 50000 	// Defina a quantidade de experiência que quiser
let level

// Verificar o nível do herói com base no XP - estruturas condicionais
if (heroXp <= 1000) {
	level = "Ferro"
} else if (heroXp > 1000 && heroXp <= 2000) {
	level = "Bronze"
} else if (heroXp > 2000 && heroXp <= 5000) {
	level = "Prata"
} else if (heroXp > 5000 && heroXp <= 7000) {
	level = "Ouro"
} else if (heroXp > 7000 && heroXp <= 8000) {
	level = "Platina"
} else if (heroXp > 8000 && heroXp <= 9000) {
	level = "Ascendente"
} else if (heroXp > 9000 && heroXp <= 10000) {
	level = "Imortal"
} else {
	level = "Radiante"
}

// Imprime no console o nível do herói
console.log(`O Herói de nome ${heroName} está no nível ${level} com sua experiência de ${heroXp}.`)
