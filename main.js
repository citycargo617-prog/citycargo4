// ==========================================================================
// City Cargo — Modern Intelligent Freight & Interactive Calculator Engine
// ==========================================================================

// Major Indian Logistics Hubs with Coordinates for Distance Calculation
const INDIAN_CITIES = [
  { name: 'Delhi NCR', state: 'Delhi', lat: 28.6139, lon: 77.2090, hub: true },
  { name: 'Mumbai', state: 'Maharashtra', lat: 19.0760, lon: 72.8777, hub: true },
  { name: 'Bengaluru', state: 'Karnataka', lat: 12.9716, lon: 77.5946, hub: true },
  { name: 'Chennai', state: 'Tamil Nadu', lat: 13.0827, lon: 80.2707, hub: true },
  { name: 'Hyderabad', state: 'Telangana', lat: 17.3850, lon: 78.4867, hub: true },
  { name: 'Kolkata', state: 'West Bengal', lat: 22.5726, lon: 88.3639, hub: true },
  { name: 'Pune', state: 'Maharashtra', lat: 18.5204, lon: 73.8567, hub: true },
  { name: 'Ahmedabad', state: 'Gujarat', lat: 23.0225, lon: 72.5714, hub: true },
  { name: 'Jaipur', state: 'Rajasthan', lat: 26.9124, lon: 75.7873, hub: true },
  { name: 'Surat', state: 'Gujarat', lat: 21.1702, lon: 72.8311, hub: true },
  { name: 'Lucknow', state: 'Uttar Pradesh', lat: 26.8467, lon: 80.9462, hub: true },
  { name: 'Indore', state: 'Madhya Pradesh', lat: 22.7196, lon: 75.8577, hub: true },
  { name: 'Chandigarh', state: 'Punjab/Haryana', lat: 30.7333, lon: 76.7794, hub: true },
  { name: 'Ludhiana', state: 'Punjab', lat: 30.9010, lon: 75.8573, hub: false },
  { name: 'Kanpur', state: 'Uttar Pradesh', lat: 26.4499, lon: 80.3319, hub: false },
  { name: 'Nagpur', state: 'Maharashtra', lat: 21.1458, lon: 79.0882, hub: true },
  { name: 'Vadodara', state: 'Gujarat', lat: 22.3072, lon: 73.1812, hub: false },
  { name: 'Patna', state: 'Bihar', lat: 25.5941, lon: 85.1376, hub: true },
  { name: 'Coimbatore', state: 'Tamil Nadu', lat: 11.0168, lon: 76.9558, hub: false },
  { name: 'Kochi', state: 'Kerala', lat: 9.9312, lon: 76.2673, hub: false },
  { name: 'Visakhapatnam', state: 'Andhra Pradesh', lat: 17.6868, lon: 83.2185, hub: false },
  { name: 'Bhopal', state: 'Madhya Pradesh', lat: 23.2599, lon: 77.4126, hub: false },
  { name: 'Udaipur', state: 'Rajasthan', lat: 24.5854, lon: 73.7125, hub: false },
  { name: 'Cuttack', state: 'Odisha', lat: 20.4625, lon: 85.8828, hub: false },
  { name: 'Guwahati', state: 'Assam', lat: 26.1445, lon: 91.7362, hub: false }
];

