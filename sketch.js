//Create variables here
var dog
var happyDog
var database
var foodS
var foodStock
var dogImg, dogImg1
var dog
function preload()
{
  //load images here
  dogImg1 = loadImage("dogImg.png")
  dogImg = loadImage("dogImg1.png")
}

function setup() {
  
  database = firebase.database()
  
  createCanvas(500, 500);
  dog = createSprite(250, 250, 10, 10)
  dog.addImage(dogImg)
  dog.scale = 0.3

  foodStock = database.ref('Food');
  foodStock.on("value", readStock)
}


function draw() {  
  background(rgb(46, 139, 87))
  
  // adding controls
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1)
    
  }
  drawSprites();
  textSize(20)
    stroke("black")
    fill("white")
    text("Press the Up Arrow Key to feed the dog", 50, 20)
    text("Food Left: "+ foodS, 50, 50)
}

//function to read data from the database
function readStock(data){
  foodS = data.val()
}
function writeStock(x){

if(x<= 0 ){
  x =0
} else {
x = x-1
}
  database.ref('/').update({
  Food: x
})
}
