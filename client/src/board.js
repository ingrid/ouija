import jam from "../jam/jam";
import { planchette, board } from "draw";

jam.config({dataDir:"data/"});
var game;
var scene;

/** /
window.setTimeout(function(){
	console.log = function(){
	};
}, 8000);
/**/

var initialize = function(){
  jam.Debug.showBoundingBoxes = true;

  game = window.game = new jam.Game(640, 480, document.body);
  scene = game.root.scene;

  var b = new board(10, 10);
  scene.add(b);

  var p = new planchette(500, 150);
  scene.add(p);

  if (jam.Debug.showBoundingBoxes === true){
	  //Debug
  }

  game.run();
};

var preload = function(){
  //jam.preload("shot.png");
  jam.showPreloader(initialize);
};

preload();
