function addQuestionsToDiv(item, index, array) {

console.log(item.question, item.textboxName, item.onElement);
//Create an input type dynamically.
var element = document.createElement("input");

//Create Labels
var label = document.createElement("Label");
label.innerHTML = item.question;

//Assign different attributes to the element.
element.setAttribute("type", "text");
element.setAttribute("value", "");
element.setAttribute("name", item.textboxName);
element.setAttribute("style", "width:200px");

label.setAttribute("style", "font-weight:normal");
label.setAttribute("for", item.textboxName);

// 'foobar' is the div id, where new fields are to be added
var foo = document.getElementById(item.onElement);

//Append the element in page (in span).
foo.appendChild(label);
foo.appendChild(element);

}


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

function Navigation(btnClick, type) {

if (type === 'next') {

if(btnClick==='splashScreen') {
    hideClass('splashScreen');
    showClass('basicInfo');
  }
if(btnClick==='basicInfo') {
  hideClass('basicInfo');
  showClass('addressInfo');
}
if (btnClick==='addressInfo') {
  hideClass('addressInfo');
  showClass('abuserInfo');
}
if (btnClick==='abuserInfo')
{
  hideClass('abuserInfo');
  showClass('medicalAndFinancial');
}
if (btnClick==='medicalAndFinancial')
{
  hideClass('medicalAndFinancial');
  showClass('familyAndFriends');
}
if (btnClick==='familyAndFriends')
{
  hideClass('familyAndFriends');
  showClass('generalInfo');
}
if (btnClick==='generalInfo')
{
  hideClass('generalInfo');
  showClass('summaryPage');
}
}

else if (type === 'previous') {

if (btnClick==='addressInfo') {
  hideClass('addressInfo');
  showClass('basicInfo');
}
if (btnClick==='abuserInfo')
{
  hideClass('abuserInfo');
  showClass('addressInfo');
}
if (btnClick==='medicalAndFinancial')
{
  hideClass('medicalAndFinancial');
  showClass('abuserInfo');
}
if (btnClick==='familyAndFriends')
{
  hideClass('familyAndFriends');
  showClass('medicalAndFinancial');
}
if (btnClick==='generalInfo')
{
  hideClass('generalInfo');
  showClass('familyAndFriends');
}
if (btnClick==='summaryPage')
{
  hideClass('summaryPage');
  showClass('generalInfo');
}
}

}



