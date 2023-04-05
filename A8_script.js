// a function to check if ALL required text blank are filled, return false if not.
function isTextEmpty() {

    // initialize it with false.
    var isEmpty = false;
    
    // 'warningMessage' concatenates names all the empty text blanks.               
    var warningMessage = "Please fill in your personal information:  \n ";  
    
    // get the value of the text blank element "fName" in the form Survey
    var fName = document.Survey.fName.value;

    // check if the first Name box is empty or not              
    if (fName == "") {    

        // if the firstName text blank is empty, set up the flag to be true                     
        isEmpty = true;

        // concate the name of this missing box to the warning message.                
        warningMessage += "First Name, ";
    }

    // get the value of the text blank element "lName" in the form Survey
    var lName = document.Survey.lName.value;  

    // check if the last Name box is empty or not  
    if (lName.length == 0) { 

        // if the lastName text blank is empty, set up the flag to be true  
        isEmpty = true;

        // concate the name of this missing box to the warning message.
        warningMessage += "Last Name, ";
    } 

    // get the value of the text blank element "email" in the form Survey
    var email = document.Survey.email.value; 

    // check if the email box is empty or not 
    if (email.length == 0) {

        // if the email text blank is empty, set up the flag to be true 
        isEmpty = true;

        // concate the name of this missing box to the warning message.
        warningMessage += "Email.";
    }
     
    // any of the element is empty, alert pop out the warning message, where include the name of missing required box.
    if (isEmpty) { 
        //alert(warningMessage);
    }
    
    // returen the flag, either true or false
    return isEmpty;   

}


// a function to check if an option in the Required is chosen, return false if not.
function isSelected() { 

    // checked the radio button name r1 if it is being check
    var checkRadio1 = document.querySelector('input[name="r1"]:checked');

    // checked the radio button name r2 if it is being check
    var checkRadio2 = document.querySelector('input[name="r2"]:checked');

    // checked the radio button name r3 if it is being check
    var checkRadio3 = document.querySelector('input[name="r3"]:checked');

    // checked the checkbox name c1 if it is being check
    var checkCheckbox1 = document.querySelector('input[name="c1"]:checked');
    

    // if radio button r1 not selected
    if(checkRadio1 == null) {

        // print out a alert message
        alert("Please select have you ever received a dose of COVID-19 vaccine.")

        return false;

    }else{

        // get the value of the element radio r1 by id in the form Survey
        var CheckRadioY= document.getElementById("ry1").checked;
        
        
        
        // if the radio button has selected and the check box not 
        if(CheckRadioY == true && checkCheckbox1 == null){

            // print out a alert message
        //    alert("Please select the vaccine product you receive.")
            return false;
        };

    }
    
    // if radio button r2 not selected
    if(checkRadio2 == null) {

        // print out a alert message
        alert("Please select the feeling for today.")
        return false;
    }
    
    // if radio button r3 not selected
    if(checkRadio3 == null) {

        // print out a alert message
        alert("Please select have you close contact with someone diagnosed with COVID-19")
        return false;
    }


    // return true if all radio button is selected
    return true;
    
}


// 1d. If the user changed the answer later by selecting “No” to the question “Have you ever received a vaccine?”, the showed new following question should be hidden, and consequently it won’t be a required question.
function hideProduct(){

    // get the value of the radio button r1
    var CheckRadioY= document.getElementById("ry1");
    var CheckRadioN= document.getElementById("ry2");

    // get the value for the the checkbox section 
    var showProduct = document.getElementById("vaccineProduct");

    // checked the radio button No if it is being check
    if(CheckRadioN.checked == true ){

        // if has selected, hide the checkbox section 
        showProduct.style.display = "none";
      
    }else if(CheckRadioY.checked == true ){ 

        // if radio button Yes has selected, show the checkbox section 
        showProduct.style.display = "block";
    }

}


// To check all the required fields
// #2 and change the color of “required Indicator” to red, for All required fields at the same time, if they are still missing
// #3 and show warning messages inside the webpage, to remind the names of the required fields, if they are still missing.

