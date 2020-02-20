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
//Creating the divs in the basic info
let div = document.createElement('div');
div.setAttribute("id", "div");
div.innerHTML = 'Basic Info:';

let div2 = document.createElement('div');
div2.setAttribute("id", "div2");

//Creating the divs in the address info
let div3 = document.createElement('div');
div3.setAttribute("id", "div3");
div3.innerHTML = 'Address Info:';

let div4 = document.createElement('div');
div4.setAttribute("id", "div4");

//Creating the divs in the abuser info
let div5 = document.createElement('div');
div5.setAttribute("id", "div5");
div5.innerHTML = 'Abuser Info:';

let div6 = document.createElement('div');
div6.setAttribute("id", "div6");

//Creating the divs in the medical and financial info
let div7 = document.createElement('div');
div7.setAttribute("id", "div7");
div7.innerHTML = 'Medical and Financial Info:';

let div8 = document.createElement('div');
div8.setAttribute("id", "div8");

//Appending the divs to the various sections
var basicInfo = document.getElementById('basicInfo');
basicInfo.appendChild(div);
basicInfo.appendChild(div2);

var addressInfo = document.getElementById('addressInfo');
addressInfo.appendChild(div3);
addressInfo.appendChild(div4);

var abuserInfo = document.getElementById('abuserInfo');
abuserInfo.appendChild(div5);
abuserInfo.appendChild(div6);

var medicalAndFinancial = document.getElementById('medicalAndFinancial');
medicalAndFinancial.appendChild(div7);
medicalAndFinancial.appendChild(div8);

}

function loadNavBar() {
  let navbar1 = document.createElement('div');
  navbar1.setAttribute("id", "navbar1");
  navbar1.innerHTML = "<ul> <li><a href='#'>Home</a></li> <li><a href='#'>Data Input</a></li> <li><a href='#'>About</a></li> </ul>";

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

/*
addTextBox('here', 'txtSocialSecurityNumber', 'div4');
addTextBox('here', 'txtSocialSecurityNumber', 'div4');
addTextBox('here', 'txtSocialSecurityNumber', 'div4');
addTextBox('here', 'txtSocialSecurityNumber', 'div4');
addTextBox('here', 'txtSocialSecurityNumber', 'div4');
addTextBox('here', 'txtSocialSecurityNumber', 'div4');
addTextBox('here', 'txtSocialSecurityNumber', 'div4');
addTextBox('here', 'txtSocialSecurityNumber', 'div4');
addTextBox('here', 'txtSocialSecurityNumber', 'div4');
addTextBox('here', 'txtSocialSecurityNumber', 'div4');
addTextBox('here', 'txtSocialSecurityNumber', 'div4');
addTextBox('here', 'txtSocialSecurityNumber', 'div4');
*/
