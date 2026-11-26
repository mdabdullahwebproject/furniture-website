// Curated Furniture Product Catalog with High-Resolution Online Showcase Images
const products = [
    {
        id: 1,
        name: "Soren Velvet Sofa",
        category: "seating",
        material: "Deep Forest Velvet & Oak",
        price: 1890,
        tag: "Bestseller",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
        description: "Plush three-seater sofa with tailored piping and kiln-dried white oak legs."
    },
    {
        id: 2,
        name: "Vesper Lounge Chair",
        category: "seating",
        material: "Cognac Saddle Leather",
        price: 940,
        tag: "New Arrival",
        image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80",
        description: "Low-slung architectural accent chair crafted with full-grain vegetable-tanned leather."
    },
    {
        id: 3,
        name: "Kova Solid Oak Dining Table",
        category: "tables",
        material: "American White Oak",
        price: 1650,
        tag: "Handcrafted",
        image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
        description: "Seats up to eight comfortably with beveled edges and hand-rubbed natural oil finish."
    },
    {
        id: 4,
        name: "Alba Bouclé Accent Chair",
        category: "seating",
        material: "Ivory Wool Bouclé",
        price: 780,
        tag: "Limited",
        image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80",
        description: "Curved sculptural backrest upholstered in heavy Belgian wool-blend bouclé."
    },
    {
        id: 5,
        name: "Monolith Travertine Coffee Table",
        category: "tables",
        material: "Honed Roman Travertine",
        price: 1120,
        tag: "Signature",
        image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=800&q=80",
        description: "Organic stone plinth table showcasing natural porous veining and matte warmth."
    },
    {
        id: 6,
        name: "Solis Ceramic Pendant Light",
        category: "lighting",
        material: "Raw Stoneware & Brass",
        price: 340,
        tag: "Studio Edition",
        image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80",
        description: "Wheel-thrown ceramic shade paired with brushed unlacquered brass hardware."
    },

   
    {
        id: 7,
        name: "Noma Walnut Bookshelf",
        category: "tables",
        material: "Solid American Black Walnut",
        price: 1280,
        tag: "New Arrival",
        image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=800&q=80",
        description: "Open architectural shelving unit with dovetail joinery and adjustable tiers."
    },
    {
        id: 8,
        name: "Linen Platform Bed Frame",
        category: "seating",
        material: "Belgian Flax Linen & Ash",
        price: 2150,
        tag: "Bestseller",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
        description: "Upholstered headboard with solid ash wood slats for quiet, box-spring-free support."
    },
    {
        id: 9,
        name: "Swan Sofa Cum Bed",
        category: "seating",
        material: "Belgian Flax Linen & Ash",
        price: 2250,
        tag: "Classic",     // product corner qute
        image: "https://swan.com.bd/cdn/shop/files/Maroon_Color_Sofa_Sum_Bed.png?v=1782211464&width=1946"
    },

    

];

let cart = [];

// DOM Elements
const productGrid = document.getElementById("product-grid");
const filterBtns = document.querySelectorAll(".filter-btn");
const cartToggle = document.getElementById("cart-toggle");
const closeCart = document.getElementById("close-cart");
const cartDrawer = document.getElementById("cart-drawer");
const cartOverlay = document.getElementById("cart-overlay");
const cartItemsContainer = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotalPrice = document.getElementById("cart-total-price");
const toast = document.getElementById("toast");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const newsletterForm = document.getElementById("newsletter-form");
const newsletterMsg = document.getElementById("newsletter-msg");
const checkoutBtn = document.getElementById("checkout-btn");

// Render Products
function renderProducts(category = "all") {
    const filtered = category === "all"
        ? products
        : products.filter(item => item.category === category);

    productGrid.innerHTML = filtered.map(product => `
        <article class="product-card">
            <div class="product-img-box">
                <span class="product-tag">${product.tag}</span>
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <span class="product-meta">${product.material}</span>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-desc">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">$${product.price.toLocaleString()}</span>
                    <button class="add-btn" onclick="addToCart(${product.id})">+ Add to Cart</button>
                </div>
            </div>
        </article>
    `).join("");
}

// Filter Button Events
filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderProducts(btn.dataset.category);
    });
});

// Cart Functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    updateCartUI();
    showToast(`Added "${product.name}" to your selection`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const totalCost = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    cartCount.textContent = totalItems;
    cartTotalPrice.textContent = `$${totalCost.toLocaleString()}`;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p class="empty-cart-msg">Your cart is currently empty.</p>`;
        return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>$${item.price.toLocaleString()} &times; ${item.qty}</p>
                <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        </div>
    `).join("");
}

function openCartDrawer() {
    cartDrawer.classList.add("open");
    cartOverlay.classList.add("open");
}

function closeCartDrawer() {
    cartDrawer.classList.remove("open");
    cartOverlay.classList.remove("open");
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2600);
}

// Event Listeners
cartToggle.addEventListener("click", openCartDrawer);
closeCart.addEventListener("click", closeCartDrawer);
cartOverlay.addEventListener("click", closeCartDrawer);

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    newsletterMsg.textContent = "Thank you for subscribing to the Aura Living Journal.";
    newsletterForm.reset();
});

checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
        showToast("Your cart is empty.");
        return;
    }
    showToast("Proceeding to secure white-glove checkout...");
    cart = [];
    updateCartUI();
    setTimeout(closeCartDrawer, 1000);
});

// Initialize
renderProducts();
