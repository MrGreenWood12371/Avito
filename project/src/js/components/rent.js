const cardTemplate = document.querySelector(`#card`).content.querySelector(`.rents__card`);

export const renderRent = (objects, i) => {
  const cardElement = cardTemplate.cloneNode(true);
  const rentID = cardElement.querySelector(`.rent__id`);
  const rentTitle = cardElement.querySelector(`.rent__title`);
  const rentPreview = cardElement.querySelector(`.rent__preview`);
  const rentAddress = cardElement.querySelector(`.rent__address`);
  const rentPrice = cardElement.querySelector(`.rent__price`);

  cardElement.id = objects[i].id;
  rentID.textContent = `ID: ` + objects[i].id;
  rentTitle.textContent = objects[i].title;
  rentPreview.setAttribute(`src`, objects[i].previewImage);
  rentAddress.textContent = objects[i].address;
  rentPrice.textContent = objects[i].price;

  return cardElement;
};
