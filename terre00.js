/*let alphabet = 97;
for (let i = alphabet; i <= 122; i++) {
  console.log(String.fromCharCode(i));
  console.log();
}*/
let alphabet = 97;
let alphabetString = "";
for (let i = alphabet; i <= 122; i++) {
  alphabetString += String.fromCharCode(i);
}
console.log(alphabetString);
console.log();
