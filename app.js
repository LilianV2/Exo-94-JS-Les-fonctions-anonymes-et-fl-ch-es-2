let tableauUn = [1, 2, 3, 4, 5];
let tableauDeux = ["valeur1", "valeur2", "valeur3", "valeur4", "valeur5", "bidulemachin", "tatayoyo"];

/* Votre code ici bas */

// tableau 1

let table1 = tableauUn.map (i => (i ** 2))
let table2 = tableauUn.map (i => (i * 10))
let table3 = tableauUn.map (i => ((i + 2) / 22))
let table4 = tableauUn.filter(i => (i > 2))
let table5 = tableauUn.filter(i => (i % 2 === 0))
let table6 = tableauUn.filter(i => (i * 3 > 10))

// tableau 2

let table7 = tableauDeux.map(i => i.length)
let table8 = tableauDeux.map (i => "L'élément " + i + " à une valeur de " + i.length)
let table9 = tableauDeux.map(i => (i + i))
let table10 = tableauDeux.filter(i => i > 2 + 2)
let table11 = tableauDeux.filter(i => i.length % 2 === 0)
let table12 = tableauDeux.filter(i => (i.length - 3) > 10)

// log

console.log(table1)
console.log(table2)
console.log(table3)
console.log(table4)
console.log(table5)
console.log(table6)
console.log(table7)
console.log(table8)
console.log(table9)
console.log(table10)
console.log(table11)
console.log(table12)







