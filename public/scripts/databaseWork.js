function submitInfo() {

// Set up our HTTP request
var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://victorylife.herokuapp.com/guests');

xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.onload = function () {
		if (this.status  >= 200 && this.status < 300) {
			// Request finished. Do processing here.
			// Clear out all text boxes
			clearFormTextboxes()


			// What do when the request is successful
			//console.log('success!', xhr);
			alert('Guest was successfully added!');

			Navigation('btnSubmitInfo');
		}
		else {
		// What do when the request fails
		alert('Guest was not added. Please contact your System Administrator!');
		}
	}
	
xhr.send(
	'firstName=' + txtFirstName.value +
	'&lastName=' + txtLastName.value +
	'&SSN=' + txtSocialSecurityNumber.value +
	'&dateOfBirth=' + txtDateOfBirth.value +
	'&currentMailingAddress=0' +//+ txtStreetName.value +
	'&addressOfLastAbuse=0' +// + selCurrentAddress.value +
	'&dateLeftAbuser=' + txtDateLeftAbuser.value +
	'&abuserLocation=0' + //+ selLocationOfAbuser.value +
	'&abuserJailInfo=' + txtAbuserJailInfo.value +
	'&abuserInformation=' + txtInformationOnAbuser.value +
	'&abuserLastCommunication=' + txtLastCommunication.value +
	'&finalEvent=' + txtFinalEvent.value +
	'&abuserTypeOfRelationship=' + selRelationshipToAbuser.value +
	'&abuserDateOfMarriage=' + txtDateOfMarriageToAbuser.value +
	'&abuserDateOfRelationship=' + txtDateOfRelationshipToAbuser.value +
	'&abuserRelationshipDescription=' + txtRelationshipToAbuserDescription.value +
	'&currentRestrainingOrder=' + selCurrentRestrainingOrder.value +
	'&requestedRestrainingOrder=' + selRequestedRestrainingOrder.value +
	'&requiredEmergencyServices=' + selRequiredEmergencyServices.value +
	'&facilityOfEmergencyServices=' + txtFacilityOfEmergencyServices.value +
	'&outOfPocketExpenses=' + txtOutOfPocketExpenses.value +
	'&moneyOwedForMedical=' + txtMoneyOwedForMedical.value +
	'&abuserCourtOrderedForSupport=' + selCourtOrderedForSupport.value +
	'&abuserCourtOrderedToPay=' + txtCourtOrderedToPay.value +
	'&divorceDecreeAtCheckIn=' + selDivorceDecree.value +
	'&onGoingTreatment=' + selOngoingTreatment.value +
	'&onGoingTreatmentDescription=' + txtOngoingTreatmentDescription.value +
	'&primaryCarePhysician=' + txtPrimaryCarePhysician.value +
	'&abuserAlimony=' + selAbuserAlimony.value +
	'&abuserAlimonyLate=' + selAbuserAlimonyLate.value +
	'&abuserAlimonyLateAmount=' + txtAbuserAlimonyLateAmount.value +
	'&currentlyEmployed=' + selEmployed.value +
	'&childrenLivingAtHome=' + selChildrenLivingAtHome.value +
	'&childExperienceTrauma=' + selChildrenTrauma.value +
	'&childTraumaDescription=' + txtChildrenTraumaExplanation.value +
	'&childrenCurrentInformation=' + txtChildrenCurrentLocationAndInfo.value +
	'&trustedContacts=' + txtTrustedContacts.value +
	'&abuserTimesReturned=' + txtTimesReturnedToAbuser.value +
	'&doesNotWantToReturn=' + selDoesNotWantToReturn.value +
	'&maritalStatus=' + selMaritalStatus.value +
	'&hasLegalCounsel=' + selLegalCounsel.value +
	'&pursuingLegalCouncel=' + selPursuingLegalCouncel.value +
	'&smokeOrVape=' + selSmokeOrVape.value +
	'&consumeAlcohol=' + selConsumeAlcohol.value +
	'&hasCurrentAddictions=' + selAddictions.value +
	'&currentAddictions=' + txtCurrentAddictions.value +
	'&languagesSpoken=' + txtLanguages.value +
	'&physicalLimitations=' + txtPhysicalLimitations.value +
	'&foodAllergies=' + txtFoodAllergies.value
	);


	





}

