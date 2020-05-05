function hideClass(className) {
  var divsToHide = document.getElementsByClassName(className); //divsToHide is an array
      for(var i = 0; i < divsToHide.length; i++){
          divsToHide[i].style.visibility = "hidden"; // or
          divsToHide[i].style.display = "none"; // depending on what you're doing
      }
}

function showClass(className) {
  var divsToShow = document.getElementsByClassName(className); //divsToHide is an array
      for(var i = 0; i < divsToShow.length; i++){
          divsToShow[i].style.visibility = "visible"; // or
          divsToShow[i].style.display = "block"; // depending on what you're doing
      }
}

function loadNavBar() {
  let navbar1 = document.createElement('div');
  navbar1.setAttribute("id", "navbar1");
  navbar1.innerHTML = "<ul> <li><a href='#' class='anchor'>Home</a></li> <li><a href='#' class='anchor'>Data Input</a></li> <li><a href='#' class='anchor'>Log in</a></li> </ul>";
  navbar1.classList.add("navbar1");

  var sectionNav = document.getElementById("navbar");
  sectionNav.appendChild(navbar1);
}

function displayGuests() {

  let formattedGuests = '';

  var myGuests = getGuests();
 
  for (var key in myGuests) {
  
 
      formattedGuests +=
  
        '<div class="summaryDisplay">' +
        '      <div class="summaryLabels">          <label for="' + myGuests[key].guestID + '">' +
        '                  <span>' + myGuests[key].guestID + ': </span>' +
        '                </label> </div>' +
        '     <div class="SummaryValues"> <span>' + myGuests[key].firstName + ' ' + myGuests[key].lastName + ' </span></div>'
          '</div>';
    }
  
return formattedGuests;
}





function loadPage() {

//Creating splash screen
let displayGuestsDiv = document.createElement('div');
displayGuestsDiv.setAttribute("id", "displayGuestsDiv");
displayGuestsDiv.innerHTML = '<p>Current guests</p>';
displayGuestsDiv.classList.add("sectionHeader");

let displayGuestsDiv2 = document.createElement('div');
displayGuestsDiv2.setAttribute("id", "displayGuestsDiv2");
displayGuestsDiv2.innerHTML = displayGuests();

// //creating the footer
// let divfooter = document.createElement('div');
// divfooter.setAttribute("id", "divfooter");
// //divfooter.innerHTML = '<div class="footer"> <div class="footerColumn"></div><div class="footerColumn"><div> About </div> <div>Login</div>   </div> <div class="footerColumn"> <div> Long-term Application </div> <div> Short-term Application </div>  <div> Print Forms </div>      </div>   </div>'
// divfooter.innerHTML = '<ul class="footerColumn"> <li><a href="#" class="anchor">Home</a></li> <li><a href="#" class="anchor">Data Input</a></li> <li><a href="#" class="anchor">Log in</a></li> </ul>';
// divfooter.classList.add("divQuestionContent");



//Appending the divs to the various sections
var displayGuests = document.getElementById('displayGuests');
displayGuests.appendChild(displayGuestsDiv);
displayGuests.appendChild(displayGuestsDiv2);

//var footer = document.getElementById('footer');
//footer.appendChild(divfooter);

}


//Various start up scripts and preparation
loadPage();
loadNavBar();


//Creating the navigation events in this area
var elements = document.getElementsByClassName("navButtons");

var navigationControl = function() {
    var attribute = this.getAttribute("id");
    Navigation(attribute);
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', navigationControl, false);
}
//Navigation Events end


//navbar items
var anchors = document.querySelectorAll('.anchor');

for (var i=0; i<anchors.length; i++) {
    anchors[i].addEventListener('click', handler, false);
}

function handler() {
  //if navbar, Home is selected
if(this.innerHTML === 'Home') {
  window.location.replace("/");
  showClass('splashScreen');
  hideClass('basicInfo');
  hideClass('addressInfo');
  hideClass('abuserInfo');
  hideClass('medicalAndFinancial');
  hideClass('familyAndFriends');
  hideClass('generalInfo');
  hideClass('summaryPage');
}

if(this.innerHTML === 'Data Input') {
  window.location.replace("/DataInput");
}
}

/* All navbar code */
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar1");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

/* Ending of navbar code */







