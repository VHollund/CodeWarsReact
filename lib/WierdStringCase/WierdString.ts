function toWeirdCase(s:string){
    return s.split(" ").map(x=>x.split("").map((value, index) => {
        return index % 2 === 0 ? value.toUpperCase() : value.toLowerCase();
        }).join("")).join(" ");
}