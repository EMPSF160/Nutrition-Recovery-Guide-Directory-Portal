// NOURISHMAP Main Application Logic & Responsive Controller

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initToastSystem();
  initCompareTray();
  initGlobalModals();
  
  // Page-specific initializers
  const page = document.body.dataset.page;
  if (page === 'home') initHomePage();
  if (page === 'directory') initDirectoryPage();
  if (page === 'listing-detail') initDetailPage();
  if (page === 'guides') initGuidesPage();
  if (page === 'submit') initSubmitPage();
  if (page === 'user-dashboard') initUserDashboard();
  if (page === 'owner-dashboard') initOwnerDashboard();
  if (page === 'admin-dashboard') initAdminDashboard();
});

// Toast System
function showToast(message, type = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  const icon = type === 'success' ? '✓' : 'ℹ';
  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Global Dashboard Logout -> Redirects to Home Page (index.html)
function handleDashboardLogout(message = 'Logged out successfully. Returning to Home...') {
  showToast(message);
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 500);
}

// Mobile & Desktop Navbar Controller
function initNavbar() {
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 15) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // Mobile Drawer Creation & Handling
  let drawer = document.querySelector('.mobile-nav-drawer');
  if (!drawer) {
    drawer = document.createElement('div');
    drawer.className = 'mobile-nav-drawer';
    drawer.innerHTML = `
      <div class="mobile-nav-content">
        <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:12px; border-bottom:1px solid var(--border-light);">
          <div style="font-size:0.875rem; font-weight:700; color:var(--text-primary); text-transform:uppercase; letter-spacing:0.06em;">Navigation</div>
          <button class="mobile-drawer-close" style="width:34px; height:34px; border-radius:50%; background:var(--bg-subtle); display:flex; align-items:center; justify-content:center; font-size:1.1rem; color:var(--text-primary); border:1px solid var(--border-light); cursor:pointer;">✕</button>
        </div>
        <div style="display:flex; flex-direction:column; gap:8px;">
          <a href="index.html" class="dropdown-item" style="font-size:1rem; font-weight:600; padding:12px;">🏠 Home</a>
          <a href="directory.html" class="dropdown-item" style="font-size:1rem; font-weight:600; padding:12px;">🔍 Explore Directory</a>
          <a href="guides.html" class="dropdown-item" style="font-size:1rem; font-weight:600; padding:12px;">📚 Recovery Guides</a>
          <a href="submit.html" class="dropdown-item" style="font-size:1rem; font-weight:600; padding:12px;">🩺 List Your Practice</a>
          <a href="login.html" class="dropdown-item" style="font-size:1rem; font-weight:600; padding:12px; color:var(--primary-dark);">🔐 Sign In / Authentication</a>
        </div>
        <div style="padding-top:12px; border-top:1px solid var(--border-light);">
          <div style="font-size:0.75rem; font-weight:700; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.08em; margin-bottom:8px;">Portals & Dashboards</div>
          <a href="user-dashboard.html" class="dropdown-item">👤 Patient / User Portal</a>
          <a href="owner-dashboard.html" class="dropdown-item">🩺 Specialist Practice Portal</a>
          <a href="admin-dashboard.html" class="dropdown-item">⚙️ Admin Moderation Center</a>
        </div>
        <div style="margin-top:10px; display:flex; flex-direction:column; gap:10px;">
          <a href="directory.html" class="btn btn-outline" style="width:100%; justify-content:center;">Browse Specialists</a>
          <a href="submit.html" class="btn btn-primary" style="width:100%; justify-content:center;">+ Submit Practice Listing</a>
        </div>
        <div style="padding-top:14px; border-top:1px solid var(--border-light); display:flex; justify-content:center; gap:10px;">
          <a href="https://instagram.com" class="footer-social-icon" target="_blank" rel="noopener noreferrer" title="Instagram" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="https://facebook.com" class="footer-social-icon" target="_blank" rel="noopener noreferrer" title="Facebook" aria-label="Facebook">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
          <a href="https://linkedin.com" class="footer-social-icon" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" r="2"></circle></svg>
          </a>
          <a href="https://x.com" class="footer-social-icon" target="_blank" rel="noopener noreferrer" title="X / Twitter" aria-label="X">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
          </a>
          <a href="https://youtube.com" class="footer-social-icon" target="_blank" rel="noopener noreferrer" title="YouTube" aria-label="YouTube">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>
          </a>
        </div>
      </div>
    `;
    document.body.appendChild(drawer);
  }

  const mobileToggle = document.querySelector('.mobile-toggle');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      drawer.classList.toggle('open');
      document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
    });
  }

  drawer.addEventListener('click', (e) => {
    if (e.target === drawer || e.target.closest('.mobile-drawer-close') || e.target.tagName === 'A') {
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  // Active link highlighters
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// Compare System
function initCompareTray() {
  updateCompareTrayUI();
}

function updateCompareTrayUI() {
  let tray = document.querySelector('.compare-tray');
  const compareList = NOURISH_STORE.getCompareList();
  
  if (!tray) {
    tray = document.createElement('div');
    tray.className = 'compare-tray';
    document.body.appendChild(tray);
  }

  if (compareList.length > 0) {
    const itemsHtml = compareList.map(id => {
      const spec = NOURISH_DATA.listings.find(l => l.id === id);
      return spec ? `<img src="${spec.image}" class="compare-thumb" title="${spec.name}" alt="${spec.name}">` : '';
    }).join('');

    tray.innerHTML = `
      <div style="font-size:0.8rem; font-weight:700; color:var(--primary-dark); white-space:nowrap;">Compare (${compareList.length}/3)</div>
      <div class="compare-items-thumbs">${itemsHtml}</div>
      <button class="btn btn-sm btn-primary" onclick="openCompareModal()">Compare Now</button>
      <button class="btn btn-sm btn-outline" style="border:none; padding:4px;" onclick="clearCompareList()" title="Clear">✕</button>
    `;
    tray.classList.add('visible');
  } else {
    tray.classList.remove('visible');
  }
}

function handleCompareToggle(id) {
  const res = NOURISH_STORE.toggleCompare(id);
  if (!res.success) {
    showToast(res.message, 'info');
    return;
  }
  updateCompareTrayUI();
  showToast(res.inList ? 'Added to specialist comparison.' : 'Removed from comparison.');
}

function clearCompareList() {
  localStorage.setItem('nourish_compare_list', JSON.stringify([]));
  updateCompareTrayUI();
  showToast('Comparison list cleared.');
}

function openCompareModal() {
  const compareIds = NOURISH_STORE.getCompareList();
  if (compareIds.length === 0) return;

  const specs = compareIds.map(id => NOURISH_DATA.listings.find(l => l.id === id)).filter(Boolean);
  
  const modal = document.getElementById('compareModal');
  const container = document.getElementById('compareModalBody');
  if (!modal || !container) return;

  container.innerHTML = `
    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
      ${specs.map(s => `
        <div style="border:1px solid var(--border-light); border-radius:var(--radius-md); padding:16px; background:#ffffff; display:flex; flex-direction:column; height:100%;">
          <img src="${s.image}" class="avatar-lg" style="margin-bottom:10px; border:2px solid var(--primary-soft);" alt="${s.name}">
          <h4 style="font-size:1rem; margin-bottom:4px;">${s.name}</h4>
          <div style="font-size:0.75rem; color:var(--primary); font-weight:700; margin-bottom:8px;">${s.categoryName}</div>
          <div style="font-size:0.8rem; margin-bottom:4px;"><strong>Rating:</strong> ⭐ ${s.rating} (${s.reviewsCount})</div>
          <div style="font-size:0.8rem; margin-bottom:4px;"><strong>Location:</strong> ${s.location}</div>
          <div style="font-size:0.8rem; margin-bottom:4px;"><strong>Fee:</strong> ${s.priceLabel}</div>
          <div style="font-size:0.8rem; margin-bottom:4px;"><strong>Insurance:</strong> ${s.acceptsInsurance ? 'Yes (Accepted)' : 'Self-Pay'}</div>
          <div style="font-size:0.8rem; margin-bottom:12px;"><strong>Specialties:</strong> ${s.specialties.slice(0, 2).join(', ')}</div>
          <a href="listing-detail.html?id=${s.id}" class="btn btn-sm btn-primary" style="width:100%; margin-top:auto;">View Profile</a>
        </div>
      `).join('')}
    </div>
  `;

  modal.classList.add('open');
}

function handleFavoriteToggle(btn, id) {
  const isSaved = NOURISH_STORE.toggleSaveListing(id);
  btn.classList.toggle('active', isSaved);
  showToast(isSaved ? 'Specialist saved to your bookmarks!' : 'Specialist removed from bookmarks.');
}

// Global Modals
function initGlobalModals() {
  document.querySelectorAll('.modal-close-btn, .modal-backdrop').forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target === el || el.classList.contains('modal-close-btn')) {
        document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('open'));
      }
    });
  });
}

