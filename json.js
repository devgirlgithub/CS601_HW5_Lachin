/*
 * Upon starting of the application, hide the calculatorUI
 */
function hideCalculator() {
	calculator.style.display = "none";
}
/*
 * Show the calculatorUI
 */
function startCalculatorUI() {
	calculator.style.display = "block";
	
	/* Set the focus to the inputbox upon beginning */
	calculator.text.focus();
}
/*
 * Hide the calculatorUI. Launch the interactive calculator
 */
function startCalculator() {
	calculator.style.display = "none";
	
	var person = prompt("Please enter your name", "Isabel Lachin");
    if (person != null) {
        alert("Welcome " + person + " to my interactive calculator!");
        
        var result = addTwoNumbers();
        checkLogic(result);
        
        var addPrompt = prompt(person + ": Do you want to add again? (y/n)");
        if (addPrompt != null) { // check for cancel clicked
	        while (addPrompt === 'y')
	        {
	        	var result = addTwoNumbers();
	        	checkLogic(result);
	        	addPrompt = prompt(person + ": Do you want to add again? (y/n)");
	        	// do a minor validation check
	        	if (addPrompt !== 'y' && addPrompt !== 'n')
	        	{
	        		addPrompt = prompt("Invalid value. Do you want to add again? (y/n)");
	        	}
	        }
	    }
	    alert("Thanks for using my interactive calculator!");
    }
}
function addTwoNumbers() {
    var a = Number(prompt("Enter first number"));
	var b = Number(prompt("Enter second number"));
	var result = eval(a+b);
	alert("The sum of your two numbers is: " + result);
	return result;
}
function checkLogic(result) {
	if (result > '10')
    {	
    	alert("That is a big number.");
    } else {
    	alert("That is a small number.");
    }
}
   
/*
 * Called everytime an entry added to inputbox. We're only interested in return key code 13
 */
function detect_enterPress(event) {
    var key_board_keycode = event.which || event.keyCode;
   
    if(key_board_keycode == 13)
    { /* force the form not to be reloaded; If omitted, the input box goes blank right after the results is displayed */
    	event.preventDefault(); 
    	
        var input = calculator.text.value;
		calculator.text.value = eval(calculator.text.value);
    }
}

/*
 * Called when buttons are clicked (via mouse click)
 */
function calculate(keySelected) {		
    if (keySelected == '=')
    {	/* Evaluate the expression. Enter is clicked */
    	calculator.text.value = eval(calculator.text.value);
    } else if (keySelected == ' ') 
    { 	/* Clear (C) is selected on keyboard */
    	calculator.text.value = '';
    	calculator.text.focus(); // set focus back to the input box
    } else { 
    	/* Normal numbers are selected, keep appending */
    	calculator.text.value += keySelected;
    	//alert(calculator.text.value);
    }
}