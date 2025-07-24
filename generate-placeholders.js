/**
 * Script to generate placeholder images for the portfolio website
 * 
 * This script creates directories for placeholder images if they don't exist
 * and provides instructions for downloading placeholder images.
 */

const fs = require('fs');
const path = require('path');

// Directories to create
const directories = [
    'assets/images/projects',
    'assets/images/about',
    'assets/icons'
];

// Create directories if they don't exist
directories.forEach(dir => {
    const dirPath = path.join(__dirname, dir);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
        console.log(`Created directory: ${dirPath}`);
    } else {
        console.log(`Directory already exists: ${dirPath}`);
    }
});

// Create a placeholder text file with instructions
const placeholderInstructions = `
# Placeholder Images for Portfolio Website

This file contains instructions for adding placeholder images to your portfolio website.

## Required Images

### Project Images
Place the following images in the 'assets/images/projects' directory:

1. featured-project.jpg - Main featured project image (16:9 aspect ratio, 1200x675px recommended)
2. project-1.jpg - Health App Redesign (4:3 aspect ratio, 800x600px recommended)
3. project-2.jpg - E-commerce Platform (4:3 aspect ratio, 800x600px recommended)
4. project-3.jpg - Travel App (4:3 aspect ratio, 800x600px recommended)
4. project-4.jpg - Smart Home Dashboard (4:3 aspect ratio, 800x600px recommended)
5. project-5.jpg - Productivity App (4:3 aspect ratio, 800x600px recommended)
6. project-6.jpg - Educational Platform (4:3 aspect ratio, 800x600px recommended)

### About Images
Place the following image in the 'assets/images/about' directory:

1. profile.jpg - Profile photo (1:1 aspect ratio, 600x600px recommended)

### Icons
Place the following icon in the 'assets/icons' directory:

1. favicon.ico - Website favicon (32x32px recommended)

## Resources for Placeholder Images

You can use the following resources to find placeholder images:

1. Unsplash (https://unsplash.com) - Free high-quality stock photos
2. Pexels (https://pexels.com) - Free stock photos and videos
3. Placeholder.com (https://placeholder.com) - Generate custom placeholder images

For profile photos, you can use:
1. Generated.photos (https://generated.photos) - AI-generated faces
2. This Person Does Not Exist (https://thispersondoesnotexist.com) - AI-generated faces

For favicon, you can use:
1. Favicon.io (https://favicon.io) - Free favicon generator
`;

fs.writeFileSync(path.join(__dirname, 'placeholder-instructions.md'), placeholderInstructions);
console.log('Created placeholder instructions file: placeholder-instructions.md');

console.log('\nPlaceholder setup complete!');
console.log('Please follow the instructions in placeholder-instructions.md to add images to your portfolio website.');