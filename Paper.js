class Paper {
    constructor(x,y,r) {
      var options = {
          isStatic: false, restitution:0.3,friction:0.5,denstiy:1.2
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r = r;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("pink");
      ellipse(pos.x, pos.y, this.r, this.r);
    }
  };