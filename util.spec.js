const { generateText, checkAndGenerate } = require('./util');

test('should output name and age', () => {
    const text = generateText('Andrew', 32);
    expect(text).toBe('Andrew (32 years old)');
    const text2 = generateText('Farrell', 23);
    expect(text2).toBe('Farrell (23 years old)');
});

test('should output data-less text', () => {
    const text = generateText('', null);
    expect(text).toBe(" (null years old)")
});

test('should generate a valid text output', () => {
    const text = checkAndGenerate('Andrew', 32);
    expect(text).toBe('Andrew (32 years old)')
});