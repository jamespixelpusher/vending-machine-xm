(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[851,1082,600,600],[0,1082,849,900],[0,0,1920,1080]]},
		{name:"index_atlas_2", frames: [[0,0,600,600],[602,0,600,600],[0,602,1027,308],[1029,602,940,261]]}
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



(lib._0_68000_79282_0_Oh_Henry_58g = function() {
	this.initialize(img._0_68000_79282_0_Oh_Henry_58g);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3000,3000);


(lib.countdown_1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.countdown_2 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.countdown_3 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ohhenry = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ohhungry = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Oh_Henry_Bar_Pip = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.screen6 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
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


(lib.oh_henry_meter = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._0_68000_79282_0_Oh_Henry_58g();
	this.instance.setTransform(0,0,0.3847,0.3847);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.oh_henry_meter, new cjs.Rectangle(0,0,1154.1,1154.1), null);


(lib.countdown_3_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.countdown_3();
	this.instance.setTransform(0,0,1.8899,1.8899);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.countdown_3_1, new cjs.Rectangle(0,0,1134,1134), null);


(lib.countdown_2_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.countdown_2();
	this.instance.setTransform(0,0,1.8899,1.8899);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.countdown_2_1, new cjs.Rectangle(0,0,1134,1134), null);


(lib.countdown_1_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.countdown_1();
	this.instance.setTransform(0,0,1.8899,1.8899);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.countdown_1_1, new cjs.Rectangle(0,0,1134,1134), null);


(lib.clipohhungry = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ohhungry();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clipohhungry, new cjs.Rectangle(0,0,940,261), null);


(lib.clipohhenry = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ohhenry();
	this.instance.setTransform(0,0,0.7056,0.7056);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clipohhenry, new cjs.Rectangle(0,0,724.6,217.3), null);


(lib.clip_success_line2 = function(mode,startPosition,loop,reversed) {
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
	this.success_line2 = new cjs.Text("YOU NEED AN OH HENRY!", "bold 180px 'Praktika Rnd ExtraBold Cnd'", "#FFFFFF");
	this.success_line2.name = "success_line2";
	this.success_line2.textAlign = "right";
	this.success_line2.lineHeight = 221;
	this.success_line2.lineWidth = 1714;
	this.success_line2.parent = this;
	this.success_line2.setTransform(1716.4,2);

	this.timeline.addTween(cjs.Tween.get(this.success_line2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clip_success_line2, new cjs.Rectangle(0,0,1718.4,497.3), null);


(lib.clip_success_line1 = function(mode,startPosition,loop,reversed) {
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
	this.success_line1 = new cjs.Text("HUNGER CONFIRMED", "bold 180px 'Praktika Rnd ExtraBold Cnd'", "#FFFFFF");
	this.success_line1.name = "success_line1";
	this.success_line1.textAlign = "right";
	this.success_line1.lineHeight = 221;
	this.success_line1.lineWidth = 1196;
	this.success_line1.parent = this;
	this.success_line1.setTransform(1198.3,2);

	this.timeline.addTween(cjs.Tween.get(this.success_line1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clip_success_line1, new cjs.Rectangle(0,0,1200.3,225.4), null);


(lib.clip_ohhenry_red_dot = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#D50032").s().p("Eg1CA1CQ1+19AA/FQAA/EV+1+QV+1+fEAAQfFAAV9V+QV/V+AAfEQAAfF1/V9Q19V//FAAQ/EAA1+1/g");
	this.shape.setTransform(480.1,480.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clip_ohhenry_red_dot, new cjs.Rectangle(0,0,960.2,960.2), null);


(lib.clip_ohhenry_bar = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._0_68000_79282_0_Oh_Henry_58g();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clip_ohhenry_bar, new cjs.Rectangle(0,0,3000,3000), null);


(lib.clip_idle_headline_3 = function(mode,startPosition,loop,reversed) {
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
	this.idle_headline_3 = new cjs.Text("OH HENRY!", "bold 156px 'Praktika Rnd ExtraBold Cnd'", "#FFFFFF");
	this.idle_headline_3.name = "idle_headline_3";
	this.idle_headline_3.lineHeight = 194;
	this.idle_headline_3.lineWidth = 1273;
	this.idle_headline_3.parent = this;
	this.idle_headline_3.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.idle_headline_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clip_idle_headline_3, new cjs.Rectangle(0,0,1277,195.9), null);


(lib.clip_idle_headline_2 = function(mode,startPosition,loop,reversed) {
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
	this.idle_headline_2 = new cjs.Text("TO GET YOUR", "bold 156px 'Praktika Rnd ExtraBold Cnd'", "#FFFFFF");
	this.idle_headline_2.name = "idle_headline_2";
	this.idle_headline_2.lineHeight = 194;
	this.idle_headline_2.lineWidth = 1273;
	this.idle_headline_2.parent = this;
	this.idle_headline_2.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.idle_headline_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clip_idle_headline_2, new cjs.Rectangle(0,0,1277,195.9), null);


(lib.clip_idle_headline_1 = function(mode,startPosition,loop,reversed) {
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
	this.idle_headline_1 = new cjs.Text("MAKE SOME NOISE", "bold 156px 'Praktika Rnd ExtraBold Cnd'", "#FFFFFF");
	this.idle_headline_1.name = "idle_headline_1";
	this.idle_headline_1.lineHeight = 194;
	this.idle_headline_1.lineWidth = 1273;
	this.idle_headline_1.parent = this;
	this.idle_headline_1.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.idle_headline_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clip_idle_headline_1, new cjs.Rectangle(0,0,1277,195.9), null);


(lib.clip_idle_cta = function(mode,startPosition,loop,reversed) {
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
	this.idle_cta = new cjs.Text("TAP TO START.", "bold 70px 'Praktika Rnd ExtraBold Cnd'", "#FFD900");
	this.idle_cta.name = "idle_cta";
	this.idle_cta.textAlign = "center";
	this.idle_cta.lineHeight = 88;
	this.idle_cta.lineWidth = 322;
	this.idle_cta.parent = this;
	this.idle_cta.setTransform(159.1,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFD900").ss(11,1,0,3).p("EgkAgI3MBIBAAAIAARvMhIBAAAg");
	this.shape.setTransform(159.1,44.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EB002A").s().p("EgkAAI4IAAxvMBIAAAAIAARvg");
	this.shape_1.setTransform(159.1,44.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.idle_cta}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clip_idle_cta, new cjs.Rectangle(-76.8,-18.2,471.90000000000003,124.60000000000001), null);


(lib.clip_game_prompt_2 = function(mode,startPosition,loop,reversed) {
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
	this.game_prompt_2 = new cjs.Text("THAT GRUMBLE!", "bold 230px 'Praktika Rnd ExtraBold Cnd'", "#593126");
	this.game_prompt_2.name = "game_prompt_2";
	this.game_prompt_2.textAlign = "right";
	this.game_prompt_2.lineHeight = 190;
	this.game_prompt_2.lineWidth = 2013;
	this.game_prompt_2.parent = this;
	this.game_prompt_2.setTransform(1234.45,194.05);

	this.timeline.addTween(cjs.Tween.get(this.game_prompt_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clip_game_prompt_2, new cjs.Rectangle(-780,192.1,2016.5,288.1), null);


(lib.clip_game_prompt_1 = function(mode,startPosition,loop,reversed) {
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
	this.game_prompt_2 = new cjs.Text("LET'S HEAR", "bold 230px 'Praktika Rnd ExtraBold Cnd'", "#593126");
	this.game_prompt_2.name = "game_prompt_2";
	this.game_prompt_2.textAlign = "right";
	this.game_prompt_2.lineHeight = 190;
	this.game_prompt_2.lineWidth = 2013;
	this.game_prompt_2.parent = this;
	this.game_prompt_2.setTransform(1234.45,194.05);

	this.timeline.addTween(cjs.Tween.get(this.game_prompt_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clip_game_prompt_1, new cjs.Rectangle(-780,192.1,2016.5,288.1), null);


(lib.clip_game_level_mid = function(mode,startPosition,loop,reversed) {
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
	this.game_level_mid = new cjs.Text("NEED OH HENRY!", "bold 80px 'Praktika Rnd ExtraBold Cnd'", "#FFFFFF");
	this.game_level_mid.name = "game_level_mid";
	this.game_level_mid.lineHeight = 5;
	this.game_level_mid.lineWidth = 884;
	this.game_level_mid.parent = this;
	this.game_level_mid.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.game_level_mid).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clip_game_level_mid, new cjs.Rectangle(0,0,888.2,102.4), null);


(lib.clip_game_level_low = function(mode,startPosition,loop,reversed) {
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
	this.game_level_low = new cjs.Text("WANT OH HENRY!", "bold 80px 'Praktika Rnd ExtraBold Cnd'", "#FFFFFF");
	this.game_level_low.name = "game_level_low";
	this.game_level_low.lineHeight = 5;
	this.game_level_low.lineWidth = 884;
	this.game_level_low.parent = this;
	this.game_level_low.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.game_level_low).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clip_game_level_low, new cjs.Rectangle(0,0,888.2,102.4), null);


(lib.clip_game_level_high = function(mode,startPosition,loop,reversed) {
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
	this.game_level_high = new cjs.Text("MUST HAVE OH HENRY!\nRIGHT NOW", "bold 70px 'Praktika Rnd ExtraBold Cnd'", "#FFFFFF");
	this.game_level_high.name = "game_level_high";
	this.game_level_high.textAlign = "center";
	this.game_level_high.lineHeight = 70;
	this.game_level_high.lineWidth = 906;
	this.game_level_high.parent = this;
	this.game_level_high.setTransform(455.05,2);

	this.timeline.addTween(cjs.Tween.get(this.game_level_high).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clip_game_level_high, new cjs.Rectangle(0,0,910.2,200.8), null);


(lib.clip_game_headline_3 = function(mode,startPosition,loop,reversed) {
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
	this.game_headline_2 = new cjs.Text("NOISE", "bold 230px 'Praktika Rnd ExtraBold Cnd'", "#593126");
	this.game_headline_2.name = "game_headline_2";
	this.game_headline_2.lineHeight = 190;
	this.game_headline_2.lineWidth = 1828;
	this.game_headline_2.parent = this;
	this.game_headline_2.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.game_headline_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clip_game_headline_3, new cjs.Rectangle(0,0,1832.5,286.9), null);


(lib.clip_game_headline_2 = function(mode,startPosition,loop,reversed) {
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
	this.game_headline_2 = new cjs.Text("GRUMMMMBLEEE", "bold 230px 'Praktika Rnd ExtraBold Cnd'", "#593126");
	this.game_headline_2.name = "game_headline_2";
	this.game_headline_2.lineHeight = 190;
	this.game_headline_2.lineWidth = 1828;
	this.game_headline_2.parent = this;
	this.game_headline_2.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.game_headline_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clip_game_headline_2, new cjs.Rectangle(0,0,1832.5,286.9), null);


(lib.clip_game_headline_1 = function(mode,startPosition,loop,reversed) {
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
	this.game_headline_1 = new cjs.Text("MAKE THAT", "bold 230px 'Praktika Rnd ExtraBold Cnd'", "#593126");
	this.game_headline_1.name = "game_headline_1";
	this.game_headline_1.lineHeight = 190;
	this.game_headline_1.lineWidth = 1840;
	this.game_headline_1.parent = this;
	this.game_headline_1.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.game_headline_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clip_game_headline_1, new cjs.Rectangle(0,0,1844.5,286.9), null);


(lib.clip_game_calculating = function(mode,startPosition,loop,reversed) {
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
	this.game_calculating = new cjs.Text("CALCULATING HUNGER LEVEL", "bold 80px 'Praktika Rnd ExtraBold Cnd'", "#D50032");
	this.game_calculating.name = "game_calculating";
	this.game_calculating.lineHeight = 5;
	this.game_calculating.lineWidth = 906;
	this.game_calculating.parent = this;
	this.game_calculating.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.game_calculating).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clip_game_calculating, new cjs.Rectangle(0,0,910.2,102.4), null);


(lib.clip_dial = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#EB002A").ss(11,1,0,3).p("EAAQhHbQVPMjStStQStStMjVQUAZlArUAAAA17EhhAhhAUA17AAAArVAZlMhhQCocIAAAA");
	this.shape.setTransform(620.9,620.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EB002A").s().p("EgwnBhBMAAAjCBUA16AAAArVAZlMhhPCocg");
	this.shape_1.setTransform(311.225,620.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#613124").s().p("EhhAAwoMCobhhPUAZmArVAAAA16g");
	this.shape_2.setTransform(620.925,930.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFA400").s().p("EANChUNQVQMiStStQSsStMjVQMiobBhPg");
	this.shape_3.setTransform(539.05,702.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clip_dial, new cjs.Rectangle(-5.5,-5.5,1252.8,1252.8), null);


(lib.clip_countdown_tagline2 = function(mode,startPosition,loop,reversed) {
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
	this.countdown_tagline2 = new cjs.Text("AND THAT'S IT", "bold 96px 'Praktika Rnd ExtraBold Cnd'", "#D50032");
	this.countdown_tagline2.name = "countdown_tagline2";
	this.countdown_tagline2.lineHeight = 60;
	this.countdown_tagline2.lineWidth = 1065;
	this.countdown_tagline2.parent = this;
	this.countdown_tagline2.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.countdown_tagline2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clip_countdown_tagline2, new cjs.Rectangle(0,0,1068.8,122.1), null);


(lib.clip_countdown_tagline1_2 = function(mode,startPosition,loop,reversed) {
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
	this.countdown_tagline1_1 = new cjs.Text("OF HUNGER.", "bold 150px 'Praktika Rnd ExtraBold Cnd'", "#5B3427");
	this.countdown_tagline1_1.name = "countdown_tagline1_1";
	this.countdown_tagline1_1.lineHeight = 127;
	this.countdown_tagline1_1.lineWidth = 1073;
	this.countdown_tagline1_1.parent = this;
	this.countdown_tagline1_1.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.countdown_tagline1_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clip_countdown_tagline1_2, new cjs.Rectangle(0,0,1077.1,188.5), null);


(lib.clip_countdown_tagline1_1 = function(mode,startPosition,loop,reversed) {
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
	this.countdown_tagline1_1 = new cjs.Text("TAKES CARE", "bold 150px 'Praktika Rnd ExtraBold Cnd'", "#5B3427");
	this.countdown_tagline1_1.name = "countdown_tagline1_1";
	this.countdown_tagline1_1.lineHeight = 127;
	this.countdown_tagline1_1.lineWidth = 1073;
	this.countdown_tagline1_1.parent = this;
	this.countdown_tagline1_1.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.countdown_tagline1_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clip_countdown_tagline1_1, new cjs.Rectangle(0,0,1077.1,188.5), null);


(lib.clip_brokenbar = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Oh_Henry_Bar_Pip();
	this.instance.setTransform(849,0,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clip_brokenbar, new cjs.Rectangle(0,0,849,900), null);


(lib.clip_success = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {anim_in:10,active:39,anim_out:59};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
		if (window.onIntroComplete) window.onIntroComplete();
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_63 = function() {
		this.stop();
		if (window.onOutroComplete) window.onOutroComplete();
	}
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(27).call(this.frame_39).wait(24).call(this.frame_63).wait(36).call(this.frame_99).wait(1));

	// Layer_3
	this.clip_success_line2 = new lib.clip_success_line2();
	this.clip_success_line2.name = "clip_success_line2";
	this.clip_success_line2.setTransform(1027.3,387.5,1,1,0,0,0,859.2,248.6);

	this.clip_success_line1 = new lib.clip_success_line1();
	this.clip_success_line1.name = "clip_success_line1";
	this.clip_success_line1.setTransform(1288.3,99.55,1,1,0,0,0,600.1,112.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.clip_success_line1},{t:this.clip_success_line2}]}).wait(100));

	// Layer_2
	this.instance = new lib.screen6();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-13.1,1920,1093.1);


(lib.clip_idle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"anim_in":10,anim_loop:65,"active":305,"anim_out":325};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_264 = function() {
		this.gotoAndPlay("anim_loop");
	}
	this.frame_305 = function() {
		this.stop();
	}
	this.frame_341 = function() {
		this.stop();
		if (window.onOutroComplete) window.onOutroComplete();
	}
	this.frame_365 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(264).call(this.frame_264).wait(41).call(this.frame_305).wait(36).call(this.frame_341).wait(24).call(this.frame_365).wait(15));

	// clip_oh_henry
	this.instance = new lib.clipohhenry();
	this.instance.setTransform(1134.2,381.1,0.2924,0.2924,0,0,0,114.2,104.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(55).to({_off:false},0).to({scaleX:1.1606,scaleY:1.1606,x:1134.15,y:381.15},5,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(-1)).to({regX:114.3,scaleX:1.05,scaleY:1.05,x:1134.2},82,cjs.Ease.quadInOut).to({regX:114.2,scaleX:1,scaleY:1,x:1134.15},117,cjs.Ease.quadInOut).wait(61).to({scaleX:1.1606,scaleY:1.1606},5).to({scaleX:0.2924,scaleY:0.2924,x:1134.2,y:381.1},5).to({_off:true},1).wait(44));

	// clip_oh_hungry
	this.instance_1 = new lib.clipohhungry();
	this.instance_1.setTransform(1224.85,250.55,0.1299,0.1338,0,0,0,114.8,189.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45).to({_off:false},0).to({scaleX:0.8873,scaleY:0.9139,x:1224.95},5,cjs.Ease.get(1)).to({regX:114.7,regY:189.8,scaleX:0.754,scaleY:0.7766,x:1224.9,y:250.5},5,cjs.Ease.get(-1)).wait(10).to({regX:114.8,scaleX:0.7917,scaleY:0.8154,x:1224.95},99,cjs.Ease.quadInOut).to({regX:114.7,scaleX:0.754,scaleY:0.7766,x:1224.9},100,cjs.Ease.quadInOut).wait(66).to({regX:114.8,regY:189.9,scaleX:0.8873,scaleY:0.9139,x:1224.95,y:250.55},5).to({scaleX:0.1299,scaleY:0.1338,x:1224.85},5).to({_off:true},1).wait(39));

	// idle_cta
	this.clip_idle_cta = new lib.clip_idle_cta();
	this.clip_idle_cta.name = "clip_idle_cta";
	this.clip_idle_cta.setTransform(299.1,569.6,0.2,0.2,0,0,0,163,45);
	this.clip_idle_cta.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.clip_idle_cta).wait(40).to({regX:163.1,regY:45.1,scaleX:1.5,scaleY:1.5,x:299.15,y:569.65,alpha:1},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(-1)).wait(90).to({scaleX:1.1,scaleY:1.1},10,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},12,cjs.Ease.get(-1)).wait(172).to({scaleX:1.5,scaleY:1.5},4,cjs.Ease.get(1)).to({regX:163,regY:45,scaleX:0.1,scaleY:0.1,x:299.1,y:569.6,alpha:0},4,cjs.Ease.get(-1)).wait(40));

	// clip_idle_headline_3
	this.clip_idle_headline_3 = new lib.clip_idle_headline_3();
	this.clip_idle_headline_3.name = "clip_idle_headline_3";
	this.clip_idle_headline_3.setTransform(-832.7,530.1,1,1,0,0,0,453.8,236.8);

	this.timeline.addTween(cjs.Tween.get(this.clip_idle_headline_3).wait(32).to({x:-812.35},0).to({x:427.65},4).to({x:507.65},8,cjs.Ease.get(1)).wait(285).to({x:587.65},7,cjs.Ease.get(1)).to({x:-812.35},4,cjs.Ease.get(-1)).wait(40));

	// clip_idle_headline_2
	this.clip_idle_headline_2 = new lib.clip_idle_headline_2();
	this.clip_idle_headline_2.name = "clip_idle_headline_2";
	this.clip_idle_headline_2.setTransform(-832.7,396.95,1,1,0,0,0,453.8,236.8);

	this.timeline.addTween(cjs.Tween.get(this.clip_idle_headline_2).wait(30).to({x:-812.35},0).to({x:427.65},4).to({x:507.65},8,cjs.Ease.get(1)).wait(285).to({x:587.65},7,cjs.Ease.get(1)).to({x:-812.35},4,cjs.Ease.get(-1)).wait(42));

	// clip_idle_headline_1
	this.clip_idle_headline_1 = new lib.clip_idle_headline_1();
	this.clip_idle_headline_1.name = "clip_idle_headline_1";
	this.clip_idle_headline_1.setTransform(-829.95,269.35,1,1,0,0,0,453.8,236.8);

	this.timeline.addTween(cjs.Tween.get(this.clip_idle_headline_1).wait(28).to({x:-809.6},0).to({x:430.4},4).to({x:510.4},8,cjs.Ease.get(1)).wait(285).to({x:590.4},7,cjs.Ease.get(1)).to({x:-809.6},4,cjs.Ease.get(-1)).wait(44));

	// clip_ohhenry_bar
	this.instance_2 = new lib.clip_ohhenry_bar();
	this.instance_2.setTransform(964.3,1364.25,0.512,0.512,-4.7151,0,0,1500,1500.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).to({y:884.25},5,cjs.Ease.get(1)).to({y:804.25},21,cjs.Ease.get(1)).wait(21).to({y:764.25},87,cjs.Ease.quadInOut).to({y:804.25},112,cjs.Ease.quadInOut).wait(61).to({y:724.25},5,cjs.Ease.get(1)).to({y:1364.25},5,cjs.Ease.get(-1)).wait(45));

	// clip_ohhenry_red_dot
	this.instance_3 = new lib.clip_ohhenry_red_dot();
	this.instance_3.setTransform(-247.95,-223.95,0.675,0.675,0,0,0,480.2,480.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({regX:480.1,regY:480.1,scaleX:2.9699,scaleY:2.9699,y:-103.95},4,cjs.Ease.get(1)).to({scaleX:2.7,scaleY:2.7},4,cjs.Ease.get(-1)).wait(47).to({scaleX:2.7539,scaleY:2.7539,y:-103.9},95,cjs.Ease.quadInOut).to({scaleX:2.7,scaleY:2.7,y:-103.95},104,cjs.Ease.quadInOut).wait(68).to({scaleX:3.2399,scaleY:3.2399,x:-247.9,y:-103.9},4,cjs.Ease.get(1)).to({scaleX:0.27,scaleY:0.27,x:-247.95,y:-103.95},5).wait(39));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1803.4,-1659.4,3760.6000000000004,3852);


(lib.clip_countdown = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"anim_in":10,"active":377,"anim_out":397};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_319 = function() {
		this.stop();
		if (window.onCountdownComplete) window.onCountdownComplete();
		if (window.onOutroComplete) window.onOutroComplete();
	}
	this.frame_329 = function() {
		this.stop();
		if (window.onOutroComplete) window.onOutroComplete();
	}
	this.frame_381 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(319).call(this.frame_319).wait(10).call(this.frame_329).wait(52).call(this.frame_381).wait(57));

	// clip_oh_hungry
	this.instance = new lib.clipohhungry();
	this.instance.setTransform(767,368.4,0.2002,0.2002,0,0,0,0.2,261);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(133).to({_off:false},0).to({regX:0.1,regY:261.1,scaleX:1.2942,scaleY:1.2942,x:766.95,y:368.5},5,cjs.Ease.get(1)).to({regY:261,scaleX:1.1495,scaleY:1.1495,x:766.9,y:368.4},5,cjs.Ease.get(-1)).to({scaleX:1.0345,scaleY:1.0345,x:806.9},65).to({scaleX:1.1495,scaleY:1.1495,x:90.9,y:352.4},8,cjs.Ease.quadInOut).to({y:432.4},91).to({y:561.4},4,cjs.Ease.get(1)).to({y:-30.1},4,cjs.Ease.get(-1)).wait(123));

	// clip_broken_bar
	this.instance_1 = new lib.clip_brokenbar();
	this.instance_1.setTransform(2377.5,538.95,1.3721,1.3721,0,-27.2575,152.7425,424.2,450.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(212).to({_off:false},0).to({x:1817.5},4).to({scaleX:1.5246,scaleY:1.5246,skewX:-27.2578,skewY:152.7422,x:1777.55,y:663.95},84).wait(6).to({scaleX:1.677,scaleY:1.677,skewX:-27.2575,skewY:152.7425,x:1715,y:601.45},5).to({scaleX:0.7623,scaleY:0.7623,skewX:-27.258,skewY:152.742,x:2214.95,y:601.4},5).wait(122));

	// clip_broken_bar
	this.instance_2 = new lib.clip_brokenbar();
	this.instance_2.setTransform(719.45,479.65,0.8505,0.8505,0,0,0,424.4,450);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).to({regY:449.9,scaleX:1.7009,scaleY:1.7009,x:587.4,y:579.65,alpha:1},5).to({scaleX:1.7538,scaleY:1.7538,x:581.2,y:587.3},14).to({regX:424.5,scaleX:1.89,scaleY:1.89,x:564.8,y:606.95},89).wait(1).to({regX:424.4,regY:450.1,scaleX:1.3969,scaleY:1.3969,x:192.7,y:667.1},4,cjs.Ease.get(-1)).to({scaleX:1.2572,scaleY:1.2572,x:152.75,y:707.1},85).to({x:232.75},4).to({x:-527.25},4).wait(222));

	// clip_countdown_tagline2
	this.clip_countdown_tagline2 = new lib.clip_countdown_tagline2();
	this.clip_countdown_tagline2.name = "clip_countdown_tagline2";
	this.clip_countdown_tagline2.setTransform(-698.65,1009.05,1,1,0,0,0,313.3,61.1);

	this.timeline.addTween(cjs.Tween.get(this.clip_countdown_tagline2).wait(14).to({x:336.35},5).to({x:375.75},102,cjs.Ease.get(1)).to({x:392.85},3).to({x:-695.15},3).wait(311));

	// clip_countdown_tagline1_2
	this.clip_countdown_tagline1_2 = new lib.clip_countdown_tagline1_2();
	this.clip_countdown_tagline1_2.name = "clip_countdown_tagline1_2";
	this.clip_countdown_tagline1_2.setTransform(-702.15,961.4,1,1,0,0,0,316.8,157.5);

	this.timeline.addTween(cjs.Tween.get(this.clip_countdown_tagline1_2).wait(12).to({x:332.85},5).to({x:376.35},103,cjs.Ease.get(1)).to({x:389.35},3).to({x:-698.65},3).wait(312));

	// clip_countdown_tagline1_1
	this.clip_countdown_tagline1_1 = new lib.clip_countdown_tagline1_1();
	this.clip_countdown_tagline1_1.name = "clip_countdown_tagline1_1";
	this.clip_countdown_tagline1_1.setTransform(-702.15,833.9,1,1,0,0,0,316.8,157.5);

	this.timeline.addTween(cjs.Tween.get(this.clip_countdown_tagline1_1).wait(10).to({x:332.85},5).to({x:376.35},104,cjs.Ease.get(1)).to({x:389.35},3).to({x:-698.65},3).wait(313));

	// clip_game_prompt_2
	this.clip_game_prompt_2 = new lib.clip_game_prompt_2();
	this.clip_game_prompt_2.name = "clip_game_prompt_2";
	this.clip_game_prompt_2.setTransform(3479.35,962,1,1,0,0,0,705.1,333.4);
	this.clip_game_prompt_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.clip_game_prompt_2).wait(128).to({_off:false},0).to({x:1385.3},5).to({x:1391.3},16,cjs.Ease.get(1)).to({x:1351.3},61).to({x:1311.3},4).to({x:3391.3},4).wait(220));

	// clip_game_prompt_1
	this.clip_game_prompt_1 = new lib.clip_game_prompt_1();
	this.clip_game_prompt_1.name = "clip_game_prompt_1";
	this.clip_game_prompt_1.setTransform(3414,777.95,1,1,0,0,0,705.1,333.4);
	this.clip_game_prompt_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.clip_game_prompt_1).wait(125).to({_off:false},0).to({x:1385.3},5).to({x:1391.3},16,cjs.Ease.get(1)).to({x:1351.3},62).to({x:1311.3},4).to({x:3391.3},4).wait(222));

	// clip_game_headline_3
	this.clip_game_headline_3 = new lib.clip_game_headline_3();
	this.clip_game_headline_3.name = "clip_game_headline_3";
	this.clip_game_headline_3.setTransform(-1148.85,1137.9,1,1,0,0,0,705.1,333.4);
	this.clip_game_headline_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.clip_game_headline_3).wait(216).to({_off:false},0).to({x:691.15},5).to({x:771.15},90).to({x:815.65},4,cjs.Ease.get(1)).to({x:-1043.35},4,cjs.Ease.get(-1)).wait(119));

	// clip_game_headline_2
	this.clip_game_headline_2 = new lib.clip_game_headline_2();
	this.clip_game_headline_2.name = "clip_game_headline_2";
	this.clip_game_headline_2.setTransform(-1148.85,949.85,1,1,0,0,0,705.1,333.4);
	this.clip_game_headline_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.clip_game_headline_2).wait(214).to({_off:false},0).to({x:691.15},5).to({x:771.15},90).to({x:815.65},4,cjs.Ease.get(1)).to({x:-1043.35},4,cjs.Ease.get(-1)).wait(121));

	// clip_game_headline_1
	this.clip_game_headline_1 = new lib.clip_game_headline_1();
	this.clip_game_headline_1.name = "clip_game_headline_1";
	this.clip_game_headline_1.setTransform(-1148.85,757.8,1,1,0,0,0,705.1,333.4);
	this.clip_game_headline_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.clip_game_headline_1).wait(212).to({_off:false},0).to({x:691.15},5).to({x:771.15},90).to({x:815.65},4,cjs.Ease.get(1)).to({x:-1043.35},4,cjs.Ease.get(-1)).wait(123));

	// countdown_1
	this.instance_3 = new lib.countdown_1_1();
	this.instance_3.setTransform(1594.6,442.45,2.2,2.2,0,0,0,567,566.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(86).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,y:442.55,alpha:1},5).to({scaleX:0.8289,scaleY:0.8289,x:1594.55,y:442.65},23).to({regX:567.1,regY:567.1,scaleX:0.385,scaleY:0.385,x:1594.5,y:442.6,alpha:0},5).wait(319));

	// countdown_2
	this.instance_4 = new lib.countdown_2_1();
	this.instance_4.setTransform(1693.25,396.7,2,2,0,0,0,567,567);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(58).to({_off:false},0).to({scaleX:1,scaleY:1,x:1643.9,y:419.65,alpha:1},5).to({regY:566.9,scaleX:0.7536,scaleY:0.7536,x:1631.7,y:425.3},23).to({regY:567,scaleX:0.7,scaleY:0.7,x:1629.05,y:426.55,alpha:0},5).wait(347));

	// countdown_3
	this.instance_5 = new lib.countdown_3_1();
	this.instance_5.setTransform(1674.95,405.9,2,2,0,0,0,567,567);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(29).to({_off:false},0).to({scaleX:1,scaleY:1,x:1634.75,y:424.25,alpha:1},5).to({regY:567.1,scaleX:0.7517,scaleY:0.7517,x:1624.8,y:428.9},24).to({regY:567,scaleX:0.7,scaleY:0.7,x:1622.65,y:429.75,alpha:0},5).wait(375));

	// clip_ohhenry_red_dot
	this.instance_6 = new lib.clip_ohhenry_red_dot();
	this.instance_6.setTransform(-504.55,-460.55,0.5399,0.5399,0,0,0,0,-0.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(119).to({_off:false},0).to({regY:0,scaleX:5.5077,scaleY:5.5077,x:-4573.05,y:-3183.1},7,cjs.Ease.get(1)).to({scaleX:5.3998,scaleY:5.3998,y:-3183.15},7,cjs.Ease.get(-1)).to({scaleX:5.5077,scaleY:5.5077,y:-3183.1},75).to({scaleX:5.6178,scaleY:5.6178,y:-3183.05},4).to({regY:-0.1,scaleX:0.5507,scaleY:0.5507,x:-509.15,y:-484.55},4).wait(222));

	// clip_ohhenry_red_dot
	this.instance_7 = new lib.clip_ohhenry_red_dot();
	this.instance_7.setTransform(2080.05,-176,0.3,0.3,0,0,0,616.1,226.7);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).to({regX:615.9,scaleX:1.575,scaleY:1.575,x:1920.1,y:24.05},5).to({scaleX:1.5,scaleY:1.5,y:24},5,cjs.Ease.get(-1)).wait(99).to({scaleX:1.575,scaleY:1.575,y:24.05},4).to({regX:616.1,scaleX:0.3,scaleY:0.3,x:2084.05,y:-172},4).to({_off:true},1).wait(80).to({_off:false},0).to({scaleX:5.0397,scaleY:5.0397,x:4276.2,y:-1695.65},4).to({scaleX:4.7998,scaleY:4.7998},4).to({scaleX:4.8957,scaleY:4.8957,y:-1695.6},84).wait(6).to({scaleX:5.0934,scaleY:5.0934,y:-1695.55},5).to({regY:226.6,scaleX:0.4697,scaleY:0.4697,x:2174.6,y:-320.1},5).wait(122));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333399").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape.setTransform(960,540);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(438));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4573,-3183.2,10601.8,5394.4);


(lib.baranim = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.clip_brokenbar();
	this.instance.setTransform(668.6,708.75,1.575,1.575,0,0,180,424.5,450);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:628.75},89,cjs.Ease.quadInOut).to({y:708.75},90,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-80,1337.2,1497.5);


(lib.clip_game = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"anim_in":10,"active":68,"anim_out":75};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
		if (window.onIntroComplete) window.onIntroComplete();
	}
	this.frame_68 = function() {
		this.stop();
	}
	this.frame_96 = function() {
		this.stop();
		if (window.onOutroComplete) window.onOutroComplete();
	}
	this.frame_115 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(39).call(this.frame_39).wait(29).call(this.frame_68).wait(28).call(this.frame_96).wait(19).call(this.frame_115).wait(1));

	// clip_game_calculating
	this.clip_game_calculating = new lib.clip_game_calculating();
	this.clip_game_calculating.name = "clip_game_calculating";
	this.clip_game_calculating.setTransform(1585.7,99.95,0.88,0.88,0,0,0,455.2,51.3);

	this.timeline.addTween(cjs.Tween.get(this.clip_game_calculating).wait(116));

	// oh_henry_meter
	this.oh_henry_meter = new lib.oh_henry_meter();
	this.oh_henry_meter.name = "oh_henry_meter";
	this.oh_henry_meter.setTransform(0,1244.25,1,1,0,0,0,32.3,581.1);

	this.timeline.addTween(cjs.Tween.get(this.oh_henry_meter).wait(22).to({y:1084.25},3).to({y:1044.25},9,cjs.Ease.get(1)).wait(41).to({y:1004.25},4,cjs.Ease.get(1)).to({y:1244.25},5,cjs.Ease.get(-1)).wait(32));

	// clip_game_level_high
	this.clip_game_level_high = new lib.clip_game_level_high();
	this.clip_game_level_high.name = "clip_game_level_high";
	this.clip_game_level_high.setTransform(-9.75,757.2,1,1,-67.9849,0,0,0,51.2);
	this.clip_game_level_high.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.clip_game_level_high).wait(28).to({alpha:1},6).wait(41).to({alpha:0},6).wait(35));

	// clip_game_level_mid
	this.clip_game_level_mid = new lib.clip_game_level_mid();
	this.clip_game_level_mid.name = "clip_game_level_mid";
	this.clip_game_level_mid.setTransform(426.4,752.45,1,1,-41.6926,0,0,0,51.2);
	this.clip_game_level_mid.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.clip_game_level_mid).wait(25).to({alpha:1},6).wait(45).to({alpha:0},6).wait(34));

	// clip_game_level_low
	this.clip_game_level_low = new lib.clip_game_level_low();
	this.clip_game_level_low.name = "clip_game_level_low";
	this.clip_game_level_low.setTransform(550.45,997.6,1,1,-20.1996,0,0,0,51.2);
	this.clip_game_level_low.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.clip_game_level_low).wait(22).to({alpha:1},6).wait(49).to({alpha:0},6).wait(33));

	// clip_dial
	this.instance = new lib.clip_dial();
	this.instance.setTransform(-175,1266.45,0.2,0.2,0,0,0,-0.2,1242);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({regX:-0.1,regY:1241.8,scaleX:1.1,scaleY:1.1,x:-135.05,y:1226.45},6,cjs.Ease.get(1)).to({regX:0,scaleX:1,scaleY:1,x:-135},6,cjs.Ease.get(-1)).wait(60).to({regX:-0.1,scaleX:1.1,scaleY:1.1,x:-135.05},6).to({regX:-0.2,regY:1242,scaleX:0.2,scaleY:0.2,x:-175,y:1266.45},6).wait(22));

	// clip_broken_bar
	this.instance_1 = new lib.clip_brokenbar();
	this.instance_1.setTransform(1718.2,774.55,0.3937,0.3937,0,0,180,424.4,450.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_2 = new lib.baranim();
	this.instance_2.setTransform(1758.2,694.5,1,1,0,0,0,668.6,708.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31).to({_off:false},0).to({regY:450,scaleX:1.89,scaleY:1.89,x:1758.3,y:694.55,alpha:1},6,cjs.Ease.get(1)).to({regX:424.5,scaleX:1.575,scaleY:1.575,x:1758.2},6,cjs.Ease.get(-1)).to({_off:true},1).wait(72));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(44).to({_off:false},0).wait(38).to({x:1678.2},7,cjs.Ease.get(1)).to({x:2558.2},4,cjs.Ease.get(-1)).wait(23));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176,-155.9,3402.8,1973.2);


