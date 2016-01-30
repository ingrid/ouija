import jam from "../jam/jam";
import { planchette } from "draw";

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

  var p = new planchette(100, 100);
  scene.add(p);

  console.log(p.image);

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
