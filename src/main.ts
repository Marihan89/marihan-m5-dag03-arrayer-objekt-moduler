// Dag 3, del 1: Arrayer och objekt i Console.
import { meny } from './data'

// UPPGIFT 1: arrayer
// a) skapa const drycker: string[] = ["Bryggkaffe", "Latte", "Te"];
// b) lägg till "Chai" sist med push. Skriv ut listan och längden.
// c) ta bort sista med pop och skriv ut vad som togs bort.
// d) skriv ut platsen för "Latte" (indexOf) och om "Cola" finns (includes).
// e) skriv ut hela listan som en text:

const drycker: string[] = ['Bryggkaffe', 'Latte', 'Te']
drycker.push('Chai')
console.log(`Drinks List : ${drycker} , There are  ${drycker.length} drinks.`)
drycker.pop()
console.log(`Last item "Chai" was removed .List becomes  ${drycker}`)
console.log('Index of the Latte is : ' + drycker.indexOf('Latte'))
if (drycker.includes('Cola'))
    console.log(`Cola is at index ${drycker.indexOf('Cola')}`)
else console.log("Unfortunately we dont have 'Cola' as a drink")
console.log(drycker.join(' '))

// UPPGIFT 2: objekt
// a) skapa const kopp = { namn: "Latte", pris: 45, vegetarisk: true };
// b) skriv ut kopp.namn och kopp["pris"]
// c) ändra priset till 48, och lägg till egenskapen storlek: "stor"
//    TypeScript klagar på storlek. Beskriv objektet med en interface där storlek är valfri (storlek?: string).
// d) skriv ut Object.keys(kopp)
// TODO

// UPPGIFT 3: arrayer av objekt
// a) skriv ut hur många rätter menyn har och namnet på den första
// b) loopa med for...of och skriv ut "namn – pris kr" för varje rätt
// c) skriv ut namnet på den sista rätten utan att veta antalet (tips: length - 1)
// TODO
