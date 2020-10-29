const Engine = Matter.Engine;
const  World = Matter.World;
const  Events = Matter.Events;
const  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
var score = 0;
var particle = null;
var turn = 0;
var gameState = "PLAY";

function setup() {
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);


  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 75; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,75));
  }

  for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,175));
  }

  for (var j = 75; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,275));
  }

  for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,375));
  } 
}
 
function draw() {
  background("black");

  console.log(gameState);

  textSize(25);
  fill("white");
  text("Score : "+score,20,30);

  text("100",20,520);

  text("200",100,520);

  text("300",180,520);

  text("400",260,520);

  text("500",340,520);

  text("500",420,520);

  text("400",500,520);

  text("300",580,520);

  text("200",660,520);

  text("100",740,520);

  Engine.update(engine);
 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display(); 
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //100
  if(particle !== null){

    particle.display();

    if(particle.body.position.y > 760) {

      if(particle.body.position.x < 80 || particle.body.position.x > 720) {
        score = score + 100;
        particle = null;
        if(turn >= 5) {
          gameState = "END";
        }
      }
    }
  }

  //200
  if(particle !== null){

    particle.display();

    if(particle.body.position.y > 760) {

      if((particle.body.position.x > 80 && particle.body.position.x < 160)  || (particle.body.position.x > 640 && particle.body.position.x < 720)) {
        score = score + 200;
        particle = null;
        if(turn >= 5) {
          gameState = "END";
        }
      }
    }
  }

  //300
  if(particle !== null){

    particle.display();

    if(particle.body.position.y > 760) {

      if((particle.body.position.x > 160 && particle.body.position.x < 240 ) || (particle.body.position.x > 560 && particle.body.position.x < 660)) {
        score = score + 300;
        particle = null;
        if(turn >= 5) {
          gameState = "END";
        }
      }
    }
  }

  //400
  if(particle !== null){

    particle.display();

    if(particle.body.position.y > 760) {

      if((particle.body.position.x > 240 && particle.body.position.x < 320)  ||( particle.body.position.x > 480 && particle.body.position.x < 560)) {
        score = score + 400;
        particle = null;
        if(turn >= 5) {
          gameState = "END";
        }
      }
    }
  }

  //500
  if(particle !== null){

    particle.display();

    if(particle.body.position.y > 760) {

      if(particle.body.position.x > 320 && particle.body.position.x < 480) {
        score = score + 500;
        particle = null;
        if(turn >= 5) {
          gameState = "END";
        }
      }
    }
  }

  if(gameState === "END"){
    textSize(45);
    fill("white");
    text("GAME OVER",250,330);
  }
}

function mouseClicked() {
  if(gameState !== "END") {
    turn++;
    particle = new Particle(mouseX,10,10,10);
  }
}