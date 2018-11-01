//javaScript
function contact(){

var status = false;     
var emailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    
   if((document.Contact.email.value == "")||(document.Contact.fullname.value == "")||(document.Contact.comment.value == "")){
        alert("Complete the form");
    }
    else if (document.Contact.email.value.search(emailFormat) == -1) {
          alert("Please enter a valid email address.");
     }    
    else {
         alert("Form sent");
         status = true;
    }
     return status;
}