


const testimonial = [
    {
        quote:"“ I’ve been interested in coding for a while but never taken the jump, until now.I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
        name: 'Tanya Sinclair',
        role: 'UX Engineer',
        image:'/images/image-tanya.jpg'

    },
    {
        quote: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
        name: 'John Tarkpor',
        role: 'Junior Front-end Developer',
        image: '/images/image-john.jpg'
    }
]

const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const quote = document.querySelector('.quote')
const nameEl = document.querySelector('.name')
const role = document.querySelector('.role')
const image = document.querySelector('.hero-img')

let currentSlide = 0

function showTestimonial(index){
    quote.textContent = testimonial[index].quote
    nameEl.textContent = testimonial[index].name
    role.textContent = testimonial[index].role
    image.src = testimonial[index].image
}

showTestimonial(currentSlide)


next.addEventListener('click', ()=>{
    currentSlide++
    showTestimonial(currentSlide)
})

prev.addEventListener('click', ()=>{
    currentSlide--
    showTestimonial(currentSlide)
})


