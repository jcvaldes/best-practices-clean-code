(() => {
  const redFruits = ["manzana", "cereza", "ciruela"];
  function isRedFruit(fruitName: string): boolean {
    // buena
    // if (!redFruits.includes(fruitName)) return false;
    // return true;
    // mejor
    return redFruits.includes(fruitName);
  }

  type FruitColor = "red" | "purple" | "yellow";
  function getFruitsByColor(color: FruitColor): string[] {
    const fruitsByColor = {
      red: ["manzana", "cereza"],
      purple: ["ciruela", "uvas"],
      yellow: ["banana", "piña"],
    };
    if (!Object.keys(fruitsByColor).includes(color)) {
      throw Error("the color must be: red, yellow, purple");
    }
    return fruitsByColor[color];
    // switch (color) {
    //   case "red":
    //     return ["manzana", "fresa"];
    //   case "yellow":
    //     return ["piña", "banana"];
    //   case "purple":
    //     return ["moras", "uvas"];
    //   default:
    //     throw Error("the color must be: red, yellow, purple");
    // }
  }

  // Simplificar esta función
  let isFirstStepWorking = true;
  let isSecondStepWorking = true;
  let isThirdStepWorking = true;
  let isFourthStepWorking = false;

  function workingSteps() {
    if (!isFirstStepWorking) return "First step broken.";
    if (!isSecondStepWorking) return "Second step broken.";
    if (!isThirdStepWorking) return "Third step broken.";
    if (!isFourthStepWorking) return "Fourth step broken.";
    return "Working properly!";
  }

  // isRedFruit
  console.log({ isRedFruit: isRedFruit("cereza"), fruit: "cereza" }); // true
  console.log({ isRedFruit: isRedFruit("piña"), fruit: "piña" }); // true

  //getFruitsByColor
  console.log({ redFruits: getFruitsByColor("red") }); // ['manzana', 'fresa']
  console.log({ yellowFruits: getFruitsByColor("yellow") }); // ['piña', 'banana']
  console.log({ purpleFruits: getFruitsByColor("purple") }); // ['moras', 'uvas']
  // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

  // workingSteps
  console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados
})();