// Truck Specifications & Rates
const TRUCKS = {
  'tata-ace': {
    name: 'Tata Ace / Dost',
    category: 'mini',
    payload: '1.5 Ton',
    dims: '7.2ft × 4.8ft × 4.8ft',
    baseRatePerKm: 18,
    minFare: 1500,
    tollMultiplier: 1.0,
    emoji: '🛻',
    suitable: 'E-commerce, Local B2B, Retail Distribution, Single Room Shifting'
  },
  'pickup-8ft': {
    name: 'Bolero / 8ft Pickup',
    category: 'mini',
    payload: '2.0 Ton',
    dims: '8.5ft × 5.2ft × 5ft',
    baseRatePerKm: 22,
    minFare: 2200,
    tollMultiplier: 1.1,
    emoji: '🚛',
    suitable: 'Hardware, Industrial Parts, Perishables, 1 BHK Relocation'
  },
  'eicher-14ft': {
    name: '14ft Eicher Truck',
    category: 'lcv',
    payload: '4.0 Ton',
    dims: '14ft × 6.5ft × 7ft',
    baseRatePerKm: 28,
    minFare: 4000,
    tollMultiplier: 1.3,
    emoji: '🚚',
    suitable: 'FMCG, Machinery Parts, Textiles, 2-3 BHK Home Relocation'
  },
  'eicher-19ft': {
    name: '19ft Eicher Open/Close',
    category: 'lcv',
    payload: '7.5 Ton',
    dims: '19ft × 7.5ft × 7.5ft',
    baseRatePerKm: 34,
    minFare: 5500,
    tollMultiplier: 1.5,
    emoji: '🚚',
    suitable: 'Bulk Garments, Consumer Electronics, Steel Coils, Auto Components'
  },
  'truck-22ft': {
    name: '22ft Multi-Axle',
    category: 'mcv',
    payload: '10 - 12 Ton',
    dims: '22ft × 8ft × 8ft',
    baseRatePerKm: 42,
    minFare: 8000,
    tollMultiplier: 1.8,
    emoji: '🚛',
    suitable: 'Heavy Machinery, Bulk Agro Commodities, Construction Supplies'
  },
  'container-32ft': {
    name: '32ft Multi-Axle Container (HQ)',
    category: 'mcv',
    payload: '15 - 18 Ton',
    dims: '32ft × 8.2ft × 9.5ft',
    baseRatePerKm: 52,
    minFare: 12000,
    tollMultiplier: 2.2,
    emoji: '🚛',
    suitable: 'Pharma Cold Chain, FMCG Corporate Dispatches, High-Value Electronic Cargo'
  },
  'trailer-40ft': {
    name: '40ft High-Cube Trailer',
    category: 'trailer',
    payload: '28 - 35 Ton',
    dims: '40ft × 8.5ft × 9.5ft',
    baseRatePerKm: 68,
    minFare: 18000,
    tollMultiplier: 2.8,
    emoji: '🚜',
    suitable: 'Import/Export Shipping Containers, Heavy Steel Rods, Turnkey Projects'
  }
};

// Known Corridor Road Distances for Precision
const REAL_CORRIDORS = {
  'lucknow-kanpur': 82,
  'kanpur-lucknow': 82,
  'delhi-mumbai': 1420,
  'mumbai-delhi': 1420,
  'delhi-jaipur': 280,
  'jaipur-delhi': 280,
  'mumbai-pune': 150,
  'pune-mumbai': 150,
  'bengaluru-chennai': 350,
  'chennai-bengaluru': 350,
  'ahmedabad-mumbai': 530,
  'mumbai-ahmedabad': 530,
  'kolkata-patna': 585,
  'patna-kolkata': 585,
  'delhi-bengaluru': 2180,
  'bengaluru-delhi': 2180,
  'delhi-kolkata': 1530,
  'kolkata-delhi': 1530,
  'mumbai-bengaluru': 985,
  'bengaluru-mumbai': 985,
  'hyderabad-bengaluru': 570,
  'bengaluru-hyderabad': 570,
  'delhi-lucknow': 550,
  'lucknow-delhi': 550,
  'delhi-ahmedabad': 940,
  'ahmedabad-delhi': 940,
  'delhi-indore': 820,
  'indore-delhi': 820,
  'mumbai-surat': 285,
  'surat-mumbai': 285
};

// State
let selectedTruckId = 'tata-ace';
let currentCalculatedRate = 2200;
let currentPickupCity = 'Lucknow';
let currentDropCity = 'Kanpur';

