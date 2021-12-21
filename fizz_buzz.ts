import { add } from './color';

export function convert(ordinal: number): string | number {
    if (!Number.isInteger(ordinal)) {
        return ordinal;
    }

    const byThree = ordinal % 3 === 0 || String(ordinal).indexOf('3') !== -1;
    const byFive = ordinal % 5 === 0 || String(ordinal).indexOf('5') !== -1;

    if (byThree && byFive) {
        return 'FizzBuzz';
    } else if (byThree) {
        return 'Fizz';
    } else if (byFive) {
        return 'Buzz';
    }

    return ordinal;
}

export function sequence(length: number) {
    for (let i = 0; i < length; i++) {
        console.log(decorate(i + 1));
    }
}

export function decorate(ordinal: number): string {
    const target: string | number = convert(ordinal);
    return ordinal % 2 === 0 ? add(target, 'blue') : add(target, 'red');
}

if (require.main === module) {
    sequence(parseInt(process.argv[2], 10));
}
