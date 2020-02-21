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
          divsToShow[i].style.display = "inline"; // depending on what you're doing
      }
}

function Navigation(btnClick) {

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



function loadPage() {
//Creating the divs in the basic info
let div = document.createElement('div');
div.setAttribute("id", "div");
div.innerHTML = 'Basic Info:';

let div2 = document.createElement('div');
div2.setAttribute("id", "div2");

let btnBasicInfo = document.createElement('div');
btnBasicInfo.setAttribute("id", "btnBasicInfo");
btnBasicInfo.innerHTML = '<input type="button" value="Next >>" id="btnBasicInfobtn">';

//Creating the divs in the address info
let div3 = document.createElement('div');
div3.setAttribute("id", "div3");
div3.innerHTML = 'Address Info:';

let div4 = document.createElement('div');
div4.setAttribute("id", "div4");

let btnAddressInfo = document.createElement('div');
btnAddressInfo.setAttribute("id", "btnAddressInfo");
btnAddressInfo.innerHTML = '<input type="button" value="Next >>" id="btnAddressInfobtn">';

//Creating the divs in the abuser info
let div5 = document.createElement('div');
div5.setAttribute("id", "div5");
div5.innerHTML = 'Abuser Info:';

let div6 = document.createElement('div');
div6.setAttribute("id", "div6");

let btnAbuserInfo = document.createElement('div');
btnAbuserInfo.setAttribute("id", "btnAbuserInfo");
btnAbuserInfo.innerHTML = '<input type="button" value="Next >>" id="btnAbuserInfobtn">';

//Creating the divs in the medical and financial info
let div7 = document.createElement('div');
div7.setAttribute("id", "div7");
div7.innerHTML = 'Medical and Financial Info:';

let div8 = document.createElement('div');
div8.setAttribute("id", "div8");

let btnMedicalAndFinancial = document.createElement('div');
btnMedicalAndFinancial.setAttribute("id", "btnMedicalAndFinancial");
btnMedicalAndFinancial.innerHTML = '<input type="button" value="Next >>" id="btnMedicalAndFinancialbtn">';

//Creating the divs in the family and friends info
let div9 = document.createElement('div');
div9.setAttribute("id", "div9");
div9.innerHTML = 'Family and Friends:';

let div10 = document.createElement('div');
div10.setAttribute("id", "div10");

let btnFamilyAndFriends = document.createElement('div');
btnFamilyAndFriends.setAttribute("id", "btnFamilyAndFriends");
btnFamilyAndFriends.innerHTML = '<input type="button" value="Next >>" id="btnFamilyAndFriendsbtn">';

//Creating the divs in the general info
let div11 = document.createElement('div');
div11.setAttribute("id", "div11");
div11.innerHTML = 'General Info:';

let div12 = document.createElement('div');
div12.setAttribute("id", "div12");

let btnGeneralInfo = document.createElement('div');
btnGeneralInfo.setAttribute("id", "btnGeneralInfo");
btnGeneralInfo.innerHTML = '<input type="button" value="Next >>" id="btnGeneralInfobtn">';

//Creating the divs in the summary page
let div13 = document.createElement('div');
div13.setAttribute("id", "div13");
div13.innerHTML = 'Summary Page:';

let div14 = document.createElement('div');
div14.setAttribute("id", "div14");

//Appending the divs to the various sections
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

//By default only show the first screen
//hideClass('basicInfo');
hideClass('addressInfo');
hideClass('abuserInfo');
hideClass('medicalAndFinancial');
hideClass('familyAndFriends');
hideClass('generalInfo');
hideClass('summaryPage');


}

function loadNavBar() {
  let navbar1 = document.createElement('div');
  navbar1.setAttribute("id", "navbar1");
  navbar1.innerHTML = "<ul> <li><a href='#' class='anchor'>Home</a></li> <li><a href='#' class='anchor'>Data Input</a></li> </ul>";

  var sectionNav = document.getElementById("navbar");
  sectionNav.appendChild(navbar1);
}

//Various start up scripts and preparation
loadPage();
loadNavBar();







/* Adding text boxes to the basic info section.*/
addTextBox('First Name', 'txtFirstName', 'div2');
addTextBox('Middle Name', 'txtMiddleName', 'div2');
addTextBox('Last Name', 'txtLastName', 'div2');
addTextBox('Social Security Number', 'txtSocialSecurityNumber', 'div2');
addTextBox('Date of Birth', 'txtDateOfBirth', 'div2');
addTextBox('City/State of Birth', 'txtCityStateOfBirth', 'div2');
addTextBox('Ethnicity', 'txtEthnicity', 'div2');
addTextBox('Original Gender', 'txtOriginalGender', 'div2');
addTextBox('Religious Affiliation', 'txtReligion', 'div2');

/* Adding text boxes to the address info section.*/
addTextBox('Street name and number', 'txtStreetName', 'div4');
addTextBox('City', 'txtCity', 'div4');
addTextBox('State', 'txtState', 'div4');
addTextBox('Zip Code', 'txtZipCode', 'div4');

addTextBox('Street name and number', 'txtBillingStreetName', 'div4');
addTextBox('City', 'txtBillingCity', 'div4');
addTextBox('State', 'txtBillingState', 'div4');
addTextBox('Zip Code', 'txtBillingZipCode', 'div4');

/* Adding text boxes to the abuser info section.*/
addTextBox('Street name and number', 'txtAbuseStreetName', 'div6');
addTextBox('City', 'txtAbuseCity', 'div6');
addTextBox('State', 'txtAbuseState', 'div6');
addTextBox('Zip Code', 'txtAbuseZipCode', 'div6');
addTextBox('Location of Abuser', 'txtAbuserLocation', 'div6');
addTextBox('What Date did you leave your abuser?', 'txtDateLeftAbuser', 'div6');
addTextBox('What was relationship to abuser?', 'txtRelationshipToAbuser', 'div6');
addTextBox('Restraining Order?', 'txtRestrainingOrder', 'div6');
addTextBox('Hospital Stay?', 'txtHospitalStay', 'div6');
addTextBox('Name of Hospital', 'txtHospitalName', 'div6');

/* Adding text boxes to the medical and financial info section.*/
addTextBox('Current medical bills from this trauma?', 'txtMedicalBills', 'div8');
addTextBox('Are you on a payment plan?', 'txtPaymentPlan', 'div8');
addTextBox('What kind of Health Insurance do you have?', 'txtHealthInsuranceType', 'div8');
addTextBox('What kind of Health insurance do your kids have?', 'txtChildsHealthInsuranceType', 'div8');
addTextBox('What were the damages', 'txtDamages', 'div8');
addTextBox('Are you on any medicines?', 'txtMedication', 'div8');
addTextBox('Name of Doctor', 'txtDoctorsName', 'div8');
addTextBox('Phone Number', 'txtDoctorsPhoneNumber', 'div8');
addTextBox('Email Address', 'txtDoctorsEmailAddress', 'div8');
addTextBox('Are you employed?', 'txtEmployed', 'div8');

/* Adding text boxes to the family and friends info section.*/
addTextBox('Do you have children?', 'txtChildren', 'div10');
addTextBox('Where there any children abused as well?', 'txtChildrenAbused', 'div10');
addTextBox('What are the names, relationships, and contact information of the two people you most trust right now to not share where you are or what you are doing?', 'txtTrustedContacts', 'div10');
addTextBox('Would you be interested in your children going to summer camp while you are here?', 'txtChildrenSummerCamp', 'div10');
addTextBox('How many times have you left and gone back to your abuser?', 'txtTimesReturnedToAbuser', 'div10');
addTextBox('Have you purposed it in your heart to not go back this time?', 'txtDoesNotWantToReturn', 'div10');

/* Adding text boxes to the general info section.*/
addTextBox('What is your marital status?', 'txtMaritalStatus', 'div12');
addTextBox('Do you have legal counsel?', 'txtLegalCounsel', 'div12');
addTextBox('Will you be pursuing legal counsel?', 'txtPursuingLegalCouncel', 'div12');
addTextBox('Do you smoke?', 'txtSmoke', 'div12');
addTextBox('Do you have any chemical additions?', 'txtAddictions', 'div12');
addTextBox('What languages do you speak?', 'txtLanguages', 'div12');
addTextBox('Are you blind?', 'txtBlind', 'div12');
addTextBox('Are you deaf?', 'txtDeaf', 'div12');
addTextBox('Do you have any food allergies?', 'txtFoodAllergies', 'div12');



document.getElementById("btnBasicInfobtn").addEventListener("click", function(){
    Navigation('basicInfo');
});

document.getElementById("btnAddressInfobtn").addEventListener("click", function(){
    Navigation('addressInfo');
});

document.getElementById("btnAbuserInfobtn").addEventListener("click", function(){
    Navigation('abuserInfo');
});

document.getElementById("btnMedicalAndFinancialbtn").addEventListener("click", function(){
    Navigation('medicalAndFinancial');
});

document.getElementById("btnFamilyAndFriendsbtn").addEventListener("click", function(){
    Navigation('familyAndFriends');
});

document.getElementById("btnGeneralInfobtn").addEventListener("click", function(){
    Navigation('generalInfo');
});

//navbar items
var anchors = document.querySelectorAll('.anchor');

for (var i=0; i<anchors.length; i++) {
    anchors[i].addEventListener('click', handler, false);
}

function handler() {
  //if navbar, Home is selected
if(this.innerHTML === 'Home') {
  showClass('basicInfo');
}
}