function openAuthModal(mode = 'login') {
  let modal = document.getElementById('authModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'authModal';
    modal.className = 'modal-backdrop';
    modal.innerHTML = `
      <div class="modal-card" style="max-width: 440px; padding: 32px 28px;">
        <button class="modal-close-btn" style="position: absolute; top: 16px; right: 16px; background: var(--bg-subtle); border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;" onclick="document.getElementById('authModal').classList.remove('open')">✕</button>
        
        <!-- Clickable Centered Logo -->
        <div class="auth-card-logo">
          <a href="index.html" class="brand-logo" title="Back to Home">
            <div class="brand-icon">🌿</div>
            <div>
              <span class="brand-name">NOURISH<span>MAP</span></span>
              <span class="brand-tagline">Clinical Directory Network</span>
            </div>
          </a>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; background: var(--bg-subtle); padding: 4px; border-radius: var(--radius-md); margin-bottom: 20px; gap: 4px;">
          <button type="button" id="modalAuthTabLogin" class="btn btn-sm" style="background: #ffffff; color: var(--primary-dark); font-weight: 700; box-shadow: var(--shadow-sm);" onclick="toggleModalAuthMode('login')">Sign In</button>
          <button type="button" id="modalAuthTabRegister" class="btn btn-sm" style="background: transparent; color: var(--text-secondary); font-weight: 600;" onclick="toggleModalAuthMode('register')">Register</button>
        </div>

        <div id="modalLoginSection">
          <form onsubmit="event.preventDefault(); showToast('Signed in successfully! Redirecting...'); setTimeout(() => window.location.href='user-dashboard.html', 800);">
            <div class="form-group" style="margin-bottom: 14px;">
              <label class="form-label" style="font-size: 0.82rem;">Email Address</label>
              <input type="email" class="form-control" value="sarah.m@example.com" placeholder="name@example.com" required>
            </div>
            <div class="form-group" style="margin-bottom: 14px;">
              <label class="form-label" style="font-size: 0.82rem;">Password</label>
              <input type="password" class="form-control" value="••••••••" placeholder="Password" required>
            </div>
            <button type="submit" class="btn btn-primary" style="width: 100%; justify-content: center; padding: 10px;">Sign In to Portal</button>
          </form>
          <div style="margin-top: 14px; text-align: center;">
            <a href="login.html?mode=forgot" style="font-size: 0.8rem; color: var(--primary); font-weight: 600;">Forgot your password?</a>
          </div>
        </div>

        <div id="modalRegisterSection" style="display: none;">
          <form onsubmit="event.preventDefault(); showToast('Account created! Welcome to NOURISHMAP.'); setTimeout(() => window.location.href='user-dashboard.html', 800);">
            <div class="form-group" style="margin-bottom: 12px;">
              <label class="form-label" style="font-size: 0.82rem;">Full Name</label>
              <input type="text" class="form-control" placeholder="e.g. Alex Morgan" required>
            </div>
            <div class="form-group" style="margin-bottom: 12px;">
              <label class="form-label" style="font-size: 0.82rem;">Email Address</label>
              <input type="email" class="form-control" placeholder="name@example.com" required>
            </div>
            <div class="form-group" style="margin-bottom: 12px;">
              <label class="form-label" style="font-size: 0.82rem;">Password</label>
              <input type="password" class="form-control" placeholder="At least 8 characters" minlength="8" required>
            </div>
            <button type="submit" class="btn btn-primary" style="width: 100%; justify-content: center; padding: 10px;">Create Free Account</button>
          </form>
        </div>

        <div style="margin-top: 18px; padding-top: 14px; border-top: 1px solid var(--border-light); display: flex; justify-content: space-around; font-size: 0.78rem;">
          <a href="user-dashboard.html" style="color: var(--primary); font-weight: 600;">Patient Portal</a>
          <span style="color: var(--border-medium);">|</span>
          <a href="owner-dashboard.html" style="color: var(--primary); font-weight: 600;">Specialist Portal</a>
          <span style="color: var(--border-medium);">|</span>
          <a href="admin-dashboard.html" style="color: var(--primary); font-weight: 600;">Admin Center</a>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('open');
    });
  }

  toggleModalAuthMode(mode);
  modal.classList.add('open');
}

function toggleModalAuthMode(mode) {
  const loginSec = document.getElementById('modalLoginSection');
  const regSec = document.getElementById('modalRegisterSection');
  const tabLogin = document.getElementById('modalAuthTabLogin');
  const tabReg = document.getElementById('modalAuthTabRegister');

  if (mode === 'login') {
    if (loginSec) loginSec.style.display = 'block';
    if (regSec) regSec.style.display = 'none';
    if (tabLogin) {
      tabLogin.style.background = '#ffffff';
      tabLogin.style.color = 'var(--primary-dark)';
      tabLogin.style.boxShadow = 'var(--shadow-sm)';
    }
    if (tabReg) {
      tabReg.style.background = 'transparent';
      tabReg.style.color = 'var(--text-secondary)';
      tabReg.style.boxShadow = 'none';
    }
  } else {
    if (loginSec) loginSec.style.display = 'none';
    if (regSec) regSec.style.display = 'block';
    if (tabReg) {
      tabReg.style.background = '#ffffff';
      tabReg.style.color = 'var(--primary-dark)';
      tabReg.style.boxShadow = 'var(--shadow-sm)';
    }
    if (tabLogin) {
      tabLogin.style.background = 'transparent';
      tabLogin.style.color = 'var(--text-secondary)';
      tabLogin.style.boxShadow = 'none';
    }
  }
}

// ===================== HOME PAGE =====================
function initHomePage() {
  // Category cards rendering with image thumbnails
  const categoriesGrid = document.getElementById('featuredCategories');
  if (categoriesGrid) {
    categoriesGrid.innerHTML = NOURISH_DATA.categories.map(c => `
      <a href="directory.html?category=${c.id}" class="category-card">
        <div class="category-card-img">
          <img src="${c.image}" alt="${c.name}">
        </div>
        <div style="display:flex; align-items:center; gap:6px; margin-bottom:4px;">
          <span style="font-size:1.1rem;">${c.icon}</span>
          <div class="category-title">${c.name}</div>
        </div>
        <div class="category-count">${c.count} Specialists</div>
      </a>
    `).join('');
  }

  // Featured Listings rendering (Show 6 verified specialists)
  const featuredGrid = document.getElementById('featuredListingsGrid');
  if (featuredGrid) {
    const saved = NOURISH_STORE.getSavedListings();
    featuredGrid.innerHTML = NOURISH_DATA.listings.slice(0, 6).map(item => `
      <div class="listing-card">
        <div class="listing-img-box">
          <img src="${item.image}" alt="${item.name}">
          <div class="listing-overlay-badges">
            ${item.isVerified ? '<span class="badge badge-verified">✓ Verified</span>' : ''}
            ${item.isFeatured ? '<span class="badge badge-featured">★ Top Specialist</span>' : ''}
          </div>
          <button class="listing-favorite-btn ${saved.includes(item.id) ? 'active' : ''}" onclick="handleFavoriteToggle(this, '${item.id}')" title="Save Specialist">
            ♥
          </button>
        </div>
        <div class="listing-content">
          <div class="listing-meta-row">
            <span class="listing-category">${item.categoryName}</span>
            <span class="listing-rating">★ ${item.rating} (${item.reviewsCount})</span>
          </div>
          <h3 class="listing-name"><a href="listing-detail.html?id=${item.id}">${item.name}</a></h3>
          <div class="listing-location">📍 ${item.location} • ${item.distance}</div>
          <div class="listing-tags">
            ${item.specialties.slice(0, 2).map(s => `<span class="badge badge-tag">${s}</span>`).join('')}
          </div>
          <div class="listing-footer">
            <div class="listing-price">Starts <span>$${item.price}</span></div>
            <div style="display:flex; gap:6px;">
              <button class="btn btn-sm btn-outline" onclick="handleCompareToggle('${item.id}')" title="Compare">Compare</button>
              <a href="listing-detail.html?id=${item.id}" class="btn btn-sm btn-primary">Book Consult</a>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Interactive Quiz Logic
  initRecoveryQuiz();
}

function initRecoveryQuiz() {
  const quizQuestions = [
    {
      question: "What is your primary recovery or nutritional challenge?",
      options: [
        { text: "Severe bloating, refractory SIBO, or chronic IBS", cat: "gut-health" },
        { text: "Post-surgery tissue/ACL repair & athletic rehab", cat: "sports-injury" },
        { text: "Healing relationship with food & metabolic refeed", cat: "ed-recovery" },
        { text: "Autoimmune flares, Hashimoto's, or severe chronic fatigue", cat: "autoimmune-chronic" }
      ]
    },
    {
      question: "What type of care format do you prefer?",
      options: [
        { text: "100% Virtual Telehealth / In-depth lab shipping" },
        { text: "In-Person Clinic Visits with body composition scans" },
        { text: "Hybrid (Initial In-Person + Virtual Check-ins)" }
      ]
    }
  ];

  let currentStep = 0;
  let selectedCategory = 'gut-health';

  const titleEl = document.getElementById('quizTitle');
  const stepEl = document.getElementById('quizStepText');
  const optionsContainer = document.getElementById('quizOptions');
  const resultBox = document.getElementById('quizResultBox');

  function renderStep() {
    if (!titleEl || !optionsContainer) return;
    
    if (currentStep < quizQuestions.length) {
      const q = quizQuestions[currentStep];
      stepEl.textContent = `Step ${currentStep + 1} of ${quizQuestions.length}`;
      titleEl.textContent = q.question;
      optionsContainer.innerHTML = q.options.map((opt, idx) => `
        <button class="quiz-opt-btn" onclick="selectQuizOption(${idx})">
          <span>${opt.text}</span>
          <span>→</span>
        </button>
      `).join('');
      resultBox.style.display = 'none';
      optionsContainer.style.display = 'grid';
    } else {
      // Show Result
      const catObj = NOURISH_DATA.categories.find(c => c.id === selectedCategory) || NOURISH_DATA.categories[0];
      stepEl.textContent = `Personalized Recommendation Ready`;
      titleEl.textContent = `Matched Protocol: ${catObj.name}`;
      optionsContainer.style.display = 'none';
      resultBox.style.display = 'block';
      resultBox.innerHTML = `
        <div style="font-size:2rem; margin-bottom:8px;">${catObj.icon}</div>
        <h4 style="color:#ffffff; font-size:1.15rem; margin-bottom:8px;">Recommended Clinical Pathway</h4>
        <p style="color:rgba(255,255,255,0.85); font-size:0.875rem; line-height:1.5; margin-bottom:16px;">${catObj.description}</p>
        <div style="display:flex; justify-content:center; gap:10px; flex-wrap:wrap;">
          <a href="directory.html?category=${catObj.id}" class="btn btn-secondary btn-sm">View Matched Specialists (${catObj.count})</a>
          <button class="btn btn-outline btn-sm" style="color:#ffffff; border-color:rgba(255,255,255,0.4);" onclick="resetQuiz()">Retake Quiz</button>
        </div>
      `;
    }
  }

  window.selectQuizOption = function(idx) {
    if (currentStep === 0) {
      selectedCategory = quizQuestions[0].options[idx].cat;
    }
    currentStep++;
    renderStep();
  };

  window.resetQuiz = function() {
    currentStep = 0;
    renderStep();
  };

  renderStep();
}

// ===================== DIRECTORY PAGE =====================
function initDirectoryPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const initialCategory = urlParams.get('category') || 'all';
  const initialQuery = urlParams.get('q') || '';
  const initialLocation = urlParams.get('loc') || '';

  // Populate category checkboxes
  const catFilterContainer = document.getElementById('categoryFilters');
  if (catFilterContainer) {
    catFilterContainer.innerHTML = NOURISH_DATA.categories.map(c => `
      <label class="filter-checkbox-label">
        <input type="checkbox" name="category" value="${c.id}" ${initialCategory === c.id ? 'checked' : ''} onchange="filterDirectoryListings()">
        <span>${c.name}</span>
        <span class="count">${c.count}</span>
      </label>
    `).join('');
  }

  // Populate location select
  const locSelect = document.getElementById('locationFilter');
  if (locSelect) {
    NOURISH_DATA.locations.forEach(loc => {
      const opt = document.createElement('option');
      opt.value = loc;
      opt.textContent = loc;
      if (initialLocation === loc) opt.selected = true;
      locSelect.appendChild(opt);
    });
  }

  const searchInput = document.getElementById('directorySearchInput');
  if (searchInput && initialQuery) {
    searchInput.value = initialQuery;
  }

  filterDirectoryListings();
}

