;

$('#submitInfo').on('click', function(e){
  var formValue = document.getElementsByClassName('fm-wrapper');
  e.preventDefault();
  console.log('I am logging' + formValue.length);
});


//Get Elements

// Initialize Firebase

// function writeUserData(phone, email, zip, family) {
//
//   var postData = {
//     phone: phone,
//     email: email,
//     zip: zip,
//     family: family
//   }
//
//   // Get a key for a new Post.
//   var newPostKey = firebase.database().ref().child('posts').push().key;
//
//   // Write the new post's data simultaneously in the posts list and the user's post list.
//   var updates = {};
//   updates['/submission/'] = postData;
//
//   return firebase.database().ref().update(updates);
// }

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


// Event Listener
$('#submitInfo').on('click', function(){

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
      console.log(firstName, lastName, dateOfBirth);
      if(firstName != '' && lastName != '' & dateOfBirth != ''){
        var person = new Person(firstName, lastName, dateOfBirth, smokes, gender);
        family.push(person);
        console.log("Family " + family);
      } else {
          $('.form-fail-alert').show();
          setTimeout(function(){
            $('.form-fail-alert').hide();
          }, 3500);
          return false;
      }
    });

    console.log(phoneNumber);
    // console.log(phoneNumber);
    // console.log(phoneNumber);
    // console.log(phoneNumber);
    writeUserData(phoneNumber, emailAddress, zipcode, family);
  $('#addPerson').hide();
  $('#modalBody').html('<h3>Thank you for submitting your information</h3>' + '<p>Some will be contacting you shortly with a quote</p>');
  $('#submitInfo').attr('disabled', 'disabled');



});
