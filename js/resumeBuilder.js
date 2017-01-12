var bio = {
    "name":"Miaoyun Zhou",
    "role":"Web Developer",
    "contacts":{
        "email":"zhoumy66@gmail.com",
        "github":"sunnymary",
        "mobile":"817-713-6239",
        "location":"Fort Worth, TX"
    },
    "welcomeMessage":"Welcome you to my homepage!",
    "biopic":"./images/fry.jpg",
    "skills":["Coding","Web Development","Graphic Design","Planning"],
    "display":function(){
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedPhone = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);

        $("#topContacts").append(formattedPhone);
        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formattedGithub);
        $("#topContacts").append(formattedLocation);

        $("#header").append(formattedBiopic);
        $("#header").append(formattedWelcomeMsg);

        if(bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            bio.skills.forEach(function(skill){
                var formattedSkills = HTMLskills.replace("%data%",skill);
                $("#skills").append(formattedSkills);
            });
        }
    }
};

var work = {
    "jobs":[
        {
            "employer":"AECOM",
            "title":"Urban Planner",
            "location":"Beijing, China",
            "dates":"10/2013 - 01/2015",
            "description":"Collaborated to achieve multi-discipline design and planning projects; accomplished analytical diagram and master plan drawing using AutoCAD and Adobe Suite(Photoshop, Illustrator); guided final layout using InDesign."
        },
        {
            "employer":"Kirwan Institute",
            "title":"Research Assistant",
            "location":"Columbus, OH",
            "dates":"07/2012 - 07/2013",
            "description":"Collected and analyzed raw Early Childhood Education Data and School-Base Data for 44 states in United States; created opportunity mappings using ArcGIS; designed final products using Adobe Suite."
        },
        {
            "employer":"The Enrichment Association",
            "title":"Data Visualization Intern",
            "location":"Columbus, OH",
            "dates":"01/2012 - 05/2012",
            "description":"Created brand-new website design, logo design and T-shirt design; discovered, analyzed and illustrated data pattern in Pedal Instead project."
        }
    ],
    "display":function(){
        work.jobs.forEach(function(job){
            $("#workExperience").append(HTMLworkStart);
            var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",job.employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%",job.title);
            var formattedWorkEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
            $(".work-entry:last").append(formattedWorkEmployerTitle);

            var formattedWorkDates = HTMLworkDates.replace("%data%",job.dates);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%",job.location);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%",job.description);
            $(".work-entry:last").append(formattedWorkDates);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedWorkDescription);
        });
    }
};

var projects = {
    "projects":[
        {
            "title":"Personal Portfolio",
            "dates":"12/2016 - 01/2017",
            "description":"Course Project for Udacity Front End Web Developer Nanodegree. Build a personal webpage to show different projects using Html, Css and Javascript. This project apply the concept of sematic HTML, responsive website design and grid-based webpage layout.",
            "image":[]
        },
        {
            "title":"Animal Trading Cards",
            "dates":"12/2016",
            "description":"Course Project for Udacity Front End Web Developer Nanodegree. Practice using CSS.",
            "image":[]
        }
    ],
    "display":function(){
        for(i=0;i<projects.projects.length;i++){
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);
            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);

            if(projects.projects[i].image.length > 0){
                projects.projects[i].image.forEach(function(img){
                    var formattedProjectImage = HTMLprojectImage.replace("%data%",img);
                    $(".project-entry:last").append(formattedProjectImage);
                });
            }
        }
    }
};



var education = {
    "schools":[
        {
            "name":"The Ohio State University",
            "location":"Columbus, OH",
            "degree":"Masters",
            "major":["City and Regional Planning"],
            "url":"http://knowlton.osu.edu/",
            "dates":"09/2010 - 06/2012"
        },
        {
            "name":"Tianjin University",
            "location":"Tianjin, China",
            "degree":"Bachelor of Engineering",
            "major":["Urban Planning and Design"],
            "url":"http://arch.tju.edu.cn/english/",
            "dates":"09/2005 - 07/2010"
        }
    ],
    "onlineCourses":[
        {
            "title":"Front-End Web Developer Nanodegree",
            "school":"Udacity",
            "dates":"10/2016 - present",
            "url":"https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        },
        {
            "title":"The Web Developer Bootcamp",
            "school":"Udemy",
            "dates":"06/2016 - 09/2016",
            "url":"https://www.udemy.com/the-web-developer-bootcamp/"
        }
    ],
    "display":function(){
        education.schools.forEach(function(school){
            $("#education").append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%",school.name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",school.degree);
            var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
            $(".education-entry:last").append(formattedSchoolNameDegree);

            var formattedSchoolDates = HTMLschoolDates.replace("%data%",school.dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",school.location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",school.major);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
        });

        $("#education").append(HTMLonlineClasses);

        education.onlineCourses.forEach(function(online){
            $("#education").append(HTMLschoolStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",online.title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",online.school);
            var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
            $(".education-entry:last").append(formattedOnlineTitleSchool);

            var formattedOnlineDates = HTMLonlineDates.replace("%data%",online.dates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%",online.url).replace("#",online.url);
            $(".education-entry:last").append(formattedOnlineDates);
            $(".education-entry:last").append(formattedOnlineURL);
        });
    }
};

var map = {
    "display":function(){
        $("#mapDiv").append(googleMap);
    }
}

bio.display();
work.display();
projects.display();
education.display();
map.display();

