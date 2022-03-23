function criptografa(){
    var frase = document.getElementById("txtfrase").value;
    var senha = document.getElementById("txtsenha").value;
    if(!frase || !senha)
        return;

    senha = senha.toLowerCase();
    
    var encrypted = CryptoJS.AES.encrypt(frase, senha);
    
    document.getElementById("resCriptografa").innerHTML = "Frase cifrada:";
    document.getElementById("resCriptografa").innerHTML = encrypted;
}

function descriptografa(){
    var chave = document.getElementById("txtkey").value;
    var aes = document.getElementById("txtaes").value;
    if(!chave || !aes)
        return;

    chave = chave.toLowerCase();

    var decrypted = CryptoJS.AES.decrypt(aes, chave);

    var fraseDescriptografada =  decrypted.toString(CryptoJS.enc.Utf8);

    if(fraseDescriptografada){
        document.getElementById("resDescriptografa").innerHTML = "Chave correta:";
        document.getElementById("resDescriptografa").innerHTML = fraseDescriptografada;
    }else
        document.getElementById("resDescriptografa").innerHTML = "Chave incorreta, tente novamente :/";
}