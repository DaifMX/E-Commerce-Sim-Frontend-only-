updater();

if (cart != []){
let itemName = document.getElementById("itemName");
itemName.innerHTMl = `<h5>Hola</h5>`
} else {}


//Basic Shipping Calculator\\
let shippingCountry = document.getElementById("country");
let shippingPriceHTML = document.getElementById("shippingPrice");

shippingCountry.value = "default";

let shippingList = {
    default: 0.00,
    mex: 14.99,
    arg: 24.99,
    usa: 4.99
}

function changeShippingValue(){
    switch (shippingCountry.value){
        case "default":
            shippingPriceHTML.innerHTML = `$${shippingList.default}`;
            break;

        case "mex":
            shippingPriceHTML.innerHTML = `$${shippingList.mex}`;
            break;
        
        case "arg":
            shippingPriceHTML.innerHTML = `$${shippingList.arg}`;
            break;

        case "usa":
            shippingPriceHTML.innerHTML = `$${shippingList.usa}`;
            break;
    }
}

changeShippingValue();

//Total Calculator\\
let totalHTML = document.getElementById("totalPrice");
let subtotal = cart.reduce((acumulator, element) => acumulator + element.rawPrice, 0);

let shippingPrice; //Pendiente manera de conseguir el precio del shipping en int

let total = shippingPrice + subtotal;

totalHTML.innerHTML = `${total}`;

//Summon Cart Elements\\
function summonCart(){
    cart.forEach((element) => {
        
    })
}
