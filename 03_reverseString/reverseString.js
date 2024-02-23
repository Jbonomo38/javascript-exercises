const reverseString = function(string) {
    let returnString = '';
    let indexNum = string.length;

    while(indexNum >= 0) {
        returnString += string.charAt(indexNum);
        indexNum--;
    }

    console.log(returnString);

    return returnString;
};

reverseString("sample");

// Do not edit below this line
module.exports = reverseString;
