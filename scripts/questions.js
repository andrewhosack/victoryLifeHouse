/*
Input Types: input, date, select
inputValues: If select is the inputType, inputValues needs to have comma separated list of values

*/


const STORE = [
    {
      question: 'First Name',
      textboxName: 'txtFirstName',
      inputType: 'text',
      inputValues: '',
      onElement: 'div2',
      isVisible: true,
      isEnabled: true,
      questionGrouping:'1',
      formHeader: ''
    },
    {
      question: 'Last Name',
      textboxName: 'txtLastName',
      inputType: 'text',
      inputValues: '',
      onElement: 'div2',
      isVisible: true,
      isEnabled: true,
      questionGrouping:'1',
      formHeader: ''

    },
    {
      question: 'Social Security number',
      textboxName: 'txtSocialSecurityNumber',
      inputType: 'text',
      inputValues: '',
      onElement: 'div2',
      isVisible: true,
      isEnabled: true,
      questionGrouping:'1',
      formHeader: ''
    },
    {
      question: 'Date of Birth',
      textboxName: 'txtDateOfBirth' ,
      inputType: 'date',
      inputValues: '',
      onElement: 'div2',
      isVisible: true,
      isEnabled: true,
      questionGrouping:'1',
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
      inputValues: '',
      onElement: 'div4',
      isVisible: true,
      isEnabled: false,
      questionGrouping:'2',
      formHeader: 'Current Physical Address'
    },
    {
      question: 'City',
      textboxName: 'txtCity',
      inputType: 'text',
      inputValues: '',
      onElement: 'div4',
      isVisible: true,
      isEnabled: false,
      questionGrouping:'2',
      formHeader: ''
    },
    {
      question: 'State',
      textboxName: 'selState',
      inputType: 'select',
      inputValues: ',,Alabama, Alaska, American Samoa, Arizona, Arkansas, California, Colorado, Connecticut, Delaware, District of Columbia, Florida, Georgia, Guam, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana, Maine, Maryland, Massachusetts, Michigan, Minnesota, Minor Outlying Islands, Mississippi, Missouri, Montana, Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina, North Dakota, Northern Mariana Islands, Ohio, Oklahoma, Oregon, Pennsylvania, Puerto Rico, Rhode Island, South Carolina, South Dakota, Tennessee, Texas, U.S. Virgin Islands, Utah, Vermont, Virginia, Washington, West Virginia, Wisconsin, Wyoming',
      onElement: 'div4',
      isVisible: true,
      isEnabled: false,
      questionGrouping:'2',
      formHeader: ''
    },
    {
      question: 'Zip Code',
      textboxName: 'txtZipCode',
      inputType: 'text',
      inputValues: '',
      onElement: 'div4',
      isVisible: true,
      isEnabled: false,
      questionGrouping:'2',
      formHeader: ''
    },
    {
      question: 'Prior to right now, was this your most recent address?',
      textboxName: 'selCurrentAddress',
      inputType: 'select',
      inputValues: ',Yes,No',
      onElement: 'div4',
      isVisible: true,
      isEnabled: true,
      questionGrouping:'2',
      childGrouping: '3',
      responses: [{ Response: 'No', childgrouping: '3' }],
      formHeader: ''
    },
    {
      question: 'Street name and number',
      textboxName: 'txtNewStreetName',
      inputType: 'text',
      inputValues: '',
      onElement: 'div4',
      isVisible: false,
      isEnabled: true,
      questionGrouping:'3',
      formHeader: 'Most recent Physical Address before arriving to VictoryLife House'
    },
    {
      question: 'City',
      textboxName: 'txtNewCity',
      inputType: 'text',
      inputValues: '',
      onElement: 'div4',
      isVisible: false,
      isEnabled: true,
      questionGrouping:'3',
      formHeader: ''
    },
    {
      question: 'State',
      textboxName: 'selNewState',
      inputType: 'select',
      inputValues: ',Alabama, Alaska, American Samoa, Arizona, Arkansas, California, Colorado, Connecticut, Delaware, District of Columbia, Florida, Georgia, Guam, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana, Maine, Maryland, Massachusetts, Michigan, Minnesota, Minor Outlying Islands, Mississippi, Missouri, Montana, Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina, North Dakota, Northern Mariana Islands, Ohio, Oklahoma, Oregon, Pennsylvania, Puerto Rico, Rhode Island, South Carolina, South Dakota, Tennessee, Texas, U.S. Virgin Islands, Utah, Vermont, Virginia, Washington, West Virginia, Wisconsin, Wyoming',
      onElement: 'div4',
      isVisible: false,
      isEnabled: true,
      questionGrouping:'3',
      formHeader: ''
    },
    {
      question: 'Zip Code',
      textboxName: 'txtNewZipCode',
      inputType: 'text',
      inputValues: '',
      onElement: 'div4',
      isVisible: false,
      isEnabled: true,
      questionGrouping:'3',
      formHeader: ''
    },
    {
      question: 'Please share the relationship of whose address this is',
      textboxName: 'selRelationshipToNewAddress',
      inputType: 'select',
      inputValues: ',Self,Son,Daughter,Friend,Safe House,Other',
      onElement: 'div4',
      isVisible: false,
      isEnabled: true,
      questionGrouping:'3',
      formHeader: ''
    },
    {
      question: 'Select an address from the drop down',
      textboxName: 'selAbuseLocation',
      inputType: 'select',
      inputValues: ',Existing Address from on file,Other',
      onElement: 'div6',
      isVisible: true,
      isEnabled: true,
      questionGrouping:'4',
      formHeader: 'Where did the abuse happen?'
    },
    {
      question: 'What was the date you last left your abuser?',
      textboxName: 'txtDateLeftAbuser',
      inputType: 'date',
      inputValues: '',
      onElement: 'div6',
      isVisible: true,
      isEnabled: true,
      questionGrouping:'6',
      formHeader: 'Information about your abuser and the abuse'
    },
    {
      question: 'What was the last date you had communications with your abuser?',
      textboxName: 'txtLastCommunication',
      inputType: 'date',
      inputValues: '',
      onElement: 'div6',
      isVisible: true,
      isEnabled: true,
      questionGrouping:'6',
      formHeader: ''
    },
    {
      question: 'Please briefly share the final event that made you leave',
      textboxName: 'txtFinalEvent',
      inputType: 'text',
      inputValues: '',
      onElement: 'div6',
      isVisible: true,
      isEnabled: true,
      questionGrouping:'6',
      formHeader: ''
    },
    {
      question: 'What was relationship to abuser?',
      textboxName: 'txtRelationshipToAbuser',
      inputType: 'text',
      inputValues: '',
      onElement: 'div6',
      isVisible: true,
      isEnabled: true,
      questionGrouping:'6',
      formHeader: ''
    },
    {
      question: 'Was a restraining order filed for the reason why you are here?',
      textboxName: 'selCurrentRestrainingOrder',
      inputType: 'select',
      inputValues: ',Yes,No',
      onElement: 'div6',
      isVisible: true,
      isEnabled: true,
      questionGrouping:'6',
      childGrouping: '7',
      responses: [{ Response: 'No', childgrouping: '7' }],
      formHeader: ''
    },
    {
      question: 'Would you like a restraining order?',
      textboxName: 'selRequestedRestrainingOrder',
      inputType: 'select',
      inputValues: ',Yes, No',
      onElement: 'div6',
      isVisible: false,
      isEnabled: true,
      questionGrouping:'7',
      childGrouping: '8',
      formHeader: ''
    },
    {
      question: 'Did you require emergency services or a hospital stay due to the abuse?',
      textboxName: 'selRequiredEmergencyServices',
      inputType: 'select',
      inputValues: ',Yes,No',
      onElement: 'div6',
      isVisible: true,
      isEnabled: true,
      questionGrouping:'8',
      childGrouping: '9',
      responses: [{ Response: 'Yes', childgrouping: '9' }],
      formHeader: ''
    },
    {
      question: 'Name and Location of facility',
      textboxName: 'txtNameAndLocationFacility',
      inputType: 'text',
      inputValues: '',
      onElement: 'div6',
      isVisible: false,
      isEnabled: true,
      questionGrouping:'9',
      formHeader: ''
    },
    {
      question: 'What were your out of pocket expenses for medical treatment?',
      textboxName: 'txtOutOfPocketExpenses',
      inputType: 'text',
      inputValues: '',
      onElement: 'div8',
      isVisible: true,
      isEnabled: true,
      questionGrouping:'10',
      formHeader: 'Financial Impact'
    },
    {
      question: 'What is the approximate balance you currently owe for your medical bills?',
      textboxName: 'txtMoneyOwedForMedical',
      inputType: 'text',
      inputValues: '',
      onElement: 'div8',
      isVisible: true,
      isEnabled: true,
      questionGrouping:'10',
      formHeader: ''
    },
    {
      question: 'Do you require ongoing treatment including medication, mental or physical therapy, etc. due to the abuse?',
      textboxName: 'txtCostOngoingPrevTreatment',
      inputType: 'text',
      inputValues: '',
      onElement: 'div8',
      isVisible: true,
      isEnabled: true,
      questionGrouping:'10',
      formHeader: ''
    },
    {
      question: 'What is the name and address or phone number of your primary care physician?',
      textboxName: 'txtPrimaryCarePhysician',
      inputType: 'text',
      inputValues: '',
      onElement: 'div8',
      isVisible: true,
      isEnabled: true,
      questionGrouping:'14',
      formHeader: ''
    },
    {
      question: 'Phone Number',
      textboxName: 'txtDoctorsPhoneNumber',
      inputType: 'text',
      inputValues: '',
      onElement: 'div8',
      isVisible: true,
      isEnabled: true,
      questionGrouping:'14',
      formHeader: ''
    },
    {
      question: 'Are you employed?',
      textboxName: 'selEmployed',
      inputType: 'select',
      inputValues: ',Yes,No',
      onElement: 'div8',
      isVisible: true,
      isEnabled: true,
      questionGrouping:'14',
      childGrouping: '15',
      formHeader: 'Employment'
    },
    {
      question: 'Do you currently have children living at home with you?',
      textboxName: 'selChildrenLivingAtHome',
      inputType: 'select',
      inputValues: ',Yes,No',
      onElement: 'div10',
      isVisible: true,
      isEnabled: true,
      questionGrouping:'15',
      childGrouping: '16',
      formHeader: 'Children in your life'
    },
    {
      question: 'Did any children experience trauma?',
      textboxName: 'selChildrenTrauma',
      inputType: 'select',
      inputValues: ',Yes,No',
      onElement: 'div10',
      isVisible: true,
      isEnabled: true,
      questionGrouping:'16',
      childGrouping: '17',
      responses: [{ Response: 'Yes', childgrouping: '17' }],
      formHeader: ''
    },
    {
      question: 'Please explain the trauma experienced by the children',
      textboxName: 'txtChildrenTraumaExplanation',
      inputType: 'text',
      inputValues: '',
      onElement: 'div10',
      isVisible: false,
      isEnabled: true,
      questionGrouping:'17',
      formHeader: ''
    },
    {
      question: 'What is the name of the person responsible for your children right now and the address where you last left your children?',
      textboxName: 'txtChildrenCurrentLocationAndInfo',
      inputType: 'text',
      inputValues: '',
      onElement: 'div10',
      isVisible: true,
      isEnabled: true,
      questionGrouping:'18',
      formHeader: ''
    },
    {
      question: 'What are the names, relationships, and contact information of the two people you most trust right now to not share where you are or what you are doing?',
      textboxName: 'txtTrustedContacts',
      inputType: 'text',
      inputValues: '',
      onElement: 'div10',
      isVisible: true,
      isEnabled: true,
      questionGrouping:'18',
      formHeader: 'Let\'s talk about you'
    },
    {
      question: 'How many times have you left and gone back to your abuser?',
      textboxName: 'txtTimesReturnedToAbuser',
      inputType: 'text',
      inputValues: '',
      onElement: 'div10',
      isVisible: true,
      isEnabled: true,
      questionGrouping:'18',
      formHeader: ''
    },
    {
      question: 'Have you purposed it in your heart to not go back this time?',
      textboxName: 'selDoesNotWantToReturn',
      inputType: 'select',
      inputValues: ',Yes,No',
      onElement: 'div10',
      isVisible: true,
      isEnabled: true,
      questionGrouping:'18',
      formHeader: ''
    },
    {
      question: 'What is your marital status?',
      textboxName: 'selMaritalStatus',
      inputType: 'select',
      inputValues: ',Married,Widowed,Divorced or Separated,Single or Never Married',
      onElement: 'div12',
      isVisible: true,
      isEnabled: true,
      questionGrouping:'19',
      formHeader: 'Personal Details'
    },
    {
      question: 'Do you have legal counsel?',
      textboxName: 'selLegalCounsel',
      inputType: 'select',
      inputValues: ',Yes,No',
      onElement: 'div12',
      isVisible: true,
      isEnabled: true,
      questionGrouping:'19',
      childGrouping: '20',
      responses: [{ Response: 'No', childgrouping: '20' }],
      formHeader: ''
    },
    {
      question: 'Would you like assistance obtaining legal counsel?',
      textboxName: 'selPursuingLegalCouncel',
      inputType: 'select',
      inputValues: ',Yes,No',
      onElement: 'div12',
      isVisible: false,
      isEnabled: true,
      questionGrouping:'20',
      formHeader: ''
    },
    {
      question: 'Do you smoke or vape nicotine?',
      textboxName: 'selSmokeOrVape',
      inputType: 'select',
      inputValues: ',Yes,No',
      onElement: 'div12',
      isVisible: true,
      isEnabled: true,
      questionGrouping:'21',
      formHeader: ''
    },
    {
      question: 'Do you drink alcohol?',
      textboxName: 'selConsumeAlcohol',
      inputType: 'select',
      inputValues: ',Yes,No',
      onElement: 'div12',
      isVisible: true,
      isEnabled: true,
      questionGrouping:'21',
      formHeader: ''
    },
    {
      question: 'Do you have any chemical additions you would like to not have?',
      textboxName: 'selAddictions',
      inputType: 'select',
      inputValues: ',Yes,No',
      onElement: 'div12',
      isVisible: true,
      isEnabled: true,
      questionGrouping:'21',
      childGrouping: '22',
      responses: [{ Response: 'Yes', childgrouping: '22' }],
      formHeader: ''
    },
    {
      question: 'Which Addictions?',
      textboxName: 'txtCurrentAddictions',
      inputType: 'text',
      inputValues: '',
      onElement: 'div12',
      isVisible: false,
      isEnabled: true,
      questionGrouping:'22',
      formHeader: ''
    },
    {
      question: 'What languages do you speak?',
      textboxName: 'txtLanguages',
      inputType: 'text',
      inputValues: '',
      onElement: 'div12',
      isVisible: true,
      isEnabled: true,
      questionGrouping:'23',
      formHeader: ''
    },
    {
      question: 'Do you have any physical limitations?',
      textboxName: 'selPhysicalLimitations',
      inputType: 'select',
      inputValues: ',Yes,No',
      onElement: 'div12',
      isVisible: true,
      isEnabled: true,
      questionGrouping:'24',
      formHeader: ''
    },
    {
      question: 'Do you have any food allergies?',
      textboxName: 'selFoodAllergies',
      inputType: 'select',
      inputValues: ',Yes,No',
      onElement: 'div12',
      isVisible: true,
      isEnabled: true,
      questionGrouping:'25',
      formHeader: ''
    }
  ];
