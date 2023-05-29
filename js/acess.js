function pegaval(event){
    event.preventDefault();
    var senha  = 1234;
    var acesso = document.getElementById("acess").value;
    if(acesso == senha){
        console.log("Passou");
        alert("Parabéns acesso concedido");
        var url = "https://www.youtube.com/watch?v=BU-w2_Aae54";
        window.location.href = url;
    }else{
        console.log("Não passou!")
    }
}

function mostrarSenha(){
    var inputPass = document.getElementById('acess')
    var btnShowPass = document.getElementById('btn-senha')

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type','text')
        btnShowPass.classList.replace('bi-eye-fill','bi-eye-slash-fill')
    }else{
        inputPass.setAttribute('type','password')
        btnShowPass.classList.replace('bi-eye-slash-fill','bi-eye-fill')
    }
}
