document.addEventListener("DOMContentLoaded", function () {
  console.log("Script carregado");

  setTimeout(function () {
    const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    console.log(mobileMenuToggle, mobileMenu);

    if (mobileMenuToggle && mobileMenu) {
      mobileMenuToggle.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");
        console.log("bibiuaberto");
      });
    } else {
      console.log("Elementos não encontrados. Verifique os IDs.");
    }

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
  }, 500);
});
