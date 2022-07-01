function fncValida(){

//encontrar o elemento na arvore DOM pelo ID e atribuir o valor do mesmo a uma variável  

let nome = document.getElementById("txtNome").value;
let email = document.forms[0].txtEmail.value;
let fone = document.formContato.txtFone.value;
let uf = document.querySelector("#ddlUF");
let cidade = document.getElementById("txtCidade").value;
let motivo = document.getElementById("txtMotivo").value;
let mensagem = document.getElementById("txtMensagem").value;

//se a variável não tem um texto preenchido
if(nome == ""){
    alert('Por Favor, Preencha o seu nome');
    return false;
}

  //se a variável não tem um texto preenchido
if(email == ""){
    alert('Por Favor, Preencha o email');
    return false;
}

  //se a variável não tem um texto preenchido
if(fone == ""){
    alert('Por Favor, Preencha o telefone');
    return false;
}
  //se a variável não tem um texto preenchido
if(uf.selectedIndex==0){
    alert('Por Favor, Selecione o estado (UF)');
    return false;
}
    //se a variável não tem um texto preenchido
if(cidade == ""){
    alert('Por Favor, Preencha sua cidade');
    return false;
}
//se a variável não tem um texto preenchido
if(motivo == ""){
        alert('Por Favor, Preencha o motivo do seu contato');
        return false;
}
//se a variável não tem um texto preenchido
if(mensagem == ""){
    alert('Por Favor, Preencha como podemos te ajudar');
    return false;
}
};

document.addEventListener("DOMContentLoaded", function(){
    let btnEnviar = document.querySelector("#btnEnviar");
    btnEnviar.addEventListener("click", function(){
        fncValida();
    });
    
    var telMask = document.getElementById('txtFone');
    var maskOptions = {
    mask: '+{55}(00)00000-0000'
    };
    var mask = IMask(telMask, maskOptions);
    
    mask.on("complete", function () {
    alert(`Obrigado por informar seu telefone  ${mask.unmaskedValue} no formato correto: ${mask.value}`);
    });
});
// Comentário
