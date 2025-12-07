# 🦅 Wings of Discovery

An innovative suite of AI-powered tools designed by **The Quantum Crystals** to empower archaeologists with cutting-edge technology for fieldwork, analysis, and discovery.

## 🌟 Overview

Wings of Discovery is a collection of web-based applications that combine drone technology, artificial intelligence, and intuitive user interfaces to help archaeologists reduce field walking time, analyze artifacts more efficiently, and accelerate archaeological discovery.

**Built by:** The Quantum Crystals - 6 girls passionate about archaeology and technology  
**Deployed on:** GitHub Pages  
**Access:** [https://artynuts.github.io/wings-of-discovery/](https://artynuts.github.io/wings-of-discovery/)

---

## 🚀 Applications

### 1. **Landing Page** (`index.html`)
The main hub that showcases all available tools and provides navigation to the three core applications.

- **Branding:** Quantum Crystals logo and mission statement
- **Navigation:** Quick links to all three tools
- **Features Highlighted:** Overview of each application's capabilities
- **Design:** Responsive grid layout with feature cards

---

### 2. **📍 Plan Drone Path** (`plan-path.html`)
An interactive drone path planning tool for survey area coverage optimization.

#### Features:
- **Interactive Canvas Drawing**
  - Left-click to add polygon boundary points
  - Right-click to remove the last point
  - Click on existing points to delete them
  - Real-time visualization of polygon and coverage path

- **Settings Customization**
  - **Scale** - Set feet-per-pixel ratio for accurate measurements
  - **Drone Speed** - Specify flight speed in feet/second for time calculations
  - **FOV (Field of View)** - Set spacing between parallel flight lines

- **Path Generation**
  - Converts polygon to optimal rectangular coverage area
  - Generates parallel flight lines based on FOV settings
  - Calculates coverage dimensions, flight time, and path length

- **Code Export**
  - **JavaScript Code** - Export as async DroneBlocks-compatible code
  - **DroneBlocks XML** - Export as visual block format for block-based programming
  - One-click copy to clipboard functionality

- **Real-time Metrics**
  - Survey area dimensions (feet)
  - Number of coverage sectors
  - Total path length
  - Estimated flight time
  - Total coverage area

---

### 3. **🔍 Find Artifacts** (`find-artifacts.html`)
An AI-powered batch image analyzer for artifact detection using TensorFlow and Teachable Machine.

#### Features:
- **Batch Image Processing**
  - Upload multiple images at once
  - Drag-and-drop support
  - Image preview gallery with click-to-enlarge modal

- **AI-Powered Detection**
  - Uses Google Teachable Machine trained model
  - Provides confidence scores for each detection
  - Color-coded confidence levels (high/medium/low)

- **Image Management**
  - View all selected images in gallery grid
  - Delete individual images
  - View detailed image information (size, dimensions)
  - Modal viewer for zoomed image inspection

- **Results Analysis**
  - Detailed prediction results for each image
  - Confidence percentages for all categories
  - Summary statistics (total images, high/medium/low confidence)
  - Color-coded result cards for quick scanning

- **Responsive Design**
  - Two-column layout (instructions + upload)
  - Mobile-friendly with stacking layout

---

### 4. **👥 Meet The Team** (`team.html`)
Showcases the six talented members of The Quantum Crystals team.

#### Features:
- **Team Statistics**
  - 6 dedicated team members
  - 2 tools created
  - 100% commitment to archaeology and technology

- **Team Mission**
  - "We're 6 girls with a 💜 for science and archaeology"
  - Focused on turning dreams into discoveries through technology
  - Powered by curiosity, creativity, and collaboration

- **Team Members**
  1. **Anjini** - Lead Developer
  2. **Akshara** - UI/UX Designer
  3. **Ada** - AI/ML Specialist
  4. **Rena** - Project Manager
  5. **Akalya** - Backend Engineer
  6. **Allie** - QA/Testing Lead

---

## 🛠️ Technical Stack

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Canvas API:** Interactive drawing and visualization (Plan Path)
- **TensorFlow.js:** Machine learning inference in the browser
- **Teachable Machine:** Pre-trained model for artifact detection
- **Architecture:** Fully client-side, zero backend dependencies
- **Deployment:** GitHub Pages

### Key Technologies:
- No frameworks - pure vanilla JavaScript
- No backend server required
- Real-time processing and visualization
- Responsive design for desktop and mobile

---

## 📁 Project Structure

```
wings-of-discovery/
├── index.html                # Landing/home page (main entry point)
├── plan-path.html            # Drone path planning application
├── find-artifacts.html       # AI image analysis tool
├── team.html                 # Team showcase page
├── styles.css                # Global stylesheet
├── shared-layout.js          # Shared header/footer components
├── README.md                 # This file
├── SHARED_LAYOUT.md          # Documentation for shared layout
└── images/                   # Images and logos
    ├── WingsOfDiscovery-Logo.png
    ├── QC-Logo/
    │   ├── Transparent/
    │   ├── High Res/
    │   └── Vector/
    ├── puppy-anjini.png
    ├── galaxy-akshara.png
    ├── rose-ada.png
    ├── unicorn-rena.png
    ├── crown-akalya.png
    └── cat-allie.png
```

---

## 🎯 Getting Started

### Access the Application
1. Visit: **[Wings of Discovery](https://artynuts.github.io/wings-of-discovery/)**
2. You'll be presented with three options on the landing page:
   - Plan Drone Path
   - Find Artifacts
   - Meet The Team

### Use Plan Drone Path
1. Click "Plan Drone Path" from the home page
2. Draw your survey polygon on the canvas (left-click to add points)
3. Adjust your settings (scale, drone speed, FOV)
4. Click "Generate Path" to create your flight plan
5. Export as JavaScript or DroneBlocks XML code
6. Copy and paste into DroneBlocks or your drone software

### Use Find Artifacts
1. Click "Find Artifacts" from the home page
2. Select one or more images (click or drag & drop)
3. Review your selected images in the gallery
4. Click "Analyze" to run AI detection
5. Review confidence scores and predictions
6. Delete individual images as needed or clear all to start over

### Meet The Team
1. Click "Meet The Team" from the home page
2. View team statistics and mission
3. Browse individual team member profiles

---

## 🎨 Design System

### Color Palette
- **Primary Purple:** `#8a3edb`
- **Dark Purple:** `#4b1f69`
- **Light Lavender:** `#c48cff`
- **Light Background:** `#f3e6ff`
- **Cyan Accent:** `rgb(0, 230, 255)`

### Typography
- **Primary Font:** Nunito (sans-serif)
- **Accent Font:** Montserrat (for logo text)

### Components
- Cards with shadow effects and hover animations
- Gradient buttons with smooth transitions
- Responsive grid layouts
- Modal dialogs for image viewing
- Toast notifications for status messages

---

## 🔧 Development

### Running Locally
```bash
# Clone the repository
git clone https://github.com/artynuts/wings-of-discovery.git

# Navigate to directory
cd wings-of-discovery

# Open in browser
# Simply open index.html in your browser or use a local server:
python -m http.server 8000
# Then visit http://localhost:8000
```

### Browser Requirements
- Modern browser with ES6 support
- WebGL support (for TensorFlow.js)
- Canvas API support
- LocalStorage support (optional, for settings)

### No Build Process Required
This project runs entirely in the browser with no build step, no npm dependencies, and no server required.

---

## 📊 Key Features Across All Apps

✅ **Responsive Design** - Works seamlessly on desktop, tablet, and mobile  
✅ **Real-time Feedback** - Instant visual updates as you work  
✅ **AI-Powered** - Machine learning for accurate artifact detection  
✅ **Export Capabilities** - Generate code in multiple formats  
✅ **User-Friendly** - Intuitive interfaces designed for archaeologists  
✅ **No Dependencies** - Pure vanilla JavaScript, zero setup required  
✅ **Privacy-Focused** - All processing happens in your browser  
✅ **Accessible** - ARIA labels and semantic HTML throughout  

---

## 🎓 Use Cases

### For Archaeologists:
- **Field Planning** - Optimize drone survey paths before fieldwork
- **Data Analysis** - Quickly analyze hundreds of field images for artifacts
- **Artifact Detection** - Use AI to identify promising survey areas
- **Documentation** - Export flight plans and analysis results

### For Researchers:
- **Remote Surveys** - Plan surveys without visiting the site
- **Cost Reduction** - Minimize field walking time
- **Data Organization** - Manage and analyze large image datasets
- **Report Generation** - Export findings and flight data

### For Teams:
- **Collaboration** - Share findings and flight plans
- **Training** - Learn drone survey techniques
- **Quality Assurance** - Verify analysis results

---

## 📝 Model Details

### Teachable Machine Model
The Find Artifacts tool uses a **Google Teachable Machine** image classification model trained to detect:
- Archaeological artifacts
- Pottery fragments
- Stone tools
- Other archaeological features

**Model URL:** `https://teachablemachine.withgoogle.com/models/aPjxyfdkU/`

The model provides:
- **Confidence Scores** (0-100%) for each prediction
- **Multiple Classifications** per image
- **Real-time Inference** in the browser

---

## 🐛 Troubleshooting

### Plan Path Issues
- **Can't draw points?** - Ensure you're clicking on the white canvas area
- **Wrong measurements?** - Double-check your scale (feet per pixel) setting
- **Path looks odd?** - Verify your polygon has at least 3 points and isn't self-intersecting

### Find Artifacts Issues
- **Model won't load?** - Check your internet connection and browser console for errors
- **Images not loading?** - Verify image format is supported (JPG, PNG, GIF, WebP, BMP, SVG)
- **Analyze button disabled?** - Select at least 1 image to enable analysis

### General Issues
- **Browser compatibility?** - Use Chrome, Firefox, Safari, or Edge (latest versions)
- **Performance slow?** - For Find Artifacts, use smaller images or fewer at a time
- **Can't copy code?** - Allow clipboard access when browser prompts

---

## 📄 License

© 2025 The Wings of Discovery. All rights reserved.

Created by **The Quantum Crystals:**
- Anjini - Lead Developer
- Akshara - UI/UX Designer
- Ada - AI/ML Specialist
- Rena - Project Manager
- Akalya - Backend Engineer
- Allie - QA/Testing Lead

---

## 🤝 Contributing

This project was created as part of a mission to empower archaeologists with technology. For questions, suggestions, or contributions, please reach out to The Quantum Crystals team.

---

## 📞 Support & Contact

**GitHub Repository:** [artynuts/wings-of-discovery](https://github.com/artynuts/wings-of-discovery)

**Issues & Feedback:** Please use the GitHub Issues page to report bugs or suggest features.

---

## 🌍 Mission Statement

> *"We're 6 girls with a 💜 for science and archaeology. Our passion is to turn dreams into discoveries using technology. We power our ideas through curiosity, creativity, and collaboration."*

**Wings of Discovery** - Empowering archaeologists to discover more, faster.
