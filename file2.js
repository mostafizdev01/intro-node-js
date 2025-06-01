const a1 = require('./file1')  /// amra ai vabe file import kore kore o kaj korte pari
const {a: a3, add: add3} = require('./file3') // amara ai vabe import aias kore o kaj korte pari..

console.log(a1.a, a3);

console.log(a1.add(2, 3), add3(10, 20, 30));