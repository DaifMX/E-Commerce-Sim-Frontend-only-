//Cart Calculator\\
const shippingCountry = document.getElementById("country");
const shippingPriceHTML = document.getElementById("shippingPrice");

const item = document.getElementById("itemInCart");   
const itemChild = item.children;

let shippingPrice = 0;

shippingCountry.value = "default";

const subtotalHTML = document.getElementById("subtotalPrice");
subtotalHTML.innnerHTML = `${subtotal}`;


function calcTotal(ship){
    const totalHTML = document.getElementById("totalPrice");
    let total = ship + subtotal;
    total = Math.floor(total * 100) / 100;
    
    shippingPriceHTML.innerHTML = `$${ship}`;
    totalHTML.innerHTML = `${total}`;
}

function changeShippingValue(){
    switch (shippingCountry.value){
        case "default":
            shippingPrice = 0.00;
            calcTotal(shippingPrice);
            break;

        case "mex":
            shippingPrice = 14.99;
            calcTotal(shippingPrice);
            break;
        
        case "arg":
            shippingPrice = 24.99;
            calcTotal(shippingPrice);
            break;

        case "usa":
            shippingPrice = 4.99;
            calcTotal(shippingPrice);
            break;
    }
}

changeShippingValue();

//Renders cart items into "Cart Summary"
function summonCartItems(){
    cart.forEach((element) => {
        item.innerHTML += `
        <div class="superContainer">
        <div class="item pr-2"><img src="${element.img1}" width="80" height="80">
        <div class="number">${cart.indexOf(element)  + 1}</div>
        </div>
        <div class="d-flex flex-column px-3" id="itemName"> <b class="h5" id=${element.id}>${element.name}</b>
        <div class="ml-auto"> <b class="h5">$${element.rawPrice}</b></div>
        <hr>
        </div>
        `;

        
    });

    //Item deletion from cart
    Array.from(itemChild).forEach((element, i) =>{
        element.addEventListener('click', () =>{
            Swal.fire({
                title: 'Are you sure?',
                text: `${cart[i].name}`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Deleted!',
                    `${cart[i].name} has been deleted.`,
                    'success'
                  )
                cart.pop(cart.indexOf(element));
                localStorage.setItem("cart", JSON.stringify(cart));
                  //Force reload to show changes
                    function reload(){
                        location.reload();
                    } setTimeout(reload, 950)
                }
            });
        });
    });
}

summonCartItems();

//Validate and sell\\
function createSell(){

    document.getElementById("btnPay").addEventListener('click', () => {

        let formCellsBlank = [];
        let formCellsValidity = [];
        
        let validity = true;

        const name = document.getElementById("nameForm");
        const email = document.getElementById("emailForm");
        const city = document.getElementById("cityForm");
        const zipCode = document.getElementById("zipCodeForm");
        const address = document.getElementById("addressForm");
        const state = document.getElementById("stateForm");
        
        //Validity DOM
        const nameValid = name.validity.valid;
        const emailValid = email.validity.valid;
        const cityValid = city.validity.valid;
        const zipCodeValid = zipCode.validity.valid;
        const addressValid = address.validity.valid;
        const stateValid = state.validity.valid;

        formCellsBlank.push(name, email, city, zipCode, address, state);
        formCellsValidity.push(nameValid, emailValid, cityValid, zipCodeValid, addressValid, stateValid);

        formCellsValidity.forEach((element) => {
            if (!element) {
                validity = false;
            }
        });

        formCellsBlank.forEach((element) =>{
            if (element.value == "") {
                validity = false;
            }
        });


        if (!validity || shippingCountry.value == "default" || cart == []){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: 'Check the veracity of your data'
              });
        } else {
            Swal.fire(
                'Order created succesfully',
                '',
                'success'
              );
            localStorage.clear("cart");
            
            function replace(){
                location.replace("../index.html")
            } setTimeout(replace, 1500);
        }
    });
}

createSell();