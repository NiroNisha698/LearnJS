//call function before declation
console.log(isPositive(-4)) // Hoisting

//function declation 
function isPositive(num){
    return num>0
}

console.log(isPositive(6))
console.log(typeof isPositive)

//default Parameter
function greet(name = 'there'){
    console.log('hi', name)
}
greet() //hi there
greet('niro') //hi niro

//Recuricive function
//5! = 5*4! 
function factorial(n){
    if(n==1)
        return 1

    return n*factorial(n-1)
}
console.log(factorial(5))

//function expression
//assigned to a variable as object
console.log('---------------------------')
let isEven = function(num){
    return num%2 ==0
}
//hoisting not work in expresssion 
console.log(isEven(5))


//expression function for volume
let vol = function(l,w,h){
    return l*w*h
}


//Arrow function for volume
let volume =(l,w,h) => {return l*w*h}
console.log(volume(2,2,4))