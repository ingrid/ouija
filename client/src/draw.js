import sprite from "../jam/sprite";

var draw;

export default draw = function(x, y){
  console.log("DRAW");
};

export var planchette = function(x, y){
  var can = document.createElement('canvas');
  var ctx = can.getContext('2d');
  var col = 'rgb(100, 100, 100)';

  can.width = 50;
  can.height = 50;

  ctx.fillSTyle = col;
  ctx.fillRect(0, 0, 50, 50);
  sprite.call(this, x, y);
  this.width = 50;
  this.height = 50;
  this.setImage(can.toDataURL(), 50, 50);
  this.on('update', function(dt){
    //console.log(this.image);
  });
};

planchette.prototype = new sprite(0, 0);

/** /
var planchette = function(x, y){
  //Make reticle seperate.
  var can = document.createElement('canvas');
  var ctx = can.getContext('2d');
  var col = color(r, g, b);

  can.width = 50;
  can.height = 50;

  ctx.fillSTyle = col;
  ctx.lineJoin = "round";
  ctx.lineWidth = cornerRadius;

  context.beginPath();
  context.moveTo(400, 60);
  context.lineTo(440, 140);
  context.lineTo(360, 140);
  context.closePath();
  context.stroke();
  context.fill();


  ctx.fillRect(0, 0, w, h);

  sprite.call(this, c, y, can.toDataURL());
};
/**/
export var board = function() {
};
