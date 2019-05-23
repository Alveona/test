var game;

function giocoa() {

game = new Phaser.Game(1000, 700, Phaser.CANVAS, 'gioco2', { preload: preload, create: create, update: update});



function preload() {

    game.load.image('sky', 'assets2/grottaseria.png');
    game.load.image('ground', 'assets2/platform.png');
    game.load.image('star', 'assets2/cristallo.png');
    game.load.image('altro', 'assets2/sasso.png');
    game.load.image('lampada', 'assets2/lampada.png');
    game.load.spritesheet('dude', 'assets2/aladintop.png', 137, 173);
game.load.spritesheet('bottoneinizio', 'assets2/bottoneinizio.png');
}

var numero;
var lampada;
//var currentStatus = "giocofede";
var player;
var platforms;
var cursors;
var v;
var stars;
var time;
var timeText;
var timer;
var bottoneinizio;
var stars2;

var altro;
var text2= 0 ;
var g = 0;
var text = 0;


function create() {

time = 30;
//game.paused = true;
game.paused=true;
game.world.setBounds(0, 0, 8000, 700);
game.add.tileSprite(0, 0, 8000, 700, 'sky');

cursors = game.input.keyboard.createCursorKeys();
    v = 450;
    game.physics.startSystem(Phaser.Physics.ARCADE);


jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    platforms = game.add.group();

   platforms.enableBody = true;


  //  var ground = platforms.create(0, game.world.height - 1, 'ground');

//    ground.scale.setTo(8, 2);

//    ground.body.immovable = true;

    var ledge = platforms.create(700, 510, 'ground');
    ledge.body.immovable = true;

    ledge = platforms.create(1250, 350, 'ground');
    ledge.body.immovable = true;

    ledge = platforms.create(1900, 510, 'ground');
    ledge.body.immovable = true;

    ledge = platforms.create(2400, 350, 'ground');
    ledge.body.immovable = true;

    ledge = platforms.create(2850, 190, 'ground');
    ledge.body.immovable = true;

    ledge = platforms.create(3450, 350, 'ground');
    ledge.body.immovable = true;

    ledge = platforms.create(3900, 190, 'ground');
    ledge.body.immovable = true;

    ledge = platforms.create(3900, 510, 'ground');
    ledge.body.immovable = true;

    ledge = platforms.create(4600, 350, 'ground');
    ledge.body.immovable = true;

    ledge = platforms.create(5150, 510, 'ground');
    ledge.body.immovable = true;

    ledge = platforms.create(5650, 350, 'ground');
    ledge.body.immovable = true;

    ledge = platforms.create(6050, 510, 'ground');
    ledge.body.immovable = true;

    ledge = platforms.create(6050, 190, 'ground');
    ledge.body.immovable = true;

    ledge = platforms.create(6550, 350, 'ground');
    ledge.body.immovable = true;

    ledge = platforms.create(7050, 350, 'ground');
    ledge.body.immovable = true;

    ledge = platforms.create(7550, 190, 'ground');
    ledge.body.immovable = true;

  //  ledge = platforms.create(1580, 200, 'ground');
  //  ledge.body.immovable = true;

  //  ledge = platforms.create(1950, 510, 'ground');
  //  ledge.body.immovable = true;

    stars = game.add.group();

    stars.enableBody = true;

   for (var i = 0; i < 3; i++)
    {
         var star = stars.create(700+i * 120, 470, 'star');

       //star.body.gravity.y = 6;

        //star.body.bounce.y = 0.7 + Math.random() * 0.2;
    }

    stars2 = game.add.group();
    stars2.enableBody = true;

    for (var i = 0; i < 2; i++)
        {
             var star = stars.create(1250+i * 240, 310, 'star');

        }



    stars3 = game.add.group();
    stars3.enableBody = true;

    for (var i = 0; i < 3; i++)
        {
             var star = stars.create(2850+i * 120, 150, 'star');

        }

    stars4 = game.add.group();
    stars4.enableBody = true;

    for (var i = 0; i < 2; i++)
        {
           var star = stars.create(3450+i * 120, 310, 'star');

        }

    stars5 = game.add.group();
    stars5.enableBody = true;

    for (var i = 0; i < 2; i++)
    {
           var star = stars.create(3900+i * 120, 150, 'star');

    }

    stars6 = game.add.group();
    stars6.enableBody = true;

    for (var i = 0; i < 2; i++)
    {
                   var star = stars.create(4020+i * 120, 470, 'star');

      }

    stars7 = game.add.group();
    stars7.enableBody = true;

    for (var i = 0; i < 3; i++)
    {
               var star = stars.create(4600+i * 120, 310, 'star');

      }

  stars8 = game.add.group();
  stars8.enableBody = true;

  for (var i = 0; i < 2; i++)
    {
     var star = stars.create(5150+i * 120, 470, 'star');

    }

    stars9 = game.add.group();
    stars9.enableBody = true;

    for (var i = 0; i < 2; i++)
    {
           var star = stars.create(6170+i * 120, 470, 'star');

    }

    stars10 = game.add.group();
    stars10.enableBody = true;

    for (var i = 0; i < 2; i++)
    {
                   var star = stars.create(6050+i * 120, 150, 'star');

      }

    stars11 = game.add.group();
    stars11.enableBody = true;

    for (var i = 0; i < 3; i++)
    {
                   var star = stars.create(6550+i * 120, 310, 'star');

      }


cattivo = game.add.group();
cattivo.enableBody = true;
cattivo.create(1370, 310, 'altro');
cattivo.create(2020, 470, 'altro');
cattivo.create(2520, 310, 'altro');
cattivo.create(3690, 310, 'altro');
cattivo.create(4140, 150, 'altro');
cattivo.create(3900, 470, 'altro');
cattivo.create(5390, 470, 'altro');
cattivo.create(5770, 310, 'altro');
cattivo.create(6050, 470, 'altro');
cattivo.create(6290, 150, 'altro');
cattivo.create(7170, 310, 'altro');


lampada = game.add.sprite(7670, 150, 'lampada' );
game.physics.arcade.enable(lampada);


   player = game.add.sprite(32, game.world.height - 250, 'dude');

     game.physics.arcade.enable(player);

    player.body.bounce.y = 0;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;

    player.animations.add('left', [0, 1, 2, 3, 4, 5], 15, true);
    player.animations.add('right', [7, 8, 9, 10, 11, 12], 15, true);
    player.scale.x = 0.6;
    player.scale.y = 0.6;

    bottoneinizio = game.add.button(game.camera.x + (game.width/2), game.camera.y + (game.height/2), 'bottoneinizio', clickButton);
    bottoneinizio.anchor.setTo(0.5, 0.5);
    bottoneinizio.fixedToCamera = true;
    bottoneinizio.alpha = 0.6;

    function clickButton (){
    game.paused = false;
    game.input.onDown.add(updateCounter, this);
    bottoneinizio.pendingDestroy = true;
    timer.start();
    }

    text = game.add.text(200, 500, '', { font: '84px Arial', fill: '#fff', align: "center" });
    //game.time.events.add(Phaser.Timer.SECOND * 31, GameOver, this);
    text.fixedToCamera = true;
    text.cameraOffset.setTo(300, 250);
    timeText = game.add.text(30, 30, 'Tempo rimanente: ' + time, { font: '21px Arial', fill: '#fff', align: "center" });
    timer = game.time.create(true);
    timer.start();
    timeText.fixedToCamera = true;
    timer.loop(1000, updateCounter, this);

game.camera.follow(player);




}


function updateCounter() {
    game.paused = false;
    time--;
    timeText.text = 'Tempo rimanente: ' + time;
    if (time<=0) {
    //text.setText('HAI PERSO!');
    timer.stop()
    game.paused = true;
    setTimeout(goLeft1b, 2000);
}
    }

    function vinci() {
      game.paused = true;
     setTimeout(goLeft1a, 2000);
    }



function update() {



    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(stars, platforms);
    game.physics.arcade.collide(lampada, platforms);


     game.physics.arcade.overlap(player, stars, collectStar, null, this);
     game.physics.arcade.overlap(player, lampada, vinto, null, this);
     game.physics.arcade.overlap(player, cattivo, collectaltro, null, this);



    player.body.velocity.x = 0;


    function collectStar (player, star) {

        star.kill();
        v = v + 40;

    }

    function collectaltro (player, altro) {

        altro.kill();
          v = v - 100;

    }

    function vinto (player, lampada) {
        lampada.kill();
        //text.setText('HAI VINTO!');
        vinci();

    }



    if (cursors.left.isDown)
    {
        player.body.velocity.x = -v;

        player.animations.play('left');
    }
    else if (cursors.right.isDown)
    {

        player.body.velocity.x = v;

        player.animations.play('right');
    }
    else
    {
        player.animations.stop();

        player.frame = 6;
    }

     if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down))
    {
        player.body.velocity.y = -350;
    }



}



}

giocoa()
