var count = 1;
var newPerson = '<div class="fm-wrapper">\
          <hr><br>\
          <div class="pull-right"><button class="btn btn-danger remove-fm">Remove x</button></div><br/>\
          <div class="form-group">\
          <label for="firstName" class="col-sm-3 control-label">Firstname</label>\
          <br>\
          <div class="col-sm-9">\
            <input type="text" class="form-control first-name" id="firstName" placeholder="Firstname">\
          </div>\
        </div>\
        <div class="form-group">\
          <label for="lastName" class="col-sm-3 control-label">Lastname</label>\
          <div class="col-sm-9">\
            <input type="text" class="form-control last-name" id="lastName" placeholder="Lastname">\
          </div>\
        </div>\
        <div class="form-group">\
          <label for="lastName" class="col-sm-3 control-label">Date of Birth</label>\
          <div class="col-sm-9">\
            <input type="text" class="form-control d-o-b" id="dob" placeholder="mm/dd/yyyy">\
          </div>\
        </div>\
        <div class="form-group">\
          <label for="TobaccoUse" class="col-sm-3 control-label">Tobacco Use?</label>\
          <div class="col-sm-9">\
            <label class="radio-inline">\
              <input type="radio" name="smokeNo" id="inlineRadioYes" value="yes"> No\
            </label>\
            <label class="radio-inline">\
              <input type="radio" name="smokeYes" id="inlineRadioNo" value="No"> Yes\
            </label>\
          </div>\
        </div>\
        <div class="form-group">\
          <label for="Gender" class="col-sm-3 control-label">Gender</label>\
          <div class="col-sm-9">\
            <label class="radio-inline">\
              <input type="radio" name="genderMale" id="inlineRadioMale" value="Male"> Male\
            </label>\
            <label class="radio-inline">\
              <input type="radio" name="genderFemale" id="inlineRadioFemale" value="Female"> Female\
            </label>\
          </div>\
        </div>\
        </div>\
    </div>';


$(document).ready(function(){
  $('#addPerson').on('click', function(e){
    var _this = $(this);
    e.preventDefault();
    count ++;
    $('#modalBody').append(newPerson);
    //console.log(newPerson);
  });
  $('.mobile-nav-toggle').on('click', function(){
    $('.mobile-nav').toggle();
  });
});

$('body').on('click', '.remove-fm', function(e){
  e.preventDefault();
  var _this = $(this);
  _this.parent().parent().remove();
});
