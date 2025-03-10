# Personal Portfolio Website

A modern and responsive portfolio website built with HTML, CSS, and JavaScript. This portfolio template is perfect for showcasing your work, skills, and experience in a professional manner.

## Features

- 📱 Fully Responsive Design
- 🎨 Modern and Clean UI
- 🚀 Smooth Scrolling
- 📊 Animated Skill Bars
- 📝 Dynamic Project Cards
- 📰 Blog Section
- 📬 Contact Form
- 🌓 Smooth Animations

## Getting Started

1. Clone this repository or download the files
2. Replace the placeholder content in `index.html` with your personal information
3. Update the projects, skills, and blog posts data in `script.js`
4. Add your images to the `assets` folder
5. Customize the colors and styling in `styles.css`

## Customization

### Profile Information
- Open `index.html`
- Replace "Your Name" with your actual name
- Update the hero section with your title and tagline
- Modify the About Me section with your personal information
- Add your own profile picture to the `assets` folder

### Projects
Edit the projects array in `script.js`:
```javascript
const projects = [
    {
        title: 'Your Project Title',
        description: 'Project description...',
        image: 'assets/your-project-image.jpg',
        technologies: ['Tech1', 'Tech2', 'Tech3'],
        github: 'your-github-link',
        demo: 'your-demo-link'
    },
    // Add more projects...
];
```

### Skills
Update the technical skills in `script.js`:
```javascript
const technicalSkills = [
    { name: 'Your Skill', level: 85 },
    // Add more skills...
];
```

### Blog Posts
Modify the blog posts in `script.js`:
```javascript
const blogPosts = [
    {
        title: 'Your Blog Post Title',
        excerpt: 'Blog post excerpt...',
        date: 'YYYY-MM-DD',
        image: 'assets/your-blog-image.jpg',
        link: 'your-blog-link'
    },
    // Add more blog posts...
];
```

### Styling
- Open `styles.css`
- Modify the color variables in the `:root` selector
- Adjust fonts, sizes, and other styling properties as needed

## Required Assets

Add the following images to your `assets` folder:
- `profile.jpg` - Your profile picture
- `project1.jpg`, `project2.jpg`, etc. - Project screenshots
- `blog1.jpg`, `blog2.jpg`, etc. - Blog post images
- Any additional images you want to use

## Contact Form

The contact form is set up to handle submissions via JavaScript. To make it functional:
1. Set up a backend server to handle form submissions
2. Update the form submission code in `script.js`
3. Add your email or other contact information

## Browser Support

This portfolio template works in all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## License

This project is open source and available under the MIT License.

## Credits

- Font Awesome for icons
- Google Fonts (Poppins)
- Intersection Observer API for scroll animations 