function preload() {
}

function setup() {
    canvas = createCanvas(230,230);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
}

function take_snapshot() {
    save("filter face  Image.png");
}

function modelLoaded() {
    console.log('Posenet is Initialized');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
    
    
}
