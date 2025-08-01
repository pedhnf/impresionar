const terminal = document.getElementById("terminal");

const linhas = [
  "Booting system...",
  "Loading modules [OK]",
  "Connecting to server [OK]",
  "Initializing interface...",
  "Access granted.",
  "",
  "Mensagem do sistema: Algumas linhas de código valem quando inspiradas em alguém especial.",
  "",
  ">> Pressione ENTER para continuar <<"
];

let linha = 0;
let char = 0;

function digitar() {
  if (linha < linhas.length) {
    if (char < linhas[linha].length) {
      terminal.innerHTML += linhas[linha].charAt(char);
      char++;
      setTimeout(digitar, 35);
    } else {
      terminal.innerHTML += "\n";
      linha++;
      char = 0;
      setTimeout(digitar, 250);
    }
  } else {
    document.addEventListener("keydown", redirecionar);
    document.addEventListener("click", redirecionar);
  }
}

function redirecionar(e) {
  if (e.key === "Enter" || e.type === "click") {
    window.location.href = "segunda.html";
  }
}

digitar();
