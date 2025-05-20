// Sample product data
const productData = [
  {
    id: 1,
    name: 'Blusa Feminina',
    description: 'Blusa leve e confortável, perfeita para o dia a dia.',
    image: 'https://images.pexels.com/photos/7691065/pexels-photo-7691065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    name: 'Vestido Floral',
    description: 'Vestido estampado com design moderno e elegante.',
    image: 'https://images.pexels.com/photos/6311475/pexels-photo-6311475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    name: 'Calça Jeans',
    description: 'Calça jeans de alta qualidade com corte moderno.',
    image: 'https://images.pexels.com/photos/52518/jeans-pants-blue-shop-52518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 4,
    name: 'Camisa Social',
    description: 'Camisa social elegante para ocasiões especiais.',
    image: 'https://images.pexels.com/photos/6347923/pexels-photo-6347923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 5,
    name: 'Saia Midi',
    description: 'Saia midi com tecido leve e confortável.',
    image: 'https://images.pexels.com/photos/6311384/pexels-photo-6311384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 6,
    name: 'Cropped Básico',
    description: 'Cropped básico em algodão para diversos looks.',
    image: 'https://images.pexels.com/photos/6311587/pexels-photo-6311587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

// Function to save products to local storage
function saveProducts(products) {
  localStorage.setItem('catalogProducts', JSON.stringify(products));
}

// Function to get products from local storage
function getProducts() {
  const storedProducts = localStorage.getItem('catalogProducts');
  if (storedProducts) {
    return JSON.parse(storedProducts);
  }
  // If no products in storage, save the sample data and return it
  saveProducts(productData);
  return productData;
}

// Function to display products in the catalog
function displayProducts() {
  const productsContainer = document.getElementById('products-container');
  if (!productsContainer) return;
  
  const products = getProducts();
  
  productsContainer.innerHTML = '';
  
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    
    productCard.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <a href="https://wa.me/5531991032539?text=Oi!%20Vi%20o%20site%20de%20vocês%20e%20queria%20um%20orçamento%20rapidinho.%20Estou%20interessado(a)%20na%20peça:%20${encodeURIComponent(product.name)}" 
           class="whatsapp-button">
          Comprar pelo WhatsApp
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
        </a>
      </div>
    `;
    
    productsContainer.appendChild(productCard);
  });
}

// Initialize the catalog
document.addEventListener('DOMContentLoaded', function() {
  displayProducts();
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
});