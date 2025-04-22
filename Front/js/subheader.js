document.addEventListener("DOMContentLoaded", function () {
  console.log("Script carregado");

  setTimeout(function () {
    const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    console.log(mobileMenuToggle, mobileMenu); // Verifique novamente se estão sendo encontrados

    if (mobileMenuToggle && mobileMenu) {
      mobileMenuToggle.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");
        console.log("bibiuaberto");
      });
    } else {
      console.log("Elementos não encontrados. Verifique os IDs.");
    }

    // Mobile submenu toggles
    const mobileSubmenuToggles = document.querySelectorAll(
      ".mobile-submenu-toggle"
    );

    mobileSubmenuToggles.forEach((toggle) => {
      toggle.addEventListener("click", function () {
        const targetId = this.getAttribute("data-target");
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          document.querySelectorAll('[id^="mobile-"]').forEach((submenu) => {
            if (
              submenu.id !== targetId &&
              !submenu.classList.contains("hidden")
            ) {
              submenu.classList.add("hidden");
            }
          });

          targetElement.classList.toggle("hidden");
        }
      });
    });
  }, 500); // Aguarda 500ms antes de tentar acessar os elementos
});
