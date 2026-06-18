(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[965,1082,519,408],[0,1082,963,408],[1486,1082,319,408],[0,0,1920,1080]]}
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



(lib.CachedBmp_9 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.screen6 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
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


(lib.clip_idle_headline = function(mode,startPosition,loop,reversed) {
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
	this.idle_headline = new cjs.Text("MAKE", "bold 156px 'Praktika Rnd ExtraBold Cnd'", "#FFFFFF");
	this.idle_headline.name = "idle_headline";
	this.idle_headline.lineHeight = 194;
	this.idle_headline.lineWidth = 904;
	this.idle_headline.parent = this;
	this.idle_headline.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.idle_headline).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clip_idle_headline, new cjs.Rectangle(0,0,907.7,473.6), null);


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
	this.idle_cta = new cjs.Text("TAP TO START.", "bold 70px 'Praktika Rnd ExtraBold Cnd'", "#FFFFFF");
	this.idle_cta.name = "idle_cta";
	this.idle_cta.lineHeight = 88;
	this.idle_cta.lineWidth = 322;
	this.idle_cta.parent = this;
	this.idle_cta.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.idle_cta).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clip_idle_cta, new cjs.Rectangle(0,0,326.1,90.1), null);


(lib.clip_game_prompt = function(mode,startPosition,loop,reversed) {
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
	this.game_prompt = new cjs.Text("LET'S HEAR\nTHAT GRUMBLE!", "bold 230px 'Praktika Rnd ExtraBold Cnd'", "#FFFFFF");
	this.game_prompt.name = "game_prompt";
	this.game_prompt.textAlign = "right";
	this.game_prompt.lineHeight = 190;
	this.game_prompt.lineWidth = 1406;
	this.game_prompt.parent = this;
	this.game_prompt.setTransform(1240.25,186.05);

	this.timeline.addTween(cjs.Tween.get(this.game_prompt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clip_game_prompt, new cjs.Rectangle(-168,184.1,1410.3,666.6999999999999), null);


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
	this.game_level_high = new cjs.Text("MUST HAVE OH HENRY! RIGHT NOW", "bold 80px 'Praktika Rnd ExtraBold Cnd'", "#FFFFFF");
	this.game_level_high.name = "game_level_high";
	this.game_level_high.lineHeight = 5;
	this.game_level_high.lineWidth = 906;
	this.game_level_high.parent = this;
	this.game_level_high.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.game_level_high).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clip_game_level_high, new cjs.Rectangle(0,0,910.2,102.4), null);


(lib.clip_game_headline = function(mode,startPosition,loop,reversed) {
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
	this.game_headline = new cjs.Text("MAKE THAT\nGRUMMMMBLEEE\nNOISE", "bold 230px 'Praktika Rnd ExtraBold Cnd'", "#FFFFFF");
	this.game_headline.name = "game_headline";
	this.game_headline.lineHeight = 190;
	this.game_headline.lineWidth = 1406;
	this.game_headline.parent = this;
	this.game_headline.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.game_headline).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clip_game_headline, new cjs.Rectangle(0,0,1410.3,666.7), null);


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
	this.game_calculating = new cjs.Text("CALCULATING HUNGER LEVEL", "bold 80px 'Praktika Rnd ExtraBold Cnd'", "#FFFFFF");
	this.game_calculating.name = "game_calculating";
	this.game_calculating.lineHeight = 5;
	this.game_calculating.lineWidth = 906;
	this.game_calculating.parent = this;
	this.game_calculating.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.game_calculating).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clip_game_calculating, new cjs.Rectangle(0,0,910.2,102.4), null);


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
	this.countdown_tagline2.lineWidth = 623;
	this.countdown_tagline2.parent = this;
	this.countdown_tagline2.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.countdown_tagline2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clip_countdown_tagline2, new cjs.Rectangle(0,0,626.7,122.1), null);


