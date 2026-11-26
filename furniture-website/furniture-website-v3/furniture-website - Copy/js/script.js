// AURA LIVING - Product Catalog
// Sample products use online Unsplash images. Replace names, prices and images with your real catalog.

// Original featured products
const baseProducts = [
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
        category: "storage",
        material: "Solid American Black Walnut",
        price: 1280,
        tag: "New Arrival",
        image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=800&q=80",
        description: "Open architectural shelving unit with dovetail joinery and adjustable tiers."
    },
    {
        id: 8,
        name: "Linen Platform Bed Frame",
        category: "beds",
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
        material: "Maroon Upholstery & Solid Wood",
        price: 2250,
        tag: "Classic",
        image: "https://swan.com.bd/cdn/shop/files/Maroon_Color_Sofa_Sum_Bed.png?v=1782211464&width=1946",
        description: "A versatile sofa by day and a comfortable bed by night, built on a sturdy wooden frame."
    }
];

// Additional catalog: [name, category, material, price, image keyword]
const rawProducts = [
    // Seating
    ["Nordin Sectional Sofa", "seating", "Charcoal Performance Fabric & Birch", 2640, "sofa"],
    ["Hallie Curved Loveseat", "seating", "Oat Bouclé & Beech", 1380, "sofa"],
    ["Tove Recliner", "seating", "Cognac Leather & Steel", 1950, "armchair"],
    ["Orla Rocking Chair", "seating", "Solid Ash & Linen Cushion", 620, "rocking chair"],
    ["Brisa Lounge Sofa", "seating", "Sage Linen & Oak", 1720, "sofa"],
    ["Mira Barrel Armchair", "seating", "Terracotta Velvet & Beech", 890, "armchair"],
    ["Halden Chesterfield Sofa", "seating", "Espresso Leather & Walnut", 2980, "chesterfield sofa"],
    ["Juno Dining Chair Pair", "seating", "Smoked Oak & Woven Rattan", 460, "dining chair"],
    ["Caro Wingback Chair", "seating", "Mustard Corduroy & Brass", 1040, "wingback chair"],
    ["Ilse Bench Seat", "seating", "Solid Teak & Wool Cushion", 530, "bench"],
    ["Ravi Modular Sofa", "seating", "Stone Chenille & Pine", 2320, "modular sofa"],
    ["Elm Club Chair", "seating", "Navy Wool Tweed & Ash", 1160, "club chair"],
    ["Lina Swivel Chair", "seating", "Pebble Bouclé & Metal", 720, "swivel chair"],
    ["Osman Daybed", "seating", "Natural Cotton Canvas & Maple", 1480, "daybed"],
    ["Freya Accent Stool", "seating", "Hand-Carved Walnut", 260, "wooden stool"],
    ["Maro Sofa Set", "seating", "Olive Velvet & Oak", 2450, "living room sofa"],
    ["Ysa Egg Chair", "seating", "Cream Shearling & Fiberglass", 1290, "egg chair"],
    ["Kael Ottoman", "seating", "Rust Linen & Beech", 340, "ottoman"],
    ["Sora Armless Lounger", "seating", "Sand Bouclé & Maple", 980, "lounge chair"],
    ["Dune Corner Sofa", "seating", "Oatmeal Bouclé & Oak", 2180, "corner sofa"],

    // Tables
    ["Aster Round Dining Table", "tables", "Solid Walnut & Brass", 1480, "round dining table"],
    ["Ember Side Table", "tables", "Blackened Oak", 380, "side table"],
    ["Lumen Glass Coffee Table", "tables", "Smoked Glass & Steel", 760, "glass coffee table"],
    ["Terra Extendable Dining Table", "tables", "Honey Oak", 1890, "dining table"],
    ["Sable Nest of Tables", "tables", "Walnut Veneer", 540, "nesting tables"],
    ["Arlo Writing Desk", "tables", "Ash & Black Steel", 690, "writing desk"],
    ["Fenna Console Table", "tables", "White Oak & Marble", 1120, "console table"],
    ["Quill Drop-Leaf Table", "tables", "Teak Veneer", 610, "drop leaf table"],
    ["Oslo Bistro Table", "tables", "Powder-Coated Iron & Marble", 430, "bistro table"],
    ["Caldera Coffee Table", "tables", "Hand-Cast Concrete", 880, "concrete coffee table"],
    ["Verde Bar Table", "tables", "Reclaimed Pine", 720, "bar table"],
    ["Maren Study Desk", "tables", "Oiled Oak & Steel", 950, "study desk"],
    ["Blanca Side Table", "tables", "Carrara Marble & Brass", 620, "marble side table"],
    ["Tallis Dining Bench", "tables", "Solid Ash", 470, "dining bench"],
    ["Kiln Accent Table", "tables", "Glazed Terracotta & Oak", 340, "accent table"],
    ["Harbor Coffee Table", "tables", "Driftwood Pine", 830, "wood coffee table"],
    ["Nara Vanity Table", "tables", "Maple & Smoked Mirror", 1050, "vanity table"],
    ["Pilar Round Side Table", "tables", "Matte Black Metal & Oak", 290, "round side table"],

    // Beds
    ["Astra King Bed", "beds", "Velvet Upholstery & Oak", 2480, "king bed"],
    ["Mosa Queen Bed", "beds", "Linen & Solid Pine", 1780, "queen bed"],
    ["Hygge Panel Bed", "beds", "Bouclé & Birch", 1620, "upholstered bed"],
    ["Lark Canopy Bed", "beds", "Ash & Cotton Drapery", 2890, "canopy bed"],
    ["Verona Storage Bed", "beds", "Walnut & Velvet", 2340, "storage bed"],
    ["Ivy Bunk Bed", "beds", "Solid Pine & Beech", 1460, "bunk bed"],
    ["Cove Daybed Frame", "beds", "Oiled Teak", 1310, "daybed"],
    ["Nimbus Floating Bed", "beds", "Oak & LED Underlight", 2620, "floating bed"],
    ["Sol Kids Loft Bed", "beds", "Birch Plywood", 980, "loft bed"],
    ["Atlas Platform Bed", "beds", "Black Walnut", 2760, "platform bed"],
    ["Thea Upholstered Bed", "beds", "Dove Grey Linen", 1870, "bed frame"],
    ["Bruno Single Bed", "beds", "Pine & Rattan", 760, "single bed"],
    ["Juniper Sleigh Bed", "beds", "Cherry Wood", 2190, "sleigh bed"],
    ["Rowan Bed Frame", "beds", "Ash & Cane Panels", 1540, "cane bed"],
    ["Yara Murphy Bed Cabinet", "beds", "Oak Veneer & Steel", 2050, "murphy bed"],
    ["Calo Futon Frame", "beds", "Beech & Canvas", 690, "futon"],
    ["Ora Sleep Platform", "beds", "Sustainably Sourced Maple", 1980, "wooden bed"],

    // Storage
    ["Vela Sideboard", "storage", "Fluted Oak & Brass", 1960, "sideboard"],
    ["Quarry Shoe Cabinet", "storage", "Matte Lacquer & Ash", 430, "shoe cabinet"],
    ["Ondine Wardrobe", "storage", "Walnut Veneer & Oak", 2640, "wardrobe"],
    ["Bramble Bookcase Ladder", "storage", "Ash & Blackened Steel", 890, "bookcase"],
    ["Kestrel Media Unit", "storage", "Ebonized Oak", 1340, "tv unit"],
    ["Sylvan Open Shelf", "storage", "Solid Oak & Rattan", 620, "open shelf"],
    ["Mono Nightstand", "storage", "Sanded Pine & Steel", 280, "nightstand"],
    ["Fern Chest of Drawers", "storage", "Teak & Brass Pulls", 1480, "chest of drawers"],
    ["Halo Floating Shelf Set", "storage", "Walnut Ply", 310, "floating shelf"],
    ["Lumi Corner Cabinet", "storage", "Cane & Oak", 760, "corner cabinet"],
    ["Otto Bedside Drawer", "storage", "Walnut & Ceramic Knobs", 340, "bedside table"],
    ["Veda Wall Cabinet", "storage", "White Oak & Glass", 920, "wall cabinet"],
    ["Tarn Wine Rack Cabinet", "storage", "Reclaimed Oak", 1150, "wine rack"],
    ["Mira Hallway Bench with Storage", "storage", "Linen & Oak", 690, "hallway bench"],
    ["Dorn Tall Wardrobe", "storage", "Pine & Brushed Steel", 1890, "tall wardrobe"],
    ["Estra Record Cabinet", "storage", "Solid Walnut", 1270, "record cabinet"],
    ["Fjord Coat Rack Unit", "storage", "Oak & Iron Hooks", 360, "coat rack"],
    ["Gloss Display Cabinet", "storage", "Black Glass & Ash", 1620, "display cabinet"],
    ["Nellie Dresser", "storage", "Oiled Maple", 1340, "dresser"],
    ["Harlow Laundry Hamper Cabinet", "storage", "Rattan & Pine", 420, "laundry hamper"],
    ["Ruma Tall Bookshelf", "storage", "Birch Plywood", 980, "tall bookshelf"],
    ["Sable Trunk Chest", "storage", "Leather-Wrapped Oak", 540, "storage trunk"],

    // Lighting & Decor
    ["Ciel Arc Floor Lamp", "lighting", "Marble Base & Brushed Steel", 480, "arc floor lamp"],
    ["Halo Pendant Cluster", "lighting", "Blown Glass & Brass", 620, "pendant lamp"],
    ["Ama Paper Lantern", "lighting", "Washi Paper & Bamboo", 190, "paper lantern"],
    ["Nima Table Lamp", "lighting", "Hand-Glazed Ceramic & Linen", 260, "ceramic table lamp"],
    ["Orbit Chandelier", "lighting", "Smoked Glass & Blackened Steel", 1450, "chandelier"],
    ["Dunes Wall Sconce", "lighting", "Travertine & Brass", 340, "wall sconce"],
    ["Aura Ring Lamp", "lighting", "Rattan & Oak", 390, "rattan lamp"],
    ["Kiln Table Lamp", "lighting", "Stoneware & Linen", 230, "table lamp"],
    ["Tessa Floor Lamp", "lighting", "Walnut & Linen Shade", 420, "floor lamp"],
    ["Bolo Globe Pendant", "lighting", "Opal Glass & Iron", 310, "globe pendant"],
    ["Lumen Stick Lamp", "lighting", "Oak & Opal Acrylic", 275, "stick floor lamp"],
    ["Pale Desk Lamp", "lighting", "Matte Black Steel", 180, "desk lamp"],
    ["Crescent Wall Light", "lighting", "Frosted Glass & Brass", 240, "wall light"],
    ["Vita Cluster Pendant", "lighting", "Hand-Blown Glass", 880, "cluster pendant"],
    ["Fold Task Lamp", "lighting", "Enameled Steel", 160, "task lamp"],
    ["Sphere Table Lamp", "lighting", "Alabaster & Oak", 310, "alabaster lamp"],
    ["Rune Linear Pendant", "lighting", "Aluminum & Oak", 540, "linear pendant"],
    ["Loft Industrial Pendant", "lighting", "Cast Iron & Copper", 360, "industrial pendant"],
    ["Mesa Floor Uplighter", "lighting", "Ceramic & Oak", 510, "uplighter"],
    ["Pearl Wall Sconce", "lighting", "Shell & Brass", 290, "shell wall lamp"],
    ["Dune Mushroom Lamp", "lighting", "Hand-Carved Wood", 220, "wooden lamp"],
    ["Sol Ceiling Flush Mount", "lighting", "Linen Drum & Steel", 260, "ceiling light"],
    ["Ember Candle Holder Set", "lighting", "Cast Brass", 120, "candle holder"]
];

