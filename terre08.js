const args = process.argv.slice(2);

// Vérifier si deux arguments ont été fournis
if (args.length !== 2) {
  console.log(" fournir deux nombres en tant qu'arguments.");
} else {
  // Convertir les arguments en nombres
  const nombre1 = parseFloat(args[0]);
  const nombre2 = parseFloat(args[1]);

  // Vérifie si les arguments sont des nombres valides
  if (isNaN(nombre1) || isNaN(nombre2)) {
    console.log(" donner des nombres valides en tant qu'arguments.");
  } else {
    const resultat = nombre1 ** nombre2;
    console.log(` ${resultat}`);
  }
}
