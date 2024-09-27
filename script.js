const profileData = {
    name: "Ahmad  Paracha",
    about: "I'm currently pursuing a degree in Computer Science at ITU University, with a passion for technology, software development, and solving real-world problems through code. My academic journey has equipped me with a strong foundation in programming, data structures, algorithms, and software engineering principles. ",
    profilePicture: "Profile_Picture.png",
    rank : "Web Developer",
    skills: {
        softSkills: ["<strong>Communication:</strong>   I have developed strong communication skills, enabling me to convey complex technical ideas in a clear and understandable way, both verbally and in writing. This allows me to collaborate effectively with diverse teams and stakeholders", "<strong>Teamwork:</strong> I thrive in collaborative environments and enjoy working with others to achieve common goals. Whether in group projects or professional settings, I’m always ready to contribute and support my team members.", "<strong>Problem-solving</strong>: I excel at analyzing challenges and breaking them down into manageable parts. My critical thinking skills help me approach problems from different angles to find efficient, creative solutions."],
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
        { title: "Matriculation", institution: "THE PUNJAB SCHOOL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>BATCH </strong> 2018-2020" },
        { title: "Intermediate", institution: "GCU Lahore &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>BATCH </strong> 2020-2022" }
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
document.getElementById("rank").textContent = profileData.rank;
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
document.querySelector(".menu-toggle").addEventListener("click", function () {
    document.querySelector("nav").classList.toggle("menu-active");
});



// Define translations for different languages
const translations = {
    english: {
        name: "Ahmad Paracha",
        rank: "Web Developer",
        about: "I'm currently pursuing a degree in Computer Science at ITU University, with a passion for technology, software development, and solving real-world problems through code. My academic journey has equipped me with a strong foundation in programming, data structures, algorithms, and software engineering principles.",
        skills: {
            softSkills: [
                "<strong>Communication:</strong> Strong communication skills, enabling me to convey complex technical ideas clearly.",
                "<strong>Teamwork:</strong> Thrive in collaborative environments.",
                "<strong>Problem-solving:</strong> Analyze challenges and find efficient solutions."
            ],
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
        certifications: [{ title: "Best academics result in KIPS academy" }],
        courses: [{ title: "Business Management", description: "I did a course on business management online" }],
        degrees: [
            { title: "Matriculation", institution: "THE PUNJAB SCHOOL, BATCH 2018-2020" },
            { title: "Intermediate", institution: "GCU Lahore, BATCH 2020-2022" }
        ],
        contact: "Find me on social media: "
    },
    urdu: {
        name: "احمد پراچہ",
        rank: "ویب ڈویلپر",
        about: "میں آئی ٹی یو یونیورسٹی میں کمپیوٹر سائنس کی ڈگری حاصل کر رہا ہوں، ٹیکنالوجی، سافٹ ویئر ڈیولپمنٹ اور کوڈ کے ذریعے حقیقی دنیا کے مسائل حل کرنے کا شوقین ہوں۔",
        skills: {
            softSkills: [
                "<strong>رابطہ:</strong> پیچیدہ تکنیکی خیالات کو واضح طور پر پہنچانے کی صلاحیت۔",
                "<strong>ٹیم ورک:</strong> اشتراک میں کامیابی حاصل کرنا۔",
                "<strong>مسئلہ حل کرنا:</strong> چیلنجز کا تجزیہ اور مؤثر حل تلاش کرنا۔"
            ],
            hardSkills: ["HTML/CSS", "جاوا اسکرپٹ", "پائتھون"]
        },
        projects: [
            { name: "پینٹ ایپ", description: "او او پی کورس کے دوران تیار کیا گیا" },
            { name: "شطرنج کا کھیل", description: "او او پی کورس کے دوران تیار کیا گیا" }
        ],
        awards: [
            { title: "سب سے زیادہ کامیابی کا ایوارڈ", description: "میٹرک میں سب سے زیادہ کامیابی کا ایوارڈ حاصل کیا" },
            { title: "دوسری پوزیشن", description: "پرائمری اسکول میں مجموعی دوسری پوزیشن کا ایوارڈ حاصل کیا" }
        ],
        certifications: [{ title: "KIPS اکیڈمی میں بہترین تعلیمی نتائج" }],
        courses: [{ title: "کاروباری انتظام", description: "میں نے آن لائن کاروباری انتظام کا کورس کیا" }],
        degrees: [
            { title: "میٹرک", institution: "THE PUNJAB SCHOOL، بیچ 2018-2020" },
            { title: "انٹرمیڈیٹ", institution: "جی سی یو لاہور، بیچ 2020-2022" }
        ],
        contact: "مجھے سوشل میڈیا پر تلاش کریں:"
    },
    french: {
        name: "Ahmad Paracha",
        rank: "Développeur Web",
        about: "Je poursuis actuellement un diplôme en informatique à l'Université ITU, avec une passion pour la technologie, le développement de logiciels et la résolution de problèmes concrets grâce au code.",
        skills: {
            softSkills: [
                "<strong>Communication:</strong> Compétences en communication pour expliquer des idées techniques complexes.",
                "<strong>Travail d'équipe:</strong> Travailler efficacement en équipe.",
                "<strong>Résolution de problèmes:</strong> Analyser les défis et trouver des solutions efficaces."
            ],
            hardSkills: ["HTML/CSS", "JavaScript", "Python"]
        },
        projects: [
            { name: "Application de peinture", description: "Réalisée pendant le cours OOP en deuxième semestre" },
            { name: "JEU D'ÉCHECS", description: "Réalisée pendant le cours OOP en deuxième semestre" }
        ],
        awards: [
            { title: "PRIX DE MEILLEUR RÉSULTAT", description: "Prix du meilleur résultat au collège" },
            { title: "DEUXIÈME POSITION GLOBALE", description: "Deuxième position globale à l'école primaire" }
        ],
        certifications: [{ title: "Meilleur résultat académique à l'académie KIPS" }],
        courses: [{ title: "Gestion d'entreprise", description: "J'ai suivi un cours en ligne de gestion d'entreprise" }],
        degrees: [
            { title: "Matriculation", institution: "THE PUNJAB SCHOOL, PROMOTION 2018-2020" },
            { title: "Intermédiaire", institution: "GCU Lahore, PROMOTION 2020-2022" }
        ],
        contact: "Retrouvez-moi sur les réseaux sociaux :"
    }
};

// Function to update profile based on language selection
function updateLanguage(language) {
    const profileData = translations[language];

    // Update name and rank
    document.getElementById("name").textContent = profileData.name;
    document.getElementById("rank").textContent = profileData.rank;
    document.getElementById("about-text").textContent = profileData.about;

    // Update soft skills
    document.getElementById("soft-skills").innerHTML = "";
    profileData.skills.softSkills.forEach(skill => {
        document.getElementById("soft-skills").innerHTML += `<li>${skill}</li>`;
    });

    // Update hard skills
    document.getElementById("hard-skills").innerHTML = "";
    profileData.skills.hardSkills.forEach(skill => {
        document.getElementById("hard-skills").innerHTML += `<li>${skill}</li>`;
    });

    // Update projects
    document.getElementById("projects-list").innerHTML = "";
    profileData.projects.forEach(project => {
        document.getElementById("projects-list").innerHTML += `<li><strong>${project.name}</strong> - ${project.description}</li>`;
    });

    // Update awards
    document.getElementById("awards-list").innerHTML = "";
    profileData.awards.forEach(award => {
        document.getElementById("awards-list").innerHTML += `<li><strong>${award.title}</strong> - ${award.description}</li>`;
    });

    // Update certifications
    document.getElementById("certifications-list").innerHTML = "";
    profileData.certifications.forEach(certification => {
        document.getElementById("certifications-list").innerHTML += `<li><strong>${certification.title}</strong></li>`;
    });

    // Update courses
    document.getElementById("courses-list").innerHTML = "";
    profileData.courses.forEach(course => {
        document.getElementById("courses-list").innerHTML += `<li><strong>${course.title}</strong> - ${course.description}</li>`;
    });

    // Update degrees
    document.getElementById("degrees-list").innerHTML = "";
    profileData.degrees.forEach(degree => {
        document.getElementById("degrees-list").innerHTML += `<li><strong>${degree.title}</strong> - ${degree.institution}</li>`;
    });

    // Update contact
    document.getElementById("contact").innerHTML = profileData.contact;
}

// Add event listeners to buttons
document.getElementById("btn-english").addEventListener("click", function () {
    updateLanguage("english");
});

document.getElementById("btn-urdu").addEventListener("click", function () {
    updateLanguage("urdu");
});

document.getElementById("btn-french").addEventListener("click", function () {
    updateLanguage("french");
});

// Initial load with default language
updateLanguage("english");
