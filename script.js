const mensagem = "Oi, fiz esse site só pra você 😍";
const elementoMensagem = document.getElementById("mensagem");
let index = 0;

// Efeito de digitação
function digitar() {
  if (index < mensagem.length) {
    elementoMensagem.textContent += mensagem.charAt(index);
    index++;
    setTimeout(digitar, 100);
  }
}
digitar();

// Botão com confetes
document.getElementById("botao").addEventListener("click", () => {
  for (let i = 0; i < 30; i++) {
    criarConfete();
  }
});

function criarConfete() {
  const confete = document.createElement("div");
  confete.classList.add("confete");
  document.body.appendChild(confete);

  const tamanho = Math.random() * 8 + 5 + "px";
  confete.style.width = tamanho;
  confete.style.height = tamanho;
  confete.style.left = Math.random() * window.innerWidth + "px";
  confete.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

  setTimeout(() => confete.remove(), 3000);
}
