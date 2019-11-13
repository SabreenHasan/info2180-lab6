window.onload = function () {
	var searchButton = document.getElementById("searchButton");
	var xhttp; 
	
	searchButton.addEventListener("click", function buttonClick(e) {
		e.preventDefault();
		xhttp = new XMLHttpRequest();
		var textField = document.getElementById("searchField").value;

		var url = "http://localhost:8080/superheroes.php?query=" + textField;
		xhttp.onreadystatechange = loadDoc;
		xhttp.open("GET", url, true);
		xhttp.send();	
	});


	function loadDoc() {
		if (xhttp.readyState === XMLHttpRequest.DONE) 
		{
			if(xhttp.status === 200) 
			{
				var retrievedInfo = xhttp.responseText;
				var textField = filter_var(document.getElementById("searchField").value, FILTER_SANITIZE_ENCODED);
				document.getElementById("result").toggleClass("alert").innerHTML = retrievedInfo;		
			}
			else {
				alert("File not found");
			}
		}
	}
};