// Utility: Haversine distance with road winding factor
function calculateRoadDistance(city1, city2) {
  const key = `${city1.toLowerCase().replace(/[^a-z]/g, '')}-${city2.toLowerCase().replace(/[^a-z]/g, '')}`;
  if (REAL_CORRIDORS[key]) {
    return REAL_CORRIDORS[key];
  }

  const c1 = INDIAN_CITIES.find(c => city1.toLowerCase().includes(c.name.toLowerCase().split(' ')[0]));
  const c2 = INDIAN_CITIES.find(c => city2.toLowerCase().includes(c.name.toLowerCase().split(' ')[0]));

  if (c1 && c2) {
    const R = 6371; // km
    const dLat = (c2.lat - c1.lat) * Math.PI / 180;
    const dLon = (c2.lon - c1.lon) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(c1.lat * Math.PI / 180) * Math.cos(c2.lat * Math.PI / 180) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const aerialKm = R * c;
    // Highway curvature factor in India typically 1.25 to 1.35
    return Math.round(aerialKm * 1.28);
  }

  // Fallback default realistic distance
  return 450;
}

// Format Currency
function formatRupees(amount) {
  return amount.toLocaleString('en-IN');
}

// Calculate Transit Time Estimate
function formatTransitTime(distanceKm) {
  if (distanceKm <= 100) {
    return '1h 45m (Express)';
  } else if (distanceKm <= 180) {
    return '3 – 5 Hours';
  } else if (distanceKm <= 350) {
    return '8 – 12 Hours (Same Day)';
  } else if (distanceKm <= 650) {
    return '18 – 24 Hours (Next Day)';
  } else if (distanceKm <= 1200) {
    return '28 – 34 Hours (1.5 Days)';
  } else if (distanceKm <= 1600) {
    return '36 – 44 Hours (2 Days)';
  } else {
    const days = Math.ceil(distanceKm / 750);
    return `${days} – ${days + 1} Days`;
  }
}

// Main Calculation Logic
function recalculateFreight() {
  const pickupInput = document.getElementById('pickupCityInput');
  const dropInput = document.getElementById('dropCityInput');
  const loadTypeSelect = document.getElementById('loadTypeSelect');
  const goodsTypeSelect = document.getElementById('goodsTypeSelect');

  const pickup = (pickupInput?.value || 'Lucknow').trim();
  const drop = (dropInput?.value || 'Kanpur').trim();
  currentPickupCity = pickup;
  currentDropCity = drop;

  const truck = TRUCKS[selectedTruckId] || TRUCKS['container-32ft'];
  const distanceKm = Math.max(30, calculateRoadDistance(pickup, drop));

  // Rate calculation
  let rate = distanceKm * truck.baseRatePerKm;
  
  // Toll calculation (approx ₹2.5 per km for heavy vehicles)
  const toll = Math.round(distanceKm * 2.2 * truck.tollMultiplier);
  rate += toll;

  // Mode adjustment: PTL is shared so cost is around 35-45% of dedicated truck
  if (loadTypeSelect?.value === 'ptl') {
    rate = Math.round(rate * 0.42);
  }

  // Goods type handling premium (e.g. household or pharma)
  if (goodsTypeSelect?.value === 'household') {
    rate = Math.round(rate * 1.15); // Includes packing supervision
  }

  // Ensure minimum threshold
  rate = Math.max(truck.minFare, Math.round(rate / 100) * 100);
  currentCalculatedRate = rate;

  // Update UI Elements
  const distEl = document.getElementById('calcDistance');
  const timeEl = document.getElementById('calcTransitTime');
  const priceEl = document.getElementById('calcTotalPrice');

  if (distEl) distEl.textContent = `${distanceKm.toLocaleString('en-IN')} km`;
  if (timeEl) timeEl.textContent = formatTransitTime(distanceKm);
  if (priceEl) priceEl.textContent = formatRupees(rate);

  // Update Live Simulation Card
  const simOrigin = document.getElementById('simOrigin');
  const simDest = document.getElementById('simDest');
  const simVeh = document.getElementById('simVehicle');
  const simEta = document.getElementById('simEtaPill') || document.querySelector('.eta-pill');
  if (simOrigin) simOrigin.textContent = pickup;
  if (simDest) simDest.textContent = drop;
  if (simVeh) simVeh.textContent = truck.name;
  if (simEta) simEta.textContent = `ETA: ${formatTransitTime(distanceKm)}`;
}

