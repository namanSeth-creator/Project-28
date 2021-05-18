
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree;

function preload()
{

}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
    world = engine.world;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree (200,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  Engine.update(engine);

  tree.diplay();
  drawSprites();

  
 
}



