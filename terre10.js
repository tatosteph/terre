const nPremier = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const args = process.argv.slice(2);
const number = parseInt(args[0]);

if (isNaN(number)) {
  console.log("Veuillez fournir un nombre valide en argument.");
} else {
  const result = nPremier(number);
  if (result) {
    console.log(`${number} est un nombre premier.`);
  } else {
    console.log(`${number} n'est pas un nombre premier.`);
  }
}
