document.addEventListener('DOMContentLoaded', function() {
  // Check if logged in
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');
  
  // If not logged in, redirect to login page
  if (isLoggedIn !== 'true') {
    window.location.href = 'admin.html';
    return;
  }
  
  // Function to get products from local storage
  function getProducts() {
    const storedProducts = localStorage.getItem('catalogProducts');
    return storedProducts ? JSON.parse(storedProducts) : [];
  }
  
  // Function to save products to local storage
  function saveProducts(products) {
    localStorage.setItem('catalogProducts', JSON.stringify(products));
  }
  
  // Function to display products in the admin panel
  function displayAdminProducts() {
    const productsContainer = document.getElementById('adminItemsContainer');
    if (!productsContainer) return;
    
    const products = getProducts();
    
    productsContainer.innerHTML = '';
    
    if (products.length === 0) {
      productsContainer.innerHTML = '<p class="no-items">Nenhuma peça cadastrada no catálogo.</p>';
      return;
    }
    
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'admin-item-card';
      productCard.dataset.id = product.id;
      
      productCard.innerHTML = `
        <div class="admin-item-image">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="admin-item-info">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <div class="admin-item-actions">
            <button class="remove-item-button" data-id="${product.id}">Remover</button>
          </div>
        </div>
      `;
      
      productsContainer.appendChild(productCard);
    });
    
    // Add remove event listeners
    document.querySelectorAll('.remove-item-button').forEach(button => {
      button.addEventListener('click', function() {
        const productId = parseInt(this.dataset.id);
        removeProduct(productId);
      });
    });
  }
  
  // Function to remove a product
  function removeProduct(productId) {
    if (confirm('Tem certeza que deseja remover esta peça do catálogo?')) {
      let products = getProducts();
      products = products.filter(product => product.id !== productId);
      saveProducts(products);
      displayAdminProducts();
    }
  }
  
  // Function to add a new product
  function addProduct(name, description, imageUrl) {
    const products = getProducts();
    
    // Generate a new ID
    const newId = products.length > 0 
      ? Math.max(...products.map(product => product.id)) + 1 
      : 1;
    
    const newProduct = {
      id: newId,
      name: name,
      description: description,
      image: imageUrl
    };
    
    products.push(newProduct);
    saveProducts(products);
    displayAdminProducts();
  }
  
  // Modal functionality
  const modal = document.getElementById('addItemModal');
  const addNewItemBtn = document.getElementById('addNewItemBtn');
  const closeButtons = document.getElementsByClassName('close-modal');
  
  // Show modal
  if (addNewItemBtn) {
    addNewItemBtn.addEventListener('click', function() {
      modal.style.display = 'flex';
    });
  }
  
  // Close modal
  for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener('click', function() {
      modal.style.display = 'none';
    });
  }
  
  // Close modal when clicking outside
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
  
  // Add item form submission
  const addItemForm = document.getElementById('addItemForm');
  if (addItemForm) {
    addItemForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('itemName').value;
      const description = document.getElementById('itemDescription').value;
      const imageUrl = document.getElementById('itemImage').value;
      
      if (name && description && imageUrl) {
        addProduct(name, description, imageUrl);
        modal.style.display = 'none';
        
        // Reset form
        addItemForm.reset();
      }
    });
  }
  
  // Logout functionality
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
      sessionStorage.removeItem('isLoggedIn');
      window.location.href = 'admin.html';
    });
  }
  
  // Initialize the admin dashboard
  displayAdminProducts();
});