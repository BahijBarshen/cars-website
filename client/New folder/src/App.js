import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Search, ShoppingCart, Globe, User, LogOut, Settings, Package } from 'lucide-react';


const translations = {
  ar: {
    dir: 'rtl',
    langName: 'العربية',
    search: 'بحث في Amazon',
    all: 'الكل',
    hello: 'مرحباً،',
    account: 'الحساب والقوائم',
    cart: 'العربة',
    profile: 'ملفي الشخصي',
    orders: 'طلباتي',
    settings: 'الإعدادات',
    logout: 'تسجيل الخروج',
    login: 'تسجيل الدخول',
    heroTitle: 'عروض رأس السنة وصلت الآن',
    heroSub: 'اجعل 2026 عامك',
    shopNow: 'تسوق الآن',
    categories: ["ألعاب الفيديو", "الكمبيوتر", "المنزل", "الموضة"],
    catTitle: "تسوق حسب الفئة"
  },
  en: {
    dir: 'ltr',
    langName: 'English',
    search: 'Search Amazon',
    all: 'All',
    hello: 'Hello,',
    account: 'Account & Lists',
    cart: 'Cart',
    profile: 'My Profile',
    orders: 'My Orders',
    settings: 'Settings',
    logout: 'Sign Out',
    login: 'Sign In',
    heroTitle: 'New Year Deals are Here',
    heroSub: 'Make 2026 Your Year',
    shopNow: 'Shop now',
    categories: ["Video Games", "Computers", "Home", "Fashion"],
    catTitle: "Shop by Category",

  },
  de: {
    dir: 'ltr',
    langName: 'Deutsch',
    search: 'Suche Amazon',
    all: 'Alle',
    hello: 'Hallo,',
    account: 'Konto und Listen',
    cart: 'Warenwagen',
    profile: 'Mein Profil',
    orders: 'Meine Bestellungen',
    settings: 'Einstellungen',
    logout: 'Abmelden',
    login: 'Anmelden',
    heroTitle: 'Neujahrsangebote sind da',
    heroSub: 'Machen Sie 2026 zu Ihrem Jahr',
    shopNow: 'Jetzt einkaufen',
    categories: ["Videospiele", "Computer", "Heim", "Mode"],
    catTitle: "Kategorie shoppen"
  }
};

