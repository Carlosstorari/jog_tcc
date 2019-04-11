const desenhaPersonagem = (imgPersonagem ,posX ,posY, colisao, context, j)=>{
    let velocidadePersonagem
    if(colisao == false){
        context.drawImage(imgPersonagem,posX,posY);
        posY+=velocidadePersonagem;
        
    }
    if(posY>=canvas.height){
        j=Math.floor(Math.random() * 5);
    }
}

const validaPersonagem = (posY, canvas, j)=>{
    if (posY<=canvas.height && j==0){
        desenhaPersonagem(imgPersonagem ,posX ,posY, colisao, context, j) 
    } else{
    
        posX= Math.floor(Math.random() * 600);
        posY=-10;
    
        
    }
}
