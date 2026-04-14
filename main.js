/* ============================================================
   DRAGON BALL STORE — main.js
   Sections:
   1.  Data — book catalog
   2.  State management
   3.  State helpers (cart, filters, toast)
   4.  Utility functions
   5.  Component: Navbar
   6.  Component: Sidebar
   7.  Component: Book Card
   8.  Page: Home
   9.  Page: Shop
   10. Page: Detail
   11. Page: Cart
   12. Component: Toast
   13. Root render
   14. Event delegation & resize listener
   ============================================================ */


/* ── 1. DATA ─────────────────────────────────────────────── */

const BOOKS = [
  {
    id: 1, title: "Dragon Ball", vol: 1,
    price: 29000, oldPrice: 35000,
    img: "Goku-kid1.png",
    arc: "Goku Nhỏ", rating: 4.9, sold: 2341,
    isNew: false, isBestSeller: true,
    publisher: "NXB Lê Huy", pages: 192,
    desc: "Son Goku bắt đầu hành trình tìm kiếm 7 Viên Ngọc Rồng cùng cô gái tên Bulma. Cuộc phiêu lưu đầu tiên của cậu bé có đuôi với sức mạnh phi thường bắt đầu từ đây!"
  },
  {
    id: 2, title: "Dragon Ball", vol: 2,
    price: 29000, oldPrice: null,
    img: "a35c0afecf0f7bc6e23bc6d2f99f1bdf.jpg",
    arc: "Goku Nhỏ", rating: 4.8, sold: 1892,
    isNew: false, isBestSeller: false,
    publisher: "NXB Lê Huy", pages: 192,
    desc: "Goku và Bulma tiếp tục hành trình. Họ gặp Yamcha và Puar – những kẻ từng là địch thủ nhưng sau trở thành đồng đội thân thiết."
  },
  {
    id: 3, title: "Dragon Ball", vol: 3,
    price: 30000, oldPrice: null,
    img: "Dragon_Ball_Super_artwork.jpg",
    arc: "Goku Nhỏ", rating: 4.8, sold: 1654,
    isNew: false, isBestSeller: false,
    publisher: "NXB Lê Huy", pages: 192,
    desc: "Goku tham dự Đại hội Võ thuật Thiên hạ đệ nhất lần đầu tiên và gây kinh ngạc cho mọi người bằng tài năng vô song."
  },
  {
    id: 4, title: "Dragon Ball Z", vol: 1,
    price: 35000, oldPrice: 42000,
    img: "7df53f0fee5068216151df1b22b5ae9e.webp",
    arc: "Saga Saiyan", rating: 5.0, sold: 3210,
    isNew: false, isBestSeller: true,
    publisher: "NXB Lê Huy", pages: 208,
    desc: "Raditz – anh trai của Goku – xuất hiện và tiết lộ sự thật về nguồn gốc Saiyan. Cuộc chiến sinh tử đầu tiên của Dragon Ball Z bắt đầu!"
  },
  {
    id: 5, title: "Dragon Ball Z", vol: 2,
    price: 35000, oldPrice: null,
    img: "dragon_ball_full_color_-_phan_3_-_tap_3_1.webp",
    arc: "Saga Saiyan", rating: 4.9, sold: 2876,
    isNew: false, isBestSeller: true,
    publisher: "NXB Lê Huy", pages: 208,
    desc: "Vegeta và Nappa đổ bộ xuống Trái Đất. Piccolo hy sinh để cứu Gohan. Trận chiến khốc liệt nhất từ trước đến nay bắt đầu!"
  },
  {
    id: 6, title: "Dragon Ball Z", vol: 3,
    price: 35000, oldPrice: null,
    img: "51bjv9rms-L.jpg",
    arc: "Saga Saiyan", rating: 4.9, sold: 2543,
    isNew: false, isBestSeller: false,
    publisher: "NXB Lê Huy", pages: 208,
    desc: "Goku vs Vegeta – cuộc đối đầu huyền thoại! Goku lần đầu sử dụng Genki-Dama khổng lồ để đối phó với hoàng tử Saiyan."
  },
  {
    id: 7, title: "Dragon Ball Z", vol: 10,
    price: 36000, oldPrice: 40000,
    img: "dragon-ball-full-color_phan-4_frieza-dai-de_tap-1_tb-2025.webp",
    arc: "Saga Frieza", rating: 5.0, sold: 4120,
    isNew: false, isBestSeller: true,
    publisher: "NXB Lê Huy", pages: 216,
    desc: "Đỉnh điểm Saga Frieza: Super Saiyan Goku xuất hiện lần đầu! Khoảnh khắc tóc vàng lịch sử của manga khiến triệu độc giả choáng ngợp."
  },
  {
    id: 8, title: "Dragon Ball Super", vol: 1,
    price: 45000, oldPrice: 50000,
    img: "b4__41390.jpg",
    arc: "Saga God", rating: 4.7, sold: 1987,
    isNew: true, isBestSeller: false,
    publisher: "NXB Lê Huy", pages: 224,
    desc: "Beerus – Thần Hủy Diệt – tỉnh giấc và tìm kiếm Super Saiyan God. Cuộc phiêu lưu thế giới thần thánh bắt đầu!"
  },
  {
    id: 9, title: "Dragon Ball Super", vol: 2,
    price: 45000, oldPrice: null,
    img: "dragon-ball-super-tap-16_95564ff4701649ff937833857becf007.jpg",
    arc: "Saga God", rating: 4.7, sold: 1654,
    isNew: true, isBestSeller: false,
    publisher: "NXB Lê Huy", pages: 224,
    desc: "Goku đạt được sức mạnh Super Saiyan God và đối đầu trực tiếp với Beerus. Cuộc chiến quyết định số phận Trái Đất!"
  },
  {
    id: 10, title: "Dragon Ball Super", vol: 8,
    price: 45000, oldPrice: 52000,
    img: "dragon_ball_super_-_tap_15_-_moro_-_ke_an_hanh_tinh_1.webp",
    arc: "Tournament of Power", rating: 4.9, sold: 2890,
    isNew: true, isBestSeller: true,
    publisher: "NXB Lê Huy", pages: 224,
    desc: "Giải đấu Sức Mạnh chính thức bắt đầu! 80 chiến binh từ 8 vũ trụ đối đầu nhau. Goku và Ultra Instinct xuất hiện lần đầu!"
  },
  {
    id: 11, title: "Dragon Ball Super", vol: 20,
    price: 48000, oldPrice: null,
    img: "484844791_1041864804631273_2464109619656140516_n.jpg",
    arc: "Granolah", rating: 4.8, sold: 1120,
    isNew: true, isBestSeller: false,
    publisher: "NXB Lê Huy", pages: 224,
    desc: "Saga Granolah – kẻ sống sót người Cerealian. Goku và Vegeta đối mặt với chiến binh được tuyên bố là mạnh nhất vũ trụ!"
  },
  {
    id: 12, title: "Dragon Ball GT", vol: 1,
    price: 38000, oldPrice: 45000,
    img: "ANIME-DRAGON-BALL-GT.jpg",
    arc: "GT", rating: 4.3, sold: 876,
    isNew: false, isBestSeller: false,
    publisher: "NXB Lê Huy", pages: 200,
    desc: "Goku bị biến thành trẻ con bởi Viên Ngọc Rồng Tối Thượng. Cuộc hành trình tới các hành tinh xa xôi đầy nguy hiểm bắt đầu!"
  },
];