function loadPage() {

//Creating splash screen
let splashScreenDiv = document.createElement('div');
splashScreenDiv.setAttribute("id", "splashScreenDiv");
splashScreenDiv.innerHTML = 'Welcome to VictoryLife House!';
splashScreenDiv.setAttribute('style', 'height:15vh; width:100%; display:flex; align-items:center;');
splashScreenDiv.classList.add("sectionHeader");

let splashScreenDiv2 = document.createElement('div');
splashScreenDiv2.setAttribute("id", "splashScreenDiv2");
splashScreenDiv2.innerHTML = '<img src=".\\images\\VLH.jpg" alt="banner of VLH" width="100%">';

let btnSplashScreen = document.createElement('div');
btnSplashScreen.setAttribute("id", "btnSplashScreen");
btnSplashScreen.innerHTML = '<input type="button" value="Let\'s get started! >>" id="btnSplashScreenNext">';
btnSplashScreen.setAttribute('style', 'display:flex; width:100%; justify-content:space-evenly; height:10vh; align-items:center;');

//Creating the divs in the basic info
let div = document.createElement('div');
div.setAttribute("id", "div");
div.innerHTML = 'Let\'s first get started with some basic info!';
div.setAttribute('style', 'height:15vh; width:100%; display:flex; align-items:center;');
div.classList.add("sectionHeader");

let div2 = document.createElement('div');
div2.setAttribute("id", "div2");

let btnBasicInfo = document.createElement('div');
btnBasicInfo.setAttribute("id", "btnBasicInfo");
btnBasicInfo.innerHTML = '<input type="button" value="Next Set of Questions >>" id="btnBasicInfoNext">';
btnBasicInfo.setAttribute('style', 'display:flex; width:100%; justify-content:space-evenly; height:10vh; align-items:center;');

//Creating the divs in the address info
let div3 = document.createElement('div');
div3.setAttribute("id", "div3");
div3.innerHTML = 'We need some information about your previous and current addresses...';
div3.setAttribute('style', 'height:15vh; width:100%; display:flex; align-items:center;');
div3.classList.add("sectionHeader");

let div4 = document.createElement('div');
div4.setAttribute("id", "div4");

let btnAddressInfo = document.createElement('div');
btnAddressInfo.setAttribute("id", "btnAddressInfo");
btnAddressInfo.innerHTML = '<input type="button" value="<< Previous Set of Questions" id="btnAddressInfoPrevious"><input type="button" value="Next Set of Questions >>" id="btnAddressInfoNext">';
btnAddressInfo.setAttribute('style', 'display:flex; width:100%; justify-content:space-evenly; height:10vh; align-items:center;');

//Creating the divs in the abuser info
let div5 = document.createElement('div');
div5.setAttribute("id", "div5");
div5.innerHTML = 'Information about the reason you\'re here today, the abuse...';
div5.setAttribute('style', 'height:15vh; width:100%; display:flex; align-items:center;');
div5.classList.add("sectionHeader");

let div6 = document.createElement('div');
div6.setAttribute("id", "div6");

let btnAbuserInfo = document.createElement('div');
btnAbuserInfo.setAttribute("id", "btnAbuserInfo");
btnAbuserInfo.innerHTML = '<input type="button" value="<< Previous Set of Questions" id="btnAbuserInfoPrevious"><input type="button" value="Next Set of Questions >>" id="btnAbuserInfoNext">';
btnAbuserInfo.setAttribute('style', 'display:flex; width:100%; justify-content:space-evenly; height:10vh; align-items:center;');

//Creating the divs in the medical and financial info
let div7 = document.createElement('div');
div7.setAttribute("id", "div7");
div7.innerHTML = 'Some details about your personal medical and financial history...';
div7.setAttribute('style', 'height:15vh; width:100%; display:flex; align-items:center;');
div7.classList.add("sectionHeader");

let div8 = document.createElement('div');
div8.setAttribute("id", "div8");

let btnMedicalAndFinancial = document.createElement('div');
btnMedicalAndFinancial.setAttribute("id", "btnMedicalAndFinancial");
btnMedicalAndFinancial.innerHTML = '<input type="button" value="<< Previous Set of Questions" id="btnMedicalAndFinancialPrevious"><input type="button" value="Next Set of Questions >>" id="btnMedicalAndFinancialNext">';
btnMedicalAndFinancial.setAttribute('style', 'display:flex; width:100%; justify-content:space-evenly; height:10vh; align-items:center;');

//Creating the divs in the family and friends info
let div9 = document.createElement('div');
div9.setAttribute("id", "div9");
div9.innerHTML = 'Let\'s talk about your family and friends...';
div9.setAttribute('style', 'height:15vh; width:100%; display:flex; align-items:center;');
div9.classList.add("sectionHeader");

let div10 = document.createElement('div');
div10.setAttribute("id", "div10");

let btnFamilyAndFriends = document.createElement('div');
btnFamilyAndFriends.setAttribute("id", "btnFamilyAndFriends");
btnFamilyAndFriends.innerHTML = '<input type="button" value="<< Previous Set of Questions" id="btnFamilyAndFriendsPrevious"><input type="button" value="Next Set of Questions >>" id="btnFamilyAndFriendsNext">';
btnFamilyAndFriends.setAttribute('style', 'display:flex; width:100%; justify-content:space-evenly; height:10vh; align-items:center;');

//Creating the divs in the general info
let div11 = document.createElement('div');
div11.setAttribute("id", "div11");
div11.innerHTML = 'A few more general questions...';
div11.setAttribute('style', 'height:15vh; width:100%; display:flex; align-items:center;');
div11.classList.add("sectionHeader");

let div12 = document.createElement('div');
div12.setAttribute("id", "div12");

let btnGeneralInfo = document.createElement('div');
btnGeneralInfo.setAttribute("id", "btnGeneralInfo");
btnGeneralInfo.innerHTML = '<input type="button" value="<< Previous Set of Questions" id="btnGeneralInfoPrevious"><input type="button" value="Next Set of Questions >>" id="btnGeneralInfoNext">';
btnGeneralInfo.setAttribute('style', 'display:flex; width:100%; justify-content:space-evenly; height:10vh; align-items:center;');

//Creating the divs in the summary page
let div13 = document.createElement('div');
div13.setAttribute("id", "div13");
div13.innerHTML = 'A summary of your previous entries...';
div13.setAttribute('style', 'height:15vh; width:100%; display:flex; align-items:center;');
div13.classList.add("sectionHeader");

let div14 = document.createElement('div');
div14.setAttribute("id", "div14");

let btnSummaryPage = document.createElement('div');
btnSummaryPage.setAttribute("id", "btnSummaryPage");
btnSummaryPage.innerHTML = '<input type="button" value="<< Previous Set of Questions" id="btnSummaryPagePrevious">';
btnSummaryPage.setAttribute('style', 'display:flex; width:100%; justify-content:space-evenly; height:10vh; align-items:center;');

//Appending the divs to the various sections
var spashScreen = document.getElementById('splashScreen');
spashScreen.appendChild(splashScreenDiv);
spashScreen.appendChild(splashScreenDiv2);
spashScreen.appendChild(btnSplashScreen);

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

STORE.forEach(addQuestionsToDiv);


}