// Autocomplete Setup
function setupAutocomplete(inputId, listId) {
  const input = document.getElementById(inputId);
  const list = document.getElementById(listId);
  if (!input || !list) return;

  function renderMatches(query) {
    list.innerHTML = '';
    const q = query.toLowerCase().trim();
    if (!q) {
      list.classList.remove('open');
      return;
    }

    const matches = INDIAN_CITIES.filter(c => 
      c.name.toLowerCase().includes(q) || c.state.toLowerCase().includes(q)
    ).slice(0, 6);

    if (matches.length === 0) {
      list.classList.remove('open');
      return;
    }

    matches.forEach(city => {
      const item = document.createElement('div');
      item.className = 'autocomplete-item';
      item.innerHTML = `
        <span><strong>${city.name}</strong>, ${city.state}</span>
        <span class="city-hub-tag">${city.hub ? 'Major Hub' : 'Hub'}</span>
      `;
      item.addEventListener('click', () => {
        input.value = `${city.name}`;
        list.classList.remove('open');
        recalculateFreight();
      });
      list.appendChild(item);
    });

    list.classList.add('open');
  }

  input.addEventListener('input', (e) => {
    renderMatches(e.target.value);
  });

  input.addEventListener('focus', (e) => {
    if (e.target.value) renderMatches(e.target.value);
  });

  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !list.contains(e.target)) {
      list.classList.remove('open');
    }
  });
}

