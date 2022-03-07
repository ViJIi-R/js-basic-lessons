/* OBJECT
Javascripts's fundamental datatypes is th object.
An object is an unordered collection of properties,each of which has a name and a value.
Property names are strings, hence objects map strings to values
*/

const person = {
  first: 'Viji',
  last: 'Ravi',
  age: 21
}
console.log(person.first)
console.log(person.last)
console.log(person.age)
person.first = 'Pavya'
person.last = 'Prakash'
console.log(person.first)
console.log(person.last)
person.last = null
console.log(person.last)
// -------------------------------//
const empty = {}
const point = { x: 10, y: 50 }
console.log(point.x)
console.log(point.y)
const point2 = { x: point.x, y: point.y + 1 }
console.log(point.x)
console.log(point2.y)
const book = {
  'main title': 'Java Script', // Property names include spaces
  'sub-title': 'Guide to Java Script for beginners',
  for: 'students', // reserved keyword
  author: {
    first: 'viji',
    last: 'ravi'
  }
}
console.log(book['main title'])
console.log(book['sub-title'])
console.log(book.for)
console.log(book.author.first)
console.log(book.author.last)
// console.log(book.sub - title)
console.log(book.for)
