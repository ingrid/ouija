import sprite from "./jam/sprite";

var DEFAULT_COLOR = "rgb(255, 255, 255)";

var cir, rect, sq, text, rcolor, rgb, hsv;

export cir = function(rad, r, g, b){
};

var rectUrl = function(w, h, r, g, b){
  var can = document.createElement('canvas');
  var ctx = can.getContext('2d');
  var col = color(r, g, b);

  can.width = w;
  can.height = h;

  ctx.fillSTyle = col;
  ctx.fillRect(0, 0, w, h);

  return can.toDataURL();
};

var color = function (r, g, b, a){
  //(1, 2, 3, 1)

  //('random')
  //contraints?

  //('rgba(1, 2, 3)'
  return 'rgba(' + r + g + b + a + ')';
};

var rcolor = function(){
};

export rect = function(x, y, w, h, r, g, b, a){
  sprite.call(this, x, y, new rectUrl(w, h, r, g, b, a));
};

export sq = function(x, y, w, r, g, b, a){
  sprite.call(this, x, y, new rectUrl(w, w, r, g, b, a);
};
