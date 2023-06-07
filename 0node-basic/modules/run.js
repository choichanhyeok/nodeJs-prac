// const add = require("./math.js");

const {add} = require("./math.js"); // math.js에서 익명 메서드로 넘기게 되면 객체로 넘어오는데, 이걸 깔끔하게 쓰려면 객체구조분해를 이용해 값을 받을 수 있음

console.log(add(1, 2));