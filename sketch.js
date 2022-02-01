var bg,bg2,form,system,code,security;
var score=6;

function preload() {
  sports = loadImage("aladdin_cave.jpg");
  coding = loadImage("aladdin_cave2.jpg");
  reward = loadImage("treasure.jpg");
  animal = loadImage("images.jpg.jpg");
  ceo = loadImage("ceo.jpg");
  gk = loadImage("gk.jpg");
}

function setup() {
  createCanvas(1000,500);
  system = new System();
 
}


function draw() {
  
  if(score >= 0 && score <=3) {
    clear()
    background(coding);
    clueStage1();
    stageCoding = new Stage1();
    stageCoding.display1();  
  }
  
  textSize(20);
  fill("black");
  text("Score: " + score, 450, 50);

  if(score >= 3 && score <=6) {
    clear()
    background(sports);
    clueStage2();
    stageSports = new Stage2();
    stageSports.display2();
  }
  if(score >=6 && score <=9) {
    clear()
    background(animal);
    clueStage3();
    stageAnimal = new Stage3();
    stageAnimal.display3();
  }
  if(score >=9 && score <=12) {
    clear()
    background(gk);
    clueStage4();
    stageGk = new Stage3();
    stageGk.display4();
  }
  if(score >=12 && score <=15) {
    clear()
    background(animal);
    clueStage3();
    stageAnimal = new Stage3();
    stageAnimal.display3();
  }
  drawSprites()
}