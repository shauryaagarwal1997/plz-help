var bg1,bg1I;
var appState=0;
var startBut;
var eng,hin,rus,chi,jap,spa;

function preload(){
bg1=loadImage("whitte.jpeg");
}
function setup(){
createCanvas(displayWidth-20,displayHeight-300);

startBut=createButton('LET\'S START')
startBut.size(250,50);
startBut.style('background','yellow')

 eng=createButton('ENGLISH')
  eng.size(250,50);
  eng.style('background','yellow')

  hin=createButton('HINDI')
  hin.size(250,50);
  hin.style('background','yellow')

  chi=createButton('CHINESE')
  chi.size(250,50);
  chi.style('background','yellow')

  jap=createButton('JAPANESE')
  jap.size(250,50);
  jap.style('background','yellow')

  spa=createButton('SPANISH')
  spa.size(250,50);
  spa.style('background','yellow')

  rus=createButton('RUSSIAN')
  rus.size(250,50);
  rus.style('background','yellow')


}
function draw(){
if(appState===0){
  background(bg1);
  startBut.position(width/2-180,height/2+80);
  textSize(60);
  fill("yellow");
  stroke("yellow")
  strokeWeight(2);
  text("BY USING THIS APP, YOU CAN CONVERT SPEECH",width/2-715,height/2-200)
  text("INTO TEXT IN 6 DIFFERENT LANGUAGES",width/2-580,height/2-100)

  startBut.mousePressed(()=>{
    appState=1;
  })
}
if(appState===1){
  background(bg1);
  startBut.hide();

  eng.position(width/2-330,height/2+80);
  hin.position(width/2-330,height/2+140);
  spa.position(width/2-330,height/2+200);

  jap.position(width/2+30,height/2+80);
  rus.position(width/2+30,height/2+140);
  chi.position(width/2+30,height/2+200);
  
  textSize(52);
  fill("yellow");
  stroke("yellow")
  strokeWeight(1.7);
  text("CHOOSE THE LANGUAGE IN WHICH THE SPEECH",width/2-635,height/2-230)
  text("IS TO BE TRANSLATED",width/2-330,height/2-150)

}
}