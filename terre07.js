const args = process.argv.slice(2);

if (
  args.length !== 1 ||
  !isNaN(args[0]) ||
  args[0].startsWith('"') ||
  args[0].endsWith('"')
) {
  console.log("Erreur");
} else {
  const arg = args[0];
  console.log(`${arg.length}`);
}
