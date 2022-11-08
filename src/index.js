//Developed by: Daif

let container = document.getElementById("productDisplay");

const categoryList = ["Case", "Cooling", "CPU", "Drive", "GPU", "Mobo", "PSU", "RAM"];
const HTMLSubPages = ["cases.html", "cooling.html", "cpu.html", "drives.html", "gpu.html", "mobo.html", "psu.html", "ram.html"];
let cart = [];
const filtered = [];


function updater(){
    let subtotal = cart.reduce((acumulator, element) => acumulator + element.rawPrice, 0);
    subtotal = Math.floor(subtotal * 100) / 100; //Limitar número de decimales a dos

    console.table(cart);

    let cart_price = document.getElementById("subtotalPrice"); //Cantidad a pagar en Barra de Nav
    cart_price.innerHTML = `<div>$${subtotal}</div>`;

    let item_counter = document.getElementById("cartItemCounter"); //Número de items en Barra de Nav
    if (item_counter){
        item_counter.innerHTML = `<span>${cart.length}</span>`;
    }
    
}

function productRender(){
    //Filter\\
    for (const element of products) {
        HTMLSubPages.forEach((subpage, categories) => {
            const category = categoryList[categories];
            if (document.URL.indexOf(subpage) >= 0 && element.category == category) {
                filtered.push(element);
            } 
        })
        if (document.URL.indexOf("index.html") >= 0 && element.featured == true){
            filtered.push(element);
        }
    }

    //HTML Summoner\\
    filtered.forEach((element) => {
        container.innerHTML += `
            <div class="card-container" id="card${element.id}">
                <h1 class="child"> ${element.name} </h1> 
                <div class="child"> <img src="${element.img1}" alt="img1"> </div>
                <div class="child price"> ${element.price} </div> 
                <div class="child about"> ${element.about} </div>
            </div>
            `;
    })

    //Cart\\
    if (JSON.parse(localStorage.getItem("cart")) != null){
        cart = JSON.parse(localStorage.getItem("cart"));
        updater();
    } 

    filtered.forEach((element) => {
        document.getElementById(`card${element.id}`).addEventListener('click', () => {
            cart.push(element);
            console.log("Item: " + element.name + " added to cart");

            updater();

            //Guardado de Datos
            localStorage.setItem("cart", JSON.stringify(cart));
        })
    })
}

productRender();