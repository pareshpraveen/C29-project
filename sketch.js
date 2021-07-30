const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var rightwall;
var leftwall;
var stone;
//var jointlink;
//var bridge;


function setup() {
  createCanvas(1000,800);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  
  

  fill("#a57164");
  
  rightwall = new Base(10,400,400,200);

  leftwall = new Base(990,400,400,200);

  stone = new Stone(500,-10);


  //bridge = new Bridge();

  //jointPoint = new Base();


  //Composite.add(bridge,jointPoint);
  //jointlink = new Link(bridge,jointPoint);


}
function draw() {
  background("#353839");
  Engine.update(engine);


  rightwall.display();
  leftwall.display();
  stone.display();

/*
    for(var i = 0; i <=8;i++){
      var x = rendom(200,600);
      var y = rendom(-10,140);
      var stone = new Stone(x,y,40,40);
      stone.push(stone);
    }

/***/ 
  
  
}
