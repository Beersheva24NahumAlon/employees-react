export function compareRanges(a: string, b: string): number {
    let res = 0;
    const lowerA = a.split("-")[0];
    const lowerB = b.split("-")[0];
    if (+lowerA > +lowerB) {
        res = 1;
    } else if (a < b) {
        res = -1;
    }
    return res;
}
