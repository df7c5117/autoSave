/*
 jQuery autoSave v1.0.4 - 2017-06-20
 (c) 2013 Yang Zhao - geniuscarrier.com
 (c) 2017 df7c5117 modified
 license: http://www.opensource.org/licenses/mit-license.php
 */
(function($) {
	$.fn.autoSave = function(callback, ms) {
		return this.each(
			function() {
			var timer = 0, 
				$this = $(this),
				delay = ms || 1000;
			$this.keyup(function() {
				clearTimeout(timer);
				var $context = $this.val();
				if(localStorage) {
					localStorage.setItem("autoSave", $context);
				}
				timer = setTimeout(function() {
					callback();
				}, delay);
			});
		});
	};
})(jQuery);

function showTime() {  
	var timeNow = new Date();
	var hours = timeNow.getHours();
	var minutes = timeNow.getMinutes();
	var seconds = timeNow.getSeconds();
	var timeString = "" + (hours);
	timeString += ((minutes < 10) ? ":0" : ":") + minutes;
	timeString += ((seconds < 10) ? ":0" : ":") + seconds;
	return timeString;
}

(function(){
	if(!window.localStorage) {
		console.log('浏览器不支持localStorage');
}
var size = 0;
for(item in window.localStorage) {
	if(window.localStorage.hasOwnProperty(item)) {
		size += window.localStorage.getItem(item).length;
	}
}
console.log('当前localStorage使用容量为' + (size / 1024).toFixed(2) + 'KB');
})()
