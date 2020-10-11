// Day 3: https://scrimba.com/c/cE9agzt3?utm_source=newsletter&utm_medium=email&utm_campaign=jschallenge_email
// Discord (Scrimba community): https://discord.com/channels/684009642984341525/717250635770101771
// hasOwnProperty(): https://developer.mozilla.org/pt-PT/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
function firstDuplicate(nums) {
    let readNumbers = {}
    let found = -1
    for (let i = 0; i < nums.length; i++) {
        const key = 'key' + nums[i];
        if (readNumbers.hasOwnProperty(key)) {
            found = nums[i]
            break
        } else {
            readNumbers[`key${nums[i]}`] = nums[i];
        }
    }
    return found;
}

// Outras respostas interessantes que encontrei dos colegas

/*
// By awwmicky
function firstDuplicate(nums) {
    let duplicates = nums.filter((v, i) => i !== nums.indexOf(v));
    return (!duplicates.length) ? -1 : duplicates[0];
}

// By olaish
function firstDuplicate(nums) {
    let newArray = [];
    for (let num in nums) {
        if (newArray.hasOwnProperty(nums[num])) {
            return nums[num];
        } else {
            newArray.push(nums[num]);
        }
    }
    return -1;
}
*/

/**
* Test Suite 
*/
describe('firstDuplicate()', () => {
    it('returns first duplicated value', () => {
        // arrange
        const nums = [2, 1, 3, 5, 3, 2];

        // act
        const result = firstDuplicate(nums);

        // log
        console.log("result 1: ", result);

        // assert
        expect(result).toBe(3);
    });

    it('returns -1 when no duplicated values', () => {
        // arrange
        const nums = [2, 1, 3, 5, 4, 6];

        // act
        const result = firstDuplicate(nums);

        // log
        console.log("result 2: ", result);

        // assert
        expect(result).toBe(-1);
    });
});