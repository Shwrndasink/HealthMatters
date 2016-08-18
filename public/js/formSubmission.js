$('#submitInfo').on('click', function(e){
  var formValue = document.getElementsByClassName('fm-wrapper');
  e.preventDefault();
});

function writeUserData(phone, email, zip, family) {
  firebase.database().ref('submissions/').push({
    phone: phone,
    email: email,
    zip: zip,
    family: family
  });
}

function Person(firstName, lastName, dob, tobaccoUse, gender){
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = dob;
  this.tobaccoUse = tobaccoUse;
  this.gender = gender;
};

function showError(){
  $('.form-fail-alert').show();
  setTimeout(function(){
    $('.form-fail-alert').hide();
  }, 3500);
}

/* VARIABLES */
var family = [];
var validForm = true;
var count = 1;


// Event Listener
$('#submitInfo').on('click', function(){

  validForm = true;
  var peopleList = $('.fm-wrapper');

  var emailAddress = $('#email').val();
  var zipcode = $('#zipcode').val();
  var phoneNumber = $('#phoneNumber').val();

  /* LOOP THROUGH EACH PERSON */
    peopleList.each(function(){
      var smokes = false;
      var gender = 'Male';
      var _this = $(this);
      var firstName = _this.find($('.first-name')).val();
      var lastName = _this.find($('.last-name')).val();
      var dateOfBirth = _this.find($('.d-o-b')).val();

      var smokeVal = _this.find('input:radio[name=smokeYes]');
      if(smokeVal.is(":checked")){
        smokes = true;
      }
      var genderFind = _this.find('input:radio[name=genderFemale]');
      if(genderFind.is(":checked")){
        gender = 'Female';
      }

      //var person = 'person' + count;
      if(firstName != '' && lastName != '' && dateOfBirth != '' && gender != ''){
        var person = new Person(firstName, lastName, dateOfBirth, smokes, gender);
        var uniquePerson = firstName + count;
        family.push(person);
      } else {
          showError();
          validForm = false;
          return validForm;
      }
    });

    //Check to see if form Valid then send to Firebase and display success message
    if(validForm == true && phoneNumber != '' && emailAddress != '' && zipcode != ''){
      writeUserData(phoneNumber, emailAddress, zipcode, family);
      setTimeout(function(){
        $('#addPerson').hide();
        $('#modalBody').html('<h3>Thank you for submitting your information</h3>' + '<p>Some will be contacting you shortly with a quote</p>');
          $('.mobile-form').html('<div class="col-xs-12"><h3>Thank you for submitting your information</h3>' + '<p>Some will be contacting you shortly with a quote</p></div>');
        $('#submitInfo').attr('disabled', 'disabled');
      }, 10);

    }
    else {
      showError();
    }




});
