// Função de Login
function fazerLogin() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const errorMsg = document.getElementById("error-msg");

    // senha
    if (user === "love" && pass === "777") {
        document.getElementById("login-screen").classList.add("hidden");
        document.getElementById("proposal-screen").classList.remove("hidden");
    } else {
        errorMsg.innerText = "Usuário ou senha incorretos!";
    }
}

// Lógica do botão fujão
const btnNo = document.getElementById("btn-no");

btnNo.addEventListener("mouseover", function() {
    // Muda a posição para absoluta para soltar o botão do layout
    btnNo.style.position = "absolute";
    
    // Pega o tamanho da janela (viewport)
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Pega o tamanho do próprio botão
    const btnWidth = btnNo.offsetWidth;
    const btnHeight = btnNo.offsetHeight;
    
    // Calcula coordenadas aleatórias garantindo que o botão não saia da tela
    const randomX = Math.floor(Math.random() * (windowWidth - btnWidth));
    const randomY = Math.floor(Math.random() * (windowHeight - btnHeight));
    
    // Aplica as novas coordenadas
    btnNo.style.left = randomX + "px";
    btnNo.style.top = randomY + "px";
});

// Ação do botão sim
function aceitou() {
    alert("vapo");
    // Aqui você pode redirecionar para um vídeo, música ou outra página
}