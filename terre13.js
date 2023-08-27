const args = process.argv.slice(2);
const numbers = args.map(Number);

// Vérification du nombre de paramètres
if (numbers.length !== 3) {
  console.log("Veuillez fournir trois entiers en tant qu'arguments.");
  process.exit(1);
}

// Vérification si les trois entiers sont égaux
if (numbers[0] === numbers[1] && numbers[1] === numbers[2]) {
  console.log("Erreur : Les trois entiers sont identiques.");
  process.exit(1);
}

// Trouver la valeur du milieu
let middleValue;

if (
  (numbers[0] <= numbers[1] && numbers[1] <= numbers[2]) ||
  (numbers[2] <= numbers[1] && numbers[1] <= numbers[0])
) {
  middleValue = numbers[1];
} else if (
  (numbers[1] <= numbers[0] && numbers[0] <= numbers[2]) ||
  (numbers[2] <= numbers[0] && numbers[0] <= numbers[1])
) {
  middleValue = numbers[0];
} else {
  middleValue = numbers[2];
}

console.log(middleValue);
