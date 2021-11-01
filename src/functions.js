/*
function addToCard(productName) {
    console.log("Sepete eklendi : " + productName);
}

*/
/* 
    Default parametre verme:

    function addToCard(productName = "Elma") {    
    console.log("Sepete eklendi : " + productName);
}

*/

//undefined ile null karıştırılmamalı!
//undefined => Ben aslında yokum demek. Tanımlı değilim demek.

// Fonksiyon tanımlarken, default parametreleri en sona yazmalısın. Başta olunca da hata vermiyor ancak mantk hataları doğuyor çünkü jS çok gevşek bir dil.

function addToCard(quantity, productName = "Elma") {    
    console.log("Sepete eklendi : ürün :  " + productName +" adet : ",quantity);
}


// addToCard();
// addToCard("Elma");
// addToCard("Yumurta");
// addToCard(10);
// addToCard(15);


//FONKSİYON TANIMLAMA YOLLARI:

// () bu işareti koyduğunda sen bir fonksiyonsun demiş oluyoruz!

let sayHello = () => console.log("Merhaba Dünya!")  //tek satırsa fonksiyonun içeriği, bu şekilde süslü parantez açmadan yazabilirsin.

//veya 

let sayHello2 = () => {
    console.log("Hello World!")
}

//veya

let sayHello3 = function () {
    console.log("Hello World 2!")
}


//yazdığımız fonksiyonların çağrılması:
sayHello()
sayHello2()
sayHello3()

// ------------------------- objelere giriş ---------------------------

//asla bu şekilde kullanma! neyi hangi sırayla yazacağını unutursun. Bu yüzden objelerle çalış. addToCard3' e bakabilirsin.
function addToCard2(productName, quantity, unitPrice) {
    
}

addToCard2("Elma",5,10)
addToCard2("Armut",2,20)
addToCard2("Limon",3,15)



//obje ile çalışmak:
// Obje tanımı {} ' dır.
let product1 = { productName:"Elma", unitPrice:10, quantity:5 }

function addToCard3(product) {
    console.log("Ürün: " + product.productName)
    console.log("Adet: " + product.quantity)
    console.log("Fiyatı: " + product.unitPrice)
}

addToCard3(product1)

// ---------------------------- DEĞER TİP VE REFERANS TİP KONUSU --------------------------

//objeler, referans tip old. için çıktıda KARPUZ verdi. ram' in "Heap" bölümünü ilgilendirir.
let product2 = { productName:"Elma", unitPrice:10, quantity:5 }
let product3 = { productName:"Elma", unitPrice:10, quantity:5 }
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName) //ÇIKTI => KARPUZ

//değişkenler, değer tip' dir. ram' in "Stack" alanında tutulur.
let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)  //ÇIKTI => 20


// ---------------------

function addToCard4(products) {
    console.log(products)
}

let products = [  
    { productName:"Elma", unitPrice:10, quantity:5 },
    { productName:"Armut", unitPrice:10, quantity:5 },
    { productName:"Karpuz", unitPrice:10, quantity:5 }
]

addToCard4(products)  //products array' inin referansını addToCard4 fonksiyonuna gönderiliyor!


//----------------------------------

// function add(number1, number2) {
//     console.log(number1 + number2)
// }

// add(5,9)

// function add2(number1, number2, number3) {
//     console.log(number1 + number2 + number3)
// }

// add2(5,9,8)

//olması gereken;

function add(...numbers) {
    console.log(numbers)
}

add(20,30) //gönderdiğimiz parametreleri diziye çevirerek tutar.
add(20,30,40)
add(20,30,40,50)

function add2(...numbers) { //... => rest operatörü
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        //console.log (numbers[i]);        
        total += numbers[i]
    }
    console.log(total)
}

add2(20,30) 
add2(20,30,40)
add2(20,30,40,50)

//NOT => rest (…) kullanırken her zaman fonksiyonun sonuna bırak. (a, ...b) gibi. Çünkü rest operatörünün olayı şu: üzerinde aldığı tüm değerleri diziye çevirir. (bisey, ...numbers) diyip (20,30,40) dersen ilk değer bi sey'e, geriye kalanlar da numbers' a atanır.

//-----------------------------------

//spread:

let numbers = [30,10,500,600,120]
console.log(numbers)  //Çıktı => [30, 10, ....] => dizi.
console.log(...numbers)  // Çıktısı => 30 10 500 .... yani ayırır. dizi olmaktan çıkarır.
console.log(Math.max(...numbers))


//---------------------------------

//DESTRUCTURING: (bu konu react' da oldukça önemli)

// let regions = ["İç Anadolu", "Marmara", "Karadeniz"]
// console.log(regions[1])

//array destructuring:
let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri, marmaraSehirleri, karadenizSehirleri]] = [
    {name: "İç Anadolu", population: "20M"}, 
    {name: "Marmara", population: "30M"}, 
    {name: "Karadeniz", population: "10M"},
    [
        [
            "Ankara",
            "Konya"
        ],
        [
            "İstanbul",
            "Bursa"
        ],
        [
            "Sinop",
            "Trabzon"
        ]
    ]
]
console.log(icAnadolu.name)
console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)
// console.log(marmara)


//---------

// obje parçalama, obje destructuring:
let newProductName, newUnitPrice, newQuantity 
({productName: newProductName, unitPrice: newUnitPrice, quantity: newQuantity} 
= { productName:"Elma", unitPrice:10, quantity:5 })

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)