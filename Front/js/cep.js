function buscarCEP() {
  const cep = document.getElementById("cepInput").value.trim();
  const btn = document.getElementById("btnBuscarCEP");
  const icone = document.getElementById("iconeBusca");

  if (!cep || cep.length !== 8 || isNaN(cep)) {
    alert("Digite um CEP válido com 8 números!");
    return;
  }

  icone.innerHTML = "⏳";
  btn.disabled = true;

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res) => res.json())
    .then((data) => {
      if (data.erro) {
        alert("CEP não encontrado!");
      } else {
        alert(
          `CEP encontrado!\n${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`
        );
      }
    })
    .catch(() => {
      alert("Erro ao buscar o CEP. Tente novamente.");
    })
    .finally(() => {
      icone.innerHTML = "🔍";
      btn.disabled = false;
    });
}
