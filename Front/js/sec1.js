(() => {
  const interval = setInterval(() => {
    const carousell = document.getElementById("carousell");
    const paginationContainer = document.getElementById("pagination");

    if (carousell && paginationContainer) {
      clearInterval(interval); // Parar o loop

      const totalItems = carousell.querySelectorAll(".swiper-slide").length;

      const swiper = new Swiper(".mySwiper", {
        loop: false,
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        on: {
          slideChange: function () {
            currentIndex = swiper.realIndex;
            updatePagination();
          },
        },
      });

      // LIMPA as bolinhas antigas se já houver
      paginationContainer.innerHTML = "";

      // Criar as bolinhas
      for (let i = 0; i < totalItems; i++) {
        const dot = document.createElement("div");
        dot.className =
          "w-3 h-3 rounded-full bg-gray-400 hover:bg-gray-600 cursor-pointer transition";
        if (i === 0) dot.classList.add("bg-gray-800");

        dot.addEventListener("click", () => {
          swiper.slideTo(i);
        });

        paginationContainer.appendChild(dot);
      }

      const updatePagination = () => {
        const dots = paginationContainer.children;
        for (let i = 0; i < dots.length; i++) {
          dots[i].classList.remove("bg-gray-800");
          dots[i].classList.add("bg-gray-400");
        }
        if (dots[swiper.realIndex]) dots[swiper.realIndex].classList.add("bg-gray-800");
      };

      updatePagination(); // Inicial
    }
  }, 50);
})();
