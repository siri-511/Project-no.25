
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperObject;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new Ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperObject = new Paper(200,600,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
	
  groundObject.display();
  dustbinObj.display();
  paperObject.display();
}

function keyPressed(){
	if (keyCode === 32){
		console.log(1);
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:2000,y:-2500})
	}

}

