const findTheOldest = function(array) {
    let sortedArray = array.sort((element1, element2) => {
        const currentYear = new Date().getFullYear();
        const deathYear1 = element1.yearOfDeath || currentYear;
        const deathYear2 = element2.yearOfDeath || currentYear;
        const age1 = deathYear1 - element1.yearOfBirth;
        const age2 = deathYear2 - element2.yearOfBirth;
        return age2 - age1;
    });
    console.log(sortedArray);

    return sortedArray[0];
};

function getAge(person) {
    return person.yearOfDeath - person.yearOfBirth
}

// Do not edit below this line
module.exports = findTheOldest;
