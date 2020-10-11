function properNounCorrection(str) {
    let firstChar = str.slice(0, 1)
    let remainChars = str.slice(1, str.length)
    firstChar = firstChar.toUpperCase()
    remainChars = remainChars.toLowerCase()
    return firstChar.concat(remainChars)

    // Option to do all in one line
    // return str.slice(0, 1).toUpperCase().concat(str.slice(1, str.length).toLowerCase())
}


/**
* Test Suite 
*/
describe('properNounCorrection()', () => {
    it('adds proper noun capitalization', () => {
        // arrange
        const str = 'pARiS';

        // act
        const result = properNounCorrection(str);

        // log
        console.log("result 1: ", result);

        // assert
        expect(result).toBe('Paris');
    });

    it('properly cased words are still correct', () => {
        // arrange
        const str = 'John';

        // act
        const result = properNounCorrection(str);

        // log
        console.log("result 2: ", result);

        // assert
        expect(result).toBe('John');
    });
});