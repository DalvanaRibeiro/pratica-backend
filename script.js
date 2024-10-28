// Função para prosseguir para a página de ação
function proceed() {
    const name = document.getElementById("username").value;
    const action = document.getElementById("action").value;

    if (name && action) {
        // Salva o nome e a ação selecionada no localStorage
        localStorage.setItem("username", name);
        localStorage.setItem("action", action);
        window.location.href = "action.html"; // Redireciona para a página de ação
    } else {
        alert("Por favor, insira seu nome e selecione uma ação.");
    }
}

// Função para exibir o nome e a descrição da ação na página de ação
function displayAction() {
    const name = localStorage.getItem("username");
    const action = localStorage.getItem("action");

    if (name && action) {
        document.getElementById("displayName").textContent = name;

        let description = "";
        switch (action) {
            case "buscar":
                description = "Eu sou o FrontEnd mas pode me chamar de Front. Se liga na minha beleza, toda trabalha na minha folha de estilo CSS, com elementos suaves para sua melhor experiência. Eu sou o lindo do rolê :) Você escolheu buscar um livro. Preencha as informações abaixo.";
                document.getElementById("formTitle").textContent = "Buscar Livro";
                document.getElementById("submitBtn").textContent = "Buscar";
                document.getElementById("formContainer").style.display = "block"; // Mostra o formulário
                document.getElementById("submitBtn").onclick = function() {
                    window.location.href = "result.html?type=buscar&name=" + encodeURIComponent(name) + "&bookName=" + encodeURIComponent(document.getElementById("bookName").value);
                };
                break;
            case "adicionar":
                description = "Você escolheu adicionar um livro. Preencha as informações do livro.";
                document.getElementById("formTitle").textContent = "Cadastrar Livro";
                document.getElementById("submitBtn").textContent = "Adicionar";
                document.getElementById("formContainer").style.display = "block"; // Mostra o formulário
                document.getElementById("submitBtn").onclick = function() {
                    window.location.href = "result.html?type=adicionar&name=" + encodeURIComponent(name) + "&bookName=" + encodeURIComponent(document.getElementById("bookName").value) + "&bookAuthor=" + encodeURIComponent(document.getElementById("bookAuthor").value);
                };
                break;
            case "atualizar":
                description = "Você escolheu atualizar um livro. Informe as novas informações.";
                break;
            case "deletar":
                description = "Você escolheu deletar um livro. Tenha certeza antes de prosseguir.";
                break;
        }
        document.getElementById("actionDescription").textContent = description;
    } else {
        window.location.href = "index.html"; // Redireciona para a página inicial se não houver dados
    }
}

// Função para registrar o livro (adicionar)
function registerBook() {
    const bookName = document.getElementById("bookName").value;
    const bookAuthor = document.getElementById("bookAuthor").value;

    if (bookName && bookAuthor) {
        alert(`Livro cadastrado!\nNome: ${bookName}\nAutor: ${bookAuthor}`);
        document.getElementById("bookName").value = ''; // Limpa o campo
        document.getElementById("bookAuthor").value = ''; // Limpa o campo
    } else {
        alert("Por favor, preencha o nome e o autor do livro.");
    }
}

// Executa displayAction() automaticamente quando a action.html é carregada
if (window.location.pathname.includes("action.html")) {
    window.onload = displayAction;
}
