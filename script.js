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

const salesProducts = [1,3,5,7,9];
const trendingProducts = [1,2,3,4,7,9,13];

// ================== ADD TO CART MODAL =================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ADD TO CART

// document.querySelectorAll(".add-cart").forEach((btn)=>{
//     btn.addEventListener("click", function(){

//         let card = this.closest(".product-card");

//         let product = {
//             name: card.getAttribute("data-name"),
//             price: parseInt(card.getAttribute("data-price")),
//             img: card.getAttribute("data-img"),
//             qty: 1
//         };

//         // Check if product already exists
//         let existing = cart.find(item => item.name === product.name);

//         if(existing){
//             existing.qty += 1;
//         }else{
//             cart.push(product);
//         }

//         localStorage.setItem("cart", JSON.stringify(cart));
//         showCart();
//         alert("Item added to cart 🛒");
//     });
// });


// SHOW CART IN MODAL

// function showCart(){
//     let cartBox = document.getElementById("cartItems");
//     let totalBox = document.getElementById("cartTotal");

//     if(cart.length === 0){
//         cartBox.innerHTML = "<h6>Your cart is empty 😢</h6>";
//         totalBox.innerHTML = "";
//         return;
//     }

//     let total = 0;

//     let html = cart.map((item,index)=>{
//         total += item.price * item.qty;

//         return `
//         <div class="card mb-2 w-100 p-2 shadow-sm">
//             <div class="d-flex align-items-center gap-3">
//                 <img src="${item.img}" width="80" height="80" style="object-fit:cover;">
                
//                 <div>
//                     <h6 class="mb-0">${item.name}</h6>
//                     <small class="text-danger fw-bold">₹${item.price.toLocaleString("en-IN")}</small>
//                 </div>
                
//                 <button class="btn btn-sm btn-light increase" data-index="${index}">+</button>
//                 <h6 class="m-0">${item.qty}</h6>
//                 <button class="btn btn-sm btn-light decrease" data-index="${index}">−</button>

//                 <button class="btn btn-sm btn-danger ms-auto remove" data-index="${index}">
//                     Remove
//                 </button>
//             </div>
//         </div>
//         `;
//     }).join("");

//     cartBox.innerHTML = html;

//     totalBox.innerHTML = `
//         <hr>
//         <h5 class="text-end">Total: ₹${total.toLocaleString("en-IN")}</h5>
//     `;

//     // ADD EVENT LISTENERS (important 🔥)
//     document.querySelectorAll(".increase").forEach(btn=>{
//         btn.addEventListener("click", ()=>increaseQty(btn.dataset.index));
//     });

//     document.querySelectorAll(".decrease").forEach(btn=>{
//         btn.addEventListener("click", ()=>decreaseQty(btn.dataset.index));
//     });

//     document.querySelectorAll(".remove").forEach(btn=>{
//         btn.addEventListener("click", ()=>removeItem(btn.dataset.index));
//     });
// }


// Quantity Functions

// function increaseQty(index){
//     cart[index].qty += 1;
//     localStorage.setItem("cart", JSON.stringify(cart));
//     showCart();
// }

// function decreaseQty(index){
//     if(cart[index].qty > 1){
//         cart[index].qty -= 1;
//     }else{
//         cart.splice(index,1);
//     }
//     localStorage.setItem("cart", JSON.stringify(cart));
//     showCart();
// }

// REMOVE ITEM

// function removeItem(index){
//     cart.splice(index,1);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     showCart();
// }


// WHEN MODAL OPENS → LOAD CART

// let cartModal = document.getElementById('cartModal');
// cartModal.addEventListener('show.bs.modal', function () {
//     cart = JSON.parse(localStorage.getItem("cart")) || [];
//     showCart();
// });


//Add to Wishlist

// ================= WISHLIST =================

// let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

// ADD TO WISHLIST

// document.querySelectorAll(".modalWishlistBtn").forEach((btn)=>{
//     btn.addEventListener("click", function(){

//         if(!selectedProduct){
//             alert("No product selected ❌");
//             return;
//         }

//         let wish_item = {
//             name: selectedProduct.name,
//             price: parseInt(selectedProduct.price),
//             img: selectedProduct.img
//         };

//         let existing = wishlist.find(item => item.name === wish_item.name);

//         if(!existing){
//             wishlist.push(wish_item);
//             localStorage.setItem("wishlist", JSON.stringify(wishlist));
//             alert("Item added to wishlist ❤️");
//         }else{
//             alert("Already in wishlist ❤️");
//         }

//     });
// });

//Show Wishlist Function

