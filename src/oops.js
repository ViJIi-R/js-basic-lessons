// const o = new Object()
// const a = new Array()
// const d = new Date()
// const f1 = function () {
//   console.log('The Cow Jumped over the MOON')
// }

// console.log('Date=' + d)
// f1()
// // --------------------------------//
// const o1 = Object.create({ x: 100, y: 200 })
// console.log('x= ' + o1.x + 'y=' + o1.y)
// console.log(o1)
// const o2 = Object.create(null)
// const o3 = Object.create(Object.prototype)
// console.log(o2)
// console.log(o3)
// -------------------//

// function getChild (parent) {
//   if (parent == null) throw TypeError()
//   return Object.create(parent)
// }
// const o4 = { x: "don't change this value" }
// // console.log(o4.x)
// const p = getChild(o4) // Object.create(04)
// console.log(p)
// o4 = null
// p = getChild(o4) // Object.create(null);
// console.log(p)

// Object.prototype = 0 // (zero)
// console.log(Object)

// const o5 = {}
// // console.log(o5)
// o5.x = 100
// console.log(o5)
// p = getChild(o5)
// console.log(p)
// p.y = 200
// const q = getChild(p)
// q.z = 300
// console.log(q)
// console.log('q.x+ q.y+ q.z' + (q.x + q.y + q.z))
// console.log('p.x+ p.y' + (p.x + p.y))
// console.log('o5.x+o5.y' + (o5.x + o5.y))
// -----------------------------

const book = {
  'main title': 'JavaScript',
  subtitle: 'The Definitive Guide',
  for: 'all audiences',
  author: {
    firstname: 'Alan',
    surname: 'Walker'
  }
}
let len
// book = null;
// if(book){
//     if(book.subtitle){
//         len = book.subtitle.length;
//         console.log(len);
//     }
//     else
//         console.log("book.subtitle undefined:");
// }
// else
//     console.log("book is null");

len = book && book.subtitle && book.subtitle.length
if (len) { console.log(len) }
console.log(book.author)
delete book.author
console.log(book.author)

console.log(book['main title'])
delete book['main title']
console.log(book['main title'])

const o6 = { x: 100 }
console.log(o6.x)
delete o6.x
console.log(o6.x)
console.log(o6.tostring)
delete o6.tostring
console.log(o6.tostring)

//Can not Delete
delete Object 
