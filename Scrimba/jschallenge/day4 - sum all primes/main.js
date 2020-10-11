function sumAllPrimes(num) {
    let sum = 0
    const primes = [] // for verification
    for (let i = 2; i <= num; i++) {
        let isPrime = true
        for (let j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
                isPrime = false
            }
        }
        if (isPrime) {
            sum += i
            primes.push(i)
        }
    }
    console.log('sum: ', sum, ' primes: ', primes)
    return sum
}



/**
* Test Suite 
*/
describe('sumAllPrimes()', () => {
    it('adds all prime numbers up to input number', () => {
        // arrange
        const num = 10;
        
        // act
        const result = sumAllPrimes(num);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(17);
    })
});