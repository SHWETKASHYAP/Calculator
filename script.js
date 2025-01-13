const display = document.getElementById('display');

/* we have to define three functions:- appendToDisplay() , calculate() and clearDisplay(); */

function appendToDisplay(input) {
    display.value += input ;   /*this function is used to append the input to the display*/
}


function clearDisplay() {
    display.value = "";   /*this functions sets the display to an empty string */
}

function calculate() {
    /* eval () function is used to evaluate the expression passed to this method and return result.*/

    // display.value = eval(display.value);

    /*incomplete expression inside display such as 5+ will cause an error hence we can use try catch block to handle this error */

    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";   // On encontaring any error , display will show "Error"
    }
}