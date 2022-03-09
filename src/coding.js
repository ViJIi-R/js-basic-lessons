/* eslint-disable eqeqeq */
/* eslint-disable no-mixed-operators */
const quoteEl = document.querySelector('.testimonial__content-quote')
const nameEl = document.querySelector('.testimonial__content-user-name')
const titleEl = document.querySelector('.testimonial__content-user-title')
const avatarEl = document.querySelector('.testimonial__slide-img')

// Testimonials Data
const testimonials = [
  {
    name: 'Tanya Sinclair',
    title: 'UX Engineer',
    quote: `“I’ve been interested in coding for a while but never taken the jump, until now. 
    I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
    excited about the future.”`,
    avatar: '../images/image-tanya.jpg',
    id: 0
  },
  {
    name: 'John Tarkpor',
    title: 'Junior Front-end Developer',
    quote: `“If you want to lay the best foundation possible I’d recommend taking this course. 
    The depth the instructors go into is incredible. I now feel so confident about 
    starting up as a professional developer.”`,
    avatar: '../images/image-john.jpg',
    id: 1
  }
]

// Get Buttons
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')

// Listen For Click
prevBtn.addEventListener('click', clickBtn)
nextBtn.addEventListener('click', clickBtn)

// Change Slide On Click
function clickBtn (e) {
  const btnType = e.target.className

  if (btnType === 'prev') {
    changeIndex('back')
  } else {
    changeIndex('forward')
  }
}

// Change Index
function changeIndex (num) {
  const currentlySelected = document.querySelector('.testimonial').id

  console.log(currentlySelected, num)

  if (num === 'back' && currentlySelected == 0 || num === 'forward' && currentlySelected == 0) {
    loadTestimonial(testimonials[1])
  }

  if (num === 'back' && currentlySelected == 1 || num == 'forward' && currentlySelected == 1) {
    loadTestimonial(testimonials[0])
  }
}

// Load Testimonial
function loadTestimonial ({ name, title, quote, avatar, id }) {
  nameEl.innerHTML = name
  titleEl.innerHTML = title
  quoteEl.textContent = quote
  avatarEl.src = avatar
  document.querySelector('.testimonial').id = id
}
