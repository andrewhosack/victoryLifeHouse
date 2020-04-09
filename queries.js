const { Pool } = require('pg')
const pool = new Pool({
  user: 'pjygppujijezfa',
  host: 'ec2-52-7-39-178.compute-1.amazonaws.com',
  database: 'd721cr2mgfd73i',
  password: '9f388ec0b45de0d36e2e90f31837b1d6e63451970cf53c064ff8b536c1809b5f',
  port: 5432,
})

const getUsers = (request, response) => {
  

  pool.query('SELECT * FROM users ORDER BY id ASC', (err, res) => {
    if (err) {
      console.log(err);
    }
    response.status(200).json(res.rows[0])
  })
  
}

const getUserById = (request, response) => {
	
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM users WHERE id = $1', [id], (err, res) => {
    if (err) {
      console.log(err);
    }
    response.status(200).json(res.rows[0])
  })
	
}

const createUser = (request, response) => {
	
  const { firstName, lastName, SSN, dateOfBirth } = request.body

  pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (err, res) => {
    if (err) {
      console.log(err);
    }
    response.status(201).send(`User added with ID: ${result.insertId}`)
  })
  
}

const updateUser = (request, response) => {
	
  const id = parseInt(request.params.id)
  const { name, email } = request.body

  pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (err, res) => {
      if (err) {
        console.log(err);
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
  
}

const deleteUser = (request, response) => {
	
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM users WHERE id = $1', [id], (err, res) => {
    if (err) {
      console.log(err);
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
  
}


//App INSERT
const getGuestById = (request, response) => {

  const id = parseInt(request.params.id)
const query = {
  text: 'SELECT * FROM guests WHERE "guestID" = $1',
  values: [id],
}
console.log('contents of the query array are: ' + query[0].text + ' and ' + query[0].values);
// callback
pool.query(query, (err, res) => {
  //pool.query('SELECT * FROM guests WHERE "guestID" = $1', [id], (err, res) => {
    if (err) {
      console.log(err);
    }
    response.status(200).json(res.rows[0])
  })
  
}

const createGuest = (request, response) => {
	
  let { 
  firstName, 
  lastName, 
  SSN, 
  dateOfBirth,
	currentMailingAddress,
	addressOfLastAbuse,
	dateLeftAbuser,
	abuserLocation,
	abuserJailInfo,
	abuserInformation,
	abuserLastCommunication,
	finalEvent,
	abuserTypeOfRelationship,
	abuserDateOfMarriage,
	abuserDateOfRelationship,
	abuserRelationshipDescription,
	currentRestrainingOrder,
	requestedRestrainingOrder,
	requiredEmergencyServices,
	facilityOfEmergencyServices,
	outOfPocketExpenses,
	moneyOwedForMedical,
	abuserCourtOrderedForSupport,
	abuserCourtOrderedToPay,
	divorceDecreeAtCheckIn,
	onGoingTreatment,
	onGoingTreatmentDescription,
	primaryCarePhysician,
	abuserAlimony,
	abuserAlimonyLate,
	abuserAlimonyLateAmount,
	currentlyEmployed,
	childrenLivingAtHome,
	childExperienceTrauma,
	childTraumaDescription,
	childrenCurrentInformation,
	trustedContacts,
	abuserTimesReturned,
	doesNotWantToReturn,
	maritalStatus,
	hasLegalCounsel,
	pursuingLegalCouncel,
	smokeOrVape,
	consumeAlcohol,
	hasCurrentAddictions,
	currentAddictions,
	languagesSpoken,
	physicalLimitations,
	foodAllergies } = request.body
	
	if(firstName == "") { 
    firstName = null;
	}
	if(lastName == "") { 
    lastName = null;
	} 
	if(SSN == "") { 
    SSN = null;
	} 
	if(dateOfBirth == "" || dateOfBirth == "null") { 
    dateOfBirth = null;
	}
	if(currentMailingAddress == "") { 
    currentMailingAddress = null;
	}
	if(addressOfLastAbuse == "") { 
    addressOfLastAbuse = null;
	}
	if(dateLeftAbuser == ""|| dateLeftAbuser == "null") { 
    dateLeftAbuser = null;
	}
	if(abuserLocation == "") { 
    abuserLocation = null;
	}
	if(abuserJailInfo == "") { 
    abuserJailInfo = null;
	}
	if(abuserInformation == "") { 
    abuserInformation = null;
	}
	if(abuserLastCommunication == "" || abuserLastCommunication == "null") { 
    abuserLastCommunication = null;
	}
	if(finalEvent == "") { 
    finalEvent = null;
	}
	if(abuserTypeOfRelationship == "") { 
    abuserTypeOfRelationship = null;
	}
	if(abuserDateOfMarriage == "" || abuserDateOfMarriage == "null") { 
    abuserDateOfMarriage = null;
	}
	if(abuserDateOfRelationship == "" || abuserDateOfRelationship == "null") { 
    abuserDateOfRelationship = null;
	}
	if(abuserRelationshipDescription == "") { 
    abuserRelationshipDescription = null;
	}
	if(currentRestrainingOrder == "") { 
    currentRestrainingOrder = null;
	}
	if(requestedRestrainingOrder == "") { 
    requestedRestrainingOrder = null;
	}
	if(requiredEmergencyServices == "") { 
    requiredEmergencyServices = null;
	}
	if(facilityOfEmergencyServices == "") { 
    facilityOfEmergencyServices = null;
	}
	if(outOfPocketExpenses == "") { 
    outOfPocketExpenses = null;
	}
	if(moneyOwedForMedical == "") { 
    moneyOwedForMedical = null;
	}
	if(abuserCourtOrderedForSupport == "") { 
    abuserCourtOrderedForSupport = null;
	}
	if(abuserCourtOrderedToPay == "") { 
    abuserCourtOrderedToPay = null;
	}
	if(divorceDecreeAtCheckIn == "") { 
    divorceDecreeAtCheckIn = null;
	}
	if(onGoingTreatment == "") { 
    onGoingTreatment = null;
	}
	if(onGoingTreatmentDescription == "") { 
    onGoingTreatmentDescription = null;
	}
	if(primaryCarePhysician == "") { 
    primaryCarePhysician = null;
	}
	if(abuserAlimony == "") { 
    abuserAlimony = null;
	}
	if(abuserAlimonyLate == "") { 
    abuserAlimonyLate = null;
	}
	if(abuserAlimonyLateAmount == "") { 
    abuserAlimonyLateAmount = null;
	}
	if(currentlyEmployed == "") { 
    currentlyEmployed = null;
	}
	if(childrenLivingAtHome == "") { 
    childrenLivingAtHome = null;
	}
	if(childExperienceTrauma == "") { 
    childExperienceTrauma = null;
	}
	if(childTraumaDescription == "") { 
    childTraumaDescription = null;
	}
	if(childrenCurrentInformation == "") { 
    childrenCurrentInformation = null;
	}
	if(trustedContacts == "") { 
    trustedContacts = null;
	}
	if(abuserTimesReturned == "") { 
    abuserTimesReturned = null;
	}
	if(doesNotWantToReturn == "") { 
    doesNotWantToReturn = null;
	}
	if(maritalStatus == "") { 
    maritalStatus = null;
	}
	if(hasLegalCounsel == "") { 
    hasLegalCounsel = null;
	}
	if(pursuingLegalCouncel == "") { 
    pursuingLegalCouncel = null;
	}
	if(smokeOrVape == "") { 
    smokeOrVape = null;
	}
	if(consumeAlcohol == "") { 
    consumeAlcohol = null;
	}
	if(hasCurrentAddictions == "") { 
    hasCurrentAddictions = null;
	}
	if(currentAddictions == "") { 
    currentAddictions = null;
	}
	if(languagesSpoken == "") { 
    languagesSpoken = null;
	}
	if(physicalLimitations == "") { 
    physicalLimitations = null;
	}
	if(foodAllergies == "") { 
    foodAllergies = null;
	}
	
	
const query = {
  text: 'INSERT INTO guests ("guestID", "firstName","lastName","SSN","dateOfBirth","currentMailingAddress","addressOfLastAbuse","dateLeftAbuser","abuserLocation","abuserJailInfo","abuserInformation","abuserLastCommunication","finalEvent","abuserTypeOfRelationship","abuserDateOfMarriage","abuserDateOfRelationship","abuserRelationshipDescription","currentRestrainingOrder","requestedRestrainingOrder","requiredEmergencyServices","facilityOfEmergencyServices","outOfPocketExpenses","moneyOwedForMedical","abuserCourtOrderedForSupport","abuserCourtOrderedToPay","divorceDecreeAtCheckIn","onGoingTreatment","onGoingTreatmentDescription","primaryCarePhysician","abuserAlimony","abuserAlimonyLate","abuserAlimonyLateAmount","currentlyEmployed","childrenLivingAtHome","childExperienceTrauma","childTraumaDescription","childrenCurrentInformation","trustedContacts","abuserTimesReturned","doesNotWantToReturn","maritalStatus","hasLegalCounsel","pursuingLegalCouncel","smokeOrVape","consumeAlcohol","hasCurrentAddictions","currentAddictions","languagesSpoken","physicalLimitations","foodAllergies") VALUES ($3, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40, $41, $42, $43, $44, $45, $46, $47, $48, $49)',
  values: [firstName, 
	lastName, 
	SSN, 
	dateOfBirth,
	currentMailingAddress,
	addressOfLastAbuse,
	dateLeftAbuser,
	abuserLocation,
	abuserJailInfo,
	abuserInformation,
	abuserLastCommunication,
	finalEvent,
	abuserTypeOfRelationship,
	abuserDateOfMarriage,
	abuserDateOfRelationship,
	abuserRelationshipDescription,
	currentRestrainingOrder,
	requestedRestrainingOrder,
	requiredEmergencyServices,
	facilityOfEmergencyServices,
	outOfPocketExpenses,
	moneyOwedForMedical,
	abuserCourtOrderedForSupport,
	abuserCourtOrderedToPay,
	divorceDecreeAtCheckIn,
	onGoingTreatment,
	onGoingTreatmentDescription,
	primaryCarePhysician,
	abuserAlimony,
	abuserAlimonyLate,
	abuserAlimonyLateAmount,
	currentlyEmployed,
	childrenLivingAtHome,
	childExperienceTrauma,
	childTraumaDescription,
	childrenCurrentInformation,
	trustedContacts,
	abuserTimesReturned,
	doesNotWantToReturn,
	maritalStatus,
	hasLegalCounsel,
	pursuingLegalCouncel,
	smokeOrVape,
	consumeAlcohol,
	hasCurrentAddictions,
	currentAddictions,
	languagesSpoken,
	physicalLimitations,
	foodAllergies],
}
// callback
pool.query(query, (err, res) => {
  if (err) {
    console.log(err)
  } else {
	response.status(201).send(`Guest added with name: ${firstName}`)
	//console.log(res.rows[0])
  }
})


}
	

const updateGuest = (request, response) => {
	
  
  


	const id = parseInt(request.params.id)
	let { 
  firstName, 
  lastName, 
  SSN, 
  dateOfBirth,
	currentMailingAddress,
	addressOfLastAbuse,
	dateLeftAbuser,
	abuserLocation,
	abuserJailInfo,
	abuserInformation,
	abuserLastCommunication,
	finalEvent,
	abuserTypeOfRelationship,
	abuserDateOfMarriage,
	abuserDateOfRelationship,
	abuserRelationshipDescription,
	currentRestrainingOrder,
	requestedRestrainingOrder,
	requiredEmergencyServices,
	facilityOfEmergencyServices,
	outOfPocketExpenses,
	moneyOwedForMedical,
	abuserCourtOrderedForSupport,
	abuserCourtOrderedToPay,
	divorceDecreeAtCheckIn,
	onGoingTreatment,
	onGoingTreatmentDescription,
	primaryCarePhysician,
	abuserAlimony,
	abuserAlimonyLate,
	abuserAlimonyLateAmount,
	currentlyEmployed,
	childrenLivingAtHome,
	childExperienceTrauma,
	childTraumaDescription,
	childrenCurrentInformation,
	trustedContacts,
	abuserTimesReturned,
	doesNotWantToReturn,
	maritalStatus,
	hasLegalCounsel,
	pursuingLegalCouncel,
	smokeOrVape,
	consumeAlcohol,
	hasCurrentAddictions,
	currentAddictions,
	languagesSpoken,
	physicalLimitations,
	foodAllergies } = request.body
	
	if(firstName == "") { 
    firstName = null;
	}
	if(lastName == "") { 
    lastName = null;
	} 
	if(SSN == "") { 
    SSN = null;
	} 
	if(dateOfBirth == "" || dateOfBirth == "null") { 
    dateOfBirth = null;
	}
	if(currentMailingAddress == "") { 
    currentMailingAddress = null;
	}
	if(addressOfLastAbuse == "") { 
    addressOfLastAbuse = null;
	}
	if(dateLeftAbuser == ""|| dateLeftAbuser == "null") { 
    dateLeftAbuser = null;
	}
	if(abuserLocation == "") { 
    abuserLocation = null;
	}
	if(abuserJailInfo == "") { 
    abuserJailInfo = null;
	}
	if(abuserInformation == "") { 
    abuserInformation = null;
	}
	if(abuserLastCommunication == "" || abuserLastCommunication == "null") { 
    abuserLastCommunication = null;
	}
	if(finalEvent == "") { 
    finalEvent = null;
	}
	if(abuserTypeOfRelationship == "") { 
    abuserTypeOfRelationship = null;
	}
	if(abuserDateOfMarriage == "" || abuserDateOfMarriage == "null") { 
    abuserDateOfMarriage = null;
	}
	if(abuserDateOfRelationship == "" || abuserDateOfRelationship == "null") { 
    abuserDateOfRelationship = null;
	}
	if(abuserRelationshipDescription == "") { 
    abuserRelationshipDescription = null;
	}
	if(currentRestrainingOrder == "") { 
    currentRestrainingOrder = null;
	}
	if(requestedRestrainingOrder == "") { 
    requestedRestrainingOrder = null;
	}
	if(requiredEmergencyServices == "") { 
    requiredEmergencyServices = null;
	}
	if(facilityOfEmergencyServices == "") { 
    facilityOfEmergencyServices = null;
	}
	if(outOfPocketExpenses == "") { 
    outOfPocketExpenses = null;
	}
	if(moneyOwedForMedical == "") { 
    moneyOwedForMedical = null;
	}
	if(abuserCourtOrderedForSupport == "") { 
    abuserCourtOrderedForSupport = null;
	}
	if(abuserCourtOrderedToPay == "") { 
    abuserCourtOrderedToPay = null;
	}
	if(divorceDecreeAtCheckIn == "") { 
    divorceDecreeAtCheckIn = null;
	}
	if(onGoingTreatment == "") { 
    onGoingTreatment = null;
	}
	if(onGoingTreatmentDescription == "") { 
    onGoingTreatmentDescription = null;
	}
	if(primaryCarePhysician == "") { 
    primaryCarePhysician = null;
	}
	if(abuserAlimony == "") { 
    abuserAlimony = null;
	}
	if(abuserAlimonyLate == "") { 
    abuserAlimonyLate = null;
	}
	if(abuserAlimonyLateAmount == "") { 
    abuserAlimonyLateAmount = null;
	}
	if(currentlyEmployed == "") { 
    currentlyEmployed = null;
	}
	if(childrenLivingAtHome == "") { 
    childrenLivingAtHome = null;
	}
	if(childExperienceTrauma == "") { 
    childExperienceTrauma = null;
	}
	if(childTraumaDescription == "") { 
    childTraumaDescription = null;
	}
	if(childrenCurrentInformation == "") { 
    childrenCurrentInformation = null;
	}
	if(trustedContacts == "") { 
    trustedContacts = null;
	}
	if(abuserTimesReturned == "") { 
    abuserTimesReturned = null;
	}
	if(doesNotWantToReturn == "") { 
    doesNotWantToReturn = null;
	}
	if(maritalStatus == "") { 
    maritalStatus = null;
	}
	if(hasLegalCounsel == "") { 
    hasLegalCounsel = null;
	}
	if(pursuingLegalCouncel == "") { 
    pursuingLegalCouncel = null;
	}
	if(smokeOrVape == "") { 
    smokeOrVape = null;
	}
	if(consumeAlcohol == "") { 
    consumeAlcohol = null;
	}
	if(hasCurrentAddictions == "") { 
    hasCurrentAddictions = null;
	}
	if(currentAddictions == "") { 
    currentAddictions = null;
	}
	if(languagesSpoken == "") { 
    languagesSpoken = null;
	}
	if(physicalLimitations == "") { 
    physicalLimitations = null;
	}
	if(foodAllergies == "") { 
    foodAllergies = null;
	}
	
  const query = {
  text: 'UPDATE guests SET "currentMailingAddress" = $1,"addressOfLastAbuse" = $2,"dateLeftAbuser" = $3,"abuserLocation" = $4,"abuserJailInfo" = $5,"abuserInformation" = $6,"abuserLastCommunication" = $7,"finalEvent" = $8,"abuserTypeOfRelationship"=$9,"abuserDateOfMarriage"=$10,"abuserDateOfRelationship"=$11,"abuserRelationshipDescription"=$12,"currentRestrainingOrder"=$13,"requestedRestrainingOrder"=$14,"requiredEmergencyServices"=$15,"facilityOfEmergencyServices"=$16,"outOfPocketExpenses"=$17,"moneyOwedForMedical"=$18,"abuserCourtOrderedForSupport"=$19,"abuserCourtOrderedToPay"=$20,"divorceDecreeAtCheckIn"=$21,"onGoingTreatment"=$22,"onGoingTreatmentDescription"=$23,"primaryCarePhysician"=$24,"abuserAlimony"=$25,"abuserAlimonyLate"=$26,"abuserAlimonyLateAmount"=$27,"currentlyEmployed"=$28,"childrenLivingAtHome"=$29,"childExperienceTrauma"=$30,"childTraumaDescription"=$31,"childrenCurrentInformation"=$32,"trustedContacts"=$33,"abuserTimesReturned"=$34,"doesNotWantToReturn"=$35,"maritalStatus"=$36,"hasLegalCounsel"=$37,"pursuingLegalCouncel"=$38,"smokeOrVape"=$39,"consumeAlcohol"=$40,"hasCurrentAddictions"=$41,"currentAddictions"=$42,"languagesSpoken"=$43,"physicalLimitations"=$44,"foodAllergies"=$45 WHERE "guestID"=$46',
  values: [currentMailingAddress,
	addressOfLastAbuse,
	dateLeftAbuser,
	abuserLocation,
	abuserJailInfo,
	abuserInformation,
	abuserLastCommunication,
	finalEvent,
	abuserTypeOfRelationship,
	abuserDateOfMarriage,
	abuserDateOfRelationship,
	abuserRelationshipDescription,
	currentRestrainingOrder,
	requestedRestrainingOrder,
	requiredEmergencyServices,
	facilityOfEmergencyServices,
	outOfPocketExpenses,
	moneyOwedForMedical,
	abuserCourtOrderedForSupport,
	abuserCourtOrderedToPay,
	divorceDecreeAtCheckIn,
	onGoingTreatment,
	onGoingTreatmentDescription,
	primaryCarePhysician,
	abuserAlimony,
	abuserAlimonyLate,
	abuserAlimonyLateAmount,
	currentlyEmployed,
	childrenLivingAtHome,
	childExperienceTrauma,
	childTraumaDescription,
	childrenCurrentInformation,
	trustedContacts,
	abuserTimesReturned,
	doesNotWantToReturn,
	maritalStatus,
	hasLegalCounsel,
	pursuingLegalCouncel,
	smokeOrVape,
	consumeAlcohol,
	hasCurrentAddictions,
	currentAddictions,
	languagesSpoken,
	physicalLimitations,
	foodAllergies,
	id],
}
console.log(query);
// callback
pool.query(query, (err, res) => {
  if (err) {
    console.log(err)
  } else {
	response.status(201).send(`Guest modified with name: ${firstName}`)
	//console.log(res.rows[0])
  }
})


}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getGuestById,
  createGuest,
  updateGuest,
}