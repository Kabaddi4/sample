//課題1
let apple = {
    color: "red",
    size: "big",
    weight: 5
}

let orrange = {
    color: "orrange",
    size: "small",
    weight: 3
}

let grape = {
    color: "purple",
    size: "normal",
    weight: 11
}

//課題2
let fruit = [apple, orrange, grape];

//課題3
let calc_height = 0;
fruit.forEach(e => {
    calc_height += e.weight;
})
console.log(calc_height);
