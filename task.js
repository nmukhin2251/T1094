// Recommended AMD module pattern for a Knockout component that:
//  - Can be referenced with just a single 'require' declaration
//  - Can be included in a bundle using the r.js optimizer
define([ 'text!./task.xml'], function( htmlString) {
	/**
	 * COMPONENT MODEL CONSTRUCTOR
	 */
	function task(params) {
	}
	
	/**
	 * COMPONENT MODEL METHODS
	 */
	(function(){
	}).call(task.prototype);
	
    // Return component definition
	return { viewModel: task, template: htmlString };
});

 //@ sourceURL=task