function check () {
    // INIT
    var valid = true, error = "", field = "";


    // get the value of first name by using the getElementById 
    var field1 = document.getElementById("fName");
    var error1 = document.getElementById("e1");
    var sp1 = document.getElementById("s1");

    // check if the first Name box is empty               
    if (!field1.checkValidity()) { // if is empty

        // change the color of “required Indicator” to red
        sp1.classList.add("required-indicator");
        valid = false;
        // change the color of the textbox to red
        field1.classList.add("err");     
        // display the message of the firstName text blank is empty              
        error1.innerHTML = "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Please fill in your First Name\r\n";
    } else { // if not

        // set the color of “required Indicator” to black
        sp1.classList.add("required-indicator-black");
        // remove the color of the red for the textbox 
        field1.classList.remove("err");
        // display no message
        error1.innerHTML = "";
    }



    // get the value of last name by using the getElementById 
    var field2 = document.getElementById("lName");
    var error2 = document.getElementById("e2");
    var sp2 = document.getElementById("s2");

    // check the text blank if is empty 
    if (!field2.checkValidity()) { // if is empty

        // change the color of “required Indicator” to red
        sp2.classList.add("required-indicator");
        valid = false;  
        // change the color of the textbox to red
        field2.classList.add("err");   
        // display message              
        error2.innerHTML = "&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Please fill in your Last Name\r\n";

    } else { // if not
        // set the color of “required Indicator” to black
        sp2.classList.add("required-indicator-black");
        // remove the color of the red for the textbox
        field2.classList.remove("err");
        // display no message
        error2.innerHTML = "";
    }



    // get the value of email by using the getElementById 
    var field3 = document.getElementById("email");
    var error3 = document.getElementById("e3");
    var sp3 = document.getElementById("s3");
    
    // check the text blank if is empty 
    if (!field3.checkValidity()) { // if is empty

        // change the color of “required Indicator” to red
        sp3.classList.add("required-indicator");
        valid = false;
        // change the color of the textbox to red
        field3.classList.add("err");
        // display message 
        error3.innerHTML = "&emsp;&emsp;&emsp;&emsp;&emsp; Please fill in your Email\r\n";

    } else { // if not
        // to check the email format typed using regular expression, and show a warning message if the typed by user is not valid. 
        //three email format as valid:• email@example.com • email123@example.museum • em.ail23@subdomain.example.edu

        // regular expression for valid email format typed
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,13})+$/;
        
        // if the user input typed is not valid.
        if(!field3.value.match(mailformat)){
            
            // change the color of the textbox to red
            field3.classList.add("err");
            // change the color of “required Indicator” to red
            sp3.classList.add("required-indicator");
            
            var Mess = "&emsp;&emsp;&emsp;&emsp;&emsp; Please provide a valid email.\r\n";
            // display message to warning the user
            error3.innerHTML = Mess; 


        }else{
            
            // remove the color of the red of the textbox
            field3.classList.remove("err");
            // set the color of “required Indicator” to black
            sp3.classList.add("required-indicator-black");
            // else display no message
            error3.innerHTML = "";

        }    

    }



    // get the value of phone by using the getElementById 
    var field8 = document.getElementById("phone");
    var error8 = document.getElementById("e8");
    
    // check the text blank if is empty 
    if (!field8.checkValidity()) { // if is empty
        valid = false;
        // remove the color of the red of the textbox
        field8.classList.remove("err");
        // display no message 
        error8.innerHTML = "";

    } else { // if not

        // change the color of the textbox to red
        field8.classList.add("err");
        // display message
        error8.innerHTML = phonenumber(field8);

    }



    // get the value of radio button Yes/No vaccine by using the getElementById 
    var field4 = document.getElementById("ry1");
    var error4 = document.getElementById("e4");
    var sp4 = document.getElementById("s4");

    var error5 = document.getElementById("e5");

    // check if radio button is being selected  
    if (!field4.checkValidity()) {  // if not selected

        // change the color of “required Indicator” to red
        sp4.classList.add("required-indicator");
        valid = false;
        // display message 
        error4.innerHTML = "Please select have you ever received a dose of COVID-19 vaccine.\r\n";

    } else {  // if is selected

        // set the color of “required Indicator” to black
        sp4.classList.add("required-indicator-black");
        // display no message
        error4.innerHTML = "";
        
        // if the vaccine product selected
        if (isVaccineSelected()) { 

            // display no message
            error5.innerHTML = "";
            
        } else { // if the vaccine product not selected
            
            valid = false;
            // display message
            error5.innerHTML = "Please select the vaccine product you receive.\r\n";
        }

    }



    // get the value of radio button Yes/No feeling by using the getElementById
    var field6 = document.getElementById("ry3");
    var error6 = document.getElementById("e6");
    var sp6 = document.getElementById("s6");

    // check if radio button is being selected 
    if (!field6.checkValidity() ) {  // if not selected

        // change the color of “required Indicator” to red
        sp6.classList.add("required-indicator");
        valid = false;    
        // display message                 
        error6.innerHTML = "Please select the feeling for today.\r\n";

    } else {  // if selected

        // set the color of “required Indicator” to black
        sp6.classList.add("required-indicator-black");
        // display no message
        error6.innerHTML = "";
    }



    // get the value of radio button Yes/No/Notsure close contact by using the getElementById
    var field7 = document.getElementById("ry5");
    var error7 = document.getElementById("e7");
    var sp7 = document.getElementById("s7");

    // check if radio button is being selected 
    if (!field7.checkValidity() ) { // if not selected

        // change the color of “required Indicator” to red
        sp7.classList.add("required-indicator");
        valid = false;  
        // display message                   
        error7.innerHTML = "Please select have you close contact with someone diagnosed with COVID-19\r\n";

    } else { // if selected

        // set the color of “required Indicator” to black
        sp7.classList.add("required-indicator-black");
        // display no message
        error7.innerHTML = "";
    }




    // RESULT
    return valid;
}