const ALL_ARCS   = [...new Set(BOOKS.map(b => b.arc))];
const ALL_SERIES = [...new Set(BOOKS.map(b => b.title))];


/* ── 2. STATE ─────────────────────────────────────────────── */

const state = {
  dark:         true,
  cart:         [],           // [{ ...book, qty }]
  page:         'home',       // 'home' | 'shop' | 'detail' | 'cart'
  selectedBook: null,         // book id
  filters: {
    series:        [],
    arcs:          [],
    maxPrice:      60000,
    onlyNew:       false,
    onlyBestSeller: false,
  },
  sortBy:       'popular',    // 'popular' | 'priceAsc' | 'priceDesc' | 'rating'
  search:       '',
  sidebarOpen:  false,
  toast:        null,
  _toastTimer:  null,
};

function setState(updates) {
  Object.assign(state, updates);
  render();
}


/* ── 3. STATE HELPERS ─────────────────────────────────────── */

function addToCart(id) {
  const book     = BOOKS.find(b => b.id === id);
  const existing = state.cart.find(i => i.id === id);
  if (existing) {
    existing.qty++;
    setState({ cart: [...state.cart] });
  } else {
    setState({ cart: [...state.cart, { ...book, qty: 1 }] });
  }
  showToast(`✅ Đã thêm "${book.title} Tập ${book.vol}" vào giỏ hàng 🛒`);
}

function removeFromCart(id) {
  setState({ cart: state.cart.filter(i => i.id !== id) });
}

function updateQty(id, delta) {
  const cart = state.cart.map(i =>
    i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i
  );
  setState({ cart });
}

function toggleFilter(key, val) {
  const arr  = state.filters[key];
  const next = arr.includes(val)
    ? arr.filter(x => x !== val)
    : [...arr, val];
  setState({ filters: { ...state.filters, [key]: next } });
}

function clearFilters() {
  setState({
    filters: {
      series:         [],
      arcs:           [],
      maxPrice:       60000,
      onlyNew:        false,
      onlyBestSeller: false,
    }
  });
}

function cartTotal() {
  return state.cart.reduce((s, i) => s + i.price * i.qty, 0);
}

function cartCount() {
  return state.cart.reduce((s, i) => s + i.qty, 0);
}

function showToast(msg) {
  if (state._toastTimer) clearTimeout(state._toastTimer);
  const timer = setTimeout(() => setState({ toast: null, _toastTimer: null }), 3000);
  setState({ toast: msg, _toastTimer: timer });
}

function filteredBooks() {
  let books = BOOKS;

  if (state.filters.series.length > 0)
    books = books.filter(b => state.filters.series.includes(b.title));

  if (state.filters.arcs.length > 0)
    books = books.filter(b => state.filters.arcs.includes(b.arc));

  if (state.filters.onlyNew)
    books = books.filter(b => b.isNew);

  if (state.filters.onlyBestSeller)
    books = books.filter(b => b.isBestSeller);

  books = books.filter(b => b.price <= state.filters.maxPrice);

  if (state.search) {
    const q = state.search.toLowerCase();
    books = books.filter(b =>
      (b.title + ' tập ' + b.vol).toLowerCase().includes(q)
    );
  }

  if (state.sortBy === 'popular')   books = [...books].sort((a, b) => b.sold - a.sold);
  if (state.sortBy === 'priceAsc')  books = [...books].sort((a, b) => a.price - b.price);
  if (state.sortBy === 'priceDesc') books = [...books].sort((a, b) => b.price - a.price);
  if (state.sortBy === 'rating')    books = [...books].sort((a, b) => b.rating - a.rating);

  return books;
}


/* ── 4. UTILITY FUNCTIONS ─────────────────────────────────── */

/** Format VND price */
function fmt(n) {
  return n.toLocaleString('vi-VN') + 'đ';
}

