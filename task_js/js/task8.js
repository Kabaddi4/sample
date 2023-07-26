let bottom = 6;

let height = 5;

//関数名あり
function calc_triangle(x, y) {
    return x * y / 2;
}
console.log(calc_triangle(bottom, height));

//関数名なし
var triangle_area = function(num1, num2) {
    let area = num1 * num2 / 2;
    return area;
}

console.log(triangle_area(bottom, height));
