import { map } from "./js/map";
import { dropdown } from "./js/dropdown";

// import Swiper JS
import Swiper from "swiper/bundle";

// import Swiper styles
import "../node_modules/swiper/swiper-bundle.min.css";

// init Swiper:
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});
