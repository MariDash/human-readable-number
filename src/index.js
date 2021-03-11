module.exports = function toReadable(n) {
    let arr1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    let arr11 = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arr10 = ['', 'zero', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let numberStr = '' + n;
    let numberArray = numberStr.split('');
    if (n >= 100) {
        if (numberArray[1] == 0 && numberArray[2] == 0) {
            return `${arr1[numberArray[0]]} hundred`;
        } else if (numberArray[1] == 1 && numberArray[2] == 0) {
            return `${arr1[numberArray[0]]} hundred ten`;
        }
        else if (numberArray[1] == 1) {
            return `${arr1[numberArray[0]]} hundred ${arr11[numberArray[2]]}`;
        } else if (numberArray[1] == 0) {
            return `${arr1[numberArray[0]]} hundred ${arr1[numberArray[2]]}`;
        } else if (numberArray[2] == 0) {
            return `${arr1[numberArray[0]]} hundred ${arr10[numberArray[1]]}`;
        } else { return `${arr1[numberArray[0]]} hundred ${arr10[numberArray[1]]} ${arr1[numberArray[2]]}`; }
    } else if (n >= 20 && n <= 100) {
        if (numberArray[1] == 0) {
            return arr10[numberArray[0]];
        } else {
            return `${arr10[numberArray[0]]} ${arr1[numberArray[1]]}`;
        }
    } else if (n > 10 && n < 20) {
        return arr11[numberArray[1]];
    } else { return arr1[n]; }
}