const findTheOldest = function(arr) {
    function age(person) {
        let yearOfDeath = person.yearOfDeath
        if (!yearOfDeath) {
            const timestamp = Date.now();
            const date = new Date(timestamp);
            yearOfDeath = date.getFullYear();
        }
        return yearOfDeath - person.yearOfBirth;
    }

    return arr.reduce((current, next) => {
        return age(current) > age(next) ? current : next;
    })

};

console.log(findTheOldest([
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]));

// Do not edit below this line
module.exports = findTheOldest;
