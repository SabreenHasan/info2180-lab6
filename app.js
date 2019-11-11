window.onload = function () {
	var searchButton = document.getElementById("searchButton");
	var textField = document.getElementById("searchField").value;
	var xhttp; 
	
	searchButton.addEventListener("click", function buttonClick(e) {
		e.preventDefault();
		xhttp = new XMLHttpRequest()

		var url = "superheroes.php?query=" + textField;
		if (textField.length === 0) {
			xhttp.onreadystatechange = loadDoc;
			xhttp.open("GET", url);
			xhttp.send();
		}		
	});


	function loadDoc() {
		if (xhttp.readyState === XMLHttpRequest.DONE) 
		{
			if(xhttp.status === 200) 
			{
				var retrievedInfo = xhttp.responseText;
				alert(retrievedInfo);		
			}
			else {
				alert("ERROR!");
			}
		}
	}
};

