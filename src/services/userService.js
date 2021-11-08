export default class UserService{ //default => UserService eklenince direkt bunu ekle demiş olduk. aynı anda birden fazla userservice olsa bile bunu getirecek. export => public

    constructor(loggerService) {
        this.users = []
        this.loggerService = loggerService
    }

    add(user){
        this.users.push(user)
        this.loggerService.log(user)
    }

    list(){
        return this.users
    }

    getById(id){
        return this.users.find(u => u.id === id)
    }
}