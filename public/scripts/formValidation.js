
function validateBasicInfo() {

  if(document.getElementById("txtFirstName").parentElement.hidden == false && document.getElementById("txtFirstName").value === "") {
    return "You must enter your First Name!";
  }
  else if(document.getElementById("txtLastName").parentElement.hidden == false && document.getElementById("txtLastName").value == "") {
    return("You must enter your Last Name!");
  }
  else if(document.getElementById("txtSocialSecurityNumber").parentElement.hidden == false && document.getElementById("txtSocialSecurityNumber").value == "") {
    return("You must enter your Social Security Number!");
  }
  else if(document.getElementById("txtDateOfBirth").parentElement.hidden == false && document.getElementById("txtDateOfBirth").value == "") {
    return("You must enter your Date of Birth!");
  }
  else
  return 1;
}

function validateAddressInfo() {

  if(document.getElementById("selCurrentAddress").parentElement.hidden == false && document.getElementById("selCurrentAddress").value == "") {
    return("You must enter a current Address!");
  }
  else if(document.getElementById("txtNewStreetName").parentElement.hidden == false && document.getElementById("txtNewStreetName").value == "") {
    return("You must enter a Street Name!");
  }
  else if(document.getElementById("txtNewCity").parentElement.hidden == false && document.getElementById("txtNewCity").value == "") {
    return("You must enter a City!");
  }
  else if(document.getElementById("selNewState").parentElement.hidden == false && document.getElementById("selNewState").value == "") {
    return("You must enter a State!");
  }
  else if(document.getElementById("txtNewZipCode").parentElement.hidden == false && document.getElementById("txtNewZipCode").value == "") {
    return("You must enter a Zip Code!");
  }
  else if(document.getElementById("selRelationshipToNewAddress").parentElement.hidden == false && document.getElementById("selRelationshipToNewAddress").value == "") {
    return("You must enter the relationship to the New Address!");
  }
  else {
    return 1;
  }
}

  function validateAbuserInfo() {
  if(document.getElementById("selAddressOfLastAbuse").parentElement.hidden == false && document.getElementById("selAddressOfLastAbuse").value == "") {
    return("You must enter the address where the abuse last happened!");
  }
  else if(document.getElementById("txtDateLeftAbuser").parentElement.hidden == false && document.getElementById("txtDateLeftAbuser").value == "") {
    return("You must enter the date you left your abuser!");
  }
  else if(document.getElementById("selLocationOfAbuser").parentElement.hidden == false && document.getElementById("selLocationOfAbuser").value == "") {
    return("You must enter the location of the abuser!");
  }
  else if(document.getElementById("txtAbuserJailInfo").parentElement.hidden == false && document.getElementById("txtAbuserJailInfo").value == "") {
    return("You must enter your abusers jail information!");
  }
  else if(document.getElementById("txtAbuserStreetName").parentElement.hidden == false && document.getElementById("txtAbuserStreetName").value == "") {
    return("You must enter a Street Name!");
  }
  else if(document.getElementById("txtAbuserCity").parentElement.hidden == false && document.getElementById("txtAbuserCity").value == "") {
    return("You must enter a City Name!");
  }
  else if(document.getElementById("selAbuserState").parentElement.hidden == false && document.getElementById("selAbuserState").value == "") {
    return("You must enter a State Name!");
  }
  else if(document.getElementById("txtAbuserZipCode").parentElement.hidden == false && document.getElementById("txtAbuserZipCode").value == "") {
    return("You must enter a Zip Code!");
  }
  //else if(document.getElementById("txtInformationOnAbuser").parentElement.hidden == false && document.getElementById("txtInformationOnAbuser").value == "") {
  //  return("You must enter various details about the abuser!");
  //}
  else if(document.getElementById("txtLastCommunication").parentElement.hidden == false && document.getElementById("txtLastCommunication").value == "") {
    return("You must tell us about the last communication!");
  }
  else if(document.getElementById("txtFinalEvent").parentElement.hidden == false && document.getElementById("txtFinalEvent").value == "") {
    return("You must enter about the final event that lead you here!");
  }
  else if(document.getElementById("selRelationshipToAbuser").parentElement.hidden == false && document.getElementById("selRelationshipToAbuser").value == "") {
    return("You must enter your relationship to your abuser!");
  }
  else if(document.getElementById("txtDateOfMarriageToAbuser").parentElement.hidden == false && document.getElementById("txtDateOfMarriageToAbuser").value == "") {
    return("You must enter the date you were married to your Abuser!");
  }
  else if(document.getElementById("txtDateOfRelationshipToAbuser").parentElement.hidden == false && document.getElementById("txtDateOfRelationshipToAbuser").value == "") {
    return("You must enter the date when the relationship started with the Abuser!");
  }
  else if(document.getElementById("txtRelationshipToAbuserDescription").parentElement.hidden == false && document.getElementById("txtRelationshipToAbuserDescription").value == "") {
    return("You must enter the relationship to abuser description!");
  }
  else if(document.getElementById("selCurrentRestrainingOrder").parentElement.hidden == false && document.getElementById("selCurrentRestrainingOrder").value == "") {
    return("You must enter the restraining order information!");
  }
  else if(document.getElementById("selRequestedRestrainingOrder").parentElement.hidden == false && document.getElementById("selRequestedRestrainingOrder").value == "") {
    return("You must enter if you are interested in a restraining order!");
  }
  else if(document.getElementById("selRequiredEmergencyServices").parentElement.hidden == false && document.getElementById("selRequiredEmergencyServices").value == "") {
    return("You must enter if you required emergency services!");
  }
  else {
    return 1;
  }
}

