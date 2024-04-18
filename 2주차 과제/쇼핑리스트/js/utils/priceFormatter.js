export function priceFormatter(className) {
  const priceList = document.querySelectorAll(className);
  priceList.forEach((price) => {
    let formattedPrice = price.innerHTML.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
    price.innerHTML = formattedPrice;
  });
}
