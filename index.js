function addTextBox(labelName, textboxName, onElement) {

//Create an input type dynamically.
var element = document.createElement("input");

//Create Labels
var label = document.createElement("Label");
label.innerHTML = labelName;

//Assign different attributes to the element.
element.setAttribute("type", "text");
element.setAttribute("value", "");
element.setAttribute("name", textboxName);
element.setAttribute("style", "width:200px");

label.setAttribute("style", "font-weight:normal");

// 'foobar' is the div id, where new fields are to be added
var foo = document.getElementById(onElement);

//Append the element in page (in span).
foo.appendChild(label);
foo.appendChild(element);
}

function loadPage() {
let div = document.createElement('div');
div.setAttribute("id", "div");
div.innerHTML = 'This should be on top of the text boxes';

let div2 = document.createElement('div');
div2.setAttribute("id", "div2")


var andrew = document.getElementById('basicInfo');
andrew.appendChild(div);
andrew.appendChild(div2);

}

function loadNavBar() {
  let navbar1 = document.createElement('div');
  navbar1.setAttribute("id", "navbar1");
  navbar1.innerHTML = "<ul> <li><a href='#'>Home</a></li> <li><a href='#'>Data Input</a></li> <li><a href='#'>About</a></li> </ul>"

  var sectionNav = document.getElementById("navbar");
  sectionNav.appendChild(navbar1);
}

//Various start up scripts and preparation
loadPage();
loadNavBar();


/* Adding text boxes to the basic info screen. We will need text boxes for all the various inputs*/
addTextBox('First Name', 'txtFirstName', 'div2');
addTextBox('Middle Name', 'txtMiddleName', 'div2');
addTextBox('Last Name', 'txtLastName', 'div2');
