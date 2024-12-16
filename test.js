(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"test_atlas_1", frames: [[1759,777,212,230],[880,1199,1012,152],[880,905,877,292],[1272,1353,336,362],[0,905,878,514],[1610,1353,336,362],[1894,1009,120,336],[1398,0,464,775],[0,0,1396,903],[0,1987,336,38],[0,1421,697,512],[699,1421,571,564],[0,1935,336,38],[1948,1347,100,108],[1398,777,288,120],[1272,1717,748,152]]},
		{name:"test_atlas_2", frames: [[0,0,983,1602]]},
		{name:"test_atlas_3", frames: [[0,0,1480,1956]]},
		{name:"test_atlas_4", frames: [[0,0,1490,1956]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_51 = function() {
	this.initialize(ss["test_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_348 = function() {
	this.initialize(ss["test_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_427 = function() {
	this.initialize(img.CachedBmp_427);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3677,2160);


(lib.CachedBmp_426 = function() {
	this.initialize(img.CachedBmp_426);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3840,2160);


(lib.CachedBmp_425 = function() {
	this.initialize(ss["test_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_424 = function() {
	this.initialize(ss["test_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_69 = function() {
	this.initialize(ss["test_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_423 = function() {
	this.initialize(ss["test_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_422 = function() {
	this.initialize(ss["test_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_66 = function() {
	this.initialize(ss["test_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_65 = function() {
	this.initialize(img.CachedBmp_65);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4156,831);


(lib.CachedBmp_64 = function() {
	this.initialize(ss["test_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_421 = function() {
	this.initialize(ss["test_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_420 = function() {
	this.initialize(ss["test_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_419 = function() {
	this.initialize(ss["test_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_60 = function() {
	this.initialize(ss["test_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_59 = function() {
	this.initialize(ss["test_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_418 = function() {
	this.initialize(ss["test_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_57 = function() {
	this.initialize(ss["test_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_56 = function() {
	this.initialize(img.CachedBmp_56);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3730,746);


(lib.CachedBmp_55 = function() {
	this.initialize(ss["test_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_417 = function() {
	this.initialize(ss["test_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_416 = function() {
	this.initialize(img.CachedBmp_416);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3757,2094);


(lib.CachedBmp_415 = function() {
	this.initialize(img.CachedBmp_415);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3840,2160);


(lib.CachedBmp_349 = function() {
	this.initialize(ss["test_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ClipGroup_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoRI/IAAx9IQjAAIAAR9g");
	mask.setTransform(53.05,57.5);

	// Layer_3
	this.instance = new lib.CachedBmp_51();
	this.instance.setTransform(0.05,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0.1,0,106,115), null);


(lib.ClipGroup_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjTLwQhYhXAAh9IAAw3QAAh8BYhYQBXhYB8AAQB8AABYBYQBYBYAAB8IAAQ3QAAB9hYBXQhYBYh8AAQh8AAhXhYg");
	mask.setTransform(30,84);

	// Layer_3
	this.instance = new lib.CachedBmp_66();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10, new cjs.Rectangle(0,0,60,168), null);


(lib.ClipGroup_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AyGSzMAAAgllMAkNAAAMAAAAllg");
	mask.setTransform(1338.775,148.075);

	// Layer_3
	this.instance = new lib.CachedBmp_65();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, new cjs.Rectangle(1222.9,27.8,231.79999999999995,240.59999999999997), null);


(lib.ClipGroup_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AyGSzMAAAgllMAkNAAAMAAAAllg");
	mask.setTransform(115.875,120.275);

	// Layer_3
	this.instance = new lib.CachedBmp_64();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(0,0,231.8,240.6), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArqBeQgmAAgcgbQgbgcgBgnQABgmAbgcQAcgbAmAAIXUAAQAnAAAcAbQAbAcABAmQgBAngbAcQgcAbgnAAg");
	mask.setTransform(84.05,9.425);

	// Layer_3
	this.instance = new lib.CachedBmp_60();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(0,0,168,18.9), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A6vGXMAtngaWIH4NqMgtnAaVg");
	mask.setTransform(173.65,128);

	// Layer_3
	this.instance = new lib.CachedBmp_59();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(2.4,0,342.5,256), null);


(lib.ClipGroup_2_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArqBeQgmAAgcgbQgbgcgBgnQABgmAbgcQAcgbAmAAIXUAAQAnAAAcAbQAbAcABAmQgBAngbAcQgcAbgnAAg");
	mask.setTransform(84.05,9.425);

	// Layer_3
	this.instance = new lib.CachedBmp_57();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_0, new cjs.Rectangle(0,0,168,18.9), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwPQ4MAAAghuMAgfAAAMAAAAhug");
	mask.setTransform(1201.55,132.85);

	// Layer_3
	this.instance = new lib.CachedBmp_56();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(1097.6,24.9,208,215.9), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj5ENIAAoZIHzAAIAAIZg");
	mask.setTransform(25.05,26.875);

	// Layer_3
	this.instance = new lib.CachedBmp_55();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0.1,0,49.9,53.8), null);


(lib.btn_play_again = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_349();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,374,76);


(lib.btn_pick_story = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3jyqMAvHAAAMAAAAlVMgvHAAAg");
	this.shape.setTransform(150.75,119.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003366").s().p("A3jSqMAAAglUMAvHAAAMAAAAlUg");
	this.shape_1.setTransform(150.75,119.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,303.5,240.9);


(lib.ClipGroup_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwPQ4MAAAghuMAgfAAAMAAAAhug");
	mask.setTransform(190.45,128);

	// Layer_3
	this.instance = new lib.ClipGroup_5();
	this.instance.setTransform(174.3,128,1,1,0,0,0,174.3,128);

	this.instance_1 = new lib.CachedBmp_418();
	this.instance_1.setTransform(57.25,2.75,0.5,0.5);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(86.5,20.1,208,215.9), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvrQzQgNAAgJgJQgKgJABgNMAAAggmQgBgNAKgKQAJgIANgBIfXAAQANABAJAIQAKAKAAANMAAAAgmQAAAMgKAKQgJAJgNAAg");
	mask.setTransform(1201,132.4);

	// Layer_3
	this.instance = new lib.ClipGroup_2();
	this.instance.setTransform(932.6,186.5,1,1,0,0,0,932.6,186.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DBFADF").s().p("AvrQzQgNAAgJgJQgKgJABgNMAAAggmQgBgNAKgKQAJgIANgBIfXAAQANABAJAIQAKAKAAANMAAAAgmQAAAMgKAKQgJAJgNAAg");
	this.shape.setTransform(1201,132.4);

	var maskedShapeInstanceList = [this.instance,this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(1097.5,25,207.0999999999999,214.9), null);


(lib.ClipGroup_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxjSzQgOAAgLgLQgKgKAAgPMAAAgkeQAAgOAKgLQALgKAOAAMAjHAAAQAOAAAKAKQALALAAAOMAAAAkeQAAAPgLAKQgKALgOAAg");
	mask.setTransform(115.875,120.275);

	// Layer_3
	this.instance = new lib.ClipGroup_8();
	this.instance.setTransform(115.9,193.8,1,1,0,0,0,115.9,193.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DBFADF").s().p("AxjSzQgOAAgLgLQgKgKAAgPMAAAgkeQAAgOAKgLQALgKAOAAMAjHAAAQAOAAAKAKQALALAAAOMAAAAkeQAAAPgLAKQgKALgOAAg");
	this.shape.setTransform(115.875,120.275);

	var maskedShapeInstanceList = [this.instance,this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_1, new cjs.Rectangle(0,0,231.8,240.6), null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxjSzQgOAAgLgLQgKgKAAgPMAAAgkeQAAgOAKgLQALgKAOAAMAjHAAAQAOAAAKAKQALALAAAOMAAAAkeQAAAPgLAKQgKALgOAAg");
	mask.setTransform(1338.775,148.075);

	// Layer_3
	this.instance = new lib.ClipGroup_9();
	this.instance.setTransform(1039.1,207.8,1,1,0,0,0,1039.1,207.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DBFADF").s().p("AxjSzQgOAAgLgLQgKgKAAgPMAAAgkeQAAgOAKgLQALgKAOAAMAjHAAAQAOAAAKAKQALALAAAOMAAAAkeQAAAPgLAKQgKALgOAAg");
	this.shape.setTransform(1338.775,148.075);

	var maskedShapeInstanceList = [this.instance,this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(1222.9,27.8,231.79999999999995,240.59999999999997), null);


(lib.ClipGroup_1_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvrQyQgNABgKgKQgIgJgBgMMAAAggmQABgNAIgKQAKgIANgBIfXAAQANABAJAIQAKAKAAANMAAAAgmQAAAMgKAJQgJAKgNgBg");
	mask.setTransform(189.9,127.55);

	// Layer_3
	this.instance = new lib.ClipGroup_4();
	this.instance.setTransform(174.3,142.4,1,1,0,0,0,174.3,142.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DBFADF").s().p("AvrQyQgNABgKgKQgIgJgBgMMAAAggmQABgNAIgKQAKgIANgBIfXAAQANABAJAIQAKAKAAANMAAAAgmQAAAMgKAJQgJAKgNgBg");
	this.shape.setTransform(189.9,127.55);

	var maskedShapeInstanceList = [this.instance,this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0, new cjs.Rectangle(86.4,20.1,207.1,214.9), null);


(lib.Group = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_425();
	this.instance.setTransform(1076.55,713,0.5,0.5);

	this.instance_1 = new lib.ClipGroup_6();
	this.instance_1.setTransform(1410.5,641.65,1,1,0,0,0,84,9.4);

	this.instance_2 = new lib.CachedBmp_424();
	this.instance_2.setTransform(1326.5,435.95,0.5,0.5);

	this.instance_3 = new lib.ClipGroup_1_0();
	this.instance_3.setTransform(1185.4,558.35,1,1,0,0,0,174.3,142.4);

	this.instance_4 = new lib.CachedBmp_69();
	this.instance_4.setTransform(1076.55,415,0.5,0.5);

	this.instance_5 = new lib.ClipGroup_2_0();
	this.instance_5.setTransform(1410.5,345.65,1,1,0,0,0,84,9.4);

	this.instance_6 = new lib.CachedBmp_423();
	this.instance_6.setTransform(1326.5,139.95,0.5,0.5);

	this.instance_7 = new lib.ClipGroup_3();
	this.instance_7.setTransform(932.6,301.6,1,1,0,0,0,932.6,186.5);

	this.instance_8 = new lib.CachedBmp_422();
	this.instance_8.setTransform(925.55,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,1865,978), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg5zBMaMAAAiYzMBznAAAMAAACYzg");
	mask.setTransform(1444.5,489);

	// Layer_3
	this.instance = new lib.ClipGroup_10();
	this.instance.setTransform(1445.5,489,1,1,0,0,0,30,84);

	this.instance_1 = new lib.CachedBmp_421();
	this.instance_1.setTransform(1095.5,109.45,0.5,0.5);

	this.instance_2 = new lib.ClipGroup_1_1();
	this.instance_2.setTransform(1039.1,270.45,1,1,0,0,0,1039.1,207.8);

	this.instance_3 = new lib.CachedBmp_420();
	this.instance_3.setTransform(1199.5,67,0.5,0.5);

	this.instance_4 = new lib.ClipGroup_2_1();
	this.instance_4.setTransform(1338.8,840.25,1,1,0,0,0,115.9,193.8);

	this.instance_5 = new lib.CachedBmp_419();
	this.instance_5.setTransform(1071.5,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(1074.5,0,740,978), null);


(lib.ClipGroup_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Eg5zBMaMAAAiYzMBznAAAMAAACYzg");
	mask_1.setTransform(1444.5,489);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_7();
	this.instance_1.setTransform(1039.1,517,1,1,0,0,0,1039.1,517);

	this.instance_2 = new lib.Group();
	this.instance_2.setTransform(1081.55,489,1,1,0,0,0,932.6,489);
	this.instance_2.alpha = 0.3008;

	var maskedShapeInstanceList = [this.instance_1,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_1, new cjs.Rectangle(1074.5,0,740,978), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	mask.setTransform(960,540);

	// Layer_3
	this.instance = new lib.CachedBmp_417();
	this.instance.setTransform(63,956,0.5,0.5);

	this.instance_1 = new lib.ClipGroup_0_1();
	this.instance_1.setTransform(1144.6,619,1,1,0,0,0,1039.1,517);

	this.instance_2 = new lib.CachedBmp_416();
	this.instance_2.setTransform(0,33,0.5,0.5);

	this.instance_3 = new lib.ClipGroup_1();
	this.instance_3.setTransform(65.05,51.05,1,1,0,0,0,25.1,26.9);

	this.instance_4 = new lib.CachedBmp_415();
	this.instance_4.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,1920,1080), null);


(lib.ClipGroup_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.btn_story_1.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.play();
		});
	}
	this.frame_1 = function() {
		playSound("c3033helps");
	}
	this.frame_126 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.btn_play_again.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(1);
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(125).call(this.frame_126).wait(1));

	// home_btns
	this.btn_story_3 = new lib.btn_pick_story();
	this.btn_story_3.name = "btn_story_3";
	this.btn_story_3.setTransform(1695.2,675.4,1,1,0,0,0,150.8,119.5);
	new cjs.ButtonHelper(this.btn_story_3, 0, 1, 1);

	this.btn_story_2 = new lib.btn_pick_story();
	this.btn_story_2.name = "btn_story_2";
	this.btn_story_2.setTransform(1362.45,675.4,1,1,0,0,0,150.8,119.5);
	new cjs.ButtonHelper(this.btn_story_2, 0, 1, 1);

	this.btn_story_1 = new lib.btn_pick_story();
	this.btn_story_1.name = "btn_story_1";
	this.btn_story_1.setTransform(1031.7,675.4,1,1,0,0,0,150.8,119.5);
	new cjs.ButtonHelper(this.btn_story_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_story_1},{t:this.btn_story_2},{t:this.btn_story_3}]}).to({state:[]},1).wait(126));

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	mask_1.setTransform(960,540);

	// Layer_3
	this.instance_5 = new lib.CachedBmp_427();
	this.instance_5.setTransform(81.4,0,0.5,0.5);

	this.instance_6 = new lib.ClipGroup_0();
	this.instance_6.setTransform(133.05,121.5,1,1,0,0,0,53.1,57.5);

	this.instance_7 = new lib.CachedBmp_426();
	this.instance_7.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_5,this.instance_6,this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).to({state:[]},1).wait(126));

	// Layer_12
	this.btn_play_again = new lib.btn_play_again();
	this.btn_play_again.name = "btn_play_again";
	this.btn_play_again.setTransform(1615.35,1203.35,1,1,0,0,0,187,38);
	this.btn_play_again._off = true;
	new cjs.ButtonHelper(this.btn_play_again, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_play_again).wait(126).to({_off:false},0).wait(1));

	// Layer_11
	this.instance_8 = new lib.CachedBmp_348();
	this.instance_8.setTransform(280.05,1165.35,0.5,0.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(42).to({_off:false},0).wait(85));

	// Layer_10
	this.instance_9 = new lib.ClipGroup();
	this.instance_9.setTransform(1091.8,568.1,1,1,0,0,0,1091.8,568.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},0).wait(126));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2183.5,1241.4);


// stage content:
(lib.test = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Cover_svg
	this.Story = new lib.ClipGroup_11();
	this.Story.name = "Story";
	this.Story.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.Story).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(480,320,480,220);
// library properties:
lib.properties = {
	id: 'BA68ECF83B7045A1B0417F1098D8400D',
	width: 960,
	height: 640,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_427.png?1734381835316", id:"CachedBmp_427"},
		{src:"images/CachedBmp_426.png?1734381835316", id:"CachedBmp_426"},
		{src:"images/CachedBmp_65.png?1734381835316", id:"CachedBmp_65"},
		{src:"images/CachedBmp_56.png?1734381835316", id:"CachedBmp_56"},
		{src:"images/CachedBmp_416.png?1734381835316", id:"CachedBmp_416"},
		{src:"images/CachedBmp_415.png?1734381835316", id:"CachedBmp_415"},
		{src:"images/test_atlas_1.png?1734381835289", id:"test_atlas_1"},
		{src:"images/test_atlas_2.png?1734381835289", id:"test_atlas_2"},
		{src:"images/test_atlas_3.png?1734381835289", id:"test_atlas_3"},
		{src:"images/test_atlas_4.png?1734381835289", id:"test_atlas_4"},
		{src:"sounds/c3033helps.mp3?1734381835316", id:"c3033helps"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['BA68ECF83B7045A1B0417F1098D8400D'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;