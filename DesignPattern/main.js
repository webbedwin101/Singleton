const Singleton = require('./design'); 

const a = new Singleton();
const b = new Singleton();
const c = Singleton.instance();

console.log(a.createdTime());
console.log(b.createdTime());
console.log(c.createdTime());