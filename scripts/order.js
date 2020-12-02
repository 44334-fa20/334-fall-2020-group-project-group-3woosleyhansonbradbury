function ValidateForm(){
    //Gather input variables
    var fname = document.forms["contactform"]["fname"].value;
    var lname = document.forms["contactform"]["lname"].value;
    var email = document.forms["contactform"]["email"].value;
    var phone = document.forms["contactform"]["phone"].value;
    var eventType = document.forms["contactform"]["event-type"].value;
    var eventDate = document.forms["contactform"]["event-date"].value;
    var guestNum = document.forms["contactform"]["guest-num"].value;
    var eventLocation = document.forms["contactform"]["event-location"].value;
    var eventTime = document.forms["contactform"]["event-time"].value;
    var subject = document.forms["contactform"]["subject"].value;
    var comments = document.forms["contactform"]["comments"].value;

    //validate user inputs
    if(fname == "" || lname == "" || email == "" || phone == "" || eventType == "" || eventDate == "" || guestNum == "" || eventLocation == "" || eventTime == "" || subject == "" || comments == ""){
        alert("All fields must be filled out")
    }
    else{
        alert("Thank you for submitting an order. We will in touch soon to discuss details.")
    }
}