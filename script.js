function carregar(){
    var msg = document.querySelector('#msg');
    var img = document.querySelector('#imagem');
    var momento = document.querySelector('#momentododia');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'fotomanha.PNG'
        document.body.style.background = '#e2c9b0'
        momento.innerHTML = 'Bom Dia, Seja Bem Vindo(a)!'

    }else if(hora >= 12 && hora <= 18){
        //BOA TARDE!    
        img.src = 'fototarde.PNG'
        document.body.style.background = '#fabb0a'
        momento.innerHTML = 'Boa tarde, Seja Bem Vindo(a)!'
    }else{
        //BOA NOITE!
        img.src = 'fotonoite.PNG'
        document.body.style.background = '#2d77b4'
        momento.innerHTML = 'Boa Noite, Seja Bem Vindo(a)!'
    }
}