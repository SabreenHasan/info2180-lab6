window.onload = function () {
	var searchButton = document.getElementById("searchButton");
	var xhttp; 
	
	searchButton.addEventListener("click", function buttonClick(e) {
		e.preventDefault();
		xhttp = new XMLHttpRequest();
		var textField = document.getElementById("searchField").value;

		var url = "superheroes.php?query=" + textField;
		xhttp.onreadystatechange = loadDoc;
		xhttp.open("GET", url);
		xhttp.send();	
	});


	function loadDoc() {
		if (xhttp.readyState === XMLHttpRequest.DONE) 
		{
			if(xhttp.status === 200) 
			{
				var retrievedInfo = xhttp.responseText;
				var textField = document.getElementById("searchField").value;
				alert(retrievedInfo);		
			}
			else {
				alert("ERROR!");
			}
		}
	}
};

