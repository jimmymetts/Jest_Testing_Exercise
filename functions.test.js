const functions = require('./functions');

test('add 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('add 2 + 2 to NOT equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});