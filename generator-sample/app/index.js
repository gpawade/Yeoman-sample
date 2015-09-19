var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
	 
	 // name 'constructor' is important here
	 constructor : function(){
	 	generators.Base.apply(this, arguments);

	 	//Next, add your custom code 
	 	console.log('constructor running...');
	 },

	 method1 : function(){
	 	console.log('method1 is running..');
	 },

	 method2 : function(){

	 	console.log('method2 is running...');
	 }
});