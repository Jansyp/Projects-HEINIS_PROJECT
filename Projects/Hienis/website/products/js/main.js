// Products Data - Update these with your descriptions
const productsData = [
  {
    id: 'nitrile-rubber',
    title: 'Nitrile Rubber - Sheets and Tubes',
    shortDescription: 'High-quality NBR sheets and tubes for industrial sealing applications',
    fullDescription: `<img src='images/NBR SHEETS.jpeg' alt='Nitrile Rubber Sheets & Tubes' style='max-width:100%;margin-bottom:18px;'>
      Premium nitrile rubber sheets and tubes manufactured to meet industry standards. Ideal for gaskets, seals, and insulation in demanding environments.`,
    pageUrl: 'nbr-sheets-tubes.html'
  },
  {
    id: 'xlpe-foam',
      title: 'XLPE Foam - Sheets and Tubes',
      shortDescription: 'High-performance closed-cell thermal insulation for HVAC, plumbing, and cleanroom applications.',
      fullDescription: `<img src='images/XLPE-SHEETS.jpeg' alt='XLPE Sheets & Tubes Insulation' style='max-width:100%;margin-bottom:18px;'>
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
    id: 'turnkey-insulation',
    title: 'Turnkey Thermal & Acoustic Insulation Solutions',
    shortDescription: 'Comprehensive turnkey insulation for energy efficiency and noise control across multiple sectors.',
    fullDescription: `<img src='images/turnkey-insulation.jpeg' alt='Turnkey Thermal & Acoustic Insulation Solutions' style='max-width:100%;margin-bottom:18px;'>
      <strong>Our turnkey insulation services include:</strong><br><br>
      <strong>Thermal Insulation:</strong>
      <ul>
        <li>HVAC duct insulation.</li>
        <li>Chilled water pipeline insulation.</li>
        <li>Hot water and steam line insulation.</li>
        <li>Roof and wall thermal insulation (PEB buildings).</li>
        <li>Tank and vessel insulation.</li>
      </ul>
      With a team of trained professionals and project engineers, we ensure quality workmanship, timely execution, and adherence to safety standards. Whether it's a small-scale site requirement or a large infrastructure project, we are equipped to deliver reliable and cost-effective insulation solutions.<br><br>
      <strong>Acoustic Insulation:</strong>
      <ul>
        <li>Noise Reduction Treatments for Machinery and Equipment.</li>
        <li>Acoustic Wall & Ceiling Panels.</li>
        <li>Rain Noise Reduction for Metal Roofs.</li>
        <li>Acoustic Enclosures for Compressors, DG Sets, etc.</li>
        <li>With a dedicated team of trained professionals and experienced project engineers.</li>
      </ul>
      <strong>We ensure:</strong>
      <ul>
        <li>High-Quality Workmanship.</li>
        <li>On-Time Project Execution.</li>
        <li>Adherence to Safety Standards.</li>
        <li>Reliable & Cost-Effective Solutions.</li>
      </ul>
      Whether it's a small-scale facility or a large infrastructure development, we are fully equipped to deliver efficient, customized insulation solutions that add long-term value and performance.`,
    pageUrl: 'turnkey-insulation.html'
  },
  {
    id: 'thermotile-panel',
    title: 'Thermotile Insulation Panel',
    shortDescription: 'High-performance thermal insulation panel for commercial buildings and terrace slabs.',
    fullDescription: `<img src='images/thermotile-panel.jpeg' alt='Thermotile Insulation Panel' style='max-width:100%;margin-bottom:18px;'>
      Our THERMOTILE Insulation Panel is a high-performance thermal insulation solution designed for use in commercial buildings, specifically on terrace slabs between roof concrete and weatherproof tile layers. Manufactured from high-density rigid polyurethane foam (PUF), this panel delivers excellent thermal resistance, significantly reducing heat ingress and enhancing building energy efficiency.<br><br>
      <strong>Applications:</strong>
      <ul>
        <li>Commercial buildings.</li>
        <li>Industrial structures.</li>
        <li>Roof terraces in high-rise constructions.</li>
        <li>Retrofitting of older buildings for improved energy efficiency.</li>
      </ul>
      <strong>Benefits:</strong>
      <ul>
        <li>Reduces energy consumption by minimizing thermal load.</li>
        <li>Enhances indoor comfort levels in all seasons.</li>
        <li>Lightweight and easy to install.</li>
        <li>Long service life with minimal maintenance.</li>
        <li>Compatible with waterproofing and tiling systems.</li>
      </ul>
      <strong>Key Features:</strong>
      <ul>
        <li>Material: High-Density Rigid Polyurethane Foam.</li>
        <li>Density: 100 to 110 kg/m³.</li>
        <li>Service Temperature Range: -200°C to +110°C.</li>
        <li>Standard Thickness: 75 mm.</li>
        <li>Color: Golden Yellow.</li>
        <li>Surface Compatibility: Designed for use between roof concrete and weatherproof tiles.</li>
      </ul>`,
    pageUrl: 'thermotile-panel.html'
  },
  {
    id: 'ancillary-products',
    title: 'Other Ancillary Products',
    shortDescription: 'Polycarbonate sheets, turbo ventilators, insulation slabs, tapes, ducts, and adhesives for industrial and commercial use.',
    fullDescription: `
      <strong>Polycarbonate / Multiwall Sheet</strong><br>
      <img src='images/polycarbonate-sheet.jpeg' alt='Polycarbonate Multiwall Sheet' style='max-width:180px;float:right;margin-left:18px;'>
      Polycarbonate multiwall sheets are strong, lightweight, and transparent plastic sheets with a hollow (multi-layer) structure. They allow natural light to pass through while blocking heat and UV rays.<br>
      <strong>Applications:</strong>
      <ul>
        <li>Roofing for skylights, sheds, and factories.</li>
        <li>Canopies and awnings for homes, shops, and walkways.</li>
        <li>Greenhouses for farming and nurseries.</li>
        <li>Building facades and wall cladding.</li>
        <li>Pergolas and outdoor shelters.</li>
      </ul>
      <hr>
      <strong>Turbo Ventilator</strong><br>
      <img src='images/turbo-ventilator.jpeg' alt='Turbo Ventilator' style='max-width:180px;float:right;margin-left:18px;'>
      Turbo fan ventilator is a wind-driven, roof-mounted ventilator that uses centrifugal force to expel hot, stale air from inside buildings without electricity. It rotates even with a light breeze and promotes continuous ventilation.<br>
      <strong>Application:</strong>
      <ul>
        <li>Used for ventilation in industrial sheds, factories, warehouses, workshops, and commercial buildings to reduce heat, humidity, and improve indoor air quality.</li>
      </ul>
      <hr>
      <strong>XPS, EPS & PUF Slab / Pipe Section</strong><br>
      <img src='images/xps-eps-puf.jpeg' alt='XPS EPS PUF Slab Pipe Section' style='max-width:180px;float:right;margin-left:18px;'>
      XPS (Extruded Polystyrene), EPS (Expanded Polystyrene), and PUF (Polyurethane Foam) slabs and pipe sections are rigid thermal insulation materials with low thermal conductivity, high compressive strength, and moisture resistance.<br>
      <strong>Application:</strong>
      <ul>
        <li>Used for thermal insulation in chilled water pipelines, ducts, roofs, walls, and industrial equipment to prevent heat gain/loss—widely applied in HVAC, cold storage, and construction industries.</li>
      </ul>
      <hr>
      <strong>Types of Tapes</strong><br>
      <div style='display:flex;flex-wrap:wrap;gap:12px;'>
        <div><img src='images/aluminium-tape.jpeg' alt='Aluminium Tape' style='width:80px;'><br>Aluminium Tapes</div>
        <div><img src='images/nitrile-tape.jpeg' alt='Nitrile Tape' style='width:80px;'><br>Nitrile Tapes</div>
        <div><img src='images/xlpe-tape.jpeg' alt='XLPE Tape' style='width:80px;'><br>Xlpe Tapes</div>
        <div><img src='images/frp-tape.jpeg' alt='FRP Tape' style='width:80px;'><br>FRP Tapes</div>
        <div><img src='images/duct-tape.jpeg' alt='Duct Tape' style='width:80px;'><br>Duct Tapes</div>
        <div><img src='images/nonadhesive-tape.jpeg' alt='Non-Adhesive Tape' style='width:80px;'><br>Non-Adhesive Tapes</div>
      </div>
      <hr>
      <strong>Types of Flexible Ducts</strong><br>
      <div style='display:flex;flex-wrap:wrap;gap:12px;'>
        <div><img src='images/semi-metallic-duct.jpeg' alt='Semi Metallic Duct' style='width:80px;'><br>Semi metallic duct</div>
        <div><img src='images/preinsulated-duct.jpeg' alt='Pre-insulated Duct' style='width:80px;'><br>Pre-insulated duct</div>
        <div><img src='images/uninsulated-duct.jpeg' alt='Un-insulated Duct' style='width:80px;'><br>Un-insulated duct</div>
      </div>
      <hr>
      <strong>Rubber Adhesive</strong><br>
      <img src='images/rubber-adhesive.jpeg' alt='Rubber Adhesive' style='max-width:80px;float:right;margin-left:18px;'>
      Rubber adhesive is a synthetic rubber-based bonding agent known for its quick drying, strong grip, and flexible hold on multiple surfaces.<br>
      <strong>Application:</strong>
      <ul>
        <li>Used for fixing insulation sheets, rubber, foam, leather, wood, and metal in HVAC, construction, automotive, and general industrial applications.</li>
      </ul>
    `,
    pageUrl: 'ancillary-products.html'
  },
  // Removed 'Smoke Exhaust Unit' product
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

  let imageHtml = '';
  if (product.id === 'xlpe-foam') {
    imageHtml = `<div style='position:relative;width:100%;height:140px;overflow:hidden;margin:0;'>
      <img src='images/XLPE-SHEETS.jpeg' alt='XLPE Sheets & Tubes Insulation' style='position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block;margin:0;padding:0;'>
    </div>`;
  } else if (product.id === 'nitrile-rubber') {
    imageHtml = `<div style='position:relative;width:100%;height:140px;overflow:hidden;margin:0;'>
      <img src='images/NBR SHEETS.jpeg' alt='Nitrile Rubber Sheets & Tubes' style='position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block;margin:0;padding:0;'>
    </div>`;
  } else {
    imageHtml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" style="width:140px;height:140px;opacity:0.3;">
      <rect width="200" height="200" fill="none"/>
      <circle cx="100" cy="100" r="80" fill="none" stroke="#0b5cff" stroke-width="2"/>
      <path d="M 60 100 L 100 140 L 140 100 M 100 140 V 60" stroke="#0b5cff" stroke-width="2" fill="none"/>
    </svg>`;
  }

  tile.innerHTML = `
    <div class="product-image">
      ${imageHtml}
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


// No local nav toggle code here. All nav toggling is handled by global js/main.js

