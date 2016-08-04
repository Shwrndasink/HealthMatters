;

$('#submitInfo').on('click', function(e){
  var formValue = document.getElementsByClassName('fm-wrapper');
  e.preventDefault();
  console.log('I am logging' + formValue.length);
});


//Get Elements

// Initialize Firebase

function writeUserData(name) {
  console.log('I am setting');
  firebase.database().ref('emails/').set({

    username: name,
    email: null
  });
}

function Person(firstName, lastName, dob, tobaccoUse, gender){
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = dob;
  this.tobaccoUse = tobaccoUse;
  this.gender = gender;
};



// Event Listener
$('#submitInfo').on('click', function(){
  var peopleList = $('.fm-wrapper');
  var emailAddress = $('#email');
  var phoneNumber = $('#phone-number');
  var _this = $(this);
  console.log(peopleList);
  $.each(peopleList, function(){
    var family = [];
    var _this = $(this);
    var first = $('.first-name');
    var last = $('.last-name');
    var dob = $('.d-o-b');
    var smokes = false;
    var gender = '';
    var smokeValYes = $('input:radio[name=smokeYes]').is(":checked");
    if(smokeValYes){
      smokes = true;
    }
    var male = false;
    var genderMale = $('input:radio[name=genderMale]').is(":checked");
    if(genderMale){
      gender = 'Male';
    } else {
      gender = 'Female';
    }
    // if(first.val() == ''){
    //   first.addClass('danger');
    // }
    // if(first.val() == ''){
    //   first.addClass('danger');
    // }
    // if(first.val() == ''){
    //   first.addClass('danger');
    // }
    // if(first.val() == ''){
    //   first.addClass('danger');
    // }

    var firstName = _this.find(first).val();
    var lastName = _this.find(last).val();
    var dateOfBirth = _this.find(dob).val();
    var tobaccoUse = _this.find();
    var person = 'person' + count;
    if(emailAddress.val() !== '' && phoneNumber.val() != '' && first.val() != '' && last.val != '' & dob.val() != ''){
      var person = new Person(firstName, lastName, dateOfBirth, smokes, gender);
      family.push(person);
      console.log(family);
      $('#addPerson').hide();
      $('#modalBody').html('<h3>Thank you for submitting your information</h3>' + '<p>Some will be contacting you shortly with a quote</p>');
      $('#submitInfo').attr('disabled', 'disabled');
    } else {
        $('.form-fail-alert').show();
        setTimeout(function(){
          $('.form-fail-alert').hide();
        }, 3500);
    }
  });


  //writeUserData('Colby');



});
