(() => {
  "use strict";
  (() => {
    const e = document.getElementById("cart"),
      t = document.querySelector(".cart"),
      c = t.querySelector(".cart-close");
    e.addEventListener("click", () => {
      t.style.display = "flex";
    }),
      c.addEventListener("click", () => {
        t.style.display = "";
      });
  })(),
    document.getElementById("cart"),
    console.log("second");
})();
