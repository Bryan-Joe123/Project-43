function setup(){
    createCanvas(400,400);
}

function draw(){
    background("black");

    hr=hour();
    mn=minute();
    sc=second();

    // angleMode(DEGREES);

    scAngle=map(sc,0,60,0,360);
    mnAngle=map(mn,0,60,0,360);
    hrAngle=map(hr,0,12,0,360);

    push();
    stroke(255,0,0);
    strokeWeight(7);
    translate(200,200);
    rotate(scAngle);
    line(0,0,100,0);
    pop();

    fill('rgba(255,0,0, 0)');
    stroke(255,0,0);
    strokeWeight(7);
    arc(200, 200, 300, 300, -90, scAngle);
    

    
    
    push();
    stroke(0,255,0);
    strokeWeight(7);
    translate(200,200);
    rotate(mnAngle);
    line(0,0,120,0);
    pop();

    fill('rgba(255,0,0, 0)');
    stroke(0,255,0);
    strokeWeight(7);
    arc(200, 200, 300+20, 300+20, -90, mnAngle);

    
    
    
    push();
    stroke(0,0,255);
    strokeWeight(7);
    translate(200,200);
    rotate(hrAngle);
    line(0,0,140,0);
    pop();

    fill('rgba(255,0,0, 0)');
    stroke(0,0,255);
    strokeWeight(7);
    arc(200, 200, 300+40, 300+40, -90, hrAngle);

}   