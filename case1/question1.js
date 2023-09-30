const calculate = require("./calculate");

let squareSide = 30;
let rectangleLength = 25;
let rectangleWidth = 20;

// mengcalculate keliling persegi
console.log(
  `Keliling Persegi dengan sisi ${squareSide} adalah : ` +
    calculate.calculateSquarePerimeter(squareSide)
);

// mengcalculate luas persegi
console.log(
  `Luas Persegi dengan sisi ${squareSide} adalah : ` +
    calculate.calculateSquareArea(squareSide)
);

// mengcalculate luas persegi panjang
console.log(
  `Luas Persegi Panjang dengan panjang ${rectangleLength} dan lebar ${rectangleWidth} adalah : ` +
    calculate.calculateRectangleArea(rectangleLength, rectangleWidth)
);

// mengcalculate keliling persegi panjang
console.log(
  `Keliling Persegi Panjang dengan panjang ${rectangleLength} dan lebar ${rectangleWidth} adalah : ` +
    calculate.calculateRectanglePerimeter(rectangleLength, rectangleWidth)
);
