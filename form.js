
function validateForm() {
var x = document.forms["myform"]["name"].value;
if (x == "") {
alert("Name must be filled out");
return false;
}
var y=document.forms["myform"]["email"].value;
if(y== "") {
alert("Email must be filled out");
return false;
}
}
