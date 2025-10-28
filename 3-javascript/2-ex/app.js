// Pegar elementos da página (HTML)
const msgSpan = document.getElementById("msg");
const contadorSpan = document.getElementById("contador");
const botaoMensagem = document.getElementById("botaoMensagem");
const botaoContador = document.getElementById("botaoContador");
const botaoTema = document.getElementById("botaoTema");
const body = document.body;
const foto = document.getElementById("foto");
const copiarEmailBtn = document.getElementById("copiarEmail");
const emailLink = document.getElementById("emailLink");
const statusCopia = document.getElementById("statusCopia");

// 1. Trocar o texto na tela quando clica (interatividade básica)
botaoMensagem.addEventListener("click", () => {
  msgSpan.textContent = "Olá! Esse texto apareceu graças ao JavaScript 😄";
});

// 2. Contador de cliques
let totalCliques = 0;
botaoContador.addEventListener("click", () => {
  totalCliques = totalCliques + 1;
  contadorSpan.textContent = totalCliques;
});

// 3. Tema claro/escuro alternando classe no <body>
botaoTema.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    botaoTema.textContent = "Voltar para claro ☀️";
  } else {
    botaoTema.textContent = "Alternar tema (claro/escuro)";
  }
});

// 4. Copiar e-mail para a área de transferência
copiarEmailBtn.addEventListener("click", async () => {
  // pega só o texto do link mailto:
  const email = emailLink.textContent.trim();

  try {
    await navigator.clipboard.writeText(email);
    statusCopia.textContent = "Copiado!";
    statusCopia.style.color = "green";
  } catch (err) {
    statusCopia.textContent = "Não consegui copiar 😞";
    statusCopia.style.color = "red";
  }

  // limpa depois de 2 segundos
  setTimeout(() => {
    statusCopia.textContent = "";
  }, 2000);
});

// 5. Se a imagem não carregar, mostrar um plano B
foto.addEventListener("error", () => {
  foto.alt = "Imagem não encontrada — mostrando uma imagem de teste";
  foto.src = "https://picsum.photos/800/400";
}, { once: true });

// 6. Extra: mudar o título dinamicamente só pra provar
// (Isso mostra que JS pode alterar QUALQUER parte da página)
const titulo = document.getElementById("titulo");
titulo.textContent = "Minicurso Vercel (ao vivo!)";