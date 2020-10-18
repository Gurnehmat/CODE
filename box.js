class box {
  constructor(x, y) {
    var options = {
        isStatic:true
    }
    this.body = Bodies.rectangle(x, y,20,100,options);
    this.width = 20;
    this.height = 100;
    
    World.add(world, this.body);
  }
  display()
  {
    rectMode(CENTER);
   // strokeWeight(4);
   // stroke("blue");
   // fill("red");
    rect(this.width, this.height);
    
  }
}

