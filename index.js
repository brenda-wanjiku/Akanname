function myFunction(){

    var year=document.getElementById("year").value;
    var CC=parseInt(year.slice(0,2));
    var YY=parseInt(year.slice(2,4));
    var DD = document.getElementById("birth-day").value; // get the element with id = "birth-day"

    var MM = document.getElementById("birth-month").value; //get the element with id = "birth-month"

    //var y = document.getElementById("birth-year").value; //get the element with id = "birth-year"
  
    //var n = parseInt((d + ((13 * (m + 1)) / 5) + y + (y / 4) - (y / 100) + (y / 400)) % 7);
    var n = parseInt(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7);
    alert (n);
}
 name = document.getElementById("birth-day")



  
    