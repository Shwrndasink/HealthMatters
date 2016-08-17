;

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

/* VARIABLES */
var family = [];
var smokes = false;
var gender = '';
var validForm = true;


// Event Listener
$('#submitInfo').on('click', function(){

  validForm = true;
  //var _this = $(this);
  var peopleList = $('.fm-wrapper');

  var emailAddress = $('#email').val();
  var zipcode = $('#zipcode').val();
  var phoneNumber = $('#phoneNumber').val();

  /* LOOP THROUGH EACH PERSON */
    peopleList.each(function(){
      var _this = $(this);
      var firstName = _this.find($('.first-name')).val();
      var lastName = _this.find($('.last-name')).val();
      var dateOfBirth = _this.find($('.d-o-b')).val();

      var smokeValYes = _this.find('input:radio[name=smokeYes]');
      if(smokeValYes.is(":checked")){
        smokes = true;
      }
      var genderMale = _this.find('input:radio[name=genderMale]');
      if(genderMale.is(":checked")){
        gender = 'Male';
      } else {
        gender = 'Female';
      }

      //var person = 'person' + count;
      if(firstName != '' && lastName != '' & dateOfBirth != ''){
        var person = new Person(firstName, lastName, dateOfBirth, smokes, gender);
        family.push(person);
      } else {
          $('.form-fail-alert').show();
          setTimeout(function(){
            $('.form-fail-alert').hide();
          }, 3500);
          validForm = false;
          return validForm;
      }

      //Check to see if form Valid then send to Firebase and display success message
      if(validForm == true){
        writeUserData(phoneNumber, emailAddress, zipcode, family);
        $('#addPerson').hide();
        $('#modalBody').html('<h3>Thank you for submitting your information</h3>' + '<p>Some will be contacting you shortly with a quote</p>');
          $('.mobile-form').html('<div class="col-xs-12"><h3>Thank you for submitting your information</h3>' + '<p>Some will be contacting you shortly with a quote</p></div>');
        $('#submitInfo').attr('disabled', 'disabled');
      }
    });






});
