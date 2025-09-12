# Harshit Kumar Patel - Portfolio Website

A modern, futuristic personal portfolio website built with React, TailwindCSS, and Framer Motion. Features glassmorphism effects, smooth animations, and a professional dark/light theme toggle.

## 🚀 Features

- **Modern Design**: Futuristic UI with glassmorphism and neumorphism elements
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Dark/Light Theme**: Professional theme toggle with persistent storage
- **Responsive Design**: Mobile-first approach with full responsiveness
- **Interactive Elements**: Hover effects, scroll animations, and micro-interactions
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Fast loading and smooth scrolling

## 🛠️ Tech Stack

- **React 18** - Frontend framework
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **Context API** - State management for theme

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd harshit-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Hero.js         # Hero section with animated background
│   ├── Navigation.js   # Navigation bar with smooth scrolling
│   ├── Summary.js      # About/Summary section
│   ├── Experience.js   # Professional experience
│   ├── Projects.js     # Featured projects
│   ├── Education.js    # Educational background
│   ├── Certifications.js # Certifications and courses
│   ├── Skills.js       # Skills and expertise
│   ├── Contact.js      # Contact form and information
│   └── ThemeToggle.js  # Dark/light theme toggle
├── contexts/           # React contexts
│   └── ThemeContext.js # Theme management
├── App.js             # Main application component
├── index.js           # Application entry point
└── index.css          # Global styles and Tailwind imports
```

## 🎨 Customization

### Colors and Themes
- Edit `tailwind.config.js` to customize color schemes
- Modify theme colors in the `colors` section
- Update gradient combinations in components

### Content
- Update personal information in each component
- Replace placeholder images with actual photos
- Modify project details and achievements

### Animations
- Adjust animation timings in Framer Motion variants
- Customize scroll-triggered animations
- Modify hover and interaction effects

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Deployment

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Configure custom domain if needed

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically deploy on push to main branch

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

**Harshit Kumar Patel**
- Email: harshit.mzp888@gmail.com
- Phone: +91 6386226495
- Location: Chennai, India

---

Built with ❤️ by Harshit Kumar Patel
