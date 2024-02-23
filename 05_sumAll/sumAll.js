const sumAll = function(numOne, numTwo) {
    if(!Number.isInteger(numOne) || !Number.isInteger(numTwo)) return 'ERROR';
    
    let max = Math.max(numOne, numTwo);
    let min = Math.min(numOne, numTwo);

    if(min < 0 || max < 0) return 'ERROR';
    
    if(min + 1 === max) {
        return min + max;
    }
    return min + sumAll(min + 1, max);
};

// Do not edit below this line
module.exports = sumAll;
