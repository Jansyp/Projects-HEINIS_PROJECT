// Products Data - Update these with your descriptions
const productsData = [
  {
    id: 'nitrile-rubber',
    title: 'Nitrile Rubber - Sheets and Tubes',
    shortDescription: 'High-quality NBR sheets and tubes for industrial sealing applications',
    fullDescription: 'Premium nitrile rubber sheets and tubes manufactured to meet industry standards. Ideal for gaskets, seals, and insulation in demanding environments.',
    pageUrl: 'nbr-sheets-tubes.html'
  },
  {
    id: 'xlpe-foam',
    title: 'XLPE Foam - Sheets and Tubes',
    shortDescription: 'High-performance closed-cell thermal insulation for HVAC, plumbing, and cleanroom applications.',
    fullDescription: `<img src='../images/xlpe-foam.jpg' alt='XLPE Sheets & Tubes Insulation' style='max-width:100%;margin-bottom:18px;'>
      <strong>XLPE insulation</strong>, made from Cross-Linked Polyethylene (PE) or Polyolefin foam, is a high-performance, closed-cell thermal insulation material used widely in HVAC, plumbing, and cleanroom applications. Known for its lightweight structure and low thermal conductivity, XLPE offers excellent thermal efficiency, water resistance, and long-term durability—making it ideal for energy-saving and condensation control applications.<br><br>
      <strong>Key Features:</strong>
      <ul>
        <li>Low thermal conductivity ensuring maximum energy efficiency.</li>
        <li>Closed-cell structure minimizes water absorption and vapor transmission.</li>
        <li>Chemically cross-linked Polyethylene / Polyolefin material for enhanced mechanical strength.</li>
        <li>Excellent dimensional stability and UV resistance (with appropriate coating).</li>
        <li>Fibre-free, non-toxic, dust-free, and safe for indoor environments.</li>
        <li>Available in both sheet and tube forms for versatile installations.</li>
      </ul>
      <strong>Applications:</strong>
      <ul>
        <li>Chilled and hot water pipe insulation.</li>
        <li>HVAC duct insulation.</li>
        <li>Underdeck and overdeck thermal insulation for buildings.</li>
        <li>Pharmaceutical, cleanroom, and data center insulation.</li>
        <li>Acoustic insulation in partitions and enclosures.</li>
      </ul>
      <strong>Technical Specifications:</strong>
      <ul>
        <li>Base Material: Cross-linked Polyethylene / Polyolefin.</li>
        <li>Temperature Range: -40°C to +95°C.</li>
        <li>Thermal Conductivity: ≤ 0.035 W/m·K at 0°C.</li>
        <li>Water Absorption: &lt; 0.1% (by volume).</li>
        <li>Water Vapour Permeability: ≤ 0.05 g/m·hr·m²</li>
        <li>Fire Rating: Class ‘O’ / FM-approved (based on availability)</li>
        <li>Standard Thickness: 6 mm to 50 mm.</li>
        <li>Sheet Sizes: 1m x 2m / 1m x 10m rolls.</li>
        <li>Tube Sizes: Compatible with all standard pipe sizes.</li>
      </ul>`,
    pageUrl: 'xlpe-sheets-tubes.html'
  },
  {
    id: 'fiberglass',
    title: 'Fiber Glasswool',
    shortDescription: 'Lightweight insulation material for high-temperature applications',
    fullDescription: 'High-performance fiberglass wool insulation suitable for temperatures up to 250°C. Used extensively in industrial furnaces and thermal systems.',
    pageUrl: 'fiberglass-wool.html'
  },
  {
    id: 'rockwool',
    title: 'Rockwool & Stonewool',
    shortDescription: 'Non-combustible mineral wool insulation for fire-safe applications',
    fullDescription: 'Premium mineral wool insulation offering excellent fire resistance and durability. Ideal for building exteriors and industrial installations.',
    pageUrl: 'rockwool-stonewool.html'
  },
  {
    id: 'elexiq-coolguard',
    title: 'ELEXIQ CoolGuard - Pre-insulated Metal Sheets',
    shortDescription: 'Advanced pre-insulated metal sheets for energy-efficient systems',
    fullDescription: 'Innovative pre-insulated metal sheet technology reducing installation time and improving energy efficiency in HVAC applications.',
    pageUrl: 'elexiq-coolguard.html'
  },
  {
    id: 'industrial-fans',
    title: 'Industrial Fans',
    shortDescription: 'High-performance fans for ventilation, cooling, and air circulation in industrial and commercial environments.',
    fullDescription: `<strong>Industrial fans</strong> are high-performance mechanical devices used to move large volumes of air or gas in various commercial, manufacturing, and industrial applications. These fans are designed to provide effective ventilation, cooling, air circulation, or exhaust depending on the operational need.<br><br>
      <strong>Applications:</strong>
      <ul>
        <li>Ventilation in factories, warehouses, commercial buildings, and tunnels.</li>
        <li>Exhaust air systems for kitchens, workshops, basements, and paint booths.</li>
        <li>Cooling of machinery, electrical equipment, and industrial processes.</li>
        <li>Air circulation in large enclosed spaces like auditoriums and greenhouses.</li>
        <li>Dust and fume extraction in manufacturing plants, welding areas, and laboratories.</li>
        <li>HVAC systems in residential, commercial, and industrial environments.</li>
        <li>Drying systems in food processing, textiles, and paper industries.</li>
        <li>Clean air supply in cleanrooms, pharma units, and hospitals.</li>
        <li>Smoke extraction in parking garages, malls, and fire safety systems.</li>
        <li>Agricultural ventilation in poultry farms, dairy sheds, and greenhouses.</li>
      </ul>
      <strong>Types of Fans:</strong>
      <ul>
        <li>Forward Curved Centrifugal Fan</li>
        <li>Backward Inclined Centrifugal Fan</li>
        <li>Axial Fan</li>
        <li>Jet Fan</li>
        <li>Fan Section</li>
        <li>Smoke Exhaust Unit</li>
        <li>Inline Fan</li>
        <li>HVLS Fan</li>
      </ul>
      <p>See details and images for each type on the full product page.</p>`,
    pageUrl: 'industrial-fans.html'
  },
  {
    id: 'air-bubble',
    title: 'Reflective Air Bubble Insulation',
    shortDescription: 'Lightweight reflective insulation for thermal and moisture protection',
    fullDescription: 'Multi-layered air bubble insulation with reflective coating. Provides thermal resistance and vapor barrier in one solution.',
    pageUrl: 'air-bubble.html'
  },
  {
    id: 'smoke-exhaust',
    title: 'Smoke Exhaust Unit',
    shortDescription: 'Dedicated smoke extraction systems for safety applications',
    fullDescription: 'Complete smoke exhaust systems meeting safety standards for emergency ventilation. Essential for buildings requiring controlled smoke removal.',
    pageUrl: 'smoke-exhaust-unit.html'
  }
];

