window.onload = function(){
   var num = "";
    var numbers = document.getElementsByClassName("calculator-num-btn");
    for(var i = 0; i < numbers.length; i++){
           numbers[i].addEventListener('click',function(){
           num = num + this.innerText;
            document.getElementById("result-display").innerText = num;           
        })
    }

    var operators = document.getElementsByClassName("calculator-operator-btn");
    for(var i = 0; i < operators.length; i++){
           operators[i].addEventListener('click',function(){ 
            if(this.id == "btn-clear"){
                num = "";
                document.getElementById("result-display").innerText = num;
            }
            else if(this.id == "btn-backspace"){
                if(num){
                    num = num.substr(0,num.length-1);
                    document.getElementById("result-display").innerText = num;
                }    
            }
            else if(this.id == "btn-equal"){
                    if(num!=""){
                        var result = eval(num);
                        document.getElementById("result-display").innerText = result;
                    }
                    else{
                        document.getElementById("result-display").innerText = "Err";
                    }
                }
            else{
                num = num + this.id;
                document.getElementById("result-display").innerText = num;
            }   
            
        })
    }
}

