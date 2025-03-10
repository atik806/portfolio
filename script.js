// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Projects Data
const projects = [
    {
        title: 'Robotics Project 1',
        description: 'Description of your first robotics project.',
        image: 'assets/project1.jpg',
        technologies: ['Arduino', 'Python',],
        github: 'https://github.com/atik806',
        demo: '#'
    },
    {
        title: 'Web Development Project',
        description: 'working on a web development project',
        image: 'assets/project2.jpg',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/atik806',
        demo: '#'
    },
    // Add more projects as needed
];

// Populate Projects
const projectGrid = document.querySelector('.project-grid');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="technologies">
            ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
        </div>
        <div class="project-links">
            <a href="${project.github}" class="btn secondary" target="_blank">GitHub</a>
            <a href="${project.demo}" class="btn primary" target="_blank">Live Demo</a>
        </div>
    `;
    projectGrid.appendChild(projectCard);
});

// Technical Skills Data
const technicalSkills = [
    { name: 'Python', level: 56 },
    { name: 'JavaScript', level: 48 },
    { name: 'ROS', level: 20 },
    { name: 'Arduino', level: 50 },
    { name: 'Machine Learning', level: 20 }
];

// Populate Skills
const skillBars = document.querySelector('.skill-bars');

technicalSkills.forEach(skill => {
    const skillBar = document.createElement('div');
    skillBar.className = 'skill-bar';
    skillBar.innerHTML = `
        <div class="skill-info">
            <span>${skill.name}</span>
            <span>${skill.level}%</span>
        </div>
        <div class="progress-bar">
            <div class="progress" style="width: ${skill.level}%"></div>
        </div>
    `;
    skillBars.appendChild(skillBar);
});

// Blog Posts Data
const blogPosts = [
    {
        title: 'My Experience at Robotics Competition on Robo Soccer',
        excerpt: 'I participated in a robotics competition and learned a lot about robotics...',
        date: '7 February 2025',
        image: 'assets/1.jpg',
        link: '#'
    },
    {
        title: 'Another Experience at Robotics Competition on Robo Soccer at North South University',
        excerpt: 'A beginner\'s guide to Arduino...',
        date: '10 March 2025',
        image: 'assets/2.jpg',
        link: '#'
    }
    // Add more blog posts as needed
];

// Populate Blog Posts
const blogGrid = document.querySelector('.blog-grid');

blogPosts.forEach(post => {
    const blogCard = document.createElement('div');
    blogCard.className = 'blog-card';
    blogCard.innerHTML = `
        <img src="${post.image}" alt="${post.title}">
        <div class="blog-content">
            <h3>${post.title}</h3>
            <p class="date">${post.date}</p>
            <p>${post.excerpt}</p>
            <a href="updates/index.html" class="btn secondary">Read More</a>
        </div>
    `;
    blogGrid.appendChild(blogCard);
});

// Contact Form Handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll animation for elements
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
}); 