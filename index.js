function myFunction() {
    const form = document.getElementById("form");
    const errrorElement = document.getElementById("error");
    var year = document.getElementById("year").value;
    var CC = parseInt(year.slice(0, 2));
    var YY = parseInt(year.slice(2, 4));
    var DD = document.getElementById("birth-day").value; // get the element with id = "birth-day"
    var MM = document.getElementById("birth-month").value; //get the element with id = "birth-month"


    form.addEventListener("submit", (e)=> {
        let messages = []
        if (DD.value <=0 || DD.value > 31) {
            messages.push("Invalid date");
        }
        if (MM.value <= 0 || MM.value >12) {
            messages.push("Invalid month");
        }
        e.preventDefault()
        errrorElement.innerText = messages.join(', ');
    })

    var n = parseInt((((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7);

    var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

   if (document.getElementById("male").value === "Male") {
        alert("Your Akan name is " + maleName[n] + " was born on " + days[n]);
    }
    else if (document.getElementById("female").value === "Female") {
        alert("Your Akan name is " + femaleName[n] + " was born on " + days[n]); 
    }
    else {
        alert("Invalid data");
    }

    function check() {
        document.getElementById("female").checked = true;
    }
        
    function uncheck() {
        document.getElementById("female").checked = false;
    }   
} 
