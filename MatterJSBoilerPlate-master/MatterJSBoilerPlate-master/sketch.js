
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var rect1,ball1,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rect1 = new ground(400,80,780,80);
	ball1 = new paper(200,500,100);
	ball2 = new paper(80,500,100);
	ball3 = new paper(500,500,100);
	ball4 = new paper(280,500,100);
	ball5 = new paper(460,500,100);
	rope1= new rope(ball1.body,rect1.body,0,0);
	rope2= new rope(ball2.body,rect1.body,-200,0);
	rope3= new rope(ball3.body,rect1.body,150,0);
	rope4= new rope(ball4.body,rect1.body,100,0);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(150);
 rect1.display();
 ball1.display();
 ball2.display();
 ball3.display();
 ball4.display();
 ball5.display();
}



