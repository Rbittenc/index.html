
const myInterval = window.setInterval(function(){
        var textoArea = document.querySelector("#TextoArea").value;

    
        if(!textoArea){
            const mensagem = document.querySelector("#msgCriptografada");// mensagem criptografada
            mensagem.style.display = 'none';
            
            
         
        
    }
  }, 500);




function btnEncriptar(){
    var textoArea = document.querySelector("#TextoArea").value; //Area de texto digitada pelo usuário
    var textoMinusculo = textoArea.toLowerCase();//transformar input em letras minusculas
    
    var x = textoMinusculo.split('');
    for(i=0; i<x.length; i++){

        if(x[i]==='a'){
            x[i] ="ai";            
        }
        else if(x[i]==='e'){
            x[i] ="enter";            
        }
        else if(x[i]==='i'){
            x[i] ="imes";            
        }
        else if(x[i]==='o'){
            x[i] ="ober";            
        }
        else if(x[i]==='u'){
            x[i] ="ufat";            
        }
    }
    var textoCriptografado = x.join('');
     
    const mensagem = document.querySelector("#msgCriptografada");// mensagem criptografada
    mensagem.style.display = 'block';
    
    
    const palavraCriptografada = document.querySelector("#palavraCriptografada");
    palavraCriptografada.innerHTML=textoCriptografado;    
    

}



function btnDesencripitar(){
    var textoArea = document.querySelector("#TextoArea").value;
    var z2 = textoArea.replace(/ai/g,"a").replace(/enter/g,"e").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ufat/g,"u");
    
    const mensagem = document.querySelector("#msgCriptografada");// mensagem criptografada
    mensagem.style.display = 'block';

    
     const palavraCriptografada = document.querySelector("#palavraCriptografada");
     palavraCriptografada.innerHTML=z2;
     
     
}

function copiar(){
    var btnCopiar = document.querySelector("#botaoCopiar");
    const palavraCriptografada = document.querySelector("#palavraCriptografada").select();
    
    document.execCommand("copy");
    
   
    


}
