// Sample career journey data - you can update this with your own journey
const careerJourney = [
    {
        year: "2025",
        title: "Devops Apprentice",
        company: "Essilor Luxoticca",
        description: "Devops Engineer Apprentice",
        skills: ["CI/CD", "Cloud", "Linux", "Docker", "Kubernetes"]
    },
    {
        year: "2024",
        title: "Internal IT Admin",
        company: "Carabao Cloud Solutions Inc.",
        description: "Remote Monitoring and Management of Windows Devices",
        skills: ["Cybersecurity", "Remote Monitoring", "Technical Support"]
    },
    // Add more entries as needed
];

// Function to create timeline items
function createTimelineItem(item) {
    return `
        <div class="timeline-item animate-fade-in hover-scale">
            <div class="bg-white p-6 rounded-lg shadow-md">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-xl font-bold text-gray-900">${item.title}</h3>
                    <span class="text-sm font-semibold text-blue-600">${item.year}</span>
                </div>
                <h4 class="text-lg text-gray-700 mb-2">${item.company}</h4>
                <p class="text-gray-600 mb-4">${item.description}</p>
                <div class="flex flex-wrap gap-2">
                    ${item.skills.map(skill => `
                        <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                            ${skill}
                        </span>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// Function to initialize the timeline
function initializeTimeline() {
    const timelineContainer = document.getElementById('timeline-container');
    if (timelineContainer) {
        timelineContainer.innerHTML = careerJourney
            .map(item => createTimelineItem(item))
            .join('');
    }
}

// Function to handle smooth scrolling for navigation links
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Function to handle scroll animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => observer.observe(element));
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeTimeline();
    initializeSmoothScroll();
    handleScrollAnimations();
}); 
