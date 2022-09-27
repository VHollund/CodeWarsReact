export const high = (str: string): string => {
    return str.split(' ').reduce((a, b) => {return a.split('').reduce((a, b) => a + b.charCodeAt(0) - 96, 0) >= b.split('').reduce((a, b) => a + b.charCodeAt(0) - 96, 0) ? a : b;});
}