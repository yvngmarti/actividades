export function maskify(cc: string): string {
    const lastForDigits: string = cc.slice(-4);
    const maskedThing: string = lastForDigits.padStart(cc.length, '*');
    return maskedThing;
}

console.log(maskify('Martin Martinez Arias'));