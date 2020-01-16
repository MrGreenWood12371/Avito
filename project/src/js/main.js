import {getObjects} from './components/load.js';
import {onSuccess, onError} from './components/data.js';
import {renderRentDescription} from './components/rent-description.js';

const DATA_URL = `http://134.209.138.34/items`;

const openDescription = (url) => {
  getObjects(renderRentDescription, onError, url);
};

export const addRentListeners = (elements) => {
  elements.forEach((element) => {
    element.addEventListener(`click`, () => {
      openDescription(`http://134.209.138.34/item/` + element.id);
    });
  });
};

const openRents = () => {
  getObjects(onSuccess, onError, DATA_URL);
};

openRents();
