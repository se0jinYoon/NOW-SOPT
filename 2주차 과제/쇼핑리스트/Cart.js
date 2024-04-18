const cartList = sessionStorage.getItem('cartList') ? JSON.parse(sessionStorage.getItem('cartList')) : [];

console.log(cartList);
