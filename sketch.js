
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var divisons = [];
var divisonsHeight= 300;
var particles=[];
var plinkos=[]; 
function preload()
{
	
}



function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	
	ground = new Ground(400,690,800,20);

  
  for (var i = 0; i<=width; i= i+80) {
divisons.push(new Division(i,height-divisonsHeight/2, 10, divisonsHeight));
  }
  for (var i=75; i<=width; i = i+50) {
plinkos.push(new Plinko(i, 75));
  }
  for (var i=50; i<=width-10; i=i+50) {
plinkos.push(new Plinko(i,175));
  }
  for (var i=75; i<=width; i=i+50) {
plinkos.push(new Plinko(i,275));
  }
  for (var i=50; i<=width-10; i=i+50) {
plinkos.push(new Plinko(i,375));
  }

  

 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  
  
  for (var i = 0; i<divisons.length; i++) {
    divisons[i].display();
  }
  if (frameCount %60 === 0) {
    particles.push(new Particle(random(width/2-30, width/2+30),10,10));
  }
  for (var i = 0; i<particles.length; i++) {
    particles[i].display();
  }
  for (var i = 0; i<plinkos.length; i++) {
    plinkos[i].display();
  }
  ground.display();
}