(lib.clip_countdown_tagline1 = function(mode,startPosition,loop,reversed) {
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
	this.countdown_tagline1 = new cjs.Text("TAKES CARE\nOF HUNGER.", "bold 150px 'Praktika Rnd ExtraBold Cnd'", "#5B3427");
	this.countdown_tagline1.name = "countdown_tagline1";
	this.countdown_tagline1.lineHeight = 127;
	this.countdown_tagline1.lineWidth = 630;
	this.countdown_tagline1.parent = this;
	this.countdown_tagline1.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.countdown_tagline1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clip_countdown_tagline1, new cjs.Rectangle(0,0,633.7,315), null);


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
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(879.55,439.15,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_8();
	this.instance_1.setTransform(718.65,439.15,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_9();
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
p.nominalBounds = new cjs.Rectangle(-1,-13.1,1922,1094.1);


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

	// idle_cta
	this.clip_idle_cta = new lib.clip_idle_cta();
	this.clip_idle_cta.name = "clip_idle_cta";
	this.clip_idle_cta.setTransform(299.15,569.65,1,1,0,0,0,163.1,45.1);

	this.timeline.addTween(cjs.Tween.get(this.clip_idle_cta).wait(105));

	// idle_headline
	this.clip_idle_headline = new lib.clip_idle_headline();
	this.clip_idle_headline.name = "clip_idle_headline";
	this.clip_idle_headline.setTransform(510.4,269.35,1,1,0,0,0,453.8,236.8);

	this.timeline.addTween(cjs.Tween.get(this.clip_idle_headline).wait(105));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD900").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape.setTransform(960,540);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(105));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


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
	this.clip_game_calculating = new lib.clip_game_calculating();
	this.clip_game_calculating.name = "clip_game_calculating";
	this.clip_game_calculating.setTransform(703.45,724.1,1,1,0,0,0,455.1,51.2);

	this.clip_game_level_high = new lib.clip_game_level_high();
	this.clip_game_level_high.name = "clip_game_level_high";
	this.clip_game_level_high.setTransform(703.45,573.15,1,1,0,0,0,455.1,51.2);

	this.clip_game_level_mid = new lib.clip_game_level_mid();
	this.clip_game_level_mid.name = "clip_game_level_mid";
	this.clip_game_level_mid.setTransform(692.45,422.3,1,1,0,0,0,444.1,51.2);

	this.clip_game_level_low = new lib.clip_game_level_low();
	this.clip_game_level_low.name = "clip_game_level_low";
	this.clip_game_level_low.setTransform(692.45,271.45,1,1,0,0,0,444.1,51.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.clip_game_level_low},{t:this.clip_game_level_mid},{t:this.clip_game_level_high},{t:this.clip_game_calculating}]}).wait(100));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333399").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape.setTransform(960,540);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD700").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_1.setTransform(960,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(100));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,1922,1082);


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
	this.frame_13 = function() {
		this.stop();
		if (window.onIntroComplete) window.onIntroComplete();
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_61 = function() {
		this.stop();
		if (window.onOutroComplete) window.onOutroComplete();
	}
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13).call(this.frame_13).wait(26).call(this.frame_39).wait(22).call(this.frame_61).wait(38).call(this.frame_99).wait(1));

	// clip_countdown_tagline2
	this.clip_countdown_tagline2 = new lib.clip_countdown_tagline2();
	this.clip_countdown_tagline2.name = "clip_countdown_tagline2";
	this.clip_countdown_tagline2.setTransform(382.85,999.05,1,1,0,0,0,313.3,61.1);

	this.timeline.addTween(cjs.Tween.get(this.clip_countdown_tagline2).wait(100));

	// clip_game_headline
	this.clip_game_prompt = new lib.clip_game_prompt();
	this.clip_game_prompt.name = "clip_game_prompt";
	this.clip_game_prompt.setTransform(1351.3,777.95,1,1,0,0,0,705.1,333.4);

	this.clip_game_headline = new lib.clip_game_headline();
	this.clip_game_headline.name = "clip_game_headline";
	this.clip_game_headline.setTransform(731.15,321.8,1,1,0,0,0,705.1,333.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.clip_game_headline},{t:this.clip_game_prompt}]}).wait(100));

	// clip_countdown_tagline1
	this.clip_countdown_tagline1 = new lib.clip_countdown_tagline1();
	this.clip_countdown_tagline1.name = "clip_countdown_tagline1";
	this.clip_countdown_tagline1.setTransform(381.35,823.9,1,1,0,0,0,316.8,157.5);

	this.timeline.addTween(cjs.Tween.get(this.clip_countdown_tagline1).wait(100));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333399").ss(1,1,1).p("EiV/hUXMEr/AAAMAAACovMkr/AAAg");
	this.shape.setTransform(960,540);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD900").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_1.setTransform(960,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(100));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-11.6,1922,1306.8999999999999);


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
p.nominalBounds = new cjs.Rectangle(-0.5,-13.1,1921,1308.3999999999999);


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
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png?1781819039453", id:"index_atlas_1"}
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