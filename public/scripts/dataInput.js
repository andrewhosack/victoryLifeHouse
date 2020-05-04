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





function loadPage() {

//Creating splash screen
let splashScreenDiv = document.createElement('div');
splashScreenDiv.setAttribute("id", "splashScreenDiv");
splashScreenDiv.innerHTML = '<p>Welcome to VictoryLife House!</p>';
splashScreenDiv.classList.add("sectionHeader");

let splashScreenDiv2 = document.createElement('div');
splashScreenDiv2.setAttribute("id", "splashScreenDiv2");
splashScreenDiv2.innerHTML = '<img src="Images/VLH.jpg" alt="banner of VLH" width="100%">';

let btnSplashScreen = document.createElement('div');
btnSplashScreen.setAttribute("id", "btnSplashScreen");
btnSplashScreen.innerHTML = '<input type="button" value="Let\'s get started! >>" id="btnSplashScreenNext" class = "navButtons">';
btnSplashScreen.classList.add("divBackAndNext");

let splashScreenTestimonials = document.createElement('div');
splashScreenTestimonials.setAttribute("id", "splashScreenTestimonials");

splashScreenTestimonials.innerHTML =
'  <div id="splashScreenTestimonialsHeader" class="sectionHeader"><p>Encouragment from previous success!</p></div><div class="container">' +
    '<img src="Images/bandmember.jpg" alt="Avatar" style="width:90px">' +
    '<p><span>Chris Fox.</span> Volunteer Money Management Instructor</p>' +
    '<p>"I\'ve been volunteering at VictoryLife House for five years. I appreciate what they are doing for the community, and I\'m always ready to come back."</p>' +
  '</div>' +
  '<div class="container">' +
    '<img src="Images/avatar_g2.jpg" alt="Avatar" style="width:90px">' +
    '<p><span>Rebecca Flex.</span> Loving daughter and mother of three</p>' +
    '<p>"Before VictoryLife House, I didn\'t have a direction. Although I still face a tough reality, I feel more equipped to move forward!"</p>' +
  '</div>';
  splashScreenTestimonials.classList.add('splashScreenTestimonials');



//creating the footer
let divfooter = document.createElement('div');
divfooter.setAttribute("id", "divfooter");
//divfooter.innerHTML = '<div class="footer"> <div class="footerColumn"></div><div class="footerColumn"><div> About </div> <div>Login</div>   </div> <div class="footerColumn"> <div> Long-term Application </div> <div> Short-term Application </div>  <div> Print Forms </div>      </div>   </div>'
divfooter.innerHTML = '<ul class="footerColumn"> <li><a href="#" class="anchor">Home</a></li> <li><a href="#" class="anchor">Data Input</a></li> <li><a href="#" class="anchor">Log in</a></li> </ul>';
divfooter.classList.add("divQuestionContent");

//Appending the divs to the various sections
var spashScreen = document.getElementById('displayGuests');
spashScreen.appendChild(splashScreenDiv);
spashScreen.appendChild(splashScreenDiv2);
spashScreen.appendChild(btnSplashScreen);
spashScreen.appendChild(splashScreenTestimonials);

var footer = document.getElementById('footer');
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
  clearFormTextboxes();
  showClass('splashScreen');
  hideClass('basicInfo');
  hideClass('addressInfo');
  hideClass('abuserInfo');
  hideClass('medicalAndFinancial');
  hideClass('familyAndFriends');
  hideClass('generalInfo');
  hideClass('summaryPage');
  window.location.replace("/");
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





function displayGuests() {

console.log(getGuests());

}

