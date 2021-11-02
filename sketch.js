var numero, numero1, numero2;

function setup() {
  createCanvas(400,400);
  numero = random(0,255);
  numero1 = random(0,255);
  numero2 = random(0,255);
  numero3 = random(0,255);
  numero4 = random(0,255);
  numero5 = random(0,255);
  caixa = createSprite(200,200,50,50);
 
  background("black");
}

function draw(){

if(keyDown(RIGHT_ARROW)){
  background(numero, numero1, numero2); 
}
if(keyDown(LEFT_ARROW)){
  background(numero3, numero4, numero5); 
}
drawSprites();
}