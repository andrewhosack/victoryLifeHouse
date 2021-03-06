CREATE TABLE "guests" (
"guestID" INTEGER NULL DEFAULT 9,
"firstName" VARCHAR NULL DEFAULT 9,
"lastName" VARCHAR NULL DEFAULT 9,
"SSN" INTEGER NULL DEFAULT 9,
"dateOfBirth" DATE NULL DEFAULT '1111-1-1',
"currentMailingAddress" INTEGER NULL DEFAULT 9,
"addressOfLastAbuse" INTEGER NULL DEFAULT 9,
"dateLeftAbuser" DATE NULL DEFAULT '1111-1-1',
"abuserLocation" INTEGER NULL DEFAULT 9,
"abuserJailInfo" VARCHAR NULL DEFAULT 9,
"abuserInformation" VARCHAR NULL DEFAULT 9,
"abuserLastCommunication" DATE NULL DEFAULT '1111-1-1',
"finalEvent" VARCHAR NULL DEFAULT 9,
"abuserTypeOfRelationship" INTEGER NULL DEFAULT 9,
"abuserDateOfMarriage" DATE NULL DEFAULT '1111-1-1',
"abuserDateOfRelationship" DATE NULL DEFAULT '1111-1-1',
"abuserRelationshipDescription" VARCHAR NULL DEFAULT 9,
"currentRestrainingOrder" BOOLEAN NULL DEFAULT FALSE,
"requestedRestrainingOrder" BOOLEAN NULL DEFAULT FALSE,
"requiredEmergencyServices" BOOLEAN NULL DEFAULT FALSE,
"facilityOfEmergencyServices" VARCHAR NULL DEFAULT 9,
"outOfPocketExpenses" NUMERIC NULL DEFAULT 9,
"moneyOwedForMedical" NUMERIC NULL DEFAULT 9,
"abuserCourtOrderedForSupport" BOOLEAN NULL DEFAULT FALSE,
"abuserCourtOrderedToPay" NUMERIC NULL DEFAULT 9,
"divorceDecreeAtCheckIn" BOOLEAN NULL DEFAULT FALSE,
"onGoingTreatment" BOOLEAN NULL DEFAULT FALSE,
"onGoingTreatmentDescription" VARCHAR NULL DEFAULT 9,
"primaryCarePhysician" VARCHAR NULL DEFAULT 9,
"abuserAlimony" BOOLEAN NULL DEFAULT FALSE,
"abuserAlimonyLate" BOOLEAN NULL DEFAULT FALSE,
"abuserAlimonyLateAmount" NUMERIC NULL DEFAULT 9,
"currentlyEmployed" BOOLEAN NULL DEFAULT FALSE,
"childrenLivingAtHome" BOOLEAN NULL DEFAULT FALSE,
"childExperienceTrauma" BOOLEAN NULL DEFAULT FALSE,
"childTraumaDescription" VARCHAR NULL DEFAULT 9,
"childrenCurrentInformation" VARCHAR NULL DEFAULT 9,
"trustedContacts" VARCHAR NULL DEFAULT 9,
"abuserTimesReturned" INTEGER NULL DEFAULT 9,
"doesNotWantToReturn" BOOLEAN NULL DEFAULT FALSE,
"maritalStatus" INTEGER NULL DEFAULT 9,
"hasLegalCounsel" BOOLEAN NULL DEFAULT FALSE,
"pursuingLegalCouncel" BOOLEAN NULL DEFAULT FALSE,
"smokeOrVape" BOOLEAN NULL DEFAULT FALSE,
"consumeAlcohol" BOOLEAN NULL DEFAULT FALSE,
"hasCurrentAddictions" BOOLEAN NULL DEFAULT FALSE,
"currentAddictions" VARCHAR NULL DEFAULT 9,
"languagesSpoken" VARCHAR NULL DEFAULT 9,
"physicalLimitations" BOOLEAN NULL DEFAULT FALSE,
"foodAllergies" BOOLEAN NULL DEFAULT FALSE
)
