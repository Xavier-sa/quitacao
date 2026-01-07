const STORAGE_KEY = "quitacao_data";
const PIN_KEY = "quitacao_pin";

// 👉 PIN PADRÃO (você pode mudar depois)
if (!localStorage.getItem(PIN_KEY)) {
  localStorage.setItem(PIN_KEY, "1234");
}

const defaultData = {
  renda: 1550,
  reserva: 0,
  dividas: [],
};

function verificarPin() {
  const pin = document.getElementById("pinInput").value;
  if (pin === localStorage.getItem(PIN_KEY)) {
    document.getElementById("login").style.display = "none";
    document.getElementById("app").classList.remove("hidden");
    render();
  } else {
    alert("PIN incorreto");
  }
}

function loadData() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || defaultData;
}

function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function render() {
  const data = loadData();

  document.getElementById("reserva").innerText = data.reserva.toFixed(2);

  const total = data.dividas.length;
  const quitadas = data.dividas.filter((d) => d.status === "quitada").length;

  document.getElementById("total").innerText = total;
  document.getElementById("quitadas").innerText = quitadas;

  const progresso = total === 0 ? 0 : (quitadas / total) * 100;
  document.getElementById("progress-bar").style.width = progresso + "%";

  const container = document.getElementById("dividas");
  container.innerHTML = "";

  data.dividas.forEach((d) => {
    const div = document.createElement("div");
    div.className = "divida";

    div.innerHTML = `
      <strong>${d.credor}</strong><br>
      Valor: R$ ${d.valor.toFixed(2)}<br>
      Status: ${d.status}<br>
      ${
        d.status !== "quitada"
          ? `<button onclick="quitar(${d.id})">Quitar</button>`
          : `<span class="ok">✔ Quitada</span>`
      }
    `;
    container.appendChild(div);
  });
}

function adicionarReserva() {
  const valor = parseFloat(prompt("Quanto guardar?"));
  if (!valor) return;

  const data = loadData();
  data.reserva += valor;
  saveData(data);
  render();
}

function adicionarDivida() {
  const credor = document.getElementById("credor").value;
  const valor = parseFloat(document.getElementById("valor").value);

  if (!credor || !valor) return;

  const data = loadData();
  data.dividas.push({
    id: Date.now(),
    credor,
    valor,
    status: "em_atraso",
  });

  saveData(data);
  document.getElementById("credor").value = "";
  document.getElementById("valor").value = "";
  render();
}

function quitar(id) {
  const valor = parseFloat(prompt("Valor do acordo"));
  if (!valor) return;

  const data = loadData();
  const d = data.dividas.find((x) => x.id === id);

  if (valor > data.reserva) {
    alert("Reserva insuficiente");
    return;
  }

  data.reserva -= valor;
  d.status = "quitada";
  saveData(data);
  render();
}
