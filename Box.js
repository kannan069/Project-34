class Box{
    constructor(x, y, width,height){
        var options={
            restitution:0.5,
            friction:1.0,
            density:0.05
        }
       this.width=width;
       this.height=height;
       
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255,255,0);
        rect(0,0,this.width,this.height);
        pop();
    }
}