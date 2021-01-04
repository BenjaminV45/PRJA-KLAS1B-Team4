//git test tests
//test daniel
// test leco 

var menu;
var Minigame; 
var Logo;
var assets = "./assets/"
var images = assets + "images/"
var counter = 1;
let button;

function preload(){

  Logo = loadImage(images + "/logo.png");

  // Preloading minigames cards :  image(Minigame[4], 10, 30);
   Minigame = [
   loadImage(images + "minigames/[1] Minigame.png"),
   loadImage(images + "minigames/[2] Minigame.png"),
   loadImage(images + "minigames/[3] Minigame.png"),
   loadImage(images + "minigames/[4] Minigame.png"),
   loadImage(images + "minigames/[5] Minigame.png"),
   loadImage(images + "minigames/[6] Minigame.png")
   ];

   Gooiworp = [
    loadImage(images + "gooiworpen/[1] Gooiworp.png"),
    loadImage(images + "gooiworpen/[2] Gooiworp.png"),
    loadImage(images + "gooiworpen/[3] Gooiworp.png"),
    loadImage(images + "gooiworpen/[4] Gooiworp.png"),
    loadImage(images + "gooiworpen/[5] Gooiworp.png"),
    loadImage(images + "gooiworpen/[6] Gooiworp.png"),
    loadImage(images + "gooiworpen/[7] Gooiworp.png"),
    loadImage(images + "gooiworpen/[8] Gooiworp.png"),
    loadImage(images + "gooiworpen/[9] Gooiworp.png"),
    loadImage(images + "gooiworpen/[10] Gooiworp.png"),
   ];

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
    
    this.menuPage = -1;
    this.mouseClicked = false;
  }
  
  menu(){
    
    
    
  }

  render() {
    
    this.background(255)
  
    this.processInput();
    
    switch(this.menuPage)
    {
      case -1: //loading screen
      {
          textSize(64);
          image(Logo, 240, 10, 300, 300);
          text('Press left click to start.', 70, 390);

          if(this.mouseClicked)
            this.menuPage = 0;

          if(button)
          {
            button.hide();
            bcreated = false;
          }

          break;
      }
      case 0:
        {
          textSize(40);
          this.lijn();
          this.roundCounter();
          image(Gooiworp[rk], 77, 63);
          
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
          image(Minigame[4], 10, 30);
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
    text("RONDE", 510, 100);
    textSize(150);
    
    if (counter < 10 ) {
      text(counter, 560,250);
    }
    else{
      text(counter, 515, 250);
    }
  }
  startKnop(){
    
    var startButton;
    let col = color('#03254c')
    let butcol = color('#0')
      startButton = 'Volgende ronde!'
      button = createButton(startButton);
      button.style('width', '220px')
      button.style('background-color', col);
      button.style('color', butcol);
      button.style('font-size', '25px',);
      button.style('border-radius', '10px')
      button.style('border-color', '#000')
      button.style('border-width', '4px')
      button.style('padding', '5px');
      button.style('position', 'absolute');
      button.style('top', '320px');
      button.style('left', '490px');
      button.mousePressed(this.opteller);
    
    bcreated = true;

    
  }
  opteller(){
    if (mouseIsPressed) {
      counter++;
      rk = int(random(0,5));
      
      console.log(rk)
      // image(Gooiworp[rk], 77, 63);

    }
      
  }
  lijn() {
    stroke(color(0))
    strokeWeight(4)
    line(398, 50, 398, 400)
  }
  
  processInput() {

    if(this.menuPage == -1)
      return;

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

