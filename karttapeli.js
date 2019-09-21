let screen_height = 1500;
let screen_width = 800;

let tiles = [];
let natureitems = [];
let mapwidth = 500; //500
let mapheight = 400;
/*Load all images*/
let image_heart;
let health = 3;
let credits = 500;

/*Noicemap values*/
let value_c = 255;
let value_1 = 0.01;
let value_2 = 0.01;

/*Function to get and load values from DB*/
function gameLoader() {}

function preload() {
	image_heart = loadImage('assets/heart.png');
	image_tree = loadImage('assets/tree.png');
	image_player = loadImage('assets/animations/player_idle/player1.png');
}

function setup() {
	createCanvas(screen_height,screen_width);
	console.log(windowWidth,windowHeight);
	

	Generate();
	//let tile = new Tile(100,100);
	//tiles.push(tile)
}

function draw() {
	background(140, 111, 83);

	fill(50);
	rect(0, 740, 1500, 60);
	for (let i = 0; i < tiles.length; i++) {
		tiles[i].Draw();
	}

	for (let i = 0; i < natureitems.length; i++) {
		natureitems[i].Draw();
	}
	player.Draw();

	if (health > 2) { image(image_heart, 110, 740, 50, 50);}
	if (health > 1) { image(image_heart, 60, 740, 50, 50); } 
	if (health > 0) { image(image_heart, 10, 740, 50, 50); }

	textSize(32);
	fill(0, 102, 153);
	text('Credits: '+credits, 1250, 770);
	fill(200);
	text(key, 33, 65);

	/*Code to display noicemap*/
	/*
	for (var x = 0; x < mapwidth; x+=10) {
		for (var y = 0; y < mapheight; y+=10) {
			var c = 255 * noise(0.01 * x, 0.01 * y);
			fill(c);
			//console.log(c);
			rect(x, y, 10, 10);
		}		
  	}
  	*/

	
}

function keyPressed() {
	if (keyCode === UP_ARROW) { player.Move("UP");}
	if (keyCode === DOWN_ARROW) { player.Move("DOWN");}
	if (keyCode === LEFT_ARROW) { player.Move("LEFT");}
	if (keyCode === RIGHT_ARROW) { player.Move("RIGHT");}
}

function Generate() {
	value_c = document.getElementById("value_c").value;
	value_1 = document.getElementById("value_1").value;
	value_2 = document.getElementById("value_2").value;

	console.log("Noicemap values: "+value_c+" / "+value_1+" / "+value_2);

	tiles = [];
	natureitems = [];
	for (var x = 0; x < mapwidth; x+=10) {
			for (var y = 0; y < mapheight; y+=10) {
				var c = value_c * noise(value_1 * x, value_2 * y);
				//fill(c);
				//console.log(c);
				//rect(x, y, 10, 10);
				let tilex = x*3;
				let tiley = y*3;
				let tiletype = "placeholder";
				if (c < 500) {tiletype = "rockhard";}
				if (c < 230) {tiletype = "rock";}
				if (c < 180) {tiletype = "darkgrass";}
				if (c < 140) {tiletype = "grass";}
				if (c < 90) {tiletype = "sand";}
				if (c < 80) {tiletype = "water";}
				if (c < 70) {tiletype = "deepwater";}
				//console.log((c < 80));


				let tile = new Tile(tilex,tiley,tiletype);
				tiles.push(tile)
				//console.log(c);
			}		
	  	}	
}

class Tile {
	constructor(x,y,type) {
		this.x = x;
		this.y = y;
		this.size = 30;
		this.type = type;

		if (random(0, 100) > 80 && this.type == "grass") {
			//image(image_tree, this.x, this.y, 50, 50);
			//console.log("Tree added!")
			let natureobject = new Nature(this.x,this.y,"tree");
			natureitems.push(natureobject);
			console.log("Tree added!");
		}
	}

	Draw() {
		if (this.type == "rockhard") {fill(161, 161, 161)}
		if (this.type == "rock") {fill(194, 194, 194)}
		if (this.type == "placeholder") {fill(255,0,0);}
		if (this.type == "water") {fill(52, 177, 235);}
		if (this.type == "deepwater") {fill(52, 143, 235)}
		if (this.type == "grass") {fill(51, 181, 31);}
		if (this.type == "darkgrass") {fill(38, 145, 22)}
		if (this.type == "sand") {fill(255, 246, 143);}


		strokeWeight(0);
		rect(this.x, this.y, this.size, this.size);
	}

	Move() { /*This function moves all tiles (offsetting them)*/
		console.log("I move");
	}
}

class Nature {
	constructor(x,y,type) {
		this.x = x;
		this.y = y;
		this.type = type;
	}

	Draw() {
		image(image_tree, this.x-10, this.y-30, 50, 50);
	}
}

class Player {
	constructor(x,y) {
		this.x = x;
		this.y = y;
		this.speed = 30;
	}

	Draw() {
		image(image_player,this.x,this.y,50,65);
	}

	Move(dir){
		if (dir == "LEFT") {this.x -= this.speed}
		if (dir == "RIGHT") {this.x += this.speed}
		if (dir == "UP") {this.y -= this.speed}
		if (dir == "DOWN") {this.y += this.speed}
	}
}
let player = new Player(50,50);