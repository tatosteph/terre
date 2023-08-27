const args = process.argv.slice(2);

// Vérifier si l'argument est fourni
if (args.length === 0) {
  console.log("Veuillez fournir une heure au format 12 heures.");
  process.exit(1);
}

// Récupérer l'heure fournie en argument
const inputTime = args[0];

// Séparer les heures, les minutes et la période (AM/PM)
const [timePart, period] = inputTime.split(" ");

// Séparer les heures et les minutes
const [hours, minutes] = timePart.split(":");

// Convertir les heures en entier
const parsedHours = parseInt(hours, 10);

// Vérifier si l'heure est valide
if (isNaN(parsedHours) || parsedHours < 1 || parsedHours > 12) {
  console.log(
    "L'heure fournie est invalide. L'heure doit être entre 1:00 AM et 12:59 PM (format 12 heures)."
  );
  process.exit(1);
}

// Convertir l'heure au format 24 heures
let outputTime = "";
if (period === "AM") {
  if (parsedHours === 12) {
    outputTime = "00:" + minutes;
  } else {
    outputTime = timePart;
  }
} else if (period === "PM") {
  if (parsedHours === 12) {
    outputTime = timePart;
  } else {
    outputTime = parsedHours + 12 + ":" + minutes;
  }
}

// Afficher l'heure convertie
console.log(`L'heure convertie en format 24 heures est : ${outputTime}`);
