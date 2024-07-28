const capitalize = require('./capitalize');
const reverseString = require('./reverseString');
const Calculator = require('./calculator');
const calculator = new Calculator();
const caesarCipher = require('./casesarCipher');
const analyzeArray = require('./analyzeArray');

test('capitalize(apple)', () => {
    expect(capitalize('apple')).toBe('Apple');
});

test('reverseString(apple)', () => {
    expect(reverseString('apple')).toBe('elppa');
});

test('add 1 + 1', () => {
    expect(calculator.add(1, 1)).toBe(2);
});

test('subtract 1 - 1', () => {
    expect(calculator.subtract(1 , 1)).toBe(0);
});

test('multiply 1 * 1', () => {
    expect(calculator.multiply(1, 1)).toBe(1);
});

test('divide 1 / 1', () => {
    expect(calculator.divide(1, 1)).toBe(1);
});

test('caesarCipher(apple, 5)', () => {
    expect(caesarCipher('zap an apple for you', 5)).toBe('efu fs fuuqj ktw dtz');
});

test('analyzeArray(1,8,3,4,2,6])', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
})
});