(() => {
  const interval = setInterval(() => {
    const carousel = document.getElementById("carousel");
    const next = document.getElementById("next");
    const prev = document.getElementById("prev");
    const dotsContainer = document.getElementById("dots");

    if (carousel && next && prev && dotsContainer) {
      clearInterval(interval); // parar o loop

      const scrollAmount = 240; // mesmo valor do seu scrollBy
      const totalItems = carousel.children.length;
      const visibleItems = Math.floor(carousel.offsetWidth / scrollAmount);
      const totalPages = Math.ceil(totalItems / visibleItems);

      let currentIndex = 0;

      // Cria os dots
      for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement("div");
        dot.className =
          "w-3 h-3 rounded-full bg-gray-400 hover:bg-gray-600 cursor-pointer transition";
        if (i === 0) dot.classList.add("bg-gray-800");
        dot.addEventListener("click", () => {
          carousel.scrollTo({
            left: i * scrollAmount * visibleItems,
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
          carousel.scrollBy({ left: scrollAmount * visibleItems, behavior: "smooth" });
          updateDots();
        }
      });

      prev.addEventListener("click", () => {
        if (currentIndex > 0) {
          currentIndex--;
          carousel.scrollBy({ left: -scrollAmount * visibleItems, behavior: "smooth" });
          updateDots();
        }
      });
    }
  }, 50);
})();
