// Dag 3, del 2: Funktioner som arbetar med menyn. Gör alla tester gröna på tests.html.
// Använd filter, map, find, reduce och sort där det passar.
// Typerna (Ratt, OrderRad) finns i typer.ts. Röda understrykningar tills du skrivit return är normalt.
import { formateraPris } from './pris'
import { studentPris } from './rabatt'
import type { Ratt, OrderRad } from './typer'

// 1. Alla vegetariska rätter (filter). Returnerar en ny array.
export function vegetariskaRatter(meny: Ratt[]): Ratt[] {
    // TODO
    //it returns items id  where its vegeterian value is true so it returns the id 1,2
    if (meny.length > 0) {
        return meny.filter((r) => r.vegetarisk === true)
    } else return []
}

// 2. Bara namnen, som en array av text (map). ["Kardemummabulle", ...]
export function rattNamn(meny: Ratt[]): string[] {
    // TODO
    return meny.map((r) => r.namn)
}

// 3. En prislista som text: "Kardemummabulle – 35 kr" (map + formateraPris)
export function prislista(meny: Ratt[]): string[] {
    // TODO
    return meny.map((d) => `${d.namn} – ${formateraPris(d.pris)}`)
}

// 4. Hitta en rätt via id (find). Returnerar objektet, eller undefined om det saknas.
export function hittaRatt(meny: Ratt[], id: number): Ratt | undefined {
    // TODO
    return meny.find((y) => y.id === id)
}

// 5. Den billigaste rätten (reduce). Returnerar objektet. Tom lista ger undefined.
export function billigast(meny: Ratt[]): Ratt | undefined {
    // // TODO
    return meny.reduce<Ratt | undefined>((billigaste, ratt) => {
        if (billigaste === undefined || ratt.pris < billigaste.pris) {
            return ratt
        }
        return billigaste
    }, undefined)
}

// 6. Sortera efter pris, billigast först. Returnerar en NY array.
//    Den ursprungliga listan får INTE ändras (sort ändrar originalet, så kopiera först).
export function sorteraEfterPris(meny: Ratt[]): Ratt[] {
    // TODO
    const copy = [...meny]
    copy.sort((a, b) => a.pris - b.pris)
    return copy
}

// 7. Totalpris för en order. order = [{ id: 1, antal: 2 }, { id: 5, antal: 1 }]
//    Slå upp priset för varje id i menyn. Okända id räknas som 0 kr.
export function totalPris(order: OrderRad[], meny: Ratt[]): number {
    // TODO
    let total: number[] = order.map(
        (x) => (hittaRatt(meny, x.id)?.pris ?? 0) * x.antal
    )
    return total.reduce((sum, price) => {
        return sum + price
    }, 0)
}

// 8. Antal rätter per kategori som ett objekt: { bakverk: 3, dryck: 2, lunch: 3 } (reduce)
export function perKategori(meny: Ratt[]): Record<string, number> {
    // TODO
    let resultat: Record<string, number> = {}
    let cats = meny.map((x) => x.kategori)

    resultat = cats.reduce(
        (res, cat) => {
            let count = 0
            for (const d of meny) {
                if (d.kategori === cat) {
                    count++
                }
            }
            res[cat] = count
            return res
        },
        {} as Record<string, number>
    )
    return resultat
}

// 9. En kopia av rätten med nytt pris. Originalet får INTE ändras (spread: { ...ratt }).
export function medNyttPris(ratt: Ratt, nyttPris: number): Ratt {
    // TODO
    // using spread with new prices is better
    // to make changes separated from the original object
    const newlist = { ...ratt, pris: nyttPris }
    return newlist
}

export function orderprice(
    order: OrderRad[],
    meny: Ratt[],
    student: boolean,
    discount: number = 10
): number {
    discount !== null ? discount : 0
    if (student) return studentPris(totalPris(order, meny), discount)
    else return totalPris(order, meny)
}
