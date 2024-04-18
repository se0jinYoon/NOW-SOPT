import { priceFormatter } from './js/utils/priceFormatter.js';

// session storage 값 가져오기
const CART_LIST = sessionStorage.getItem('cartList') ? JSON.parse(sessionStorage.getItem('cartList')) : [];

console.log(CART_LIST);

// 장바구니 table html
const createCartTableItem = (cartItem) => {
  return `
    <tr class="cart-list__tr">
      <td class="cart-list__td">
        <input type="checkbox" class="cart-check" />
      </td>
      <td class="cart-list__td">
        <img src=${cartItem.imgUrl} alt=${cartItem.imgAlt} />
      </td>
      <td class="cart-list__td">${cartItem.name}</td>
      <td class="cart-list__td cart-list__item-price">${cartItem.price}</td>
      <td class="cart-list__td">${cartItem.category}</td>
      <td class="cart-list__td">
        <button class="cart-list__remove-btn" type="button">삭제</button>
      </td>
    </tr>
  `;
};

// 장바구니 테이블 리스트 동적 생성
const displayTableList = (items) => {
  const cartTableContent = document.querySelector('.cart-list__body');
  cartTableContent.innerHTML = items.map((item) => createCartTableItem(item)).join('');
};

// 최초 렌더링
document.addEventListener('DOMContentLoaded', () => {
  displayTableList(CART_LIST);
  priceFormatter('.cart-list__item-price');
});

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
