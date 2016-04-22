var game = new Phaser.Game(400, 490, Phaser.AUTO, 'gameDiv');

Array.prototype.random = function(){
  return this[Math.floor(Math.random()*this.length)];
}
var bens = [
    'ben',
    'ben2',
    'ben3'
];


var bootState = {
    preload: function () {
        for(var ben of bens) {
            game.load.spritesheet(ben, `assets/bird/${ben}.png`, 68, 48, 3);
        }

        game.load.image('pipeTop', 'assets/pipe/top.png');
        game.load.image('pipeBottom', 'assets/pipe/bottom.png');

        game.load.image('background', 'assets/background.png');

        game.load.image('logo', 'assets/logo.png');

        game.load.audio('jump', 'assets/jump.wav');
    },

    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.state.start('menu');
    }
};