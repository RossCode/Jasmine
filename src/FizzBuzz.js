function FizzBuzz() { }

FizzBuzz.prototype.getOutput = function(input) {
    var output = '';
    if (input % 3 === 0) output += "fizz";
    if (input % 5 === 0) output += "buzz"; 
    if (output.length === 0) output = input.toString();
    return output;
};
