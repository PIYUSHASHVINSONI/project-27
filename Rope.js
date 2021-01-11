class Rope {
    constructor(body1,body2,offsetX,offsetY) {
     
     this.offsetX = offsetX;
     this.offsetY = offsetY;
        var options = {
         bodyA : body1,
         bodyB : body2,
         pointB:{x:this.offsetX, y:this.offsetY}
      }
      this.body = Constraint.create(options);
      World.add(world, this.rope);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("black");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
  