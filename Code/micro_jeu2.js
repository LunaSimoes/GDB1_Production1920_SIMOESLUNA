let gameScene = new Phaser.Scene('Micro_jeu2');

var config = {
	type: Phaser.AUTO,
	width: 700,
	height: 1280,
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
		update: update
	}
};

var game = new Phaser.Game(config);


	var Note1;
	var Note2;
	var Note3;
	
	var chrono;
	
	var pointer;
	
	var score = 0;
	var gameText;
	var winText;
	
	var perdu = true;
	
	var consigneText;
	
	


function preload(){	
	this.load.image('fond','assets/guitare.png');
	this.load.image('note','assets/note.png');
}

function create(){
	
//Background
	
	this.add.image(350,640,'fond');
	
	consigneText = this.add.text(200, 100, '[Detruisez]', {fontSize: '50px', fill:'#FFF'});
	
	//notes
	  
	  Note1 = this.add.image(180,300,'note').setInteractive().setVisible(false);
	  Note2 = this.add.image(600,640,'note').setInteractive().setVisible(false);
	  Note3 = this.add.image(200,1100,'note').setInteractive().setVisible(false);
	  

//Les notes apparaissent à certain moment du timer, quand on en détruit une on gagne 1 point. 
//Si on les détruit toute le micro-jeu est gagné, si on n'en loupe juste une on perd.
	  
	  // chronomètre
  
      this.time.addEvent({
        delay: 1000,
        callback: ()=>{
          chrono = this.add.text(50, 50, '9', {fontSize: '100px', fill:'#FFF'});
        },
        loop: false
      });
      this.time.addEvent({
        delay: 2000,
        callback: ()=>{
		chrono.destroy();
		chrono = this.add.text(50, 50, '8', {fontSize: '100px', fill:'#FFF'});
		  
		  Note1.setVisible(true); //La note apparait
          Note1.on('pointerdown', function (pointer) { //on clique dessus pour la faire disparaitre
		
		this.destroy();
		score += 1;

    })
		  
        },
        loop: false
      });
      this.time.addEvent({
        delay: 3000,
        callback: ()=>{
		chrono.destroy();
		chrono = this.add.text(50, 50, '7', {fontSize: '100px', fill:'#FFF'});
		  
		  Note1.setVisible(false);
		  
		  Note2.setVisible(true); //La note apparait
          Note2.on('pointerdown', function (pointer) { //on clique dessus pour la faire disparaitre
		
		this.destroy();
		score += 1;

    })
        },
        loop: false
      });
      this.time.addEvent({
        delay: 4000,
        callback: ()=>{
		chrono.destroy();
		chrono = this.add.text(50, 50, '6', {fontSize: '100px', fill:'#FFF'});
		  
		  Note2.setVisible(false);
		  
		  Note3.setVisible(true); //La note apparait
          Note3.on('pointerdown', function (pointer) { //on clique dessus pour la faire disparaitre
		
		this.destroy();
		score += 1;

    })
        },
        loop: false
      });
      this.time.addEvent({
        delay: 5000,
        callback: ()=>{
		chrono.destroy();
		chrono = this.add.text(50, 50, '5', {fontSize: '100px', fill:'#FFF'});
		
		  Note3.setVisible(false);
        },
        loop: false
      });
	  this.time.addEvent({
        delay: 6000,
        callback: ()=>{
		chrono.destroy();
		chrono = this.add.text(50, 50, '4', {fontSize: '100px', fill:'#FFF'});
		
		  Note3.setVisible(false);
        },
        loop: false
      });
	this.time.addEvent({
        delay: 7000,
        callback: ()=>{
		chrono.destroy();
		chrono = this.add.text(50, 50, '3', {fontSize: '100px', fill:'#FFF'});
        },
        loop: false
      });
	this.time.addEvent({
        delay: 8000,
        callback: ()=>{
		chrono.destroy();
		chrono = this.add.text(50, 50, '2', {fontSize: '100px', fill:'#FFF'});
        },
        loop: false
      });
	  this.time.addEvent({
        delay: 9000,
        callback: ()=>{
		chrono.destroy();
		chrono = this.add.text(50, 50, '1', {fontSize: '100px', fill:'#FFF'});
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
	if(score == 3){
		perdu == false;
		consigneText.destroy();
		winText = this.add.text(180, 400, 'Gagner', {fontSize: '100px', fill:'#FFF'});
	}
	
	//condition de défaite
	if (perdu == true){
		this.time.addEvent({
        delay: 10000,
        callback: ()=>{
		consigneText.destroy();
		gameText = this.add.text(180, 400, 'Perdu', {fontSize: '100px', fill:'#FFF'});
        },
        loop: false
      });
	}
	
}