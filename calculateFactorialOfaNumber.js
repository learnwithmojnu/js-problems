function calculateFactorial(number) {
    let factorial = 1;
    for (let i = number; i > 1 ; i--) {
        factorial = factorial*i;  
    }
    return factorial;   
}
console.log(calculateFactorial(5))