const findTheOldest = function(people) {
    let oldest = people.sort(function (personA, personB){
        if(typeof personA.yearOfDeath == 'undefined' || personA.yearOfDeath == null){
            personA.yearOfDeath = new Date().getFullYear();
        }
        if(typeof personB.yearOfDeath == 'undefined' || personB.yearOfDeath == null){
            personB.yearOfDeath = new Date().getFullYear();
        }
        return  (personB.yearOfDeath - personB.yearOfBirth) - (personA.yearOfDeath - personA.yearOfBirth);
    });
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
