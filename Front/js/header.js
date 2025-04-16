let contador = 0;

const carrinho = document.getElementById("carrinho");
const badge = document.getElementById("contador-carrinho");

if (carrinho && badge) {
  carrinho.addEventListener("click", () => {
    contador++;
    badge.textContent = contador;
    badge.classList.remove("hidden");
  });
}
