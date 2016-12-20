/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //$("#main").append("Li Xiaowei (Victor)")

/*
 var awesomeThoughts;
 awesomeThoughts = "I am Li Xiaowei and I am AWESOME!";
 console.log(awesomeThoughts);
 var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
 $("#main").append(funThoughts);
 */

 var name = "Li Xiaowei";
 var role = "System Engineer";
 var formattedName = HTMLheaderName.replace("%data%", name);
 var formattedRole = HTMLheaderRole.replace("%data%", role);
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);

 var skills = ["IBM i", "IBM SAN", "Data Science", "Big Data", "Artificial Intelligence"];
 //$("#main").append(skills.length);

 var bio = {
 	"name": name,
 	"role": role,
 	"age": new Date().getFullYear() - 1988,
 	"skills": skills,
 	"contact": {
 		"mobile": "(+65)9658 9382",
 		"email": "li_xiaowei@outlook.com"
 	}
 };

 //$("#main").append(bio.name);
 //$("#main").append(bio.skills);

 var work = {
 	"jobs": [
 		{
	 		"employer": "OCBC Bank",
	 		"title": "AVP",
	 		"dates": "Jun 2010 - Present",
	 		"description": "IBM i infrastructure system engineer"
	 	},
	 	{
	 		"employer": "StarHub Ltd.",
	 		"title": "IT Intern",
	 		"dates": "Jan 2009 - Jun 2009",
	 		"description": "Database administrator and automation engineer"
	 	}
 	]
 };

 var education = {
 	"schools": [
	 	{
		 	"name": "Nayang Technological University",
		 	"major": "Computer Engineering",
		 	"dates": "2006 - 2010",
		 	"degree": "Second Upper Honours",
		 	"location": "Singapore"
		 }
	 ],
	 "onlineCourses": [
		 {
		 	"title": "Data Science",
		 	"school": "Coursera",
		 	"dates": 2015,
		 	"url": "https://www.coursera.org/account/accomplishments/specialization/certificate/47MD8DAC4N35"
		 },
		 {
		 	"title": "Big Data",
		 	"school": "Coursera",
		 	"dates": 2016,
		 	"url": ""
		 },
		 {
		 	"title": "Artificial Intelligence",
		 	"school": "Udacity",
		 	"dates": 2017,
		 	"url": ""
		 }
	 ]
 };

 var projects = {
 	"projects": [
 		{
 			"title": "IBM i Migration to MGM",
 			"dates": "2012",
 			"description": "Migrated the core banking infrastructure to IBM Metro Global Mirror solution. " +
 				"The new architecture has Poduction, HA and DR sites with RTO of 30 minutes, RPO of 0 second " +
 				"across HA or about 5 seconds across DR.",
 			"images": ""
 		},
 		{
			"title": "Data Center Migration",
 			"dates": "2016 - 2017",
 			"description": "Migrated the core banking infrastructure to the new data center with an upsized " +
 				"server and storage which catered for the business growth in the next 5 years.",
 			"images": ""
 		}
 	]
 };



 //$("#main").append(work["position"]);
 //$("#main").append(education.name);
 //$("#main").append(education.schools.name);

 /*
 if(bio.skills.length > 0 ) {
 	$("#header").append(HTMLskillsStart);

 	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
 	$("#skills").append(formattedSkill);
 	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
 	$("#skills").append(formattedSkill);
 	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
 	$("#skills").append(formattedSkill);
 	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
 	$("#skills").append(formattedSkill);
 }
 */

 function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		//console.log(job);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + name[1];
}

$("#main").append(internationalizeButton);

// a function can also be an object
projects.display = function() {
	for(project in projects.projects) {
		//console.log("project " + project.title);
		$("#projects").append(HTMLprojectStart);
 
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", 
			projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[project].images.length > 0) {
			for(image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project]
					.images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();

function displayEducation() {
	for(school in education.schools) {
		//console.log(school);
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedName + formattedDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);
	}
	
	$("#education").append(HTMLonlineClasses);
	$("#education").append(HTMLschoolStart);

	for(onlineCourse in education.onlineCourses) {
		var formattedTitle = HTMLonlineTitle.replace("%data%", 
			education.onlineCourses[onlineCourse].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", 
			education.onlineCourses[onlineCourse].school);
		$(".education-entry:last").append(formattedTitle + formattedSchool);

		var formattedDates = HTMLonlineDates.replace("%data%", 
			education.onlineCourses[onlineCourse].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedURL = HTMLonlineURL.replace("%data%", 
			education.onlineCourses[onlineCourse].url);
		$(".education-entry:last").append(formattedURL);
	}
}

displayEducation();
$("#mapDiv").append(googleMap);