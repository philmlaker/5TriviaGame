// Timer

var seconds_left = 10;
var interval = setInterval(function() {
    document.getElementById('timer_div').innerHTML = --seconds_left;

    if (seconds_left <= 0)
    {
        document.getElementById('timer_div').innerHTML = 'Time is up!';

        clearInterval(interval);
        complete();
    }
}, 1000);




// Checks for responses

var amountCorrect = 0; 
var totalQuestions = 3; 
			
	function complete () {                  
		        console.log("Correct Responses: " + amountCorrect + " out of " + totalQuestions);
		        var a = parseInt(amountCorrect);
		        var b = parseInt(totalQuestions);
		        console.log("Incorrect Responses: " + (b-a) + " out of " + totalQuestions);
		    		}




			function handleClick(){                
				for(var i = 1; i <= 45; i++) {
		 			 var radios = document.getElementsByName('group'+i);
		 			 for(var j = 0; j < radios.length; j++) {
		  			  var radio = radios[j];
		   				 if(radio.value == "correct" && radio.checked) {
		     		 amountCorrect++;
		   			 }
		
				  }
				} 

		    		complete();
		      }