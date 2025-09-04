import '../scss/style.scss';
import { initSwiper } from './swiper-init.js';

document.addEventListener('DOMContentLoaded', () => {
  // init slider

  initSwiper();

  // menu

  const navLinks = document.getElementById("navLinks");
  const dropdowns = document.querySelectorAll(".header__menu-item.dropdown");
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.querySelector(".header__menu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  dropdowns.forEach(dropdown => {
    const trigger = dropdown.querySelector("span");

    trigger.addEventListener("click", (e) => {
      e.preventDefault();

      dropdowns.forEach(d => {
        if (d !== dropdown) {
          d.classList.remove("open");
        }
      });

      dropdown.classList.toggle("open");
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".header__menu-item.dropdown")) {
      dropdowns.forEach(d => d.classList.remove("open"));
    }
  });

  // scroll to section - menu 

  const header = document.querySelector(".header");
  const offset = 100;
  header.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);

      if (target) {
        e.preventDefault();
        const elementPosition = target.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  })

  const inputs = document.querySelectorAll('form input[required], form textarea[required]');

  inputs.forEach(input => {
    input.addEventListener('blur', () => {
      if (!input.value.trim()) {
        input.classList.add('error');
      } else {
        input.classList.remove('error');
      }
    });
  });
});



