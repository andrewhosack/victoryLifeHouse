// function getGuests() {
// 	// Set up our HTTP request
// 	var xhr = new XMLHttpRequest();
	
// 	// Create and send a GET request
// 	// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
// 	// The second argument is the endpoint URL
// 	xhr.open('GET', 'https://victorylife.herokuapp.com/guests');
	
// 	// Setup our listener to process completed requests
// 	xhr.onload = function () {
	
// 		// Process our return data
// 		if (xhr.status >= 200 && xhr.status < 300) {
// 		// What do when the request is successful
		
// 		var JSONObject = JSON.parse(xhr.response);
// 		if(Object.keys(JSONObject).length > 0) {
// 			console.log(JSONObject[0].guestID);
// 			//return JSONObject[0].guestID;
// 			return 3;
				
			
				
// 		}
// 	}
// 	else {
// 			// What do when the request fails
// 			console.log('The request failed!');
// 			alert('Please reach out to a sytem admin, failed to connect to the database.');
// 		}
// 	}
	
// 	xhr.send();
	
// }

function getGuests(callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onload = function(){ // when the request is loaded
		var JSONObject = JSON.parse(httpRequest.responseText);
		callback(JSONObject);// we're calling our method
    };
    httpRequest.open('GET', 'https://victorylife.herokuapp.com/guests');
    httpRequest.send();
}



