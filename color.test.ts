import { add } from './color';

describe('add', () => {
    describe('should arround some color control sequences to target', () => {
        test('red', () => {
            const result = add('A', 'red');
            expect(result).toBe('\x1b[0;31mA\x1b[0m');
        });
        test('blue', () => {
            const result = add('A', 'blue');
            expect(result).toBe('\x1b[0;34mA\x1b[0m');
        });
    });

    describe('should leave target untouched if color is invalid', () => {
        ['yellow', null, undefined].forEach(invalidColor => {
            test(String(invalidColor), () => {
                const result = add('A', invalidColor);
                expect(result).toBe('A');
            });
        });
    });
});
