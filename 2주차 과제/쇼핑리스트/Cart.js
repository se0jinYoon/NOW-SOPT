import { priceFormatter } from './js/utils/priceFormatter.js';

// session storage 값 가져오기
let cartList = sessionStorage.getItem('cartList') ? JSON.parse(sessionStorage.getItem('cartList')) : [];
let buyList = [];
console.log(cartList);

// 장바구니 table html
const createCartTableItem = (cartItem) => {
  return `
    <tr id=${cartItem.id} class="cart-list__tr">
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

// 장바구니에서 삭제하기 함수
const removeItem = (event) => {
  const removeItemId = event.target.closest('.cart-list__tr').id;

  const filteredCartList = cartList.filter((cartItem) => cartItem.id.toString() !== removeItemId);
  sessionStorage.setItem('cartList', JSON.stringify(filteredCartList));
  cartList = filteredCartList;

  displayTableList(filteredCartList);
};

// 체크박스 전체 선택
const selectAllCartItem = (event) => {
  const selectAll = event.target;
  const checkBoxes = document.querySelectorAll('input[type="checkbox"]');

  let buyList = [];

  checkBoxes.forEach((checkBox) => {
    checkBox.checked = selectAll.checked;
  });

  selectAll.checked ? (buyList = cartList) : (buyList = []);
};

// 체크 된 아이템 구매 리스트에 추가하기 함수
const purchaseList = (event) => {
  const itemCheckBox = event.target;
  itemCheckBox.checked
    ? buyList.push(cartList.find((cartItem) => cartItem.id.toString() === itemCheckBox.closest('.cart-list__tr').id))
    : (buyList = buyList.filter((buyItem) => buyItem.id.toString() !== itemCheckBox.closest('.cart-list__tr').id));
};

// 장바구니 테이블 리스트 동적 생성
const displayTableList = (items) => {
  const cartTableContent = document.querySelector('.cart-list__body');
  cartTableContent.innerHTML = items.map((item) => createCartTableItem(item)).join('');

  // 삭제하기 연결
  const cartListRemoveBtns = document.querySelectorAll('.cart-list__remove-btn');
  cartListRemoveBtns.forEach((removeBtn) => removeBtn.addEventListener('click', removeItem));

  // 구매 체크리스트 연결
  const itemCheckBoxList = document.querySelectorAll('.cart-check');
  itemCheckBoxList.forEach((itemCheckBox) => itemCheckBox.addEventListener('change', purchaseList));

  // 전체 체크하기 연결
  const selectAll = document.querySelector('.checkbox_all');
  selectAll.addEventListener('change', selectAllCartItem);
};

// 최초 렌더링
document.addEventListener('DOMContentLoaded', () => {
  displayTableList(cartList);
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

// 홈으로 이동 버튼 연결
const homeBtn = document.querySelector('.home__btn');
homeBtn.addEventListener('click', () => {
  window.location.href = 'index.html';
});
