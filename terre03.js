const letter = process.argv[2]; // Récupère la lettre en argument
const start = letter.charCodeAt(0); // Obtient le code ASCII de la lettre
let result = "";

for (let i = start; i <= 122; i++) {
  // Parcourt l'alphabet à partir de la lettre n
  result += String.fromCharCode(i);
}

console.log(`${result}`); // Affiche la lettre n plus le reste de l'alphabet
console.log();