function loadGuestInformation() {
// Set up our HTTP request
var xhr = new XMLHttpRequest();

// Create and send a GET request
// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL
xhr.open('GET', 'https://victorylife.herokuapp.com/guests/' + txtSocialSecurityNumber.value);

// Setup our listener to process completed requests
xhr.onload = function () {

	// Process our return data
	if (xhr.status >= 200 && xhr.status < 300) {
    // What do when the request is successful

	if (xhr.response == "") {
		//Make sure the Submit Info button is visible on the summary screen
		document.getElementById("btnUpdateGuest").hidden = "hidden"
		document.getElementById("btnSubmitInformation").removeAttribute("hidden");
		clearFormTextboxes();
		alert('No guest was found with these details!');
	}
	else {
		console.log('xhr.response: "' + xhr.response + '"');
    var JSONObject = JSON.parse(xhr.response);
		console.log(JSONObject);
		console.log(Object.keys(JSONObject).length);

		if(Object.keys(JSONObject).length > 0) {

			txtStreetName.value = "123 Fake Street";
			txtCity.value = "Hendersonville";
			document.getElementById('selState').value = "North Carolina";
			document.getElementById('txtZipCode').value = 27232;
			selCurrentAddress.value = "";
			txtNewStreetName.value = "";
			txtNewCity.value = "";
			selNewState.value = "";
			txtNewZipCode.value = "";
			selRelationshipToNewAddress.value = "";
			selAddressOfLastAbuse.value = "";
			txtDateLeftAbuser.value = moment(JSONObject.dateLeftAbuser).format('YYYY-MM-DD');
			//selLocationOfAbuser.value = 0;
			txtAbuserJailInfo.value = JSONObject.abuserJailInfo;
			txtAbuserStreetName.value = "123 Fake Street";
			txtAbuserCity.value = "Hendersonville";
			selAbuserState.value = "North Carolina";
			txtAbuserZipCode.value = 12345;
			txtInformationOnAbuser.value = JSONObject.abuserInformation;
			txtLastCommunication.value = moment(JSONObject.abuserLastCommunication).format('YYYY-MM-DD');
			txtFinalEvent.value = JSONObject.finalEvent;
			selRelationshipToAbuser.value = JSONObject.abuserTypeOfRelationship;
			txtDateOfMarriageToAbuser.value = moment(JSONObject.abuserDateOfMarriage).format('YYYY-MM-DD');
			txtDateOfRelationshipToAbuser.value = moment(JSONObject.abuserDateOfRelationship).format('YYYY-MM-DD');
			txtRelationshipToAbuserDescription.value = JSONObject.abuserRelationshipDescription;

			selCurrentRestrainingOrder.value = (JSONObject.currentRestrainingOrder == true) ? "Yes"
																			: (JSONObject.currentRestrainingOrder == false) ? "No"
																			:	null;

			selRequestedRestrainingOrder.value = (JSONObject.requestedRestrainingOrder == true) ? "Yes"
																			: (JSONObject.requestedRestrainingOrder == false) ? "No"
																			:	null;

			selRequiredEmergencyServices.value = (JSONObject.requiredEmergencyServices == true) ? "Yes"
																			: (JSONObject.requiredEmergencyServices == false) ? "No"
																			:	null;

			txtFacilityOfEmergencyServices.value = JSONObject.facilityOfEmergencyServices;
			txtOutOfPocketExpenses.value = JSONObject.outOfPocketExpenses;
			txtMoneyOwedForMedical.value = JSONObject.moneyOwedForMedical;
			selCourtOrderedForSupport.value = (JSONObject.abuserCourtOrderedForSupport == true) ? "Yes"
																			: (JSONObject.abuserCourtOrderedForSupport == false) ? "No"
																			:	null;

			txtCourtOrderedToPay.value = JSONObject.abuserCourtOrderedToPay;
			selDivorceDecree.value = (JSONObject.divorceDecreeAtCheckIn == true) ? "Yes"
																			: (JSONObject.divorceDecreeAtCheckIn == false) ? "No"
																			:	null;

			selOngoingTreatment.value = (JSONObject.onGoingTreatment == true) ? "Yes"
																			: (JSONObject.onGoingTreatment == false) ? "No"
																			:	null;

			txtOngoingTreatmentDescription.value = JSONObject.onGoingTreatmentDescription;
			txtPrimaryCarePhysician.value = JSONObject.primaryCarePhysician;
			selAbuserAlimony.value = (JSONObject.abuserAlimony == true) ? "Yes"
																			: (JSONObject.abuserAlimony == false) ? "No"
																			:	null;

			selAbuserAlimonyLate.value = (JSONObject.abuserAlimonyLate == true) ? "Yes"
																			: (JSONObject.abuserAlimonyLate == false) ? "No"
																			:	null;

			txtAbuserAlimonyLateAmount.value = JSONObject.abuserAlimonyLateAmount;
			selEmployed.value = (JSONObject.currentlyEmployed == true) ? "Yes"
																			: (JSONObject.currentlyEmployed == false) ? "No"
																			:	null;

			selChildrenLivingAtHome.value = (JSONObject.childrenLivingAtHome == true) ? "Yes"
																			: (JSONObject.childrenLivingAtHome == false) ? "No"
																			:	null;

			selChildrenTrauma.value = (JSONObject.childExperienceTrauma == true) ? "Yes"
																			: (JSONObject.childExperienceTrauma == false) ? "No"
																			:	null;

			txtChildrenTraumaExplanation.value = JSONObject.childTraumaDescription;
			txtChildrenCurrentLocationAndInfo.value = JSONObject.childrenCurrentInformation;
			txtTrustedContacts.value = JSONObject.trustedContacts;
			txtTimesReturnedToAbuser.value = JSONObject.abuserTimesReturned;
			selDoesNotWantToReturn.value = (JSONObject.doesNotWantToReturn == true) ? "Yes"
																			: (JSONObject.doesNotWantToReturn == false) ? "No"
																			:	null;

			selMaritalStatus.value = JSONObject.maritalStatus;
			selLegalCounsel.value = (JSONObject.hasLegalCounsel == true) ? "Yes"
																			: (JSONObject.hasLegalCounsel == false) ? "No"
																			:	null;

			selPursuingLegalCouncel.value = (JSONObject.pursuingLegalCouncel == true) ? "Yes"
																			: (JSONObject.pursuingLegalCouncel == false) ? "No"
																			:	null;

			selSmokeOrVape.value = (JSONObject.smokeOrVape == true) ? "Yes"
																			: (JSONObject.smokeOrVape == false) ? "No"
																			:	null;

			selConsumeAlcohol.value = (JSONObject.consumeAlcohol == true) ? "Yes"
																			: (JSONObject.consumeAlcohol == false) ? "No"
																			:	null;

			selAddictions.value = (JSONObject.hasCurrentAddictions == true) ? "Yes"
																			: (JSONObject.hasCurrentAddictions == false) ? "No"
																			:	null;

			txtCurrentAddictions.value = JSONObject.currentAddictions;
			txtLanguages.value = JSONObject.languagesSpoken;
			selPhysicalLimitations.value = (JSONObject.physicalLimitations == true) ? "Yes"
																			: (JSONObject.physicalLimitations == false) ? "No"
																			:	null;

			txtPhysicalLimitations.value = JSONObject.physicalLimitations;
			selFoodAllergies.value = (JSONObject.foodAllergies == true) ? "Yes"
																			: (JSONObject.foodAllergies == false) ? "No"
																			:	null;

			txtFoodAllergies.value = JSONObject.foodAllergies;

			setTextBoxVisibility();

			//Make sure Update Guest Record button is visible on the Summary Screen
			document.getElementById("btnSubmitInformation").hidden = "hidden"
			document.getElementById("btnUpdateGuest").removeAttribute("hidden");
		}
	}
		

	// Code that should run regardless of the request status

}
else {
		// What do when the request fails
		console.log('The request failed!');
		alert('Please reach out to a sytem admin, failed to connect to the database.');
	}
}

xhr.send();
}


