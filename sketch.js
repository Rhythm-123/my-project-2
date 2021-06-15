var brick1,brick2,brick3,brick4,brick5,brick6,brick7,brick8,brick9,brick10,sceneimg
function preload(){
  brick1image= loadImage("brick1.png")
  brick2image= loadImage("brick2.png")
  backgroundimage= loadImage("backg.jpg")
  marioimg=loadAnimation("Capture1.png","Capture3.png","Capture3.png")

}
function setup(){
  createCanvas(1500,1500)
  scene=createSprite(2400,1400,1500,600)
  scene.addImage(backgroundimage)


  mario=createSprite(200,800,50,50)
  mario.addAnimation("Capture",marioimg)
  var brick1 = createSprite(200,500,150,40)
  brick1.addImage(brick1image)
  var brick2 = createSprite(400,600,50,40)
  brick2.addImage(brick2image)
  brick2.scale= 0.5
  var brick3 = createSprite(450,200,650,30)
  brick3.addImage(brick1image)
  var brick4 = createSprite(340,200,60,70)
  brick4.addImage(brick1image)
  var brick5 = createSprite(678,410,150,90)
  brick5.addImage(brick1image)
  var brick6 = createSprite(820,500,850,4)
  brick6.addImage(brick2image)
  brick6.scale=0.5
  var brick7= createSprite(1200,400,150,10)
  brick7.addImage(brick1image)
  var brick8 = createSprite(950,880,1000,90)
  brick8.addImage(brick2image)
  var brick9 = createSprite(200,900,50,50)
  brick9.addImage(brick1image)
  var brick10 = createSprite(360,900,50,50)
  brick10.addImage(brick1image)
  

}
function draw(){
  background(backgroundimage)
  drawSprites()
}