const blurbs = {
    seating: [
        "Generously padded cushions and a low, grounded profile for long, unhurried evenings.",
        "Clean lines and a supportive frame, finished to feel quietly substantial.",
        "A sculptural form that anchors the room without crowding it.",
        "Comfort-first construction with durable upholstery built for daily life."
    ],
    tables: [
        "A solid top and refined edges, made to be used every day for years.",
        "Balanced proportions that suit both open-plan living and compact rooms.",
        "Natural grain and a hand-finished surface that improves with age.",
        "Quiet, architectural presence with sturdy joinery underneath."
    ],
    beds: [
        "A restful profile with supportive slats and a headboard designed for calm bedrooms.",
        "Sturdy frame construction that stays silent and steady through the night.",
        "Minimal silhouette with warm materials that soften the whole room.",
        "Built to support daily sleep and easy to style with any bedding."
    ],
    storage: [
        "Thoughtful storage with clean fronts and hidden hardware for an uncluttered look.",
        "Dovetailed joinery and smooth-running details that last for decades.",
        "An open, airy form that displays your favourite pieces with ease.",
        "Practical proportions that organise the room without visual weight."
    ],
    lighting: [
        "Soft, diffused light that adds warmth to any corner of the home.",
        "A considered form with hand-finished materials and quality hardware.",
        "Sculptural shape that works as both a light source and a decorative object.",
        "Gentle glow designed to flatter interiors at every hour."
    ]
};

