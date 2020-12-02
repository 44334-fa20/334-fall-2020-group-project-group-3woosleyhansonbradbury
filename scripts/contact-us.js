function ValidateForm(){
    //Gather input variables
    var name = document.forms["contactform"]["name"].value;
    var email = document.forms["contactform"]["email"].value;
    var subject = document.forms["contactform"]["subject"].value;
    var comments = document.forms["contactform"]["comments"].value;

    //validate user inputs
    if(name == "" || email == "" || subject == "" || comments == ""){
        alert("All fields must be filled out")
    }
    else{
        alert("Thanks for getting in touch with us. We will get back to you as soon as possible.")
    }
}