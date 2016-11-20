// Checks for responses
			function handleClick(){         
				var amountCorrect = 0; 
				var totalQuestions = 3;        
				for(var i = 1; i <= 45; i++) {
		 			 var radios = document.getElementsByName('group'+i);
		 			 for(var j = 0; j < radios.length; j++) {
		  			  var radio = radios[j];
		   				 if(radio.value == "correct" && radio.checked) {
		     		 amountCorrect++;
		   			 }
		
				  }
				}                   
		        console.log("Correct Responses: " + amountCorrect + " out of " + totalQuestions);
		        var a = parseInt(amountCorrect);
		        var b = parseInt(totalQuestions);
		        console.log("Incorrect Responses: " + (b-a) + " out of " + totalQuestions);
		      }