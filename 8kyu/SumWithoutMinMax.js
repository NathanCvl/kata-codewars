function sumArray(array) {
    if (array === null ||  array === undefined || array.length <= 1) {
        return 0;
    }
    let min = Math.min.apply(null, array);
    let max = Math.max.apply(null, array);
    let sum = 0;
    for (const item of array) {
        sum += item;
    }
    return sum - min - max;
}