
class user {
    // 생성자
    constructor(name){
        this.name = name;
    }

    // 메소드
    sayHi() {return (this.name != '' && this.name != undefined)?this.name+'님 안녕하세요':'안녕하세요';}
}

let users = new user("김규석");

let users2 = new user(); 

console.log(users.sayHi());
console.log(users2.sayHi());