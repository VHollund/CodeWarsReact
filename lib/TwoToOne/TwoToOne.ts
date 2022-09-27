export const longest = (s1: string, s2: string): string => {
    return Array.from(Array(26).keys()).map((value, index) => {
        return (s1.indexOf(String.fromCharCode(97 + index))!==-1 ||
        s2.indexOf(String.fromCharCode(97 + index))!==-1)?
            String.fromCharCode(97 + index)
            :""
    }).join("")
}