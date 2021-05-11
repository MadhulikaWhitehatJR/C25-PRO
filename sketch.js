const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj, paperObject,groundObject	
var world;

function setup() {
	createCanvas(1000,600);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	
	paperObject=new Paper(200,450,70);
	groundObject=new Ground(width/2,670,width,20);
	dustbinObj=new Dustbin(690,465);

	Engine.run(engine);
  
}


function draw() {
 rectMode(CENTER);
 background(230);
  Engine.update(engine);
 
  paperObject.display();
  groundObject.display();
  dustbinObj.display();

}


function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:60,y:-150});
    }
}