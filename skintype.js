function recommendProducts() {
    const dryness = document.getElementById('dryness').value;
    const oily = document.getElementById('oily').value;
    const acne = document.getElementById('acne').value;
    const sensitivity = document.getElementById('sensitivity').value;

    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = ''; // Clear previous recommendations

    // Define recommendations for each skin concern with direct image links
    const recommendations = {
        dryness: [
            { name: "CeraVe Hydrating Cleanser", image: "https://www.cerave.com/-/media/project/loreal/brand-sites/cerave/americas/us/skincare/cleansers/hydrating-facial-cleanser/photos/2022/700x875/cerave_daily_hydrating-cleanser_12oz_front-700x875-v2.jpg?rev=0dfb8be7994642ff9e1bc4f41e08a18b&w=500&hash=F5F801D0E9B4481806F8EBB69FE20BAD" },
            { name: "Neutrogena Hydro Boost Gel Cream", image: "https://m.media-amazon.com/images/I/71Z+wNMRYYL.jpg" }
        ],
        oily: [
            { name: "La Roche-Posay Effaclar Purifying Foaming Gel", image: "https://m.media-amazon.com/images/I/61PXogJgDgL.jpg" },
            { name: "Clinique Dramatically Different Moisturizing Gel", image: "https://m.media-amazon.com/images/I/71l2ncE83LL.jpg" }
        ],
        acne: [
            { name: "Differin Adapalene Gel", image: "https://5.imimg.com/data5/SELLER/Default/2022/6/VM/MM/CY/155204265/adapalene.jpg" },
            { name: "Neutrogena On-The-Spot Acne Treatment", image: "https://m.media-amazon.com/images/I/7136F1cxgfL.jpg" }
        ],
        sensitivity: [
            { name: "Aveeno Ultra-Calming Foaming Cleanser", image: "https://m.media-amazon.com/images/I/51fDijePdrL.jpg" },
            { name: "Bioderma Sensibio H2O", image: "https://m.media-amazon.com/images/I/51h69lpwKlL.jpg" }
        ]
    };

    // Helper function to create a section with products
    function createProductSection(title, products) {
        const section = document.createElement('div');
        const sectionTitle = document.createElement('h3');
        sectionTitle.textContent = title;
        sectionTitle.classList.add('product-category-title');
        section.appendChild(sectionTitle);

        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');

            const img = document.createElement('img');
            img.src = product.image;
            img.alt = product.name;

            const productName = document.createElement('p');
            productName.textContent = product.name;

            productItem.appendChild(img);
            productItem.appendChild(productName);
            section.appendChild(productItem);
        });

        return section;
    }

    // Clear previous recommendations and add new ones based on selections
    if (dryness === 'yes') {
        productsGrid.appendChild(createProductSection("Dry Skin Products", recommendations.dryness));
    }
    if (oily === 'yes') {
        productsGrid.appendChild(createProductSection("Oily Skin Products", recommendations.oily));
    }
    if (acne === 'yes') {
        productsGrid.appendChild(createProductSection("Acne Products", recommendations.acne));
    }
    if (sensitivity === 'yes') {
        productsGrid.appendChild(createProductSection("Sensitive Skin Products", recommendations.sensitivity));
    }

    if (productsGrid.innerHTML === '') {
        productsGrid.innerHTML = '<p>No specific products recommended based on your selections.</p>';
    }

    document.getElementById('productRecommendations').classList.remove('hidden');
}
