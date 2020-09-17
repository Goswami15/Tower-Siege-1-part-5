
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var shooter;
var tar1,tar2,tar3,tar4,tar5,tar6,tar7,tar8,tar9,tar10,tar11,tar12,tar13,tar14,tar15,tar16,tar17,tar18,tar19,tar20,tar21,tar22,tar23,tar24,tar25,tar26,tar27,tar28;
var ground1,ground2;
var slingshot;
var ground3;


function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	shooter=new Shooter(300,200,25,25);
	 ground1=new Ground(320,320,220,10);
ground2=new Ground(638,275,150,10);
ground3=new Ground(400,380,800,10);

	 tar1=new target(235,250,35,35);
	 tar2=new target(270,250,35,35);
	 tar3=new target(305,250,35,35);
	 tar4=new target(340,250,35,35);
	 tar5=new target(375,250,35,35);
	 tar6=new target(410,250,35,35);
	 tar7=new target(252,220,35,35);
	 tar8=new target(287,220,35,35);
	 tar9=new target(322,220,35,35);
	 tar10=new target(357,220,35,35);
	 tar11=new target(392,220,35,35);
	 tar12=new target(269,180,35,35);
	 tar13=new target(304,180,35,35);
	 tar14=new target(339,180,35,35);
	 tar15=new target(374,180,35,35);
	 tar16=new target(286,140,35,35);
	 tar17=new target(321,140,35,35);
	 tar18=new target(356,140,35,35);

	 tar19=new target(584,266,35,35);
	 tar20=new target(619,266,35,35);
	 tar21=new target(654,266,35,35);
	 tar22=new target(689,266,35,35);
	 tar23=new target(601,226,35,35);
	 tar24=new target(636,226,35,35);
	 tar25=new target(671,226,35,35);
	 tar26=new target(618,186,35,35);
	 tar27=new target(653,186,35,35);
	 tar28=new target(635,146,35,35);


slingshot=new Slingshot(shooter.body,{x:100,y:200})

	
  
}


function draw() {
  
  background(0);
  Engine.update(engine);


//text(mouseX+","+mouseY,mouseX,mouseY);




ground1.display();
ground2.display();
ground3.display();


  shooter.display();
tar1.display();
tar2.display();
tar3.display();
tar4.display();
tar5.display();
tar6.display();
tar7.display();
tar8.display();
tar9.display();
tar10.display();
tar11.display();
tar12.display();
tar13.display();
tar14.display();
tar15.display();
tar16.display();
tar17.display();
tar18.display();

tar19.display();
tar22.display();
tar20.display();
tar21.display();
tar23.display();
tar24.display();
tar25.display();
tar26.display();
tar27.display();
tar28.display();

slingshot.display();

  
}
function mouseDragged(){
	Matter.Body.setPosition(shooter.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
	slingshot.fly();
}