/** Render 5-star row for a given rating */
function renderStars(rating) {
  return Array.from({ length: 5 }, (_, i) =>
    `<span class="star ${i < Math.round(rating) ? 'filled' : 'empty'}">★</span>`
  ).join('');
}

/** Render a custom checkbox */
function checkbox(checked) {
  return `<div class="custom-checkbox ${checked ? 'checked' : ''}">
    ${checked
      ? `<svg width="10" height="10" viewBox="0 0 24 24" fill="none"
           stroke="white" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>`
      : ''}
  </div>`;
}

/** Determine text color based on dark mode */
function textColor() {
  return state.dark ? '#f1f5f9' : '#0f172a';
}

/** Background for cards/panels */
function panelBg() {
  return state.dark
    ? 'rgba(255,255,255,0.04)'
    : 'rgba(255,255,255,0.85)';
}

/** Glass class based on mode */
function glassClass() {
  return state.dark ? 'glass' : 'glass-light';
}

/** Fallback image src */
function fallbackImg(e) {
  e.target.src = 'https://via.placeholder.com/200x290/1e1e2e/f59e0b?text=Dragon+Ball';
}


/* ── 5. COMPONENT: NAVBAR ─────────────────────────────────── */

function renderNav() {
  const cc = cartCount();
  return /* html */`
  <nav style="position:sticky;top:0;z-index:200;border-bottom:1px solid rgba(245,158,11,0.15);"
       class="${glassClass()}">
    <div style="max-width:1280px;margin:0 auto;padding:0 20px;
                display:flex;align-items:center;gap:16px;height:64px;">

      <!-- Hamburger (mobile) -->
      <button id="sidebar-btn" class="btn-icon"
              onclick="setState({ sidebarOpen: !state.sidebarOpen })"
              style="display:none;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2">
          <line x1="3" y1="6"  x2="21" y2="6"/>
          <line x1="3" y1="12" x2="21" y2="12"/>
          <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
      </button>

      <!-- Logo -->
      <div onclick="setState({ page:'home', selectedBook:null })"
           style="cursor:pointer;display:flex;align-items:center;gap:10px;flex-shrink:0;">
        <div class="dragonball" style="width:32px;height:32px;"></div>
        <span style="font-family:'Bangers',cursive;font-size:22px;letter-spacing:2px;"
              class="text-gradient-gold">DRAGON BALL STORE</span>
      </div>

      <!-- Search bar -->
      <div style="flex:1;max-width:400px;margin:0 auto;position:relative;">
        <input type="text" placeholder="Tìm kiếm truyện..."
               value="${state.search}"
               oninput="setState({ search: this.value, page: 'shop' })"
               style="width:100%;padding:9px 16px 9px 42px;border-radius:24px;
                      border:1px solid rgba(245,158,11,0.3);
                      background:rgba(255,255,255,0.06);
                      color:${textColor()};font-size:14px;outline:none;
                      font-family:Nunito;" />
        <svg style="position:absolute;left:14px;top:50%;transform:translateY(-50%);opacity:.45;"
             width="15" height="15" viewBox="0 0 24 24" fill="none"
             stroke="${textColor()}" stroke-width="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
      </div>

      <!-- Right actions -->
      <div style="display:flex;align-items:center;gap:10px;margin-left:auto;">

        <!-- Nav link desktop -->
        <button id="nav-shop" class="nav-link ${state.page==='shop'?'active':''}"
                onclick="setState({ page:'shop' })"
                style="color:${textColor()};">
          Cửa hàng
        </button>

        <!-- Dark mode toggle -->
        <button class="btn-icon"
                onclick="setState({ dark:!state.dark });
                         document.documentElement.classList.toggle('dark');
                         document.body.classList.toggle('dark');
                         document.body.classList.toggle('light');">
          ${state.dark
            ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                 <circle cx="12" cy="12" r="5"/>
                 <path stroke="currentColor" stroke-width="2" fill="none"
                   d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42
                      M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
               </svg>`
            : `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
               </svg>`}
        </button>

        <!-- Cart button -->
        <button class="btn-icon" style="position:relative;"
                onclick="setState({ page:'cart' })">
          <svg width="16" height="16" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
          ${cc > 0 ? `<span class="cart-badge">${cc}</span>` : ''}
        </button>

      </div>
    </div>
  </nav>`;
}


/* ── 6. COMPONENT: SIDEBAR ────────────────────────────────── */

function renderSidebarContent() {
  const f = state.filters;
  return /* html */`
  <div style="border-radius:16px;padding:20px;" class="${glassClass()}">

    <!-- Header -->
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:20px;">
      <svg width="17" height="17" viewBox="0 0 24 24"
           fill="none" stroke="#f59e0b" stroke-width="2">
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
      </svg>
      <span style="font-weight:800;font-size:15px;">Bộ lọc</span>
      <button onclick="clearFilters()"
              style="margin-left:auto;background:none;border:none;
                     color:#f59e0b;font-size:12px;cursor:pointer;font-weight:700;
                     font-family:Nunito;">
        Xóa tất cả
      </button>
    </div>

    <!-- Filter: Series -->
    <div style="margin-bottom:20px;">
      <div style="font-weight:800;font-size:11px;text-transform:uppercase;
                  letter-spacing:1px;color:#f59e0b;margin-bottom:10px;">
        Loại truyện
      </div>
      ${ALL_SERIES.map(s => {
        const isChecked = f.series.includes(s);
        const count = BOOKS.filter(b => b.title === s).length;
        return /* html */`
        <div class="sidebar-item ${isChecked ? 'active' : ''}"
             onclick="toggleFilter('series','${s}')"
             style="padding:8px 10px;display:flex;align-items:center;gap:8px;margin-bottom:4px;">
          ${checkbox(isChecked)}
          <span style="font-size:14px;font-weight:600;">${s}</span>
          <span style="margin-left:auto;font-size:11px;opacity:.55;
                       background:rgba(255,255,255,0.08);padding:1px 7px;border-radius:10px;">
            ${count}
          </span>
        </div>`;
      }).join('')}
    </div>

    <!-- Filter: Arcs -->
    <div style="margin-bottom:20px;">
      <div style="font-weight:800;font-size:11px;text-transform:uppercase;
                  letter-spacing:1px;color:#f59e0b;margin-bottom:10px;">
        Arc câu chuyện
      </div>
      ${ALL_ARCS.map(a => {
        const isChecked = f.arcs.includes(a);
        return /* html */`
        <div class="sidebar-item ${isChecked ? 'active' : ''}"
             onclick="toggleFilter('arcs','${a}')"
             style="padding:8px 10px;display:flex;align-items:center;gap:8px;margin-bottom:4px;">
          ${checkbox(isChecked)}
          <span style="font-size:13px;font-weight:600;">${a}</span>
        </div>`;
      }).join('')}
    </div>

    <!-- Filter: Max price slider -->
    <div style="margin-bottom:20px;">
      <div style="font-weight:800;font-size:11px;text-transform:uppercase;
                  letter-spacing:1px;color:#f59e0b;margin-bottom:10px;">
        Giá tối đa:
        <span style="color:#fbbf24;">${fmt(f.maxPrice)}</span>
      </div>
      <input type="range" min="25000" max="60000" step="1000"
             value="${f.maxPrice}"
             oninput="setState({ filters:{ ...state.filters, maxPrice:+this.value } })" />
      <div style="display:flex;justify-content:space-between;
                  font-size:11px;opacity:.55;margin-top:6px;">
        <span>25.000đ</span>
        <span>60.000đ</span>
      </div>
    </div>

    <!-- Filter: Special -->
    <div>
      <div style="font-weight:800;font-size:11px;text-transform:uppercase;
                  letter-spacing:1px;color:#f59e0b;margin-bottom:10px;">
        Đặc biệt
      </div>
      <div class="sidebar-item ${f.onlyNew ? 'active' : ''}"
           onclick="setState({ filters:{...state.filters, onlyNew:!state.filters.onlyNew} })"
           style="padding:8px 10px;display:flex;align-items:center;gap:8px;margin-bottom:6px;">
        ${checkbox(f.onlyNew)}
        <span style="font-size:14px;font-weight:600;">🆕 Mới ra mắt</span>
      </div>
      <div class="sidebar-item ${f.onlyBestSeller ? 'active' : ''}"
           onclick="setState({ filters:{...state.filters, onlyBestSeller:!state.filters.onlyBestSeller} })"
           style="padding:8px 10px;display:flex;align-items:center;gap:8px;">
        ${checkbox(f.onlyBestSeller)}
        <span style="font-size:14px;font-weight:600;">🔥 Bán chạy</span>
      </div>
    </div>

  </div>`;
}

function renderSidebar() {
  return /* html */`
  <!-- Desktop sidebar -->
  <aside id="sidebar-desktop"
         style="width:260px;flex-shrink:0;position:sticky;top:80px;max-height:calc(100vh - 96px);overflow-y:auto;">
    ${renderSidebarContent()}
  </aside>

  <!-- Mobile drawer -->
  <div id="sidebar-drawer" class="sidebar-drawer ${glassClass()} ${state.sidebarOpen ? 'open' : ''}"
       style="background:${state.dark ? '#0d0d18' : '#f8fafc'};">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
      <span style="font-weight:800;font-size:17px;">Bộ lọc</span>
      <button onclick="setState({ sidebarOpen:false })"
              style="background:none;border:none;cursor:pointer;
                     color:${textColor()};font-size:20px;line-height:1;">✕</button>
    </div>
    ${renderSidebarContent()}
  </div>

  <!-- Overlay for mobile drawer -->
  <div id="sidebar-overlay"
       class="sidebar-overlay ${state.sidebarOpen ? 'show' : ''}"
       onclick="setState({ sidebarOpen:false })">
  </div>`;
}


/* ── 7. COMPONENT: BOOK CARD ──────────────────────────────── */

function renderBookCard(book) {
  const inCart = state.cart.some(i => i.id === book.id);
  const discount = book.oldPrice
    ? Math.round((1 - book.price / book.oldPrice) * 100)
    : null;

  return /* html */`
  <div class="card-hover"
       onclick="setState({ selectedBook:${book.id}, page:'detail' })"
       style="position:relative;border-radius:16px;overflow:hidden;cursor:pointer;
              border:1px solid rgba(245,158,11,0.15);
              background:${panelBg()};">

    <div class="card-glow"></div>

    <!-- Ribbon badges -->
    ${book.isBestSeller
      ? `<div class="ribbon">🔥 BÁN CHẠY</div>`
      : book.isNew
        ? `<div class="ribbon ribbon-green">✨ MỚI</div>`
        : ''}

    <!-- Book cover image -->
    <div class="book-img-container">
      <img src="${book.img}" alt="${book.title} Tập ${book.vol}"
           onerror="this.src='https://via.placeholder.com/200x290/1e1e2e/f59e0b?text=Dragon+Ball'" />
      <div class="book-img-overlay"></div>

      <!-- Rating overlay -->
      <div style="position:absolute;bottom:8px;left:8px;right:8px;
                  display:flex;align-items:center;justify-content:space-between;">
        <span style="font-size:11px;font-weight:700;color:#fbbf24;">
          ${renderStars(book.rating)} ${book.rating}
        </span>
        <span style="font-size:10px;color:rgba(255,255,255,0.72);">
          ${book.sold.toLocaleString()} đã bán
        </span>
      </div>
    </div>

    <!-- Card body -->
    <div style="padding:12px;">
      <div style="font-size:10px;font-weight:700;color:#f59e0b;
                  text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px;">
        ${book.arc}
      </div>
      <div style="font-weight:800;font-size:14px;line-height:1.3;margin-bottom:3px;">
        ${book.title}
      </div>
      <div style="font-size:13px;opacity:.6;margin-bottom:10px;">
        Tập ${book.vol}
      </div>

      <!-- Price row -->
      <div style="display:flex;align-items:center;gap:7px;margin-bottom:10px;flex-wrap:wrap;">
        <span style="font-weight:900;font-size:17px;" class="text-gradient-gold">
          ${fmt(book.price)}
        </span>
        ${book.oldPrice
          ? `<span style="font-size:12px;text-decoration:line-through;opacity:.45;">
               ${fmt(book.oldPrice)}
             </span>
             <span class="discount-badge">-${discount}%</span>`
          : ''}
      </div>

      <!-- Add to cart button -->
      <button class="btn-primary"
              onclick="event.stopPropagation(); addToCart(${book.id})"
              style="width:100%;padding:9px;border-radius:10px;font-size:13px;
                     display:flex;align-items:center;justify-content:center;gap:6px;">
        <svg width="14" height="14" viewBox="0 0 24 24"
             fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 01-8 0"/>
        </svg>
        ${inCart ? 'Thêm nữa' : 'Thêm vào giỏ'}
      </button>
    </div>
  </div>`;
}


/* ── 8. PAGE: HOME ────────────────────────────────────────── */

function renderHome() {
  const featured = BOOKS.filter(b => b.isBestSeller).slice(0, 4);
  const newest   = BOOKS.filter(b => b.isNew).slice(0, 4);

  const stats = [
    { icon: '📚', label: 'Tập truyện',      val: '12+' },
    { icon: '🏆', label: 'Chính hãng 100%', val: 'NXB Lê Huy' },
    { icon: '🚀', label: 'Giao hàng',       val: 'Toàn quốc' },
    { icon: '⭐', label: 'Đánh giá',         val: '4.9 / 5' },
  ];

  return /* html */`

  <!-- ── Hero ── -->
  <section class="star-bg"
           style="position:relative;overflow:hidden;padding:80px 20px 60px;text-align:center;">

    <div style="max-width:700px;margin:0 auto;position:relative;z-index:1;">

      <!-- 7 Dragon Balls floating -->
      <div style="display:flex;justify-content:center;gap:6px;margin-bottom:28px;">
        ${Array.from({ length: 7 }, (_, i) => `
          <div class="dragonball anim-float"
               style="width:${20+i*4}px;height:${20+i*4}px;
                      animation-delay:${i * 0.2}s;">
          </div>`).join('')}
      </div>

      <h1 class="hero-title" style="margin-bottom:16px;">
        <span class="text-gradient-fire" style="display:block;">DRAGON BALL</span>
        <span style="font-size:0.38em;letter-spacing:6px;
                     color:${state.dark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.45)'};">
          MANGA STORE
        </span>
      </h1>

      <p style="font-size:16px;opacity:.65;margin-bottom:32px;max-width:500px;
                margin-left:auto;margin-right:auto;line-height:1.75;">
        Bộ sưu tập truyện tranh Dragon Ball chính hãng đầy đủ nhất Việt Nam.
        Từ nguyên tác Goku Nhỏ đến Dragon Ball Super!
      </p>

      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
        <button class="btn-primary"
                onclick="setState({ page:'shop' })"
                style="padding:14px 32px;border-radius:50px;font-size:16px;
                       display:flex;align-items:center;gap:8px;">
          Mua ngay
          <svg width="15" height="15" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </button>
        <button class="btn-ghost"
                onclick="setState({ page:'shop' })"
                style="padding:14px 32px;border-radius:50px;font-size:16px;
                       color:${textColor()};">
          Xem tất cả
        </button>
      </div>
    </div>

    <!-- Decorative orbs -->
    <div class="orb" style="top:15%;left:4%;width:220px;height:220px;
         background:radial-gradient(circle,rgba(245,158,11,0.1),transparent);"></div>
    <div class="orb" style="bottom:8%;right:4%;width:160px;height:160px;
         background:radial-gradient(circle,rgba(234,88,12,0.1),transparent);"></div>
  </section>

  <!-- ── Stats strip ── -->
  <section style="padding:0 20px 60px;">
    <div style="max-width:1000px;margin:0 auto;
                display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;">
      ${stats.map(s => /* html */`
        <div style="text-align:center;padding:24px;border-radius:16px;
                    border:1px solid rgba(245,158,11,0.15);" class="${glassClass()}">
          <div style="font-size:32px;margin-bottom:8px;">${s.icon}</div>
          <div style="font-size:22px;font-weight:900;" class="text-gradient-gold">${s.val}</div>
          <div style="font-size:13px;opacity:.55;margin-top:4px;">${s.label}</div>
        </div>
      `).join('')}
    </div>
  </section>

  <!-- ── Best sellers ── -->
  <section style="padding:0 20px 60px;">
    <div style="max-width:1200px;margin:0 auto;">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:28px;">
        <span style="font-size:26px;">🔥</span>
        <h2 class="section-heading text-gradient-gold">BÁN CHẠY NHẤT</h2>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:16px;">
        ${featured.map(renderBookCard).join('')}
      </div>
    </div>
  </section>

  <!-- ── New arrivals ── -->
  <section style="padding:0 20px 80px;">
    <div style="max-width:1200px;margin:0 auto;">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:28px;">
        <span style="font-size:26px;">✨</span>
        <h2 class="section-heading text-gradient-green">MỚI RA MẮT</h2>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:16px;">
        ${newest.map(renderBookCard).join('')}
      </div>
    </div>
  </section>`;
}


/* ── 9. PAGE: SHOP ────────────────────────────────────────── */

function renderShop() {
  const books = filteredBooks();

  return /* html */`
  <div style="max-width:1280px;margin:0 auto;padding:24px 20px;
              display:flex;gap:24px;align-items:flex-start;">

    ${renderSidebar()}

    <!-- Main content column -->
    <div style="flex:1;min-width:0;">

      <!-- Toolbar -->
      <div style="display:flex;align-items:center;justify-content:space-between;
                  margin-bottom:20px;flex-wrap:wrap;gap:12px;">

        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
          <span style="font-weight:800;font-size:17px;">${books.length} kết quả</span>
          ${state.search
            ? `<span style="opacity:.55;font-size:14px;">cho "<em>${state.search}</em>"</span>`
            : ''}
        </div>

        <div style="display:flex;align-items:center;gap:8px;">
          <!-- Filter button (mobile only) -->
          <button id="filter-btn" class="btn-icon"
                  onclick="setState({ sidebarOpen:true })"
                  style="display:none;padding:8px 14px;border-radius:10px;
                         font-size:13px;font-weight:700;gap:6px;color:#fbbf24;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
            </svg>
            Lọc
          </button>

          <!-- Sort select -->
          <select onchange="setState({ sortBy:this.value })"
                  style="padding:9px 14px;border-radius:10px;
                         border:1px solid rgba(245,158,11,0.3);
                         background:${state.dark ? '#1e1e2e' : '#fff'};
                         color:${textColor()};font-weight:700;cursor:pointer;
                         font-size:13px;font-family:Nunito;outline:none;">
            <option value="popular"   ${state.sortBy==='popular'  ?'selected':''}>🔥 Phổ biến nhất</option>
            <option value="priceAsc"  ${state.sortBy==='priceAsc' ?'selected':''}>💰 Giá tăng dần</option>
            <option value="priceDesc" ${state.sortBy==='priceDesc'?'selected':''}>💎 Giá giảm dần</option>
            <option value="rating"    ${state.sortBy==='rating'   ?'selected':''}>⭐ Đánh giá cao</option>
          </select>
        </div>
      </div>

      <!-- Book grid -->
      ${books.length === 0
        ? /* html */`
          <div style="text-align:center;padding:80px 20px;opacity:.5;">
            <div style="font-size:64px;margin-bottom:16px;">🐉</div>
            <div style="font-size:18px;font-weight:700;">Không tìm thấy truyện nào</div>
            <div style="font-size:14px;margin-top:8px;opacity:.7;">
              Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm
            </div>
          </div>`
        : /* html */`
          <div style="display:grid;
                      grid-template-columns:repeat(auto-fill,minmax(175px,1fr));gap:16px;">
            ${books.map(renderBookCard).join('')}
          </div>`}
    </div>
  </div>`;
}


/* ── 10. PAGE: DETAIL ─────────────────────────────────────── */

function renderDetail() {
  const book = BOOKS.find(b => b.id === state.selectedBook);
  if (!book) return '';

  const related  = BOOKS.filter(b => b.title === book.title && b.id !== book.id).slice(0, 4);
  const discount = book.oldPrice
    ? Math.round((1 - book.price / book.oldPrice) * 100)
    : null;

  const infoItems = [
    { label: 'Nhà xuất bản', value: book.publisher },
    { label: 'Số trang',     value: book.pages + ' trang' },
    { label: 'Ngôn ngữ',     value: 'Tiếng Việt' },
    { label: 'Thể loại',     value: 'Manga / Shounen' },
  ];

  const tags = ['Dragon Ball', 'Manga', 'Akira Toriyama', 'NXB Lê Huy', book.arc];

  return /* html */`
  <div style="max-width:1100px;margin:0 auto;padding:24px 20px;">

    <!-- Back button -->
    <button onclick="setState({ page:'shop', selectedBook:null })"
            style="display:inline-flex;align-items:center;gap:6px;
                   background:none;border:none;color:#f59e0b;font-weight:700;
                   cursor:pointer;font-size:14px;margin-bottom:28px;
                   font-family:Nunito;">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2.5">
        <path d="m15 18-6-6 6-6"/>
      </svg>
      Quay lại cửa hàng
    </button>

    <!-- Two-column layout -->
    <div class="detail-grid">

      <!-- Left: book image + CTA -->
      <div class="detail-image" style="width:260px;">
        <div style="position:relative;border-radius:16px;overflow:hidden;
                    box-shadow:0 24px 64px rgba(0,0,0,0.5);"
             class="${book.isBestSeller ? 'glow-gold' : ''}">
          <img src="${book.img}" alt="${book.title} Tập ${book.vol}"
               style="width:100%;display:block;aspect-ratio:2/3;object-fit:cover;"
               onerror="this.src='https://via.placeholder.com/260x390/1e1e2e/f59e0b?text=Dragon+Ball'" />
          ${book.isBestSeller ? `<div class="ribbon">🔥 BÁN CHẠY</div>` : ''}
          ${book.isNew
            ? `<div style="position:absolute;top:12px;right:12px;
                           background:linear-gradient(135deg,#10b981,#059669);
                           color:#fff;font-size:11px;font-weight:800;
                           padding:4px 10px;border-radius:20px;">MỚI</div>`
            : ''}
        </div>

        <!-- CTA buttons -->
        <div style="margin-top:16px;display:flex;flex-direction:column;gap:8px;">
          <button class="btn-primary"
                  onclick="addToCart(${book.id})"
                  style="padding:13px;border-radius:12px;font-size:15px;">
            🛒 Thêm vào giỏ hàng
          </button>
          <button onclick="addToCart(${book.id}); setState({ page:'cart' })"
                  class="btn-ghost"
                  style="padding:13px;border-radius:12px;font-size:15px;
                         color:#fbbf24;border-color:rgba(245,158,11,0.3);">
            ⚡ Mua ngay
          </button>
        </div>
      </div>

      <!-- Right: book info -->
      <div>
        <div style="font-size:11px;font-weight:700;color:#f59e0b;
                    text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">
          ${book.arc}
        </div>
        <h1 style="font-family:'Bangers',cursive;font-size:40px;
                   letter-spacing:2px;line-height:1;margin-bottom:6px;">
          ${book.title}
        </h1>
        <h2 style="font-size:20px;opacity:.55;font-weight:600;margin-bottom:20px;">
          Tập ${book.vol}
        </h2>

        <!-- Rating row -->
        <div style="display:flex;align-items:center;gap:14px;
                    margin-bottom:22px;flex-wrap:wrap;">
          <div style="display:flex;align-items:center;gap:6px;">
            <span>${renderStars(book.rating)}</span>
            <span style="font-weight:800;color:#fbbf24;">${book.rating}</span>
            <span style="opacity:.5;font-size:13px;">
              (${book.sold.toLocaleString()} đã bán)
            </span>
          </div>
        </div>

        <!-- Price block -->
        <div style="margin-bottom:24px;">
          <div style="display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;">
            <span style="font-size:36px;font-weight:900;" class="text-gradient-gold">
              ${fmt(book.price)}
            </span>
            ${book.oldPrice ? `
              <span style="font-size:18px;text-decoration:line-through;opacity:.38;">
                ${fmt(book.oldPrice)}
              </span>
              <span class="tag tag-red">-${discount}%</span>` : ''}
          </div>
          ${book.oldPrice
            ? `<div style="font-size:13px;color:#34d399;margin-top:6px;">
                 💚 Tiết kiệm ${fmt(book.oldPrice - book.price)}
               </div>`
            : ''}
        </div>

        <!-- Info grid -->
        <div style="display:grid;grid-template-columns:1fr 1fr;
                    gap:10px;margin-bottom:24px;">
          ${infoItems.map(r => /* html */`
            <div class="info-card ${glassClass()}">
              <div style="font-size:10px;opacity:.45;font-weight:700;
                          text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px;">
                ${r.label}
              </div>
              <div style="font-weight:700;font-size:14px;">${r.value}</div>
            </div>`).join('')}
        </div>

        <!-- Description -->
        <div style="margin-bottom:24px;">
          <div style="font-weight:800;margin-bottom:10px;font-size:16px;">📖 Giới thiệu</div>
          <p style="line-height:1.85;opacity:.75;font-size:15px;">${book.desc}</p>
        </div>

        <!-- Tags -->
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          ${tags.map(t => `
            <span class="tag tag-amber">#${t.replace(/\s/g,'')}</span>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- Related books -->
    ${related.length > 0 ? /* html */`
    <div style="margin-top:64px;">
      <h3 class="section-heading text-gradient-gold" style="margin-bottom:20px;">
        CÙNG BỘ TRUYỆN
      </h3>
      <div style="display:grid;
                  grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:16px;">
        ${related.map(renderBookCard).join('')}
      </div>
    </div>` : ''}

  </div>`;
}


/* ── 11. PAGE: CART ───────────────────────────────────────── */

function renderCart() {
  const items = state.cart;
  const total = cartTotal();

  if (items.length === 0) {
    return /* html */`
    <div style="max-width:560px;margin:80px auto;text-align:center;padding:20px;">
      <div style="font-size:80px;margin-bottom:24px;" class="anim-float">🛒</div>
      <h2 style="font-family:'Bangers',cursive;font-size:34px;
                 letter-spacing:2px;margin-bottom:12px;">
        Giỏ hàng trống!
      </h2>
      <p style="opacity:.6;margin-bottom:32px;line-height:1.7;">
        Hãy thêm những bộ truyện Dragon Ball yêu thích vào giỏ hàng nhé!
      </p>
      <button class="btn-primary"
              onclick="setState({ page:'shop' })"
              style="padding:14px 36px;border-radius:50px;font-size:16px;">
        Đi mua sắm ngay
      </button>
    </div>`;
  }

  return /* html */`
  <div style="max-width:1000px;margin:0 auto;padding:24px 20px;">

    <h1 style="font-family:'Bangers',cursive;font-size:36px;letter-spacing:2px;
               margin-bottom:28px;" class="text-gradient-gold">
      GIỎ HÀNG (${cartCount()} sản phẩm)
    </h1>

    <div class="cart-grid">

      <!-- Item list -->
      <div style="display:flex;flex-direction:column;gap:12px;">
        ${items.map(item => /* html */`
          <div style="display:flex;gap:16px;padding:16px;border-radius:16px;
                      border:1px solid rgba(245,158,11,0.15);align-items:center;"
               class="${glassClass()}">

            <img src="${item.img}" alt="${item.title}"
                 style="width:64px;height:90px;object-fit:cover;
                        border-radius:8px;flex-shrink:0;"
                 onerror="this.src='https://via.placeholder.com/64x90/1e1e2e/f59e0b?text=DB'" />

            <div style="flex:1;min-width:0;">
              <div style="font-weight:800;font-size:15px;margin-bottom:2px;">
                ${item.title} – Tập ${item.vol}
              </div>
              <div style="font-size:12px;opacity:.5;margin-bottom:8px;">
                ${item.publisher || 'NXB Lê Huy'}
              </div>
              <div style="font-weight:900;color:#f59e0b;">${fmt(item.price)}</div>
            </div>

            <!-- Qty controls -->
            <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">
              <button class="qty-btn" onclick="updateQty(${item.id}, -1)">−</button>
              <span style="font-weight:800;font-size:16px;
                           min-width:24px;text-align:center;">
                ${item.qty}
              </span>
              <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
            </div>

            <!-- Line total -->
            <div style="min-width:90px;text-align:right;flex-shrink:0;">
              <div style="font-weight:900;font-size:16px;" class="text-gradient-gold">
                ${fmt(item.price * item.qty)}
              </div>
            </div>

            <!-- Delete -->
            <button class="btn-delete" onclick="removeFromCart(${item.id})">
              <svg width="14" height="14" viewBox="0 0 24 24"
                   fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="3 6 5 6 21 6"/>
                <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2"/>
              </svg>
            </button>
          </div>
        `).join('')}
      </div>

      <!-- Order summary -->
      <div class="summary-box ${glassClass()}">
        <h3 style="font-weight:800;font-size:16px;margin-bottom:18px;">
          Tóm tắt đơn hàng
        </h3>

        <div style="display:flex;justify-content:space-between;
                    margin-bottom:10px;font-size:14px;">
          <span style="opacity:.65;">Tạm tính (${cartCount()} sản phẩm)</span>
          <span style="font-weight:700;">${fmt(total)}</span>
        </div>
        <div style="display:flex;justify-content:space-between;
                    margin-bottom:10px;font-size:14px;">
          <span style="opacity:.65;">Phí vận chuyển</span>
          <span style="color:#34d399;font-weight:700;">Miễn phí</span>
        </div>

        <hr class="divider" />

        <div style="display:flex;justify-content:space-between;
                    align-items:center;margin-bottom:20px;">
          <span style="font-weight:800;">Tổng cộng</span>
          <span style="font-size:22px;font-weight:900;" class="text-gradient-gold">
            ${fmt(total)}
          </span>
        </div>

        <button class="btn-primary"
                onclick="showToast('✅ Đặt hàng thành công! Cảm ơn bạn đã mua hàng 🐉')"
                style="width:100%;padding:14px;border-radius:12px;font-size:15px;
                       margin-bottom:8px;">
          ⚡ Đặt hàng ngay
        </button>
        <button class="btn-ghost"
                onclick="setState({ page:'shop' })"
                style="width:100%;padding:12px;border-radius:12px;font-size:14px;
                       color:${textColor()};">
          Tiếp tục mua sắm
        </button>

        <div class="trust-badge">
          🔒 Thanh toán an toàn SSL<br/>
          🚚 Giao hàng toàn quốc 2–5 ngày<br/>
          ↩️ Đổi trả trong vòng 30 ngày
        </div>
      </div>

    </div>
  </div>`;
}


/* ── 12. COMPONENT: TOAST ─────────────────────────────────── */

function renderToast() {
  if (!state.toast) return '';
  return /* html */`
  <div class="toast">
    <div class="toast-inner">${state.toast}</div>
  </div>`;
}


/* ── 13. ROOT RENDER ──────────────────────────────────────── */

function render() {
  let pageContent = '';
  if (state.page === 'home')   pageContent = renderHome();
  if (state.page === 'shop')   pageContent = renderShop();
  if (state.page === 'detail') pageContent = renderDetail();
  if (state.page === 'cart')   pageContent = renderCart();

  document.getElementById('app').innerHTML = /* html */`
  <div style="min-height:100vh;">

    ${renderNav()}

    <main style="min-height:calc(100vh - 64px);">
      ${pageContent}
    </main>

    <footer style="border-top:1px solid rgba(245,158,11,0.12);
                   padding:40px 20px;text-align:center;
                   opacity:.45;font-size:13px;">
      <div style="display:flex;justify-content:center;gap:6px;margin-bottom:8px;">
        ${Array.from({ length: 7 }, (_, i) =>
          `<div class="dragonball" style="width:14px;height:14px;"></div>`
        ).join('')}
      </div>
      © 2025 Dragon Ball Store · HuySenSei · NXB Lê Huy
    </footer>

  </div>
  ${renderToast()}`;

  applyResponsive();
}

/* Apply responsive visibility after each render */
function applyResponsive() {
  const w           = window.innerWidth;
  const navShop     = document.getElementById('nav-shop');
  const sidebarBtn  = document.getElementById('sidebar-btn');
  const filterBtn   = document.getElementById('filter-btn');
  const sidebarDesk = document.getElementById('sidebar-desktop');

  if (navShop)    navShop.style.display    = w >= 640  ? 'block' : 'none';
  if (sidebarBtn) sidebarBtn.style.display = w < 1024  ? 'flex'  : 'none';
  if (sidebarDesk) sidebarDesk.style.display = w >= 1024 ? 'block' : 'none';
  if (filterBtn)  filterBtn.style.display  = w < 1024  ? 'flex'  : 'none';
}


/* ── 14. EVENTS & INIT ────────────────────────────────────── */

window.addEventListener('resize', applyResponsive);

/* Initial render */
render();
