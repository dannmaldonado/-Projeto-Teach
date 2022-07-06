function fncValida() {

    //encontrar o elemento na arvore DOM pelo ID e atribuir o valor do mesmo a uma variável  

    let nome = document.querySelector("#txtNome").value;
    let email = document.forms[0].txtEmail.value;
    let fone = document.querySelector("txtFone");
    let uf = document.querySelector("#ddlUF");
    let cidade = document.querySelector("txtCidade");
    let motivo = document.querySelector("txtMotivo");
    let mensagem = document.querySelector("txtMensagem");

    //se a variável não tem um texto preenchido
    if (nome == "") {
        alert('Por Favor, Preencha o seu nome');
        return false;
    }

    //se a variável não tem um texto preenchido
    if (email == "") {
        alert('Por Favor, Preencha o email');
        return false;
    }

    //se a variável não tem um texto preenchido
    if (fone == "") {
        alert('Por Favor, Preencha o telefone');
        return false;
    }

    //se a variável não tem um texto preenchido
    if (uf.selectedIndex == 0) {
        alert('Por Favor, Selecione o estado (UF)');
        return false;
    }

    //se a variável não tem um texto preenchido
    if (cidade == "") {
        alert('Por Favor, Preencha sua cidade');
        return false;
    }

    //se a variável não tem um texto preenchido
    if (motivo == "") {
        alert('Por Favor, Preencha o motivo do seu contato');
        return false;
    }

    //se a variável não tem um texto preenchido
    if (mensagem == "") {
        alert('Por Favor, Preencha como podemos te ajudar');
        return false;
    }

    else {
        return true;
    }
    
};

document.addEventListener("DOMContentLoaded", function () {
    let btnEnviar = document.querySelector("#btnEnviar");
    btnEnviar.addEventListener("click", function () {
        fncValida();
        if (false !== true){
            alert('Formulário enviado com sucesso!');
        }
        
    });

    // btnEnviar.addEventListener("click", function(e) {
    //     e.preventDefault();
    // });

    var telMask = document.getElementById('txtFone');
    var maskOptions = {
        mask: '+{55}(00)00000-0000'
    };
    var mask = IMask(telMask, maskOptions);

    // mask.on("complete", function () {
    // alert(`Obrigado por informar seu telefone  ${mask.unmaskedValue} no formato correto: ${mask.value}`);
    // });
});

function showValues() {
    var str = $("form").serialize();
    $("#results").text(str);
}
$("input[type='checkbox'], input[type='radio']").on("click", showValues);
$("select").on("change", showValues);
showValues();
// Comentário

// const btn = document.querySelector("#btnEnviar");

// btn.addEventListener("click", function(e) {
//     e.preventDefault();

//     const email = document.querySelector("#email");
//     // const email = document.querySelector("#txtEmail");
//     // const fone = document.querySelector("txtFone");
//     // const uf = document.querySelector("#ddlUF");
//     // const cidade = document.querySelector("txtCidade");
//     // const motivo = document.querySelector("txtMotivo");
//     // const mensagem = document.querySelector("txtMensagem");

//     const value = email.value;
//     //[nome.value, email.value, fone.value, uf.value, cidade.value, motivo.value, mensagem.value];
//     console.log(value);
// })

// var telMask = document.getElementById('txtFone');
// var maskOptions = {
//     mask: '+{55}(00)00000-0000'
// };
// var mask = IMask(telMask, maskOptions);