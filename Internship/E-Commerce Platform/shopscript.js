const smartphoneVariants = [
  { name: "iPhone 14", price: "₹79,999", img: "https://techcrunch.com/wp-content/uploads/2022/09/Apple-iphone-14-Pro-review-1.jpeg" },
  { name: "Samsung S22", price: "₹69,999", img: "https://images-cdn.ubuy.co.in/6585b9d02b39531ef57025cc-samsung-galaxy-s22-5g-sm-s901bds-128gb.jpg" },
  { name: "OnePlus 11", price: "₹59,999", img: "https://www.oneplus.com/content/dam/oasis/product-asset-library/salami/en/images-kv-mo-1.png.webp" },
  { name: "Realme GT", price: "₹29,999", img: "https://rukminim2.flixcart.com/image/850/1000/l3rmzrk0/mobile/q/w/4/-original-imagetmesf2x8gp2.jpeg?q=90&crop=false" }
];

const headphoneVariants = [
  { name: "Sony WH-1000XM4", price: "₹19,999", img: "H1.jpg" },
  { name: "JBL Tune 760", price: "₹5,999", img: "H2.jpg" },
  { name: "Boat Rockerz", price: "₹1,499", img: "H3.jpg" },
  { name: "AirPods Max", price: "₹59,900", img: "H4.jpg" }
];

const groceryVariants = [
  { name: "Basmati Rice 5kg", price: "₹499", img: "G1.jpg" },
  { name: "Fortune Oil 1L", price: "₹149", img: "G2.jpg" },
  { name: "Tata Salt 1kg", price: "₹25", img: "G3.jpg" },
  { name: "Aashirvaad Atta 5kg", price: "₹225", img: "G4.jpg" }
];

const medicineVariants = [
  { name: "Paracetamol 500mg", price: "₹20", img: "M1.jpg" },
  { name: "Cough Syrup 100ml", price: "₹80", img: "M2.jpg" },
  { name: "Vitamin C Tablets", price: "₹120", img: "M3.jpg" },
  { name: "First Aid Kit", price: "₹499", img: "M4.jpg" }
];
const allVariants = [...smartphoneVariants, ...headphoneVariants, ...groceryVariants, ...medicineVariants];
let cartItems = [];
let cartTotal = 0;
function loadVariants(containerId, products) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  products.forEach(item => {
    const div = document.createElement('div');
    div.className = 'variant-card';
    div.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.price}</p>
      <button onclick="addToCart('${item.name}')">Add to Cart</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(productName) {
  const product = allVariants.find(p => p.name === productName);
  if (!product) return;
  cartItems.push(product);
  cartTotal += parseInt(product.price.replace(/[^0-9]/g, ''));
  updateCartPanel();
  showCartPanel();
}

function removeFromCart(index) {
  cartTotal -= parseInt(cartItems[index].price.replace(/[^0-9]/g, ''));
  cartItems.splice(index, 1);
  updateCartPanel();
  if (cartItems.length === 0) document.getElementById('cart-panel').style.display = 'none';
}

function updateCartPanel() {
  const list = document.getElementById('cart-items');
  list.innerHTML = '';
  cartItems.forEach((item, i) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.price}`;
    const btn = document.createElement('button');
    btn.textContent = '✕';
    btn.onclick = () => removeFromCart(i);
    li.appendChild(btn);
    list.appendChild(li);
  });
  document.getElementById('cart-total').innerText = cartTotal.toLocaleString();
}

function showCartPanel() {
  document.getElementById('cart-panel').style.display = 'block';
}

function checkout() {
  if (cartItems.length === 0) return alert("Your cart is empty!");
  cartItems = [];
  cartTotal = 0;
  updateCartPanel();
  document.getElementById('cart-panel').style.display = 'none';
  document.getElementById('thank-you-popup').style.display = 'flex';
}

function closePopup() {
  document.getElementById('thank-you-popup').style.display = 'none';
}

function searchProducts() {
  const q = document.getElementById('searchInput').value.toLowerCase();
  const filter = arr => arr.filter(p => p.name.toLowerCase().includes(q));
  loadVariants('smartphone-variants', filter(smartphoneVariants));
  loadVariants('headphone-variants', filter(headphoneVariants));
  loadVariants('grocery-variants', filter(groceryVariants));
  loadVariants('medicine-variants', filter(medicineVariants));
}

function openAdminPopup() {
  document.getElementById('admin-popup').style.display = 'flex';
}

function closeAdminPopup() {
  document.getElementById('admin-popup').style.display = 'none';
}

function handleAdminSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('admin-name').value.trim();
  const price = document.getElementById('admin-price').value.trim();
  const img = document.getElementById('admin-img').value.trim();
  const category = document.getElementById('admin-category').value;
  if (!name || !price || !img || !category) {
    alert("Please fill all fields.");
    return;
  }
  const newP = { name, price: `₹${price}`, img };
  if (category === 'smartphone') smartphoneVariants.push(newP);
  if (category === 'headphone') headphoneVariants.push(newP);
  if (category === 'grocery') groceryVariants.push(newP);
  if (category === 'medicine') medicineVariants.push(newP);
  allVariants.push(newP);
  loadAllVariants();
  alert(`${name} added successfully!`);
  closeAdminPopup();
  e.target.reset();
}

function openLoginPopup() {
  document.getElementById('login-popup').style.display = 'flex';
}

function closeLoginPopup() {
  document.getElementById('login-popup').style.display = 'none';
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value.trim();
  const pass = document.getElementById('login-password').value.trim();
  if (!email || !pass) return alert("Enter both email and password.");
  alert(`Logged in as ${email}`);
  closeLoginPopup();
  e.target.reset();
}

function toggleMenu() {
  const m = document.getElementById('dropdown-menu');
  m.classList.toggle('dropdown-visible');
  m.classList.toggle('dropdown-hidden');
}

function loadAllVariants() {
  loadVariants('smartphone-variants', smartphoneVariants);
  loadVariants('headphone-variants', headphoneVariants);
  loadVariants('grocery-variants', groceryVariants);
  loadVariants('medicine-variants', medicineVariants);
}

window.onload = loadAllVariants;
