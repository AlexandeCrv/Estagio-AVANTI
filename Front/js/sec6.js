(() => {
  const interval = setInterval(() => {
    const carousel = document.getElementById("promo-carousel");
    const next = document.getElementById("promo-next");
    const prev = document.getElementById("promo-prev");
    const dotsContainer = document.getElementById("promo-dots");

    if (carousel && next && prev && dotsContainer) {
      clearInterval(interval);

      const scrollAmount = 240;
      const totalPages = 3;

      let currentIndex = 0;

      for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement("div");
        dot.className =
          "w-3 h-3 rounded-full bg-gray-400 hover:bg-gray-600 cursor-pointer transition";
        if (i === 0) dot.classList.add("bg-gray-800");
        dot.addEventListener("click", () => {
          carousel.scrollTo({
            left: i * scrollAmount * 4,
            behavior: "smooth",
          });
          currentIndex = i;
          updateDots();
        });
        dotsContainer.appendChild(dot);
      }

      const updateDots = () => {
        const dots = dotsContainer.children;
        for (let i = 0; i < dots.length; i++) {
          dots[i].classList.remove("bg-gray-800");
          dots[i].classList.add("bg-gray-400");
        }
        if (dots[currentIndex]) dots[currentIndex].classList.add("bg-gray-800");
      };

      next.addEventListener("click", () => {
        const maxIndex = totalPages - 1;
        if (currentIndex < maxIndex) {
          currentIndex++;
          carousel.scrollBy({
            left: scrollAmount * 4,
            behavior: "smooth",
          });
          updateDots();
        }
      });

      prev.addEventListener("click", () => {
        if (currentIndex > 0) {
          currentIndex--;
          carousel.scrollBy({
            left: -scrollAmount * 4,
            behavior: "smooth",
          });
          updateDots();
        }
      });
    }
  }, 50);
})();
