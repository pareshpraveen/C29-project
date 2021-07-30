class Stone{
    constructor(x,y){
        var op = {
            isStatic : false,
        }
        this.body = Bodies.circle(x,y,20,op);
        World.add(world,this.body);


    }

    display(){
        fill("white");
        var pos = this.body.position;
        ellipse(pos.x,pos.y,40);
    }

}