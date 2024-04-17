class ItemList {
  template() {
    return `<header class="header">
    <i class="fa-solid fa-globe fa-2xl"></i>
    <h1 class="header__title">✨ 서진이의 위시리스트 ✨</h1>
    <i class="fa-solid fa-bars fa-2xl hamburger_icon"></i>
  </header>

  <nav class="nav-section">
    <h2 class="nav-section__title">판매목록</h2>
    <ul class="nav-section__items">
      <li class="nav-section__category">
        <button class="nav-section__button" id="all">ALL</button>
      </li>
      <li class="nav-section__category">
        <button class="nav-section__button" id="clothes">CLOTHES</button>
      </li>
      <li class="nav-section__category">
        <button class="nav-section__button" id="phonecase">PHONECASE</button>
      </li>
      <li class="nav-section__category">
        <button class="nav-section__button" id="accessory">ACCESSORY</button>
      </li>
    </ul>
  </nav>

  <main class="main">
    <!-- 배너 영역 -->
    <section class="banner-section">
      <ul class="banner-section__container list1"></ul>
      <ul class="banner-section__container list2"></ul>
    </section>

    <!-- 아이템 섹션 -->
    <section id="all-section">
      <header class="item-section__header">
        <h2 class="item-section__title">🫧 ALL 🫧</h2>
      </header>
      <ul class="item-section__container"></ul>
    </section>
  </main>

  <nav class="modal-section hide-modal">
    <i class="fa-solid fa-xmark fa-xl modal_close_icon"></i>
    <ul class="modal-list">
      <li>💗 관심 상품 목록</li>
      <li>👩🏻‍💻 관리자 페이지</li>
      <li>🛒 장바구니</li>
    </ul>
  </nav>
  
  <footer class="footer">
    <p>✨ seojin's wish list ✨</p>
    <p class="footer__more">
      <span>💗 More Inspiration : </span>
      <a href="https://www.instagram.com/tjwls99/">@tjwls99</a>
    </p>
  </footer>`;
  }
}

export default new ItemList();

// <!DOCTYPE html>
// <html lang="ko">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <link rel="stylesheet" href="style.css" />
//     <link rel="stylesheet" href="reset.css" />
//     <script type="module" src="main.js"></script>
//     <title>서진이의 쇼핑몰</title>
//     <script src="https://kit.fontawesome.com/455c79571e.js" crossorigin="anonymous"></script>
//   </head>
//   <body>
//     <header class="header">
//       <i class="fa-solid fa-globe fa-2xl"></i>
//       <h1 class="header__title">✨ 서진이의 위시리스트 ✨</h1>
//       <i class="fa-solid fa-bars fa-2xl"></i>
//     </header>

//     <nav class="nav-section">
//       <h2 class="nav-section__title">판매목록</h2>
//       <ul class="nav-section__items">
//         <li class="nav-section__category">
//           <button class="nav-section__button" id="all">ALL</button>
//         </li>
//         <li class="nav-section__category">
//           <button class="nav-section__button" id="clothes">CLOTHES</button>
//         </li>
//         <li class="nav-section__category">
//           <button class="nav-section__button" id="phonecase">PHONECASE</button>
//         </li>
//         <li class="nav-section__category">
//           <button class="nav-section__button" id="accessory">ACCESSORY</button>
//         </li>
//       </ul>
//     </nav>

//     <main class="main">
//       <!-- 배너 영역 -->
//       <section class="banner-section">
//         <ul class="banner-section__container list1"></ul>
//         <ul class="banner-section__container list2"></ul>
//       </section>

//       <!-- 아이템 섹션 -->
//       <section id="all-section">
//         <header class="item-section__header">
//           <h2 class="item-section__title">🫧 ALL 🫧</h2>
//         </header>
//         <ul class="item-section__container"></ul>
//       </section>
//     </main>

//     <footer class="footer">
//       <p>✨ seojin's wish list ✨</p>
//       <p class="footer__more">
//         <span>💗 More Inspiration : </span>
//         <a href="https://www.instagram.com/tjwls99/">@tjwls99</a>
//       </p>
//     </footer>
//   </body>
// </html>