function filterDirectoryListings() {
  const searchInput = document.getElementById('directorySearchInput')?.value.toLowerCase() || '';
  const locSelect = document.getElementById('locationFilter')?.value || 'all';
  const verifiedOnly = document.getElementById('verifiedOnlyFilter')?.checked || false;
  const telehealthOnly = document.getElementById('telehealthFilter')?.checked || false;
  const insuranceOnly = document.getElementById('insuranceFilter')?.checked || false;
  const sortSelect = document.getElementById('sortSelect')?.value || 'rating';

  // Selected categories
  const selectedCats = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(el => el.value);

  let results = NOURISH_DATA.listings.filter(item => {
    // Text search
    if (searchInput && !item.name.toLowerCase().includes(searchInput) && !item.specialties.some(s => s.toLowerCase().includes(searchInput)) && !item.categoryName.toLowerCase().includes(searchInput)) {
      return false;
    }
    // Category
    if (selectedCats.length > 0 && !selectedCats.includes(item.category)) {
      return false;
    }
    // Location
    if (locSelect !== 'all' && item.location !== locSelect) {
      return false;
    }
    // Verified
    if (verifiedOnly && !item.isVerified) {
      return false;
    }
    // Telehealth
    if (telehealthOnly && !item.telehealth) {
      return false;
    }
    // Insurance
    if (insuranceOnly && !item.acceptsInsurance) {
      return false;
    }
    return true;
  });

  // Sort
  if (sortSelect === 'rating') {
    results.sort((a, b) => b.rating - a.rating);
  } else if (sortSelect === 'price-low') {
    results.sort((a, b) => a.price - b.price);
  } else if (sortSelect === 'reviews') {
    results.sort((a, b) => b.reviewsCount - a.reviewsCount);
  }

  renderDirectoryResults(results);
}

