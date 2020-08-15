/* FUNÇÃO DE VALIDAÇÃO DO LOGIN */
function Login() {
    var login = document.getElementById('inputEmail').value.toLowerCase();
    var senha = document.getElementById('inputSenha').value;

    if (login == "usuario" && senha == "admin") {
        window.location = "logado_usuario.html";
        return true;
    } else if (login == "restaurante" && senha == "admin") {
        window.location = "logado_restaurante.html";
        return true;
    } else if (login == "entregador" && senha == "admin") {
        window.location = "logado_entregador.html";
        return true;
    } else if (login == "admin" && senha == "admin") {
        window.location = "dash_usuarios.html";
        return true;
    } else {
        document.getElementById("inputEmail").classList.add('is-invalid');
        document.getElementById("inputSenha").classList.add('is-invalid');
        inputEmail.focus();
    }
    return false;
}

/* FUNÇÃO DE VALIDAÇÃO DO FORMULÁRIO DE CADASTRO */
function validaCadastro() {
    var senha = document.getElementById('inputSenha').value,
        segundaSenha = document.getElementById('inputConfirmaSenha').value;

    if (document.getElementById('inputNome').value == "") {
        document.getElementById("inputNome").classList.add('is-invalid');
        inputNome.focus();
        return false;
    } else if (document.getElementById('inputCPF').value == "") {
        document.getElementById("inputNome").classList.add('is-valid');
        document.getElementById("inputCPF").classList.add('is-invalid');
        inputCPF.focus();
        return false;
    } else if (document.getElementById('inputCelular').value == "") {
        document.getElementById("inputCelular").classList.add('is-invalid');
        inputCelular.focus();
        return false;
    } else if (document.getElementById('inputEmail').value == "" ||
        document.getElementById('inputEmail').value.indexOf('@') == -1 ||
        document.getElementById('inputEmail').value.indexOf('.') == -1) {
        document.getElementById("inputEmail").classList.add('is-invalid');
        inputEmail.focus();
        return false;
    } else if (senha.length <= 8) {
        document.getElementById("inputSenha").classList.add('is-invalid');
        document.getElementById("inputSenha").placeholder = "Insira uma senha que contenha mais de 8 caracteres";
        inputSenha.focus();
        return false;
    } else if (senha != segundaSenha) {
        document.getElementById("inputConfirmaSenha").classList.add('is-invalid');
        document.getElementById("inputConfirmaSenha").placeholder = "As senhas não conferem";
        inputConfirmaSenha.focus();
        return false;
    } else if (document.getElementById('inputEndereco').value == "") {
        document.getElementById("inputEndereco").classList.add('is-invalid');
        inputEndereco.focus();
        return false;
    } else if (document.getElementById('inputNumero').value == "") {
        document.getElementById("inputNumero").classList.add('is-invalid');
        inputNumero.focus();
        return false;
    } else if (document.getElementById('inputCEP').value == "") {
        document.getElementById("inputCEP").classList.add('is-invalid');
        inputCEP.focus();
        return false;
    } else {
        alert("Dados cadastrados");
        document.getElementById("form").classList.add('was-validated');
        window.location = "index.html";
    }
    return false;
}

/* FUNÇÃO PARA VALIDAR FORM DE CADASTRO DO VEÍCULO */
function validaVeiculo() {
    if (document.getElementById('inputPlaca').value == "") {
        document.getElementById("inputPlaca").classList.add('is-invalid');
        inputPlaca.focus();
        return false;
    } else if (document.getElementById('inputAnoV').value == "") {
        document.getElementById("inputAnoV").classList.add('is-invalid');
        inputAnoV.focus();
        return false;
    } else if (document.getElementById('inputCor').value == "") {
        document.getElementById("inputCor").classList.add('is-invalid');
        inputCor.focus();
        return false;
    } else if (document.getElementById('inputCNH').value == "") {
        document.getElementById("inputCNH").classList.add('is-invalid');
        inputCNH.focus();
        return false;
    } else if (document.getElementById('inputPDF').value == "") {
        document.getElementById("inputPDF").classList.add('is-invalid');
        inputPDF.focus();
        return false;
    } else {
        alert("Dados cadastrados, enviamos um e-mail de validação")
        window.location = "index.html";
    }
}

/* MASCARA */
function mascara(t, mask) {
    var i = t.value.length;
    var saida = mask.substring(1, 0);
    var texto = mask.substring(i)
    if (texto.substring(0, 1) != saida) {
        t.value += texto.substring(0, 1);
    }
}

