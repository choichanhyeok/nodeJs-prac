
// [TYPE 1.]
// function add(a, b) {
//     return a + b;
// }

// module.exports = add;

// [TYPE 2.]
// exports.add = function(a, b){
//     return a + b;
// }

// [TYPE 3]
const add = (a, b) => {
    return a + b;
}

exports.add = add;