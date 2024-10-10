const removeFromArray = function(arr, ...targets) {
    if (!targets) {
        return arr;
    };
    return arr.filter(item => !targets.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
