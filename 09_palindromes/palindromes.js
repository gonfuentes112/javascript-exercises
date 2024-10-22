const palindromes = function (word) {
    const filtered = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    return filtered === filtered.split('').reverse().join('');

};

// Do not edit below this line
module.exports = palindromes;
