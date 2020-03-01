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
          divsToShow[i].style.display = "flex"; // depending on what you're doing
      }
}

//Scrolling to top of page
function topFunction() {
  document.getElementById("banner").scrollIntoView();
}

function loadNavBar() {
  let navbar1 = document.createElement('div');
  navbar1.setAttribute("id", "navbar1");
  navbar1.innerHTML = "<ul> <li><a href='#' class='anchor'>Home</a></li> <li><a href='#' class='anchor'>Data Input</a></li> <li><a href='#' class='anchor'>Log in</a></li> </ul>";
  navbar1.classList.add("navbar1");

  var sectionNav = document.getElementById("navbar");
  sectionNav.appendChild(navbar1);
}

function Navigation(btnClick) {

if(btnClick==='btnSplashScreenNext') {
    hideClass('splashScreen');
    showClass('basicInfo');
  }
if(btnClick==='btnBasicInfoNext') {
  hideClass('basicInfo');
  showClass('addressInfo');
}
if (btnClick==='btnAddressInfoNext') {
  hideClass('addressInfo');
  showClass('abuserInfo');
}
if (btnClick==='btnAbuserInfoNext')
{
  hideClass('abuserInfo');
  showClass('medicalAndFinancial');
}
if (btnClick==='btnMedicalAndFinancialNext')
{
  hideClass('medicalAndFinancial');
  showClass('familyAndFriends');
}
if (btnClick==='btnFamilyAndFriendsNext')
{
  hideClass('familyAndFriends');
  showClass('generalInfo');
}
if (btnClick==='btnGeneralInfoNext')
{
  hideClass('generalInfo');
  showClass('summaryPage');
}

if (btnClick==='btnAddressInfoPrevious') {
  hideClass('addressInfo');
  showClass('basicInfo');
}
if (btnClick==='btnAbuserInfoPrevious')
{
  hideClass('abuserInfo');
  showClass('addressInfo');
}
if (btnClick==='btnMedicalAndFinancialPrevious')
{
  hideClass('medicalAndFinancial');
  showClass('abuserInfo');
}
if (btnClick==='btnFamilyAndFriendsPrevious')
{
  hideClass('familyAndFriends');
  showClass('medicalAndFinancial');
}
if (btnClick==='btnGeneralInfoPrevious')
{
  hideClass('generalInfo');
  showClass('familyAndFriends');
}
if (btnClick==='btnSummaryPagePrevious')
{
  hideClass('summaryPage');
  showClass('generalInfo');
}


topFunction();

}



