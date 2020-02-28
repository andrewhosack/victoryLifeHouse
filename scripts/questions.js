/*
Input Types: input, date, select
inputValues: If select is the inputType, inputValues needs to have comma separated list of values

*/


const STORE = [
    {
      question: 'First Name',
      textboxName: 'txtFirstName',
      inputType: 'text',
      inputValues:'',
      onElement: 'div2',
      formHeader: ''
    },
    {
      question: 'Last Name',
      textboxName: 'txtLastName',
      inputType: 'text',
      inputValues:'',
      onElement: 'div2',
      formHeader: ''

    },
    {
      question: 'Social Security number',
      textboxName: 'txtSocialSecurityNumber',
      inputType: 'text',
      inputValues:'',
      onElement: 'div2',
      formHeader: ''
    },
    {
      question: 'Date of Birth',
      textboxName: 'txtDateOfBirth' ,
      inputType: 'date',
      inputValues:'',
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
      inputType: 'text',
      inputValues:'',
      onElement: 'div4',
      formHeader: 'Mailing Address information'
    },
    {
      question: 'City',
      textboxName: 'txtCity',
      inputType: 'text',
      inputValues:'',
      onElement: 'div4',
      formHeader: ''
    },
    {
      question: 'State',
      textboxName: 'txtState',
      inputType: 'select',
      inputValues:'Alabama, Alaska, American Samoa, Arizona, Arkansas, California, Colorado, Connecticut, Delaware, District of Columbia, Florida, Georgia, Guam, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana, Maine, Maryland, Massachusetts, Michigan, Minnesota, Minor Outlying Islands, Mississippi, Missouri, Montana, Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina, North Dakota, Northern Mariana Islands, Ohio, Oklahoma, Oregon, Pennsylvania, Puerto Rico, Rhode Island, South Carolina, South Dakota, Tennessee, Texas, U.S. Virgin Islands, Utah, Vermont, Virginia, Washington, West Virginia, Wisconsin, Wyoming',
      onElement: 'div4',
      formHeader: ''
    },
    {
      question: 'Zip Code',
      textboxName: 'txtZipCode',
      inputType: 'text',
      inputValues:'',
      onElement: 'div4',
      formHeader: ''
    },
    {
      question: 'Street name and number',
      textboxName: 'txtBillingStreetName',
      inputType: 'text',
      inputValues:'',
      onElement: 'div4',
      formHeader: 'Billing Address Information'
    },
    {
      question: 'City',
      textboxName: 'txtBillingCity',
      inputType: 'text',
      inputValues:'',
      onElement: 'div4',
      formHeader: ''
    },
    {
      question: 'State',
      textboxName: 'txtBillingState',
      inputType: 'select',
      inputValues:'Alabama, Alaska, American Samoa, Arizona, Arkansas, California, Colorado, Connecticut, Delaware, District of Columbia, Florida, Georgia, Guam, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana, Maine, Maryland, Massachusetts, Michigan, Minnesota, Minor Outlying Islands, Mississippi, Missouri, Montana, Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina, North Dakota, Northern Mariana Islands, Ohio, Oklahoma, Oregon, Pennsylvania, Puerto Rico, Rhode Island, South Carolina, South Dakota, Tennessee, Texas, U.S. Virgin Islands, Utah, Vermont, Virginia, Washington, West Virginia, Wisconsin, Wyoming',
      onElement: 'div4',
      formHeader: ''
    },
    {
      question: 'Zip Code',
      textboxName: 'txtBillingZipCode',
      inputType: 'text',
      inputValues:'',
      onElement: 'div4',
      formHeader: ''
    },
    {
      question: 'Street name and number',
      textboxName: 'txtAbuseStreetName',
      inputType: 'text',
      inputValues:'',
      onElement: 'div6',
      formHeader: 'Where did the abuse happen?'
    },
    {
      question: 'City',
      textboxName: 'txtAbuseCity',
      inputType: 'text',
      inputValues:'',
      onElement: 'div6',
      formHeader: ''
    },
    {
      question: 'State',
      textboxName: 'txtAbuseState',
      inputType: 'select',
      inputValues:'Alabama, Alaska, American Samoa, Arizona, Arkansas, California, Colorado, Connecticut, Delaware, District of Columbia, Florida, Georgia, Guam, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana, Maine, Maryland, Massachusetts, Michigan, Minnesota, Minor Outlying Islands, Mississippi, Missouri, Montana, Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina, North Dakota, Northern Mariana Islands, Ohio, Oklahoma, Oregon, Pennsylvania, Puerto Rico, Rhode Island, South Carolina, South Dakota, Tennessee, Texas, U.S. Virgin Islands, Utah, Vermont, Virginia, Washington, West Virginia, Wisconsin, Wyoming',
      onElement: 'div6',
      formHeader: ''
    },
    {
      question: 'Zip Code',
      textboxName: 'txtAbuseZipCode',
      inputType: 'text',
      inputValues:'',
      onElement: 'div6',
      formHeader: ''
    },
    {
      question: 'Location of Abuser',
      textboxName: 'txtAbuserLocation',
      inputType: 'text',
      inputValues:'',
      onElement: 'div6',
      formHeader: 'Information about the abuse'
    },
    {
      question: 'What Date did you leave your abuser?',
      textboxName: 'txtDateLeftAbuser',
      inputType: 'date',
      inputValues:'',
      onElement: 'div6',
      formHeader: ''
    },
    {
      question: 'What was relationship to abuser?',
      textboxName: 'txtRelationshipToAbuser',
      inputType: 'text',
      inputValues:'',
      onElement: 'div6',
      formHeader: ''
    },
    {
      question: 'Restraining Order?',
      textboxName: 'txtRestrainingOrder',
      inputType: 'text',
      inputValues:'',
      onElement: 'div6',
      formHeader: ''
    },
    {
      question: 'Hospital Stay?',
      textboxName: 'txtHospitalStay',
      inputType: 'text',
      inputValues:'',
      onElement: 'div6',
      formHeader: ''
    },
    {
      question: 'Name of Hospital',
      textboxName: 'txtHospitalName',
      inputType: 'text',
      inputValues:'',
      onElement: 'div6',
      formHeader: ''
    },
    {
      question: 'Current medical bills from this trauma?',
      textboxName: 'txtMedicalBills',
      inputType: 'text',
      inputValues:'',
      onElement: 'div8',
      formHeader: 'Financial Impact'
    },
    {
      question: 'Are you on a payment plan?',
      textboxName: 'txtPaymentPlan',
      inputType: 'text',
      inputValues:'',
      onElement: 'div8',
      formHeader: ''
    },
    {
      question: 'What kind of Health Insurance do you have?',
      textboxName: 'txtHealthInsuranceType',
      inputType: 'text',
      inputValues:'',
      onElement: 'div8',
      formHeader: 'Health Insurance and Medicine'
    },
    {
      question: 'What kind of Health insurance do your kids have?',
      textboxName: 'txtChildsHealthInsuranceType',
      inputType: 'text',
      inputValues:'',
      onElement: 'div8',
      formHeader: ''
    },
    {
      question: 'What were the damages',
      textboxName: 'txtDamages',
      inputType: 'text',
      inputValues:'',
      onElement: 'div8',
      formHeader: ''
    },
    {
      question: 'Are you on any medicines?',
      textboxName: 'txtMedication',
      inputType: 'text',
      inputValues:'',
      onElement: 'div8',
      formHeader: ''
    },
    {
      question: 'Name of Doctor',
      textboxName: 'txtDoctorsName',
      inputType: 'text',
      inputValues:'',
      onElement: 'div8',
      formHeader: ''
    },
    {
      question: 'Phone Number',
      textboxName: 'txtDoctorsPhoneNumber',
      inputType: 'text',
      inputValues:'',
      onElement: 'div8',
      formHeader: ''
    },
    {
      question: 'Email Address',
      textboxName: 'txtDoctorsEmailAddress',
      inputType: 'text',
      inputValues:'',
      onElement: 'div8',
      formHeader: ''
    },
    {
      question: 'Are you employed?',
      textboxName: 'txtEmployed',
      inputType: 'text',
      inputValues:'',
      onElement: 'div8',
      formHeader: 'Employment'
    },
    {
      question: 'Do you currently have children living at home with you?',
      textboxName: 'txtChildrenLivingAtHome',
      inputType: 'text',
      inputValues:'',
      onElement: 'div10',
      formHeader: 'Children in your life'
    },
    {
      question: 'Did any children experience trauma?',
      textboxName: 'txtChildrenTrauma',
      inputType: 'text',
      inputValues:'',
      onElement: 'div10',
      formHeader: ''
    },
    {
      question: 'Please explain the trauma experienced by the children',
      textboxName: 'txtChildrenTraumaExplanation',
      inputType: 'text',
      inputValues:'',
      onElement: 'div10',
      formHeader: ''
    },
    {
      question: 'What is the name of the person responsible for your children right now and the address where you last left your children?',
      textboxName: 'txtChildrenCurrentLocationAndInfo',
      inputType: 'text',
      inputValues:'',
      onElement: 'div10',
      formHeader: ''
    },
    {
      question: 'What are the names, relationships, and contact information of the two people you most trust right now to not share where you are or what you are doing?',
      textboxName: 'txtTrustedContacts',
      inputType: 'text',
      inputValues:'',
      onElement: 'div10',
      formHeader: 'Let\'s talk about you'
    },
    {
      question: 'How many times have you left and gone back to your abuser?',
      textboxName: 'txtTimesReturnedToAbuser',
      inputType: 'text',
      inputValues:'',
      onElement: 'div10',
      formHeader: ''
    },
    {
      question: 'Have you purposed it in your heart to not go back this time?',
      textboxName: 'txtDoesNotWantToReturn',
      inputType: 'text',
      inputValues:'',
      onElement: 'div10',
      formHeader: ''
    },
    {
      question: 'What is your marital status?',
      textboxName: 'txtMaritalStatus',
      inputType: 'text',
      inputValues:'',
      onElement: 'div12',
      formHeader: ''
    },
    {
      question: 'Do you have legal counsel?',
      textboxName: 'txtLegalCounsel',
      inputType: 'text',
      inputValues:'',
      onElement: 'div12',
      formHeader: ''
    },
    {
      question: 'Will you be pursuing legal counsel?',
      textboxName: 'txtPursuingLegalCouncel',
      inputType: 'text',
      inputValues:'',
      onElement: 'div12',
      formHeader: ''
    },
    {
      question: 'Do you smoke?',
      textboxName: 'txtSmoke',
      inputType: 'text',
      inputValues:'',
      onElement: 'div12',
      formHeader: 'Personal Details'
    },
    {
      question: 'Do you have any chemical additions?',
      textboxName: 'txtAddictions',
      inputType: 'text',
      inputValues:'',
      onElement: 'div12',
      formHeader: ''
    },
    {
      question: 'What languages do you speak?',
      textboxName: 'txtLanguages',
      inputType: 'text',
      inputValues:'',
      onElement: 'div12',
      formHeader: ''
    },
    {
      question: 'Do you have any physical limitations?',
      textboxName: 'txtPhysicalLimitations',
      inputType: 'text',
      inputValues:'',
      onElement: 'div12',
      formHeader: ''
    },
    {
      question: 'Do you have any food allergies?',
      textboxName: 'txtFoodAllergies',
      inputType: 'text',
      inputValues:'',
      onElement: 'div12',
      formHeader: ''
    }
  ];
