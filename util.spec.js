const puppeteer = require('puppeteer');
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

test('should create element with correct text', async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: ['--window-size=1920,1080']
    })
    const page = await browser.newPage();
    await page.goto(
        'http://127.0.0.1:5500/index.html'
    );
    await page.click('input#name');
    await page.type('input#name', 'Andrew');
    await page.click('input#age');
    await page.type('input#age', '32');
    await page.click('#btnAddUser');
    const finalText = await page.$eval('.user-item', el => el.textContent);
    expect(finalText).toBe('Andrew (32 years old)');
}, 10000)