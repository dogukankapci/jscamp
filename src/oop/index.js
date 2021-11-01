export class Customer{    //export => C# daki public gibi düşünebilirsin.
    constructor(id,customerNumber){
        this.id = id; //bu bir prototyping özelliğidir.
        this.customerNumber = customerNumber; //bu bir prototyping özelliğidir.
    }
}

let customer = new Customer(1,"12345");  //instance alma işlemi.
console.log(customer.id);  //böyle yaparsan undefined basar. Bu alana ulaşamıyoruz. Bu alana ulaşmak için:

/* 
    this.id diyerek aslında bir prototyping işlemi gerçekleştirmiş oluruz. this.id derkenki this, aslında instance' ı temsil eder. Yani constructor' dan vermiş olduğumuz id ve customerNumber değerleri instance üzerinden class' a özellik olarak atanmış olur.

    eğer ki constructor içerisinde bu işlemi yapmazsan "console.log(customer.id);" çıktısı olarak undefinied basar.
*/ 


//prototyping: bir nesneye özellik ekleme;
customer.name ="Engin Demiroğ"  //(instance' a yapılan prototyping)
console.log(customer.name)  //Çıktıda "Engin Demiroğ" basar.

//şu şekilde static olarak da yapabilirsin: (class' a yapılan prototyping)
Customer.bisey = "Bi şey"
console.log(Customer.bisey)  //Çıktıda "Bi şey" basar.

//ctor' a this keyword' ü kullanılarak, instance' a prototyping işlemi yapıldıktan sonra artık alanlara erişimimiz var:
console.log(customer.customerNumber);

//prototyping mantığını bilmek önemli çünkü saf js' de class diye bir şey yoktur. Aslında bu tanımladığımız şeyler arka planda fonksiyona dönüştürülüyor!

class IndividualCustomer extends Customer{ //bireysel müşteri
    constructor(firstName,id,customerNumber){
        super(id,customerNumber)  
        //base' e (Customer) gidecek olan parametreler super() ile gönderilir. Böylece prototyping bu ikisi için yapılmış oldu.
        this.firstName = firstName;
    }
}

class CorporateCustomer extends Customer{ //kurumsal müşteri
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)  
        //base' e (Customer) gidecek olan parametreler super() ile gönderilir. Böylece prototyping bu ikisi için yapılmış oldu.
        this.companyName=companyName;
    }
}