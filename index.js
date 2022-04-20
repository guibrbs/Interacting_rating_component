const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const btn = document.querySelector('.btn')
const mainCard = document.querySelector('.card')
const thksCard = document.querySelector('.thanks.card')

one.addEventListener('click', () => {
    one.classList.toggle('selected')
    two.classList.remove('selected')
    three.classList.remove('selected')
    four.classList.remove('selected')
    five.classList.remove('selected')
})

two.addEventListener('click', () => {
    one.classList.remove('selected')
    two.classList.toggle('selected')
    three.classList.remove('selected')
    four.classList.remove('selected')
    five.classList.remove('selected')
})

three.addEventListener('click', () => {
    one.classList.remove('selected')
    two.classList.remove('selected')
    three.classList.toggle('selected')
    four.classList.remove('selected')
    five.classList.remove('selected')
})

four.addEventListener('click', () => {
    one.classList.remove('selected')
    two.classList.remove('selected')
    three.classList.remove('selected')
    four.classList.toggle('selected')
    five.classList.remove('selected')
})

five.addEventListener('click', () => {
    one.classList.remove('selected')
    two.classList.remove('selected')
    three.classList.remove('selected')
    four.classList.remove('selected')
    five.classList.toggle('selected')
})

btn.addEventListener('click', ()=>{
    mainCard.classList.remove('active')
    mainCard.classList.add('inactive')
    thksCard.classList.add('active')
    thksCard.classList.remove('inactive')
})