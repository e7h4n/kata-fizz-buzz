import { convert, sequence } from './fizz_buzz';

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
            1,
            2,
            'Fizz',
            4,
            'Buzz',
            'Fizz',
            7,
            8,
            'Fizz',
            'Buzz',
            11,
            'Fizz',
            'Fizz',
            14,
            'FizzBuzz',
        ]);
    });
});