/* FUNÇÃO QUE LIMPA O FORMULÁRIO DE CONTATO */
function apagaForm() {
    document.getElementById('form').reset();
}

/* FUNÇÃO QUE DIRECIONA PARA A PÁGINA INICIAL */
function inicio() {
    window.location = "index.html";
}

/* VALIDAÇÃO ESQUECI MINHA SENHA, O CAMPO DE E-MAIL NÃO PODE ESTAR VAZIO */
function validaEmail() {
    if (document.getElementById('inputEmail_reset').value == "" ||
        document.getElementById('inputEmail_reset').value.indexOf('@') == -1 ||
        document.getElementById('inputEmail_reset').value.indexOf('.') == -1) {

        document.getElementById("inputEmail_reset").classList.add('is-invalid');
        inputEmail_reset.focus();
        return false;
    } else {
        alert("Enviamos um email com o link para alteração de senha!");
        window.location = "index.html";
    }
}

/* VALIDAÇÃO DE CONTATO */
function validaContato() {
    if (document.getElementById('inputNome').value == "") {

        document.getElementById("inputNome").classList.add('is-invalid');
        document.getElementById("inputNome").placeholder = "Digite seu nome";
        inputNome.focus();
        return false;
    } else if (document.getElementById('inputEmail').value == "" ||
        document.getElementById('inputEmail').value.indexOf('@') == -1 ||
        document.getElementById('inputEmail').value.indexOf('.') == -1) {

        document.getElementById("inputEmail").classList.add('is-invalid');
        document.getElementById("inputEmail").placeholder = "Digite seu email";
        inputEmail.focus();
        return false;
    } else if (document.getElementById('textArea').value == "") {

        document.getElementById("textArea").classList.add('is-invalid');
        document.getElementById("textArea").placeholder = "Digite sua mensagem";
        textArea.focus();
        return false;
    } else {
        alert("Obrigado pelo seu contato");
        window.location = "index.html";
    }
}

/* VALIDAÇÃO DO CARTÃO */
function validaCartao() {
    if (document.getElementById('inputCartao').value == "") {
        document.getElementById("inputCartao").classList.add('is-invalid');
        inputCartao.focus();
        return false;
    } else if (document.getElementById('inputNumCartao').value == "") {
        document.getElementById("inputNumCartao").classList.add('is-invalid');
        inputNumCartao.focus();
        return false;
    } else if (document.getElementById('inputAnoCartao').value == "") {
        document.getElementById("inputAnoCartao").classList.add('is-invalid');
        inputAnoCartao.focus();
        return false;
    } else if (document.getElementById('inputCodigo').value == "") {
        document.getElementById("inputCodigo").classList.add('is-invalid');
        inputCodigo.focus();
        return false;
    } else {
        alert("Dados cadastrados, enviamos um e-mail de validação do cadastro")
        window.location = "index.html";
    }
}

/* VALIDA AVALIACAO */
function validaAvaliacao() {
    if (document.getElementById("inputNome").value == "") {
        document.getElementById("inputNome").classList.add('is-invalid');
        inputNome.focus();
        return false;
    } else if (document.getElementById("inputEmail").value == "" ||
        document.getElementById("inputEmail").value.indexOf('@') == -1 ||
        document.getElementById("inputEmail").value.indexOf('.') == -1) {
        document.getElementById("inputEmail").classList.add('is-invalid');
        inputEmail.focus();
        return false;
    } else if (document.getElementById("textArea").value == "") {
        document.getElementById("textArea").classList.add('is-invalid');
        textArea.focus();
        return false;
    } else if (document.getElementById('estrelas').value == "") {
        doc
        textArea.focus();
        return false;
    } else {
        alert("Pedido finalizado!")
        window.location = "index.html";
    }
}

/* FUNÇÃO QUE ADICIONA ITEM */

function incrementaValor(valorMaximo) {
    var value = parseInt(document.getElementById('resultado').value, 10);
    value = isNaN(value) ? 1 : value;
    if (value >= valorMaximo) {
        value = valorMaximo;
    } else {
        value++;
    }
    document.getElementById('resultado').value = value;
}

function decrementaValor(valorMinimo) {
    var value = parseInt(document.getElementById('resultado').value, 10);
    value = isNaN(value) ? 1 : value;
    if (value <= valorMinimo) {
        value = 1;
    } else {
        value--;
    }
    document.getElementById('resultado').value = value;
}

function onlynumber(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    //var regex = /^[0-9.,]+$/;
    var regex = /^[0-9.]+$/;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}