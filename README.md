# Akanname
#### Akan Project is a naming system used in Ghana. 
It takes a user's birthday and calculates the day of the week they were born and depending on their gender outputs their Akan Name. 
##### By **Brenda Mwangi**
## Description
## Setup/Installation Requirements
* Ubuntu studio
* Visual Studio Code
* Bootstrap
*Javascript
Because this stuff is important.*HTML and CSS, Javascript* are an essential part** of your learning curve.
**You can install Nodejs to help you check if your JS script is running. To install Nodejs - Open Terminal, type in sudo apt install
nodejs.

****Our program should be able to check whether the date and month entered is valid. if either of them is invalid,  the user should be alerted and asked to enter a valid one. the day of the week from a specific birthday date given, should output to the user their Akan name depending on their gender, check whether the date and month entered is valid. if either of them is invalid, the user should be alerted and asked to enter a valid one.

Create a HTML file, JS file and CSS file. We will edit these files using Visual Studio code.


<!DOCTYPE html>
<html>

<head>
    <title>Akan Naming System</title>
    <link href="css/bootstrap1.css" rel="stylesheet" type="text/css">
    <link href="css/style.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Gochi+Hand&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Special+Elite&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Courier+Prime&display=swap" rel="stylesheet">
</head>

<body>
    <h1>The Akan</h1>
    <div class="descriptionbox">
        <div class="container">
            <div class="row">
                <div class="col-md-10">
                    <div class="jumbotron">
                        <h2>Wanna find the Akan in you?</h2>
                        <p>In Ghana, children are given their first name based on the day of the week they were born.
                            These are called Akan names. They are gender-based. The tradition has withstood the changing
                            times and
                            has been upheld by the people.You can find out your name by simply inputting your birth date
                            and gender.
                            Enjoy:)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

        <p id="ki"></p>
    <form action="">
        <div class="form">
            <div class="jumbotron">
                <div class="row">
                    <div class="col-md-8">
                        <div id="error"></div>
                            <p>Enter your birthday:</p>
                        <div class="form-group">
                            <label for="date"></label>
                            <input type="number" class="form-label" id="birth-day" placeholder="DD">
                        </div>
                        <div class="form-group">
                            <label for="month"></label>
                            <input type="number" class="form-label" id="birth-month" placeholder="MM">
                        </div>
                        <div class="form-group">
                            <label for="year"></label>
                            <input type="text" class="form-label" id="year" placeholder="YY">
                        </div>
                    </div>

                        <div action="">
                            <div class="row">
                                <div class="col-sm-10">
                                    <div class="Gender">
                                        <p>Please select your gender:</p>
                                        <input type="checkbox" id="female" name="gender" value="female">
                                        <label for="Female"> Female</label><br>
                                        <input type="checkbox" id="male" name="gender" value="male">
                                        <label for="Male"> Male</label><br>
                                    </div>
                                </div>
                                <div class="col-sm-10">
                                    <button type="submit" onclick="myFunction()" input="submit" >Submit</button>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </form>




    <script src="index.js"> </script>
</body>

</html>
So, what are we looking at here?
HTML, short for *HyperText Markup Language*, consists of these things called tags, which are words written between `<` and `>` characters, like `<sometag>`.  All tags (with just a few exceptions that we'll talk about later) have a matching closing tag, which has the same name as the opening tag, except that it contains `/` after the first `<`, like `</sometag>`. 

For example, `<html>` is one tag and the closing tag for it is `</html>`, same with `<head>` and `</head>` and `<body>` and `</body>`, and so on.  You get it.
The opening and closing tags together are an *element* (which also includes everything written in it).  For example, `<title>My Website</title>` is one element.  The text inside an element, in the title case, `My Website`, is called the *content* of an element.

#### Images
`<img>`. Let's just say you want to put an image on your website.  This is probably a good tag to know.  
Add the following to page1.html:

	<img src="http://i.imgur.com/B9q0A.gif" />
	
Open up the page in a browser.  WHOA.  Image!  So, the `<img>` tag is one of those special tags.  First of all, it doesn't have a closing tag.  You just stick in a `/` at the end of the one tag and you're done.  Secondly, it also has a `src` attribute (which is short for *source*), and in the value of that attribute you put the URL of the image (similar to `href` in the anchor tag).

One attribute that might be good for you to remember for `<img>` tags is the `alt` attribute.  If you changed the code above to:

	<img src="http://i.imgur.com/B9q0A.gif" alt="I could have danced all night" />

**For the HTML file use a form from bootstrap. Ensure your Bootstrap.css is linked to your HtML file through <link href="">
Create divs,rows,columns and input as desired.

The Style.css file will be used to edit our website and make it visually appealing.
I used the following CSS styles to edit my Portfolio:
h1 {
    font-family:'Special Elite', cursive; 
    font-size: 150px;
    text-align: center;
    color: black;
    margin: 20px;
}
h2 {
    font-family: 'Special Elite', cursive;
}
.descriptionbox {
    width: 100%;
    height: 100%;
    margin-left: auto;
    text-align: 100px;
}
.descriptionbox p{
    font-family: 'Courier Prime', monospace;
    font-size: 25px;
}

.descriptionbox h2{
    font-size: 40px;
    font-weight: bolder;
}

.form-group {
    float: left;
    float: block;
}
.row .Gender {
    float: center;
    margin : 30px;

}  
input {
    float: left;
    float: block;
}
body {
    background-image: url(../back-img/red.jpeg);
    color: white;
}
.jumbotron {
    background-color: black
}
.form {
    width: 90%;
    height: 60%;
    margin: 20px;
    text-align: 100px;
    font-family:'Courier Prime', monospace; 
    font-size: 15px;
}


**For my Js file, I wrote functions that will be able to return the day of the week and name based on the gender. I also wrote an if statement that will return an alert when day <=0 or day>31 and when month <=0 or month>12. 

Here is the JS file:
function myFunction() {
    const form = document.getElementById("form");
    const errrorElement = document.getElementById("error");
    var year = document.getElementById("year").value;
    var CC = parseInt(year.slice(0, 2));
    var YY = parseInt(year.slice(2, 4));
    var DD = document.getElementById("birth-day").value; // get the element with id = "birth-day"
    var MM = document.getElementById("birth-month").value; //get the element with id = "birth-month"

    
    var n = parseInt((((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7);
  
    var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    if (document.getElementById("female").value === "female") {
        alert("Your Akan name is " + femaleName[n] + " you were born on " + days[n]);
    }
    else if (document.getElementById("male").value === "male") {
        alert("Your Akan name is " + maleName[n] + " you were born on " + days[n]);
    }
    else {
        alert("Invalid")      
    }
        if (DD <=0 || DD >31){
            alert("Invalid Date");
    } 
        if (MM <=0 || MM >12){
            alert("Invalid Month");
    }

    
}

## And now, the end is near

Actually, now the end is here.

You've learned pretty much all that I can teach you.  Congratulations, really.  I'm not even going to joke around here.
You've accomplished something that will help you for years to come!

Show off your website to your friends, and be proud of what you've done!  

And with that, I'm signing off.

Thanks for reading, you beautiful specimen, you.



