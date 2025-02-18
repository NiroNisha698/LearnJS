const btnChange = document.getElementById("btn")
const txtColorCode = document.getElementById("colorCode")
const bgColor = document.getElementById("wrap")

const hexArr= [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

btnChange.addEventListener('click',

function(){
 let hexCode = '#'

 for(let i=1; i<=6; i++){
    hexCode = hexCode + randomHexCode()
 }

 txtColorCode.innerHTML =hexCode

 bgColor.style.backgroundColor = hexCode
})


// for generate random number with 0-16
function randomHexCode(){

    let randomIndex = Math.floor(Math.random()*16)
    return hexArr[randomIndex]
}