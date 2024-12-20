

export function generateRandomHash(hashLength: number):string{

    const sample:string = "abcdefghijklmnopqrstuvwxyz1234567890";
    const stringLength:number = sample.length;

    let finalHash:string = "";

    for(let i = 0; i<hashLength; i++){
        const randNum = Math.floor(Math.random()*stringLength);
        finalHash += sample[randNum];
    }
    return finalHash;

}