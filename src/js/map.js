let mapItems = document.querySelectorAll(".map__item");
let mapImage = document.querySelector(".map-image");

function changeActiveMap() {
  let curentActiveItem = document.querySelector(".map__item.active");
  curentActiveItem.classList.remove("active");
  this.classList.add("active");
  mapImage.style.backgroundImage = `url(img/maps/${this.dataset.item}.svg)`;
}

mapItems.forEach((mapItem) =>
  mapItem.addEventListener("click", changeActiveMap)
);