function renderDirectoryResults(items) {
  const countEl = document.getElementById('directoryResultsCount');
  if (countEl) countEl.textContent = `Showing ${items.length} verified specialists`;

  const container = document.getElementById('directoryListingsContainer');
  if (!container) return;

  const saved = NOURISH_STORE.getSavedListings();

  if (items.length === 0) {
    container.innerHTML = `
      <div style="background:#ffffff; padding:40px 20px; text-align:center; border-radius:var(--radius-lg); border:1px solid var(--border-light); grid-column:1/-1;">
        <div style="font-size:2.5rem; margin-bottom:12px;">🔍</div>
        <h3>No matching recovery specialists found</h3>
        <p style="color:var(--text-secondary); margin-bottom:16px; font-size:0.9rem;">Try adjusting your filters, selecting broader locations, or clearing category restrictions.</p>
        <button class="btn btn-outline btn-sm" onclick="resetDirectoryFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(item => `
    <div class="listing-card">
      <div class="listing-img-box">
        <img src="${item.image}" alt="${item.name}">
        <div class="listing-overlay-badges">
          ${item.isVerified ? '<span class="badge badge-verified">✓ Verified</span>' : ''}
          ${item.isFeatured ? '<span class="badge badge-featured">★ Featured</span>' : ''}
        </div>
        <button class="listing-favorite-btn ${saved.includes(item.id) ? 'active' : ''}" onclick="handleFavoriteToggle(this, '${item.id}')" title="Save Specialist">
          ♥
        </button>
      </div>
      <div class="listing-content">
        <div class="listing-meta-row">
          <span class="listing-category">${item.categoryName}</span>
          <span class="listing-rating">★ ${item.rating} (${item.reviewsCount})</span>
        </div>
        <h3 class="listing-name"><a href="listing-detail.html?id=${item.id}">${item.name}</a></h3>
        <div class="listing-location">📍 ${item.location} • ${item.distance}</div>
        <div style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:12px; line-height:1.45;">
          ${item.bio.substring(0, 95)}...
        </div>
        <div class="listing-tags">
          ${item.specialties.slice(0, 3).map(s => `<span class="badge badge-tag">${s}</span>`).join('')}
        </div>
        <div class="listing-footer">
          <div class="listing-price">From <span>$${item.price}</span></div>
          <div style="display:flex; gap:6px;">
            <button class="btn btn-sm btn-outline" onclick="handleCompareToggle('${item.id}')" title="Compare">Compare</button>
            <a href="listing-detail.html?id=${item.id}" class="btn btn-sm btn-primary">Profile & Consult</a>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function toggleViewMode(mode) {
  const gridBtn = document.getElementById('viewGridBtn');
  const mapBtn = document.getElementById('viewMapBtn');
  const mapContainer = document.getElementById('mapViewContainer');

  if (mode === 'map') {
    gridBtn?.classList.remove('active');
    mapBtn?.classList.add('active');
    if (mapContainer) mapContainer.style.display = 'block';
  } else {
    mapBtn?.classList.remove('active');
    gridBtn?.classList.add('active');
    if (mapContainer) mapContainer.style.display = 'none';
  }
}

function resetDirectoryFilters() {
  document.querySelectorAll('input[type="checkbox"]').forEach(c => c.checked = false);
  const searchInput = document.getElementById('directorySearchInput');
  if (searchInput) searchInput.value = '';
  const locSelect = document.getElementById('locationFilter');
  if (locSelect) locSelect.value = 'all';
  const pills = document.querySelectorAll('.quick-pill-btn');
  pills.forEach((p, idx) => {
    if (idx === 0) p.classList.add('active');
    else p.classList.remove('active');
  });
  filterDirectoryListings();
}

function setQuickCategory(catId) {
  const buttons = document.querySelectorAll('.quick-pill-btn');
  buttons.forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('onclick')?.includes(`'${catId}'`)) {
      btn.classList.add('active');
    }
  });

  const checkboxes = document.querySelectorAll('input[name="category"]');
  if (catId === 'all') {
    checkboxes.forEach(c => c.checked = false);
  } else {
    checkboxes.forEach(c => {
      c.checked = (c.value === catId);
    });
  }
  filterDirectoryListings();
}

