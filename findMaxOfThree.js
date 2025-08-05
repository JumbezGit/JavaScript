function findMaxOfThree(num1, num2, num3) {
    let max = num1;
    if (num2 > max) {
        max = num2;
    }
    if (num3 > max) {
        max = num3;
    }
    console.log(`Largest number is: ${max}`);
}