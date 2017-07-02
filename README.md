autoSave
===========
A autoSave jQuery Plugin

How to use:
-------------------------

1. Include necessary JS files

	```
	<script src="jquery.js"></script>
	<script src="jquery.autoSave.min.js"></script>
  	```

2. (Optional) Add autoSave CSS file. Please tweak it to serve your needs.

	```
	<link rel="stylesheet" href="style.css" />
	```

3. Create the following HTML element

	```
	<textarea id="text"></textarea>
	<span id="msg"></span>
	```

4. Use plugin by following script

	```
	var txtContent = $("#text");

	if (localStorage) {  
		var content = localStorage.getItem("autoSave");
		if (content) {
				txtContent.text(content);
		}
	}

	txtContent.autoSave(function() {
		var time = showTime();
		$("#msg").text("Draft Autosaved " + time);
	}, 500);
	```
	
6. Have fun:-)


Compatibility:
-------------------------

* IE8 and above, Firefox, Chrome, Safari and Opera
	
Live Demo:
-------------------------

* [Homepage](http://geniuscarrier.com)
* [Demo](http://geniuscarrier.com/autosave-a-jquery-plugin/)

License:
-------------------------
Released under the [MIT license](http://opensource.org/licenses/MIT).
