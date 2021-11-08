import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"  //bu ifadede sona .js yazmıyor. Eklemeyi unutma!

//ekranımız gibi düşünebiliriz.
console.log("User component yüklendi!")

// let logger1 = new BaseLogger()
let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1 = new User(1, "Engin", "Demiroğ", "Ankara")
let user2 = new User(2, "Baran", "Gökçekli", "Muğla")
userService.add(user1)
userService.add(user2)

console.log(userService.list())

userService.getById(1)
userService.list()
console.log(userService.getById(2))


let customer = {id:1, firstName: "Engin"}

//prototyping => sonradan değer ekleme. Aslında customer' ın lastname diye bir özelliği yoktu.
customer.lastName = "Demiroğ"

// console.log(customer.lastName)