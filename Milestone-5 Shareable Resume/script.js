// // Fetching necessary elements
// const nameInput = document.getElementById('name') as HTMLInputElement;
// const emailInput = document.getElementById('email') as HTMLInputElement;
// const degreeInput = document.getElementById('degree') as HTMLInputElement;
// const schoolInput = document.getElementById('school') as HTMLInputElement;
// const gradYearInput = document.getElementById('grad-year') as HTMLInputElement;
// const workExperienceInput = document.getElementById('work-experience') as HTMLTextAreaElement;
// const skillsInput = document.getElementById('skills') as HTMLTextAreaElement;
// // Resume output fields
// const resumeName = document.getElementById('resume-name') as HTMLElement;
// const resumeEmail = document.getElementById('resume-email') as HTMLElement;
// const resumeDegree = document.getElementById('resume-degree') as HTMLElement;
// const resumeSchool = document.getElementById('resume-school') as HTMLElement;
// const resumeGradYear = document.getElementById('resume-grad-year') as HTMLElement;
// const resumeWorkExperience = document.getElementById('resume-work-experience') as HTMLElement;
// const resumeSkills = document.getElementById('resume-skills') as HTMLElement;
// // Buttons
// const generateResumeButton = document.getElementById('generate-resume') as HTMLButtonElement;
// const shareResumeButton = document.getElementById('share-resume') as HTMLButtonElement;
// const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;
// // Generate Resume functionality
// generateResumeButton.addEventListener('click', () => {
//     // Fill resume with input data
//     resumeName.textContent = nameInput.value || 'Not provided';
//     resumeEmail.textContent = emailInput.value || 'Not provided';
//     resumeDegree.textContent = degreeInput.value || 'Not provided';
//     resumeSchool.textContent = schoolInput.value || 'Not provided';
//     resumeGradYear.textContent = gradYearInput.value || 'Not provided';
//     resumeWorkExperience.textContent = workExperienceInput.value || 'Not provided';
//     resumeSkills.textContent = skillsInput.value || 'Not provided';
//     // Show the resume
//     document.getElementById('resume')!.style.display = 'block';
// });
// // Generate unique URL
// shareResumeButton.addEventListener('click', () => {
//     const baseUrl = window.location.href;
//     const resumeId = btoa(`${nameInput.value}-${emailInput.value}`);
//     const shareableUrl = `${baseUrl}?resumeId=${resumeId}`;
//     alert(`Your unique resume URL: ${shareableUrl}`);
//     navigator.clipboard.writeText(shareableUrl);  // Copy the URL to clipboard
// });
// // Download Resume as PDF
// downloadPdfButton.addEventListener('click', () => {
//     const { jsPDF } = window.jspdf;
//     const doc = new jsPDF();
//     // Fill PDF content
//     doc.text(`Name: ${resumeName.textContent}`, 10, 10);
//     doc.text(`Email: ${resumeEmail.textContent}`, 10, 20);
//     doc.text(`Degree: ${resumeDegree.textContent}`, 10, 30);
//     doc.text(`School: ${resumeSchool.textContent}`, 10, 40);
//     doc.text(`Graduation Year: ${resumeGradYear.textContent}`, 10, 50);
//     doc.text(`Work Experience: ${resumeWorkExperience.textContent}`, 10, 60);
//     doc.text(`Skills: ${resumeSkills.textContent}`, 10, 70);
//     // Save as PDF
//     doc.save('resume.pdf');
// });
// // Load resume from URL if present
// window.onload = () => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const resumeId = urlParams.get('resumeId');
//     if (resumeId) {
//         const decodedResume = atob(resumeId);
//         const [name, email] = decodedResume.split('-');
//         resumeName.textContent = name || 'Not provided';
//         resumeEmail.textContent = email || 'Not provided';
//         // You can fetch additional details from a backend or use default values here
//         document.getElementById('resume')!.style.display = 'block';
//     }
// };
// Fetching necessary elements
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var degreeInput = document.getElementById('degree');
var schoolInput = document.getElementById('school');
var gradYearInput = document.getElementById('grad-year');
var workExperienceInput = document.getElementById('work-experience');
var skillsInput = document.getElementById('skills');
// Resume output fields
var resumeName = document.getElementById('resume-name');
var resumeEmail = document.getElementById('resume-email');
var resumeDegree = document.getElementById('resume-degree');
var resumeSchool = document.getElementById('resume-school');
var resumeGradYear = document.getElementById('resume-grad-year');
var resumeWorkExperience = document.getElementById('resume-work-experience');
var resumeSkills = document.getElementById('resume-skills');
// Buttons
var generateResumeButton = document.getElementById('generate-resume');
var shareResumeButton = document.getElementById('share-resume');
var downloadPdfButton = document.getElementById('download-pdf');
// Generate Resume functionality
generateResumeButton.addEventListener('click', function () {
    // Validation
    if (!nameInput.value || !emailInput.value) {
        alert("Please fill in all required fields.");
        return;
    }
    // Fill resume with input data
    resumeName.textContent = nameInput.value || 'Not provided';
    resumeEmail.textContent = emailInput.value || 'Not provided';
    resumeDegree.textContent = degreeInput.value || 'Not provided';
    resumeSchool.textContent = schoolInput.value || 'Not provided';
    resumeGradYear.textContent = gradYearInput.value || 'Not provided';
    resumeWorkExperience.textContent = workExperienceInput.value || 'Not provided';
    resumeSkills.textContent = skillsInput.value || 'Not provided';
    // Show the resume
    document.getElementById('resume').style.display = 'block';
});
// Generate unique URL
shareResumeButton.addEventListener('click', function () {
    var baseUrl = window.location.href;
    var resumeId = btoa("".concat(nameInput.value, "-").concat(emailInput.value));
    var shareableUrl = "".concat(baseUrl, "?resumeId=").concat(resumeId);
    alert("Your unique resume URL: ".concat(shareableUrl));
    navigator.clipboard.writeText(shareableUrl); // Copy the URL to clipboard
});
// Download Resume as PDF
downloadPdfButton.addEventListener('click', function () {
    var jsPDF = window.jspdf.jsPDF;
    var doc = new jsPDF();
    // Fill PDF content (Ensure correct positioning)
    doc.text("Name: ".concat(resumeName.textContent), 10, 10);
    doc.text("Email: ".concat(resumeEmail.textContent), 10, 20);
    doc.text("Degree: ".concat(resumeDegree.textContent), 10, 30);
    doc.text("School: ".concat(resumeSchool.textContent), 10, 40);
    doc.text("Graduation Year: ".concat(resumeGradYear.textContent), 10, 50);
    doc.text("Work Experience: ".concat(resumeWorkExperience.textContent), 10, 60);
    doc.text("Skills: ".concat(resumeSkills.textContent), 10, 70);
    // Save as PDF
    doc.save('resume.pdf');
});
// Load resume from URL if present
window.onload = function () {
    var urlParams = new URLSearchParams(window.location.search);
    var resumeId = urlParams.get('resumeId');
    if (resumeId) {
        var decodedResume = atob(resumeId);
        var _a = decodedResume.split('-'), name_1 = _a[0], email = _a[1];
        resumeName.textContent = name_1 || 'Not provided';
        resumeEmail.textContent = email || 'Not provided';
        // You can fetch additional details from a backend or use default values here
        document.getElementById('resume').style.display = 'block';
    }
};
