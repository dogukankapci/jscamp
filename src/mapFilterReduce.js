//sepetteki ürünlerimiz:
let cart = [
    {id:1, productName:"Telefon", quantity: 3, unitPrice:4000},
    {id:2, productName:"Bardak", quantity: 2, unitPrice:30},
    {id:3, productName:"Kalem", quantity: 1, unitPrice:20},
    {id:4, productName:"Şarj Cihazı", quantity: 2, unitPrice:100},
    {id:5, productName:"Kitap", quantity: 3, unitPrice:30},
    {id:6, productName:"Pot", quantity: 5, unitPrice:150}
]

//MAP KULLANIMI:

cart.map(product => console.log(product.productName)) //sepeti dolaş demiş olduk. Ve her bir product için => console.log(product.productName) bu işlemi yap demiş olduk.



console.log("<ul>")
cart.map(product => {
    console.log("<li>" + product.productName + " : " + product.unitPrice * product.quantity + "</li>");
})
console.log("</ul>")
/*
    ÇIKTISI:
    <ul>
        <li>Telefon : 12000</li>
        <li>Bardak : 60</li>
        <li>Kalem : 20</li>
        <li>Şarj Cihazı : 200</li>
        <li>Kitap : 90</li>
        <li>Pot : 750</li>
    </ul>
 */


// REDUCE

let total = cart.reduce((acc,product) => acc + product.unitPrice * product.quantity, 0)
console.log(total);


//FİLTER:  burda amaç yeni bir array oluşturmak. sonuçta filtreleme işlemini yukarıdaki map de yapıyor ama bunu kullanırsan yeni bir dizi verir sana.

let quantityOver2 = cart.filter(product => product.quantity > 2)

console.log(quantityOver2);






function addToCart(sepet) {
    sepet.push({id:7, productName:"Ruhsat", quantity: 1, unitPrice:20})  //sepete ekle
}

addToCart(cart);

console.log(cart);

let sayi = 10;

function sayiTopla(number) {
    number += 1;
}

sayiTopla(sayi);
console.log(sayi);