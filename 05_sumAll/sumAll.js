const sumAll = function(num1, num2) {
    if (!(typeof (num1) === "number") || !(typeof (num2) === "number") ||
        !(Number.isInteger(num1)) || !(Number.isInteger(num2)) ||
        num1 < 0 || num2 < 0) {
        return "ERROR";
    };
    const start = Math.min(num1, num2);
    const end = Math.max(num1, num2);
    const initialValue = 0;
    const range = Array.from({ length: end - start + 1 }, (_, index) => start + index);
    return range.reduce((accumulator, currentValue) => accumulator + currentValue,
        initialValue,);
};

// Do not edit below this line
module.exports = sumAll;
