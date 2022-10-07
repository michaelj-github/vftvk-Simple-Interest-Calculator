function compute()
{
    
    const principal = document.getElementById("principal").value;
    if (principal <= 0) {
        
        alert("Enter a positive number")
        document.getElementById("principal").focus();
        
    } else {
        const rate = document.getElementById("rate").value;
        const years = document.getElementById("years").value;
        const interest = principal * years * rate / 100
        const year = new Date().getFullYear()+parseInt(years);
        
        document.getElementById("result1").innerText="If you deposit ";
        document.getElementById("result2").innerHTML=`${parseFloat(principal)},`;
        document.getElementById("result3").innerText="at an interest rate of ";
        document.getElementById("result4").innerHTML=`${rate}%,`;
        document.getElementById("result5").innerText="you will receive an amount of ";
        document.getElementById("result6").innerHTML=`${interest},`;
        document.getElementById("result7").innerText="in the year ";
        document.getElementById("result8").innerHTML=`${year}.`;
     
    }
        
}

function updateRate() 
{
    let rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        