import { ITEM_LIST } from './js/utils/constants.js';
import { priceFormatter } from './js/utils/priceFormatter.js';

// 초기 렌더링 시 각 섹션별 ITEM_LIST 값에 따른 li html
function createItemList(item) {
  return `
    <li class="item-container">
        <img src=${item.imgUrl} alt=${item.imgAlt}/>
        <i class="fa-solid fa-heart like-icon"></i>
        <p class="item-name">${item.name}</p>
        <p class="item-price">${item.price}</p>
    </li>
    `;
}

// 베너 색션 ITEM_LIST 값에 따른 li html
function createBannerItem(item) {
  return `
    <li><img src=${item.imgUrl} alt=${item.imgAlt} /></li>
  `;
}

// 베너 섹션 li html 동적생성
function displayBannerList(items) {
  const bannerSectionWrapper = document.querySelector('.banner-section__container');
  bannerSectionWrapper.innerHTML = items.map((item) => createBannerItem(item)).join('');
}

// 전체 섹션 li html 동적생성
function displayItemList(items) {
  const allSectionWrapper = document.querySelector('.all-section');
  allSectionWrapper.innerHTML = items.map((item) => createItemList(item)).join('');
}

// clothes 섹션 li html 동적 생성
function displayClothesItemList(items) {
  const clothesSectionWrapper = document.querySelector('.clothes-section');
  clothesSectionWrapper.innerHTML = items.map((item) => createItemList(item)).join('');
}

// phonecase 섹션 li html 동적 생성
function displayPhoneCaseItemList(items) {
  const phoneCaseSectionWrapper = document.querySelector('.phone-case-section');
  phoneCaseSectionWrapper.innerHTML = items.map((item) => createItemList(item)).join('');
}

// accessory 섹션 li html 동적 생성
function displayAccItemList(items) {
  const accSectionWrapper = document.querySelector('.accessory-section');
  accSectionWrapper.innerHTML = items.map((item) => createItemList(item)).join('');
}

// 최초 렌더링
document.addEventListener('DOMContentLoaded', () => {
  displayBannerList(ITEM_LIST);
  displayItemList(ITEM_LIST);
  displayClothesItemList(ITEM_LIST.filter((item) => item.category === 'clothes'));
  displayPhoneCaseItemList(ITEM_LIST.filter((item) => item.category === 'phonecase'));
  displayAccItemList(ITEM_LIST.filter((item) => item.category === 'accessory'));
  priceFormatter();
});