// #5. a function to check and show a warning message, if the phone typed by user is not digit or not in correct format.
// The correct phone format is one of the following: • dddddddddd • ddd-ddd-dddd • (ddd)ddd-dddd

function phonenumber(inputtxt){

    // regular expression for valid phone format typed
    var phoneno = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;
    
    // if the user input typed is valid.
    if(inputtxt.value.match(phoneno)){
        
        // display no message
        return "";
    
    }else{
        // else display message to warning the user
        var Mess = "&emsp;&emsp;&emsp;&emsp;&emsp; Phone must be a number 0-9 and in one of the following formats:\r\n • dddddddddd \r\n • ddd-ddd-dddd \r\n • (ddd)ddd-dddd \r\n ";

        return Mess;                     
    }
}




// #1c  a function to check if an option in the required received a dose of COVID-19 vaccine is chosen
function isVaccineSelected() {

    // set a flag variable indicating whether a text blank is empty;
    // and initialize it with false.
    var isSelected = false;     

    // an array collected all input object of vaccine product
    var vaccine = document.Survey.c1

    // traverse all elements inside the array using the array property '.length' to get its number of elements.
    for (var i = 0; i < vaccine.length; i++) {
        // get one element in each loop
        currentOption = vaccine[i]
        // check if the value of attribute "chekced" is true, for this currently traversing element.
        if (currentOption.checked) {
            // if it is true, it means this radio button is selected
            isSelected = true;  
            // once checked one input element is selected, use break to end the loop immediately.                   
            break;
        }
    }  
    return isSelected;
}



// #6  a function to showed the “Name” in the “Confirmation page” concatenated by Capitalized first name and Capitalized last name.
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}



// a function to collect user's information, and present those in confirm message as a string, containing html tags.            
function getUserInfo() {

    // get user's filled values in form Survey
    var fName = document.Survey.fName.value;
    var lName = document.Survey.lName.value; 
    var email = document.Survey.email.value; 
    var phone = document.Survey.phone.value; 
    var confirmMsg = ""; 
    
//      capitalizeFirstLetter(fName);
    

    //concatenate the user's first name and last name and capitalize the first letter for first name and last name 
    confirmMsg += "<p> Name: " + capitalizeFirstLetter(fName) + " " +  capitalizeFirstLetter(lName) + " </p>"; 
    

    //concatenate the user's email
    confirmMsg += "<p> Email: " + email + "</p>";

    //concatenate the user's phone if it is filled
    if (phone.length >0) {
        confirmMsg += "<p> Phone: " + phone + " </p>"; 
    } else { // if it is not filled, then just simply close the already opened paragraph tag
        confirmMsg += ""; 
    }
   
    return confirmMsg;
}

