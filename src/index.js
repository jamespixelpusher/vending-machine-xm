(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[1506,410,437,968],[0,820,449,968],[451,820,1053,408],[0,410,1208,408],[0,0,1786,408]]},
		{name:"index_atlas_2", frames: [[1387,0,288,968],[0,0,420,968],[0,970,420,968],[422,1230,874,408],[1121,1640,608,408],[422,1640,697,408],[1298,1230,519,408],[422,0,963,408],[422,410,963,408],[422,820,963,408]]},
		{name:"index_atlas_3", frames: [[521,0,319,408],[0,0,519,408],[521,410,319,408],[0,410,519,408],[842,0,319,408],[842,410,490,248]]}
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



(lib.CachedBmp_35 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_34 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_30 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_24 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_23 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_22 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(5);
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


(lib.countdown_anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {countdown_start:10};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_159 = function() {
		this.stop();
		if (window.onCountdownComplete) window.onCountdownComplete();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(159).call(this.frame_159).wait(1));

	// numbers
	this.instance = new lib.CachedBmp_31();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_32();
	this.instance_1.setTransform(-7.4,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_33();
	this.instance_2.setTransform(-0.2,0,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_34();
	this.instance_3.setTransform(-4.4,0,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_35();
	this.instance_4.setTransform(32.8,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance_1}]},29).to({state:[{t:this.instance_2}]},31).to({state:[{t:this.instance_3}]},29).to({state:[{t:this.instance_4}]},30).wait(31));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,0,224.5,484);


(lib.button_begin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.CachedBmp_15();
	this.instance.setTransform(219.55,-5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(6,1,1).p("A7as4MA21AAAIAAZxMg21AAAg");
	this.shape.setTransform(342.075,67.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006699").s().p("A7aM5IAA5xMA21AAAIAAZxg");
	this.shape_1.setTransform(342.075,67.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.button_begin, new cjs.Rectangle(163.6,-18.4,357,170.9), null);


(lib.ball = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFF66").ss(6,1,1).p("AbDAAQAALNn8H6Qn6H8rNAAQrMAAn7n8Qn7n6AArNQAArMH7n7QH7n7LMAAQLNAAH6H7QH8H7AALMg");
	this.shape.setTransform(173.05,173.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC3333").s().p("AzHTHQn7n6AArNQAArMH7n7QH7n7LMAAQLNAAH6H7QH8H7AALMQAALNn8H6Qn6H8rNAAQrMAAn7n8g");
	this.shape_1.setTransform(173.05,173.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ball, new cjs.Rectangle(-3,-3,352.1,352.1), null);


(lib.clip_thanks = function(mode,startPosition,loop,reversed) {
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
	this.frame_30 = function() {
		this.stop();
		if (window.onIntroComplete) window.onIntroComplete();
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_80 = function() {
		this.stop();
		if (window.onOutroComplete) window.onOutroComplete();
	}
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30).call(this.frame_30).wait(9).call(this.frame_39).wait(41).call(this.frame_80).wait(19).call(this.frame_99).wait(1));

	// Layer_3
	this.instance = new lib.CachedBmp_22();
	this.instance.setTransform(879.55,439.15,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_23();
	this.instance_1.setTransform(718.65,439.15,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_24();
	this.instance_2.setTransform(829.55,439.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance_1}]},29).to({state:[{t:this.instance_2}]},20).wait(41));

	// Layer_5
	this.ball = new lib.ball();
	this.ball.name = "ball";
	this.ball.setTransform(-247,777.25,1,1,0,0,0,173.1,173.1);
	this.ball._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ball).wait(10).to({_off:false},0).to({x:953.3},20,cjs.Ease.get(1)).wait(29).to({x:2153.3},21,cjs.Ease.get(-1)).wait(20));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333399").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape.setTransform(960,540);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6699FF").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_1.setTransform(960,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(100));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-423.1,-1,2752.4,1082);


(lib.clip_success = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"anim_in":10,"active":39,"anim_out":59};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_30 = function() {
		this.stop();
		if (window.onIntroComplete) window.onIntroComplete();
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_80 = function() {
		this.stop();
		if (window.onOutroComplete) window.onOutroComplete();
	}
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30).call(this.frame_30).wait(9).call(this.frame_39).wait(41).call(this.frame_80).wait(19).call(this.frame_99).wait(1));

	// Layer_3
	this.instance = new lib.CachedBmp_19();
	this.instance.setTransform(879.55,439.15,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_20();
	this.instance_1.setTransform(718.65,439.15,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_21();
	this.instance_2.setTransform(829.55,439.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance_1}]},29).to({state:[{t:this.instance_2}]},20).wait(41));

	// Layer_5
	this.ball = new lib.ball();
	this.ball.name = "ball";
	this.ball.setTransform(-247,777.25,1,1,0,0,0,173.1,173.1);
	this.ball._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ball).wait(10).to({_off:false},0).to({x:953.3},20,cjs.Ease.get(1)).wait(29).to({x:2153.3},21,cjs.Ease.get(-1)).wait(20));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333399").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape.setTransform(960,540);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6699FF").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_1.setTransform(960,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(100));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-423.1,-1,2752.4,1082);


