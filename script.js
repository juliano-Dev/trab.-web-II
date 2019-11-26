//funcoes script 




//Tela

function Tela(width, height){
	this.canvas = document.createElement("canvas");
	this.canvas.width = this.width = width;
	this.canvas.height = this.height = height;
	this.contexto = this.convas.getContext("2d");

	document.body.appenChild(this.canvas);

};

Tela.prototype.drawSprite = function(sp, x, y,){
	this.contexto.drawImage(sp.x, sp.y, sp.w, sp.h, sp);

};




//Sprite (manipual imagem)
function Sprite(img, x, y, w, h){
	this.img = img;
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
};


//input (acoes dos botoes)
function Input(){
	this.down = {};
	this.pressed = {};

	var botao = this;
	document.addEventListener("keydown", function(evento){
		botao.down[evento.keyCode] = true;
	});

	document.addEventListener("keyup", function(evento){
		delete botao.down[evento.keyCode];
		delete botao.pressed[evento.keyCode];
	});
};	

Input.prototype.isDown = function(codigo){
	return this.down[codigo];

};
Input.prototype.isPressed = function(codigo){
	if(this.pressed[codigo]){
		return false;
	}
	else if(this.down[codigo]){
		return this.pressed[codigo] = true;
	}
	return false;
};

