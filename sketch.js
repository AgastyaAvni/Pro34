//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStock;
var dogImg;



function preload()
{
  //load images here
  dogImg=loadImage("images/dogImg.png")
  happyDog=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500,500);
  
  dog=createSprite(200,200,20,20);
  dog.addImage(dogImg);


foodStock=database.ref('Food');
foodStock.on("value",readStock);

}


function draw() {  

background(46,139,87);

if(keyWentDown(UP_ARROW)){

writeStock(foodS);
dog.addImage(happyDog)

}


  drawSprites();
  //add styles here

}


function readStock(data){

foodS=data.val();

}

function writeStock(x){

if(x<=0){
x=0;
}else{

x=x-1;

}

dataBase.ref('/').update({

Food:x

})

}



