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
    (() => {
      const e = document.getElementById("cart");
      console.log(e);
    })();
})();