function App() {
  const [currentLang, setCurrentLang] = useState('ar');
  const [isLoggedIn, setIsLoggedIn] = useState(true); // حالة تسجيل الدخول (تجريبية)
  const [userName] = useState('أحمد'); // اسم المستخدم الافتراضي

  const t = translations[currentLang];

  return (
    <div dir={t.dir} className="bg-light min-vh-100">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2 px-3 shadow-sm">
        <div className="container-fluid gap-2">

          {/* 1. Logo */}
          <a className="navbar-brand border border-transparent p-1 px-2 hover-border" href="#">
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" style={{ width: '90px' }} />
          </a>

          {/* 2. Language & Logic */}
          <div className="dropdown border border-transparent hover-border p-1 px-2">
            <button className="btn btn-link text-white text-decoration-none dropdown-toggle d-flex align-items-center gap-1 p-0" data-bs-toggle="dropdown">
              <Globe size={18} />
              <span className="small fw-bold">{t.langName}</span>
            </button>
            <ul className="dropdown-menu shadow">
              <li><button className="dropdown-item" onClick={() => setCurrentLang('ar')}>العربية (AR)</button></li>
              <li><button className="dropdown-item" onClick={() => setCurrentLang('en')}>English (EN)</button></li>
              <li><button className="dropdown-item" onClick={() => setCurrentLang('de')}>Deutsch (DE)</button></li>
            </ul>
          </div>

          {/* 3. Search Bar */}
          <div className="input-group flex-grow-1 mx-2 d-none d-md-flex">
            <button className="btn btn-light dropdown-toggle text-muted small border-end" type="button">{t.all}</button>
            <input type="text" className="form-control" placeholder={t.search} />
            <button className="btn" style={{ backgroundColor: '#febd69' }}><Search size={20} /></button>
          </div>

          {/* 4. User Section (The Enhanced Part) */}
          <div className="d-flex align-items-center gap-3">

            {isLoggedIn ? (
              /* واجهة المستخدم عند تسجيل الدخول */
              <div className="dropdown border border-transparent hover-border p-1 px-2">
                <button className="btn btn-link text-white text-decoration-none dropdown-toggle d-flex align-items-center gap-2 p-0 shadow-none" data-bs-toggle="dropdown">
                  <div className="d-flex flex-column text-start align-items-start">
                    <span style={{ fontSize: '11px', opacity: 0.8 }}>{t.hello} {userName}</span>
                    <span className="fw-bold small">{t.account}</span>
                  </div>
                  {/* صورة شخصية مصغرة */}
                  <img
                    src="https://ui-avatars.com/api/?name=Ahmed&background=febd69&color=131921"
                    alt="user"
                    className="rounded-circle border border-2 border-warning"
                    style={{ width: '32px', height: '32px' }}
                  />
                </button>
                <ul className="dropdown-menu dropdown-menu-end shadow p-2" style={{ minWidth: '200px' }}>
                  <li><a className="dropdown-item d-flex align-items-center gap-2 py-2" href="#"><User size={16} /> {t.profile}</a></li>
                  <li><a className="dropdown-item d-flex align-items-center gap-2 py-2" href="#"><Package size={16} /> {t.orders}</a></li>
                  <li><a className="dropdown-item d-flex align-items-center gap-2 py-2" href="#"><Settings size={16} /> {t.settings}</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <button
                      className="dropdown-item text-danger d-flex align-items-center gap-2 py-2"
                      onClick={() => setIsLoggedIn(false)}
                    >
                      <LogOut size={16} /> {t.logout}
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              /* واجهة المستخدم عند عدم تسجيل الدخول */
              <button className="btn btn-outline-warning btn-sm fw-bold px-3" onClick={() => setIsLoggedIn(true)}>
                {t.login}
              </button>
            )}

            {/* 5. Cart */}
            <div className="text-white border border-transparent hover-border p-1 px-2 cursor-pointer d-flex align-items-end gap-1">
              <div className="position-relative">
                <ShoppingCart size={28} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark border border-dark">0</span>
              </div>
              <span className="fw-bold d-none d-sm-inline">{t.cart}</span>
            </div>
          </div>

        </div>
      </nav>

      {/* Hero Example */}
      <div className="position-relative overflow-hidden" style={{ backgroundColor: '#b3f044', height: '450px' }}>
        <div className="container h-100 d-flex align-items-center justify-content-between">
          <div className="z-index-2">
            <p className="h4 fw-bold">{t.heroSub}</p>
            <h1 className="display-4 fw-black">{t.heroTitle}</h1>
          </div>
          <img
            src='data:image/jpeg;base64,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oZWQ/wCGqQ9u5kotlwDsx+TUFRVVNXT/AOJpXtA9tnab6i4HqgiOqKWo3tJItn2XfpdS48+SnllBl02LJ5quU8IjaGjYMhfxUdrTM7ylrWKxtD4maQB/e9fHp+y4bDLZ0ouG8TZvmvFqRbunw6nJh39nO27tHi1NFaOJusdgZE3b8/K69RERxCO+S953vO8rWkw3FKm2rE2nZ70ne9LE/wBI5r68Lii6P47h1TNJM4bgdRvrcu9CEGmoMKp4BaKJrPwgXPM7T5oJjW2QfqAgICAgICAgICAgICAgICAgICAgICAgIKTFtE6Gpv1kDdY+0zsO8y21/O6DAU+iToql4E0hia9waxxByBIF8uWyyCwrcMuC0ZZZHgeIQVGjOiAmqg2qe+VlnGxcW7BlmM/SyD1XDcKp6YWhiZHx1WgE8ztPmgmICAgICAgICAgICAgICAgICAgICAgICAgICAgICDOyxdt5+874lBFmj7SDrg0Nqhp8HfBBp0BAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQUkw7TvxH4oIkrc0EjCx9a3+L/aUF8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICCml7x5n4oIsozQd8N+1b5/AoLxAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEFNJtPM/FBGl2oO2H/aN8/gUF4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICCmk2nmUEeXag60H2jeZ+BQXiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIKZ+080EeXag60P2jeaC8QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBBTO2oI8u1B0ovtG80F6gICAgICAgICAgICAgICAgICAgICAgICAgICAgICClKDhLtQdKPvt/EEF6gICAgICAgICAgICAgICAgICAgICAgICAgICAgICCmQR5dqD7pe+38Q+KC+QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBBTII8u1B903fb+IfFBfICAgICAgICAgICAgICAg/9k='
            className="d-none d-md-block"
            style={{ width: '400px', mixBlendMode: 'multiply' }}
            alt="promo"
          />
        </div>
        <div className="position-absolute bottom-0 w-100" style={{ height: '150px', background: 'linear-gradient(transparent, #f0f2f2)' }}></div>
      </div>

      {/* Cards Grid */}
      <div className="container" style={{ marginTop: '-150px' }}>
        <div className="row g-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm p-3 rounded-0">
                <h5 className="card-title fw-bold">{t.catTitle}</h5>
                <div className="row g-2 mt-2 flex-grow-1">
                  {t.categories.map((cat, idx) => (
                    <div key={idx} className="col-6">
                      <div className="bg-light w-100 mb-1" style={{ height: '100px' }}>
                      <img src="data:image/jpeg;base64,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"
                      //   alt={cat} 
                      className="img-fluid mb-1" /></div>
                      <p className="small mb-0">{cat}</p>
                    </div>
                  ))}
                </div>
                <a href="#" className="mt-3 text-decoration-none small text-info">{t.shopNow}</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hover-border { border: 1px solid transparent !important; transition: 0.2s; cursor: pointer; }
        .hover-border:hover { border: 1px solid white !important; }
        .dropdown-toggle::after { vertical-align: middle; }
        .dropdown-item:active { background-color: #febd69; color: black; }
        [dir="rtl"] .text-start { text-align: right !important; }
        [dir="rtl"] .dropdown-menu { text-align: right; }
      `}</style>
    </div>
  );
}

export default App;
// import React, { useState } from 'react';
// // استيراد ملفات Bootstrap الضرورية
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // ضروري لعمل القائمة المنسدلة
// // استيراد أيقونات Lucide
// import { Search, ShoppingCart, Globe, Link } from 'lucide-react';

// const translations = {
//   ar: {
//     dir: 'rtl',
//     search: 'بحث في Amazon',
//     all: 'الكل',
//     hello: 'مرحباً، تسجيل الدخول',
//     account: 'الحساب والقوائم',
//     orders: 'الطلبات والمشتريات',
//     cart: 'العربة',
//     heroTitle: 'عروض رأس السنة وصلت الآن',
//     heroSub: 'اجعل 2026 عامك',
//     shopNow: 'تسوق الآن',
//     categories: ["ألعاب الفيديو", "الكمبيوتر", "المنزل", "الموضة"],
//     catTitle: "تسوق حسب الفئة"
//   },
//   en: {
//     dir: 'ltr',
//     search: 'Search Amazon',
//     all: 'All',
//     hello: 'Hello, Sign in',
//     account: 'Account & Lists',
//     orders: 'Returns & Orders',
//     cart: 'Cart',
//     heroTitle: 'New Year Deals are Here',
//     heroSub: 'Make 2026 Your Year',
//     shopNow: 'Shop now',
//     categories: ["Video Games", "Computers", "Home", "Fashion"],
//     catTitle: "Shop by Category"
//   },
//   de: {
//     dir: 'ltr',
//     search: 'Suche Amazon',
//     all: 'Alle',
//     hello: 'Hallo, Anmelden',
//     account: 'Konto und Listen',
//     orders: 'Warenrücksendungen',
//     cart: 'Einkaufswagen',
//     heroTitle: 'Neujahrsangebote sind da',
//     heroSub: 'Machen Sie 2026 zu Ihrem Jahr',
//     shopNow: 'Jetzt einkaufen',
//     categories: ["Videospiele", "Computer", "Heim", "Mode"],
//     catTitle: "Kategorie shoppen"
//   }
// };

// function App() {
//   const [lang, setLang] = useState('ar');
//   const t = translations[lang];

//   return (
//     <div dir={t.dir} className={lang === 'ar' ? 'font-arabic' : ''}>
//       {/* Navbar العلوي */}
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-1 px-3">
//         <div className="container-fluid gap-3">
//           {/* Logo */}
//           <Link className="navbar-brand border border-transparent p-2 hover-outline" href="#">
//             <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" style={{ width: '100px' }} />
//           </Link>

//           {/* Language Switcher */}
//           <div className="dropdown">
//             <button className="btn btn-outline-light btn-sm dropdown-toggle d-flex align-items-center gap-1" type="button" data-bs-toggle="dropdown">
//               <Globe size={16} /> {lang.toUpperCase()}
//             </button>
//             <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//               <li><button className="dropdown-item" onClick={() => setLang('ar')}>العربية (AR)</button></li>
//               <li><button className="dropdown-item" onClick={() => setLang('en')}>English (EN)</button></li>
//               <li><button className="dropdown-item" onClick={() => setLang('de')}>Deutsch (DE)</button></li>
//             </ul>
//           </div>

//           {/* Search Bar */}
//           <div className="input-group flex-grow-1 mx-2">
//             <button className="btn btn-secondary dropdown-toggle bg-light text-dark border-0" type="button">{t.all}</button>
//             <input type="text" className="form-control" placeholder={t.search} />
//             <button className="btn" style={{ backgroundColor: '#febd69' }}><Search size={20} /></button>
//           </div>

//           {/* Right Links */}
//           <div className="text-white d-none d-lg-flex gap-3 small">
//             <div className="cursor-pointer">
//               <div>{t.hello}</div>
//               <div className="fw-bold">{t.account}</div>
//             </div>
//             <div className="cursor-pointer d-flex align-items-end gap-1">
//               <div className="position-relative">
//                 <ShoppingCart size={30} />
//                 <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-warning text-dark">0</span>
//               </div>
//               <span className="fw-bold">{t.cart}</span>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <div className="position-relative overflow-hidden" style={{ backgroundColor: '#b3f044', height: '450px' }}>
//         <div className="container h-100 d-flex align-items-center justify-content-between">
//           <div className="z-index-2">
//             <p className="h4 fw-bold">{t.heroSub}</p>
//             <h1 className="display-4 fw-black">{t.heroTitle}</h1>
//           </div>
//           <img
//             className="d-none d-md-block"
//             style={{ width: '400px', mixBlendMode: 'multiply' }}
//             alt="promo"
//           />
//         </div>
//         <div className="position-absolute bottom-0 w-100" style={{ height: '150px', background: 'linear-gradient(transparent, #f0f2f2)' }}></div>
//       </div>

//       {/* Cards Grid */}
//       <div className="container" style={{ marginTop: '-150px' }}>
//         <div className="row g-4">
//           {[1, 2, 3, 4].map((i) => (
//             <div key={i} className="col-md-6 col-lg-3">
//               <div className="card h-100 border-0 shadow-sm p-3 rounded-0">
//                 <h5 className="card-title fw-bold">{t.catTitle}</h5>
//                 <div className="row g-2 mt-2 flex-grow-1">
//                   {t.categories.map((cat, idx) => (
//                     <div key={idx} className="col-6">
//                       <div className="bg-light w-100 mb-1" style={{ height: '100px' }}></div>
//                       <p className="small mb-0">{cat}</p>
//                     </div>
//                   ))}
//                 </div>
//                 <Link href="#" className="mt-3 text-decoration-none small text-info">{t.shopNow}</Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style>{`
//         .hover-outline:hover { border: 1px solid white !important; }
//         .fw-black { font-weight: 900; }
//         .cursor-pointer { cursor: pointer; }
//       `}</style>
//     </div>
//   );
// }

// export default App;