export function add(target: string | number, color: string): string {
    if (color === 'red') {
        return '\x1b[0;31m' + target + '\x1b[0m';
    } else if (color === 'blue') {
        return '\x1b[0;34m' + target + '\x1b[0m';
    }

    return String(target);
}
