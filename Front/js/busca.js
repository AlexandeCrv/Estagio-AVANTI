const produtosFake = [
  {
    descriçao: "Camiseta básica manga curta gola v - branco",
    nome: "Camiseta",
    imagem:
      "https://www.hering.com.br/_next/image?url=https%3A%2F%2Fhering.vtexassets.com%2Farquivos%2Fids%2F3190698-880-auto&w=1280&q=100",
    preco: "R$ 49,90",
  },
  {
    descriçao: "Camiseta básica manga curta gola v world - verde ",
    nome: "Camiseta",
    imagem:
      "https://www.hering.com.br/_next/image?url=https%3A%2F%2Fhering.vtexassets.com%2Farquivos%2Fids%2F2694878-880-auto&w=1280&q=100",
    preco: "R$ 129,90",
  },
  {
    descriçao: "Camiseta básica manga curta v world - marsala",
    nome: "Camiseta",
    imagem:
      "https://www.hering.com.br/_next/image?url=https%3A%2F%2Fhering.vtexassets.com%2Farquivos%2Fids%2F3451962-880-auto&w=1280&q=100",
    preco: "R$ 189,90",
  },
  {
    descriçao: "Vestido curto manga longa em tricô - vinho",
    nome: "vestido",
    imagem:
      "https://www.hering.com.br/_next/image?url=https%3A%2F%2Fhering.vtexassets.com%2Farquivos%2Fids%2F3478632-880-auto&w=1280&q=100",
    preco: "R$ 219,99",
  },
  {
    descriçao: "Vestido curto manga longa em tricô - cinza",
    nome: "Vestido",
    imagem:
      "https://www.hering.com.br/_next/image?url=https%3A%2F%2Fhering.vtexassets.com%2Farquivos%2Fids%2F3240075-880-auto&w=1280&q=100",
    preco: "R$ 210,99",
  },
  {
    descriçao: "Vestido curto manga longa em tricô - creme",
    nome: "Vestido",
    imagem:
      "https://www.hering.com.br/_next/image?url=https%3A%2F%2Fhering.vtexassets.com%2Farquivos%2Fids%2F3478635-880-auto&w=1280&q=100",
    preco: "R$ 290,99",
  },
];

const observer = new MutationObserver(() => {
  const searchButton = document.getElementById("searchButton");
  const searchInput = document.getElementById("searchInput");
  const searchResult = document.getElementById("searchResult");
  const searchModal = document.getElementById("searchModal");
  const closeSearchModal = document.getElementById("closeSearchModal");

  if (
    searchButton &&
    searchInput &&
    searchResult &&
    searchModal &&
    closeSearchModal
  ) {
    console.log("Buscador finalmente encontrado no DOM!");

    searchButton.addEventListener("click", () => {
      const searchTerm = searchInput.value.trim().toLowerCase();
      searchResult.innerHTML = "";

      if (searchTerm) {
        const resultados = produtosFake.filter((produto) =>
          produto.nome.toLowerCase().includes(searchTerm)
        );

        if (resultados.length) {
          resultados.forEach((produto) => {
            const card = `
                <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow p-4">
                  <img src="${produto.imagem}" alt="${produto.descriçao}" class="w-full h-72 object-cover rounded-lg mb-3">
                  <h3 class="text-base font-semibold text-gray-800">${produto.descriçao}</h3>
                  <p class="text-green-600 font-bold text-lg">${produto.preco}</p>
                </div>
              `;
            searchResult.innerHTML += card;
          });
        } else {
          searchResult.innerHTML = `<p class="text-center text-gray-400 col-span-full">Nenhum produto encontrado para '${searchTerm}'</p>`;
        }

        searchModal.classList.remove("hidden");
      }
    });

    closeSearchModal.addEventListener("click", () => {
      searchModal.classList.add("hidden");
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        searchModal.classList.add("hidden");
      }
    });
  }
});

observer.observe(document.body, { childList: true, subtree: true });
