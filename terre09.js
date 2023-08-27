//const args = process.argv.slice(2);

function calculerRacineCarree(nombre) {
  if (nombre < 0) {
    return "Le nombre doit être positif.";
  }

  let estimation = nombre;
  const precision = 0.000001; // Précision souhaitée

  while (Math.abs(estimation * estimation - nombre) > precision) {
    estimation = (estimation + nombre / estimation) / 2;
  }

  return Math.floor(estimation);
}

const args = process.argv.slice(2);
const nombre = parseFloat(args[0]);

const resultat = calculerRacineCarree(nombre);
console.log("La racine carrée de", nombre, "est :", resultat);