// ===================== DETAIL PAGE =====================
function initDetailPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const specId = urlParams.get('id') || 'dr-elena-vance';
  const specialist = NOURISH_DATA.listings.find(l => l.id === specId) || NOURISH_DATA.listings[0];

  // Set Profile Hero Information
  document.getElementById('profileAvatar').src = specialist.image;
  document.getElementById('profileName').innerHTML = `${specialist.name} ${specialist.isVerified ? '<span class="badge badge-verified" style="font-size:0.75rem;">✓ Verified Credentials</span>' : ''}`;
  document.getElementById('profileHeadline').textContent = specialist.headline;
  document.getElementById('profileCategory').textContent = specialist.categoryName;
  document.getElementById('profileLocation').textContent = `📍 ${specialist.location}`;
  document.getElementById('profileRating').textContent = `★ ${specialist.rating} (${specialist.reviewsCount} verified reviews)`;
  document.getElementById('profileExperience').textContent = `🩺 ${specialist.experience} clinical experience`;

  // Bio & Education
  document.getElementById('profileBio').textContent = specialist.bio;
  document.getElementById('profileEducation').textContent = specialist.education;
  document.getElementById('profileAddress').textContent = specialist.clinicAddress;
  document.getElementById('profilePhone').textContent = specialist.phone;
  document.getElementById('profileEmail').textContent = specialist.email;

  // Specialties
  const specialtiesContainer = document.getElementById('profileSpecialties');
  if (specialtiesContainer) {
    specialtiesContainer.innerHTML = specialist.specialties.map(s => `
      <span class="badge badge-pill" style="font-size:0.8rem; padding:6px 12px; background:var(--primary-soft); color:var(--primary-dark); font-weight:600;">✓ ${s}</span>
    `).join('');
  }

  // Services Tier List
  const servicesList = document.getElementById('profileServicesList');
  if (servicesList) {
    servicesList.innerHTML = specialist.services.map(srv => `
      <div class="service-tier-item">
        <div>
          <div class="service-tier-title">${srv.name}</div>
          <div class="service-tier-desc">${srv.desc}</div>
        </div>
        <div class="service-tier-price">
          <div class="amount">${srv.price}</div>
          <button class="btn btn-sm btn-subtle" onclick="openBookingModal('${srv.name}')">Select</button>
        </div>
      </div>
    `).join('');
  }

  // Recovery Protocol Roadmap
  const roadmapContainer = document.getElementById('profileRoadmap');
  if (roadmapContainer && specialist.roadmap) {
    roadmapContainer.innerHTML = specialist.roadmap.map(step => `
      <div class="roadmap-step">
        <div class="roadmap-step-title">${step.title}</div>
        <div class="roadmap-step-desc">${step.desc}</div>
      </div>
    `).join('');
  }

  // Reviews List
  renderDetailReviews(specialist.id);

  // Widget pricing
  document.getElementById('widgetPriceVal').textContent = `$${specialist.price}`;
}

