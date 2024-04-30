const sumAll = function(startValue, endValue) {
    let result = 0;
    if (startValue > endValue) {
        endValue = [startValue, startValue = endValue][0];
    }
    if (startValue < 0 || endValue < 0) {
        return 'ERROR';
    }
    if (typeof startValue !== 'number' || typeof endValue !== 'number') {
        return 'ERROR';
    }
    const range = (startValue, endValue, step) => Array.from({ length: (endValue - startValue) / step + 1 }, (_, i) => startValue + i * step);
    let sumArray = range(startValue, endValue, 1);
    for (const i of sumArray) {
        result = result + i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
