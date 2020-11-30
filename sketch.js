//git test tests
//test daniel
// test leco 
// hoi
// ewa
function setup() {
  createCanvas(800, 600);
  menu = new Menu();
}

function draw() {
  background(34, 117, 188);
  menu.menu()
}

class Menu {
  
  constructor() {
    
    
  }
  
  menu(){
    
    this.background(255)
    this.button(75, this.page1);
    this.button(75 + 105 + 75);
    this.button(75 + 105 + 75 + 105 + 75);
    this.button(75 + 105 + 75 + 105 + 75 + 105 + 75);
    
  }
  
  button(x) {
    var y = 472.5
    stroke(color(0, 170, 255));
    strokeWeight(6);
    fill(0);
    rect(x, y, 105, 105);
    
  }
  
  
  background(color){
    
    noStroke();
    fill(color)
    rect(0, 450, 800, 150)
    
  }
  
}
