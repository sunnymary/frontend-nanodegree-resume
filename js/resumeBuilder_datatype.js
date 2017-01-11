// $("#main").append("Miaoyun Zhou");


// var awesomeThought = "I am Miaoyun and I am AWESOME!";
// var funThought = awesomeThought.replace("AWESOME","FUN");

// console.log(awesomeThought);
// console.log(funThought);

// $("#main").append(funThought);

// var name = "Miaoyun Zhou";
// var role = "Web Developer";


var skills = ["Coding","Web Development","Graphic Design","Planning"];

var bio = {
    "name":"Miaoyun Zhou",
    "role":"Web Developer",
    "contact":{
        "email":"zhoumy66@gmail.com",
        "github":"https://github.com/sunnymary",
        "phone":"817-713-6239",
        "location":"Fort Worth, TX"
    },
    "skills":skills
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
var formattedPhone = HTMLmobile.replace("%data%", bio.contact.phone);
var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);


$("#header").prepend(formattedLocation);
$("#header").prepend(formattedPhone);
$("#header").prepend(formattedGithub);
$("#header").prepend(formattedEmail);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedSkills);


var work = {};
work.position = "Urban Designer";
work.employer = "AECOM";
work.dates = "10/2013 - 01/2015";
work.location ="Beijing";

// var education = {};
// education["name"] = "The Ohio State University";
// education["degree"] = "Master's";
// education["major"] = "City and Regional Planning";
// education["dates"] = "09/2010 - 06/2012";

// $("#main").append(work["position"]);
// $("#main").append(education.name);

var education = [
    {
        "school":"The Ohio State University",
        "city":"Columbus, OH",
        "degree":"Masters",
        "major":"City and Regional Planning",
        "years":"2010 - 2012"
    },
    {
        "school":"Tianjin University",
        "city":"Tianjin, China",
        "degree":"Bachelors",
        "major":"Urban Planning and Design",
        "years":"2005 - 2010"
    }
]