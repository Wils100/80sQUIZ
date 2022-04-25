//80sQUIZJS.js

if(document.getElementById('summer').checked) {   
       var selectedValue = document.getElementById('summer').value;  
       alert("Selected Radio Button is: " + selectedValue);    
}  

document.querySelector('input[name="Bohemian"]:checked')  

function checkButton() {    
            if(document.getElementById('Bohemian').checked) {   
                document.getElementById("disp").innerHTML   
                    = document.getElementById("correct").value   
                    + " radio button is checked";   
            }    
			
			var score=0;
function check (name) {
   var methods = document.getElementsByName(name);
    for (var i=0; i<methods.length; i++) {
         if (methods[i].checked == true) {
             score +=1;
             alert(score);
            }
   }
}