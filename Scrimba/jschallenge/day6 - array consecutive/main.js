function makeArrayConsecutive(nums) {
    const min = Math.min(...nums)
    const max = Math.max(...nums)
    const numElementsBetween = nums.length - 2
    const rangeBetween = (max - min) - 1
    const missingElements = rangeBetween - numElementsBetween
    return missingElements
}


/**
* Test Suite 
*/
describe('makeArrayConsecutive()', () => {
    it('returns total missing numbers between smallest and largest number', () => {
        // arrange
        const nums = [6, 2, 3, 8];
        
        // act
        const result = makeArrayConsecutive(nums);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(3);
    })
});