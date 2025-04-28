const removeFromArray = function(list, num1, num2, num3, num4) {
    for (let i = 0; i <= list.length + 1; i++) {
        index1 = list.indexOf(num1);
        if (index1 > -1) {
            list.splice(index1, 1);
        }
        index2 = list.indexOf(num2);
        if (index2 > -1) {
            list.splice(index2, 1);
        }
        index3 = list.indexOf(num3);
        if (index3 > -1) {
            list.splice(index3, 1);
        }
        index4 = list.indexOf(num4);
        if (index4 > -1) {
            list.splice(index4, 1);
        }
    }
    return list;
};


// Do not edit below this line
module.exports = removeFromArray;
