var options={
	isStatic:false,
	restitution:0.3,
	friction:0.5,
	density:1.2
}


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
dustbinImage=loadImage("dustbingreen.png")	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	dustbin1=new Dustbin(510,600,20,100)
	dustbin2=new Dustbin(710,600,20,100)
	dustbin3=new Dustbin(610,640,200,20)

	ground=new Ground(400,680,800,20)

	paper=new Paper(100,640,70)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");



  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
  
  ground.display()

  paper.display()
  image(dustbinImage,480,460,250,200)

  drawSprites();
 
}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:0.6,y:-0.6});	
	}
}



