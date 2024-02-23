const removeFromArray = function(array, ...removeVals) {
    return array.filter((val) => !removeVals.includes(val));
};

removeFromArray([1, 2, 3, 4], 3, 2)

// Do not edit below this line
module.exports = removeFromArray;
