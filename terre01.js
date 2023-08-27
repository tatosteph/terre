//console.log(__filename.slice(__dirname.length + 1));
var scriptPath = __filename;
// Extraire le nom du fichier à partir du chemin
var fileName = scriptPath.substring(scriptPath.lastIndexOf("/") + 1);
// Afficher le nom du fichier
console.log(fileName);
