const bikes = [
    {
        id: 'bike1',
        name: "Quantum Glide Pro",
        imageUrl: "img/bike1.jpg",
        buttonText: "Read More"
    },
    {
        id: 'bike2',
        name: "Nebula Striker Elite",
        imageUrl: "img/bike2.jpg",
        buttonText: "Read More"
    },
    {
        id: 'bike3',
        name: "Stealth Thunderbolt X5",
        imageUrl: "img/bike3.jpg",
        buttonText: "Read More"
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
        <button>${bike.buttonText}</button>
    `;

    bikesContainer.appendChild(bikeElement);
});