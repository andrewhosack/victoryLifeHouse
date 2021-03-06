CREATE TABLE "guests" (
"guestID" INTEGER ,
"firstName" VARCHAR ,
"lastName" VARCHAR ,
"SSN" INTEGER ,
"dateOfBirth" DATE  ,
"currentMailingAddress" INTEGER ,
"addressOfLastAbuse" VARCHAR ,
"dateLeftAbuser" DATE  ,
"abuserLocation" VARCHAR ,
"abuserJailInfo" VARCHAR ,
"abuserInformation" VARCHAR ,
"abuserLastCommunication" DATE  ,
"finalEvent" VARCHAR ,
"abuserTypeOfRelationship" VARCHAR ,
"abuserDateOfMarriage" DATE  ,
"abuserDateOfRelationship" DATE  ,
"abuserRelationshipDescription" VARCHAR ,
"currentRestrainingOrder" BOOLEAN ,
"requestedRestrainingOrder" BOOLEAN ,
"requiredEmergencyServices" BOOLEAN ,
"facilityOfEmergencyServices" VARCHAR ,
"abuseMoneyOwedForMedical" BOOLEAN ,
"outOfPocketExpenses" NUMERIC ,
"moneyOwedForMedical" BOOLEAN ,
"moneyOwedForMedicalMonthly" NUMERIC ,
"abuserCourtOrderedForSupport" BOOLEAN ,
"abuserCourtOrderedToPay" NUMERIC ,
"divorceDecreeAtCheckIn" BOOLEAN ,
"onGoingTreatment" BOOLEAN ,
"onGoingTreatmentDescription" VARCHAR ,
"primaryCarePhysician" VARCHAR ,
"abuserAlimony" BOOLEAN ,
"abuserAlimonyLate" BOOLEAN ,
"abuserAlimonyLateAmount" NUMERIC ,
"currentlyEmployed" BOOLEAN ,
"currentSalary" NUMERIC,
"childrenLivingAtHome" BOOLEAN ,
"childExperienceTrauma" BOOLEAN ,
"childTraumaDescription" VARCHAR ,
"childrenCurrentInformation" VARCHAR ,
"trustedContacts" VARCHAR ,
"abuserTimesReturned" INTEGER ,
"doesNotWantToReturn" BOOLEAN ,
"maritalStatus" VARCHAR ,
"hasLegalCounsel" BOOLEAN ,
"pursuingLegalCouncel" BOOLEAN ,
"smokeOrVape" BOOLEAN ,
"consumeAlcohol" BOOLEAN ,
"hasCurrentAddictions" BOOLEAN ,
"currentAddictions" VARCHAR ,
"languagesSpoken" VARCHAR ,
"physicalLimitations" BOOLEAN ,
"physicalLimitationsDesc" VARCHAR ,
"foodAllergies" BOOLEAN ,
"foodAllergiesDesc" VARCHAR
)
