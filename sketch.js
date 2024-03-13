let player1,player2;
let box;
let floor;
let nxt = false
let a = [];
let i = 0

function preload(){
	floor = new Group()
	floor.collider  = 's'
	floor.w = 50
	floor.h = 50
	floor.tile = '='
	floor.color = 'gray'
	floor.friction = 6

	pressure = new Group()
	pressure.collider = 'n'
	pressure.w = 50
	pressure.h = 50
	pressure.tile = 'p'
	pressure.color = 'red'

	door = new Group()
	door.collider = 'n'
	door.w = 50
	door.h = 50
	door.tile = 'd'
	door.color = 'pink'

	a =[[
		'=============================================',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=======                                     =',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=                                          d=',
		'=                        p                 d=',
		'=============================================',],
	  [	'=============================================',
	    '=                                           =',
	    '=                                           =',
	    '=                                           =',
	    '=                                           =',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=======                                     =',
		'=                                          d=',
		'=                                          d=',
		'=                                   =========',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=      p                                    =',
		'=============================================',]

]
	mapCurrent = new Tiles(a[i],
		floor.w/2,
		floor.h/2,
		50,50
)


}
function setup() {
	new Canvas(1920,1080, 'fullscreen');
    world.gravity.y = 10

	//Players
	player1 = new Sprite(150,390,80,80,'d');
    player1.color = 'blue'
	player1.friction = 7
	player1.rotationLock = true

	player2 = new Sprite(250,390,80,80,'d');
    player2.color = 'purple'
	player2.friction = 7
	player2.rotationLock = true

	//Box
	box = new Sprite(canvas.w/3,canvas.h/2,80,80,'d')
	box.friction = 1
	box.rotationLock = true
	box.color = 'orange'
}

function draw() {
	background(100);
	if(player1.x>960&&player1.x<1290){
	camera.x = player1.x 
} else if(player1.x<960){
	camera.x = 960
} else if(player1.x>1290){
	camera.x = 1290
}

	//controls

	if(kb.pressing('a')){
		player1.vel.x = -6
	}

	if(kb.presses('w') && player1.colliding(floor)){
		player1.vel.y = -10
	}

	if(kb.presses('w') && player1.colliding(player2)){
		player1.vel.y = -10
	}

	if(kb.pressing('d')){
		player1.vel.x = 6
	}

	if(kb.pressing(LEFT_ARROW)){
		player2.vel.x = -6
	}

	if(kb.presses(UP_ARROW) && player2.colliding(floor)){
		player2.vel.y = -10
	}

	if(kb.presses(UP_ARROW) && player2.colliding(player1)){
		player2.vel.y = -10
	}

	if(kb.pressing(RIGHT_ARROW)){
		player2.vel.x = 6
	}

	//pressure plate
	if(box.overlapping(pressure)){
		nxt = true
	} else {
		nxt = false
	}

	//door

	if(player1.overlapping(door) || player2.overlapping(door)){
		if(nxt == true){
			i++
	mapCurrent.removeAll()
	player1.x = 150
	player1.y = 390
	player2.x = 250
	player2.y = 390
	box.x = canvas.w/2
	mapCurrent = new Tiles(a[i],
		floor.w/2,
		floor.h/2,
		50,50
)
mapCurrent.layer = 0
		}
	}
}