const tagPool = ["Bestseller", "New Arrival", "Handcrafted", "Limited", "Signature", "Classic"];

// Known-working Unsplash photos from the original site, grouped by category
const categoryImages = {
    seating: [
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80"
    ],
    tables: [
        "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=800&q=80"
    ],
    beds: [
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"
    ],
    storage: [
        "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80"
    ],
    lighting: [
        "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80"
    ]
};

// Build the full catalog
const products = [
    ...baseProducts,
    ...rawProducts.map(([name, category, material, price, keyword], index) => {
        const id = index + 10;
        return {
            id,
            name,
            category,
            material,
            price,
            tag: tagPool[index % tagPool.length],
            image: categoryImages[category][index % categoryImages[category].length],
            description: blurbs[category][index % blurbs[category].length]
        };
    })
];

const PAGE_SIZE = 12;
let cart = [];
let wishlist = new Set();
let activeCategory = "all";
let visibleCount = PAGE_SIZE;

// DOM Elements
const productGrid = document.getElementById("product-grid");
const productCount = document.getElementById("product-count");
const loadMoreBtn = document.getElementById("load-more");
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

const FALLBACK_IMG = "https://placehold.co/800x1000/F2EFE9/5C5852?text=AURA+LIVING";
const HEART_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 21s-7-4.35-9.5-8.5C.8 9.6 2.3 5.5 6 5.5c2.2 0 3.5 1.3 4 2.3.5-1 1.8-2.3 4-2.3 3.7 0 5.2 4.1 3.5 7C19 16.65 12 21 12 21z"></path></svg>`;

