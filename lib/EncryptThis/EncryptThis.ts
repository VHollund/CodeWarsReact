export const encryptThis = (str: string): string => {
    return str.length==0?
        ""
        : str.length==1?
            str.charCodeAt(0).toString()
            :str.split(" ")
                .map(
                    (a):string=> {
                        return  a.length<2? a.charCodeAt(0).toString() : a.length==2? a.charCodeAt(0).toString()+a.charAt(1): a.charCodeAt(0).toString() + a.charAt(a.length-1) + a.slice(2, a.length - 1)+a.charAt(1)
                        }
                    ).join(" ")
}
