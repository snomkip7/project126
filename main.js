function setup(){
    video = createCapture(VIDEO);
    video.size(550, 450);
    video.hide();
    
    canvas = createCanvas(550, 450);
    canvas.center();
}
function draw(){
    image(video, 0, 0, 550, 450);
}