function StringCalculator() { }

StringCalculator.prototype.add = function(numbers) {
    if (numbers === null) {
        return 0;
    }
    
    var parts;
    if (numbers.indexOf('//') === 0) {
        var delimiter = numbers.substring(2,3);
        var numbersPart = numbers.substring(4);
        parts = numbersPart.split(delimiter);
    } else {
        parts = numbers.split(/[\n,]/);
    }
    var result = 0;

    var negatives = new Array();
    for(var index in parts) {
        var parsedPart = parseInt(parts[index]);
        if (parsedPart < 0) negatives[negatives.length] = parts[index];
        result += parsedPart;
    }

    if (negatives.length > 0) {
        var message = "negatives not allowed: ";
        for (var negative in negatives) {
            message += negatives[negative] + " ";
        }
        throw message;
    }

    return result;
};
