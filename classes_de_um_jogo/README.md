# Construindo classes de um jogo
Desafio 3

## ⚔️ Missão
Crie uma classe genérica que represente um herói de uma aventura e que possua as seguintes propriedades:
- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja)

além disso, deve ter um método chamado atacar que deve atender os seguintes requisitos:
- exibir a mensagem: "o {tipo} atacou usando {ataque}"
- em que o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

<table align='center'>
	<thead>
		<tr>
			<th>Tipo</th>
			<th>Ataque</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>mago</td>
			<td>magia</td>
		</tr>
		<tr>
			<td>guerreiro</td>
			<td>espada</td>
		</tr>
		<tr>
			<td>monge</td>
			<td>artes marciais</td>
		</tr>
		<tr>
			<td>ninja</td>
			<td>shuriken</td>
		</tr>
		<tr>
			<td colspan=2>
				se {tipo} o ataque usado foi {ataque}
			</td>
		</tr>
	</tbody>
</table>

## 🏆 Saída
Ao final deve se exibir uma mensagem:
- "o {tipo} atacou usando {ataque}"
- ex.: mago atacou usando magia
- ex.: guerreiro atacou usando espada