
// Crie uma variável canvas
var canvas = new fabric.Canvas('myCanvas');
//Defina as posições iniciais da bola e do buraco.
ballY=0;
ballX=0;
holeY=400;
holeX=800;

blockImageWidth = 5;
blockImageHeight = 5;

function loadImg(){
	// Escreva o código para enviar a imagem da bola de golfe ao canvas
	fabric.image.fromURL("golf-h.png", function(Img) {
		holeObj = Img;
		holeObj.scaletoWidth(50);
		holeObj.scaletoHeight(50);
		holeObj.set({
			tp:holeY,
			left:holeX
		});
		canvas.add(holeObj);
	});
	newImage();
}

function newImage()
{
	// Escreva o código para enviar a imagem da bola ao canvas
	fabric.image.fromURL("ball.png", function(Img) {
		ballObj = Img;
		ballObj.scaletoWidth(50);
		ballObj.scaletoHeight(50);
		ball.set({
			top:ballY
			left:ballX
		});
		canvas.add(ballObj);
	})
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Verifique a condição das imagens da bola e do buraco para finalizar o jogo. 
	E se a id coordenadas coincidem, para remover a imagem da bola
	e exibir "Você atingiu o objetivo!!!" 
	além de tornar a borda do canvas vermelha 'red'. */
	if((ballX==holeX)&&(ballY==holeY)){
		canvas.remove(ballObj)
	}
	document.getElementById("h3").innerHTML="Você atingiu o objetivo!!!";
	document.getElementById("myCanvas").style.borderColor="red";

	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
    function up()
{
		if(ballY >=0)
    {
        playerY = playerY - blockImageHeight;
        console.log("altura da imagem do bloco = " + blockImageHeight);
        console.log("Quando a tecla irecional Cima for pressionada, X = " + playerX + " , Y = "+playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}

	function down()
	{
		if(ballX <=500)
		{
			ballY = ballY + blockImageHeight;
			console.log("altura da imagem do bloco = " + blockImageHeight);
			console.log("Quando a tecla irecional Baixo for pressionada, X = " + ballX + " , Y = "+ballY);
			canvas.remove(ballObj);
			ballUpdate();
		}
	}

	function left()
	{
		if(ballX >5)
		{
			ballX = ballX - blockImageWidth;
			console.log("altura da imagem do bloco = " + blockImageWidth);
			console.log("Quando a tecla irecional Esquerda for pressionada, X = " + ballX + " , Y = "+ballY);
			canvas.remove(ballObj);
			ballUpdate();
		}
	}

	function right()
	{
		if(ballX <=1050)
		{
			ballX = ballX + blockImageWidth;
        console.log("altura da imagem do bloco = " + blockImageWidth);
        console.log("Quando a tecla irecional Direita for pressionada, X = " + ballX + " , Y = "+ballY);
        canvas.remove(ballObj);
        ballUpdate();
		}
	}
	
}

