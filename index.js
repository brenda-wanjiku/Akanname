function weekday () {

  var year = document.getElementById("year").value;
  var CC = parseInt(year.slice(0, 2));
  var YY = parseInt(year.slice(2, 4));
  var DD = document.getElementById("birth-day").value; // get the element with id = "birth-day"
  var MM = document.getElementById("birth-month").value; //get the element with id = "birth-month"
  
    if (MM === 1 || MM === 2) {
      MM += 12;
    } else{ 
        MM = MM;
    }

    var n =  parseInt((((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7);
   alert (n);
    }