(lib.clip_idle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"anim_in":10,"active":44,"anim_out":64};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_35 = function() {
		this.stop();
		if (window.onIntroComplete) window.onIntroComplete();
	}
	this.frame_44 = function() {
		this.stop();
	}
	this.frame_85 = function() {
		this.stop();
		if (window.onOutroComplete) window.onOutroComplete();
	}
	this.frame_104 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(35).call(this.frame_35).wait(9).call(this.frame_44).wait(41).call(this.frame_85).wait(19).call(this.frame_104).wait(1));

	// button_begin
	this.button_begin = new lib.button_begin();
	this.button_begin.name = "button_begin";
	this.button_begin.setTransform(934.25,-130,1,1,0,0,0,342.1,70);

	this.timeline.addTween(cjs.Tween.get(this.button_begin).wait(10).to({y:590},12).to({y:710},9,cjs.Ease.get(1)).to({x:942.55,y:590},4,cjs.Ease.get(-1)).wait(29).to({x:934.25,y:710},9,cjs.Ease.get(1)).to({y:-130},4,cjs.Ease.get(-1)).wait(28));

	// test_ball
	this.ball = new lib.ball();
	this.ball.name = "ball";
	this.ball.setTransform(-247,777.25,1,1,0,0,0,173.1,173.1);
	this.ball._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ball).wait(10).to({_off:false},0).to({x:942.55},25,cjs.Ease.get(1)).wait(29).to({x:2153.3},21,cjs.Ease.get(-0.99)).wait(20));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333399").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape.setTransform(960,540);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6699FF").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_1.setTransform(960,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(105));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-423.1,-218.4,2752.4,1299.4);


(lib.clip_game = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"anim_in":10,"active":39,"anim_out":59};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_30 = function() {
		this.stop();
		if (window.onIntroComplete) window.onIntroComplete();
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_80 = function() {
		this.stop();
		if (window.onOutroComplete) window.onOutroComplete();
	}
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30).call(this.frame_30).wait(9).call(this.frame_39).wait(41).call(this.frame_80).wait(19).call(this.frame_99).wait(1));

	// Layer_3
	this.instance = new lib.CachedBmp_16();
	this.instance.setTransform(879.55,439.15,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_17();
	this.instance_1.setTransform(718.65,439.15,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_18();
	this.instance_2.setTransform(829.55,439.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance_1}]},29).to({state:[{t:this.instance_2}]},20).wait(41));

	// Layer_5
	this.ball = new lib.ball();
	this.ball.name = "ball";
	this.ball.setTransform(-247,777.25,1,1,0,0,0,173.1,173.1);
	this.ball._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ball).wait(10).to({_off:false},0).to({x:953.3},20,cjs.Ease.get(1)).wait(29).to({x:2153.3},21,cjs.Ease.get(-1)).wait(20));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333399").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape.setTransform(960,540);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6699FF").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_1.setTransform(960,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(100));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-423.1,-1,2752.4,1082);


(lib.clip_countdown = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"anim_in":10,"active":39,"anim_out":59};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_30 = function() {
		this.stop();
		if (window.onIntroComplete) window.onIntroComplete();
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_80 = function() {
		this.stop();
		if (window.onOutroComplete) window.onOutroComplete();
	}
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30).call(this.frame_30).wait(9).call(this.frame_39).wait(41).call(this.frame_80).wait(19).call(this.frame_99).wait(1));

	// countdown_clip
	this.countdown_anim = new lib.countdown_anim();
	this.countdown_anim.name = "countdown_anim";
	this.countdown_anim.setTransform(939.35,348.1,1,1,0,0,0,104.9,242);

	this.timeline.addTween(cjs.Tween.get(this.countdown_anim).wait(100));

	// test_ball
	this.ball = new lib.ball();
	this.ball.name = "ball";
	this.ball.setTransform(-247,777.25,1,1,0,0,0,173.1,173.1);
	this.ball._off = true;

	this.timeline.addTween(cjs.Tween.get(this.ball).wait(10).to({_off:false},0).to({x:953.3},20,cjs.Ease.get(1)).wait(29).to({x:2153.3},21,cjs.Ease.get(-1)).wait(20));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333399").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape.setTransform(960,540);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6699FF").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_1.setTransform(960,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(100));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-423.1,-1,2752.4,1082);


(lib.content = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {clip_idle:10,clip_countdown:29,clip_game:49,clip_success:69,clip_thanks:89};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(180));

	// test
	this.instance = new lib.CachedBmp_25();
	this.instance.setTransform(1553.3,872.25,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_26();
	this.instance_1.setTransform(1575.5,872.25,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_27();
	this.instance_2.setTransform(1001.05,872.25,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_28();
	this.instance_3.setTransform(1228.9,872.25,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_29();
	this.instance_4.setTransform(1145.6,872.25,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_30();
	this.instance_5.setTransform(1184.35,872.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},10).to({state:[{t:this.instance_2}]},19).to({state:[{t:this.instance_3}]},20).to({state:[{t:this.instance_4}]},20).to({state:[{t:this.instance_5}]},20).wait(91));

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

	this.clip_thanks = new lib.clip_thanks();
	this.clip_thanks.name = "clip_thanks";
	this.clip_thanks.setTransform(960,540,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.clip_idle}]},10).to({state:[{t:this.clip_countdown}]},19).to({state:[{t:this.clip_game}]},20).to({state:[{t:this.clip_success}]},20).to({state:[{t:this.clip_thanks}]},20).wait(91));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-218.4,1921,1298.9);


// stage content:
(lib.OhHenry = function(mode,startPosition,loop,reversed) {
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
p.nominalBounds = new cjs.Rectangle(2513.3,1412.3,-611.5000000000002,-336);
// library properties:
lib.properties = {
	id: '8921704EE35344D5B30237EACC7B31AA',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png?1780678033828", id:"index_atlas_1"},
		{src:"images/index_atlas_2.png?1780678033829", id:"index_atlas_2"},
		{src:"images/index_atlas_3.png?1780678033829", id:"index_atlas_3"}
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