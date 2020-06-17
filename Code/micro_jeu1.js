let gameScene = new Phaser.Scene('Micro_jeu1');

var config = {
	type: Phaser.AUTO,
	width: 1280,
	height: 700,
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


	var cible1;
	var cible2;
	var cible3;
	
	var viseur;
	var cursor;
	
	var score = 0;
	
	var consigneText;
	
	var gameOver = false;
	
	


function preload(){
	this.load.image('murs','assets/murs.png');	
	this.load.image('viseur','assets/viseur.png');
	this.load.image('fond','assets/minijeu1fond.png');
	this.load.image('cible','assets/cible.png');
}

function create(){
	
//Background
	
	this.add.image(640,350,'fond');
	
//Cibles
	
	var cible1 = this.physics.add.image(180,250,'cible');
	var cible2 = this.physics.add.image(1000,200,'cible');
	var cible3 = this.physics.add.image(640,350,'cible');
	
//Murs
	
	var mur = this.physics.add.image(640,350,'murs');
	
//Consigne

consigneText = this.add.text(990, 180, '[VISEZ]', {fontSize: '70px', fill:'#fff'});
	

//Le joueur possède un viseur qu'il doit déplacer pour détruire les cibles


    var viseur = this.physics.add.image(600, 600, 'viseur')
        .setCollideWorldBounds(true);

    this.input.setDraggable(viseur.setInteractive());

        viseur.on('drag', function (pointer, dragX, dragY) {

            this.x = dragX;
            this.y = dragY;
        });
		

//Collision avec cible, quand viseur touche cible, cible disparait

	this.physics.add.overlap(viseur,cible1,detruireCible, null, this); //contact avec Cible1
	this.physics.add.overlap(viseur,cible2,detruireCible2, null, this); //contact avec Cible2
	this.physics.add.overlap(viseur,cible3,detruireCible3, null, this); //contact avec Cible3
	 
	 function detruireCible (viseur, cible1){
		 cible1.disableBody(true,true);
		 score += 1;
	 };

	 function detruireCible2 (viseur, cible2){
		 cible2.disableBody(true,true);
		 score += 1;
	 };

	 function detruireCible3 (viseur, cible3){
		 cible3.disableBody(true,true);
		 score += 1;
	 };
	 

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
	if(score == 3){
		consigneText.destroy();
		winText = this.add.text(430, 250, 'Gagner', {fontSize: '100px', fill:'#FFF'});
	}else{
		this.time.addEvent({
        delay: 10000,
        callback: ()=>{
		consigneText.destroy();
		gameText = this.add.text(430, 250, 'Perdu', {fontSize: '100px', fill:'#FFF'});
        },
        loop: false
      });
	}

}