var nosex = 0;
var nosey = 0;

function preload(){
clownNose=loadImage ("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    video.size(300,300);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
   image(video,0,0,300,300);
   image(clownNose,nosex,nosey,30,30); 
}
function modelLoaded(){
    console.log ("poseNet foi inicializado");
}
function gotPoses(results){
if(results.length > 0){
    console.log(results);
    console.log("nariz x: "+results[0].pose.nose.x);
    console.log("nariz y: "+results[0].pose.nose.y);
    console.log("olho direito x: "+results[0].pose.rightEye.x);
    console.log("olho direito y: "+results[0].pose.rightEye.y);
    console.log("olho esquerdo x: "+results[0].pose.leftEye.x);
    console.log("olho esquerdo y: "+results[0].pose.leftEye.y);
    nosex= results[0].pose.nose.x-15;
    nosey= results[0].pose.nose.y-15;
}
}
function takeSnapshot(){
    save("imagempessoa.png");
}
