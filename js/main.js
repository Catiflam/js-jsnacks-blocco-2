// 1 SNAKE

// const firstNumber = parseInt(prompt("inserisci un numero"));

// if (firstNumber % 2 == 0) {
// 	console.log("numero" + firstNumber);
// } else {
// 	console.log("numero" + (firstNumber + 1));
// }

// 2 SNAKE

// const nomi = ["Marco", "Fabio", "Wender", "Paolo"];
// const cognomi = ["Mazzoli", "Alisei", "Giannatempo", "Noise"];

// const fintiInvitati = [];

// const numeroFintiInvitati = parseInt(prompt("Quanti  finti invitati vuoi inserire"));

// for (let i = 0; i < numeroFintiInvitati; i++) {
// 	const randomNomiUser = Math.floor(Math.random * nomi.length);
// 	const randomNomi = nomi[randomNomiUser];

// 	const randomCognomiUser = Math.floor(Math.random * cognomi.length);
// 	const randomCognomi = cognomi[randomCognomiUser];

// 	const fintoInvitato = randomNomi + "" + randomCognomi;

// 	if (!fintiInvitati.includes(fintoInvitato)) {
// 		fintiInvitati.push(fintoInvitato);
// 	}
// }
// console.table(fintiInvitati);

// // 3 SNAKE

const number = [8, 4, 5, 72, 1, 2, 9, 87, 46];

let som = 0;

for (let i = 0; i < number.length; i++) {
	const currentNumber = number[i];
	console.log(currentNumber);

	if (i % 2 != 0) {
		som += currentNumber;
	}
}

console.log("totale" + som);
