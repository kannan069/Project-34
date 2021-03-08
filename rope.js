class Rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness: 1.25,
            length: 400
        }

        this.bodyA = bodyA;
        this.pointB = pointB;

        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB
        push()
        stroke(255);
        strokeWeight(0)
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop()
    }
}