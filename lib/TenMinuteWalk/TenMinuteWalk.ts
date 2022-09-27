export function isValidWalk(strings: string[]) {
    var x=0
    var y=0
    strings.forEach(z =>{
        switch(z) {
            case 'n':y-=1;break;
            case 's':y+=1;break;
            case 'e':x+=1;break;
            case 'w':x-=1;break;
        }
    })

    return x==0 && y==0 && strings.length==10
}