const ITEMS_PER_PAGE = 6;
let currentPage = 1;
let displayedProducts = [];

// Initialize the products page
document.addEventListener('DOMContentLoaded', function() {
  loadProducts();
  setupEventListeners();
});

// Load and display products
function loadProducts() {
  const grid = document.getElementById('productsGrid');
  const startIndex = 0;
  const endIndex = ITEMS_PER_PAGE * currentPage;
  
  displayedProducts = productsData.slice(0, endIndex);
  
  // Clear grid
  grid.innerHTML = '';
  
  // Render products
  displayedProducts.forEach((product, index) => {
    const tile = createProductTile(product);
    grid.appendChild(tile);
    
    // Add slight delay for stagger effect
    setTimeout(() => {
      tile.style.opacity = '1';
      tile.style.transform = 'translateY(0)';
    }, index * 50);
  });
  
  // Update load more button visibility
  updateLoadMoreButton();
}

// Create a product tile HTML element
function createProductTile(product) {
  const tile = document.createElement('div');
  tile.className = 'product-tile';
  tile.style.opacity = '0';
  tile.style.transform = 'translateY(20px)';
  tile.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  
  tile.innerHTML = `
    <div class="product-image">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" style="width:140px;height:140px;opacity:0.3;">
        <rect width="200" height="200" fill="none"/>
        <circle cx="100" cy="100" r="80" fill="none" stroke="#0b5cff" stroke-width="2"/>
        <path d="M 60 100 L 100 140 L 140 100 M 100 140 V 60" stroke="#0b5cff" stroke-width="2" fill="none"/>
      </svg>
    </div>
    <div class="product-content">
      <h3 class="product-title">${product.title}</h3>
      <p class="product-description">${product.shortDescription}</p>
      <div class="product-footer">
        <a href="${product.pageUrl}" class="view-details-btn">View Details</a>
      </div>
    </div>
  `;
  
  return tile;
}

// Update load more button visibility
function updateLoadMoreButton() {
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  const container = document.querySelector('.load-more-container');
  
  if (displayedProducts.length >= productsData.length) {
    // All products loaded
    loadMoreBtn.classList.add('hidden');
    
    // Show "no more products" message if all are loaded
    if (displayedProducts.length === productsData.length && currentPage > 1) {
      const message = document.createElement('p');
      message.className = 'no-more-products';
      message.textContent = 'All products loaded';
      
      if (!container.querySelector('.no-more-products')) {
        container.appendChild(message);
      }
    }
  } else {
    loadMoreBtn.classList.remove('hidden');
  }
}

// Setup event listeners
function setupEventListeners() {
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function() {
      currentPage++;
      loadProducts();
      
      // Smooth scroll to show new products
      setTimeout(() => {
        const newProducts = document.querySelectorAll('.product-tile');
        if (newProducts.length > ITEMS_PER_PAGE * (currentPage - 1)) {
          newProducts[ITEMS_PER_PAGE * (currentPage - 1)].scrollIntoView({ 
            behavior: 'smooth', 
            block: 'nearest' 
          });
        }
      }, 100);
    });
  }
}

// Helper function to update product description (call this to update descriptions)
function updateProductDescription(productId, shortDescription, fullDescription) {
  const product = productsData.find(p => p.id === productId);
  if (product) {
    product.shortDescription = shortDescription;
    product.fullDescription = fullDescription;
    loadProducts(); // Reload to show updated description
  }
}

