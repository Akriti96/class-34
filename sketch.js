const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var engine, world;

function preload(){

}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;

 
  
 

  
	

  

}
function draw() {
  background("black"); 
  Engine.run(engine);
}


