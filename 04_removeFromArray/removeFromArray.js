const removeFromArray = function(array, ...removedValues) {
    let result = array;
    for (const value of removedValues) {
        result = result.filter((arrayValue) => arrayValue !== value);
    }
    return result;
};
// Do not edit below this line
module.exports = removeFromArray;
