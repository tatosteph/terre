// Récupérer les arguments de la ligne de commande
const args = process.argv.slice(2);

// Vérifier qu'il y a bien deux arguments
if (args.length !== 2) {
  console.log(
    "Veuillez entrer deux nombres en tant qu'arguments de la ligne de commande."
  );
  process.exit();
}

// Récupérer les deux nombres et les convertir en nombres
const n1 = parseFloat(args[0]);
const n2 = parseFloat(args[1]);

// Vérifier que les nombres sont valides
if (isNaN(n1) || isNaN(n2)) {
  console.log("Les arguments ne sont pas des nombres valides.");
  process.exit();
}
if (n1 < n2) {
  console.log("Erreur");
  process.exit();
}

// Effectuer la division
const reste = n1 % n2;
const resultat = n1 / n2;
const resultatEntier = Math.floor(resultat);

// Afficher le résultat
console.log(`${resultatEntier}`);
console.log(`${reste}`);
