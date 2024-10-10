const reverseString = function(string) {
    if (!string) {
        return "";
    }
    return string.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
