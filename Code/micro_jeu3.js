let gameScene = new Phaser.Scene('Micro_jeu3');

var config = {
	type: Phaser.AUTO,
	width: 1280,
	height: 720,
	scene: gameScene,
	physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
	scene: {
		preload: preload,
		create: create,
		update: update,
	}
};

var game = new Phaser.Game(config);

var score = 0;
var consigneText;

function preload ()
{
    this.load.image('pic', 'assets/placard.png');
	this.load.image('radiocassette','assets/radiocassette.png');
    this.load.image('mask','assets/mask.png');
}

function create ()
{

    var pic = this.add.image(640, 360, 'pic');
	
	consigneText = this.add.text(500, 50, 'TROUVEZ', {fontSize: '50px', fill:'#FFF'});
	
	var radiocassette = this.add.image(900,600,'radiocassette').setInteractive()
	radiocassette.on('pointerdown', function (pointer){
		this.destroy();
		score += 1;
	}); //on clique sur la radio pour valider


    var spotlight = this.make.sprite({
        x: 400,
        y: 300,
        key: 'mask',
        add: false
    });

    pic.mask = new Phaser.Display.Masks.BitmapMask(this, spotlight);
	radiocassette.mask = new Phaser.Display.Masks.BitmapMask(this, spotlight);

    this.input.on('pointermove', function (pointer) {

        spotlight.x = pointer.x;
        spotlight.y = pointer.y;

    });
	
	// chronomètre
  
      this.time.addEvent({
        delay: 1000,
        callback: ()=>{
          chrono = this.add.text(1100, 50, '10', {fontSize: '100px', fill:'#FFF'});
        },
        loop: false
      });
	  this.time.addEvent({
        delay: 2000,
        callback: ()=>{
		chrono.destroy();
          chrono = this.add.text(1100, 50, '9', {fontSize: '100px', fill:'#FFF'});
        },
        loop: false
      });
	  this.time.addEvent({
        delay: 3000,
        callback: ()=>{
		chrono.destroy();
          chrono = this.add.text(1100, 50, '8', {fontSize: '100px', fill:'#FFF'});
        },
        loop: false
      });
	  	  this.time.addEvent({
        delay: 4000,
        callback: ()=>{
		chrono.destroy();
          chrono = this.add.text(1100, 50, '7', {fontSize: '100px', fill:'#FFF'});
        },
        loop: false
      });
	  	  this.time.addEvent({
        delay: 5000,
        callback: ()=>{
		chrono.destroy();
          chrono = this.add.text(1100, 50, '6', {fontSize: '100px', fill:'#FFF'});
        },
        loop: false
      });
	  	  this.time.addEvent({
        delay: 6000,
        callback: ()=>{
		chrono.destroy();
          chrono = this.add.text(1100, 50, '5', {fontSize: '100px', fill:'#FFF'});
        },
        loop: false
      });
	  	  this.time.addEvent({
        delay: 7000,
        callback: ()=>{
		chrono.destroy();
          chrono = this.add.text(1100, 50, '4', {fontSize: '100px', fill:'#FFF'});
        },
        loop: false
      });
	  	  this.time.addEvent({
        delay: 8000,
        callback: ()=>{
		chrono.destroy();
          chrono = this.add.text(1100, 50, '3', {fontSize: '100px', fill:'#FFF'});
        },
        loop: false
      });
	  	  this.time.addEvent({
        delay: 9000,
        callback: ()=>{
		chrono.destroy();
          chrono = this.add.text(1100, 50, '2', {fontSize: '100px', fill:'#FFF'});
        },
        loop: false
      });
	  	  this.time.addEvent({
        delay: 10000,
        callback: ()=>{
		chrono.destroy();
        },
        loop: false
      });
}

function update(){
		//condition de victoire
	if(score == 1){
		consigneText.destroy();
		winText = this.add.text(450, 250, 'Gagner', {fontSize: '100px', fill:'#FFF'});
	}
	
	//condition de défaite
	if (score <= 1){
		this.time.addEvent({
        delay: 10000,
        callback: ()=>{
		consigneText.destroy();
		gameText = this.add.text(450, 250, 'Perdu', {fontSize: '100px', fill:'#FFF'});
        },
        loop: false
      });
	}
	
}