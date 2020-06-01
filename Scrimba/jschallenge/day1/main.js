function addBorder(array) {

    // Get length of first string
    let lengthElement = array[0].length
    let symbol = '*'
    let lineSymbol = symbol.repeat(lengthElement + 2)
    let result;

    // add * at begin and end of each string
    result = array.map(a => {
        return '*' + a + '*'
    })

    result.unshift(lineSymbol)
    result.push(lineSymbol)

    // Print border on console
    console.log(result.join('\n'));

    return result;
}

// Hints:
// concat()     join two or more arrays (var arrFinal = arr1.concat(arr2, arr2))
// unshift()    add new items to the beginning of an array (e retorna o número de elementos)
// push()       adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array

/**
* Test Suite 
*/
describe('addBorder()', () => {
    it('adds a border around entire application', () => {
        // arrange
        const strings = ['abc', 'ded'];

        // act
        const result = addBorder(strings);

        // log
        console.log("result: ", result);

        // assert
        expect(result).toEqual(
            ["*****",
                "*abc*",
                "*ded*",
                "*****"]
        );
    })
});