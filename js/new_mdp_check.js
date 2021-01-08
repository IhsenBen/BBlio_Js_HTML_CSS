var $password = $("#password");
var $confirmPassword = $("#confirm_password");
//Uppercase and number check variables
var upperCase= new RegExp('[A-Z]');
var numbers = new RegExp('[0-9]');

$('.validation').hide();

//Password rules
function isPasswordValid() {	
	//Check length and then check that password has an uppercase
	return $password.val().length > 10 && 
	  	   $password.val().match(upperCase) &&
		   $password.val().match(numbers);
}

function arePasswordsMatching() {
  return $password.val() === $confirmPassword.val();
}

//Can submit
function canSubmit() {
  return isPasswordValid() && arePasswordsMatching();
}

//Check password is over 8 characters
function passwordEvent() {
  
  if(isPasswordValid()) {
    $password.next().hide();
  } else {
    $password.next().show();
  } 
}

//Check Passwords match
function confirmPasswordEvent() {
  
  if(arePasswordsMatching()) {
    $confirmPassword.next().hide();
  } else {
    $confirmPassword.next().show();
  } 
}
//Enable or disablethe submit button 
function enableSubmitEvent() {
  $('input[type=submit]').prop("disabled", !canSubmit());
}

//Run passwords length check
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

//Run passwords match check
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

//Run submit button function code
enableSubmitEvent();