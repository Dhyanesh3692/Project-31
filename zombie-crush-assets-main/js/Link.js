class Link {
    constructor(bodyA,bodyB){
      var lastlink=bodyA.body.bodies.length - 2;
       this.link = Constranit.create({
       bodyA:bodyA.body.bodies[lastlink],
       pointA: {x:0 ,y:0},
       bodyB:bodyB.body,
       pointB:{x:0,y:0},
       length:10,
       stiffness:0.8
    });
   
    AudioWorkletNode.add(world.this.link);
   
    }
  
  
  
  
  