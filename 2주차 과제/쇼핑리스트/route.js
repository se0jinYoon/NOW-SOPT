import Cart from './Cart.js';
import ItemList from './ItemList.js';

const $app = document.querySelector('.App');

const routes = {
  '/': ItemList,
  '/cart': Cart,
};

// 앱 처음 구동시
$app.innerHTML = routes['/'].template();

export const changeUrl = (requestedUrl) => {
  // history.pushState를 사용해 url을 변경한다.
  history.pushState(null, null, requestedUrl);

  // routes 배열에서 url에 맞는 컴포넌트를 찾아 main.App에 렌더링 한다.
  $app.innerHTML = routes[requestedUrl].template();
};
