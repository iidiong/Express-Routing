function stringToNumberArray(str) {
    let numArray = [];
    let valuesArray;
    if(typeof str === 'string'){
        valuesArray = str.split(",");
    }else {
        valuesArray = str;
    }
    for(let i = 0; i < valuesArray.length; i++) {
        numArray.push(parseInt(valuesArray[i]));
    }
    return numArray;
}
function mean(values) {
    let numbers = stringToNumberArray(values)
    
    let sum = 0, i;
    for (i = 0; i < numbers.length; i += 1) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}
function median(values) {
    let numbers = stringToNumberArray(values)
    let median = 0, numsCount = numbers.length;
    numbers.sort();

    if (numsCount % 2 === 0 ) {
        // average of two middle numbers
        median = (numbers[numsCount / 2 - 1] + numbers[numsCount / 2]) / 2;
    } else { 
        median = numbers[(numsCount - 1) / 2];
    }
    return median;
}
function mode(values) {
    let numbers = stringToNumberArray(values);
    let modes = [], count = [], i, number, maxIndex = 0;

    for (i = 0; i < numbers.length; i += 1) {
        number = numbers[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }

    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }

    return modes;
}
// console.log(stringToNumberArray("1,2,3,4"))
console.log(mean("1,2,3,4"))
console.log(mode("3, 5, 4, 4, 1, 1, 2, 3"))

module.exports = { mean, median, mode }