function createForm(formName, screenToBuild) {
let buildFormHTML;

buildFormHTML = buildFormStartHeaders(formName);

buildFormHTML += addTextBoxesToForm(screenToBuild);

buildFormHTML += buildFormEndHeaders();



return buildFormHTML;
}

function buildFormStartHeaders(formName) {
let buildFormStartHeaders;

buildFormStartHeaders =
'<div id="form" class="form">' +
'  <form method="post">';
/*'          <h1>' + formName +'</h1>' +
'          <p>Required fields are followed by <strong><abbr title="required">*</abbr></strong>.</p>';
*/
return  buildFormStartHeaders;

}

function buildFormEndHeaders() {
  let buildFormEndHeaders;

  buildFormEndHeaders =
  '      </form>' +
  '</div>';

  return  buildFormEndHeaders;



}

function addSummaryDetailsToForm() {
let buildString = '';// = '<h3>Summary Information<h3>';

var myDivs = STORE;
for (var key in myDivs) {

  if(document.getElementById(myDivs[key].textboxName).value) {


    buildString +=

      '<div class="SummaryDisplay">' +
      '      <div class="SummaryLabels">          <label for="' + myDivs[key].textboxName + '">' +
      '                  <span>' + myDivs[key].question + ': </span>' +
      '                </label> </div>' +
      '     <div class="SummaryValues"> <input type="text" value="' + document.getElementById(myDivs[key].textboxName).value + '"></div>' +
        '</div>';
  }


}


  return buildString;
}

function addTextBoxesToForm(screenToBuild) {
let buildString = '' +
'          <section>' +
'              <h2></h2>';

var myDivs = STORE;
for (var key in myDivs) {
  //Only showing items that should be visible by default, will have to make visible the items we want to show later in the logic, based on a value from the array
  if(screenToBuild === myDivs[key].onElement) {

      if(myDivs[key].formHeader != '') {
        buildString += '<h3 class ="formClass' + myDivs[key].questionGrouping + '"';
        if ( myDivs[key].isVisible == false ) {
          buildString +=
          ' hidden ';
        }
        buildString += '>' + myDivs[key].formHeader + '</h3>';
      }
buildString += '               <p class="formClass' + myDivs[key].questionGrouping + '"';
      if ( myDivs[key].isVisible == false ) {

        buildString +=
        ' hidden ';
      }
      buildString += ' >';
  buildString +=
    '                <label for="' + myDivs[key].textboxName + '">' +
    '                  <span>' + myDivs[key].question + ': </span>' +
  /*  '                  <strong><abbr title="required">*</abbr></strong>' + */
    '                </label>';

          if(myDivs[key].inputType === 'text' || myDivs[key].inputType === 'date' || myDivs[key].inputType === 'radio') {
            buildString +=
            '                <input type="' + myDivs[key].inputType + '" id="' + myDivs[key].textboxName + '" name="' + myDivs[key].textboxName + '" onChange=dataValidation("' + myDivs[key].dataType + '","' + myDivs[key].textboxName + '");';

            if ( myDivs[key].isEnabled == false) {
              buildString +=
              ' disabled';
            }
            /*if ( myDivs[key].isVisible == false) {
              buildString +=
              ' hidden';
            }*/
            buildString += '>';
          }
          else if(myDivs[key].inputType === 'select') {
            buildString +=
            '                <select id="' + myDivs[key].textboxName + '" name="' + myDivs[key].textboxName + '"';

            //Only add visibilityControl if the select box selection should toggle an element on or off
            if(myDivs[key].responses) {
            buildString += " onChange=visibilityControl(this.name,this.value);dataValidation(" + "'" + myDivs[key].dataType + "'" + "," + "'" + myDivs[key].textboxName + "'" + ");";
            }


            if ( myDivs[key].isEnabled == false) {
              buildString +=
              ' disabled';
            }
            /*if ( myDivs[key].isVisible == false) {
              buildString +=
              ' hidden';
            }*/
            buildString += '>';

            if(myDivs[key].inputValues != '') {
              let createOptions = myDivs[key].inputValues.split(',');
              for (var i=0; i < createOptions.length; i++) {
                buildString +=
                '                  <option value="' + createOptions[i] + '">' + createOptions[i] + '</option>'
              }
            }
            buildString +=
            '                </select>'
          }

    buildString += '              </p>';
  }
  }
  buildString +=
    '          </section>'
  return buildString;
}
