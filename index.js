const bikes = [
    {
        id: 'bike1',
        name: "Quantum Glide Pro",
        imageUrl: "img/bike1.jpg",
        buttonText: "Read More",
        link: "#"
    },
    {
        id: 'bike2',
        name: "Nebula Striker Elite",
        imageUrl: "img/bike2.jpg",
        buttonText: "Read More",
        link: "#"
    },
    {
        id: 'bike3',
        name: "Stealth Thunderbolt X5",
        imageUrl: "img/bike3.jpg",
        buttonText: "Read More",
        link: "#"
    }
];

const bikesContainer = document.querySelector('.bikes');

bikes.forEach(bike => {
    const bikeElement = document.createElement('div');
    bikeElement.classList.add('bike');
    bikeElement.id = bike.id;

    bikeElement.innerHTML = `
        <p>${bike.name}</p>
        <img src="${bike.imageUrl}" alt="bike">
        <a href="${bike.link}"><button>${bike.buttonText}</button></a>
    `;

    bikesContainer.appendChild(bikeElement);
});






// accessories iteams
 
const accessories = {
    main: {
        class: 'access',
        products: [
            {
                class: 'prod01',
                title: 'Clothing & Armour',
                icon: 'fa-solid fa-plus',
                image: '/img/accesor01.png',
                alt: 'accessories'
            }
        ]
    },
    smallProducts: {
        class: 'prod-small',
        products: [
            {
                class: 'prod02',
                title: 'Helmet',
                icon: 'fa-solid fa-plus',
                image: '/img/hel v02.png',
                alt: 'accessories'
            },
            {
                class: 'prod02',
                title: 'Lock',
                icon: 'fa-solid fa-plus',
                image: '/img/lock 01.png',
                alt: 'accessories'
            },
            {
                class: 'prod02 hid',
                title: 'Helmet',
                icon: 'fa-solid fa-plus',
                image: '/img/hel v01.png',
                alt: 'accessories'
            },
            {
                class: 'prod02 hid',
                title: 'Lock',
                icon: 'fa-solid fa-plus',
                image: '/img/lock 02.png',
                alt: 'accessories'
            }
        ]
    }
};


function appendAccessoriesToDOM() {

    const mainContainer = document.querySelector('.access'); 


    const mainProductsHTML = accessories.main.products.map(product => `
        <div class="${product.class}">
            <p>${product.title}</p>
            <i class="${product.icon}"></i>
            <img src="${product.image}" alt="${product.alt}">
        </div>
    `).join('');


    const smallProductsHTML = accessories.smallProducts.products.map(product => `
        <div class="${product.class}">
            <p>${product.title}</p>
            <i class="${product.icon}"></i>
            <img src="${product.image}" alt="${product.alt}">
        </div>
    `).join('');

 
    mainContainer.innerHTML = `
        <div class="${accessories.main.class}">
            ${mainProductsHTML}
        </div>
        <div class="${accessories.smallProducts.class}">
            ${smallProductsHTML}
        </div>
    `;
}


appendAccessoriesToDOM();


const bars = document.querySelector(".fa-bars-staggered")
const meniu = document.querySelector(".burger-meniu")
const close = document.querySelector(".fa-rectangle-xmark")

bars.addEventListener("click", ()=>{
    meniu.classList.remove("visible")
})

close.addEventListener("click", ()=>{
    meniu.classList.add("visible")
})


// navbar
const nav = document.querySelector('.nav');
const hamburgerMenu = document.querySelector('.burger-meniu');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;

  // Check the scroll direction
  if (scrollTop > lastScrollTop) {
    // Scrolling down
    nav.style.top = '-100px'; // Adjust the value as needed
    hamburgerMenu.style.opacity = '0';
    hamburgerMenu.style.transform = 'translateX(100%)';
  } else {
    // Scrolling up
    nav.style.top = '0';
    hamburgerMenu.style.opacity = '1';
    hamburgerMenu.style.transform = 'translateX(0)';
  }

  lastScrollTop = scrollTop;
});