const args = process.argv.slice(2);

function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

if (args.length === 0) {
  console.log("Veuillez fournir une liste d'entiers en arguments.");
} else {
  const intArray = args.map((arg) => {
    const parsedInt = parseInt(arg);

    if (!Number.isInteger(parsedInt)) {
      console.error(`La valeur "${arg}" n'est pas un entier.`);
      process.exit(1);
    }
    return parsedInt;
  });

  if (isSorted(intArray)) {
    console.log("La liste est triée.");
  } else {
    console.log("La liste n'est pas triée.");
  }
}
