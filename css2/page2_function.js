
/* Calculate BMI*/
/* Check whether user has record in the database or not 
	If YES, then display the previous record.
		Alert message: "You have record".
		--Use previous record, then display previous record.
		--Calculate again, then prompt the user to key in h & w again
	If NO, then use the user input to generate result  */
	
function calculateBMI(){
	var h = document.getElementById("height").value;
	var w = document.getElementById("weight").value;
	var result = (w/ ((h/100)*(h/100)));
	result = Math.round(result * 10)/10; /*round to 1 decimal places*/
	document.getElementById("bmi_result").innerHTML = result;
	return result;
}

/* Determine BMI categories*/
function validate(){
	var v_result = calculateBMI();
	if(v_result < 18.5){
		var str = "Underweight";
		var uw = str.fontcolor("red");
		document.getElementById("bmi_category").innerHTML = uw;
	}
	else if(v_result >= 18.5 && v_result <= 24.9){
		var str = "Normal Weight";
		var nw = str.fontcolor("green");
		document.getElementById("bmi_category").innerHTML = nw;		
	}
	else if(v_result > 24.9 && v_result <= 29.9){
		var str = "Overweight";
		var ow = str.fontcolor("red");
		document.getElementById("bmi_category").innerHTML = ow;
	}
	else if(v_result >= 30.0){
		var str = "Obesity"
		var obe = str.fontcolor("red");
		document.getElementById("bmi_category").innerHTML = obe;
	}

}
