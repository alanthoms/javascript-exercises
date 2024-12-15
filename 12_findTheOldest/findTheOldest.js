const findTheOldest = function(array) {
    let result = array.reduce(function(oldest,current){
        let currentYear = current.yearOfDeath || new Date().getFullYear();
        let currentAge = currentYear - current.yearOfBirth;
        
        let oldestYear = oldest.yearOfDeath || new Date().getFullYear();
        let oldestAge = oldestYear - oldest.yearOfBirth;
        
        if( currentAge > (oldestAge)){
            oldest = current;
        }return oldest
    }, array[0]);
    return result;
};

// Do not edit below this line
module.exports = findTheOldest;
