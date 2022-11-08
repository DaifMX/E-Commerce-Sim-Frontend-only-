const products = [
    //Cases
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

    {
        id: "case3",
        name: "Corsair 5000X QL",
        price: "$119.99",
        rawPrice: 119.99,
        about: "Corsair iCUE 5000X QL Mid-Tower ATX White",
        img1: "../../../img/products/cases/3.png",
        category: "Case",
        featured: true
    },

    //Cooling

    {
        id: "cooling1",
        name: "AIO Corsair iCUE H150i",
        price: "$169.99",
        rawPrice: 179.99,
        about: "Liquid Cooler Corsair iCUE H150i RGB PRO XT (3x 120mm) Black",
        img1: "../../../img/products/cooling/1.png",
        category: "Cooling"
    },

    {
        id: "cooling2",
        name: "AIO Corsair iCUE H100i",
        price: "$159.99",
        rawPrice: 159.99,
        about: "Liquid Cooler Corsair iCUE H100i RGB PRO XT (2x 120mm) Black",
        img1: "../../../img/products/cooling/2.png",
        category: "Cooling"
    },

    {
        id: "cooling3",
        name: "Cooler Noctua NH-U12A",
        price: "$99.99",
        rawPrice: 99.99,
        about: "Noctua NH-U12A Black (x2 120mm)",
        img1: "../../../img/products/cooling/3.png",
        category: "Cooling",
        featured: true,
    },

    //CPU

    {
        id: "cpu1",
        name: "i9 13900k",
        price: "$899.99",
        rawPrice: 899.99,
        about: "Intel Core i9 13900k",
        img1: "../../../img/products/cpu/13900k.png",
        category: "CPU"
    },

    {
        id: "cpu2",
        name: "i7 13700k",
        price: "$699.99",
        rawPrice: 699.99,
        about: "Intel Core i7 13700k",
        img1: "../../../img/products/cpu/13700k.png",
        category: "CPU"
    },

    {
        id: "cpu3",
        name: "i5 13600k",
        price: "$329.99",
        rawPrice: 329.99,
        about: "Intel Core i5 13600k",
        img1: "../../../img/products/cpu/13600k.png",
        category: "CPU",
        featured: true,
      
    },
    
    //Drive

    {
        id: "drive1",
        name: "Sabrent 4tb Rocket 4 M.2",
        price: "$749.99",
        rawPrice: 749.99,
        about: "Sabrent 4tb Rocket 4 Plus NVMe Gen4 PCIe M.2 Read 7 GB/s Write 6.6 GB/s",
        img1: "../../../img/products/drives/1.png",
        category: "Drive"
    },

    {
        id: "drive2",
        name: 'WD Black HDD 4tb 3.5"',
        price: "$149.99",
        rawPrice: 149.99,
        about: 'Western Digital Black HDD 4tb 3.5" 7200RPM SATA',
        img1: "../../../img/products/drives/2.png",
        category: "Drive"
    },

    {
        id: "drive3",
        name: "Kingston SSD 480GB",
        price: "$79.99",
        rawPrice: 79.99,
        about: "Kingston SA400S37240GA Read 500 MB/s Write 450 MB/s SATA",
        img1: "../../../img/products/drives/3.png",
        category: "Drive",
        featured: true
    },
    
    //GPU
    
    {
        id: "gpu1",
        name: "ASUS RTX 3080",
        price: "$799.99",
        rawPrice: 799.99,
        about: "ASUS ROG STRIX NVIDIA GeForce RTX3080 12GB VRAM GDDR6X",
        img1: "../../../img/products/gpu/rtx3080.jpg",
        category: "GPU",
    },

    {
        id: "gpu2",
        name: "ASUS RTX 3070",
        price: "$499.99",
        rawPrice: 499.99,
        about: "ASUS Dual NVIDIA GeForce RTX3070 8GB VRAM GDDR6",
        img1: "../../../img/products/gpu/rtx3070.png",
        category: "GPU",
    },

    {
        id: "gpu3",
        name: "EVGA RTX 3060",
        price: "$379.99",
        rawPrice: 379.99,
        about: "EVGA XC NVIDIA GeForce RTX3060 12GB VRAM GDDR6",
        img1: "../../../img/products/gpu/rtx3060.png",
        category: "GPU",
        featured: true
    },

    //Mobo

    {
        id: "mobo1",
        name: "MSI MEG Z790 Ace",
        price: "$819.99",
        rawPrice: 819.99,
        about: "MSI MEG Z790 Ace E-ATX Socket LGA1700",
        img1: "../../../img/products/mobo/1.png",
        category: "Mobo",
    },

    {
        id: "mobo2",
        name: "MSI PRO Z790-A WiFi",
        price: "$299.99",
        rawPrice: 299.99,
        about: "MSI PRO Z790-A ATX Socket LGA1700",
        img1: "../../../img/products/mobo/2.png",
        category: "Mobo",
    },

    {
        id: "mobo3",
        name: "NZXT N7 Z790",
        price: "$249.99",
        rawPrice: 249.99,
        about: "NZXT N7 Z790 ATX Socket LGA1700",
        img1: "../../../img/products/mobo/3.png",
        category: "Mobo",
        featured: true
    },

    //PSU

    {
        id: "psu1",
        name: "Seasonic PRIME 1300W",
        price: "$289.99",
        rawPrice: 289.99,
        about: "Seasonic PRIME 1300 Platinum S1300W 80+ Platinum Modular",
        img1: "../../../img/products/psu/1.png",
        category: "PSU",
    },

    {
        id: "psu2",
        name: "EVGA 1000GQ",
        price: "$189.99",
        rawPrice: 189.99,
        about: "EVGA 1000GQ 1000W 80+ Gold Modular",
        img1: "../../../img/products/psu/2.png",
        category: "PSU",
    },

    {
        id: "psu3",
        name: "Corsair RM850",
        price: "$94.99",
        rawPrice: 94.99,
        about: "CORSAIR RM Series (2021) RM850 80+ Gold",
        img1: "../../../img/products/psu/3.png",
        category: "PSU",
        featured: true
    },

    //RAM

    {
        id: "ram1",
        name: "Dominator 32GB",
        price: "$199.99",
        rawPrice: 199.99,
        about: "CORSAIR Dominator Platinum RGB DDR5 32GB (2x16GB) DDR5 5200 MT/S",
        img1: "../../../img/products/ram/1.png",
        category: "RAM",
    },

    {
        id: "ram2",
        name: "Kingston Fury 16GB",
        price: "$99.99",
        rawPrice: 99.99,
        about: "Kingston Fury Beast Black 16GB 4800MT/s DDR5",
        img1: "../../../img/products/ram/2.png",
        category: "RAM",
    },

    {
        id: "ram3",
        name: "Kingston Fury 8GB",
        price: "$49.99",
        rawPrice: 49.99,
        about: "Kingston Fury Beast Black 8GB 4800MT/s DDR5",
        img1: "../../../img/products/ram/3.png",
        category: "RAM",
        featured: true
    }  
]
