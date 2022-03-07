// 3 ways to create strings variables

const my_name = 'Viji'
const middle = 'Gabbar'
const last = 'Singh'

console.log(my_name)
console.log(middle)
console.log(last)

const sentence1 = "she's so cool"
console.log(sentence1)
const sentence2 = "she\'s so cool"
console.log(sentence2)
const sentence3 = "she's so \"cool\""
console.log(sentence3)

const song1 = 'I like ARR songs and Raja Songs'
console.log(song1)

const hello3 = 'hello my name is' + my_name + '.Nice to meet you'
console.log(hello3)

const hello4 = `hello my name is ${my_name}. Nice to meet you.I am ${1 + 100}years old`
console.log(hello4)

const html = `<div>
             <h2>${my_name}</h2>
             <p>${hello3}</p>
             </div>
             `

console.log(html)
// document.body.innerHTML = html
