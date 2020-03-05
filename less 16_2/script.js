"use strict";

class First {
    hello() {
        console.log("Привет я метод родителя");
    }
}

// class Child extends Parent {
//     ...
//   }

class Second extends First {
    hello() {
        super.hello();
        console.log("А я наследуемый метод!");
    }
}

// let methodFirst = new First();
let methodSecond = new Second();

methodSecond.hello();