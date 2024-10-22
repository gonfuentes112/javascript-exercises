const fibonacci = function(num) {
    if (isNaN(Number(num)) || !isFinite(num) || num < 0){
        return "OOPS";
    }
    if (typeof(num) === 'string') {
        num = Number(num);
    }
    if (num === 0) {
        return 0;
    }
    if (num === 1) {
        return 1;
    };
    const dict = new Map;
    dict.set(0, 1);
    dict.set(1, 1);
    for (let i = 2; i <= num ; i++) {
        dict.set(i, dict.get(i-1) + dict.get(i-2));
    }
    return dict.get(num-1);

};

// Do not edit below this line
module.exports = fibonacci;
