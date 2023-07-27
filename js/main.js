// const firstNumber = parseInt(prompt("inserisci un numero"));

// if (firstNumber % 2 == 0) {
// 	console.log("numero" + firstNumber);
// } else {
// 	console.log("numero" + (firstNumber + 1));
// }

const nomi = ["Marco", "Fabio", "Wender", "Paolo"];
const cognomi = ["Mazzoli", "Alisei", "Giannatempo", "Noise"];

const fintalista = [];

const numeroFintaLista = prompt("Quanti invitati vuoi inserire");

for (let i = 0; i < numeroFintaLista; i++) {
	const randomNomiUser = MathF.loor(Math.random * nomi.length);
	const randomNomi = nomi[randomNomiUser];

	const randomCognomiUser = Math.floor(Math.random * cognomi.length);
	const randomCognomi = cognomi[randomCognomiUser];
}