(lib.content = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {clip_idle:10,clip_countdown:29,clip_game:49,clip_success:69};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(180));

	// Layer_1
	this.clip_idle = new lib.clip_idle();
	this.clip_idle.name = "clip_idle";
	this.clip_idle.setTransform(960,540,1,1,0,0,0,960,540);

	this.clip_countdown = new lib.clip_countdown();
	this.clip_countdown.name = "clip_countdown";
	this.clip_countdown.setTransform(960,540,1,1,0,0,0,960,540);

	this.clip_game = new lib.clip_game();
	this.clip_game.name = "clip_game";
	this.clip_game.setTransform(960,540,1,1,0,0,0,960,540);

	this.clip_success = new lib.clip_success();
	this.clip_success.name = "clip_success";
	this.clip_success.setTransform(960,540,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.clip_idle}]},10).to({state:[{t:this.clip_countdown}]},19).to({state:[{t:this.clip_game}]},20).to({state:[{t:this.clip_success}]},20).wait(111));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1286.5,-105.7,3272.6,1923);


// stage content:
(lib.OhHenryfrenchenglish = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
		if (window.onAnimateReady) window.onAnimateReady();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Content
	this.clip_content = new lib.content();
	this.clip_content.name = "clip_content";
	this.clip_content.setTransform(960,540,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get(this.clip_content).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);
// library properties:
lib.properties = {
	id: '8921704EE35344D5B30237EACC7B31AA',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#FFD900",
	opacity: 1.00,
	manifest: [
		{src:"images/_0_68000_79282_0_Oh_Henry_58g.png?1781897630043", id:"_0_68000_79282_0_Oh_Henry_58g"},
		{src:"images/index_atlas_1.png?1781897630002", id:"index_atlas_1"},
		{src:"images/index_atlas_2.png?1781897630002", id:"index_atlas_2"}
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
an.compositions['8921704EE35344D5B30237EACC7B31AA'] = {
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