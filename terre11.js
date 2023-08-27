const args = process.argv.slice(2);

// Vérifier si l'argument est fourni
if (args.length === 0) {
  console.log("Veuillez fournir une heure au format 24 heures.");
  process.exit(1);
}

// Récupérer l'heure fournie en argument
const inputTime = args[0];

// Séparer les heures et les minutes
const [hours, minutes] = inputTime.split(":");

// Convertir les heures en entier
const parsedHours = parseInt(hours, 10);

// Vérifier si l'heure est valide
if (isNaN(parsedHours) || parsedHours < 0 || parsedHours > 23) {
  console.log(
    "L'heure fournie est invalide. L'heure doit être entre 00:00 et 23:59 (format 24 heures)."
  );
  process.exit(1);
}

// Convertir l'heure au format 12 heures
let outputTime = "";
let period = "AM";

if (parsedHours === 0) {
  outputTime = "12:" + minutes;
} else if (parsedHours === 12) {
  outputTime = "12:" + minutes;
  period = "PM";
} else if (parsedHours > 12) {
  outputTime = parsedHours - 12 + ":" + minutes;
  period = "PM";
} else {
  outputTime = parsedHours + ":" + minutes;
}

// Afficher l'heure convertie
console.log(
  `L'heure convertie en format 12 heures est : ${outputTime} ${period}`
);
