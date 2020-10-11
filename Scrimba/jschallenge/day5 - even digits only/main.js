function evenDigitsOnly(number) {
    return number.toString().split('').every(n => parseInt(n, 10) % 2 === 0)
}
// Obs: quando testei com números muito grande não dava certo, por exemplo: 2486220000000000000008

/**
* Test Suite 
*/
describe('evenDigitsOnly()', () => {
    it('returns true when all digits are even', () => {
        // arrange
        const nums = 248622;
        
        // act
        const result = evenDigitsOnly(nums);

        // log
        console.log("result 1 : ", result);
        
        // assert
        expect(result).toBe(true);
    });
    
    it('returns fale when any digits are odd', () => {
        // arrange
        const nums = 642386;
        
        // act
        const result = evenDigitsOnly(nums);

        // log
        console.log("result 2 : ", result);
        
        // assert
        expect(result).toBe(false);
    });
});