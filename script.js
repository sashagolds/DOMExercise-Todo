var buttonEnter = document.getElementById("enter");
// var buttonDelete = document.getElementsByClassName("buttonDelete");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

// 1. CREATE NEW LIST ELEMENTS WITH EVENT LISTENERS
function createListElement() {
	// ADD NEW LI WITH INPUT VALUE
	var liNew = document.createElement("li");
	liNew.appendChild(document.createTextNode(input.value));
	ul.appendChild(liNew);
	liNew.classList.add("listEntry");
	// RESET INPUT FIELD TO EMPTY
	input.value = "";

	// ADD EVENT LISTENER TO NEW LI
	liNew.addEventListener('click', function (event) {
		event.target.classList.toggle("done");
	})

	// CREATE DELETE BUTTON
	var buttonDelete = document.createElement("button");
	buttonDelete.classList.add("buttonDelete");
	// APPEND DELETE TEXT TO DELETE BUTTON
	buttonDelete.appendChild(document.createTextNode("Delete"));
	// APPEND DELETE BUTTON TO LI
	liNew.appendChild(buttonDelete);
	console.log("clicked");

	// ADD EVENT LISTENER TO BUTTON DELETE
	buttonDelete.addEventListener('click', function (event) {
		event.target.parentNode.remove();
	})
}

// 2. ADD EVENT LISTENER TO PRE-EXISTING LI
li.forEach(function(li) {
	li.addEventListener('click', function (event) {
		event.target.classList.toggle("done");
	})
});

// CONVERT buttonDelete HTML COLLECTION TO ARRAY (NEEDED FOR NEXT STEP)
var buttonDelete = Array.from(document.getElementsByClassName("buttonDelete"));

// ADD EVENT LISTENER TO PRE-EXISTING DELETE BUTTON
buttonDelete.forEach(function(buttonDelete) {
	buttonDelete.addEventListener('click', function (event) {
		event.target.parentNode.remove();
	})
});

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}



buttonEnter.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