function renderDetailReviews(specId) {
  const container = document.getElementById('profileReviewsList');
  if (!container) return;

  const reviews = NOURISH_DATA.reviews.filter(r => r.specialistId === specId);
  if (reviews.length === 0) {
    container.innerHTML = `<p style="color:var(--text-muted); font-size:0.9rem;">No reviews written yet. Be the first verified client to review!</p>`;
    return;
  }

  container.innerHTML = reviews.map(r => `
    <div style="border-bottom:1px solid var(--border-light); padding-bottom:16px; margin-bottom:16px;">
      <div style="display:flex; justify-content:space-between; margin-bottom:4px; flex-wrap:wrap; gap:6px;">
        <div style="display:flex; align-items:center; gap:8px;">
          <img src="${r.avatar || 'images/q (4).png'}" class="avatar-sm" alt="${r.author}">
          <strong>${r.author}</strong>
        </div>
        <span style="font-size:0.75rem; color:var(--text-muted);">${r.date}</span>
      </div>
      <div style="display:flex; gap:8px; align-items:center; margin-bottom:8px;">
        <span style="color:#d97736; font-size:0.85rem;">★★★★★</span>
        ${r.verifiedPatient ? '<span class="badge badge-verified" style="font-size:0.65rem; padding:2px 6px;">Verified Patient</span>' : ''}
      </div>
      <h5 style="font-size:0.95rem; margin-bottom:4px;">${r.title}</h5>
      <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.5;">${r.comment}</p>
    </div>
  `).join('');
}

function openBookingModal(serviceName = '') {
  const modal = document.getElementById('bookingModal');
  const serviceInput = document.getElementById('bookingServiceName');
  if (serviceInput && serviceName) serviceInput.value = serviceName;
  if (modal) modal.classList.add('open');
}

function handleBookingSubmit(e) {
  e.preventDefault();
  const modal = document.getElementById('bookingModal');
  if (modal) modal.classList.remove('open');
  showToast('Booking request sent successfully! Specialist will review your medical intake.');
}

function openReviewModal() {
  const modal = document.getElementById('reviewModal');
  if (modal) modal.classList.add('open');
}

function handleReviewSubmit(e) {
  e.preventDefault();
  const author = document.getElementById('reviewAuthor')?.value || 'Anonymous';
  const title = document.getElementById('reviewTitle')?.value || 'Great recovery experience';
  const comment = document.getElementById('reviewComment')?.value || '';

  const urlParams = new URLSearchParams(window.location.search);
  const specId = urlParams.get('id') || 'dr-elena-vance';

  NOURISH_DATA.reviews.unshift({
    id: Date.now(),
    specialistId: specId,
    author: author,
    avatar: 'images/q (4).png',
    verifiedPatient: true,
    rating: 5,
    date: 'Just now',
    title: title,
    comment: comment
  });

  renderDetailReviews(specId);
  const modal = document.getElementById('reviewModal');
  if (modal) modal.classList.remove('open');
  showToast('Thank you! Your verified review has been published.');
}

