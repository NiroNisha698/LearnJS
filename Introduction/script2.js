// Objects -------------
// Create Object
//method1
let itemObject = {
    name: 'phone',
    price:25000,
    quantity:10,
    categories: ['electronic','phones'],
    dimentions: {
        length:8,
        width:12,
        height:10
    },
    buy: function(){
        console.log("This is function")
    },
    addToList(){
        console.log("This item added to Cart")
    }
}

console.log(itemObject)

//method2
let itemObjcect2 = new Object();
itemObjcect2.name = 'Charger'
itemObjcect2.price = 500
itemObjcect2.quantity =2

console.log(itemObjcect2)

// accesing element
console.log(itemObject.price)

itemObjcect2.returnable = true

//access array
console.log(itemObject.categories)

//invoke method
itemObject.buy()
itemObject.addToList()


//-------------Loop----------------------
for(let i=1; i<5; i++){
   // console.log(i)
}

let w=10
while(w>5){
//console.log(w)
w--;
}


//break- stop the loop
while(true){
  //let num=   Number(prompt("emter number"))
 //if(!isNaN(num))
    break;
}
console.log("Continue Demo")
//continue- skip current iteration
for(i=1; i<10;i++){
    if(i%3 == 0)
        continue;
    console.log(i) //1,2,4,5,7,8
}



//For...of ----------------------------------
let arr = ['apple','orange','graps']

for(i=0; i<arr.length;i++){
    console.log(arr[i].toUpperCase())
}

for(let fruit of arr)
    console.log(fruit)


//for....in Object element iteration  --------
for(let key in itemObject)
    console.log(key)