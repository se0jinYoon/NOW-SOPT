const mango = document.createElement('li');
mango.textContent = '망고';

const fruitList = document.querySelector('.fruit__list');

fruitList.appendChild(mango);

const bananaNode = fruitList.children[2];
bananaNode.classList.add('blue');

document.querySelectorAll('.red').forEach((item) => item.remove());

const fruitBtn = document.querySelector('.count');

fruitBtn.addEventListener('click', () => alert(`${fruitList.children.length}개`));