function loadNavBar() {
  let navbar1 = document.createElement('div');
  navbar1.setAttribute("id", "navbar1");
  navbar1.innerHTML = "<ul> <li><a href='#' class='anchor'>Home</a></li> <li><a href='#' class='anchor'>Data Input</a></li> <li><a href='#' class='anchor'>About</a></li> </ul>";

  var sectionNav = document.getElementById("navbar");
  sectionNav.appendChild(navbar1);
}

//Various start up scripts and preparation
loadPage();
loadNavBar();


document.getElementById("btnSplashScreenNext").addEventListener("click", function(){
    Navigation('splashScreen', 'next');
});

document.getElementById("btnBasicInfoNext").addEventListener("click", function(){
    Navigation('basicInfo', 'next');
});

document.getElementById("btnAddressInfoNext").addEventListener("click", function(){
    Navigation('addressInfo', 'next');
});

document.getElementById("btnAbuserInfoNext").addEventListener("click", function(){
    Navigation('abuserInfo', 'next');
});

document.getElementById("btnMedicalAndFinancialNext").addEventListener("click", function(){
    Navigation('medicalAndFinancial', 'next');
});

document.getElementById("btnFamilyAndFriendsNext").addEventListener("click", function(){
    Navigation('familyAndFriends', 'next');
});

document.getElementById("btnGeneralInfoNext").addEventListener("click", function(){
    Navigation('generalInfo', 'next');
});

document.getElementById("btnAddressInfoPrevious").addEventListener("click", function(){
    Navigation('addressInfo', 'previous');
});

document.getElementById("btnAbuserInfoPrevious").addEventListener("click", function(){
    Navigation('abuserInfo', 'previous');
});

document.getElementById("btnMedicalAndFinancialPrevious").addEventListener("click", function(){
    Navigation('medicalAndFinancial', 'previous');
});

document.getElementById("btnFamilyAndFriendsPrevious").addEventListener("click", function(){
    Navigation('familyAndFriends', 'previous');
});

document.getElementById("btnGeneralInfoPrevious").addEventListener("click", function(){
    Navigation('generalInfo', 'previous');
});

document.getElementById("btnSummaryPagePrevious").addEventListener("click", function(){
    Navigation('summaryPage', 'previous');
});

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
