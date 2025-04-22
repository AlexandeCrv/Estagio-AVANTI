document.addEventListener("DOMContentLoaded", async () => {
  const components = document.querySelectorAll("[data-component]");

  for (const el of components) {
    const name = el.getAttribute("data-component");
    const html = await fetch(`../components/${name}.html`).then((res) =>
      res.text()
    );
    el.innerHTML = html;

    const script = document.createElement("script");
    script.src = `../js/${name}.js`;
    document.body.appendChild(script);

    if (name === "sec1") {
      initSwiper();
    }
  }
});

function initSwiper() {
  new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 3000,
    },
  });
}
