document.getElementById("chang").addEventListener('click' ,function show(){
document.getElementById("chang").style.display= "none";
document.getElementById("image").style.display= "block";

});
//===================================================================================================================================
  function isEmpty(name) {
    return name === "";
  }
  function WordCount(name) {
    return name.split(" ").length;
  }
  function isNameValid(name) {
    if (WordCount(name) === 2){
    return true;
  }
  if (WordCount(name) !==2) {
     return false;
  }
  }
  function validateName(name) {
    if (isEmpty(name)) {
        return "Name must not be empty";
    }
    if (!isNameValid(name)) {
        return "Name must contain first name and last name";
    }
    return "";
  }
//=============================================================================================  
  function isEmpty(Email) {
    return Email === "";
  }
  function WordCount(Email) {
    return Email.split(" ").length;
  }
  function isNameValid(Email) {
    if (WordCount(Email) === 1){
    return true;
  }
  if (WordCount(Email) !=1) {
     return false;
  }
  }
  function validateEmail(Email) {
    if (isEmpty(Email)) {
        return "Email must not be empty";
    }
    if (!isEmailValid(Email)) {
        return "Email wrong";
    }
    return "";
  }
  //=======================================================================================================================
  function isEmpty(password) {
    return password === "";
  }
  function WordCount(password) {
    return password.split(" ").length;
  }
  function ispasswordValid(password) {
    if (WordCount(password) === 1){
    return true;
  }
  if (WordCount(password) !=1) {
     return false;
  }
  }
  function validatepassword(password) {
    if (isEmpty(password)) {
        return "password must not be empty";
    }
    if (!ispasswordValid(password)) {
        return "password wrong";
    }
    return "";
  }

  function onButtonCLick() {
    const password = document.getElementById('password').value,
        passwordMessage = validatepassword(password);
    if (passwordMessage !== '') {
        document.getElementById('passerror')
        .innerHTML = passwordMessage;
    }else{
        alert(password)
    }
    const Email = document.getElementById('Email')
    .value,
        EmailMessage = validateEmail(Email);
    if (EmailMessage !== '') {
        document.getElementById('Emailerror')
        .innerHTML = EmailMessage;
    }else{
        alert(Email)
    }
    const name = document.getElementById('name').value,
        nameMessage = validateName(name);
    if (nameMessage !== '') {
        document.getElementById('nameError')
        .innerHTML = nameMessage;
    }else{
        alert(name)
    }
    validatepassword(password);
    validateName(name);
    validateEmail(Email);
    alert (name, Email, password);
  }
  //======================================================================================================================