export function rowSumOddNumbers(n: number) {
    return Array.from(Array(n).keys()).map((value, index) => {
        return (1+Array.from(Array(n).keys()).map((value, index) => {return (index*2)}).reduce((sum, current) => sum + current)) + (2 * index)
    }).reduce((sum, current) => sum + current)
}