function validateMedicalAndFinancialInfo() {
  if(document.getElementById("txtFacilityOfEmergencyServices").parentElement.hidden == false && document.getElementById("txtFacilityOfEmergencyServices").value == "") {
    return("You must enter if you required an emergency stay due to the abuser!");
  }
  else if(document.getElementById("selAbuseMoneyOwedForMedical").parentElement.hidden == false && document.getElementById("selAbuseMoneyOwedForMedical").value == "") {
    return("You must enter if medical expenses were incurred for the reason you are here!");
  }
  else if(document.getElementById("txtOutOfPocketExpenses").parentElement.hidden == false && document.getElementById("txtOutOfPocketExpenses").value == "") {
    return("You must enter your out of pocket expenses due to the emergency service!");
  }
  else if(document.getElementById("txtMoneyOwedForMedical").parentElement.hidden == false && document.getElementById("txtMoneyOwedForMedical").value == "") {
    return("You must enter the amount of money owed for medical bills!");
  }
  else if(document.getElementById("txtMoneyOwedForMedicalMonthly").parentElement.hidden == false && document.getElementById("txtMoneyOwedForMedicalMonthly").value == "") {
    return("You must enter the amount of money owed monthly for medical bills!");
  }
  else if(document.getElementById("selCourtOrderedForSupport").parentElement.hidden == false && document.getElementById("selCourtOrderedForSupport").value == "") {
    return("You must enter if your abuser was court ordered to help pay for your medical bills!");
  }
  else if(document.getElementById("txtCourtOrderedToPay").parentElement.hidden == false && document.getElementById("txtCourtOrderedToPay").value == "") {
    return("You must enter how much your abuser has to pay!");
  }
  else if(document.getElementById("selDivorceDecree").parentElement.hidden == false && document.getElementById("selDivorceDecree").value == "") {
    return("You must enter if you have your divorce decree with you!");
  }
  else if(document.getElementById("selOngoingTreatment").parentElement.hidden == false && document.getElementById("selOngoingTreatment").value == "") {
    return("You must enter if you have any type of ongoing treatment for the abuse!");
  }
  else if(document.getElementById("txtOngoingTreatmentDescription").parentElement.hidden == false && document.getElementById("txtOngoingTreatmentDescription").value == "") {
    return("You must enter the type of ongoing treatment you are recieving!");
  }
  else if(document.getElementById("txtPrimaryCarePhysician").parentElement.hidden == false && document.getElementById("txtPrimaryCarePhysician").value == "") {
    return("You must enter the details of your Primary Care Physician!");
  }
  else if(document.getElementById("selAbuserAlimony").parentElement.hidden == false && document.getElementById("selAbuserAlimony").value == "") {
    return("You must enter if your abuser was court ordered to pay alimony!");
  }
  else if(document.getElementById("selAbuserAlimonyLate").parentElement.hidden == false && document.getElementById("selAbuserAlimonyLate").value == "") {
    return("You must enter if your abuser is late on their payments of alimony!");
  }
  else if(document.getElementById("txtAbuserAlimonyLateAmount").parentElement.hidden == false && document.getElementById("txtAbuserAlimonyLateAmount").value == "") {
    return("You must enter how much you are owed!");
  }
  else if(document.getElementById("selEmployed").parentElement.hidden == false && document.getElementById("selEmployed").value == "") {
    return("You must enter if you are employed or not!");
  }
  else if(document.getElementById("txtCurrentSalary").parentElement.hidden == false && document.getElementById("txtCurrentSalary").value == "") {
    return("You must enter your current annual salary!");
  }
  else {
    return 1;
  }
}
function validateFamilyAndFriends() {
  if(document.getElementById("selChildrenLivingAtHome").parentElement.hidden == false && document.getElementById("selChildrenLivingAtHome").value == "") {
    return("You must enter if you have children living at home!");
  }
  else if(document.getElementById("selChildrenTrauma").parentElement.hidden == false && document.getElementById("selChildrenTrauma").value == "") {
    return("You must enter if the children experienced trauma!");
  }
  else if(document.getElementById("txtChildrenTraumaExplanation").parentElement.hidden == false && document.getElementById("txtChildrenTraumaExplanation").value == "") {
    return("You must enter what type of trauma the children experienced!");
  }
  else if(document.getElementById("txtChildrenCurrentLocationAndInfo").parentElement.hidden == false && document.getElementById("txtChildrenCurrentLocationAndInfo").value == "") {
    return("You must enter the current location of the children!");
  }
  else if(document.getElementById("txtTrustedContacts").parentElement.hidden == false && document.getElementById("txtTrustedContacts").value == "") {
    return("You must enter some information about trusted contacts!");
  }
  else if(document.getElementById("txtTimesReturnedToAbuser").parentElement.hidden == false && document.getElementById("txtTimesReturnedToAbuser").value == "") {
    return("You must enter how many times you have returned to your abuser!");
  }
  else if(document.getElementById("selDoesNotWantToReturn").parentElement.hidden == false && document.getElementById("selDoesNotWantToReturn").value == "") {
    return("You must enter if you've purposed it in your heart to not 'go back' to your abuser!");
  }
  else {
    return 1;
  }
}
function validateGeneralInfo() {
  if(document.getElementById("selMaritalStatus").parentElement.hidden == false && document.getElementById("selMaritalStatus").value == "") {
    return("You must enter your marital status!");
  }
  else if(document.getElementById("selLegalCounsel").parentElement.hidden == false && document.getElementById("selLegalCounsel").value == "") {
    return("You must enter if you have legal counsel!");
  }
  else if(document.getElementById("selPursuingLegalCouncel").parentElement.hidden == false && document.getElementById("selPursuingLegalCouncel").value == "") {
    return("You must enter if you'll be pursuing legal councel!");
  }
  else if(document.getElementById("selSmokeOrVape").parentElement.hidden == false && document.getElementById("selSmokeOrVape").value == "") {
    return("You must enter if you smoke or vape!");
  }
  else if(document.getElementById("selConsumeAlcohol").parentElement.hidden == false && document.getElementById("selConsumeAlcohol").value == "") {
    return("You must enter if you consume alcohol!");
  }
  else if(document.getElementById("selAddictions").parentElement.hidden == false && document.getElementById("selAddictions").value == "") {
    return("You must enter if you have any addictions!");
  }
  else if(document.getElementById("txtCurrentAddictions").parentElement.hidden == false && document.getElementById("txtCurrentAddictions").value == "") {
    return("You must enter your current addictions!");
  }
  else if(document.getElementById("txtLanguages").parentElement.hidden == false && document.getElementById("txtLanguages").value == "") {
    return("You must enter the languages you speak!");
  }
  else if(document.getElementById("selPhysicalLimitations").parentElement.hidden == false && document.getElementById("selPhysicalLimitations").value == "") {
    return("You must enter if you have physical limitations!");
  }
  else if(document.getElementById("txtPhysicalLimitations").parentElement.hidden == false && document.getElementById("txtPhysicalLimitations").value == "") {
    return("You must enter your physical limitations!");
  }
  else if(document.getElementById("selFoodAllergies").parentElement.hidden == false && document.getElementById("selFoodAllergies").value == "") {
    return("You must enter if you have food allergies!");
  }
  else if(document.getElementById("txtFoodAllergies").parentElement.hidden == false && document.getElementById("txtFoodAllergies").value == "") {
    return("You must enter your food allergies!");
  }
  else {
    return 1;
  }
}


function dataValidation(typeOfData, nameOfInput) {

let valueOfInput = document.getElementById(nameOfInput).value;

const dateREGX = /^\d{4}\-\d{2}\-\d{2}$/;
const alphaNumericREGX = /^[a-zA-Z0-9_ ]*$/;
const decimalNumbersREGX = /^[0-9]+\.?[0-9]*$/;



  if(typeOfData == 'text') {

    if(alphaNumericREGX.test(valueOfInput)) {
      return;
    }
    else {
      document.getElementById(nameOfInput).value = "";
      alert("You must enter a text value here!");
      }
    }
  else if(typeOfData == 'number') {

    if(decimalNumbersREGX.test(valueOfInput)) {
      return;
    }
    else {
      document.getElementById(nameOfInput).value = "";
      alert('You must enter a numerical value into this field.');
      }
    }
  else if(typeOfData == 'date') {
    if(dateREGX.test(valueOfInput)) {
      return;
    }
    else {
      console.log(valueOfInput);
      document.getElementById(nameOfInput).value = "";
      alert('You must enter a date into this field. MM-DD-YYYY');
      }
    }
  }
