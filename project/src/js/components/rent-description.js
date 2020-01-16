export let content = ``;
export let div = document.createElement(`div`);

const renderPhotos = (object) => {
  let photos = `<div class="rent-description__images">`;


  object[0].images.forEach((item) => {
    photos += `<img src="${item}" alt="Rent image" class="rent__image" width="250px" height="250px">`;
  });
  return photos;
};

const openWindow = () => {
  const rentDescription = window.open(`description.html`);
  rentDescription.onload = function () {

    let descriptionContainer = rentDescription.document.querySelector(`.rents`);

    descriptionContainer.appendChild(div);
  };
};

export const renderRentDescription = (obj) => {

  content = `
  <h3 class="rent-description__title">
  ${obj[0].title}
  </h3>
  <p class="rent-description__id">${obj[0].id}</p>
  <p class="rent-description__address">${obj[0].address}</p>
  <p class="rent-description__price">
  ${obj[0].price}
  </p>
  <p class="rent-description__text">
  ${obj[0].description}
  </p>
  <p class="rent-description__seller-name">
  ${obj[0].sellerName}
  </p>
  ${renderPhotos(obj)}
  </div>
  `;

  div.innerHTML = content;

  openWindow();

};
