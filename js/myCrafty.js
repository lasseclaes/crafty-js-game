//form HTML
//Crafty.init(500,350, document.getElementById('game'));
Crafty.init(500,500, document.getElementById('game'));
Crafty.background("yellow");
/*
Crafty.audio.add({
  lajaSounds: ["sounds/whatislove8bit.mp3"]
});*/
Crafty.audio.add("lajaMusic", "sounds/whatislove8bit.mp3");
//Crafty.audio.play('lajaMusic');

var player = Crafty.e("2D");
    player.onMouseDown = function(e) {
        Crafty.log(e.mouseButton, e.realX, e.realY);
        Crafty.audio.play('lajaMusic');
    };
Crafty.addEvent(player, Crafty.stage.elem, "mousedown", player.onMouseDown);

/*Crafty.e("2D, Color, Canvas, Fourway, Gravity").attr({
  x: 10,
  y: 10,
  h: 50,
  w: 50
}).color('green').fourway(50).gravityConst(2750).gravity('Floor');*/

Crafty.sprite(16, 'images/mySprite.png', {
  stone: [0, 0]
})

for (var i = 0; i < 100; i++){
  let stone = Crafty.e("2D, Canvas, stone").attr({
    x: 0 + i*16,
    y: 100,
    h: 16,
    w: 16
  });
}

/*let stone = Crafty.e("2D, Canvas, stone").attr({
  x: 100,
  y: 100,
  h: 16,
  w: 16
});*/

let mario = Crafty.e("2D, Color, Canvas, Twoway, Gravity, Collision").attr({
  x: 10,
  y: 10,
  h: 50,
  w: 50
}).color('green').twoway(100, 1000).gravityConst(2750).gravity('platform').checkHits('enemy').bind('HitOn', function(hitData){
  console.log(hitData);
  hitData[0].obj.destroy();
  //alert("hit");
});

let platform = Crafty.e("2D, Color, Canvas, platform").attr({
  x: 0,
  y: 480,
  h: 10,
  w: 500
}).color('blue');

let enemy = Crafty.e("2D, Color, Canvas, Gravity, Collision, enemy").attr({
  x: 400,
  y: 400,
  h: 50,
  w: 50
}).color('red').gravity('platform');
