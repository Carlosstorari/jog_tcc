


////////////////////////TRECHO A SER ACRECENTADO/////////////////

////////////////////fabrica de personagens
const criarPersonagem = (nome, srcTemp)=>{
	return{	nome: nome,
			x: canvas.width,
			y: 0,
			vida: false, 
			velocidade : 5,
			geraImg(){
				let img = new Image()
				img.src = srcTemp
				return img 
			}
		}
}

const personagensNome = ['Woody', 'Alien', 'Jessie', 'Zurg', 'Stinky']

const src = ['imagens/woody.png',
			'imagens/alien.png', 
			'imagens/jessie.png', 
			'imagens/zurg.png', 
			'imagens/stinky.png']

/////cria novos personagens apartir da fabrica
const adicionaNome_src = (nome, i) => criarPersonagem(nome, src[i])

const p = personagensNome.map(adicionaNome_src)
///////////////////////////////////////////////////////////////////////////////////
						
function inicializar(){
			//	intervalo="";

				alturaPaleta = 100;
				larguraPaleta = 40;
				posicaoJogadorX = 0;
				velocidadeJogador = 40;
				velocidadeJogadorY = 10;

				velocidadeWoody = 5;
				velocidadeAlien = 5;
				velocidadeJessie = 5;
				velocidadeZurg = 5;
				velocidadeStinky = 5;
				pontosJogador = 0;

				j=Math.floor(Math.random() * 5);

				colisao = false;
				

				var canvas = document.getElementById("canvas");

				
				woodyPosX = canvas.width;
				alienPosX = canvas.width;
				jessiePosX = canvas.width;
				zurgPosX = canvas.width;
				stinkyPosX = canvas.width;

				woodyPosY = 0;
				alienPosY = 0;
				jessiePosY = 0;
				zurgPosY = 0;
				stinkyPosY = 0;

				woodyVida = false;
				alienVida = false;
				jessieVida = false;
				zurgVida = false;
				stinkyVida = false;

				posicaoJogadorX = (canvas.width-100) /2;//posicaoJogadorX = (canvas.width-larguraPaleta) /2;
				posicaoJogadorY = (canvas.height-20)+velocidadeJogadorY;//posicaoJogadorY = canvas.height - alturaPaleta;

				context = canvas.getContext("2d");

				//imagens
				fundojogo = new Image();
				fundojogo.src='imagens/nuvens.png';

				fundogameOver = new Image();
				fundogameOver.src='imagens/tv_chuviscada.jpg';

				fundoPause = new Image();
				fundoPause.src='imagens/fundo3.png';

				fundoEstrelado = new Image();
				fundoEstrelado.src='imagens/ceu_estrelado1.jpg';

				buzzFeliz = new Image();
				buzzFeliz.src='imagens/buzz_feliz.png';

				gameOver = new Image();
				gameOver.src='imagens/game_over_red.png';

				botao = new Image();
				botao.src='imagens/botao.png';

				botaoPlay = new Image();
				botaoPlay.src='imagens/jogar_nov.png';

				botaoPause = new Image();
				botaoPause.src='imagens/botao_pause.png';

				setasMouse = new Image();
				setasMouse.src='imagens/setas.png';

				buzz = new Image();
				buzz.src = 'imagens/buzz.png';

				woody = new Image();
				woody.src='imagens/woody.png';

				alien = new Image();
				alien.src='imagens/alien.png';

				jessie = new Image();
				jessie.src='imagens/jessie.png';

				zurg = new Image();
				zurg.src='imagens/zurg.png';

				stinky = new Image();
				stinky.src='imagens/stinky.png'
				
			
				document.addEventListener('keydown',keyDown);
				
				intervalo = setInterval(gameLoop,20);

			}
			

			function gameLoop(){
				context.clearRect(0,0,canvas.width,canvas.height);
				
				

				context.drawImage(fundojogo,0,0);


				context.drawImage(buzz,posicaoJogadorX,posicaoJogadorY-40);

				context.beginPath();
				context.fill();
				tempo();

				if(pontosJogador<0||(segundo==30&&pontosJogador==0)||(pontosJogador<10 && minuto==1)){
					j=-1;
					context.drawImage(fundogameOver,0,0);///////////////////////////////
					context.drawImage(gameOver,150,150);//////////////////////////////TELA DE GAME OVER
					context.drawImage(botao,330,300);//////////////////////////////////

					window.clearInterval(intervalo);
                    intervalo = "";
				}
				
				if((pontosJogador>=10 && segundo<59)||(pontosJogador>=10 && minuto==1)){
					j=-1;
					context.drawImage(fundoEstrelado,0,0);
					context.drawImage(buzzFeliz,10,50);
					context.drawImage(botaoPlay,350,210);
					
					context.font="22pt Showcard Gothic";
					context.fillStyle = 'white';
					context.fillText("Você conseguiu!!!", 280,50);

					context.font="10pt Arial";
					context.fillStyle = 'white';
					context.fillText("Novo Jogo", 360,300);

					window.clearInterval(intervalo);
                    intervalo = "";
				}

				

				if (woodyPosY<=canvas.height && j==0) {
					
					if(colisao == false){
						context.drawImage(woody,woodyPosX,woodyPosY);
						woodyPosY+=velocidadeWoody;
						
					}
					if(woodyPosY>=canvas.height){
						j=Math.floor(Math.random() * 5);
					}
					
				}
				else{
					
					woodyPosX= Math.floor(Math.random() * 600);
					woodyPosY=-10;

					
				}

				if(alienPosY<=canvas.height &&j===1){
					
					if(colisao == false){
						context.drawImage(alien,alienPosX,alienPosY);
						alienPosY+=velocidadeAlien;
					}	
					if(alienPosY>=canvas.height){
						j=Math.floor(Math.random() * 5);
					}
					
				}
				else{
					alienPosX=Math.floor(Math.random() * 600);
					alienPosY=-10;
					
				}

				if(jessiePosY<=canvas.height &&j===2){
					
					if(jessieVida == false){
						context.drawImage(jessie,jessiePosX,jessiePosY);
						jessiePosY+=velocidadeJessie;
					}	
					if(jessiePosY>=canvas.height){
						j=Math.floor(Math.random() * 5);
					}
					}
					else{
						jessiePosX= Math.floor(Math.random() * 600);
						jessiePosY=-10;
						
					}

				if(zurgPosY<=canvas.height &&j===3){
					
					if(zurgVida == false){
						context.drawImage(zurg,zurgPosX,zurgPosY);
						zurgPosY+=velocidadeZurg;
					}	
					if(zurgPosY>=canvas.height){
						j=Math.floor(Math.random() * 5);
					}
				}
				else{
					zurgPosX= Math.floor(Math.random() * 600);
					zurgPosY=-10;
					
				}

				if(stinkyPosY<=canvas.height &&j===4){
					
					if(stinkyVida == false){
						context.drawImage(stinky,stinkyPosX,stinkyPosY);
						stinkyPosY+=velocidadeStinky;
					}
					if(stinkyPosY>=canvas.height){
						j=Math.floor(Math.random() * 5);
					}	
					
					}
				
				else{
					stinkyPosX= Math.floor(Math.random() * 600);
					stinkyPosY=-10;
					
				}

				

				if(colisao==false)
				{
					if ((woodyPosX +10 >posicaoJogadorX && woodyPosX+10<posicaoJogadorX+larguraPaleta)&& (woodyPosY>=posicaoJogadorY &&woodyPosY<=posicaoJogadorY)) {	
				
						pontosJogador++;
						colisao=true;
						woodyVida = false;
						
						if(b==j){j=Math.floor(Math.random() * 5);}
					}
					if ((alienPosX +10>posicaoJogadorX && alienPosX+10<posicaoJogadorX+larguraPaleta)&& (alienPosY>=posicaoJogadorY && alienPosY<=posicaoJogadorY)) {	
						pontosJogador++;
						colisao=true;
						alienVida = false;
						
						if(b==j){j=Math.floor(Math.random() * 5);}
					}
					if ((jessiePosX+10>posicaoJogadorX && jessiePosX+10<posicaoJogadorX+larguraPaleta)&& (jessiePosY>=posicaoJogadorY && jessiePosY<=posicaoJogadorY)) {	
						pontosJogador++;
						colisao = true;	
						jessieVida = false;
						
						if(b==j){j=Math.floor(Math.random() * 5);}
					}
					if ((zurgPosX+10>posicaoJogadorX && zurgPosX+10<posicaoJogadorX+larguraPaleta)&& (zurgPosY>=posicaoJogadorY && zurgPosY<=posicaoJogadorY)) {	
						pontosJogador--;
						colisao = true;
						zurgVida = false;
						
						if(b==j){j=Math.floor(Math.random() * 5);}
					}	
					if ((stinkyPosX+10>posicaoJogadorX && stinkyPosX+10<posicaoJogadorX+larguraPaleta)&& (stinkyPosY>=posicaoJogadorY && stinkyPosY<=posicaoJogadorY)) {	
						pontosJogador--;
						colisao = true;
						stinkyVida = false;
						
						if(b==j){j=Math.floor(Math.random() * 5);}
					}	
					if(colisao == true){
						j=Math.floor(Math.random() * 5);
						colisao=false;
						
					}
					var b = j;
					

				}
			if(j!=-1){	
				context.font="32pt Arial";
				context.fillStyle = 'black';
				context.fillText(pontosJogador,canvas.width - 70,50);
				}

			}
			
			var milesimo = 0+"0";
			var segundo = 0+"0";
			var minuto = 0+"0";
			

			

			function tempo(){   
			   if (milesimo < 59){
			      milesimo++
			      if(milesimo < 10){milesimo = "0"+milesimo}
			   }else 
			      if(milesimo == 59 && segundo < 59){
			         milesimo = 0+"0";
			    segundo++;
			    if(segundo < 10){segundo = "0"+segundo}
			      }
			   if(segundo == 59 && milesimo == 59 && minuto < 23){
			      milesimo = 0+"0";
			      segundo = 0+"0";
			      minuto++;
			      if(minuto < 10){minuto = "0"+minuto}
			   }else 
			      if(segundo == 59 && milesimo == 59 && minuto == 23){
			         milesimo = 0+"0";
			    segundo = 0+"0";
			    minuto = 0+"0";
			      }
			   form.cronometro.value = minuto +":"+ segundo +":"+ milesimo

			   if(milesimo == 5){
			            play();
			        }
				
			}

			function keyDown(e){
				if (e.keyCode == 37) {
					if (posicaoJogadorX > 0) {
						posicaoJogadorX -= velocidadeJogador;
					}
					
				}
				if (e.keyCode == 39) {
					if (posicaoJogadorX<(canvas.width-larguraPaleta)) {
						posicaoJogadorX += velocidadeJogador;
					}
				}

				if (e.keyCode == 38) {
                	if(posicaoJogadorY <= (canvas.height+ 70)){
                    	posicaoJogadorY -= velocidadeJogadorY;
                	}
                	if(posicaoJogadorY < canvas.height -450){	
                    	posicaoJogadorY += velocidadeJogadorY;
                	}
            	}

            	if (e.keyCode == 40) {
                	if(posicaoJogadorY >= (canvas.height+ 70)){
                    	posicaoJogadorY += velocidadeJogadorY;
                	}
                	if(posicaoJogadorY < canvas.height-10){
                    	posicaoJogadorY += velocidadeJogadorY;
                    	
                	}
            	}

            	if (e.keyCode == 80){
            		
            		if(intervalo!=""){
            			context.drawImage(fundoPause,0,0);
            			context.drawImage(botaoPause,330,210);
            			context.font="10pt Arial";
						context.fillStyle = 'white';
						context.fillText("Aperte (P) para voltar ao jogo", 295,350);

	            		window.clearInterval(intervalo);
	                    intervalo = "";
                    }
                    else{
                    	intervalo = setInterval(gameLoop,20);
                    }
            	}
				
				if (e.keyCode == 32){
					if(intervalo!=""){
            			context.drawImage(fundoPause,0,0);
            			context.drawImage(setasMouse,510,10);
            			context.font="12pt Arial";
						context.fillStyle = 'white';
						context.fillText("Tente pegar o seus amigos e evitar os inimigos usando as teclas:", 50,50);
						
						context.font="12pt Arial";
						context.fillStyle = 'white';
						context.fillText("Amigos:", 50,120);
						context.drawImage(woody,110,100);
						context.drawImage(alien,160,100);
						context.drawImage(jessie,210,100);

						context.font="12pt Arial";
						context.fillStyle = 'white';
						context.fillText("Inimigos:", 400,120);
						context.drawImage(zurg,470,100);
						context.drawImage(stinky,520,100);

						context.font="12pt Arial";
						context.fillStyle = 'white';
						context.fillText("Cada Amigo que o Buzz conseguir pegar lhe dará 1 ponto", 50,250);
						context.fillText("E cada Inimigo que o Buzz conseguir pegar vai tirar 1 ponto", 50,280);
						context.fillText("O objetivo é fazer 10 pontos em menos de um minuto", 50,310);
	            		window.clearInterval(intervalo);
	                    intervalo = "";
                    }
                    else{
                    	intervalo = setInterval(gameLoop,20);
                    }
					
				}

			}

			function clickOnUI() {

        		window.location.reload();///////////ATUALIZA A PAGINA NA HORA QUE CLICA NO CANVAS

     		 }

			