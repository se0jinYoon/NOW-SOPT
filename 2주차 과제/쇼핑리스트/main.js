import { ITEM_LIST } from './js/utils/constants.js';
import { priceFormatter } from './js/utils/priceFormatter.js';
import { changeUrl } from './route.js';

// 베너 색션 ITEM_LIST 값에 따른 li html
const createBannerItem = (item) => {
  return `
    <li><img src=${item.imgUrl} alt=${item.imgAlt} /></li>
  `;
};

// 베너 섹션 li html 동적생성
const displayBannerList = (items) => {
  const bannerSectionWrappers = document.querySelectorAll('.banner-section__container');
  bannerSectionWrappers.forEach(
    (sectionWrapper) => (sectionWrapper.innerHTML = items.map((item) => createBannerItem(item)).join(''))
  );
};

// 초기 렌더링 시 ITEM_LIST 값에 따른 li html
const createItemList = (item) => {
  return `
    <li class="item-container">
      <img src=${item.imgUrl} alt=${item.imgAlt}/>
      <i class="fa-solid fa-heart like-icon"></i>
      <p class="item-name">${item.name}</p>
      <p class="item-price">${item.price}</p>
    </li>
    `;
};

// 아이템 클릭 시 장바구니에 담기
const addCartHandler = () => {
  if (confirm('장바구니에 추가하시겠습니까?')) {
    changeUrl('/cart');
  } else {
  }
};

// 전체 섹션 li html 동적생성
const displayItemList = (items) => {
  const itemSectionWrapper = document.querySelector('.item-section__container');
  itemSectionWrapper.innerHTML = items.map((item) => createItemList(item)).join('');

  // 장바구니 추가하기 연결
  const itemContainers = document.querySelectorAll('.item-container');
  itemContainers.forEach((itemContainer) =>
    itemContainer.addEventListener('click', () => {
      addCartHandler();
    })
  );
};

// 최초 렌더링
document.addEventListener('DOMContentLoaded', () => {
  displayBannerList(ITEM_LIST);
  displayItemList(ITEM_LIST);
  priceFormatter();
});

// nav바 필터링
const navSectionBtns = document.querySelectorAll('.nav-section__button');
const navSectionTitle = document.querySelector('.item-section__title');

const filterItemList = (category) => {
  const filteredItemList = category === 'all' ? ITEM_LIST : ITEM_LIST.filter((item) => item.category === category);
  displayItemList(filteredItemList);

  const sectionTitle = category.toUpperCase();
  navSectionTitle.innerHTML = `🫧 ${sectionTitle} 🫧`;
};

navSectionBtns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    const category = event.target.id;
    filterItemList(category);
  });
});

// 홈 버튼 클릭 연결
const homeIcon = document.querySelector('.home_icon');
homeIcon.addEventListener('click', changeUrl('/'));

// 햄버거 메뉴 열고 닫기
const hamberToggleIcon = document.querySelector('.hamburger_icon');
const modalCloseIcon = document.querySelector('.modal_close_icon');
const modalSection = document.querySelector('.modal-section');
const showModal = () => {
  modalSection.classList.remove('hide-modal');
  modalSection.classList.add('show-modal');
};

const hideModal = () => {
  modalSection.classList.remove('show-modal');
  modalSection.classList.add('hide-modal');
};

hamberToggleIcon.addEventListener('click', showModal);
modalCloseIcon.addEventListener('click', hideModal);

// 햄버거 메뉴 장바구니 클릭 시 이동
const cartMenu = document.querySelector('.cart-btn');
cartMenu.addEventListener('click', changeUrl('/cart'));
