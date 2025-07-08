var myName = 'Rifdhan Mohamed'
var bbName = 'Mook'

var myTitles = 'Programmer, Game Developer'
var bbTitles = 'The cutest jellyfish, best chef, LOML'

var myBG = 'imgs/rif.jpg'
var bbBG = 'imgs/baby.jpg'

var isDisplayChanged = false

var currentMochi = 'imgs/mochiman.jpg'
var youngMochi = 'imgs/babymochi.jpg'

var nameElement = document.getElementById("name")
var titlesElement = document.getElementById("titles")
var imgElement = document.getElementById('main-pic')

var mochiPicElement = document.getElementById('mochi-pic')
var mochiTxtElement = document.getElementById('mochitxt')

function changeName(){

    if(isDisplayChanged) {
        nameElement.textContent = myName
        titlesElement.textContent = myTitles
        imgElement.src = myBG
        isDisplayChanged = false
    } else if (!isDisplayChanged){
        nameElement.textContent = bbName
        titlesElement.textContent = bbTitles
        imgElement.src = bbBG
        isDisplayChanged = true
    }
}

function mochiYoung(){
    mochiPicElement.src = youngMochi
    mochiTxtElement.textContent = "When I first got her"
}

function mochiOld(){
    mochiPicElement.src = currentMochi
    mochiTxtElement.textContent = "My cat Mochi"
}