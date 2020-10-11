// Day 2: https://scrimba.com/c/crGw4Gcm?utm_source=newsletter&utm_medium=email&utm_campaign=jschallenge_email
function addTwoDigits(num)  {
    //  Functions used: split, parseInt, toString, reduce
    // This code applay for any number length. Example: the number 123 will result = 6 (1 + 2 + 3 = 6)
    const nums = num.toString().split('')
    const result = nums.reduce((accum, num) => {
        return parseInt(accum) + parseInt(num) 
    })
    return result
}



/**
* Test Suite 
*/
describe('addTwoDigits()', () => {
    it('take a two digit number and return the sum of their numbers', () => {
       // arrange
        const num = 29;
        
        // act
        const result = addTwoDigits(num);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(11);
    });
});