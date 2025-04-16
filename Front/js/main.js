document.addEventListener("DOMContentLoaded", async () => {
  const components = document.querySelectorAll("[data-component]");

  for (const el of components) {
    const name = el.getAttribute("data-component");
    const html = await fetch(`../components/${name}.html`).then((res) => res.text());
    el.innerHTML = html;

    // Adiciona JS individual do componente (caso tenha)
    const script = document.createElement("script");
    script.src = `../js/${name}.js`;
    document.body.appendChild(script);

    // Se for o sec1, inicializa o Swiper DEPOIS do conteúdo estar no DOM
    if (name === "sec1") {
      initSwiper();
    }
  }
});

// Função que inicializa o Swiper
function initSwiper() {
  new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 3000,
    },
  });
}
