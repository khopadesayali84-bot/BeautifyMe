// Display Products in products page using filters 
// const filteredItems = document.querySelectorAll(".filter-item");
// const productCards = document.querySelectorAll(".product-card");

// filteredItems.forEach(item => {
//     item.addEventListener("click", () =>{
        
//         filteredItems.forEach(filter => {
//             filter.classList.remove("active");
//         })

//         item.classList.add("active");

//         const selectedCategory = item.dataset.category;

//         productCards.forEach(card => {
//             cardCategory = card.dataset.category;

//             if(selectedCategory === "All" ||
//                 cardCategory === selectedCategory){
//                     card.style.display = "block";
//                 }
//             else{
//                  card.style.display = "none";
//             }
//         })
//     })
// })

const filteredItems = document.querySelectorAll(".filter-item");
const productContainer = document.querySelector("#product-container");

document.querySelector('[data-category="All"]').click();




filteredItems.forEach(item => {
    document.querySelector('[data-category="All"]').click();
    item.addEventListener("click", () => {
        // console.log(item);
        filteredItems.forEach(filter => {
            filter.classList.remove("active");
        })

        // productContainer.innerHTML = "";

        item.classList.add("active");
        const selectedCategory = item.dataset.category;   //product choice 
        console.log(selectedCategory);


        

        products.forEach(product => {
            // const productName = product.name;
            // if(productName.length > 15){
            //     productName = productName.substring(0, 15) + "...";
            // }
            let demo = `
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
                        <h6 class="card-title">${product.name}</h6>
                        <p class="text-muted small mb-2">${product.tagline}</p>
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
                // console.log(product.category);
                // console.log(selectedCategory);
    //    console.log(product.category);
            // if(selectedCategory === "All" || product.category === selectedCategory)   //skin===skin
                
              if(selectedCategory==="All" || selectedCategory==="all" || selectedCategory==="ALL")  
                {
                productContainer.innerHTML += demo;
            }
            else if(product.category === selectedCategory)
            {
                productContainer.innerHTML+=demo;
            }
            else{
                // productContainer.innerHTML += `<h1 class="text-danger text center">Searched Product Not Found</h1>`;
            }
       
        })
    })
})




