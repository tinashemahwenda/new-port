# Tinashe Mahwenda Portfolio Website

A modern UX designer portfolio website with a minimalist black/white aesthetic, interactive elements, and smooth animations.

## Features

- Full-screen hero section with smooth entrance animations
- Interactive project showcase grid with hover animations and modal previews
- Featured project section with scroll-triggered transitions
- About section with bio, design philosophy, and skills
- Contact section with form validation and social links
- Responsive design for all devices
- Smooth scrolling and animations

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- Tailwind CSS
- Tailwind Plugins:
  - @tailwindcss/typography
  - @tailwindcss/forms
  - @tailwindcss/aspect-ratio

## Project Structure

```
new-port/
├── assets/
│   ├── images/
│   │   ├── projects/
│   │   └── about/
│   ├── fonts/
│   └── icons/
├── css/
│   ├── tailwind.css
│   └── styles.css (generated)
├── js/
│   ├── main.js
│   ├── animations.js
│   ├── modal.js
│   └── form.js
├── pages/
│   ├── work.html
│   ├── about.html
│   └── contact.html
├── index.html
├── package.json
├── tailwind.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/alex-chen-portfolio.git
   cd alex-chen-portfolio
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Build the CSS:
   ```
   npm run build
   ```

### Development

To run the project in development mode with live CSS updates:

```
npm run dev
```

This will watch for changes in the Tailwind CSS file and rebuild the styles.css file automatically.

### Production

To build the project for production:

```
npm run build
```

This will generate a minified CSS file for production use.

## Customization

### Changing Content

- Update the text and images in the HTML files to personalize the portfolio
- Replace project images in the `assets/images/projects/` directory
- Update the profile image in the `assets/images/about/` directory

### Modifying Styles

- Edit the `tailwind.config.js` file to customize colors, fonts, and other design tokens
- Add custom styles to the `css/tailwind.css` file

## Browser Support

The website is compatible with the following browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from [emnuel.xyz/ivella-registration](https://www.emnuel.xyz/ivella-registration)
- Icons from [Heroicons](https://heroicons.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)
