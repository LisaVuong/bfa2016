Shard[] shards = {};
PImage title;
PImage disp1, disp2, disp3;

void setup() {
  size($(window).width(), $(window).height());
  //size(5860, 1080, P2D);
  //frameRate(30);
  //hint(ENABLE_RETINA_PIXELS);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
  for (int i = 0; i < 50; i++) {
    shards = (Shard[]) append(shards, new Shard());
  }
  title = loadImage("images/title.png");
}

void draw() {
  background(240, 29, 8);
  for (int i = 0; i < 50; i++) {
    shards[i].display();
    shards[i].move();
  }
  //image(title, (width - title.width/2)/2, (height - title.height/2)/2, title.width/2, title.width/2);
  //image(title, (width - title.width)/2, (height - title.height)/2);
  //saveFrame("frames3/####.tif");
//  disp1 = get(0, 0, 1920, 1080);
//  disp2 = get(1970, 0, 1920, 1080);
//  disp3 = get(3940, 0, 1920, 1080);
//  disp1.save("frames_left/" + nf(frameCount, 4) + ".tif");
//  disp2.save("frames_mid/" + nf(frameCount, 4) + ".tif");
//  disp3.save("frames_right/" + nf(frameCount, 4) + ".tif");
//  if (frameCount > 7199) {
//    exit();  
//  }
}

void restart() {
	shards = {};
	for (int i = 0; i < 50; i++) {
	    shards = (Shard[]) append(shards, new Shard());
	  }
	
}

class Shard {
  float x1, x2, x3, y1, y2, y3;
  float xPos, yPos;
  int xDir, yDir, rDir;
  float xSpd, ySpd, rSpd;
  float deg;
  float w, h;
  color col;
  
  //PShape shard;

  Shard() {
//    x1 = random(0, 2*width/3);
//    x2 = random(x1 - (width/6), x1 + (width/6));
//    x3 = random(min(x1, x2), max(x1, x2));
	if (width > height) {
		x1 = random(0, width);
	    x2 = random(0, width);
	    x3 = random(0, width);
	    y1 = random(-(width-height/2), height + (width-height/2));
	    y2 = random(-(width-height/2), height + (width-height/2));
	    y3 = random(-(width-height/2), height + (width-height/2));			
	} else {
		x1 = random(0, height);
	    x2 = random(0, height);
	    x3 = random(0, height);
	    y1 = random(-(height-width)/2, width + (height-width)/2);
	    y2 = random(-(height-width)/2, width + (height-width)/2);
	    y3 = random(-(height-width)/2, width + (height-width)/2);
	}
    
    //shard = createShape(TRIANGLE, x1, y1, x2, y2, x3, y3);
    //w = shard.getWidth();
    w = max(x1, x2, x3) - min(x1, x2, x3);
    //h = shard.getHeight();
    h = max(y1, y2, y3) - min(y1, y2, y3);
    xPos = random(-w, width+1);
    yPos = random(-h, height+1);
    xDir = int(random(0, 2));
    if (xDir == 0) {
      xDir = -1; 
    }
    yDir = int(random(0, 2));
    if (yDir == 0) {
      yDir = -1; 
    }
    rDir = int(random(0, 2));
    if (rDir == 0) {
      rDir = -1; 
    }
    xSpd = random(0, .05);
    ySpd = random(0, .05);
    rSpd = random(0, .05);
    col = color(random(240, 300), random(60, 75), random(40, 60), random(0, 90));
  }
  
  void display() {
    fill(col);
    pushMatrix();
    translate(xPos - w/2, yPos - h/2);
    rotate(radians(deg));
    //shard.disableStyle();
    //shape(shard, -w/2, -h/2);
    triangle(x1, y1, x2, y2, x3, y3);
    popMatrix();  
  }
  
  void move() {
    xPos += xDir * xSpd;
    if (xPos > width + 1 || xPos < -w) {
      xDir = -xDir;  
    }
    yPos += yDir * ySpd;
    if (yPos > height + 1 || yPos < -h) {
      yDir = -yDir;  
    }
    deg += rDir * rSpd;
  }
  
}

