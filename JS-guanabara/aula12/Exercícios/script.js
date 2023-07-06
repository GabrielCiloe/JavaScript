function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    hora = 20
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //MANHA
        img.src = 'Imagens/MANHA.png'
    } else if (hora >= 12 && hora < 18){
        //TARDE
        img.src = 'Imagens/TARDE.png'
    } else {
        //NOITE
        img.src = 'Imagens/NOITE.png'
    }
}