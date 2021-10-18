console.log("merhaba kodlama.io")

//JS type safe değildir!
let dolarDun = 9.20

let dolarBugun = 9.30

{
    let dolarDun = 9.10  //bu blok kendi içinde bir dünya. bu yüzden dolarDun 9.20 yazar console'da. ancak burada let yerine var kullansaydın 9.10 basacaktı ve uygulama yanlış çalışacaktı. bu yüzden artık var ' ı unut ve let' i hayatına dahil et.
}

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11  //bu işlem patlar çünkü const sabittir. euroDun read only’ dir. Bu değere başka bir şey atayamazsın çünkü sabittir.

console.log(euroDun)

//arrays
//diziler
//camelCasing - değişken tanımlarında
let konutKredileri = ["Konut kredisi", "Emlak konut kredisi", "Kamu konut kredisi"]

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>" + konutKredileri[i] + "</li>")    
}
console.log("</ul>")


console.log(konutKredileri)