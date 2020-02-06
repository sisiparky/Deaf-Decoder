// Video
let video;

let classifier;

// STEP 1: Load the model!
function preload() {
  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2LY6Zvxw/');
}

function setup() {
  createCanvas(640, 520);
  // Create the video
  video = createCapture(VIDEO);
  video.hide();

  // STEP 2: Start classifying
}

// STEP 2 classify!

function draw() {
  background(0);

  // Draw the video
  image(video, 0, 0);

  // STEP 4: Draw the label
}


// STEP 3: Get the classification!
