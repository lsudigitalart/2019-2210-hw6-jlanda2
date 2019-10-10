let x1=1280,y1=10;
let squirrel;
let squirrels=[];
let caddys=[];
let flowers=[];
let birds=[];
let flower;
let bird;
let lake;
let icon=0;
let caddy;
var z=0;
//var magmaFont;
let txt = ["Click an image to start","Left click to place \nimage\n on background","Refresh to reset Canvas"]
function preload(){
    squirrel=loadImage('assets/squirrel0.png');
    lake=loadImage('assets/lake.jpg');
    caddy=loadImage('assets/caddy.png');
    flower=loadImage('assets/flower.png');
    bird=loadImage('assets/bird.png');
    //magmaFont=loadFont('assets/moon.ttf');
}
function setup(){
    createCanvas(1500,874);

}




function draw(){
    background(0);
    image(lake,0,0);
if(icon==0){
    stroke(random(50,60),random(145,155),random(40,50));
    strokeWeight(random(1,4));
    fill(random(100,110),0,random(200,210));
    textSize(85);
    textFont("Broadway");
    textAlign(CENTER);
    text(txt[0], 640, 100);
    textSize(85);
    textAlign(CENTER);
    text(txt[1], 640, 400);
    noStroke();
}
for(var i=0; i<squirrels.length;i++){
    squirrels[i].display();
}
for(var i=0; i<caddys.length;i++){
    caddys[i].displayC();
}
for(var i=0; i<flowers.length;i++){
    flowers[i].displayF();
}
for(var i=0; i<birds.length;i++){
    birds[i].displayB();
}
fill(0);
if(icon==1){
    fill("green");
}
rect(1280,10,120,103);
image(squirrel,1280,10,120,93,634,434,120,93);
fill(0);
if(icon==2){
    fill("green");
}
rect(1280,110,150,310);
push();
scale(.25);
image(caddy,5140,550);
pop();
fill(0);
if(icon==3){
    fill("green");
}
rect(1280,420,200,200);
image(flower,1280,420,200,200);
fill(0);
if(icon==4){
    fill("green");
}
rect(1280,620,200,300);
image(bird,1280,620,200,300)
//icon check
if ((mouseX>1280)&&(mouseX<1280+120)&&(mouseY>10)&&(mouseY<10+103)){
    if(mouseIsPressed){
        icon=1;
    }
}
if ((mouseX>1280)&&(mouseX<1280+150)&&(mouseY>120)&&(mouseY<400)){
    if(mouseIsPressed){
        icon=2;
    }
}
if ((mouseX>1280)&&(mouseX<1480)&&(mouseY>420)&&(mouseY<620)){
    if(mouseIsPressed){
        icon=3;
    }
}
if ((mouseX>1280)&&(mouseX<1680)&&(mouseY>620)&&(mouseY<920)){
    if(mouseIsPressed){
        icon=4;
    }
}
}





function createSquirrels(x,y){
    this.sx=x, this.sy=y;
    this.display=function(){
    image(squirrel,this.sx,this.sy,341,271,427,422,341,271);
    }
}
function createCaddys(cx,cy){
    this.cx1=cx, this.cy1=cy;
    this.displayC=function(){
    image(caddy,this.cx1,this.cy1,143,285);
    }
}
function createFlowers(fx,fy){
    this.fx1=fx, this.fy1=fy;
    this.displayF=function(){
    image(flower,this.fx1,this.fy1,200,200);
    }
}
function createBirds(bx,by){
    this.bx1=bx, this.by1=by;
    this.displayB=function(){
    image(bird,this.bx1,this.by1,200,300);
    }
}
//squirrel mouse pressed
 function mousePressed(){
    if(icon==1){
    if((mouseX>0)&&(mouseX<1280)&&(mouseY>0)&&(mouseY<854)){
            var s = new createSquirrels(mouseX-250,mouseY-50);
            squirrels.push(s);
}
}
if(icon==2){
    if((mouseX>0)&&(mouseX<1280)&&(mouseY>0)&&(mouseY<854)){
            var c = new createCaddys(mouseX-(299/4),mouseY-(769/4));
            caddys.push(c);
}
}
if(icon==3){
    if((mouseX>0)&&(mouseX<1280)&&(mouseY>0)&&(mouseY<854)){
            var f = new createFlowers(mouseX-(100),mouseY-(100));
            flowers.push(f);
}
}
if(icon==4){
    if((mouseX>0)&&(mouseX<1280)&&(mouseY>0)&&(mouseY<854)){
            var b = new createBirds(mouseX-(100),mouseY-(100));
           birds.push(b);
}
}
}
