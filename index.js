const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')

one.addEventListener('click', () => {
    one.classList.add('selected')
    two.classList.remove('selected')
    three.classList.remove('selected')
    four.classList.remove('selected')
    five.classList.remove('selected')
})

two.addEventListener('click', () => {
    one.classList.remove('selected')
    two.classList.add('selected')
    three.classList.remove('selected')
    four.classList.remove('selected')
    five.classList.remove('selected')
})

three.addEventListener('click', () => {
    one.classList.remove('selected')
    two.classList.remove('selected')
    three.classList.add('selected')
    four.classList.remove('selected')
    five.classList.remove('selected')
})

four.addEventListener('click', () => {
    one.classList.remove('selected')
    two.classList.remove('selected')
    three.classList.remove('selected')
    four.classList.add('selected')
    five.classList.remove('selected')
})

five.addEventListener('click', () => {
    one.classList.remove('selected')
    two.classList.remove('selected')
    three.classList.remove('selected')
    four.classList.remove('selected')
    five.classList.add('selected')
})