// ===================== GUIDES PAGE =====================
function initGuidesPage() {
  const guidesContainer = document.getElementById('guidesGrid');
  if (guidesContainer) {
    guidesContainer.innerHTML = NOURISH_DATA.guides.map(g => `
      <div class="guide-card">
        <div class="guide-img-box">
          <img src="${g.image}" alt="${g.title}">
        </div>
        <div class="guide-content">
          <div class="guide-meta">
            <span class="badge badge-tag">${g.category}</span>
            <span>• ${g.readTime}</span>
            <span>• ${g.date}</span>
          </div>
          <h3 class="guide-title"><a href="#guide-${g.id}" onclick="openGuideReader('${g.id}')">${g.title}</a></h3>
          <p class="guide-excerpt">${g.summary}</p>
          <div class="guide-footer">
            <div class="guide-author">
              <img src="${g.authorImg}" class="guide-author-avatar" alt="${g.author}">
              <span>${g.author}</span>
            </div>
            <button class="btn btn-sm btn-subtle" onclick="openGuideReader('${g.id}')">Read Guide →</button>
          </div>
        </div>
      </div>
    `).join('');
  }
}

function openGuideReader(guideId) {
  const guide = NOURISH_DATA.guides.find(g => g.id === guideId) || NOURISH_DATA.guides[0];
  const modal = document.getElementById('guideReaderModal');
  const body = document.getElementById('guideReaderBody');
  if (!modal || !body) return;

  body.innerHTML = `
    <span class="badge badge-tag" style="margin-bottom:8px;">${guide.category}</span>
    <h2 style="font-size:1.4rem; color:var(--primary-dark); margin-bottom:12px; line-height:1.3;">${guide.title}</h2>
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:18px; font-size:0.825rem; color:var(--text-muted); flex-wrap:wrap;">
      <img src="${guide.authorImg}" class="guide-author-avatar" alt="${guide.author}">
      <span>Authored by <strong>${guide.author}</strong></span>
      <span>• ${guide.date}</span>
    </div>
    <div class="guide-img-box" style="margin-bottom:18px; border-radius:var(--radius-md);">
      <img src="${guide.image}" alt="${guide.title}">
    </div>
    <div style="font-size:0.9rem; line-height:1.65; color:var(--text-secondary);">
      <p style="margin-bottom:14px; font-weight:500;">${guide.summary}</p>
      <h4 style="color:var(--primary-dark); margin:16px 0 8px;">Key Clinical Principles:</h4>
      <ul style="padding-left:18px; margin-bottom:16px;">
        <li style="margin-bottom:6px;"><strong>Targeted Mucosal Repair:</strong> Using L-glutamine, zinc carnosine, and deglycyrrhizinated licorice to reduce intestinal permeability.</li>
        <li style="margin-bottom:6px;"><strong>Phase-Matched Carbohydrate Fermentation:</strong> Shifting from low-reactive starches to diverse polyphenolic prebiotics as motility improves.</li>
        <li style="margin-bottom:6px;"><strong>Vagus Nerve & Nervous System Signaling:</strong> Mealtime parasympathetic breathing to activate cephalic phase gastric enzymes.</li>
      </ul>
      <div style="background:var(--primary-soft); padding:14px; border-radius:var(--radius-md); border-left:4px solid var(--primary); margin:16px 0; font-size:0.85rem;">
        <strong>Clinical Recommendation:</strong> If you are experiencing persistent digestive distress or post-surgery recovery stagnation, consult a board-certified clinical dietitian before initiating extreme fasts or restrictive diets.
      </div>
      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:20px; padding-top:14px; border-top:1px solid var(--border-light); flex-wrap:wrap; gap:10px;">
        <button class="btn btn-sm btn-primary" onclick="showToast('Protocol PDF downloaded to your device!')">📥 Download Full PDF Protocol</button>
        <a href="directory.html" class="btn btn-sm btn-outline">Find Specialists</a>
      </div>
    </div>
  `;

  modal.classList.add('open');
}

// ===================== SUBMIT PAGE =====================
function initSubmitPage() {
  const wizardForm = document.getElementById('providerOnboardingForm');
  if (wizardForm) {
    wizardForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const statusBox = document.getElementById('submitSuccessBox');
      wizardForm.style.display = 'none';
      if (statusBox) statusBox.style.display = 'block';
      showToast('Listing submitted! Verification review takes ~24-48 business hours.');
    });
  }
}

// ===================== USER DASHBOARD =====================
function initUserDashboard() {
  initDashboardTabs('user');
  renderUserSavedListings();
}

function renderUserSavedListings() {
  const savedIds = NOURISH_STORE.getSavedListings();
  const savedContainer = document.getElementById('userSavedListings');
  if (savedContainer) {
    const specs = savedIds.map(id => NOURISH_DATA.listings.find(l => l.id === id)).filter(Boolean);
    if (specs.length === 0) {
      savedContainer.innerHTML = `
        <div style="background:#ffffff; padding:32px 20px; text-align:center; border-radius:var(--radius-lg); border:1px solid var(--border-light); grid-column:1/-1;">
          <p style="color:var(--text-muted); font-size:0.95rem; margin-bottom:12px;">No saved specialists yet.</p>
          <a href="directory.html" class="btn btn-sm btn-primary">Browse Clinical Directory</a>
        </div>
      `;
    } else {
      savedContainer.innerHTML = specs.map(item => `
        <div class="listing-card">
          <div class="listing-img-box">
            <img src="${item.image}" alt="${item.name}">
            <div class="listing-overlay-badges">
              ${item.isVerified ? '<span class="badge badge-verified">✓ Verified</span>' : ''}
            </div>
            <button class="listing-favorite-btn active" onclick="handleFavoriteToggle(this, '${item.id}'); renderUserSavedListings();" title="Remove Bookmark">♥</button>
          </div>
          <div class="listing-content">
            <span class="listing-category">${item.categoryName}</span>
            <h4 class="listing-name" style="font-size:1.05rem;"><a href="listing-detail.html?id=${item.id}">${item.name}</a></h4>
            <div class="listing-location">📍 ${item.location} • ${item.priceLabel}</div>
            <div style="display:flex; justify-content:space-between; align-items:center; width:100%; margin-top:10px; padding-top:10px; border-top:1px solid var(--border-light);">
              <span style="font-size:0.85rem; font-weight:700; color:#b45309;">⭐ ${item.rating} (${item.reviewsCount})</span>
              <a href="listing-detail.html?id=${item.id}" class="btn btn-sm btn-primary">Book Consult</a>
            </div>
          </div>
        </div>
      `).join('');
    }
  }
}

