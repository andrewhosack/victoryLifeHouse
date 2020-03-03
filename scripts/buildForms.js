function createForm(formName, screenToBuild) {
let buildFormHTML;

buildFormHTML = buildFormStartHeaders(formName);
/*buildFormHTML +=

'          <section>' +
'              <h2></h2>'; */
buildFormHTML += addTextBoxesToForm(screenToBuild);

buildFormHTML += buildFormEndHeaders();
/*buildFormHTML +=
  '          </section>';
  '          <section>' +
  '              <h2>Contact information</h2>' +
  '              <fieldset>' +
  '                <legend>Title</legend>' +
  '                <ul>' +
  '                    <li>' +
  '                      <label for="title_1">' +
  '                        <input type="radio" id="title_1" name="title" value="A">' +
  '                        Ace' +
  '                      </label>' +
  '                    </li>' +
  '                    <li>' +
  '                      <label for="title_2">' +
  '                        <input type="radio" id="title_2" name="title" value="K" >' +
  '                        King' +
  '                      </label>' +
  '                    </li>' +
  '                    <li>' +
  '                      <label for="title_3">' +
  '                        <input type="radio" id="title_3" name="title" value="Q">' +
  '                        Queen' +
  '                      </label>' +
  '                    </li>' +
  '                </ul>' +
  '              </fieldset>' +
  '              <p>' +
  '                <label for="name">' +
  '                  <span>Name: </span>' +
  '                  <strong><abbr title="required">*</abbr></strong>' +
  '                </label>' +
  '                <input type="text" id="name" name="username">' +
  '              </p>' +
  '              <p>' +
  '                <label for="mail">' +
  '                  <span>E-mail: </span>' +
  '                  <strong><abbr title="required">*</abbr></strong>' +
  '                </label>' +
  '                <input type="email" id="mail" name="usermail">' +
  '              </p>' +
  '              <p>' +
  '                <label for="pwd">' +
  '                  <span>Password: </span>' +
  '                  <strong><abbr title="required">*</abbr></strong>' +
  '                </label>' +
  '                <input type="password" id="pwd" name="password">' +
  '              </p>' +
  '          </section>' +
  '          <section>' +
  '              <h2>Payment information</h2>' +
  '              <p>' +
  '                <label for="card">' +
  '                  <span>Card type:</span>' +
  '                </label>' +
  '                <select id="card" name="usercard">' +
  '                  <option value="visa">Visa</option>' +
  '                  <option value="mc">Mastercard</option>' +
  '                  <option value="amex">American Express</option>' +
  '                </select>' +
  '              </p>' +
  '              <p>' +
  '                <label for="number">' +
  '                  <span>Card number:</span>' +
  '                  <strong><abbr title="required">*</abbr></strong>' +
  '                </label>' +
  '                  <input type="tel" id="number" name="cardnumber">' +
  '              </p>' +
  '              <p>' +
  '                <label for="date">' +
  '                  <span>Expiration date:</span>' +

  '                  <strong><abbr title="required">*</abbr></strong>' + */
  /*'                  <em>formatted as mm/yy</em>' + */
  /*'                </label>' +
  '                <input type="date" id="date" name="expiration">' +
  '              </p>' +
  '          </section>' +
  '          <section>' + */
  /*'              <p> <button type="submit">Validate the payment</button> </p>' + */
/*  '          </section>'; */



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

function buildFormStartSection() {

}

function buildFormEndSection() {

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
        if ( myDivs[key].isVisible == false) {
          buildString +=
          ' hidden';
        }
        buildString += '>' + myDivs[key].formHeader + '</h3>';
      }
buildString += '               <p class="formClass' + myDivs[key].questionGrouping + '"';
      if ( myDivs[key].isVisible == false) {

        buildString +=
        ' hidden ';
      }
      buildString += '>';
  buildString +=
    '                <label for="' + myDivs[key].textboxName + '">' +
    '                  <span>' + myDivs[key].question + ': </span>' +
  /*  '                  <strong><abbr title="required">*</abbr></strong>' + */
    '                </label>';

          if(myDivs[key].inputType === 'text' || myDivs[key].inputType === 'date' || myDivs[key].inputType === 'radio') {
            buildString +=
            '                <input type="' + myDivs[key].inputType + '" id="' + myDivs[key].textboxName + '" name="' + myDivs[key].textboxName + '"';

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
            buildString += ' onChange="visibilityControl(this.name,this.value);"';
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
