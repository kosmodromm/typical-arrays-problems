exports.min = function min(array) {
    if (Array.isArray(array) && array.length !== 0) {
        array.sort((a, b) => a - b);
        return array.shift()
    } else {
        return 0;
    }
}

exports.max = function max(array) {
    if (Array.isArray(array) && array.length !== 0) {
        array.sort((a, b) => a - b);
        return array.pop();
    } else {
        return 0;
    }
}

exports.avg = function avg(array) {
    if (Array.isArray(array) && array.length !== 0) {
        const result = array.reduce((a, b) => a + b);
        return result / array.length;
    } else {
        return 0;
    }
}
