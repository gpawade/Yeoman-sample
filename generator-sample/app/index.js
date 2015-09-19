var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
	 
	 // name 'constructor' is important here
	 constructor : function(){
	 	generators.Base.apply(this, arguments);

	 	//Next, add your custom code 
	 	console.log('constructor running...');

	 	//this make 'appname' a required argument
	 	this.argument('appname', { type: String, required : true});

	 	// and access it.
	 	this.appname = this.appname;


	 	// options are commmand line flag... e.g. --jquery
	 	this.option('jquery', { 
	 		desc : 'include jquery lib in application', 
	 		type : Boolean
	 	});
	 	this.option('bootstrap', { 
	 		desc : 'include bootstrap lib in application',
	 		type : Boolean
	 	});

	 	//console.log('options', this.options.jquery);

	 },

	 copyTheme : function(){

	 	if(this.options.bootstrap){
	 		this.log('coping theme....');

	 		this.fs.copy(
	 				this.templatePath('theme'),
	 				this.destinationPath('theme')
	 			);
	 	}
	 },

	 copyJS : function(){

	 	this.log('coping js....');
		if(this.options.jquery){
	 		this.fs.copy(
	 				this.templatePath('js/jquery.min.js'),
	 				this.destinationPath('js/jquery.min.js')
	 			);
	 	}

	 	if(this.options.bootstrap){
	 		this.fs.copy(
	 				this.templatePath('js/bootstrap.min.js'),
	 				this.destinationPath('js/bootstrap.min.js')
	 			);
	 	}

	 	

	 },

	 render : function(){
	 	var _this = this;
	 	var templateObj = {
	 		jquery : _this.options.jquery,
	 		bootstrap : _this.options.bootstrap
	 	};

	 	this.fs.copyTpl(
	      this.templatePath('index.html'),
	      this.destinationPath('index.html'),
	      templateObj
	    );
	 }

	 /*
	 jquerySetup : function(){
	 	console.log('jquerySetup is running..');

	 	if(this.options.jquery)
	 		this.log('jquery is enable');

	 	
	 },

	 bootstrapSetup : function(){

	 	this.log('bootstrapSetup is running...');

	 	if(this.options.bootstrap)
	 		this.log('bootstrap is enable');
	 },


	 path : function(){
	 	//Destination path 
	 	this.log(this.destinationRoot());
	 	this.log(this.destinationPath('index.html'));

	 	//Source Path
	 	this.log(this.sourceRoot());
	 	this.log(this.templatePath('index.js'));
	 }*/
});