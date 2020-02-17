function myFunction() {
    const form = document.getElementById("form");
    const errrorElement = document.getElementById("error");
    var year = document.getElementById("year").value;
    var CC = parseInt(year.slice(0, 2));
    var YY = parseInt(year.slice(2, 4));
    var DD = document.getElementById("birth-day").value; // get the element with id = "birth-day"
    var MM = document.getElementById("birth-month").value; //get the element with id = "birth-month"

    if (DD <=0 || DD >31){
        alert("Invalid Date");
} 
    if (MM <=0 || MM >12){
        alert("Invalid Month");
}
    var n = parseInt((((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7);
  
    var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
     
   if (document.getElementById("female").checked) {
      alert("Your Akan name is " + femaleName[n] + " you were born on " + days[n])
   }
     else if(document.getElementById("male").checked) {
     alert("Your Akan name is " + maleName[n] + " you were born on " + days[n])
     }
     else {
    alert("Invalid")      
    }
              

    
}