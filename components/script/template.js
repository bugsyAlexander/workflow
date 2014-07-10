$(function (){
	var Mustache = require('mustache');

	$.getJSON('js/data.json', function(data) {
		var template = $('#awards').html();
		var html = Mustache.to_html(template, data);
		$('#adSection').html(html);
	}); // getJSON
}); // funciton 