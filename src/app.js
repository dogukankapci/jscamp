console.log("merhaba kodlama.io");

//JS type safe değildir!
let dolarDun = 9.2;

let dolarBugun = 9.3;

{
  let dolarDun = 9.1; //bu blok kendi içinde bir dünya. bu yüzden dolarDun 9.20 yazar console'da. ancak burada let yerine var kullansaydın 9.10 basacaktı ve uygulama yanlış çalışacaktı. bu yüzden artık var ' ı unut ve let' i hayatına dahil et.
}

console.log(dolarDun);

const euroDun = 11.2;
//euroDun = 11  //bu işlem patlar çünkü const sabittir. euroDun read only’ dir. Bu değere başka bir şey atayamazsın çünkü sabittir.

console.log(euroDun);

//arrays
//diziler
//camelCasing - değişken tanımlarında
let konutKredileri = [
  "Konut kredisi",
  "Emlak konut kredisi",
  "Kamu konut kredisi",
];

console.log("<ul>");
for (let i = 0; i < konutKredileri.length; i++) {
  console.log("<li>" + konutKredileri[i] + "</li>");
}
console.log("</ul>");

console.log(konutKredileri);

//ödev - 1:

let student = { id: 1, name: "Engin" };
console.log(student);

function save(ogrenci) {
  console.log(ogrenci);
}

save(student);
/* Çıktısı:
    {id: 1, name: 'Engin'}
    id: 1
    name: "Engin"
    [[Prototype]]: Object 
*/

save(15);
//Çıktısı: 15

function saveIki(ogrenci, puan = 10) {
  //puan bilgisi gönderilmezse default olarak 10 al demek. default parametre en sona yazılır!
  console.log(ogrenci.name + " : " + puan);
}

saveIki(student); // Çıktısı: Engin : 10.
saveIki(50); // Çıktısı : undefined : 10   // tanımda böyle bir şey yok, demek.
saveIki(student, 100); // Çıktısı : Engin : 100  // default verilen 10 değerini 100 değeri ile ezmiş olduk.

//array
let students = ["Engin Demiroğ", "Halit Kalaycı", "Engin Toprak", "Büşra"]

console.log(students)
/*
Çıktısı:
    (4) ['Engin Demiroğ', 'Halit Kalaycı', 'Engin Toprak', 'Büşra']
    0: "Engin Demiroğ"
    1: "Halit Kalaycı"
    2: "Engin Toprak"
    3: "Büşra"
    length: 4
    [[Prototype]]: Array(0)
*/ 

let students2 = [student, { id: 2, name: "Halit" }, "Ankara", {city : "İstanbul"}]
console.log(students2)


//REST (Geriye Kalanlar)

//rest => id, geriye kalanlar da ürünler olsun.
//C#' daki karşılığı params.
let showProducts = function (id, ...products) {
    console.log(id)
    console.log(products)
    console.log(products[0])
}

//showProducts()  //değişkene fonksiyon atadığımız için showProducts artık bu şekilde aç kapa parantez ile çağrılmalı çünkü bu artık bir fonksiyon.

console.log(typeof showProducts) //tipine bakmak için. çıktısı function. değişkenin türü function.

showProducts(10, "Elma", "Armut", "Karpuz")
/* ÇIKTI:
  10  //id nin karşılığı. alttakiler ise bir array olak getirilir. (ikinci parametre o şekilde tanımlandı.)
  3) ['Elma', 'Armut', 'Karpuz']
  0: "Elma"
  1: "Armut"
  2: "Karpuz"
  length: 3
  [[Prototype]]: Array(0)
*/

// -------------------------------------------------------------------------------------

showProducts(10, ["Elma", "Armut", "Karpuz"]) 
//Çıktısı:
/*
  10
  0: (3) ['Elma', 'Armut', 'Karpuz']
  length: 1
  [[Prototype]]: Array(0)
 */


  //ÇOK ÖNEMLİ NOT: eğer rest olan ikinci parametre yukarıdaki örnekteki gibi gönderilmişse "console.log(products)" diyerek bu diziye ulaşamazsın. Çünkü yukarıdaki kullanım ile dizi içinde dizi tanımlanmış oldu. Normalde rest' de zaten ikinci parametre bir dizi olduğu için bu haliyle dizi içinde dizi tanımlanmış oldu. Bu şekilde diziler tutulacaksa rest ile, çağırırken şu şekilde çağırmalısın:
// console.log(products[0]) => Çıktısı: 3 elemanlı diziyi old. gibi döndürür.
/*
  (3) ['Elma', 'Armut', 'Karpuz']
  0: "Elma"
  1: "Armut"
  2: "Karpuz"
  length: 3
  [[Prototype]]: Array(0)
*/

