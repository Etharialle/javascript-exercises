const removeFromArray = function(array, ...removedValues) {
    let result = array;
    for (const value of removedValues) {
        result = result.filter((arrayValue) => arrayValue !== value);
    }
    return result;
};
console.log(removeFromArray([1, 2, 3, 4], 3, 2))
// Do not edit below this line
module.exports = removeFromArray;