// Setup Fleet Showcase Grid
function renderFleetShowcase(category = 'mini') {
  const container = document.getElementById('fleetDisplayGrid');
  if (!container) return;

  container.innerHTML = '';
  const filtered = Object.entries(TRUCKS).filter(([_, truck]) => truck.category === category);

  filtered.forEach(([id, truck]) => {
    const card = document.createElement('div');
    card.className = 'fleet-item-card';
    card.innerHTML = `
      <div class="fleet-item-top">
        <span class="fleet-truck-emoji">${truck.emoji}</span>
        <span class="fleet-payload-tag">Cap: ${truck.payload}</span>
      </div>
      <h3 class="fleet-item-name">${truck.name}</h3>
      <div class="fleet-item-specs">
        <div class="spec-cell">
          <span class="spec-key">Dimensions (L×W×H)</span>
          <span class="spec-val">${truck.dims}</span>
        </div>
        <div class="spec-cell">
          <span class="spec-key">Indicative Base</span>
          <span class="spec-val">₹${truck.baseRatePerKm}/km</span>
        </div>
      </div>
      <p class="fleet-good-types"><strong>Ideal For:</strong> ${truck.suitable}</p>
      <button type="button" class="btn-select-fleet-truck" data-select-truck="${id}">
        Calculate Rates for this Vehicle
      </button>
    `;
    container.appendChild(card);
  });

  // Attach button click events to update the calculator
  container.querySelectorAll('[data-select-truck]').forEach(btn => {
    btn.addEventListener('click', () => {
      const truckId = btn.getAttribute('data-select-truck');
      selectedTruckId = truckId;
      
      // Update top calculator buttons active state
      document.querySelectorAll('.truck-card-option').forEach(el => {
        el.classList.toggle('active', el.getAttribute('data-truck-id') === truckId);
      });

      recalculateFreight();
      const calcSection = document.getElementById('fare-estimator');
      if (calcSection) {
        calcSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Theme Switcher Logic
function setupThemeSwitcher() {
  const themeBtn = document.getElementById('themeBtn');
  const dropdown = document.getElementById('themeDropdown');
  const currentDot = document.getElementById('currentThemeDot');

  const savedTheme = localStorage.getItem('citycargo_theme') || 'royal-blue';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeDot(savedTheme);

  if (themeBtn && dropdown) {
    themeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('open');
    });

    document.querySelectorAll('[data-set-theme]').forEach(opt => {
      opt.addEventListener('click', () => {
        const theme = opt.getAttribute('data-set-theme');
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('citycargo_theme', theme);
        updateThemeDot(theme);

        document.querySelectorAll('[data-set-theme]').forEach(el => {
          el.classList.toggle('active', el === opt);
        });

        dropdown.classList.remove('open');
      });
    });

    document.addEventListener('click', () => {
      dropdown.classList.remove('open');
    });
  }

  function updateThemeDot(theme) {
    if (!currentDot) return;
    if (theme === 'emerald-tech') currentDot.style.backgroundColor = '#059669';
    else if (theme === 'dark-obsidian') currentDot.style.backgroundColor = '#38BDF8';
    else currentDot.style.backgroundColor = '#2563EB';
  }
}

// Initialize Interactive Events
document.addEventListener('DOMContentLoaded', () => {
  // 1. Autocompletes
  setupAutocomplete('pickupCityInput', 'pickupSuggestions');
  setupAutocomplete('dropCityInput', 'dropSuggestions');

  // 2. City Swap Button
  const swapBtn = document.getElementById('swapCitiesBtn');
  if (swapBtn) {
    swapBtn.addEventListener('click', () => {
      const pickupEl = document.getElementById('pickupCityInput');
      const dropEl = document.getElementById('dropCityInput');
      if (pickupEl && dropEl) {
        const temp = pickupEl.value;
        pickupEl.value = dropEl.value;
        dropEl.value = temp;
        recalculateFreight();
      }
    });
  }

  // 3. Quick Hub Chips in Estimator
  document.querySelectorAll('#quickHubChips .hub-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const city = chip.getAttribute('data-city');
      const dropEl = document.getElementById('dropCityInput');
      if (dropEl) {
        dropEl.value = city;
        recalculateFreight();
      }
    });
  });

  // 4. Truck Selector Options
  document.querySelectorAll('.truck-card-option').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.truck-card-option').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      selectedTruckId = card.getAttribute('data-truck-id');
      recalculateFreight();
    });
  });

  // 5. Select dropdowns changes
  const goodsSelect = document.getElementById('goodsTypeSelect');
  const loadSelect = document.getElementById('loadTypeSelect');
  if (goodsSelect) goodsSelect.addEventListener('change', recalculateFreight);
  if (loadSelect) loadSelect.addEventListener('change', recalculateFreight);

  // 6. Corridors Grid click handlers
  document.querySelectorAll('.corridor-card').forEach(card => {
    card.addEventListener('click', () => {
      const from = card.getAttribute('data-from');
      const to = card.getAttribute('data-to');
      const pickupEl = document.getElementById('pickupCityInput');
      const dropEl = document.getElementById('dropCityInput');
      if (pickupEl) pickupEl.value = from;
      if (dropEl) dropEl.value = to;
      recalculateFreight();
      document.getElementById('fare-estimator')?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // 7. Fleet Tabs Navigation
  document.querySelectorAll('.fleet-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.fleet-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderFleetShowcase(tab.getAttribute('data-fleet'));
    });
  });
  renderFleetShowcase('mini');

  // 8. Mobile Menu Toggle
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileDrawer');
  if (mobileBtn && drawer) {
    mobileBtn.addEventListener('click', () => {
      drawer.classList.toggle('open');
    });
    drawer.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => drawer.classList.remove('open'));
    });
  }

  // 9. Booking Modal Handlers
  const modal = document.getElementById('bookingModal');
  const openModalBtn = document.getElementById('openBookingModalBtn');
  const openFromCalcBtn = document.getElementById('bookNowFromCalcBtn');
  const closeModalBtn = document.getElementById('closeBookingModal');
  const confirmForm = document.getElementById('confirmBookingForm');
  const successState = document.getElementById('modalSuccessState');

  function openModal() {
    if (!modal) return;
    const truck = TRUCKS[selectedTruckId] || TRUCKS['container-32ft'];
    
    document.getElementById('modalRouteSummary').textContent = `${currentPickupCity} → ${currentDropCity}`;
    document.getElementById('modalVehicleSummary').textContent = truck.name;
    document.getElementById('modalPriceSummary').textContent = `₹${formatRupees(currentCalculatedRate)}`;

    if (confirmForm) confirmForm.style.display = 'block';
    if (successState) successState.style.display = 'none';

    modal.classList.add('open');
  }

  if (openModalBtn) openModalBtn.addEventListener('click', openModal);
  if (openFromCalcBtn) openFromCalcBtn.addEventListener('click', openModal);
  if (closeModalBtn) closeModalBtn.addEventListener('click', () => modal.classList.remove('open'));
  
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('open');
    });
  }

  if (confirmForm) {
    confirmForm.addEventListener('submit', (e) => {
      e.preventDefault();
      confirmForm.style.display = 'none';
      if (successState) successState.style.display = 'block';
    });
  }

  // Insurance Inquire & Truck Owner Buttons
  const insBtn = document.getElementById('insuranceInquireBtn');
  if (insBtn) {
    insBtn.addEventListener('click', () => {
      alert("Transit insurance protection (up to ₹50 Lakh) has been selected. You can review policy details during truck booking!");
      openModal();
    });
  }

  const truckOwnerBtn = document.getElementById('truckOwnerJoinBtn');
  if (truckOwnerBtn) {
    truckOwnerBtn.addEventListener('click', () => {
      alert("City Cargo Fleet Network: Dispatch lines are ready to register your vehicle. Please call: +91 95550 13557 or message on WhatsApp to attach your truck.");
    });
  }

  // 10. Theme Switcher
  setupThemeSwitcher();

  // 11. Mobile Drawer Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Auto-close drawer when clicking on any mobile nav link
    const mobileLinks = mobileDrawer.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 12. Initial Calculation
  recalculateFreight();

  // 13. Simulate Live Ticker timestamp
  setInterval(() => {
    const simTime = document.getElementById('simTime');
    if (simTime) {
      simTime.textContent = 'Updated ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
  }, 15000);

  // 14. 4D Interactive Holographic Logo Engine
  function init4DLogo() {
    const scenes = document.querySelectorAll('.logo-4d-scene');
    scenes.forEach(scene => {
      const card = scene.querySelector('.logo-4d-card');
      const glow = scene.querySelector('.logo-4d-glow');
      if (!card) return;

      let rafId = null;
      let targetRotateX = 0;
      let targetRotateY = 0;
      const targetTranslateZ = 24;
      let currentRotateX = 0;
      let currentRotateY = 0;
      let isInteracting = false;

      function updateTilt() {
        if (!isInteracting) return;
        currentRotateX += (targetRotateX - currentRotateX) * 0.18;
        currentRotateY += (targetRotateY - currentRotateY) * 0.18;

        card.style.transform = `perspective(1200px) rotateX(${currentRotateX.toFixed(2)}deg) rotateY(${currentRotateY.toFixed(2)}deg) translateZ(${targetTranslateZ}px) scale(1.05)`;
        rafId = requestAnimationFrame(updateTilt);
      }

      function handleMove(clientX, clientY) {
        const rect = scene.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        targetRotateX = ((y - centerY) / centerY) * -18;
        targetRotateY = ((x - centerX) / centerX) * 18;

        if (glow) {
          const glowX = ((x - centerX) / centerX) * 14;
          const glowY = ((y - centerY) / centerY) * 14;
          glow.style.transform = `translate3d(${glowX.toFixed(1)}px, ${glowY.toFixed(1)}px, 8px) scale(1.15)`;
          glow.style.opacity = '1';
        }

        if (!isInteracting) {
          isInteracting = true;
          card.style.animationPlayState = 'paused';
          rafId = requestAnimationFrame(updateTilt);
        }
      }

      function handleLeave() {
        isInteracting = false;
        if (rafId) cancelAnimationFrame(rafId);
        card.style.transform = '';
        if (glow) {
          glow.style.transform = '';
          glow.style.opacity = '';
        }
        setTimeout(() => {
          if (!isInteracting) {
            card.style.animationPlayState = 'running';
          }
        }, 120);
      }

      scene.addEventListener('mousemove', (e) => handleMove(e.clientX, e.clientY));
      scene.addEventListener('mouseleave', handleLeave);

      scene.addEventListener('touchmove', (e) => {
        if (e.touches && e.touches[0]) {
          handleMove(e.touches[0].clientX, e.touches[0].clientY);
        }
      }, { passive: true });
      scene.addEventListener('touchend', handleLeave);
    });
  }

  init4DLogo();
});
