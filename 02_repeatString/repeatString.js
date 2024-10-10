const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    res = [];
    for (let i = 0; i < num; i++) {
        res.push(string);
    }
    return res.join("");
};

// Do not edit below this line
module.exports = repeatString;
