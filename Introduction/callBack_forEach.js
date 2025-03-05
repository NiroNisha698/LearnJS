//call back- Function passed as an argument

function greetConsole(name){
    console.log('hello', name)
}

function greetHeading(name){
    const heading= document.querySelector('h1')
    heading.innerHTML= "Hello "+name
}

function greet(callbackkk){
    callbackkk('Ram')
}

//greet(greetHeading)

greet(name => {
    const heading= document.querySelector('h1')
heading.innerHTML= "Hello "+name})


//For Each-----------------
arr = ['A','C','D','M']
arr.forEach(print)

function print(val){
    console.log(val)
}


//using arrow function
arr.forEach(val => {
    console.log('Hi '+val)
})

//function for select dropdown
arr.forEach(val => {
    const opt = document.createElement('option')
     opt.textContent = val
     opt.value = val 
     
     document.getElementById('branch').appendChild(opt)
    
})