const searched_item = document.querySelector("#searched-item");
const productContainer = document.querySelector("#product-container");
const filteredItems = document.querySelectorAll(".filter-item");


// All Products Array

const products = [
  {
    id: 1,
    name: "Professional Makeup Combo",
    tagline: "Everything You Need For A Flawless Look.",
    price: 1499,
    originalPrice: 1999,
    discount: 25,
    category: "Makeup",
    image: "images/makeup-combo-set-img.jpeg"
  },
  {
    id: 2,
    name: "Premium Makeup Kit",
    tagline: "Create Stunning Looks Like A Pro.",
    price: 1999,
    originalPrice: 2599,
    discount: 23,
    category: "Makeup",
    image: "images/makeup-kit-img.jpeg"
  },
  {
    id: 3,
    name: "Liquid Lipstick Collection",
    tagline: "Bold Color That Lasts All Day.",
    price: 799,
    originalPrice: 1099,
    discount: 27,
    category: "Makeup",
    image: "images/liquid-lipstick-img.jpeg"
  },
  {
    id: 4,
    name: "Lipstick Combo Pack",
    tagline: "Perfect Shades For Every Occasion.",
    price: 999,
    originalPrice: 1299,
    discount: 23,
    category: "Makeup",
    image: "images/lipstick-combo-img.jpeg"
  },
  {
    id: 5,
    name: "Eye Liner Pro",
    tagline: "Define Your Eyes With Precision.",
    price: 399,
    originalPrice: 599,
    discount: 0,
    category: "Makeup",
    image: "images/eye-liner-img.jpeg"
  },
  {
    id: 6,
    name: "Eyeshadow Palette",
    tagline: "Vibrant Colors For Mesmerizing Eyes.",
    price: 699,
    originalPrice: 999,
    discount: 30,
    category: "Makeup",
    image: "images/eye-shadow-img.jpeg"
  },
  {
    id: 7,
    name: "Concealer Palette",
    tagline: "Cover Imperfections With Confidence.",
    price: 899,
    originalPrice: 1199,
    discount: 25,
    category: "Makeup",
    image: "images/concealer-colorPalette-img.jpeg"
  },
  {
    id: 8,
    name: "Luxury Foundation Set",
    tagline: "Smooth Coverage With A Natural Glow.",
    price: 1099,
    originalPrice: 1499,
    discount: 27,
    category: "Makeup",
    image: "images/foundation-containers-advertising-assortment.jpg"
  },
  {
    id: 9,
    name: "Hydrating Face Wash",
    tagline: "Fresh, Clean & Hydrated Skin Daily.",
    price: 299,
    originalPrice: 399,
    discount: 25,
    category: "Skincare",
    image: "images/himalaya-face-wash.jpeg"
  },
  {
    id: 10,
    name: "SPF 50 Sunscreen",
    tagline: "Powerful Sun Protection Every Day.",
    price: 499,
    originalPrice: 699,
    discount: 29,
    category: "Skincare",
    image: "images/sunscreen-cream-bottle-tube-isolated-vector.jpg"
  },
  {
    id: 11,
    name: "Nourishing Lip Balm",
    tagline: "Soft, Smooth & Moisturized Lips.",
    price: 199,
    originalPrice: 299,
    discount: 33,
    category: "Skincare",
    image: "images/lip-balm-img.jpeg"
  },
  {
    id: 12,
    name: "Glossy Lip Collection",
    tagline: "Shine Bright With Every Smile.",
    price: 599,
    originalPrice: 799,
    discount: 25,
    category: "Makeup",
    image: "images/top-view-lipgloss-arrangement.jpg"
  },
  {
    id: 13,
    name: "Beauty Essentials Combo",
    tagline: "Your Complete Beauty Care Solution.",
    price: 1299,
    originalPrice: 1799,
    discount: 28,
    category: "Makeup",
    image: "images/combo-category-img-1.jpeg"
  }
];


// Shorter the name function 

function shorterName(name, limit=15){
    if(name.length > limit){
        return name.substring(0, limit) + "...";
    }
    else{
        return name;
    }
}


// Create product function 
  
function createProductCard(product){
    const productName = shorterName(product.name, 15);
    const productTagline = shorterName(product.tagline, 25);
    
    return `
            <div class="col">
                <div class="product-card card flex-shrink-0 shadow p-3 mx-2 my-4 rounded" 
                data-id="${product.id}"
                data-name="${product.name}" 
                data-price="${product.price}" 
                data-img="${product.image}" 
                data-category="${product.category}" 
                data-tagline="${product.tagline}">
                    <div class="position-relative">
        
                        <!-- Discount Badge -->
                        <span class="position-absolute top-0 end-0 m-2 badge rounded-pill" style="background:#f7075f;">
                            <span style="font-size: 15px;">${product.discount}% OFF</span>
                        </span>

                        <img src="${product.image}" class="card-img-top">
                    </div>
                    <div class="card-body text-center">
                        <h6 class="card-title">${productName}</h6>
                        <p class="text-muted small mb-2">${productTagline}</p>
                        <p>
                            <span class="fw-bold text-danger mb-2">₹${product.price}</span> 
                            <del class="fw-bold text-secondary mb-2 ms-2">₹${product.originalPrice} </del>
                        </p>
                        <button class="view-product btn btn-sm btn-danger " type="button" data-bs-toggle="modal" data-bs-target="#viewProductModal">View Product</button>
                        <button class="add-cart btn btn-sm btn-danger ">Add to Cart</button>
                    </div>
                </div>
            </div>
                `;
}


// Display Products Function 

function displayProducts(category = "All"){

    productContainer.innerHTML = "";
    const searchText = searched_item.value.trim().toLowerCase();
    let found = false;
    products.forEach(product => {
        const matchCategory = category === 'All' || product.category === category;
        const matchSearch = product.name.toLowerCase().includes(searchText);

        if(matchCategory && matchSearch){
            productContainer.innerHTML += createProductCard(product);
            found = true;
        }
    })
    if(!found){
        productContainer.innerHTML = `
        <h3 class="text-center text-danger mt-5">
            Product Not Found
        </h3>
        `;
    }
}


// Search item function 


searched_item.addEventListener("input", () => {
    const activeCategory = document.querySelector(".filter-item.active").dataset.category;
    displayProducts(activeCategory);
});



// Products Filters 


filteredItems.forEach(item => {

    item.addEventListener("click", () => {
        
        filteredItems.forEach(filter => {
            filter.classList.remove("active");
        })

        item.classList.add("active");
        const selectedCategory = item.dataset.category;   //product choice 
        
        displayProducts(selectedCategory);
    })
})


// Displaying all products 

displayProducts();

