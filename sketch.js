const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint= Matter.Constraint;

var engine,world, box1, ball, rope, mon;
var bgImg;
var ground;

function preload() {
  bgImg = loadImage('images/GamingBackground.png');
  
}


function setup() { 
  createCanvas(3000,600); 
  engine=Engine.create();
  world=engine.world;
  
  //For ground
  ground = new Ground(170,580,1500,20);

  //boxes
  box1=new Stack(20,500,300,20);
  
  //ball
  ball = new Hero(200,200,200,200);
  
  //rope
  rope = new Rope(ball.body,{x:500,y:50});

  mon = new Monster(400,400,200,200);


  // console.log(myObject);
  // console.log(myObject.position.y);

 
}
  function draw() { 
    background (bgImg);
    Engine.update(engine);
    box1.display();
    ball.display();
    rope.display();
    ground.display();
    mon.display();
    
    
}
  

function mouseDragged(){
  Body.setPosition(ball.body,{x:mouseX,y:mouseY});

}