// Product card
function renderCard(product) {
    const saved = wishlist.has(product.id);
    return `
        <article class="product-card">
            <div class="product-img-box">
                ${product.tag ? `<span class="product-tag">${product.tag}</span>` : ""}
                <button class="wish-btn ${saved ? "active" : ""}" data-wish="${product.id}"
                        aria-label="Save ${product.name} to wishlist" aria-pressed="${saved}">${HEART_SVG}</button>
                <img src="${product.image}" alt="${product.name}" loading="lazy"
                     onerror="this.onerror=null;this.src='${FALLBACK_IMG}';">
            </div>
            <div class="product-info">
                <span class="product-meta">${product.material}</span>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-desc">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">$${product.price.toLocaleString()}</span>
                    <button class="add-btn" data-add="${product.id}">+ Add</button>
                </div>
            </div>
        </article>
    `;
}

// Render products with pagination
function renderProducts() {
    const filtered = activeCategory === "all"
        ? products
        : products.filter(item => item.category === activeCategory);
    const visible = filtered.slice(0, visibleCount);

    productGrid.innerHTML = visible.map(renderCard).join("");
    productCount.textContent = `Showing ${visible.length} of ${filtered.length} pieces`;
    loadMoreBtn.hidden = visible.length >= filtered.length;
}

// Filter buttons
filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        activeCategory = btn.dataset.category;
        visibleCount = PAGE_SIZE;
        renderProducts();
    });
});

// Load more
loadMoreBtn.addEventListener("click", () => {
    visibleCount += PAGE_SIZE;
    renderProducts();
});

// Card actions (event delegation)
productGrid.addEventListener("click", (e) => {
    const addBtn = e.target.closest("[data-add]");
    if (addBtn) {
        addToCart(Number(addBtn.dataset.add));
        return;
    }
    const wishBtn = e.target.closest("[data-wish]");
    if (wishBtn) {
        const id = Number(wishBtn.dataset.wish);
        const product = products.find(p => p.id === id);
        if (wishlist.has(id)) {
            wishlist.delete(id);
            showToast(`Removed "${product.name}" from wishlist`);
        } else {
            wishlist.add(id);
            showToast(`Saved "${product.name}" to wishlist`);
        }
        const isSaved = wishlist.has(id);
        wishBtn.classList.toggle("active", isSaved);
        wishBtn.setAttribute("aria-pressed", isSaved);
    }
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
            <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';">
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
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => {
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
