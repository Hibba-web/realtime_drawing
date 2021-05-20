noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550 , 550);
    canvas.position(580,170);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose', getPoses );
}

function draw(){
    background('#808080');

    fill('#e4c3fa');
    stroke('#e4c3fa');
    square(noseX , noseY , difference);
}

function modelLoaded(){
    console.log("Your Posenet Model has been loaded!!");
}

function getPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX= results[0].pose.nose.x ;
        noseY= results[0].pose.nose.y ;
        console.log("nose X =  " + noseX + "nose Y =  " + noseY );

        rightWristX= results[0].pose.rightWrist.x ;
        leftWristX= results[0].pose.leftWrist.x ;
        difference= leftWristX - rightWristX ;
        console.log("rightWrist X =  " + rightWristX + "LefyWrist Y =  " + leftWristX + "difference =   " + difference );

        document.getElementById("disply_px").innerHTML = difference ;
    }
}
