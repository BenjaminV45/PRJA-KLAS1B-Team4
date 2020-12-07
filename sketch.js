//git test tests
//test daniel
// test leco 

var menu;
var Minigame; 
var assets = "./assets/"
var images = assets + "images/"
var counter = 1;
let button;


function preload(){
  // Preloading minigames cards :  image(Minigame[4], 10, 30);
   // Minigame = [
   // loadImage(images + "/minigames/[1] Minigame.png"),
   // loadImage(images + "/minigames/[2] Minigame.png"),
   // loadImage(images + "/minigames/[3] Minigame.png"),
   // loadImage(images + "/minigames/[4] Minigame.png"),
   // loadImage(images + "/minigames/[5] Minigame.png"),
   // loadImage(images + "/minigames/[6] Minigame.png")
   // ];

}

function setup() {
  createCanvas(800, 600);
  rk = int(random(0,5));
  menu = new Menu();

  
}

function draw() {
  background(34, 117, 188);
  
  menu.render();
}

var bcreated = false;

class Menu {
  
  constructor() {
    
    this.menuPage = 0;
    this.mouseClicked = false;
  }
  
  menu(){
    
    
    
  }
  
  render() {
    
    this.background(255)
  
    this.processInput();
    
    switch(this.menuPage)
    {
      case 0:
        {
          textSize(40);
          this.lijn();
          this.roundCounter();
          
          if(!bcreated)
            this.startKnop();
          
          

          break;
        }
        case 1:
        {
          textSize(32);
          text('oof2', 10, 30);
          button.hide();
          bcreated = false;
          break;
        }
        case 2:
        {
          textSize(32);
          text('oof3', 10, 30);
          // image(Minigame[4], 10, 30);
          button.remove();
          bcreated = false;
          break;
        }
        case 3:
        {
          textSize(32);
          text('oof4', 10, 30);
          button.remove();
          bcreated = false;
          break;
        }
    }
  }
  // case 0 functies
  roundCounter() {
    color(255);
    noStroke();
    textSize(50);
    text("RONDE", 500, 100);
    textSize(150);
    
    if (counter < 10 ) {
      text(counter, 550,250);
    }
    else{
      text(counter, 500, 250);
    }
  }
  startKnop(){
    //image(Minigame[rk], 50, 50);
    var startButton;

      startButton = 'Volgende ronde!'
      button = createButton(startButton);
      
    button.position(540, 350);
    button.mousePressed(this.opteller);
    
    bcreated = true;

    
  }
  opteller(){
    if (mouseIsPressed) {
      counter++;
      rk = int(random(0,5));
      
      console.log(rk)
      // image(Minigame[rk], 10, 30);

    }
      
  }
  lijn() {
    stroke(color(0))
    strokeWeight(4)
    line(398, 50, 398, 400)
  }
  
  processInput() {

    if(this.isButtonHovered(75))
    {
      this.button(75, 472.5, 50);
      
      if(this.mouseClicked)
      {
          this.menuPage = 0;
      }
    }
    else
      this.button(75);
    
    if(this.isButtonHovered(75 + 105 + 75))
    {
      this.button(75 + 105 + 75, 472.5, 50);
      
      if(this.mouseClicked)
      {
          this.menuPage = 1;
      }
    }
    else
      this.button(75 + 105 + 75);
    
    if(this.isButtonHovered(75 + 105 + 75 + 105 + 75))
    {
      this.button(75 + 105 + 75 + 105 + 75, 472.5, 50);
      
      if(this.mouseClicked)
        this.menuPage = 2;
    }
    else
      this.button(75 + 105 + 75 + 105 + 75);
      
    if(this.isButtonHovered(75 + 105 + 75 + 105 + 75 + 105 + 75))
    {
      this.button(75 + 105 + 75 + 105 + 75 + 105 + 75, 472.5, 50);
      
      if(this.mouseClicked)
        this.menuPage = 3;
    }
    else
      this.button(75 + 105 + 75 + 105 + 75 + 105 + 75);
  
  }
  
  isButtonHovered(x, y = 472.5) {
    
      return ((mouseX >= x && mouseX <= (x + 105)) && (mouseY >= y && mouseY <= (y + 105)));
    
  }
  
  button(x, y = 472.5, f = 0) {
    stroke(color(0, 170, 255));
    strokeWeight(6);
    fill(f);
    rect(x, y, 105, 105);
    
  }
  
  background(color){
    
    noStroke();
    fill(color)
    rect(0, 450, 800, 150)
    
  }
  
}

function mousePressed()
{
  menu.mouseClicked = true;
  
}

function mouseReleased() {
  menu.mouseClicked = false;
}

