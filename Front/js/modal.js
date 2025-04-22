function abrirModal() {
  const modal = document.getElementById("modal");

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function fecharModal() {
  modal.classList.remove("flex");
  modal.classList.add("hidden");
}

function toggleSenha(id) {
  const input = document.getElementById(id);
  input.type = input.type === "password" ? "text" : "password";
}

document.addEventListener("DOMContentLoaded", () => {
  const verificarModal = setInterval(() => {
    const botaoModal = document.getElementById("abrirModal");
    if (botaoModal) {
      botaoModal.addEventListener("click", abrirModal);
      clearInterval(verificarModal);
    }
  }, 100);
});
