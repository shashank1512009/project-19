var sonic,sonicimg

function preload(){
 
sonicimg=loadImage(sonic.gif)    

}

function setup() {
 createCanvas(1000,1000)
 sonic=createSprite(500,500,20,20);
 sonic=addImage(sonicimg);
}

function draw() {
 background("cyan");   
 drawSprites();
}