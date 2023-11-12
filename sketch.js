var box;

function setup() {
  createCanvas(600,600);
  box = createSprite (300, 300, 30, 30);
}

function draw() {
  background(30);

  if (keyIsDown(RIGHT_ARROW)) {
    box.position.x = box.position.x + 1;
  }

  if (keyIsDown(LEFT_ARROW)) {
    box.position.x = box.position.x - 1;
  }

  if (keyIsDown(UP_ARROW)) {
    box.position.y = box.position.y - 1;
  }

  if (keyIsDown(DOWN_ARROW)) {
    box.position.y = box.position.y + 1;
  }

  drawSprites();

}




