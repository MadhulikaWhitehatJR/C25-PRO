class Dustbin{

	constructor(x,y,width,height){
		var options ={
			isStatic:true
		}
	this.width = width;
	this.height = height;
	this.image=loadImage("trashcangreen.png");
	this.body = Bodies.rectangle(x,y,width,height,options);

	
	World.add(world, this.body);
   
	}

	display(){
        var pos = this.body.position;
		
		push()
		translate(pos.x, pos.y);
		rectMode(CENTER)
		fill(255,0,255)
		imageMode(CENTER);
		image(this.image, 0,0,this.r, this.r)
		pop()
		
	}
}