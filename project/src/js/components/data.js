import {renderRent} from './rent.js';
import {addRentListeners} from '../main.js';

export const rents = [];
let node = document.querySelector(`#error`).content.querySelector(`.error`).cloneNode(true);
let closeButton = node.querySelector(`.error__button`);

const cardFragment = document.createDocumentFragment();
const rentsList = document.querySelector(`.rents`);

export const onSuccess = (arr) => {
  arr.forEach((element) => {
    rents.push(element);
  });

  for (let i = 0; i < rents.length; i++) {
    cardFragment.appendChild(renderRent(rents, i));
    rentsList.appendChild(cardFragment);
  }

  let rentList = document.querySelectorAll(`.rent`);

  addRentListeners(Array.from(rentList));
};

const onErrorButtonClick = () => {
  closeButton.removeEventListener(`click`, onErrorButtonClick);
  node.remove();
}

const onErrorEscPress = (evt) => {
  if (evt.keyCode === window.util.ESC_KEYCODE) {
    closeButton.removeEventListener(`click`, onErrorButtonClick);
    document.removeEventListener(`keydown`, onErrorEscPress);
    window.removeEventListener(`click`, onErrorWindowClick);
    node.remove();
  }
}

function onErrorWindowClick() {
  window.removeEventListener(`click`, onErrorWindowClick);
  closeButton.removeEventListener(`click`, onErrorButtonClick);
  document.removeEventListener(`keydown`, onErrorEscPress);
  node.remove();
}

const onErrorOpen = () => {
  closeButton.addEventListener(`click`, onErrorButtonClick);
  document.addEventListener(`keydown`, onErrorEscPress);
  window.addEventListener(`click`, onErrorWindowClick);
}

export const onError = (errorMessage) => {
  let nodeText = node.querySelector(`p`);
  nodeText.textContent = errorMessage;
  document.body.insertAdjacentElement(`afterbegin`, node);
  onErrorOpen();
};
