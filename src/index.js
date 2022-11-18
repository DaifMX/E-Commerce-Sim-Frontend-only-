//Developed by: Daif

const container = document.getElementById("productDisplay");

const categoryList = ["Case", "Cooling", "CPU", "Drive", "GPU", "Mobo", "PSU", "RAM"];
const HTMLSubPages = ["cases.html", "cooling.html", "cpu.html", "drives.html", "gpu.html", "mobo.html", "psu.html", "ram.html"];
let cart = [];
let filtered = [];

let subtotal = 0;

function cartUpdater(){ //Actualiza el subtotal del carrito conforme se le vayan agregando productos al mismo.
    subtotal = cart.reduce((acumulator, element) => acumulator + element.rawPrice, 0);
    subtotal = Math.floor(subtotal * 100) / 100; //Limitar número de decimales a dos

    const cart_price = document.getElementById("subtotalPrice"); //Cantidad a pagar en Barra de Nav y Subtotal en Cart
    cart_price.innerHTML = `<div>$${subtotal}</div>`;

    const item_counter = document.getElementById("cartItemCounter"); //Número de items en Barra de Nav
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
        cartUpdater();
    } 

    filtered.forEach((element) => {
        document.getElementById(`card${element.id}`).addEventListener('click', () => {
            cart.push(element);

            Swal.fire(
                'Item succesfully added to cart!',
                element.name,
                'success'
              );

            cartUpdater();

            //Guardado de Datos
            localStorage.setItem("cart", JSON.stringify(cart));
        })
    })
}

productRender();