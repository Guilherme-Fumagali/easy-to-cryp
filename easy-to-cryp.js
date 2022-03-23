function criptografa(){
    var mensagem = document.getElementById("txtmensagem").value;
    var senha = document.getElementById("txtsenha").value;
    if(!mensagem || !senha)
        return;

    senha = senha.toLowerCase();
    
    var encrypted = CryptoJS.AES.encrypt(mensagem, senha);
    
    document.getElementById("feeCriptografa").innerHTML = "Mensagem cifrada";
    document.getElementById("resCriptografa").innerHTML = encrypted;
}

function descriptografa(){
    var chave = document.getElementById("txtkey").value;
    var aes = document.getElementById("txtaes").value;
    if(!chave || !aes)
        return;

    chave = chave.toLowerCase();

    var decrypted = CryptoJS.AES.decrypt(aes, chave);

    var mensagemDescriptografada =  decrypted.toString(CryptoJS.enc.Utf8);

    if(mensagemDescriptografada){
        document.getElementById("feeDescriptografa").innerHTML = "Mensagem decifrada";
        document.getElementById("resDescriptografa").innerHTML = mensagemDescriptografada;
    }else
        document.getElementById("feeDescriptografa").innerHTML = "Chave incorreta :/";
}