function updateGuest() {


// Set up our HTTP request
var xhr = new XMLHttpRequest();
xhr.open('PUT', 'https://victorylife.herokuapp.com/guests/' + txtSocialSecurityNumber.value);

xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

xhr.onload = function () {
		if (xhr.status  >= 200 && xhr.status < 300) {
			// Request finished. Do processing here.
			// Clear out all text boxes
			clearFormTextboxes();
			Navigation('btnSubmitInfo');
			alert('Guest was successfully updated!');
		}
		else {
			// What do when the request fails
			alert('Guest was not updated. Please contact your System Administrator!');
		}
	}
	
xhr.send(
	'firstName=' + txtFirstName.value +
	'&lastName=' + txtLastName.value +
	'&SSN=' + txtSocialSecurityNumber.value +
	'&dateOfBirth=' + moment(txtDateOfBirth.value).format('YYYY-MM-DD') +
	'&currentMailingAddress=1' +//+ txtStreetName.value +
	'&addressOfLastAbuse=0' +// + selCurrentAddress.value +
	'&dateLeftAbuser=' + moment(txtDateLeftAbuser.value).format('YYYY-MM-DD') +
	'&abuserLocation=0' + //+ selLocationOfAbuser.value +
	'&abuserJailInfo=' + txtAbuserJailInfo.value +
	'&abuserInformation=' + txtInformationOnAbuser.value +
	'&abuserLastCommunication=' + moment(txtLastCommunication.value).format('YYYY-MM-DD') +
	'&finalEvent=' + txtFinalEvent.value +
	'&abuserTypeOfRelationship=' + selRelationshipToAbuser.value +
	'&abuserDateOfMarriage=' + moment(txtDateOfMarriageToAbuser.value).format('YYYY-MM-DD') +
	'&abuserDateOfRelationship=' + moment(txtDateOfRelationshipToAbuser.value).format('YYYY-MM-DD') +
	'&abuserRelationshipDescription=' + txtRelationshipToAbuserDescription.value +
	'&currentRestrainingOrder=' + selCurrentRestrainingOrder.value +
	'&requestedRestrainingOrder=' + selRequestedRestrainingOrder.value +
	'&requiredEmergencyServices=' + selRequiredEmergencyServices.value +
	'&facilityOfEmergencyServices=' + txtFacilityOfEmergencyServices.value +
	'&outOfPocketExpenses=' + txtOutOfPocketExpenses.value +
	'&moneyOwedForMedical=' + txtMoneyOwedForMedical.value +
	'&abuserCourtOrderedForSupport=' + selCourtOrderedForSupport.value +
	'&abuserCourtOrderedToPay=' + txtCourtOrderedToPay.value +
	'&divorceDecreeAtCheckIn=' + selDivorceDecree.value +
	'&onGoingTreatment=' + selOngoingTreatment.value +
	'&onGoingTreatmentDescription=' + txtOngoingTreatmentDescription.value +
	'&primaryCarePhysician=' + txtPrimaryCarePhysician.value +
	'&abuserAlimony=' + selAbuserAlimony.value +
	'&abuserAlimonyLate=' + selAbuserAlimonyLate.value +
	'&abuserAlimonyLateAmount=' + txtAbuserAlimonyLateAmount.value +
	'&currentlyEmployed=' + selEmployed.value +
	'&childrenLivingAtHome=' + selChildrenLivingAtHome.value +
	'&childExperienceTrauma=' + selChildrenTrauma.value +
	'&childTraumaDescription=' + txtChildrenTraumaExplanation.value +
	'&childrenCurrentInformation=' + txtChildrenCurrentLocationAndInfo.value +
	'&trustedContacts=' + txtTrustedContacts.value +
	'&abuserTimesReturned=' + txtTimesReturnedToAbuser.value +
	'&doesNotWantToReturn=' + selDoesNotWantToReturn.value +
	'&maritalStatus=' + selMaritalStatus.value +
	'&hasLegalCounsel=' + selLegalCounsel.value +
	'&pursuingLegalCouncel=' + selPursuingLegalCouncel.value +
	'&smokeOrVape=' + selSmokeOrVape.value +
	'&consumeAlcohol=' + selConsumeAlcohol.value +
	'&hasCurrentAddictions=' + selAddictions.value +
	'&currentAddictions=' + txtCurrentAddictions.value +
	'&languagesSpoken=' + txtLanguages.value +
	'&physicalLimitations=' + txtPhysicalLimitations.value +
	'&foodAllergies=' + txtFoodAllergies.value
	);

}

function clearFormTextboxes() {

	// Clear out all text boxes
		var myDivs = STORE;
		for (var key in myDivs) {
			document.getElementById(myDivs[key].textboxName).value = "";
		}
	}

function setTextBoxVisibility() {
	var myDivs = STORE;
	for (var key in myDivs) {
		if(document.getElementById(myDivs[key].textboxName).value != "") {
			document.getElementById(myDivs[key].textboxName).parentElement.removeAttribute("hidden");
		}
	}

}
