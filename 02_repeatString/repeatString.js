const repeatString = function(string, num) {
    let result = '';
    if (num < 0) {
        result = 'ERROR';
    } else {
        for (let i = 0; i < num; i++) {
            result += string;
        }
    }
    return result;
}

const number = function() {
    Math.floor(Math.random() * 1000);
}

console.log(repeatString('hey', 3));
console.log(repeatString('hello', 10));
console.log(repeatString('hi', 1));
console.log(repeatString('bye', 0));
console.log(repeatString('goodbye', -1));
console.log(repeatString('', 10));
console.log(repeatString('hey', number));

// Do not edit below this line
module.exports = repeatString;
