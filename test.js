products = [
    {
        id: "case1",
        name: "Lian Li O11 Dynamic",
        price: "$169.99",
        rawPrice: 169.99,
        about: "Lian Li Dynamic Evo Mid-Tower ATX Black",
        img1: "../../../img/products/cases/1.png",
        category: "Case"
    },
    {
        id: "case1",
        name: "Lian Li O11 Dynamic",
        price: "$169.99",
        rawPrice: 169.99,
        about: "Lian Li Dynamic Evo Mid-Tower ATX Black",
        img1: "../../../img/products/cases/1.png",
        category: "Case"
    },
    {
        id: "case2",
        name: "NZXT H7 Flow",
        price: "$129.99",
        rawPrice: 129.99,
        about: "NZXT H7 Flow Mid-Tower ATX White",
        img1: "../../../img/products/cases/2.png",
        category: "Case"
    },
]

products.forEach((element) => {

    
    element.forEach((item) => {

    })
    let amount = products.filter( (element) => (element === element.id) ).length;

    console.log(amount);

    if (amount > 1) {
        console.log("Se repite", element.id);
    } else {
        console.log("No se repite", element.id);
    }
})
