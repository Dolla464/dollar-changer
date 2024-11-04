var counter = 0;

function incNumber(){
    counter++;
    document.getElementById("demo").innerHTML=counter;
}

function decNumber(){
    counter--;
    document.getElementById("demo").innerHTML=counter;
}

function amountDollar(){
    var dollar = document.getElementById("dollar").value;
    var result = document.getElementById("result");

    if(isNaN(dollar)){
        result.innerHTML = "Enter Amount please";
        return false;
    } 
    else if(dollar<0) {
        result.innerHTML = "Enter Positive Number";
        return false;
    } 
    else if(dollar==0){
        result.innerHTML = "Enter Valid Amount of Dollar";
        return false;
    }
    else{
        result.innerHTML = dollar * 50;
        return false;
    }
    
}