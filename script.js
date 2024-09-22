// JavaScript Object containing the profile data
const profileData = {
    name: "Ahmad Paracha",
    about: "Welcome to my professional profile. Here you will find information about my skills, projects, awards, certifications, and more.",
    profilePicture: "C:/Users/HP/OneDrive/Pictures/Screenshots/Screenshot 2024-09-15 231433.png",
    skills: {
        softSkills: ["Communication", "Teamwork", "Problem-solving"],
        hardSkills: ["HTML/CSS", "JavaScript", "Python"]
    },
    projects: [
        { name: "Paint App", description: "Done while doing OOP course in 2nd semester" },
        { name: "CHESS GAME", description: "Done while doing OOP course in 2nd semester" }
    ],
    awards: [
        { title: "HIGHEST ACHIEVER AWARD", description: "Got highest achiever award in matriculation" },
        { title: "OVERALL SECOND POSITION", description: "Got overall second position award in primary school" }
    ],
    certifications: [
        { title: "Best academics result in KIPS academy" }
    ],
    courses: [
        { title: "Business Management", description: "I did a course on business management online" }
    ],
    degrees: [
        { title: "Matriculation", institution: "THE PUNJAB SCHOOL" },
        { title: "Intermediate", institution: "GCU Lahore" }
    ],
    socialLinks: {
        instagram: "https://www.instagram.com/_ahmad_paracha?igsh=MW16YTVwYzBkZGR6ZA%3D%3D&utm_source=qr",
        snapchat: "https://snapchat.com/t/B0W04RNX"
    },
    videoContent: "https://www.youtube.com/embed/K87aFjB7Ff0?si=HGq8_iD6c6wQIUM0"
};

// Populate profile picture
document.getElementById("profile-picture").innerHTML = `<img src="${profileData.profilePicture}" alt="Profile Picture">`;

// Populate name and about
document.getElementById("name").textContent = profileData.name;
document.getElementById("about-text").textContent = profileData.about;

// Populate soft skills
profileData.skills.softSkills.forEach(skill => {
    document.getElementById("soft-skills").innerHTML += `<li>${skill}</li>`;
});

// Populate hard skills
profileData.skills.hardSkills.forEach(skill => {
    document.getElementById("hard-skills").innerHTML += `<li>${skill}</li>`;
});

// Populate projects
profileData.projects.forEach(project => {
    document.getElementById("projects-list").innerHTML += `<li><strong>${project.name}</strong> - ${project.description}</li>`;
});

// Populate awards
profileData.awards.forEach(award => {
    document.getElementById("awards-list").innerHTML += `<li><strong>${award.title}</strong> - ${award.description}</li>`;
});

// Populate certifications
profileData.certifications.forEach(certification => {
    document.getElementById("certifications-list").innerHTML += `<li><strong>${certification.title}</strong></li>`;
});

// Populate courses
profileData.courses.forEach(course => {
    document.getElementById("courses-list").innerHTML += `<li><strong>${course.title}</strong> - ${course.description}</li>`;
});

// Populate degrees
profileData.degrees.forEach(degree => {
    document.getElementById("degrees-list").innerHTML += `<li><strong>${degree.title}</strong> - ${degree.institution}</li>`;
});

// Populate social links
document.getElementById("instagram-link").href = profileData.socialLinks.instagram;
document.getElementById("snapchat-link").href = profileData.socialLinks.snapchat;

// Populate video content
document.getElementById("video-content").src = profileData.videoContent;