function submitInfo() {

// Set up our HTTP request
var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://victorylife.herokuapp.com/guests');

xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.onload = function () {
		if (this.status  >= 200 && this.status < 300) {
			// Request finished. Do processing here.
			
			//Add necessary addresses
			handleAddresses()
			
			// Clear out all text boxes
			//clearFormTextboxes()


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
	'&addressOfLastAbuse=' + selAddressOfLastAbuse.value +
	'&dateLeftAbuser=' + txtDateLeftAbuser.value +
	'&abuserLocation=' + selLocationOfAbuser.value +
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
	'&abuseMoneyOwedForMedical=' + selAbuseMoneyOwedForMedical.value +
	'&outOfPocketExpenses=' + txtOutOfPocketExpenses.value +
	'&moneyOwedForMedical=' + selMoneyOwedForMedical.value +
	'&moneyOwedForMedicalMonthly=' + txtMoneyOwedForMedicalMonthly.value +
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
	'&currentSalary=' + txtCurrentSalary.value +
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
	'&physicalLimitations=' + selPhysicalLimitations.value +
	'&physicalLimitationsDesc=' + txtPhysicalLimitations.value +
	'&foodAllergies=' + selFoodAllergies.value +
	'&foodAllergiesDesc=' + txtFoodAllergies.value);


	





}

function loadGuestInformation() {
// Set up our HTTP request
var xhr = new XMLHttpRequest();


let validation = 0;
//Validate that user input has been entered into all four textboxes

validation = validateBasicInfo();

if(validation == 1) {
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

		//Set the Address screen up
		txtStreetName.value = "No Address on file";

		alert('No guest record was found with those details! Please continue in order to create a Guest record!');
	}
	else {
		var JSONObject = JSON.parse(xhr.response);

		if(Object.keys(JSONObject).length > 0) {

			//txtStreetName.value = "123 Fake Street";
			//txtCity.value = "Hendersonville";
			//document.getElementById('selState').value = "North Carolina";
			//document.getElementById('txtZipCode').value = 27232;
			selCurrentAddress.value = "";
			txtNewStreetName.value = "";
			txtNewCity.value = "";
			selNewState.value = "";
			txtNewZipCode.value = "";
			selRelationshipToNewAddress.value = "";
			selAddressOfLastAbuse.value = JSONObject.addressOfLastAbuse;
			txtDateLeftAbuser.value = moment(JSONObject.dateLeftAbuser).format('YYYY-MM-DD');
			selLocationOfAbuser.value = JSONObject.abuserLocation;
			txtAbuserJailInfo.value = JSONObject.abuserJailInfo;
			txtAbuserStreetName.value = "";
			txtAbuserCity.value = "";
			selAbuserState.value = "";
			txtAbuserZipCode.value = null;
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
			

			selAbuseMoneyOwedForMedical.value = (JSONObject.abuseMoneyOwedForMedical == true) ? "Yes"
																			: (JSONObject.abuseMoneyOwedForMedical == false) ? "No"
																			:	null;

			txtOutOfPocketExpenses.value = JSONObject.outOfPocketExpenses;
			selMoneyOwedForMedical.value = (JSONObject.moneyOwedForMedical == true) ? "Yes"
																			: (JSONObject.moneyOwedForMedical == false) ? "No"
																			:	null;

			txtMoneyOwedForMedicalMonthly.value = JSONObject.moneyOwedForMedicalMonthly;
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
			
			txtCurrentSalary.value = JSONObject.currentSalary;
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

			txtPhysicalLimitations.value = JSONObject.physicalLimitationsDesc;
			selFoodAllergies.value = (JSONObject.foodAllergies == true) ? "Yes"
																			: (JSONObject.foodAllergies == false) ? "No"
																			:	null;

			txtFoodAllergies.value = JSONObject.foodAllergiesDesc;
			
			setTextBoxVisibility();

			//Make sure Update Guest Record button is visible on the Summary Screen
			document.getElementById("btnSubmitInformation").hidden = "hidden"
			document.getElementById("btnUpdateGuest").removeAttribute("hidden");
		}
	}
	setTextBoxVisibility()

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
else {
	alert(validation);
}
}


function updateGuest() {


// Set up our HTTP request
var xhr = new XMLHttpRequest();
xhr.open('PUT', 'https://victorylife.herokuapp.com/guests/' + txtSocialSecurityNumber.value);

xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

xhr.onload = function () {
		if (xhr.status  >= 200 && xhr.status < 300) {
			// Request finished. Do processing here.

			//Update Addresses on Guest record
			handleAddresses();
			
			//Navigate to the splash screen
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
	'&addressOfLastAbuse=' + selAddressOfLastAbuse.value +
	'&dateLeftAbuser=' + moment(txtDateLeftAbuser.value).format('YYYY-MM-DD') +
	'&abuserLocation=' + selLocationOfAbuser.value +
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
	'&abuseMoneyOwedForMedical=' + selAbuseMoneyOwedForMedical.value +
	'&outOfPocketExpenses=' + txtOutOfPocketExpenses.value +
	'&moneyOwedForMedical=' + selMoneyOwedForMedical.value +
	'&moneyOwedForMedicalMonthly=' + txtMoneyOwedForMedicalMonthly.value +
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
	'&currentSalary=' + txtCurrentSalary.value +
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
	'&physicalLimitations=' + selPhysicalLimitations.value +
	'&physicalLimitationsDesc=' + txtPhysicalLimitations.value +
	'&foodAllergies=' + selFoodAllergies.value +
	'&foodAllergiesDesc=' + txtFoodAllergies.value
	);

}

function loadAddressInformation() {
	// Set up our HTTP request
	var xhr = new XMLHttpRequest();
	
	// Create and send a GET request
	// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
	// The second argument is the endpoint URL
	xhr.open('GET', 'https://victorylife.herokuapp.com/addresses/' + txtSocialSecurityNumber.value);
	
	// Setup our listener to process completed requests
	xhr.onload = function () {
	
		// Process our return data
		if (xhr.status >= 200 && xhr.status < 300) {
		// What do when the request is successful
		
		if (xhr.response != "") {
			
			var JSONObject = JSON.parse(xhr.response);
			console.log(JSONObject)
	
			if(Object.keys(JSONObject).length > 0) {
				var myAddresses = JSONObject;
				for (var key in myAddresses) {
					console.log('loading addresses, addressType:' + myAddresses[key].addressType);
					//Address Type 1 is home location
					if(myAddresses[key].addressType=='1') {
						txtStreetName.value = myAddresses[key].addressLine1;
						txtCity.value = myAddresses[key].city;
						selState.value = myAddresses[key].state;
						txtZipCode.value = myAddresses[key].zipCode;

					}
					//Address Type 2 is abuser locations
					if (myAddresses[key].addressType=='2') {
						txtAbuserStreetName.value = myAddresses[key].addressLine1;
						txtAbuserCity.value = myAddresses[key].city;
						selAbuserState.value = myAddresses[key].state;
						txtAbuserZipCode.value = myAddresses[key].zipCode;

					}
				}
				
			}
				
		}

		
			
	
		// Code that should run regardless of the request status
		setTextBoxVisibility()
	}
	else {
			// What do when the request fails
			console.log('The request failed!');
			alert('Please reach out to a sytem admin, failed to connect to the database.');
		}
	}
	
	xhr.send();
	
}

function updateAddress(typeOfAddress) {

	// Set up our HTTP request
	var xhr = new XMLHttpRequest();
	xhr.open('PUT', 'https://victorylife.herokuapp.com/addresses/' + txtSocialSecurityNumber.value);
	
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
	xhr.onload = function () {
			if (xhr.status  >= 200 && xhr.status < 300) {
				// Request finished. Do processing here.
	
				//Update Addresses on Guest record
				if(typeOfAddress == "1") {
					console.log('Primary address was updated!');
				}
				else if (typeOfAddress == "2") {
					console.log('Abuser\'s address was updated');
				}
	
				
			}
			else {
				// What do when the request fails
				console.log('Address was not updated!')
			}
		}
		
		if(typeOfAddress == '1') {
			xhr.send(
				'streetName=' + txtNewStreetName.value +
				'&city=' + txtNewCity.value +
				'&state=' + selNewState.value +
				'&zipCode=' + txtNewZipCode.value +
				'&typeOfAddress=' + typeOfAddress
			);
		}
		else if(typeOfAddress == '2') {
			xhr.send(
				'streetName=' + txtAbuserStreetName.value +
				'&city=' + txtAbuserCity.value +
				'&state=' + selAbuserState.value +
				'&zipCode=' + txtAbuserZipCode.value +
				'&typeOfAddress=' + typeOfAddress
			);
		}
		
		
	
	}

	function insertAddress(typeOfAddress) {

		// Set up our HTTP request
		var xhr = new XMLHttpRequest();
		xhr.open('POST', 'https://victorylife.herokuapp.com/addresses/');
		
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		
		xhr.onload = function () {
				if (xhr.status  >= 200 && xhr.status < 300) {
					// Request finished. Do processing here.
		
					//Update Addresses on Guest record
					if(typeOfAddress == "1") {
						console.log('Primary address was inserted!');
					}
					else if (typeOfAddress == "2") {
						console.log('Abuser\'s address was inserted');
					}
		
					
				}
				else {
					// What do when the request fails
					console.log('Address was not inserted!')
				}
			}
			
			if(typeOfAddress == '1') {
				xhr.send(
					'streetName=' + txtNewStreetName.value +
					'&city=' + txtNewCity.value +
					'&state=' + selNewState.value +
					'&zipCode=' + txtNewZipCode.value +
					'&typeOfAddress=' + typeOfAddress +
					'&id=' + txtSocialSecurityNumber.value
				);
			}
			else if(typeOfAddress == '2') {
				xhr.send(
					'streetName=' + txtAbuserStreetName.value +
					'&city=' + txtAbuserCity.value +
					'&state=' + selAbuserState.value +
					'&zipCode=' + txtAbuserZipCode.value +
					'&typeOfAddress=' + typeOfAddress +
					'&id=' + txtSocialSecurityNumber.value
				);
			}
			
			
		
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
	selCurrentAddress.value = 'Yes';


}


function handleAddresses() {
	// Set up our HTTP request
	var xhr = new XMLHttpRequest();
	
	// Create and send a GET request
	xhr.open('GET', 'https://victorylife.herokuapp.com/addresses/' + txtSocialSecurityNumber.value);
	
	// Setup our listener to process completed requests
	xhr.onload = function () {
	
		// Process our return data
		if (xhr.status >= 200 && xhr.status < 300) {
		// What do when the request is successful
		
		if (xhr.response != "") {
			
			var JSONObject = JSON.parse(xhr.response);
			console.log('handle address - JSONObject:' + JSONObject)
			console.log(JSONObject.length);
			var myAddresses = JSONObject;
	
			//If this is a New Guest being entered they will have no address records so we can assume either of these addresses would be an Insert
			if(Object.keys(JSONObject).length == 0) {
				if(selCurrentAddress.value == 'No') {
					insertAddress(1);
				}
				if(selLocationOfAbuser.value == 'Other address') {
					insertAddress(2);
				}
			}
			
			//If Guest only has one address then figure out which address it is, and INSERT the address that is not here, and UPDATE the one that is, based on conditions
			if(Object.keys(JSONObject).length == 1) {
				if( myAddresses[0].addressType == '1') {
					
					if(selCurrentAddress.value == 'No') {
						console.log('Updating Address type 1 for 1 address');
						updateAddress(1);
					}
					if(selLocationOfAbuser.value == 'Other address') {
						insertAddress(2);
					}
				}

				if( myAddresses[0].addressType == '2') {
					
					if(selCurrentAddress.value == 'No') {
						insertAddress(1);
					}
					if(selLocationOfAbuser.value == 'Other address') {
						console.log('Updating Address type 2 for 1 address');
						updateAddress(2);
					}
				}
			}
				
			//If Guest has two address records then you will simply update both based on the conditions
			if(Object.keys(JSONObject).length == 2) {
					if(selCurrentAddress.value == 'No') {
						console.log('Updating Address type 1 for 2 addresses');
						updateAddress(1);
					}
					if(selLocationOfAbuser.value == 'Other address') {
						console.log('Updating Address type 2 for 2 addresses');
						updateAddress(2);
					}

				
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
