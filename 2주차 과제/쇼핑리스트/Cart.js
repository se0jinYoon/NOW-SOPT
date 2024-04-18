// session storage 값 가져오기
const cartList = sessionStorage.getItem('cartList') ? JSON.parse(sessionStorage.getItem('cartList')) : [];

console.log(cartList);

// 장바구니 table html
const cartTableBody = document.querySelector('.cart-list__body');

const createCartTableItem = (cartItem) => {
  return `
    <tr class="cart-list__tr">
      <td class="cart-list__td">
        <input type="checkbox" class="cart-check" />
      </td>
      <td class="cart-list__td">
        <div class="cart-list__img-wrapper">
          <img src=${cartItem.imgUrl} alt=${cartItem.imgAlt} />
        </div>
      </td>
      <td class="cart-list__td">${cartItem.name}</td>
      <td class="cart-list__td">${cartItem.price}</td>
      <td class="cart-list__td">${cartItem.category}</td>
      <td class="cart-list__td">
        <button class="cart-list__remove-btn" type="button">삭제</button>
      </td>
    </tr>
  `
}