/*let args = ["je", "suis", "solide", "!"];
for (let i = 0; i < args.length; i++) {
  console.log(args[i]);
}*/

let args = process.argv.slice(2);
for (let i = 0; i < args.length; i++) {
  console.log(args[i]);
}
