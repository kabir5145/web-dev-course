function nice(name) {
    console.log("Hello, " + name + "!");
}
nice("kabir");

function sum(a, b, c = 3) {
    return a + b + c;
}
console.log(sum(3, 4));

const multiply = (x, y) => x * y;
console.log(multiply(5, 6));