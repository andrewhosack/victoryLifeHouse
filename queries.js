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
const getGuests = (request, response) => {
  

	pool.query('SELECT * FROM guests ORDER BY id ASC', (err, res) => {
	  if (err) {
		console.log(err);
	  }
	  response.status(200).json(res.rows[0])
	})
	
  }
  
 
 const getGuestById = (request, response) => {

  const id = parseInt(request.params.id)
const query = {
  text: 'SELECT * FROM guests WHERE "guestID" = $1',
  values: [id],
}
// callback
pool.query(query, (err, res) => {
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
	abuseMoneyOwedForMedical,
	outOfPocketExpenses,
	moneyOwedForMedical,
	moneyOwedForMedicalMonthly,
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
	currentSalary,
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
	physicalLimitationsDesc,
	foodAllergies,
	foodAllergiesDesc } = request.body
	
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
	if(abuseMoneyOwedForMedical == "") { 
	abuseMoneyOwedForMedical = null;
	}
	if(outOfPocketExpenses == "") { 
    outOfPocketExpenses = null;
	}
	if(moneyOwedForMedical == "") { 
    moneyOwedForMedical = null;
	}
	if(moneyOwedForMedicalMonthly == "") { 
	moneyOwedForMedicalMonthly = null;
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
	if(currentSalary == "") { 
	currentSalary = null;
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
	if(physicalLimitationsDesc == "") { 
	physicalLimitationsDesc = null;
	}
	if(foodAllergies == "") { 
	foodAllergies = null;
	}
	if(foodAllergiesDesc == "") { 
	foodAllergiesDesc = null;
	}
	
	
const query = {
  text: 'INSERT INTO guests ("guestID", "firstName","lastName","SSN","dateOfBirth","currentMailingAddress","addressOfLastAbuse","dateLeftAbuser","abuserLocation","abuserJailInfo","abuserInformation","abuserLastCommunication","finalEvent","abuserTypeOfRelationship","abuserDateOfMarriage","abuserDateOfRelationship","abuserRelationshipDescription","currentRestrainingOrder","requestedRestrainingOrder","requiredEmergencyServices","facilityOfEmergencyServices","abuseMoneyOwedForMedical","outOfPocketExpenses","moneyOwedForMedical","moneyOwedForMedicalMonthly","abuserCourtOrderedForSupport","abuserCourtOrderedToPay","divorceDecreeAtCheckIn","onGoingTreatment","onGoingTreatmentDescription","primaryCarePhysician","abuserAlimony","abuserAlimonyLate","abuserAlimonyLateAmount","currentlyEmployed","currentSalary","childrenLivingAtHome","childExperienceTrauma","childTraumaDescription","childrenCurrentInformation","trustedContacts","abuserTimesReturned","doesNotWantToReturn","maritalStatus","hasLegalCounsel","pursuingLegalCouncel","smokeOrVape","consumeAlcohol","hasCurrentAddictions","currentAddictions","languagesSpoken","physicalLimitations","physicalLimitationsDesc","foodAllergies","foodAllergiesDesc") VALUES ($3, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40, $41, $42, $43, $44, $45, $46, $47, $48, $49, $50, $51, $52, $53, $54)',
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
	abuseMoneyOwedForMedical,
	outOfPocketExpenses,
	moneyOwedForMedical,
	moneyOwedForMedicalMonthly,
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
	currentSalary,
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
	physicalLimitationsDesc,
	foodAllergies,
	foodAllergiesDesc],
}
console.log(query);
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
	abuseMoneyOwedForMedical,
	outOfPocketExpenses,
	moneyOwedForMedical,
	moneyOwedForMedicalMonthly,
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
	currentSalary,
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
	physicalLimitationsDesc,
	foodAllergies,
	foodAllergiesDesc } = request.body
	
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
	if(abuseMoneyOwedForMedical == "") { 
	abuseMoneyOwedForMedical = null;
	}
	if(outOfPocketExpenses == "") { 
	outOfPocketExpenses = null;
	}
	if(moneyOwedForMedical == "") { 
	moneyOwedForMedical = null;
	}
	if(moneyOwedForMedicalMonthly == "") { 
	moneyOwedForMedicalMonthly = null;
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
	if(currentSalary == "") { 
	currentSalary = null;
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
	if(physicalLimitationsDesc == "") { 
	physicalLimitationsDesc = null;
	}
	if(foodAllergies == "") { 
    foodAllergies = null;
	}
	if(foodAllergiesDesc == "") { 
	foodAllergiesDesc = null;
	}
	
  const query = {
  text: 'UPDATE guests SET "currentMailingAddress" = $1,"addressOfLastAbuse" = $2,"dateLeftAbuser" = $3,"abuserLocation" = $4,"abuserJailInfo" = $5,"abuserInformation" = $6,"abuserLastCommunication" = $7,"finalEvent" = $8,"abuserTypeOfRelationship"=$9,"abuserDateOfMarriage"=$10,"abuserDateOfRelationship"=$11,"abuserRelationshipDescription"=$12,"currentRestrainingOrder"=$13,"requestedRestrainingOrder"=$14,"requiredEmergencyServices"=$15,"facilityOfEmergencyServices"=$16,"abuseMoneyOwedForMedical"=$17,"outOfPocketExpenses"=$18,"moneyOwedForMedical"=$19,"moneyOwedForMedicalMonthly"=$20,"abuserCourtOrderedForSupport"=$21,"abuserCourtOrderedToPay"=$22,"divorceDecreeAtCheckIn"=$23,"onGoingTreatment"=$24,"onGoingTreatmentDescription"=$25,"primaryCarePhysician"=$26,"abuserAlimony"=$27,"abuserAlimonyLate"=$28,"abuserAlimonyLateAmount"=$29,"currentlyEmployed"=$30,"currentSalary"=$31,"childrenLivingAtHome"=$32,"childExperienceTrauma"=$33,"childTraumaDescription"=$34,"childrenCurrentInformation"=$35,"trustedContacts"=$36,"abuserTimesReturned"=$37,"doesNotWantToReturn"=$38,"maritalStatus"=$39,"hasLegalCounsel"=$40,"pursuingLegalCouncel"=$41,"smokeOrVape"=$42,"consumeAlcohol"=$43,"hasCurrentAddictions"=$44,"currentAddictions"=$45,"languagesSpoken"=$46,"physicalLimitations"=$47,"physicalLimitationsDesc"=$48,"foodAllergies"=$49,"foodAllergiesDesc"=$50 WHERE "guestID"=$51',
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
	abuseMoneyOwedForMedical,
	outOfPocketExpenses,
	moneyOwedForMedical,
	moneyOwedForMedicalMonthly,
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
	currentSalary,
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
	physicalLimitationsDesc,
	foodAllergies,
	foodAllergiesDesc,
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

//Address Section
const getAddressByGuestId = (request, response) => {

	const id = parseInt(request.params.id)
  const query = {
	text: 'SELECT * FROM addresses WHERE "guestID" = $1',
	values: [id],
  }
  // callback
  pool.query(query, (err, res) => {
	  if (err) {
		console.log(err);
	  }
	  response.status(200).json(res.rows)
	})
	
  }

  const insertGuestAddress = (request, response) => {
	
	let { 
		streetName,
		city,
		state,
		zipCode,
		typeOfAddress,
		id
	 } = request.body
	  
	  if(streetName == "") { 
		streetName = null;
	  }
	  if(city == "") { 
		city = null;
	  } 
	  if(state == "") { 
		state = null;
	  } 
	  if(zipCode == "") { 
		zipCode = null;
	  }
	  if(typeOfAddress == "") { 
		typeOfAddress = null;
	  }
	  
  const query = {
	text: 'INSERT INTO addresses ("guestID", "addressType","addressLine1","city","state","zipCode") VALUES ($1, $2, $3, $4, $5, $6)',
	values: [id,
		typeOfAddress,
		streetName,
		city,
		state,
		zipCode],
  }
  console.log(query);
  // callback
  pool.query(query, (err, res) => {
	if (err) {
	  console.log(err)
	} else {
	  response.status(201).send(`Address added for Guest`)
	  //console.log(res.rows[0])
	}
  })
  
  
  } 
 
  const updateGuestAddress = (request, response) => {
	const id = parseInt(request.params.id)

	let { 
		streetName,
		city,
		state,
		zipCode,
		typeOfAddress
	 } = request.body
	  
	  if(streetName == "") { 
		streetName = null;
	  }
	  if(city == "") { 
		city = null;
	  } 
	  if(state == "") { 
		state = null;
	  } 
	  if(zipCode == "") { 
		zipCode = null;
	  }
	  if(typeOfAddress == "") { 
		typeOfAddress = null;
	  }
	  
	const query = {
	text: 'UPDATE addresses SET "guestID" = $1,"addressLine1" = $3,"city" = $4,"state" = $5,"zipCode" = $6 WHERE "guestID"=$1 AND "addressType" = $2',
	values: [id,
	  typeOfAddress,
	  streetName,
	  city,
	  state,
	  zipCode],
  }
  console.log(query);
  // callback
  pool.query(query, (err, res) => {
	if (err) {
	  console.log(err)
	} else {
	  response.status(201).send(`Address modified for Guest`)
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
  getGuests,
  getGuestById,
  createGuest,
  updateGuest,
  getAddressByGuestId,
  insertGuestAddress,
  updateGuestAddress,
}