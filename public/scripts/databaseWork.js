function submitInfo() {

// Set up our HTTP request
var xhr = new XMLHttpRequest();

xhr.open('POST', '/guests');
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
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

// Setup our listener to process completed requests
xhr.onload = function () {

	if (xhr.status >= 200 && xhr.status < 300) {
		// Clear out all text boxes
	clearFormTextboxes()


// What do when the request is successful
		//console.log('success!', xhr);
		alert('Guest was successfully added!');

		Navigation('btnSubmitInfo');

	} else {
		// What do when the request fails
				//console.log('Guest was not added!', xhr.response);
				alert('Guest was not added. Please contact your System Administrator!');
	}

	// Code that should run regardless of the request status

};

}

function loadGuestInformation() {
// Set up our HTTP request
var xhr = new XMLHttpRequest();

// Setup our listener to process completed requests
xhr.onload = function () {

	// Process our return data
	if (xhr.status >= 200 && xhr.status < 300) {
    // What do when the request is successful

    var JSONObject = JSON.parse(xhr.response);
		console.log(JSONObject[0]);

		if(JSONObject.length > 0) {

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
			txtDateLeftAbuser.value = moment(JSONObject[0].dateLeftAbuser).format('YYYY-MM-DD');
			//selLocationOfAbuser.value = 0;
			txtAbuserJailInfo.value = JSONObject[0].abuserJailInfo;
			txtAbuserStreetName.value = "123 Fake Street";
			txtAbuserCity.value = "Hendersonville";
			selAbuserState.value = "North Carolina";
			txtAbuserZipCode.value = 12345;
			txtInformationOnAbuser.value = JSONObject[0].abuserInformation;
			txtLastCommunication.value = moment(JSONObject[0].abuserLastCommunication).format('YYYY-MM-DD');
			txtFinalEvent.value = JSONObject[0].finalEvent;
			selRelationshipToAbuser.value = JSONObject[0].abuserTypeOfRelationship;
			txtDateOfMarriageToAbuser.value = moment(JSONObject[0].abuserDateOfMarriage).format('YYYY-MM-DD');
			txtDateOfRelationshipToAbuser.value = moment(JSONObject[0].abuserDateOfRelationship).format('YYYY-MM-DD');
			txtRelationshipToAbuserDescription.value = JSONObject[0].abuserRelationshipDescription;

			selCurrentRestrainingOrder.value = (JSONObject[0].currentRestrainingOrder == true) ? "Yes"
																			: (JSONObject[0].currentRestrainingOrder == false) ? "No"
																			:	null;

			selRequestedRestrainingOrder.value = (JSONObject[0].requestedRestrainingOrder == true) ? "Yes"
																			: (JSONObject[0].requestedRestrainingOrder == false) ? "No"
																			:	null;

			selRequiredEmergencyServices.value = (JSONObject[0].requiredEmergencyServices == true) ? "Yes"
																			: (JSONObject[0].requiredEmergencyServices == false) ? "No"
																			:	null;

			txtFacilityOfEmergencyServices.value = JSONObject[0].facilityOfEmergencyServices;
			txtOutOfPocketExpenses.value = JSONObject[0].outOfPocketExpenses;
			txtMoneyOwedForMedical.value = JSONObject[0].moneyOwedForMedical;
			selCourtOrderedForSupport.value = (JSONObject[0].abuserCourtOrderedForSupport == true) ? "Yes"
																			: (JSONObject[0].abuserCourtOrderedForSupport == false) ? "No"
																			:	null;

			txtCourtOrderedToPay.value = JSONObject[0].abuserCourtOrderedToPay;
			selDivorceDecree.value = (JSONObject[0].divorceDecreeAtCheckIn == true) ? "Yes"
																			: (JSONObject[0].divorceDecreeAtCheckIn == false) ? "No"
																			:	null;

			selOngoingTreatment.value = (JSONObject[0].onGoingTreatment == true) ? "Yes"
																			: (JSONObject[0].onGoingTreatment == false) ? "No"
																			:	null;

			txtOngoingTreatmentDescription.value = JSONObject[0].onGoingTreatmentDescription;
			txtPrimaryCarePhysician.value = JSONObject[0].primaryCarePhysician;
			selAbuserAlimony.value = (JSONObject[0].abuserAlimony == true) ? "Yes"
																			: (JSONObject[0].abuserAlimony == false) ? "No"
																			:	null;

			selAbuserAlimonyLate.value = (JSONObject[0].abuserAlimonyLate == true) ? "Yes"
																			: (JSONObject[0].abuserAlimonyLate == false) ? "No"
																			:	null;

			txtAbuserAlimonyLateAmount.value = JSONObject[0].abuserAlimonyLateAmount;
			selEmployed.value = (JSONObject[0].currentlyEmployed == true) ? "Yes"
																			: (JSONObject[0].currentlyEmployed == false) ? "No"
																			:	null;

			selChildrenLivingAtHome.value = (JSONObject[0].childrenLivingAtHome == true) ? "Yes"
																			: (JSONObject[0].childrenLivingAtHome == false) ? "No"
																			:	null;

			selChildrenTrauma.value = (JSONObject[0].childExperienceTrauma == true) ? "Yes"
																			: (JSONObject[0].childExperienceTrauma == false) ? "No"
																			:	null;

			txtChildrenTraumaExplanation.value = JSONObject[0].childTraumaDescription;
			txtChildrenCurrentLocationAndInfo.value = JSONObject[0].childrenCurrentInformation;
			txtTrustedContacts.value = JSONObject[0].trustedContacts;
			txtTimesReturnedToAbuser.value = JSONObject[0].abuserTimesReturned;
			selDoesNotWantToReturn.value = (JSONObject[0].doesNotWantToReturn == true) ? "Yes"
																			: (JSONObject[0].doesNotWantToReturn == false) ? "No"
																			:	null;

			selMaritalStatus.value = JSONObject[0].maritalStatus;
			selLegalCounsel.value = (JSONObject[0].hasLegalCounsel == true) ? "Yes"
																			: (JSONObject[0].hasLegalCounsel == false) ? "No"
																			:	null;

			selPursuingLegalCouncel.value = (JSONObject[0].pursuingLegalCouncel == true) ? "Yes"
																			: (JSONObject[0].pursuingLegalCouncel == false) ? "No"
																			:	null;

			selSmokeOrVape.value = (JSONObject[0].smokeOrVape == true) ? "Yes"
																			: (JSONObject[0].smokeOrVape == false) ? "No"
																			:	null;

			selConsumeAlcohol.value = (JSONObject[0].consumeAlcohol == true) ? "Yes"
																			: (JSONObject[0].consumeAlcohol == false) ? "No"
																			:	null;

			selAddictions.value = (JSONObject[0].hasCurrentAddictions == true) ? "Yes"
																			: (JSONObject[0].hasCurrentAddictions == false) ? "No"
																			:	null;

			txtCurrentAddictions.value = JSONObject[0].currentAddictions;
			txtLanguages.value = JSONObject[0].languagesSpoken;
			selPhysicalLimitations.value = (JSONObject[0].physicalLimitations == true) ? "Yes"
																			: (JSONObject[0].physicalLimitations == false) ? "No"
																			:	null;

			txtPhysicalLimitations.value = JSONObject[0].physicalLimitations;
			selFoodAllergies.value = (JSONObject[0].foodAllergies == true) ? "Yes"
																			: (JSONObject[0].foodAllergies == false) ? "No"
																			:	null;

			txtFoodAllergies.value = JSONObject[0].foodAllergies;

			setTextBoxVisibility();

			//Make sure Update Guest Record button is visible on the Summary Screen
			document.getElementById("btnSubmitInformation").hidden = "hidden"
			document.getElementById("btnUpdateGuest").removeAttribute("hidden");
		}
		else {
			//Make sure the Submit Info button is visible on the summary screen
			document.getElementById("btnUpdateGuest").hidden = "hidden"
			document.getElementById("btnSubmitInformation").removeAttribute("hidden");
			alert('No guest was found with these details!');
		}

	} else {
		// What do when the request fails
		console.log('The request failed!');
		alert('Please reach out to a sytem admin, failed to connect to the database.');
	}

	// Code that should run regardless of the request status

};

// Create and send a GET request
// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL
xhr.open('GET', '/guests/' + txtSocialSecurityNumber.value);

xhr.send();

}


function updateGuest() {


console.log(txtDateOfBirth.value, txtDateLeftAbuser.value, txtLastCommunication.value, txtDateOfMarriageToAbuser.value, txtDateOfRelationshipToAbuser.value)


// Set up our HTTP request
var xhr = new XMLHttpRequest();
xhr.open('PUT', '/guests/' + txtSocialSecurityNumber.value);
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
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

// Setup our listener to process completed requests
xhr.onload = function () {

	// Process our return data
	if (xhr.status >= 200 && xhr.status < 300) {
		// What do when the request is successful

		// Clear out all text boxes
		clearFormTextboxes();
		Navigation('btnSubmitInfo');
		alert('Guest was successfully updated!');


	} else {
		// What do when the request fails
				alert('Guest was not updated. Please contact your System Administrator!');
	}

	// Code that should run regardless of the request status

};

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
