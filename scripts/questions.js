const STORE = [
    {
      question: 'First Name',
      textboxName: 'txtFirstName',
      onElement: 'div2',
      formHeader: ''
    },
    {
      question: 'Last Name',
      textboxName: 'txtLastName',
      onElement: 'div2',
      formHeader: ''

    },
    {
      question: 'Social Security number',
      textboxName: 'txtSocialSecurityNumber',
      onElement: 'div2',
      formHeader: ''
    },
    {
      question: 'Date of Birth',
      textboxName: 'txtDateOfBirth',
      onElement: 'div2',
      formHeader: ''
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
      onElement: 'div4',
      formHeader: 'Mailing Address information'
    },
    {
      question: 'City',
      textboxName: 'txtCity',
      onElement: 'div4',
      formHeader: ''
    },
    {
      question: 'State',
      textboxName: 'txtState',
      onElement: 'div4',
      formHeader: ''
    },
    {
      question: 'Zip Code',
      textboxName: 'txtZipCode',
      onElement: 'div4',
      formHeader: ''
    },
    {
      question: 'Street name and number',
      textboxName: 'txtBillingStreetName',
      onElement: 'div4',
      formHeader: 'Billing Address Information'
    },
    {
      question: 'City',
      textboxName: 'txtBillingCity',
      onElement: 'div4',
      formHeader: ''
    },
    {
      question: 'State',
      textboxName: 'txtBillingState',
      onElement: 'div4',
      formHeader: ''
    },
    {
      question: 'Zip Code',
      textboxName: 'txtBillingZipCode',
      onElement: 'div4',
      formHeader: ''
    },
    {
      question: 'Street name and number',
      textboxName: 'txtAbuseStreetName',
      onElement: 'div6',
      formHeader: 'Where did the abuse happen?'
    },
    {
      question: 'City',
      textboxName: 'txtAbuseCity',
      onElement: 'div6',
      formHeader: ''
    },
    {
      question: 'State',
      textboxName: 'txtAbuseState',
      onElement: 'div6',
      formHeader: ''
    },
    {
      question: 'Zip Code',
      textboxName: 'txtAbuseZipCode',
      onElement: 'div6',
      formHeader: ''
    },
    {
      question: 'Location of Abuser',
      textboxName: 'txtAbuserLocation',
      onElement: 'div6',
      formHeader: 'Information about the abuse'
    },
    {
      question: 'What Date did you leave your abuser?',
      textboxName: 'txtDateLeftAbuser',
      onElement: 'div6',
      formHeader: ''
    },
    {
      question: 'What was relationship to abuser?',
      textboxName: 'txtRelationshipToAbuser',
      onElement: 'div6',
      formHeader: ''
    },
    {
      question: 'Restraining Order?',
      textboxName: 'txtRestrainingOrder',
      onElement: 'div6',
      formHeader: ''
    },
    {
      question: 'Hospital Stay?',
      textboxName: 'txtHospitalStay',
      onElement: 'div6',
      formHeader: ''
    },
    {
      question: 'Name of Hospital',
      textboxName: 'txtHospitalName',
      onElement: 'div6',
      formHeader: ''
    },
    {
      question: 'Current medical bills from this trauma?',
      textboxName: 'txtMedicalBills',
      onElement: 'div8',
      formHeader: 'Financial Impact'
    },
    {
      question: 'Are you on a payment plan?',
      textboxName: 'txtPaymentPlan',
      onElement: 'div8',
      formHeader: ''
    },
    {
      question: 'What kind of Health Insurance do you have?',
      textboxName: 'txtHealthInsuranceType',
      onElement: 'div8',
      formHeader: 'Health Insurance and Medicine'
    },
    {
      question: 'What kind of Health insurance do your kids have?',
      textboxName: 'txtChildsHealthInsuranceType',
      onElement: 'div8',
      formHeader: ''
    },
    {
      question: 'What were the damages',
      textboxName: 'txtDamages',
      onElement: 'div8',
      formHeader: ''
    },
    {
      question: 'Are you on any medicines?',
      textboxName: 'txtMedication',
      onElement: 'div8',
      formHeader: ''
    },
    {
      question: 'Name of Doctor',
      textboxName: 'txtDoctorsName',
      onElement: 'div8',
      formHeader: ''
    },
    {
      question: 'Phone Number',
      textboxName: 'txtDoctorsPhoneNumber',
      onElement: 'div8',
      formHeader: ''
    },
    {
      question: 'Email Address',
      textboxName: 'txtDoctorsEmailAddress',
      onElement: 'div8',
      formHeader: ''
    },
    {
      question: 'Are you employed?',
      textboxName: 'txtEmployed',
      onElement: 'div8',
      formHeader: 'Employment'
    },
    {
      question: 'Do you currently have children living at home with you?',
      textboxName: 'txtChildrenLivingAtHome',
      onElement: 'div10',
      formHeader: 'Children in your life'
    },
    {
      question: 'Did any children experience trauma?',
      textboxName: 'txtChildrenTrauma',
      onElement: 'div10',
      formHeader: ''
    },
    {
      question: 'Please explain the trauma experienced by the children',
      textboxName: 'txtChildrenTraumaExplanation',
      onElement: 'div10',
      formHeader: ''
    },
    {
      question: 'What is the name of the person responsible for your children right now and the address where you last left your children?',
      textboxName: 'txtChildrenCurrentLocationAndInfo',
      onElement: 'div10',
      formHeader: ''
    },
    {
      question: 'What are the names, relationships, and contact information of the two people you most trust right now to not share where you are or what you are doing?',
      textboxName: 'txtTrustedContacts',
      onElement: 'div10',
      formHeader: 'Let\'s talk about you'
    },
    {
      question: 'How many times have you left and gone back to your abuser?',
      textboxName: 'txtTimesReturnedToAbuser',
      onElement: 'div10',
      formHeader: ''
    },
    {
      question: 'Have you purposed it in your heart to not go back this time?',
      textboxName: 'txtDoesNotWantToReturn',
      onElement: 'div10',
      formHeader: ''
    },
    {
      question: 'What is your marital status?',
      textboxName: 'txtMaritalStatus',
      onElement: 'div12',
      formHeader: ''
    },
    {
      question: 'Do you have legal counsel?',
      textboxName: 'txtLegalCounsel',
      onElement: 'div12',
      formHeader: ''
    },
    {
      question: 'Will you be pursuing legal counsel?',
      textboxName: 'txtPursuingLegalCouncel',
      onElement: 'div12',
      formHeader: ''
    },
    {
      question: 'Do you smoke?',
      textboxName: 'txtSmoke',
      onElement: 'div12',
      formHeader: 'Personal Details'
    },
    {
      question: 'Do you have any chemical additions?',
      textboxName: 'txtAddictions',
      onElement: 'div12',
      formHeader: ''
    },
    {
      question: 'What languages do you speak?',
      textboxName: 'txtLanguages',
      onElement: 'div12',
      formHeader: ''
    },
    {
      question: 'Do you have any physical limitations?',
      textboxName: 'txtPhysicalLimitations',
      onElement: 'div12',
      formHeader: ''
    },
    {
      question: 'Do you have any food allergies?',
      textboxName: 'txtFoodAllergies',
      onElement: 'div12',
      formHeader: ''
    }
  ];
