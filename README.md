# 🔒 Cybersecurity Portfolio - Jerome Wachira

A modern, responsive, and cybersecurity-themed portfolio website showcasing the journey from Electronics to Cybersecurity. Built with vanilla HTML5, CSS3, and JavaScript for optimal performance and accessibility.

![Portfolio Preview](./assets/portfolio-preview.png)

## 🚀 Live Demo

- **Live Site**: [jerome-wachira-cybersecurity.netlify.app](https://jerome-wachira-cybersecurity.netlify.app)
- **Repository**: [GitHub Repository](https://github.com/jerome-wachira/cybersecurity-portfolio)

## 📋 Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Local Development](#local-development)
- [Deployment](#deployment)
- [Customization](#customization)
- [Performance](#performance)
- [Accessibility](#accessibility)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## ✨ Features

### Design & User Experience
- **Cybersecurity-Themed Design**: Dark color palette with cyan/green accents
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Subtle entrance animations and scroll-triggered effects
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic navigation
- **Modern Typography**: Roboto and Montserrat fonts for professional appearance

### Technical Features
- **Performance Optimized**: Lightweight, fast-loading with lazy loading
- **SEO Optimized**: Semantic HTML, meta tags, and structured data
- **Accessibility First**: WCAG 2.1 compliant with keyboard navigation
- **Cross-Browser Compatible**: Tested on Chrome, Firefox, Safari, and Edge
- **Mobile-First Design**: Progressive enhancement from mobile to desktop

### Interactive Components
- **Dynamic Navigation**: Active section highlighting and mobile hamburger menu
- **Skill Progress Bars**: Animated progress indicators with scroll triggers
- **Contact Form**: Client-side validation with user-friendly error messages
- **Back to Top**: Smooth scroll-to-top functionality
- **Social Links**: External links with proper accessibility attributes

## 🛠 Technology Stack

### Frontend
- **HTML5**: Semantic markup with proper document structure
- **CSS3**: Modern CSS with custom properties, flexbox, and grid
- **JavaScript (ES6+)**: Vanilla JS with modern features and APIs

### External Dependencies
- **Google Fonts**: Roboto and Montserrat font families
- **Font Awesome 6.4.0**: Icons for enhanced visual elements
- **No Frameworks**: Pure vanilla implementation for optimal performance

### Development Tools
- **Git**: Version control
- **VS Code**: Recommended development environment
- **Live Server**: For local development server

## 📦 Installation

### Prerequisites
- **Web Browser**: Chrome, Firefox, Safari, or Edge
- **Text Editor**: VS Code, Sublime Text, or similar
- **Git**: For version control (optional)

### Quick Start

1. **Clone the Repository**
   ```bash
   git clone https://github.com/jerome-wachira/cybersecurity-portfolio.git
   cd cybersecurity-portfolio
   ```

2. **Open in Browser**
   ```bash
   # Option 1: Direct file opening
   open index.html  # macOS
   start index.html # Windows
   
   # Option 2: Using Python's built-in server
   python -m http.server 8000
   # Then open http://localhost:8000
   
   # Option 3: Using Node.js http-server
   npx http-server
   ```

3. **Start Customizing**
   - Update personal information in `index.html`
   - Add your profile image to `assets/`
   - Modify content to match your background

## 🔧 Local Development

### Development Server
For the best development experience, use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server -p 8000

# Using PHP (if available)
php -S localhost:8000

# Using VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

### File Structure
```
cybersecurity-portfolio/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   └── script.js           # JavaScript functionality
├── assets/
│   ├── favicon.ico         # Favicon (add your own)
│   ├── profile-placeholder.jpg
│   ├── project-*.jpg       # Project images
│   └── Jerome_Wachira_Resume.pdf
├── README.md               # This file
└── .gitignore             # Git ignore rules
```

### Development Guidelines
- **Code Quality**: Follow consistent indentation and commenting
- **Performance**: Optimize images and minimize HTTP requests
- **Accessibility**: Test with keyboard navigation and screen readers
- **Responsive Design**: Test on various screen sizes

## 🚀 Deployment

### GitHub Pages

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to Repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Save settings

3. **Access Your Site**
   - Site will be available at: `https://yourusername.github.io/repository-name`

### Netlify (Recommended)

1. **Drag & Drop Deployment**
   - Go to [netlify.com](https://netlify.com)
   - Drag the project folder to the deploy area
   - Get instant deployment with custom domain

2. **Git Integration**
   - Connect your GitHub repository
   - Enable automatic deployments
   - Custom domain and SSL included

3. **Manual Deployment**
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli
   
   # Deploy
   netlify deploy --prod --dir .
   ```

### Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

### Custom Server

1. **Upload Files**
   - Use FTP/SFTP to upload all files
   - Ensure proper file permissions

2. **Server Configuration**
   - Enable gzip compression
   - Set proper cache headers
   - Configure SSL certificate

## 🎨 Customization

### Personal Information

**Update Contact Details:**
```html
<!-- In index.html -->
<p>contact@myportfolio.com</p>
<!-- Change to your email -->

<a href="mailto:your-email@domain.com">your-email@domain.com</a>
```

**Social Media Links:**
```html
<a href="https://linkedin.com/in/your-profile" class="social-link">
<a href="https://github.com/your-username" class="social-link">
<a href="https://twitter.com/your-handle" class="social-link">
```

### Content Updates

**About Section:**
- Update the biography text
- Modify the journey timeline
- Add your specific background

**Skills Section:**
- Update skill levels in `data-level` attributes
- Add or remove skills as needed
- Modify skill categories

**Projects Section:**
- Replace project descriptions
- Add real project images
- Update GitHub/demo links

### Styling Customization

**Color Scheme:**
```css
:root {
  --primary-blue: #0a192f;     /* Main background */
  --accent-blue: #64ffda;      /* Accent color */
  --cyber-green: #00ff88;      /* Secondary accent */
  /* Modify these values for different colors */
}
```

**Typography:**
```css
:root {
  --font-primary: 'Your-Font', sans-serif;
  --font-secondary: 'Your-Header-Font', serif;
}
```

**Animation Speed:**
```css
:root {
  --transition-fast: 0.2s ease;    /* Faster animations */
  --transition-slow: 1s ease;      /* Slower animations */
}
```

### Adding New Sections

1. **HTML Structure:**
```html
<section id="new-section" class="new-section">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">New Section</h2>
      <div class="section-line"></div>
    </div>
    <!-- Your content here -->
  </div>
</section>
```

2. **CSS Styling:**
```css
.new-section {
  padding: var(--section-padding);
  background: var(--primary-blue);
}
```

3. **Navigation Update:**
```html
<li class="nav-item">
  <a href="#new-section" class="nav-link">New Section</a>
</li>
```

## ⚡ Performance

### Optimization Features
- **Minified Assets**: CSS and JS are optimized for production
- **Lazy Loading**: Images load only when needed
- **Efficient Animations**: CSS transforms for smooth performance
- **Font Loading**: Optimized Google Fonts loading
- **Compressed Images**: WebP format recommended for better compression

### Performance Tips
1. **Optimize Images**: Use WebP format, compress images
2. **Minimize HTTP Requests**: Combine CSS/JS files if needed
3. **Enable Compression**: Gzip/Brotli on server
4. **Use CDN**: For faster global delivery
5. **Cache Headers**: Set appropriate cache policies

### Performance Monitoring
```javascript
// Built-in performance tracking
console.log('Page Load Time:', performance.now());

// Track Core Web Vitals
new PerformanceObserver((entryList) => {
  console.log('Performance entries:', entryList.getEntries());
}).observe({entryTypes: ['navigation', 'paint']});
```

## ♿ Accessibility

### Accessibility Features
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader friendly descriptions
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG AA compliant contrast ratios
- **Focus Indicators**: Visible focus states for all interactive elements
- **Reduced Motion**: Respects user's motion preferences

### Accessibility Testing
```bash
# Install accessibility testing tools
npm install -g @axe-core/cli

# Run accessibility audit
axe http://localhost:8000
```

### Manual Testing
1. **Keyboard Navigation**: Tab through all interactive elements
2. **Screen Reader**: Test with NVDA, JAWS, or VoiceOver
3. **Color Blindness**: Use browser tools to simulate color blindness
4. **High Contrast**: Test in high contrast mode
5. **Zoom**: Test at 200% zoom level

## 🌐 Browser Support

### Supported Browsers
- **Chrome**: 80+
- **Firefox**: 75+
- **Safari**: 13+
- **Edge**: 80+
- **iOS Safari**: 13+
- **Android Chrome**: 80+

### Fallbacks
- **IntersectionObserver**: Polyfill included for older browsers
- **CSS Grid**: Flexbox fallbacks provided
- **Custom Properties**: Static values for IE11 (if needed)

## 📱 Mobile Optimization

### Responsive Breakpoints
```css
/* Mobile First Approach */
/* Base styles: Mobile (up to 480px) */

@media (min-width: 481px) { /* Small tablets */ }
@media (min-width: 768px) { /* Tablets */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1440px) { /* Large Desktop */ }
```

### Mobile Features
- **Touch-Friendly**: Large tap targets (44px minimum)
- **Swipe Gestures**: Smooth scrolling and interactions
- **Viewport Meta**: Proper mobile viewport configuration
- **Performance**: Optimized for mobile networks

## 🔧 Troubleshooting

### Common Issues

**1. Fonts Not Loading:**
```html
<!-- Ensure preconnect is in place -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

**2. Form Not Working:**
- Check JavaScript console for errors
- Verify form field names match JavaScript validation
- Ensure proper email regex pattern

**3. Animations Not Working:**
- Check if `prefers-reduced-motion` is set
- Verify IntersectionObserver support
- Check JavaScript execution order

**4. Mobile Menu Issues:**
- Verify JavaScript event listeners
- Check CSS media query syntax
- Ensure proper z-index values

### Debug Mode
```javascript
// Add debug parameter to URL for verbose logging
if (window.location.search.includes('debug=true')) {
  console.log('Debug mode enabled');
  // Additional debug information
}
```

## 📊 Analytics Integration

### Google Analytics 4
```html
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### Event Tracking
The portfolio includes built-in event tracking for:
- Navigation clicks
- Social media clicks
- Form submissions
- CTA button clicks
- Download actions

## 🔒 Security Considerations

### Security Features
- **Content Security Policy**: Implemented for XSS protection
- **Form Validation**: Client and server-side validation
- **External Links**: `rel="noopener noreferrer"` for security
- **HTTPS Only**: Redirect HTTP to HTTPS
- **Input Sanitization**: Proper form input handling

### Security Headers
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; font-src 'self' https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;">
```

## 🤝 Contributing

### How to Contribute
1. **Fork the Repository**
2. **Create Feature Branch**: `git checkout -b feature/new-feature`
3. **Commit Changes**: `git commit -m 'Add new feature'`
4. **Push to Branch**: `git push origin feature/new-feature`
5. **Create Pull Request**

### Contribution Guidelines
- Follow existing code style
- Test across different browsers
- Update documentation as needed
- Include screenshots for UI changes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Jerome Wachira

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## 📞 Contact

**Jerome Wachira**
- 📧 Email: [contact@myportfolio.com](mailto:contact@myportfolio.com)
- 💼 LinkedIn: [linkedin.com/in/jerome-wachira](https://linkedin.com/in/jerome-wachira)
- 🐱 GitHub: [github.com/jerome-wachira](https://github.com/jerome-wachira)
- 🐦 Twitter: [twitter.com/jerome_wachira](https://twitter.com/jerome_wachira)
- 🌐 Portfolio: [jerome-wachira-cybersecurity.netlify.app](https://jerome-wachira-cybersecurity.netlify.app)

## 🔄 Changelog

### Version 1.0.0 (2025-01-05)
- ✨ Initial portfolio release
- 🎨 Cybersecurity-themed design
- 📱 Fully responsive layout
- ♿ Accessibility features
- 🚀 Performance optimizations
- 📊 Analytics integration
- 🔒 Security implementations

---

### 🙏 Acknowledgments

- **Design Inspiration**: Modern cybersecurity aesthetics
- **Color Palette**: Inspired by terminal and hacker themes
- **Typography**: Google Fonts for professional appearance
- **Icons**: Font Awesome for consistent iconography
- **Community**: Open source community for best practices

### 📚 Resources

- **Stock Images**: [Unsplash](https://unsplash.com) for cybersecurity themes
- **Icons**: [Font Awesome](https://fontawesome.com)
- **Fonts**: [Google Fonts](https://fonts.google.com)
- **Design Tools**: Figma, Adobe XD for mockups
- **Testing**: Chrome DevTools, Lighthouse, axe-core

---

**Built with ❤️ and passion for cybersecurity**

*This portfolio represents the beginning of an exciting journey from Electronics to Cybersecurity. Every line of code reflects the dedication to learning, growing, and contributing to the cybersecurity community.*
