//store replace data into a variable
var data = "%data%";

//store bio data in bio object
var bio = {
    "name": "Miaoyun Zhou",
    "role": "Web Developer",
    "contacts": {
        "email": "mary.zhou.coding@gmail.com",
        "github": "sunnymary",
        "githubLink": "https://github.com/sunnymary",
        "mobile": "817-713-6239",
        "location": "Fort Worth, TX"
    },
    "welcomeMessage": "Welcome to my homepage!",
    "biopic": "./images/biopic.jpg",
    "skills": ["Coding", "Web Development", "Graphic Design", "Planning"],
    //create display bio function
    "display": function() {
        //replace data in template from helper.js with bio data, in order to format bio data
        var formattedName = HTMLheaderName.replace(data, bio.name);
        var formattedRole = HTMLheaderRole.replace(data, bio.role);
        var formattedEmail = HTMLemail.replace(data, bio.contacts.email).replace(data, bio.contacts.email);
        var formattedGithub = HTMLgithub.replace(data, bio.contacts.githubLink).replace(data, bio.contacts.github);
        var formattedPhone = HTMLmobile.replace(data, bio.contacts.mobile);
        var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
        var formattedBiopic = HTMLbioPic.replace(data, bio.biopic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);

        //append formatted data in proper place
        $("#header").prepend(formattedName, formattedRole);
        $("#header").append(formattedBiopic, formattedWelcomeMsg);
        $("#topContacts, #footerContacts").append(formattedPhone, formattedEmail, formattedGithub, formattedLocation);

        //if there is any skills
        if (bio.skills.length > 0) {
            //append the skill section
            $("#header").append(HTMLskillsStart);
            //loop through the skills array to format skills data, then append.
            bio.skills.forEach(function(skill) {
                var formattedSkills = HTMLskills.replace(data, skill);
                $("#skills").append(formattedSkills);
            });
        }
    }
};

//store work data in work object
var work = {
    "jobs": [{
            "employer": "AECOM",
            "title": "Urban Planner",
            "location": "Beijing, China",
            "dates": "10/2013 - 01/2015",
            "description": "Collaborated to achieve multi-discipline design and planning projects; accomplished analytical diagram and master plan drawing using AutoCAD and Adobe Suite(Photoshop, Illustrator); guided final layout using InDesign."
        },
        {
            "employer": "Kirwan Institute",
            "title": "Research Assistant",
            "location": "Columbus, OH",
            "dates": "07/2012 - 07/2013",
            "description": "Collected and analyzed raw Early Childhood Education Data and School-Base Data for 44 states in United States; created opportunity mappings using ArcGIS; designed final products using Adobe Suite."
        },
        {
            "employer": "The Enrichment Association",
            "title": "Data Visualization Intern",
            "location": "Columbus, OH",
            "dates": "01/2012 - 05/2012",
            "description": "Created brand-new website design, logo design and T-shirt design; discovered, analyzed and illustrated data pattern in Pedal Instead project."
        }
    ],
    //create display work function
    "display": function() {
        //loop through jobs array, to format each job data and append it to html
        work.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);
            var formattedWorkEmployer = HTMLworkEmployer.replace(data, job.employer);
            var formattedWorkTitle = HTMLworkTitle.replace(data, job.title);
            var formattedWorkEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
            $(".work-entry:last").append(formattedWorkEmployerTitle);

            var formattedWorkDates = HTMLworkDates.replace(data, job.dates);
            var formattedWorkLocation = HTMLworkLocation.replace(data, job.location);
            var formattedWorkDescription = HTMLworkDescription.replace(data, job.description);
            $(".work-entry:last").append(formattedWorkDates, formattedWorkLocation, formattedWorkDescription);
        });
    }
};

//store project data in projects object
var projects = {
    "projects": [{
            "title": "Online Resume",
            "dates": "01/2016 - 02/2017",
            "description": "Course Project for Udacity Front End Web Developer Nanodegree. Build a online resume, using Javascript to build resume data and compile into a HTML Template.",
            "images": []
        },
        {
            "title": "Personal Portfolio",
            "dates": "12/2016 - 02/2017",
            "description": "Course Project for Udacity Front End Web Developer Nanodegree. Build a personal webpage to show different projects using Html, Css and Javascript. This project apply the concept of sematic HTML, responsive website design and grid-based webpage layout.",
            "images": ["./images/portfolio1.jpg", "./images/portfolio2.jpg", "./images/portfolio3.jpg"]
        },
        {
            "title": "Animal Trading Cards",
            "dates": "12/2016",
            "description": "Course Project for Udacity Front End Web Developer Nanodegree. Practice using CSS.",
            "images": []
        }
    ],
    //create display projects function
    "display": function() {
        //loop through projects array, to format each project data and append it to html
        for (i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace(data, projects.projects[i].title);
            var formattedProjectDates = HTMLprojectDates.replace(data, projects.projects[i].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace(data, projects.projects[i].description);
            $(".project-entry:last").append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription);

            if (projects.projects[i].images.length > 0) {
                projects.projects[i].images.forEach(function(img) {
                    var formattedProjectImage = HTMLprojectImage.replace(data, img);
                    $(".project-entry:last").append(formattedProjectImage);
                });
            }
        }
    }
};

//store education data in education object
var education = {
    "schools": [{
            "name": "The Ohio State University",
            "location": "Columbus, OH",
            "degree": "Masters",
            "majors": ["City and Regional Planning"],
            "url": "http://knowlton.osu.edu/",
            "dates": "09/2010 - 06/2012"
        },
        {
            "name": "Tianjin University",
            "location": "Tianjin, China",
            "degree": "Bachelor of Engineering",
            "majors": ["Urban Planning and Design"],
            "url": "http://arch.tju.edu.cn/english/",
            "dates": "09/2005 - 07/2010"
        }
    ],
    "onlineCourses": [{
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "10/2016 - present",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        },
        {
            "title": "The Web Developer Bootcamp",
            "school": "Udemy",
            "dates": "06/2016 - 09/2016",
            "url": "https://www.udemy.com/the-web-developer-bootcamp/"
        }
    ],
    //create display education function
    "display": function() {
        //loop through schools array, to format each school data and append it to html
        education.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace(data, school.name);
            var formattedSchoolDegree = HTMLschoolDegree.replace(data, school.degree);
            var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
            $(".education-entry:last").append(formattedSchoolNameDegree);

            var formattedSchoolDates = HTMLschoolDates.replace(data, school.dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace(data, school.location);
            var formattedSchoolMajor = HTMLschoolMajor.replace(data, school.majors);
            $(".education-entry:last").append(formattedSchoolDates, formattedSchoolLocation, formattedSchoolMajor);
        });

        //append online classes section to html
        $("#education").append(HTMLonlineClasses);

        //loop through onlineCourses array, to format each course data and append it to html
        education.onlineCourses.forEach(function(online) {
            $("#education").append(HTMLschoolStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace(data, online.title);
            var formattedOnlineSchool = HTMLonlineSchool.replace(data, online.school);
            var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
            $(".education-entry:last").append(formattedOnlineTitleSchool);

            var formattedOnlineDates = HTMLonlineDates.replace(data, online.dates);
            var formattedOnlineURL = HTMLonlineURL.replace(data, online.url).replace("#", online.url);
            $(".education-entry:last").append(formattedOnlineDates, formattedOnlineURL);
        });
    }
};

//create display map function.
var map = {
    "display": function() {
        //append googleMap to the mapDiv section
        $("#mapDiv").append(googleMap);
    }
};

//scripts to run the display functions.
bio.display();
work.display();
projects.display();
education.display();
map.display();