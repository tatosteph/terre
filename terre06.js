/*const args = process.argv.slice(2);
const reversedString = args[0].split("").reverse().join("");
console.log(reversedString);*/

const args = process.argv.slice(2);
if (args.length > 0) {
  const originalString = args[0];
  let reversedString = "";
  for (let i = originalString.length - 1; i >= 0; i--) {
    reversedString += originalString[i];
  }
  console.log(reversedString);
} else {
  console.log("Aucun argument fourni.");
}
