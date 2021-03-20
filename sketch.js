const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var compartment1, compartment2, compartment3, compartment4, compartment5, compartment6;
var rock;
var chain1, chain2, chain3, chain4, chain5; 
function preload() {
   backgroundImage = loadImage("images/bg.jpg");
   train_crossing = loadSound("sound/train_crossing.mp3")
   train = loadSound("sound/train.mp3");


}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,380,1200,20);
   
    compartment1 = new Compartment(50,170,50,50);
    compartment2 = new Compartment(150,170,50,50);
    compartment3 = new Compartment(250,170,50,50);
    compartment4 = new Compartment(350,170,50,50);
    compartment5 = new Compartment(450,170,50,50);
    compartment6 = new Compartment(550,170,50,50);
    rock = new Rock(1100,350,100,100);
    chain1 = new Chain(compartment1.body,compartment2.body);
    chain2 = new Chain(compartment2.body,compartment3.body);
    chain3 = new Chain(compartment3.body,compartment4.body);
    chain4 = new Chain(compartment4.body,compartment5.body);
    chain5 = new Chain(compartment5.body,compartment6.body);
}

function draw(){
   
        background(backgroundImage);
    
    Engine.update(engine);
    compartment1.show();
    compartment2.show();
    compartment3.show();
    compartment4.show();
    compartment5.show();
    compartment6.show();
    rock.show();
    chain1.show();
    chain2.show();
    chain3.show();
    chain4.show();
    chain5.show();
    var collision = Matter.SAT.collides(compartment6.body, rock.body)
    var flag
    if(collision.collided){
        flag = 1
    }
    if(flag === 1){
        textSize(50);
        stroke(3);
        fill("cyan");
        text("CRASH", 500,200);
        train_crossing.play();
    }
}

function keyPressed(){
    if(keyCode === RIGHT_ARROW){
        Matter.Body.applyForce(compartment6.body, {x: compartment6.body.position.x, y: compartment6.body.position.y}, {x: 0.5, y: 0})
        train.play();
    }
}