console.log("\n")
console.log("\n")
console.log("\n")
console.log("------------------------------- SPREAD -------------------------------------------")

//spread => ayrıştırmak.
//spread, bir array'i parametre gibi virgülle ayırırmışçasına, elemanlarına ayırmaya yarıyor.

console.log(Math.max(1,2,3,4,50,4,60,14))
//console.log(Math.max([1,2,3,4,50,4,60,14])) => bu şekilde kullanma çünkü içine rest alıyor. yani params gibi birden çok parametreyi alıp dizi gibi davranıyor. sen içine dizi gönderirsen ortalık karışır. ancak diyelim ki dışardan, api' den sana bir dizi geldi:

let points =[1,2,3,4,50,4,60,14]

console.log(...points)  //çıktısı => 1 2 3 4 50 4 60 14  //not: [] içinde yazılmadıkları için artık bu değerler dizi içerisinde değil. değerleri ayırmış olduk (spread).


//elindeki array' i şu şekilde geçirebilirsin demek ki:
console.log(Math.max(...points))

console.log(..."ABC","D",..."EFG","H") //Çıktısı => A B C D E F G H  //gördüğün gibi birleşik olanları ayırdı. Sonuçta string dediğin şey aslında bir char array.


// ÖZETLEYİCİ NOT => rest ile gönderilen parametreleri diziye çevirip parametre olarak tutuyoruz. Spread ile ise gelen değerleri ayırıp diziyi parçalıyoruz. 



console.log("\n")
console.log("\n")
console.log("\n")
console.log("------------------------------- DESTRUCTURING -------------------------------------------")

//Destructuring
//elimizdeki array' in değerlerini değişkenlere atamak.

let populations = [10000,20000,30000]
let [small,medium,high] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log("\n")
//değerleri değişkene atamış olduk.  sırasıyla 10000 20000 30000 şeklinde console.log' lar sonuç verir.

//array' i destruct etme örneği:
let populations2 = [10000,20000,30000,[40000,50000]] //dizinin dördüncü elemanı olan diziyi bir kez daha dest. etmiş olduk.
let [small2,medium2,high2,[veryHigh, maximum]] = populations2  //kendi içinde de bir destructing yapılmış oldu.
console.log(small2)
console.log(medium2)
console.log(high2)
console.log(veryHigh)
console.log(maximum)
console.log("\n")

function someFunction([small1],number) {  
  //js' de parametre olarak dizi vermek yok. (yani [] böyle bir şey veremezsin. tabi ki cities, customers gibi başka yerde tanımlı olan diziyi alabilir ancak direkt [] bu şekilde alamaz. Eğer ki böyle bir kullanım görüyorsan bil ki destructiring yapıyordur.)
  console.log(small1)
}

someFunction(populations2)


//objeyi destruct etme örneği:
let category = {id:1, name:"İçecek"}

//aşağıdaki iki kullanım da uygundur, istediğini kullanabilirsin.
console.log(category.id)
console.log(category["name"])

let {id, name} = category  //objeyi destruct etme.
console.log(id)
console.log(name)


// ----------------------------------------------------------------------------------------------------------------------------


// Map, Filter, Reduce


//Map => Bizim için array' i döner. Foreach gibi, for gibi geziyor.
let names = [
  {name:"Doğukan", surname:"Kapçı"},
  {name:"Engin",surname:"Demiroğ"}
]

names.map(n => console.log(n.name)) 
//Çıktısı:
//Doğukan
//Engin
//şeklinde olur.




//filter => filtreleme işlemi gerçekleştirir. Ancak önemli not => filtreleme sonucunda hiçbir eleman olmasa bile bizim için yeni bir array oluşturur. yani filtrelenmiş elemanlar ayrı bir dizi içerisinde tutulacak. yani referans değişmiş oldu.

let cars = [
  {brand:"Mercedes-Benz", price:150},
  {brand:"BMW", price:200},
  {brand:"Audi", price:300}
]

let filteredCars = cars.filter(car=>car.price>150);
console.log(filteredCars);



//reduce => yukarıdaki arabalardan birer tane almaya karar verdik ve sepete ekledik diyelim. Sepet toplamı bulmak için reduce fonksiyonundan faydalanabilirsin:

let totalPrice = cars.reduce((acc,car) => acc + car.price, 0);
console.log(totalPrice);



// ------------------------------------------- 2. DERS ----------------------------------------------------------------------

//function.js

