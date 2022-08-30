
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var angle1 = 30;
var angle2 = 45;
var angle3 = 60;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create()
	world = engine.world
	
	var plane_options={
	isStatic: true
	}
    
	var particle_options={
    restitution:0.9,
	friction:0.01	}

    Block1 = Bodies.rectangle(200,350,150,20,plane_options)
	World.add(world,Block1);
	fill("blue");
	Block2 = Bodies.rectangle(600,350,150,20,plane_options)
    World.add(world,Block2);
	
	
	plane = Bodies.rectangle(400,700,800,30,plane_options)
	World.add(world,plane);
	
	Spinner1 = Bodies.rectangle(400,150,150,30,plane_options)
	World.add(world,Spinner1);
	Spinner2 = Bodies.rectangle(400,150,150,30,plane_options)
	World.add(world,Spinner2);
	Spinner3 = Bodies.rectangle(400,150,150,30,plane_options)
	World.add(world,Spinner3);

	particle1 = Bodies.circle(400,10,10,particle_options)
	World.add(world,particle1);
	particle2 = Bodies.circle(379,10,10,particle_options)
	World.add(world,particle2);
	particle3 = Bodies.circle(421,10,10,particle_options)
	World.add(world,particle3);
	particle4 = Bodies.circle(389,21,10,particle_options)
	World.add(world,particle4);
	particle5 = Bodies.circle(411,21,10,particle_options)
	World.add(world,particle5);
	
	Engine.run(engine);
    rectMode(CENTER);
    ellipseMode(RADIUS) 		

}


function draw() {
  Engine.update(engine);
  background("black");
  rect(Block1.position.x,Block1.position.y,150,20);
  rect(Block2.position.x,Block2.position.y,150,20);
  
  rect(plane.position.x,plane.position.y,800,30);
  
  ellipse(particle1.position.x,particle1.position.y,20);
  ellipse(particle2.position.x,particle2.position.y,20);
  ellipse(particle3.position.x,particle3.position.y,20);
  ellipse(particle4.position.x,particle4.position.y,20);
  ellipse(particle5.position.x,particle5.position.y,20);
 
 
 
  Matter.Body.rotate(Spinner1,angle1)
  push();
  translate(Spinner1.position.x,Spinner1.position.y);
  rotate(angle1);
  rect(0,0,150,20);
  pop();
  angle1 +=10;

  Matter.Body.rotate(Spinner2,angle2)
  push();
  translate(Spinner2.position.x,Spinner2.position.y);
  rotate(angle2);
  rect(0,0,150,20);
  pop();
  angle2 +=30;

  Matter.Body.rotate(Spinner3,angle3)
  push();
  translate(Spinner3.position.x,Spinner3.position.y);
  rotate(angle3);
  rect(0,0,150,20);
  pop();
  angle3 +=10;




  drawSprites();
}
   

