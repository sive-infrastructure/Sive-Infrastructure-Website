const menuBtn =
  document.querySelector(".menu-btn");

const navLinks =
  document.querySelector(".nav-links");


/* MOBILE MENU */

menuBtn?.addEventListener(
  "click",
  () => {

    const open =
      navLinks.classList.toggle("open");

    menuBtn.setAttribute(
      "aria-expanded",
      open ? "true" : "false"
    );

  }
);


/* CLOSE MOBILE MENU AFTER CLICK */

document
  .querySelectorAll(".nav-links a")
  .forEach((link) => {

    link.addEventListener(
      "click",
      () => {

        navLinks.classList.remove("open");

        menuBtn?.setAttribute(
          "aria-expanded",
          "false"
        );

      }
    );

  });


/* CURRENT YEAR */

const year =
  document.getElementById("year");

if (year) {

  year.textContent =
    new Date().getFullYear();

}


/* SUBTLE REVEAL ANIMATION */

const revealItems =
  document.querySelectorAll(
    ".platform-card, .step, .why-grid article, .cycle-item"
  );

if ("IntersectionObserver" in window) {

  const observer =
    new IntersectionObserver(

      (entries) => {

        entries.forEach(
          (entry) => {

            if (!entry.isIntersecting) {
              return;
            }

            entry.target.animate(

              [
                {
                  opacity: 0,
                  transform: "translateY(18px)"
                },

                {
                  opacity: 1,
                  transform: "translateY(0)"
                }
              ],

              {
                duration: 520,
                easing: "cubic-bezier(.2,.7,.2,1)",
                fill: "both"
              }

            );

            observer.unobserve(
              entry.target
            );

          }
        );

      },

      {
        threshold: 0.12
      }

    );

  revealItems.forEach(
    (element) => {

      observer.observe(element);

    }
  );

}
