// toggle theme
var  toggle1 = document.querySelector('.t1')
var  toggle2 = document.querySelector('.t2')
var  toggle3 = document.querySelector('.t3')
var body = document.querySelector('body')

var calcHeading = document.querySelector('.calc-heading')
var screenContainer = document.querySelector('.calc-screen-container')
var eButton = document.querySelector('.equals')
var wButton = document.querySelector('.worded-button')
var calcButton = document.querySelector('.calc-button')
var toggle = document.querySelector('.button-cont')
var calcBody = document.querySelector('.calc-body-container')

// function 
toggle1.addEventListener('click', ()=>{
    toggleTheme1()
})

toggle2.addEventListener('click', ()=>{
    toggleTheme2()
})

toggle3.addEventListener('click', ()=>{
    toggleTheme3()
})

// theme 1
const toggleTheme1 = () => {

    toggle1.classList.add('visible')
    toggle2.classList.remove('visible')
    toggle3.classList.remove('visible')

    body.classList.add('bodyTheme1')
    body.classList.remove('bodyTheme2')
    body.classList.remove('bodyTheme3')

    calcHeading.classList.add()
    calcHeading.classList.remove()
    calcHeading.classList.remove()

    screenContainer.classList.add()
    screenContainer.classList.remove()
    screenContainer.classList.remove()

    eButton.classList.add()
    eButton.classList.remove()
    eButton.classList.remove()

    wButton.classList.add()
    wButton.classList.remove()
    wButton.classList.remove()

    calcButton.classList.add()
    calcButton.classList.remove()
    calcButton.classList.remove()

    toggle.classList.add()
    toggle.classList.remove()
    toggle.classList.remove()

    calcBody.classList.add()
    calcBody.classList.remove()
    calcBody.classList.remove()
}


// theme 2
const toggleTheme2 = () => {

    toggle1.classList.remove('visible')
    toggle2.classList.add('visible')
    toggle3.classList.remove('visible')

    body.classList.remove('bodyTheme1')
    body.classList.add('bodyTheme2')
    body.classList.remove('bodyTheme3')

    calcHeading.classList.remove()
    calcHeading.classList.add()
    calcHeading.classList.remove()

    screenContainer.classList.remove()
    screenContainer.classList.add()
    screenContainer.classList.remove()

    eButton.classList.remove()
    eButton.classList.add()
    eButton.classList.remove()

    wButton.classList.remove()
    wButton.classList.add()
    wButton.classList.remove()

    calcButton.classList.remove()
    calcButton.classList.add()
    calcButton.classList.remove()

    toggle.classList.remove()
    toggle.classList.add()
    toggle.classList.remove()

    calcBody.classList.remove()
    calcBody.classList.add()
    calcBody.classList.remove()
}


// theme 3
const toggleTheme3 = () => {

    toggle1.classList.remove('visible')
    toggle2.classList.remove('visible')
    toggle3.classList.add('visible')

    body.classList.remove('bodyTheme1')
    body.classList.remove('bodyTheme2')
    body.classList.add('bodyTheme3')

    calcHeading.classList.remove()
    calcHeading.classList.remove()
    calcHeading.classList.add()

    screenContainer.classList.remove()
    screenContainer.classList.remove()
    screenContainer.classList.add()

    eButton.classList.remove()
    eButton.classList.remove()
    eButton.classList.add()

    wButton.classList.remove()
    wButton.classList.remove()
    wButton.classList.add()

    calcButton.classList.remove()
    calcButton.classList.remove()
    calcButton.classList.add()

    toggle.classList.remove()
    toggle.classList.remove()
    toggle.classList.add()

    calcBody.classList.remove()
    calcBody.classList.remove()
    calcBody.classList.add()
}