// a function to collect user's Vaccine History, and present those in confirm message as a string, containing html tags.
function getVaccineHistory() { 

    // get the value of the checkbox element in the form 
    var vaccineProduct = document.Survey.c1;  

    // create a new array     
    var productChosen = new Array();          
    var confirmMsg = "";

    // traverse all elements inside the array. 
    // using array property '.length' to get its number of elements.
    for (var i = 0; i < vaccineProduct.length; i++) {

        // get one element in each loop
        var currentOption = vaccineProduct[i]
        
        // check if the value of attribute "chekced" is true, for this currently traversing element.
        if (currentOption.checked) {       

            // contain all the element that being choose together
            productChosen.push(currentOption.value);
        }

    }

    // if the value of attribute is chekced
    if (productChosen.length > 0) {

        // concatenate the choose user select
        confirmMsg = "<p> Received COVID-19 vaccine : " + productChosen.join(", ") + ".</p>"; 
    } else { // print out a message                 
        confirmMsg = "<p> Have NOT received COVID-19 vaccine before.  </p>";   
    }  

    return confirmMsg; 
}



// a function to collect user's feeling, and present those in confirm message as a string, containing html tags.
function getfeeling() { 

    // get the value of the radio button r2 
    var feeling = document.Survey.r2.value; 
         
    var confirmMsg = "";

    // if the value of the radio button r2 is yes
    if(feeling == "Yes") {

        // print 
        confirmMsg = "<p> Feeling sick today. </p>";                 
    }else{
        // otherwise print
        confirmMsg = "<p> Feeling fine today. </p>";
    };
    
    return confirmMsg; 

}


// function to collect user's Symptoms, and present those in confirm message as a string, containing html tags.
function getSymptoms() { 

    // get the value of the checkbox element in the form 
    var symptoms = document.Survey.c2; 

    // create a new array 
    var symptomsChosen = new Array();          
    var confirmMsg = "";


    // traverse all elements inside the array. 
    // using array property '.length' to get its number of elements.
    for (var i = 0; i < symptoms.length; i++) {

        // get one element in each loop
        currentOption = symptoms[i]

        // check if the value of attribute "chekced" is true, for this currently traversing element.
        if (currentOption.checked) { 

            // contain all the element that being choose together         
            symptomsChosen.push(currentOption.value);
        }
    }

    // if the value of attribute is chekced
    if (symptomsChosen.length > 0) {

        // concatenate the choose user select
        confirmMsg = "<p> Symptoms experienced in the past 24 hours: <br> - " + symptomsChosen.join(", <br> - ") + ".</p>"; 
    } else { 

        // print out a message                
        confirmMsg = "<p> NO symptoms experienced.  </p>";   
    } 
    
    return confirmMsg; 

}

// a function to collect user's close contact information, and present those in confirm message as a string, containing html tags.
function getcloseContact() { 
    
    // get the value of the radio button r3             
    var closeContact = document.Survey.r3.value; 
           
    var confirmMsg = "";

    // concatenate the choose user select
    confirmMsg = "<p> Having close contact with someone diagnosed with COVID-19 : " + closeContact + ".</p>";  

    return confirmMsg; 

}


// a function to check the state and print
function checkSurvey() {  

    // if the two required section is not empty and is selected, then compose the string of confirmation page 
    if ( !isTextEmpty() && isSelected() ) {     

        var confirmation = "";

        // concatenate the information
        confirmation += "<h1> Confirmation </h1>";
        confirmation += "<h2> Personal Information </h2>";
        // get the confirm message containing html tags from callling the function that collect user's information, and concatenate it to string of confirmation page          
        confirmation += getUserInfo();

        confirmation += "<h2> Vaccine History </h2>";
        confirmation += getVaccineHistory();

        confirmation += "<h2> Medical Condition </h2>"
        confirmation += getfeeling(); 

        confirmation += getSymptoms(); 

        confirmation += getcloseContact(); 

        // print the string of confirmation page           
        document.write(confirmation);

        // jump back to the original page
        document.write("<a href=''> Back </a>");

    }   
}


