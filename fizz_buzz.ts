export function convert(ordinal: number) {
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
        console.log(convert(i + 1));
    }
}

if (require.main === module) {
    sequence(parseInt(process.argv[2], 10));
}
