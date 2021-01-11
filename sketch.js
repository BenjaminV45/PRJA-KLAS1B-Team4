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
let container;
let history = [0];
var last_page = -1;
let Himage = 1

var rad;
let theta;
let current = 0;
let sectionSize;
let size = 125;
let colors = [];
let spinning = false;
let spinButton;
let backC, prevC;
let total = 4;
let selectedIndex = 0;
let spinningSound;
var counter = 1;

const mouse = () => createVector(mouseX - width / 2, mouseY - height / 2);
const pmouse = () => createVector(pmouseX - width / 2, pmouseY - height / 2);


function preload(){

  Logo = loadImage(images + "/logo.png");
  Handleiding = [
    loadImage(images + "handleiding/handleiding1.png"),
    loadImage(images + "handleiding/handleiding2.png"),
    loadImage(images + "handleiding/handleiding3.png"),
    loadImage(images + "handleiding/handleiding4.png"),
    loadImage(images + "handleiding/handleiding5.png")
  ]

  icon = [
    loadImage(images + "icons/1.png"),
    loadImage(images + "icons/2.png"),
    loadImage(images + "icons/3.png"),
    loadImage(images + "icons/4.png")
  ]
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
   spinningSound = loadSound('assets/sounds/spinningWheel.wav');
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

class Rad {
  constructor() {
    size = (height * .8) / 4;
    sectionSize = (TWO_PI / total);

    this.loadColors();
    backC = color(51);
    this.drawRad();
  }

  drawButton() {
    spinButton = createButton("START!");
    spinButton.mousePressed(() => {
      if (!spinning) {
        current = random(TWO_PI);
        theta = 0;
        rk = int(random(1));

        let force = random(0.4, 0.5);
          
        if (random(1) > 0.5)
          force *= -1;
          
        theta += force;
        counter++;
        rk = int(random(0,5));
        spinningSound.play();
      }
      spinning = true;
    });
    spinButton.addClass("button");
    spinButton.position(520, 158);
  }

  drawRad () {
    if (backC); {
      image(Minigame[rk], 77, 63);
    }
    
    translate(600, 235);

    current += theta;

    theta *= .99;
    
    if (theta < 0.001 && theta > -0.001) {
      theta = 0; 
      spinning = false;
      spinningSound.stop();
    }

    this.drawSpinner();
    this.drawCircle();
    this.drawArcs();
  } 

  drawCircle() {
    circle(0, 0, 322, 322);
    strokeWeight(3);
    stroke('#231f20');
    rotate(current);
  }

  drawSpinner() {
    fill('#231f20');
    push();
    strokeWeight(3);
    stroke('#231f20');
    translate(0, -204);
    rotate(2.35);
    fill(255)
    triangle(15, 15, 30, -30, -15, -15);
    pop();
  }

  drawArcs() {
    for (let i = 0; i < total; i++) {
      push();
      let t = ((i) / total) * TWO_PI;
      let prev = t - sectionSize;
      rotate(t);
      let c = colors[i];
      c.setAlpha(255);
      let cot = current + (120 * TWO_PI);
      let me = ((cot) % TWO_PI) - sectionSize;
      let sw = 4;
      let astroke = 1;
      let strokeCol = 200;

      if (me > prev && me < t) {
        prevC = c;
        selectedIndex = i;
        c.setAlpha(190);
        sw = 6;
        astroke = 4;
        strokeCol = color('#231f20');
      }
      push();
      rotate(-QUARTER_PI);
      let n = 0;

      rotate(sectionSize / 2);
      translate(size * 1.6 + n, size * 1.6 + n);
      rotate(-QUARTER_PI);
      rotate(PI);
      rotate(HALF_PI);
      stroke(0);
      strokeWeight(sw);
      fill('#231f20');
      pop();
      
      fill(c);
      stroke(strokeCol);
      strokeWeight(astroke);
      arc(0, 0, 322, 322, 0, 322, PIE);
      pop();
    }
  }

  loadColors() {
    colors = [];
    var rainbowColors = [
      createVector(0, 0, 0).set(color('red').levels),
      createVector(0, 0, 0).set(color('green').levels),
      createVector(0, 0, 0).set(color('yellow').levels),
      createVector(0, 0, 0).set(color('blue').levels)
    ];
    
    for (var i = 0; i < total; i++) {
      var colorPosition = i / total;
      var scaledColorPosition = colorPosition * (rainbowColors.length);

      var colorIndex = floor(scaledColorPosition);
      var colorPercentage = scaledColorPosition - colorIndex;

      var nameColor = p5.Vector.lerp(
        rainbowColors[colorIndex],
        rainbowColors[colorIndex + 1],
        colorPercentage
      );
      colors.push(color(nameColor.x, nameColor.y, nameColor.z));
    }
  }
}

var bcreated = false;
var ccreated = false;
var radcreated = false;

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
  
    // console.log(history[history.length - 2]);  

    if(this.menuPage != 2)
    {
      if(last_page != this.menuPage)
        append(history, this.menuPage)

      last_page = this.menuPage;
    }

    switch(this.menuPage)
    {
      case -1: //loading screen
      {
          textSize(64);
          image(Logo, 240, 58.49, 333.0167, 333.0167);

          if(this.mouseClicked)
            this.menuPage = 0;
            this.removeCounter();

          break;
      }
      case 0:
        {
          this.removeContainer();
          textSize(40);
          this.removeRad();
          this.lijn();
          this.roundCounter();
          image(Gooiworp[rk], 77, 63);
          
          if(!bcreated)
            this.startKnop();
            break;
        }
        case 1:
        {
          this.removeCounter();
          this.removeContainer();
          this.lijn();
           rad = new Rad();
          if (!radcreated) {
            rad.drawButton();
            spinButton.show();
            radcreated = true;
          }
          break;
        }
        case 2:
        {        
          this.menuPage = history[history.length - 2];
          this.removeRad();
          // this.removeContainer();
          // textSize(32);
          // text('oof3', 10, 30);
          // image(Minigame[4], 10, 30);
          // button.remove();
          // bcreated = false;
          break;
        }
        case 3:
        {
          this.removeCounter();
          this.removeRad();
          if (mouseIsPressed) {
            if((mouseX > 462.5 && mouseX < 737.5) && (mouseY > 30 && mouseY < 420) ){
              this.menuPage = 4
            }
          }

          if(!ccreated){
            this.loadObjects();
          }
          
          break;
        }
        case 4:
          {
            this.removeCounter();
            this.removeContainer();
            this.removeRad();
            textSize(18);
            fill(0);
            noStroke();
            text('De handleding is te besturen met ← en → op je toetsenboord.', 150, 22)
            image(Handleiding[Himage], 127.035, 29.765, 545.9344, 390.47);
            bcreated = false;
            break;
          }
    }
  }

  // case 0 functies
  loadObjects() {
    container = createDiv('');
    container.style('position', 'absolute')
    container.style('width', '800px')
    container.style('height', '450px')
    container.style('color', 'white'); 
    container.style('top', '0px')
    container.style('left', '0px')


    var rightSide = createDiv('');
    rightSide.parent(container); 
    rightSide.style('font-size', '24px'); 
    rightSide.style('position', 'absolute')
    rightSide.style('width', '400px')
    rightSide.style('height', '450px')
    rightSide.style('color', 'white'); 
    rightSide.style('top', '0px')
    rightSide.style('left', '400px')

    var hBtn = createDiv('');
    hBtn.parent(rightSide); 
    hBtn.style('width', '275px');
    hBtn.style('position', 'absolute')
    hBtn.style('left', '62.5px');
    hBtn.style('top', '30px');
    hBtn.style('height', '390.47px')
    hBtn.style('background-image', 'url("./assets/images/handleiding/handleiding1.png")')
    hBtn.style('background-size', '100%')
    hBtn.style('border', 'none')
    // hBtn.mousePressed(this.goHandleiding);

    var leftSide = createDiv('');
    leftSide.parent(container); 
    leftSide.style('font-size', '24px'); 
    leftSide.style('position', 'absolute')
    leftSide.style('width', '400px')
    leftSide.style('height', '450px')
    leftSide.style('color', 'white'); 
    leftSide.style('top', '0px')
    leftSide.style('left', '0px')

    var block = createDiv('');
    this.blockStyle(block,leftSide,30)
    var icon = createDiv('');
    this.iconStyle(icon,block, '')
    var text = createDiv("Wanneer je op deze knop klint zul je verwezen worden naar de gooiworp kaarten. Deze worden met het klikken op de 'Volgende ronde!' button veranderd. Ook worden de rondes hier bijhehouden.");
    this.textStyle(text,block)

    var block1 = createDiv('');
    this.blockStyle(block1,leftSide,133)
    var icon1 = createDiv('');
    this.iconStyle(icon1,block1, '1')
    var text1 = createDiv("Wanneer je op deze knop klinkt zul je verwezen worden naar de minigame omgeving. Hier kun je met het klikken van 'START!' het rad draaien. In de handleiding kunt u hier meer uitleg over krijgen.");
    this.textStyle(text1,block1)

    var block2 = createDiv('');
    this.blockStyle(block2,leftSide,236)
    var icon2 = createDiv('');
    this.iconStyle(icon2,block2, '2')
    var text2 = createDiv('Met deze knop kun je terug gaan naar het onderdeel waar je vandaan kwam.');
    this.textStyle(text2,block2)

    var block3 = createDiv('');
    this.blockStyle(block3,leftSide,339)
    var icon3 = createDiv('');
    this.iconStyle(icon3,block3, '3')
    var text3 = createDiv('Wanneer je op deze knop klinkt zul je verwezen worden naar de uitleg van het spel. Hier wordt alles concreet uitgelegd zodat het spel optimaal gespeeld kan worden.');
    this.textStyle(text3,block3)

    
    ccreated = true
  }

  blockStyle(b,p,top){
    b.parent(p); 
    b.style('width', '345px')
    b.style('height', '75px')
    b.style('position', 'absolute')
    b.style('left', '60px');
    b.style('top', ''+top+'px');
    // b.style('background', 'white'); 
  }

  textStyle(t,p){
    t.parent(p); 
    t.style('font-size', '11.5px'); 
    t.style('position', 'absolute')
    t.style('width', '250px')
    t.style('height', '75px')
    t.style('color', 'black'); 
    t.style('top', '0px')
    t.style('right', '0px')
  }

  iconStyle(i, p, n){
    i.parent(p); 
    i.style('width', '63px')
    i.style('height', '63px')
    i.style('position', 'absolute')
    i.style('left', '0px');
    i.style('top', '0px');
    i.style('background', 'black'); 
    i.style('border-color', '#27aae1')
    i.style('border-width', '6px')
    i.style('border-style', 'solid')
    i.style('background-image', 'url("./assets/images/icons/icon'+n+'.svg")')
    i.style('background-size', '80%')
    i.style('background-repeat', 'no-repeat')
    i.style('background-position', 'center')
  }

  removeContainer() {
    if(container)
    {
      container.remove();
      ccreated = false;
    }
  }
  removeRad() {
    if(spinButton) {
      spinButton.remove();
      radcreated = false;
    }
  }
  removeCounter() {
    if(button)
    {
      button.hide();
      bcreated = false;
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
    // if(this.menuPage == -1)
    //   return;
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

    image(icon[0], 85, 483, 85, 85);
    image(icon[1], 265, 483, 85, 85);
    image(icon[2], 445, 483, 85, 85);
    image(icon[3], 625, 483, 85, 85);
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


function keyPressed() {
  if (keyIsDown(LEFT_ARROW)){
    if(Himage > 1){
      Himage--
    }
  }
  if (keyIsDown(RIGHT_ARROW)){
    if(Himage != 4){
      Himage++
      }
  }
}