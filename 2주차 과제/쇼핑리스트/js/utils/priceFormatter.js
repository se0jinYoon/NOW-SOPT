export function priceFormatter() {
  const priceList = document.querySelectorAll('.item-price');
  priceList.forEach((price) => {
    let formattedPrice = price.innerHTML.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
    price.innerHTML = formattedPrice;
  });
}
