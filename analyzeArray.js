function analyzeArray(array) {
    const sum = array.reduce((a,b) => a + b, 0);
    return {
        average: sum/array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    }
}

module.exports = analyzeArray;