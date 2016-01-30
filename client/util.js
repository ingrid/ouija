import sprite from "./jam/sprite";

var planchette = function(x, y){
  var can = document.createElement('canvas');
  var ctx = can.getContext('2d');
  var col = color(r, g, b);

  can.width = w;
  can.height = h;

  ctx.fillSTyle = col;
  ctx.fillRect(0, 0, w, h);

  can.toDataURL();

  sprite.call(this, x, y, IMAGE);
};
