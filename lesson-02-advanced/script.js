const num = 266219;
const digits  = num.toString().split('');
let result = 1;
let degree;

for (let i = 0; i < digits.length; i++) {
    result *= parseInt(digits[i]);
}
degree = result ** 3;

console.log(degree.toString().substring(0, 2));
