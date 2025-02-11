
 let amount =1000
 console.log("Your bill amount is Rs. "+ amount)

 const u=1

 //user input Prompt
//  let name = prompt("Whats your name")
//  console.log("hi", name)

//alert("Hey alert")


// let ticket = prompt("How many ticket you want? ")
// console.log("You should pay", ticket*20)


let a = prompt("Enter a number")
console.log(Number(a)+10)

//DOM
let message = document.getElementById("message")
message.innerHTML = "Welcome to our website "

//String
let str1 = "Hello"
let str2 = " World"

let string = document.getElementById("stringCombo")
string.innerHTML = str1 + str2

//method 2 concat
console.log(str1.concat(str2))

//Arrays
let cities = ["A","B","C"]

let arr = [1,2,"A", "B"]

//2d array
let matrix = [[1,2,3] , [4,5,9] , [7,9,5]]

///array method

//add array
cities.push("F")
console.log("Cities", cities)

//remove array
cities.pop()
console.log(cities.shift())

//delete
delete cities[1]
console.log("After delete Citiess", cities)

//splice
let animal = ["S","U", "V","W","X"]

console.log("Animal", animal)
//animal.splice(1,3)
console.log("Animal after splice", animal)

animal.splice(1,0,'L')
console.log("Animal add", animal)

//slice
animal.slice(1,3)
console.log(animal.slice(1,3)) //return 1-2th element


//Join - covert array to string
let str = animal.join()
console.log(str)

//Split - convert string to array
let str3 = "g,r,t,w"
let array2 = str3.split(",")
console.log(array2)


//concate and spread operatoe
let firstArr = [1,2,3]
let secondArr = [4,5,6]

let joinedArr = [firstArr,secondArr]
console.log(joinedArr)

joinedArr = firstArr.concat(secondArr)
console.log(joinedArr)

let joined = [...firstArr, ...secondArr]
console.log(joined)