// This file shares the productsData array for use on the home page and products page
// Update this file in one place to update both pages

const productsData = [
  {
    id: 'nitrile-rubber',
    title: 'Nitrile Rubber - Sheets and Tubes',
    shortDescription: 'High-quality NBR sheets and tubes for industrial sealing applications',
    image: 'NBR SHEETS.jpeg',
    pageUrl: '../products/nbr-sheets-tubes.html'
  },
  {
    id: 'xlpe-foam',
    title: 'XLPE Foam - Sheets and Tubes',
    shortDescription: 'High-performance closed-cell thermal insulation for HVAC, plumbing, and cleanroom applications.',
    image: 'XLPE-SHEETS.jpeg',
    pageUrl: '../products/xlpe-sheets-tubes.html'
  },
  {
    id: 'fiberglass',
    title: 'Fiber Glasswool',
    shortDescription: 'Lightweight insulation material for high-temperature applications',
    image: 'fiberglass-wool.png',
    pageUrl: '../products/fiberglass-wool.html'
  },
  {
    id: 'rockwool',
    title: 'Rockwool & Stonewool',
    shortDescription: 'Non-combustible mineral wool insulation for fire-safe applications',
    image: 'rockwool-stonewool.png',
    pageUrl: '../products/rockwool-stonewool.html'
  },
  {
    id: 'elexiq-coolguard',
    title: 'ELEXIQ CoolGuard - Pre-insulated Metal Sheets',
    shortDescription: 'Advanced pre-insulated metal sheets for energy-efficient systems',
    image: 'elexiq-coolguard.png',
    pageUrl: '../products/elexiq-coolguard.html'
  },
  {
    id: 'industrial-fans',
    title: 'Industrial Fans',
    shortDescription: 'High-performance fans for ventilation, cooling, and air circulation in industrial and commercial environments.',
    image: 'axial-fan.png',
    pageUrl: '../products/industrial-fans.html'
  },
  {
    id: 'air-bubble',
    title: 'Reflective Air Bubble Insulation',
    shortDescription: 'Lightweight reflective insulation for thermal and moisture protection',
    image: 'air-bubble.png',
    pageUrl: '../products/air-bubble.html'
  },
  {
    id: 'smoke-exhaust',
    title: 'Smoke Exhaust Unit',
    shortDescription: 'Dedicated smoke extraction systems for safety applications',
    image: 'smoke-exhaust-unit.png',
    pageUrl: '../products/smoke-exhaust-unit.html'
  },
  {
    id: 'inline-fan',
    title: 'Inline Fan',
    shortDescription: 'Compact and powerful fans for ducted ventilation, ideal for boosting airflow in HVAC systems and confined spaces.',
    image: 'inline-fan.png',
    pageUrl: '../products/inline-fan.html'
  },
  {
    id: 'hvls-fan',
    title: 'HVLS Fan',
    shortDescription: 'High-volume, low-speed fans for large spaces, providing energy-efficient air circulation and comfort in industrial and commercial environments.',
    image: 'hvls-fan.png',
    pageUrl: '../products/hvls-fan.html'
  },
  {
    id: 'fan-section',
    title: 'Fan Section',
    shortDescription: 'Modular fan units for air handling and ventilation, designed for efficient airflow and integration in HVAC systems.',
    image: 'fan-section.png',
    pageUrl: '../products/fan-section.html'
  },
  {
    id: 'jet-fan',
    title: 'Jet Fan',
    shortDescription: 'High-velocity fans for tunnel and large space ventilation, designed for powerful air movement and smoke extraction.',
    image: 'jet-fan.png',
    pageUrl: '../products/jet-fan.html'
  }
];

if (typeof module !== 'undefined') {
  module.exports = productsData;
}
