const numberOfString = process.argv[2];
const number = parseInt(numberOfString);

if (isNaN(number)) {
  console.log("Tu ne me la mettras pas à l’envers.");
} else if (number % 2 === 0) {
  console.log("pair");
} else {
  console.log("impair");
}
