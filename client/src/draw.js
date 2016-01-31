import sprite from "../jam/sprite";
import jam from "../jam/jam";

var draw;

export default draw = function(x, y){
  console.log("DRAW");
};

export var planchette = function(x, y){
  var w = 125;
  var h = 125;
  var can = document.createElement('canvas');
  var ctx = can.getContext('2d');
  var col = 'rgb(204, 195, 128)';
  var shade = 'rgb(178, 171, 111)';

  can.width = w;
  can.height = h;

  ctx.fillStyle = col;
  ctx.strokeStyle = col;
  ctx.lineJoin = "round";
  ctx.lineWidth = 30;

  ctx.beginPath();
  ctx.moveTo(55, 15);
  ctx.lineTo(95, 95);
  ctx.lineTo(15, 95);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  // Somehow this stops the fill from being included in the clip region.
  ctx.beginPath();
  ctx.closePath();

  ctx.save();

  ctx.arc(55, 60, 20, 0, 2*Math.PI);
  ctx.clip();
  ctx.clearRect(0, 0, 125, 125);

  ctx.lineWidth = 1;

  var grd = ctx.createRadialGradient(55, 60, 1, 55, 60, 25);
  grd.addColorStop(0,'rgba(144, 195, 212, 0)');
  grd.addColorStop(1,'rgba(144, 195, 212, 1');

  ctx.fillStyle=grd;
  ctx.fillRect(0, 0, 125, 125);

  var grd = ctx.createRadialGradient(55, 60, 10, 55, 60, 75);
  grd.addColorStop(0,'rgba(0, 0, 0, 0)');
  grd.addColorStop(1,'rgba(144, 195, 212, 1');

  ctx.fillStyle=grd;
  ctx.fillRect(0, 0, 125, 125);

  ctx.restore();

  ctx.lineWidth = 2;
  ctx.strokeStyle = shade;
  ctx.arc(55, 60, 20, 0, 2*Math.PI);
  ctx.stroke();

  sprite.call(this, x, y);
  this.setImage(can.toDataURL(), w, h);

  this.on('update', function(dt){
    // PLANCHETTE INPUT
    this.x = jam.Input.mouse.x - 100;
    this.y = jam.Input.mouse.y - 100;
  });
};

export var board = function(x, y) {
  var w = 600;
  var h = 400;
  var can = document.createElement('canvas');
  var ctx = can.getContext('2d');
  var col = 'rgb(137, 176, 130)';
  var shade = 'rgb(115, 147, 109)';

  can.width = w;
  can.height = h

  ctx.fillStyle = col;
  ctx.strokeStyle = col;
  ctx.lineJoin = 'round';
  ctx.lineWidth = 30;

  ctx.strokeRect(15, 15, 570, 370);
  ctx.fillRect(20, 20, 560, 350);

  sprite.call(this, x, y);
  this.setImage(can.toDataURL(), w, h);
  symbols(this);

  //line(l, x, y, a, w, h)
  this.add(new line('YES', -260, -160, 0, 40, 40));
  this.add(new line('NO', 200, -160, 0, 40, 40));
  this.add(new line('GOODBYE', -160, 160, 0, 300, 40));




  this.on('update', function(dt){
    //console.log(this.image);
  });
};

var symbols = function(board){
  var syms = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
              'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
              '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  var x = [-240, -200, -160, -120, -80, -40, 0, 40, 80, 120, 160, 200, 240,
           -240, -200, -160, -120, -80, -40, 0, 40, 80, 120, 160, 200, 240,
           -180, -140, -100, -60, -20, 20, 60, 100, 140, 180];
  var y = [-60, -76, -88, -98, -104, -110, /**/-112, -110, -104, -98, -88, -76, -60,
           -20, -36, -48, -58, -64, -70, /**/-72, -70, -64, -58, -48, -36, -20,
           60, 60, 60, 60, 60, 60, 60, 60, 60, 60];
  var a = [-30, -25, -20, -15, -10, -5, 0, 5, 10, 15, 20, 25, 30,
           -30, -25, -20, -15, -10, -5, 0, 5, 10, 15, 20, 25, 30,
           0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var s;

  var i;
  for (i = 0; i < syms.length; i++){
    board.add(new sym(syms[i], x[i] -40, y[i], a[i]));
    }
};

var s_can = document.createElement('canvas');
var s_ctx = s_can.getContext('2d');

s_can.width = 800;
s_can.height = 100;

s_ctx.font = "40px Arial";
s_ctx.fillStyle = 'rgb(115, 147, 109)';
s_ctx.textAlign = 'center';

var sym = function(s, x, y, a){
  line.call(this, s, x, y, a, 40, 40);
};

var line = function(l, x, y, a, w, h){
  var tw = s_ctx.measureText(l).width;
  // console.log(tw);

  s_ctx.clearRect(0, 0, w + 40, h + 40);
  s_ctx.fillText(l, w, h);

  sprite.call(this, x, y);
  this.setImage(s_can.toDataURL(), w + 40, h + 40);
  this.angle = a;
};

planchette.prototype = new sprite(0, 0);
board.prototype = new sprite(0, 0);
sym.prototype = new sprite(0, 0);
line.prototype = new sprite(0, 0);
