class Ball {
    constructor(x, y, radius,maxsides) {
      var options = {
          isstatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2,
          
        
      }
      this.body = Bodies.circle(x, y, radius,options);
      this.radius = radius;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      
      
      rectMode(CENTER);
      fill(255,255,255);
      
      

      circle(pos.x,pos.y, this.radius);
      pop();
    }
  };


  