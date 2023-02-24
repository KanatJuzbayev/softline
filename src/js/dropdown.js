const dropdown = document.querySelector(".dropdown");

const select = dropdown.querySelector(".select");
const caret = dropdown.querySelector(".caret");
const menu = dropdown.querySelector(".menu");
const menuItems = dropdown.querySelectorAll(".menu__item");
const selected = dropdown.querySelector(".selected");
const menuRegions = document.querySelectorAll(".menu__item.region");
const mapList = document.querySelector(".map__list");

//dropdown toggle
function toggleMenu() {
  caret.classList.toggle("caret-rotate");
  menu.classList.toggle("menu-open");
}

select.addEventListener("click", toggleMenu);

// change selected by click on dropdown item
menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    selected.innerText = menuItem.innerText;
    caret.classList.remove("caret-rotate");
    menu.classList.remove("menu-open");
  });
});

// change Active map item by click dropdown region item
const mapImage = document.querySelector(".map-image");

function changeActiveMap() {
  let curentActiveItem = document.querySelector(".map__item.active");
  curentActiveItem.classList.remove("active");
  let mapItem = mapList.querySelector(`[data-item="${this.dataset.item}"]`);
  mapItem.classList.add("active");
  mapImage.style.backgroundImage = `url(img/maps/${this.dataset.item}.svg)`;
}

menuItems.forEach((menuItem) =>
  menuItem.addEventListener("click", changeActiveMap)
);
