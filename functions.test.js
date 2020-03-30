const functions = require('./functions');

test('add 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

//CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// tonBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false