document.querySelectorAll("[data-slide-to]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const el = document.getElementById(btn.dataset.slideTo);
    if (el)
      el.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
  });
});
