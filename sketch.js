let player;
let box;
let floor;
let A1

function preload(){
	floor = new Group()
	floor.collider  = 's'
	floor.w = 50
	floor.h = 50
	floor.tile = '='
}

function setup() {
	new Canvas(1920,1080, 'fullscreen');
    world.gravity.y = 10

	//Player
	player = new Sprite(canvas.w/2,canvas.h/2,80,80,'d');
    player.color = 'blue'

	//Box
	box = new Sprite(canvas.w/3,canvas.h/2,80,80,'d')
	box.color = 'orange'
}

function draw() {
	background(100);
	if(kb.pressing('a')){
		player.x -= 10
	}
}