// ===================== OWNER DASHBOARD =====================
function initOwnerDashboard() {
  initDashboardTabs('owner');
  renderOwnerLeads();
}

function renderOwnerLeads() {
  const leadsTable = document.getElementById('ownerLeadsTableBody');
  if (leadsTable) {
    leadsTable.innerHTML = NOURISH_DATA.leads.map(ld => `
      <tr>
        <td><strong>${ld.id}</strong></td>
        <td>
          <div style="display:flex; align-items:center; gap:8px;">
            <img src="${ld.avatar || 'images/q (8).png'}" class="avatar-sm" alt="${ld.client}">
            <div>
              <div style="font-weight:600;">${ld.client}</div>
              <div style="font-size:0.75rem; color:var(--text-muted);">${ld.email}</div>
            </div>
          </div>
        </td>
        <td>${ld.service}</td>
        <td>${ld.date}</td>
        <td><span class="badge badge-verified" style="font-size:0.7rem;">${ld.status}</span></td>
        <td>
          <div style="display:flex; gap:6px;">
            <button class="btn btn-sm btn-primary" onclick="showToast('Accepted lead! Sent intake paperwork to patient.')">Accept</button>
            <button class="btn btn-sm btn-outline" onclick="showToast('Opening clinical messaging window...')">Chat</button>
          </div>
        </td>
      </tr>
    `).join('');
  }
}

// ===================== ADMIN DASHBOARD =====================
function initAdminDashboard() {
  initDashboardTabs('admin');
  renderAdminTables();
}

function renderAdminTables() {
  const adminTable = document.getElementById('adminSubmissionsTable');
  if (adminTable) {
    adminTable.innerHTML = `
      <tr>
        <td><strong>SUB-994</strong></td>
        <td>Dr. Sarah Jenkins, RDN</td>
        <td>Eating Disorder Nutrition</td>
        <td>License #RD-884920</td>
        <td><span class="badge badge-verified" style="font-size:0.7rem;">Verified Active</span></td>
        <td>
          <button class="btn btn-sm btn-outline" onclick="showToast('Credential certificate validated.')">View Docs</button>
        </td>
      </tr>
      <tr>
        <td><strong>SUB-995</strong></td>
        <td>Dr. Elena Vance, MS, RD</td>
        <td>Gut Health & SIBO</td>
        <td>Monash FODMAP #9012</td>
        <td><span class="badge badge-verified" style="font-size:0.7rem;">Verified Active</span></td>
        <td>
          <button class="btn btn-sm btn-outline" onclick="showToast('Monash certificate validated.')">View Docs</button>
        </td>
      </tr>
      <tr>
        <td><strong>SUB-996</strong></td>
        <td>BioRecovery Integrative Center</td>
        <td>Athletic Injury & Tissue Repair</td>
        <td>Pending State Board</td>
        <td><span class="badge badge-featured" style="font-size:0.7rem;">Pending Review</span></td>
        <td>
          <div style="display:flex; gap:6px;">
            <button class="btn btn-sm btn-primary" onclick="showToast('Approved listing for public directory!')">Approve</button>
            <button class="btn btn-sm btn-outline" onclick="showToast('Requested secondary verification docs.')">Request Info</button>
          </div>
        </td>
      </tr>
    `;
  }
}

// Global Multi-Tab Switcher for All Portals
function initDashboardTabs(portalType) {
  const navItems = document.querySelectorAll('.dashboard-nav-item a');
  const panes = document.querySelectorAll('.dashboard-tab-pane');

  function switchTab(targetHash) {
    if (!targetHash) return;
    const cleanHash = targetHash.replace('#', '');
    
    // Update nav links
    document.querySelectorAll('.dashboard-nav-item').forEach(item => {
      const link = item.querySelector('a');
      const href = link?.getAttribute('href');
      if (href === `#${cleanHash}`) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Update tab panes
    let found = false;
    panes.forEach(pane => {
      if (pane.id === `tab-${cleanHash}` || pane.getAttribute('data-tab') === cleanHash) {
        pane.classList.add('active');
        found = true;
      } else {
        pane.classList.remove('active');
      }
    });

    // If no pane with tab-${cleanHash}, activate default
    if (!found && panes.length > 0) {
      panes[0].classList.add('active');
    }

    // Scroll to top of main container on mobile
    if (window.innerWidth < 900) {
      document.querySelector('.dashboard-main')?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  navItems.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#') && href !== '#') {
        e.preventDefault();
        window.location.hash = href;
        switchTab(href);
      }
    });
  });

  // Check initial hash
  if (window.location.hash) {
    switchTab(window.location.hash);
  }
}
