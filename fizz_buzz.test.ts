import * as color from './color';
import { convert, sequence, decorate } from './fizz_buzz';

describe('convert', () => {
    describe('should return orginal input when number cann\'t be divisible by three or five', () => {
        [2, -1, NaN, Infinity, undefined, null, 1.1, 1/3, {}, true].forEach(ordinal => {
            test(`${ordinal}`, () => {
                const result = convert(ordinal as number);
                expect(result).toEqual(ordinal);
            });
        });
    });

    describe('should return "Fizz" when number can be divisible by three', () => {
        [3, 12, 111, -3].forEach(ordinal => {
            test(`${ordinal}`, () => {
                const result = convert(ordinal);
                expect(result).toEqual('Fizz');
            });
        });
    });

    describe('should return "Fizz" when number contains 3', () => {
        [31, 13, 131, -31].forEach(ordinal => {
            test(`${ordinal}`, () => {
                const result = convert(ordinal);
                expect(result).toEqual('Fizz');
            });
        });
    });

    describe('should return "Buzz" when number can be divisible by Five', () => {
        [5, 10, 110, -5].forEach(ordinal => {
            test(`${ordinal}`, () => {
                const result = convert(ordinal);
                expect(result).toEqual('Buzz');
            });
        });
    });

    describe('should return "Buzz" when number contains 5', () => {
        [56, 152, -151].forEach(ordinal => {
            test(`${ordinal}`, () => {
                const result = convert(ordinal);
                expect(result).toEqual('Buzz');
            });
        });
    });

    describe('should return "FizBuzz" when number can be divisible by both Three and Five', () => {
        [0, 15, -45].forEach(ordinal => {
            test(`${ordinal}`, () => {
                const result = convert(ordinal);
                expect(result).toEqual('FizzBuzz');
            });
        });
    });

    describe('should return "FizBuzz" when number contains both 3 and 5', () => {
        [53].forEach(ordinal => {
            test(`${ordinal}`, () => {
                const result = convert(ordinal);
                expect(result).toEqual('FizzBuzz');
            });
        });
    });

    describe('should return "FizBuzz" when number contains 5 and can be divisible by 3', () => {
        [51].forEach(ordinal => {
            test(`${ordinal}`, () => {
                const result = convert(ordinal);
                expect(result).toEqual('FizzBuzz');
            });
        });
    });

    describe('should return "FizBuzz" when number contains 3 and can be divisible by 5', () => {
        [35].forEach(ordinal => {
            test(`${ordinal}`, () => {
                const result = convert(ordinal);
                expect(result).toEqual('FizzBuzz');
            });
        });
    });
});

describe('sequence', () => {
    const _log = console.log;
    const logMock = jest.fn();
    beforeAll(() => {
        console.log = logMock;
    });

    afterEach(() => {
        console.log = _log;
        logMock.mockClear();
    });

    test('should print a sequence', () => {
        sequence(15);
        expect(logMock.mock.calls.map(a => a[0])).toMatchObject([
            '\x1b[0;31m1\x1b[0m',
            '\x1b[0;34m2\x1b[0m',
            '\x1b[0;31mFizz\x1b[0m',
            '\x1b[0;34m4\x1b[0m',
            '\x1b[0;31mBuzz\x1b[0m',
            '\x1b[0;34mFizz\x1b[0m',
            '\x1b[0;31m7\x1b[0m',
            '\x1b[0;34m8\x1b[0m',
            '\x1b[0;31mFizz\x1b[0m',
            '\x1b[0;34mBuzz\x1b[0m',
            '\x1b[0;31m11\x1b[0m',
            '\x1b[0;34mFizz\x1b[0m',
            '\x1b[0;31mFizz\x1b[0m',
            '\x1b[0;34m14\x1b[0m',
            '\x1b[0;31mFizzBuzz\x1b[0m',
        ]);
    });
});

describe('decorate', () => {
    describe('should make output red if it\'s an odd number', () => {
        const addColorMock = jest.spyOn(color, 'add');
        beforeEach(() => {
            addColorMock.mockClear();
        });

        afterEach(() => {
            addColorMock.mockClear();
        });

        [1, 3, -1, -5, 15].forEach(ordinal => {
            test(String(ordinal), () => {
                decorate(ordinal);
                expect(addColorMock.mock.calls).toHaveLength(1);
                expect(addColorMock.mock.calls[0][1]).toBe('red');
            });
        });
    });

    describe('should make output blue if it\'s an even number', () => {
        const addColorMock = jest.spyOn(color, 'add');
        beforeEach(() => {
            addColorMock.mockClear();
        });

        afterEach(() => {
            addColorMock.mockClear();
        });

        [2, 4, 0, -6, 14].forEach(ordinal => {
            test(String(ordinal), () => {
                decorate(ordinal);
                expect(addColorMock.mock.calls).toHaveLength(1);
                expect(addColorMock.mock.calls[0][1]).toBe('blue');
            });
        });
    });
});
