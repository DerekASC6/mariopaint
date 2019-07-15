function setup() {
    createCanvas(500,500);
    background(18,23,84);
}
            
function mouseDragged(){
  fill(84,18,30);
  let x =random(15,60)
  let y=random(15,65)
  ellipse(mouseX,mouseY,x,y);
    
}
function draw() {
  mouseDragged();
}