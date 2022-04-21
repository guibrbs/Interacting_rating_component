const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const btn = document.querySelector('.btn')
const mainCard = document.querySelector('.card')
const thksCard = document.querySelector('.thanks.card')
var selection = "You selected 0 out of 5"
var news

one.addEventListener('click', () => {
    one.classList.toggle('selected')
    two.classList.remove('selected')
    three.classList.remove('selected')
    four.classList.remove('selected')
    five.classList.remove('selected')
    news = selection.replace("0", "1")
    document.getElementById('selection').innerHTML = news
})

two.addEventListener('click', () => {
    one.classList.remove('selected')
    two.classList.toggle('selected')
    three.classList.remove('selected')
    four.classList.remove('selected')
    five.classList.remove('selected')
    news = selection.replace("0", "2")
    document.getElementById('selection').innerHTML = news
})

three.addEventListener('click', () => {
    one.classList.remove('selected')
    two.classList.remove('selected')
    three.classList.toggle('selected')
    four.classList.remove('selected')
    five.classList.remove('selected')
    news = selection.replace("0", "3")
    document.getElementById('selection').innerHTML = news
})

four.addEventListener('click', () => {
    one.classList.remove('selected')
    two.classList.remove('selected')
    three.classList.remove('selected')
    four.classList.toggle('selected')
    five.classList.remove('selected')
    news = selection.replace("0", "4")
    document.getElementById('selection').innerHTML = news
})

five.addEventListener('click', () => {
    one.classList.remove('selected')
    two.classList.remove('selected')
    three.classList.remove('selected')
    four.classList.remove('selected')
    five.classList.toggle('selected')
    news = selection.replace("0", "5")
    document.getElementById('selection').innerHTML = news
})

btn.addEventListener('click', ()=>{
    mainCard.classList.remove('active')
    mainCard.classList.add('inactive')
    thksCard.classList.add('active')
    thksCard.classList.remove('inactive')
})