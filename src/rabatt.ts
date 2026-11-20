export function studentPris(pris: number, rabatt: number): number {
    // i passed it as param and  set rabbat here to be 10 as it was mentioned
    return pris - (pris * rabatt) / 100
}

// removing type module makes any import unacceptable
// importing not exisiting function raising a syntax error ..because it doesnt have a matching exporting function
