function searchItem() {
    // Get the search term
    const searchBox = document.getElementById('searchBox');
    const searchTerm = searchBox.value.trim().toLowerCase();
    


    // Define the mapping of items to their Explore_Seeds links
    const itemLinks = {
        tomato: "Explore_Seeds.html#tomato",
        lettuce: "Explore_Seeds.html#lettuce",
        sunflower: "Explore_Seeds.html#sunflower",
        basil_genovese: "Explore_Seeds.html#basil_genovese",
        carrot: "Explore_Seeds.html#carrot",
        cucumber: "Explore_Seeds.html#cucumber",
        peas: "Explore_Seeds.html#peas",
        spinach: "Explore_Seeds.html#spinach",
        zucchini: "Explore_Seeds.html#zucchini",
        cabbage: "Explore_Seeds.html#cabbage",
        sweet_pepper: "Explore_Seeds.html#sweet_pepper",
        radish_cherry_belle: "Explore_Seeds.html#radish_cherry_belle",
        kale: "Explore_Seeds.html#kale",
        pumpkin: "Explore_Seeds.html#pumpkin",
        arugula: "Explore_Seeds.html#arugula",
        chard: "Explore_Seeds.html#chard",
        thyme: "Explore_Seeds.html#thyme",
        chives_garlic: "Explore_Seeds.html#chives_garlic",
        brinjal: "Explore_Seeds.html#brinjal",
        okra: "Explore_Seeds.html#okra",
        cabbage_pusa_drumshead: "Explore_Seeds.html#cabbage_pusa_drumshead",
        spinach_pusa_harit: "Explore_Seeds.html#spinach_pusa_harit",
        chili: "Explore_Seeds.html#chili",
        bottle_gourd: "Explore_Seeds.html#bottle_gourd",
        french_bean: "Explore_Seeds.html#french_bean",
        onion: "Explore_Seeds.html#onion",
        mustard: "Explore_Seeds.html#mustard",
        fenugreek: "Explore_Seeds.html#fenugreek",
        corriander: "Explore_Seeds.html#corriander",
        mint: "Explore_Seeds.html#mint",
        tulsi: "Explore_Seeds.html#tulsi",
        aloe_vera: "Explore_Seeds.html#aloevera",
        money_plant: "Explore_Seeds.html#moneyplant",
        };

    // Check if the search term exists in the mapping
    if (itemLinks[searchTerm]) {
        window.location.href = itemLinks[searchTerm]; // Redirect to the item's page
    } else {
        alert("Item not found in the catalog.");
    }
}

// Seed data
const seeds = [
    {
        name: "Tomato",
        image: "images/tomato.jpg",
        description: "A versatile vegetable perfect for sauces, salads, and more."
    },
    {
        name: "Lettuce",
        image: "images/lettuce.jpg",
        description: "A fresh and crispy addition to your salads and sandwiches."
    },
    {
        name: "Sunflower",
        image: "images/sunflower.jpg",
        description: "Bright and cheerful flowers that attract pollinators."
    },
    // Add more seed objects as needed...
];

// Display seeds in the catalog
function displaySeeds() {
    const seedList = document.getElementById('seed-list');
    seedList.innerHTML = seeds.map(seed => `
        <div class="feature">
            <img src="${seed.image}" alt="${seed.name}">
            <h2>${seed.name}</h2>
            <p>${seed.description}</p>
        </div>
    `).join('');
}

// Search functionality
function searchSeeds() {
    const query = document.getElementById('searchBox').value.toLowerCase();
    const filteredSeeds = seeds.filter(seed => seed.name.toLowerCase().includes(query));
    const seedList = document.getElementById('seed-list');
    seedList.innerHTML = filteredSeeds.map(seed => `
        <div class="feature">
            <img src="${seed.image}" alt="${seed.name}">
            <h2>${seed.name}</h2>
            <p>${seed.description}</p>
        </div>
    `).join('');
}

// Initialize catalog
displaySeeds();