function loadPage() {

//Creating splash screen
let splashScreenDiv = document.createElement('div');
splashScreenDiv.setAttribute("id", "splashScreenDiv");
splashScreenDiv.innerHTML = '<p>Welcome to VictoryLife House!</p>';
splashScreenDiv.classList.add("sectionHeader");

let splashScreenDiv2 = document.createElement('div');
splashScreenDiv2.setAttribute("id", "splashScreenDiv2");
splashScreenDiv2.innerHTML = '<img src=".\\images\\VLH.jpg" alt="banner of VLH" width="100%">';

let btnSplashScreen = document.createElement('div');
btnSplashScreen.setAttribute("id", "btnSplashScreen");
btnSplashScreen.innerHTML = '<input type="button" value="Let\'s get started! >>" id="btnSplashScreenNext" class = "navButtons">';
btnSplashScreen.classList.add("divBackAndNext");

let splashScreenTestimonials = document.createElement('div');
splashScreenTestimonials.setAttribute("id", "splashScreenTestimonials");

splashScreenTestimonials.innerHTML =
'  <div id="splashScreenTestimonialsHeader" class="sectionHeader"><p>Encouragment from previous success!</p></div><div class="container">' +
    '<img src="./images/bandmember.jpg" alt="Avatar" style="width:90px">' +
    '<p><span>Chris Fox.</span> Volunteer Money Management Instructor</p>' +
    '<p>"I\'ve been volunteering at VictoryLife House for five years. I appreciate what they are doing for the community, and I\'m always ready to come back."</p>' +
  '</div>' +
  '<div class="container">' +
    '<img src="./images/avatar_g2.jpg" alt="Avatar" style="width:90px">' +
    '<p><span>Rebecca Flex.</span> Loving daughter and mother of three</p>' +
    '<p>"Before VictoryLife House, I didn\'t have a direction. Although I still face a tough reality, I feel more equipped to move forward!"</p>' +
  '</div>';
  splashScreenTestimonials.classList.add('splashScreenTestimonials');

//Creating the divs in the basic info
let div = document.createElement('div');
div.setAttribute("id", "div");
div.innerHTML = '<p>Let\'s first get started with some basic info!</p>';
div.classList.add("sectionHeader");

let div2 = document.createElement('div');
div2.setAttribute("id", "div2");
div2.classList.add("divQuestionContent");
div2.innerHTML = createForm('Basic Info', 'div2');


let btnBasicInfo = document.createElement('div');
btnBasicInfo.setAttribute("id", "btnBasicInfo");
btnBasicInfo.innerHTML = '<input type="button" value="Next Set of Questions >>" id="btnBasicInfoNext" class = "navButtons">';
btnBasicInfo.classList.add("divBackAndNext");

//Creating the divs in the address info
let div3 = document.createElement('div');
div3.setAttribute("id", "div3");
div3.innerHTML = '<p>We need some information about your previous and current addresses...</p>';
div3.classList.add("sectionHeader");

let div4 = document.createElement('div');
div4.setAttribute("id", "div4");
div4.classList.add("divQuestionContent");
div4.innerHTML = createForm('Address Info', 'div4');

let btnAddressInfo = document.createElement('div');
btnAddressInfo.setAttribute("id", "btnAddressInfo");
btnAddressInfo.innerHTML = '<input type="button" value="<< Previous Set of Questions" id="btnAddressInfoPrevious" class = "navButtons"><input type="button" value="Next Set of Questions >>" id="btnAddressInfoNext" class = "navButtons">';
btnAddressInfo.classList.add("divBackAndNext");

//Creating the divs in the abuser info
let div5 = document.createElement('div');
div5.setAttribute("id", "div5");
div5.innerHTML = '<p>Information about the reason you\'re here today, the abuse...</p>';
div5.classList.add("sectionHeader");

let div6 = document.createElement('div');
div6.setAttribute("id", "div6");
div6.classList.add("divQuestionContent");
div6.innerHTML = createForm('Abuser Info', 'div6');

let btnAbuserInfo = document.createElement('div');
btnAbuserInfo.setAttribute("id", "btnAbuserInfo");
btnAbuserInfo.innerHTML = '<input type="button" value="<< Previous Set of Questions" id="btnAbuserInfoPrevious" class = "navButtons"><input type="button" value="Next Set of Questions >>" id="btnAbuserInfoNext" class = "navButtons">';
btnAbuserInfo.classList.add("divBackAndNext");

//Creating the divs in the medical and financial info
let div7 = document.createElement('div');
div7.setAttribute("id", "div7");
div7.innerHTML = '<p>Some details about your personal medical and financial history...</p>';
div7.classList.add("sectionHeader");

let div8 = document.createElement('div');
div8.setAttribute("id", "div8");
div8.classList.add("divQuestionContent");
div8.innerHTML = createForm('Medical and Financial Info', 'div8');

let btnMedicalAndFinancial = document.createElement('div');
btnMedicalAndFinancial.setAttribute("id", "btnMedicalAndFinancial");
btnMedicalAndFinancial.innerHTML = '<input type="button" value="<< Previous Set of Questions" id="btnMedicalAndFinancialPrevious" class = "navButtons"><input type="button" value="Next Set of Questions >>" id="btnMedicalAndFinancialNext" class = "navButtons">';
btnMedicalAndFinancial.classList.add("divBackAndNext");

//Creating the divs in the family and friends info
let div9 = document.createElement('div');
div9.setAttribute("id", "div9");
div9.innerHTML = '<p>Let\'s talk about your family and friends...</p>';
div9.classList.add("sectionHeader");

let div10 = document.createElement('div');
div10.setAttribute("id", "div10");
div10.classList.add("divQuestionContent");
div10.innerHTML = createForm('Family and Friends Info', 'div10');

let btnFamilyAndFriends = document.createElement('div');
btnFamilyAndFriends.setAttribute("id", "btnFamilyAndFriends");
btnFamilyAndFriends.innerHTML = '<input type="button" value="<< Previous Set of Questions" id="btnFamilyAndFriendsPrevious" class = "navButtons"><input type="button" value="Next Set of Questions >>" id="btnFamilyAndFriendsNext" class = "navButtons">';
btnFamilyAndFriends.classList.add("divBackAndNext");

//Creating the divs in the general info
let div11 = document.createElement('div');
div11.setAttribute("id", "div11");
div11.innerHTML = '<p>A few more general questions...</p>';
div11.classList.add("sectionHeader");

let div12 = document.createElement('div');
div12.setAttribute("id", "div12");
div12.classList.add("divQuestionContent");
div12.innerHTML = createForm('General Info', 'div12');

let btnGeneralInfo = document.createElement('div');
btnGeneralInfo.setAttribute("id", "btnGeneralInfo");
btnGeneralInfo.innerHTML = '<input type="button" value="<< Previous Set of Questions" id="btnGeneralInfoPrevious" class = "navButtons"><input type="button" value="Next Set of Questions >>" id="btnGeneralInfoNext" class = "navButtons">';
btnGeneralInfo.classList.add("divBackAndNext");

//Creating the divs in the summary page
let div13 = document.createElement('div');
div13.setAttribute("id", "div13");
div13.innerHTML = '<p>A summary of your previous entries...</p>';
div13.classList.add("sectionHeader");

let div14 = document.createElement('div');
div14.setAttribute("id", "div14");
div14.classList.add("divQuestionContent");
div14.innerHTML = createForm('Summary Info', 'div14');

let btnSummaryPage = document.createElement('div');
btnSummaryPage.setAttribute("id", "btnSummaryPage");
btnSummaryPage.innerHTML = '<input type="button" value="<< Previous Set of Questions" id="btnSummaryPagePrevious" class = "navButtons">';
btnSummaryPage.classList.add("divBackAndNext");

//Appending the divs to the various sections
var spashScreen = document.getElementById('splashScreen');
spashScreen.appendChild(splashScreenDiv);
spashScreen.appendChild(splashScreenDiv2);
spashScreen.appendChild(btnSplashScreen);
spashScreen.appendChild(splashScreenTestimonials);

var basicInfo = document.getElementById('basicInfo');
basicInfo.appendChild(div);
basicInfo.appendChild(div2);
basicInfo.appendChild(btnBasicInfo);

var addressInfo = document.getElementById('addressInfo');
addressInfo.appendChild(div3);
addressInfo.appendChild(div4);
addressInfo.appendChild(btnAddressInfo);

var abuserInfo = document.getElementById('abuserInfo');
abuserInfo.appendChild(div5);
abuserInfo.appendChild(div6);
abuserInfo.appendChild(btnAbuserInfo);

var medicalAndFinancial = document.getElementById('medicalAndFinancial');
medicalAndFinancial.appendChild(div7);
medicalAndFinancial.appendChild(div8);
medicalAndFinancial.appendChild(btnMedicalAndFinancial);

var familyAndFriends = document.getElementById('familyAndFriends');
familyAndFriends.appendChild(div9);
familyAndFriends.appendChild(div10);
familyAndFriends.appendChild(btnFamilyAndFriends);

var generalInfo = document.getElementById('generalInfo');
generalInfo.appendChild(div11);
generalInfo.appendChild(div12);
generalInfo.appendChild(btnGeneralInfo);

var summaryPage = document.getElementById('summaryPage');
summaryPage.appendChild(div13);
summaryPage.appendChild(div14);
summaryPage.appendChild(btnSummaryPage);

//By default only show the first screen
hideClass('basicInfo');
hideClass('addressInfo');
hideClass('abuserInfo');
hideClass('medicalAndFinancial');
hideClass('familyAndFriends');
hideClass('generalInfo');
hideClass('summaryPage');
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


//Creating the forms visible/invisible options based on user selection
//var formSelects = document.getElementsByClassName("formSelects");

var visibilityControl = function(name, value, childGrouping) {
    let className = 'formClass' + childGrouping;
    var elements = document.getElementsByClassName(className);

    for (var i=0; i < elements.length; i++) {
      elements[i].removeAttribute("hidden");
    }


};

//for (var i = 0; i < formSelects.length; i++) {
  //  formSelects[i].addEventListener('click', visibilityControl, false);
//}
//Navigation Events end

//navbar items
var anchors = document.querySelectorAll('.anchor');

for (var i=0; i<anchors.length; i++) {
    anchors[i].addEventListener('click', handler, false);
}

function handler() {
  //if navbar, Home is selected
if(this.innerHTML === 'Home') {
  showClass('splashScreen');
  hideClass('basicInfo');
  hideClass('addressInfo');
  hideClass('abuserInfo');
  hideClass('medicalAndFinancial');
  hideClass('familyAndFriends');
  hideClass('generalInfo');
  hideClass('summaryPage');
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
