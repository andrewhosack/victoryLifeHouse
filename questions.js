const STORE = [
    {
      question: 'First Name',
      textboxName: 'txtFirstName',
      onElement: 'div2'
    },
    {
      question: 'Last Name',
      textboxName: 'txtLastName',
      onElement: 'div2'
    },
    {
      question: 'Social Security number',
      textboxName: 'txtSocialSecurityNumber',
      onElement: 'div2'
    },
    {
      question: 'Date of Birth',
      textboxName: 'txtDateOfBirth',
      onElement: 'div2'
    },
    /*
    {
      question: 'City/State of Birth',
      textboxName: 'txtCityStateOfBirth',
      onElement: 'div2'
    },

    {
      question: 'Ethnicity',
      textboxName: 'txtEthnicity',
      onElement: 'div2'
    },
    {
      question: 'Original Gender',
      textboxName: 'txtOriginalGender',
      onElement: 'div2'
    },
    {
      question: 'Religious Affiliation',
      textboxName: 'txtReligion',
      onElement: 'div2'
    },
    */
    {
      question: 'Street name and number',
      textboxName: 'txtStreetName',
      onElement: 'div4'
    },
    {
      question: 'City',
      textboxName: 'txtCity',
      onElement: 'div4'
    },
    {
      question: 'State',
      textboxName: 'txtState',
      onElement: 'div4'
    },
    {
      question: 'Zip Code',
      textboxName: 'txtZipCode',
      onElement: 'div4'
    },
    {
      question: 'Street name and number',
      textboxName: 'txtBillingStreetName',
      onElement: 'div4'
    },
    {
      question: 'City',
      textboxName: 'txtBillingCity',
      onElement: 'div4'
    },
    {
      question: 'State',
      textboxName: 'txtBillingState',
      onElement: 'div4'
    },
    {
      question: 'Zip Code',
      textboxName: 'txtBillingZipCode',
      onElement: 'div4'
    },
    {
      question: 'Street name and number',
      textboxName: 'txtAbuseStreetName',
      onElement: 'div6'
    },
    {
      question: 'City',
      textboxName: 'txtAbuseCity',
      onElement: 'div6'
    },
    {
      question: 'State',
      textboxName: 'txtAbuseState',
      onElement: 'div6'
    },
    {
      question: 'Zip Code',
      textboxName: 'txtAbuseZipCode',
      onElement: 'div6'
    },
    {
      question: 'Location of Abuser',
      textboxName: 'txtAbuserLocation',
      onElement: 'div6'
    },
    {
      question: 'What Date did you leave your abuser?',
      textboxName: 'txtDateLeftAbuser',
      onElement: 'div6'
    },
    {
      question: 'What was relationship to abuser?',
      textboxName: 'txtRelationshipToAbuser',
      onElement: 'div6'
    },
    {
      question: 'Restraining Order?',
      textboxName: 'txtRestrainingOrder',
      onElement: 'div6'
    },
    {
      question: 'Hospital Stay?',
      textboxName: 'txtHospitalStay',
      onElement: 'div6'
    },
    {
      question: 'Name of Hospital',
      textboxName: 'txtHospitalName',
      onElement: 'div6'
    },
    {
      question: 'Current medical bills from this trauma?',
      textboxName: 'txtMedicalBills',
      onElement: 'div8'
    },
    {
      question: 'Are you on a payment plan?',
      textboxName: 'txtPaymentPlan',
      onElement: 'div8'
    },
    {
      question: 'What kind of Health Insurance do you have?',
      textboxName: 'txtHealthInsuranceType',
      onElement: 'div8'
    },
    {
      question: 'What kind of Health insurance do your kids have?',
      textboxName: 'txtChildsHealthInsuranceType',
      onElement: 'div8'
    },
    {
      question: 'What were the damages',
      textboxName: 'txtDamages',
      onElement: 'div8'
    },
    {
      question: 'Are you on any medicines?',
      textboxName: 'txtMedication',
      onElement: 'div8'
    },
    {
      question: 'Name of Doctor',
      textboxName: 'txtDoctorsName',
      onElement: 'div8'
    },
    {
      question: 'Phone Number',
      textboxName: 'txtDoctorsPhoneNumber',
      onElement: 'div8'
    },
    {
      question: 'Email Address',
      textboxName: 'txtDoctorsEmailAddress',
      onElement: 'div8'
    },
    {
      question: 'Are you employed?',
      textboxName: 'txtEmployed',
      onElement: 'div8'
    },
    {
      question: 'Do you currently have children living at home with you?',
      textboxName: 'txtChildrenLivingAtHome',
      onElement: 'div10'
    },
    {
      question: 'Did any children experience trauma?',
      textboxName: 'txtChildrenTrauma',
      onElement: 'div10'
    },
    {
      question: 'Did any children experience trauma?',
      textboxName: 'txtChildrenTrauma',
      onElement: 'div10'
    },
    {
      question: 'Please explain the trauma experienced by your children',
      textboxName: 'txtChildrenTraumaExplanation',
      onElement: 'div10'
    },
    {
      question: 'What is the name of the person responsible for your children right now and the address where you last left your children?',
      textboxName: 'txtChildrenCurrentLocationAndInfo',
      onElement: 'div10'
    },
    {
      question: 'What are the names, relationships, and contact information of the two people you most trust right now to not share where you are or what you are doing?',
      textboxName: 'txtTrustedContacts',
      onElement: 'div10'
    },
    {
      question: 'How many times have you left and gone back to your abuser?',
      textboxName: 'txtTimesReturnedToAbuser',
      onElement: 'div10'
    },
    {
      question: 'Have you purposed it in your heart to not go back this time?',
      textboxName: 'txtDoesNotWantToReturn',
      onElement: 'div10'
    },
    {
      question: 'What is your marital status?',
      textboxName: 'txtMaritalStatus',
      onElement: 'div12'
    },
    {
      question: 'Do you have legal counsel?',
      textboxName: 'txtLegalCounsel',
      onElement: 'div12'
    },
    {
      question: 'Will you be pursuing legal counsel?',
      textboxName: 'txtPursuingLegalCouncel',
      onElement: 'div12'
    },
    {
      question: 'Do you smoke?',
      textboxName: 'txtSmoke',
      onElement: 'div12'
    },
    {
      question: 'Do you have any chemical additions?',
      textboxName: 'txtAddictions',
      onElement: 'div12'
    },
    {
      question: 'What languages do you speak?',
      textboxName: 'txtLanguages',
      onElement: 'div12'
    },
    {
      question: 'Do you have any physical limitations?',
      textboxName: 'txtPhysicalLimitations',
      onElement: 'div12'
    },
    {
      question: 'Do you have any food allergies?',
      textboxName: 'txtFoodAllergies',
      onElement: 'div12'
    }
  ];
