export function likes(param: any[]) {
    switch (param.length) {
        case 0: {
            return 'no one likes this';
        }
        case 1: {
            return `${param[0]} likes this`;
        }
        case 2: {
            return `${param[0]} and ${param[1]} like this`;
        }
        case 3: {
            return `${param[0]}, ${param[1]} and ${param[2]} like this`;
        }
        default: {
            return `${param[0]}, ${param[1]} and ${param.length - 2} others like this`;
        }
    }
}
