let game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
  preload: preload,
  create: create,
  update: update
});

let sprite;

function preload() {
  //scale the game 4x
  //game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
  //game.scale.setUserScale(4, 4);

  // enable crisp rendering
  //game.renderer.renderSession.roundPixels = true;
  //Phaser.Canvas.setImageRenderingCrisp(this.game.canvas)

  //Load spritesheet
  game.load.spritesheet('goku-idle', 'assets/sprites/goku-idle.png', 64, 54);
}

function create() {
  sprite = game.add.sprite(0, 0, 'goku-idle');

  sprite.animations.add('idle');

  sprite.animations.play('idle', 2, true);

  sprite.scale.x = 10;
  sprite.scale.y = 10;

  sprite.smoothed = false;
  //game.add.tween(sprite). to({x: game.width}, 10000, Phaser.Easing.Linear.None, true);
}

function update() {
}
