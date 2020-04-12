CREATE TABLE "addresses" ( 
	"addressID" SERIAL PRIMARY KEY ,
	"guestID" INTEGER ,
	"addressType" VARCHAR ,
	"addressLine1" VARCHAR ,
	"addressLine2" VARCHAR ,
	"city" VARCHAR ,
	"state" VARCHAR ,
	"zipCode" VARCHAR
   )