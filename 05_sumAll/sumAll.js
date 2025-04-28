const sumAll = function(num1, num2) {
    let sum = 0;
    if (parseInt(num1) >= 0 && parseInt(num2) >= 0 && Number.isInteger(num1) &&
 Number.isInteger(num2)) {
        if (num1 < num2) {
            for (let i = parseInt(num1); i <= parseInt(num2); i++) {
                sum = sum + i;
            } 
        } else if (num1 > num2) {
            for (let j = parseInt(num2); j <= parseInt(num1); j++) {
                sum = sum + j;
            }
        }
    } else {
        return "ERROR";
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
