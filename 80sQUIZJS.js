
        function displayScore() {
            document.getElementById("total").innerHTML = "";
            var ele = document.getElementsByTagName('input');
              
            for(i = 0; i < ele.length; i++) {
                  
                if(ele[i].type="radio") {
                  
                    if(ele[i].checked)
                        document.getElementById("total").innerHTML
                                += ele[i].name + " Your Score: "
                                + ele[i].value + "<br>";
								
                }
            }
        }
 



