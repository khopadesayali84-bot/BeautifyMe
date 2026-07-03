const searched_item = document.querySelector("#searched-item");
const productContainer = document.querySelector("#product-container");
const filteredItems = document.querySelectorAll(".filter-item");



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

