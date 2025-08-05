function countEvenNumbers(arr) {
    let count = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            count++;
        }
    }
    return count;
}