// function showWishlist(){
//     let wishBox = document.getElementById("wishlistItems");

//     if(wishlist.length === 0){
//         wishBox.innerHTML = "<h6>Your wishlist is empty ❤️</h6>";
//         return;
//     }

//     let html = wishlist.map((item,index)=>{

//         return `
//         <div class="card mb-2 w-100 p-2 shadow-sm">
//             <div class="d-flex align-items-center gap-3">
//                 <img src="${item.img}" width="150" height="150" style="object-fit:cover;">
                
//                 <div>
//                     <h6 class="mb-0">${item.name}</h6>
//                     <small class="text-danger fw-bold">₹${item.price.toLocaleString("en-IN")}</small>
//                 </div>

//                 <!-- ✅ Move to Cart Button -->
//                 <button class="btn btn-sm btn-danger move-cart" data-index="${index}">
//                     Move to Cart 🛒
//                 </button>

//                 <!-- Remove Button -->
//                 <button class="btn btn-sm btn-danger remove-wish" data-index="${index}">
//                     Remove
//                 </button>
//             </div>
//         </div>
//         `;
        
//     }).join("");

//     wishBox.innerHTML = html;

//     // ✅ Move to Cart Event
//     document.querySelectorAll(".move-cart").forEach(btn=>{
//         btn.addEventListener("click", ()=>{
//             moveToCart(btn.dataset.index);
//         });
//     });

//     // ✅ Remove Event
//     document.querySelectorAll(".remove-wish").forEach(btn=>{
//         btn.addEventListener("click", ()=>{
//             removeWishlistItem(btn.dataset.index);
//         });
//     });
// }

// Move to cart 

// function moveToCart(index){

//     let item = wishlist[index];

//     // Check if already in cart
//     let existing = cart.find(cartItem => cartItem.name === item.name);

//     if(existing){
//         existing.qty += 1;
//     }else{
//         cart.push({...item, qty:1});
//     }

//     // Remove from wishlist
//     wishlist.splice(index,1);

//     // Save both
//     localStorage.setItem("cart", JSON.stringify(cart));
//     localStorage.setItem("wishlist", JSON.stringify(wishlist));

//     // Refresh UI
//     showCart();
//     showWishlist();
// }

//Remove Wishlist Item

// function removeWishlistItem(index){
//     wishlist.splice(index,1);
//     localStorage.setItem("wishlist", JSON.stringify(wishlist));
//     showWishlist();
// }

//Load wishlist Modal

// let wishlistModal = document.getElementById('wishlistModal');

// wishlistModal.addEventListener('show.bs.modal', function () {
//     wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
//     showWishlist();
// });



// View product JS 

let selectedProduct = null;

document.querySelectorAll(".view-product").forEach(button => {
  button.addEventListener("click", function () {

    let card = this.closest(".product-card");

    selectedProduct = {
      id: card.dataset.id,
      name: card.dataset.name,
      price: card.dataset.price,
      img: card.dataset.img,
      category: card.dataset.category,
      tagline: card.dataset.tagline
    };

    // Set modal data
    document.getElementById("modalProductImg").src = selectedProduct.img;
    document.getElementById("modalProductName").innerText = selectedProduct.name;
    document.getElementById("modalProductCategory").innerText = selectedProduct.category;
    document.getElementById("modalProductPrice").innerText = "₹" + selectedProduct.price;
    document.getElementById("modalProductTagline").innerText = selectedProduct.tagline;

  });
});

// function checkNameLength(String name){
//     if(name.length>26){
//         for(i=0;i<name.length;i++){
//             if(i<=26){
//                 newName+=name[i];
//             }
//             else{
//                 newName+='.';
//             }
//         }
//     }

// }


// Show Beauty Sale

function showBeautySale(){
    const beautySaleContainer = document.querySelector("#beauty-sale-products");

    beautySaleContainer.innerHTML = " ";
    // console.log(products);
    products.forEach(product => {

        // let productName = shorterName(product.name,15);

        beautySaleContainer.innerHTML += `
        <div class="product-card card flex-shrink-0 shadow p-3 mb-2 rounded" 
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
        `
    })
}
showBeautySale();


// Show Trending Products

function showTrendingProducts(){
    let trendingProductContainer = document.querySelector("#trending-products");
    trendingProductContainer.innerHTML = "";

    products.forEach(product => {
        // console.log(product);
        // let productName = shorterName(product.name,15);

        trendingProductContainer.innerHTML += `
        <div class="product-card card flex-shrink-0 shadow p-3 mb-2 rounded" 
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
        `
    })
}

showTrendingProducts();
