// Fungsi untuk menghitung luas persegi
function calculateSquarePerimeter(side) {
  return side * 4;
}

// Fungsi untuk menghitung keliling persegi
function calculateSquareArea(side) {
  return side * side;
}

// Fungsi untuk menghitung luas persegi panjang
function calculateRectangleArea(length, width) {
  return length * width;
}

// Fungsi untuk menghitung keliling persegi panjang
function calculateRectanglePerimeter(length, width) {
  return 2 * (length + width);
}

module.exports.calculateSquareArea = calculateSquareArea;
module.exports.calculateSquarePerimeter = calculateSquarePerimeter;
module.exports.calculateRectangleArea = calculateRectangleArea;
module.exports.calculateRectanglePerimeter = calculateRectanglePerimeter;
