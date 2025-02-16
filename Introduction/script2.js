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
