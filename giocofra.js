var game2;

function giocob() {

game2 = new Phaser.Game(1000, 700, Phaser.CANVAS, 'gioco1', { preload: preload2, create: create2, update: update2, render: render2 });


function preload2() {
    game2.load.image('lampada', 'assets/cuore.png');
    game2.load.image('sky', 'assets/sfondo.jpg');
    game2.load.image('bullet', 'assets/spada.png');
    game2.load.image('enemyBullet', 'assets/glow.png',);
    game2.load.spritesheet('invader', 'assets/mago.png', 160, 300);
    game2.load.spritesheet('aladin', 'assets/aladin.png', 160, 300);
    game2.load.spritesheet('kaboom', 'assets/explode.png', 128, 128);
    game2.load.spritesheet('bottoneinizio', 'assets/bottoneinizio.png');
}


var mago;
var lampada;
var player;
var aliens;
var bullets;
var bulletTime = 0;
var cursors;
var fireButton;
//var explosions;
var starfield;
var lives;
var enemyBullet;
var firingTimer = 2;
var stateText;
var livingEnemies = [];
var bottoneinizio;

function create2() {
  game2.paused = true;
  game2.world.setBounds(0, 0, 1000, 700);
  game2.add.tileSprite(0, 0, 1000, 700, 'sky');
  game2.physics.startSystem(Phaser.Physics.ARCADE);

    barra2 = new Phaser.Rectangle(10, 20, 150, 10);
    barra = new Phaser.Rectangle(10, 20, 150, 10);

    //  Our bullet group
    bullets = game2.add.group(100, 100, 'bullet');
    bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;
    bullets.createMultiple(30, 'bullet');
    bullets.setAll('anchor.x', 0.5);
    bullets.setAll('anchor.y', 0.5);
    bullets.setAll('outOfBoundsKill', true);
    bullets.setAll('checkWorldBounds', true);

    // The enemy's bullets
    enemyBullets = game2.add.group();
    enemyBullets.enableBody = true;
    enemyBullets.physicsBodyType = Phaser.Physics.ARCADE;
    enemyBullets.createMultiple(30, 'enemyBullet');
    enemyBullets.setAll('anchor.x', 0.5);
    enemyBullets.setAll('anchor.y', 1);
    enemyBullets.setAll('outOfBoundsKill', true);
    enemyBullets.setAll('checkWorldBounds', true);

    //  The hero!
    player = game2.add.sprite(400, 580, 'aladin');
    player.anchor.setTo(0.5, 0.5);
    player.scale.x = 0.3;
    player.scale.y = 0.3;
    game2.physics.enable(player, Phaser.Physics.ARCADE);

    player.body.collideWorldBounds = true;
    player.body.gravity.x = 200;
    player.animations.add('fly', [ 0, 1, 2, 3 ], true);
    player.play('fly');


    //  The baddies!
    aliens = game2.add.group();
    aliens.enableBody = true;
    aliens.physicsBodyType = Phaser.Physics.ARCADE;

    createAliens();

    //  The score
    scoreString = 'Jafar ';

    //  Lives
    lives = game2.add.group();
    game2.add.text(game2.world.width - 160, 20, 'Vite', { font: '25px Helvetica', fill: '#fff' });

    //  Text
    stateText = game2.add.text(game2.world.centerX,game2.world.centerY,' ', { font: '30px Arial', fill: '#fff' });
    stateText.anchor.setTo(0.5, 0.5);
    stateText.visible = false;

    for (var i = 0; i < 3; i++)
    {

      var lampada = lives.create(game2.world.width - 100 + (70 * i), 70, 'lampada');
      lampada.anchor.setTo(2.5, 0.5);
      lampada.alpha = 0.8;
    }


    //  An explosion pool
  //  explosions = game2.add.group();
  //  explosions.createMultiple(30, 'kaboom');
  //  explosions.forEach(setupInvader, this);


    //  And some controls to play the game2 with
    cursors = game2.input.keyboard.createCursorKeys();
    fireButton = game2.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    function createAliens () {

        for (var y = 0; y < 1; y++)
        {
            for (var x = 0; x < 1; x++)
            {
                var alien = aliens.create(x * 48, y * 80, 'invader');
                alien.anchor.setTo(0.5, 0.5);
                alien.scale.x = 0.3;
                alien.scale.y = 0.3;
                alien.animations.add('fly', [ 0, 1, 2, 3 ], true);
                alien.play('fly');
                alien.body.moves = false;
            }
        }

        aliens.x = 100;
        aliens.y = 50;

        //  All this does is basically start the invaders moving. Notice we're moving the Group they belong to, rather than the invaders directly.


        var tween = game2.add.tween(aliens).to( { x: 800 }, 2300, Phaser.Easing.Circular.In.Out, true, 0, 1000, true);

        //  When the tween loops it calls descend
        tween.onLoop.add(descend, this);
    }

    function setupInvader (invader) {

        invader.anchor.x = 0.5;
        invader.anchor.y = 0.5;
        invader.animations.add('kaboom');

    }

    function descend() {

        aliens.y += 5;

    }

    bottoneinizio = game2.add.button(game2.camera.x + (game2.width/2), game2.camera.y + (game2.height/2), 'bottoneinizio', clickButton);
bottoneinizio.anchor.setTo(0.5, 0.5);
    bottoneinizio.fixedToCamera = true;

}



function clickButton (){
game2.paused = false;
game2.input.onDown.add(start, this);
bottoneinizio.pendingDestroy = true;
start();
}

function start() {
game2.paused = false;
}

function perdi() {
  game2.paused = true;
  setTimeout(goLeft1b, 1000);
}

function vinci() {
  game2.paused = true;
  setTimeout(goLeft1a, 1000);
}

function update2() {


    if (player.alive)
    {
        //  Reset the player, then check for movement keys
        player.body.velocity.setTo(0, 0);

        if (cursors.left.isDown)
        {
            player.body.velocity.x = -200;
        }
        else if (cursors.right.isDown)
        {
            player.body.velocity.x = 200;
        }

        //  Firing?
        if (fireButton.isDown)
        {
            fireBullet();
        }

        if (game2.time.now > firingTimer)
        {
            enemyFires();
        }

        //  Run collision
        game2.physics.arcade.overlap(bullets, aliens, collisionHandler, null, this);
        game2.physics.arcade.overlap(enemyBullets, player, enemyHitsPlayer, null, this);
    }



}

function render2() {

    // for (var i = 0; i < aliens.length; i++)
    // {
    //     game2.debug.body(aliens.children[i]);
    // }
game2.debug.geom(barra2,'#5C304F');
game2.debug.geom(barra,'#B385DC');
}

function collisionHandler (bullet, alien) {
if( barra.width > 0 ) {
  // decrease the score
  barra.width -= 5;
  bullet.kill();
} else if (barra.width == 0) {

  bullet.kill();
  alien.kill();
  vinci();
}
    //  And create an explosion :)
    //var explosion = explosions.getFirstExists(false);
    //explosion.reset(alien.body.x, alien.body.y);
    //explosion.play('kaboom', 30, false, true);

}


function enemyHitsPlayer (player,bullet) {

    bullet.kill();

    live = lives.getFirstAlive();

    if (live)
    {
        live.kill();
    }

    //  And create an explosion :)
    //var explosion = explosions.getFirstExists(false);
    //explosion.reset(player.body.x, player.body.y);
    //explosion.play('kaboom', 30, false, true);

    // When the player dies
    if (lives.countLiving() < 1)
    {
        player.kill();
        enemyBullets.callAll('kill');
        perdi();



        //the "click to restart" handler
        //game2.input.onTap.addOnce(restart,this);
    }

}

function enemyFires () {

    //  Grab the first bullet we can from the pool
    enemyBullet = enemyBullets.getFirstExists(false);

    livingEnemies.length=0;

    aliens.forEachAlive(function(alien){

        // put every living enemy in an array
        livingEnemies.push(alien);
    });


    if (enemyBullet && livingEnemies.length > 0)
    {

        var random=game2.rnd.integerInRange(0,livingEnemies.length-1);

        // randomly select one of them
        var shooter=livingEnemies[random];
        // And fire the bullet from this enemy
        enemyBullet.reset(shooter.body.x, shooter.body.y);

        game2.physics.arcade.moveToObject(enemyBullet,player,400);
        firingTimer = game2.time.now + 2000;
    }

}

function fireBullet () {

    //  To avoid them being allowed to fire too fast we set a time limit
    if (game2.time.now > bulletTime)
    {
        //  Grab the first bullet we can from the pool
        bullet = bullets.getFirstExists(false);

        if (bullet)
        {
            //  And fire it
            bullet.reset(player.x, player.y + 8);
            bullet.scale.x = 1;
            bullet.scale.y = 1;
            bullet.body.velocity.y = -600;
            bullet.body.angularVelocity = 800;
            bullet.body.angularAcceleration = 500;
            bulletTime = game2.time.now + 200;
        }
    }

}

function resetBullet (bullet) {

    //  Called if the bullet goes out of the screen
    bullet.kill();

}

function restart () {

    //  A new level starts

    //resets the life count
    lives.callAll('revive');
    //  And brings the aliens back from the dead :)
    aliens.removeAll();
    createAliens();

    //revives the player
    player.revive();
    //hides the text
    stateText.visible = false;

}

}

giocob()
