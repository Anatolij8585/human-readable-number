module.exports = function toReadable (number) {
    let zero = 'zero';
    let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let hundreds = ' hundred';
    let string = number.toString();
    if (number === 0) {
    return zero;
    }
    if (number < 20) {
         return (ones[number]).trim();
    }
    if (string.length === 2) {
        return (tens[string[0]] + ' ' + ones[string[1]]).trim();
    }
    if (string.length == 3) {
        if (string[1] == '0' && string[2] == '0') {
            return (ones[string[0]] + hundreds).trim();
        } else {
        return (ones[string[0]] + hundreds + ' ' + toReadable(+(string[1] + string[2]))).trim();
        }
    }
}