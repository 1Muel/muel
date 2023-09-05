function btn_onclick_entrar(){
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    localStorage.setItem("Email",email);
    localStorage.setItem("Senha",senha);
}