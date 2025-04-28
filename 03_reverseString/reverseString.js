const reverseString = function(words) {
    let word = '';
    for (i = words.length - 1; i >=0; i--) {
        word = word + words[i];
    }
    return word;
};

console.log(reverseString('hello'));

// Do not edit below this line
module.exports = reverseString;
