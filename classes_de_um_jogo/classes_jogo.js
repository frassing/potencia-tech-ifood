// definir classe genérica com propriedades e métodos
class Hero {
	// construtor é utilizado na hora de instanciar um novo objeto dessa classe
	constructor(name, age, type) {
		this.name = name
		this.age = age
		this.type = type
	}

	// método que o herói possui para a batalha
	atacar() {
		// chama a função que define o tipo de ataque do personagem e armazena em "ataque"
		let ataque = this.definirAtaque()
		// exibe a mensagem de ataque
		let mensagem = `O ${this.type} ${this.name} atacou usando ${ataque}`
		console.log(mensagem)
	}

	// define o tipo de habilidade que o herói terá para usar no ataque
	definirAtaque() {
		let tipoAtaque = ''
		switch (this.type) {
			case 'mago':
				tipoAtaque = 'magia'
				break
			case 'guerreiro':
				tipoAtaque = 'espada'
				break
			case 'monge':
				tipoAtaque = 'artes marciais'
				break
			case 'ninja':
				tipoAtaque = 'shuriken'
				break
			default:
				tipoAtaque = 'carta de habilidade oculta'
		}
		return tipoAtaque
	}
}

// Instanciando novos objetos
let teshima = new Hero('Teshima', 27, 'guerreiro')
let rina = new Hero('Rina', 42, 'monge')
let lunit = new Hero('Lunit', 16, 'mago')

// Usando o método de atacar com cada herói
teshima.atacar()
rina.atacar()
lunit.atacar()
