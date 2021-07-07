var bgImg;
var spaceCraft;
var spaceCraftImg1, spaceCraftImg2, spaceCraftImg3, spaceCraftImg4;
var iss, issImg;
var hasDocked= false;

function preload(){

  /*bg= loadImage("space.jpg");
  issimg = loadImage("iss.png");
  scimg = loadImage("spacecraft1.png");
  scimg1 = loadImage("spacecraft2.png");
  scimg2= loadImage("spacecraft3.png");
  scimg3= loadImage("spacecraft4.png");*/

bgImg=loadImage("Docking-undocking/spacebg.jpg");

spaceCraftImg1=loadImage("Docking-undocking/spacecraft1.png");
spaceCraftImg2=loadImage("Docking-undocking/spacecraft2.png");
spaceCraftImg3=loadImage("Docking-undocking/spacecraft3.png");
spaceCraftImg4=loadImage("Docking-undocking/spacecraft4.png");

issImg=loadImage("Docking-undocking/iss.png");
}

function setup() {

  /*createCanvas(600, 350);
  spacecraft = createSprite(285,240);
  spacecraft.addImage(scimg);
  spacecraft.scale = 0.15;
  
  iss = createSprite(330,130);
  iss.addImage(issimg);
  iss.scale = 0.25;*/

  createCanvas(800,500);

  iss=createSprite(400, 180, 50, 50);
  iss.addImage(issImg);
  iss.scale=0.9;

  spaceCraft=createSprite(380, 350, 70, 70);
  spaceCraft.addImage(spaceCraftImg1);
  spaceCraft.scale=0.3;

}

function draw() {
  background(bgImg);

  //spaceCraft.addImage(spaceCraftImg1);

  if(!hasDocked){
      //spaceCraft.x = spaceCraft.x+2;
      if(keyDown(LEFT_ARROW)){
        spaceCraft.x=spaceCraft.x-2;
        spaceCraft.addImage(spaceCraftImg3);

        
      }

      if(keyDown(RIGHT_ARROW)){
        spaceCraft.addImage(spaceCraftImg4);
        spaceCraft.x=spaceCraft.x+2;
      }

      if(keyDown(DOWN_ARROW)){
        spaceCraft.addImage(spaceCraftImg2);
      }

      if(keyDown(UP_ARROW)){
        spaceCraft.addImage(spaceCraftImg2);
        spaceCraft.y=spaceCraft.y-2;
      }
  }

  /*if(spaceCraft.x===300 && spaceCraft.y===200){
    hasDocked=true;
    fill("white");

    textSize(25);
    text("Docking Successful!", 750, 350);
  }*/

  if(spaceCraft.y <= (iss.y+125) && spaceCraft.x <= (iss.x-5)){
     hasDocked = true; 
     
     textSize(25); 
     fill("white");
     text("Docking Successful!", 200, 400); 
    
    }

  drawSprites();
}