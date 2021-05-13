class Paper {
    constructor (x,y){
        var options = {
            isStatic: false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.body = Bodies.circle(x,y,100,options);
        this.x = this.x;
        this.y = this.y;
        this.radius = 50;
        this.image = loadImage("paper.png");
        World.add(world,this.body);    
    }

    display(){
        var paperPos = this.body.position;
        push();
        translate(paperPos.x,paperPos.y);
        imageMode(CENTER);
        rectMode(CENTER);
        fill(255,0,255);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}