class Paper {
    constructor(x, y, radius) {
      var options = {
          restitution:0.3

          
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      this.image= loadImage("paper.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      ellipseMode(CENTER);
      fill("pink");
      image(this.image,pos.x, pos.y, this.radius, this.radius);
      pop();
    }
  };
  