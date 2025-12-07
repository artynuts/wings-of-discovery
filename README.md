# 🚁 Wings of Discovery - Drone Path Planner

A comprehensive web-based tool designed to help archaeologists and field surveyors plan efficient drone coverage paths for archaeological sites and surveys. Visualize your survey area, generate optimized flight paths, and export code ready for execution.

## Features

### 📍 Survey Area Planning

- **Interactive Canvas** - Draw custom polygon boundaries for your survey area
- **Automatic Rectangle Calculation** - Converts polygon boundaries to optimal rectangular coverage
- **Real-time Visualization** - See your survey area, bounding rectangle, and flight path instantly

### 🚀 Path Generation

- **Sector-Based Coverage** - Generates parallel flight lines with customizable spacing
- **Smart Calculations** - Automatically computes coverage dimensions, path length, and estimated flight time
- **Field of View Control** - Adjust spacing between flight lines based on your drone's camera FOV

### 💻 Code Export

- **JavaScript Code** - Export ready-to-use JavaScript code for DroneBlocks JavaScript API
- **Visual Blocks** - Export XML format compatible with DroneBlocks visual programming editor
- **One-Click Copy** - Easily copy code to clipboard for immediate use

### 📊 Real-time Metrics

- Survey area dimensions in feet
- Number of coverage sectors
- Total flight path length
- Estimated flight time
- Total coverage area

### 📱 User-Friendly Interface

- Left panel for settings and results
- Right panel for interactive canvas
- Clean, intuitive button layout
- Always-visible copy buttons (disabled until code is available)

## Getting Started

### Requirements

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (to load the application)
- A drone compatible with DroneBlocks (DJI, Parrot, etc.)

### Usage

1. **Open the Application**

   - Visit: [Wings of Discovery - Drone Path Planner](https://artynuts.github.io/wings-of-discovery/plan-path.html)

2. **Define Your Survey Area**

   - Left-click on the canvas to add points and draw your polygon boundary
   - Right-click to remove the last point
   - Click on an existing point to delete it

3. **Adjust Settings**

   - **Scale**: Set the feet-per-pixel ratio for your canvas
   - **Speed**: Enter your drone's flight speed (feet/second)
   - **FOV**: Set field of view spacing between flight lines

4. **Generate Path**

   - Click the "Generate Path" button
   - View coverage results (dimensions, sectors, flight time)
   - See your flight path visualized on the canvas

5. **Export Code**
   - Click "Copy Code" to copy JavaScript code
   - Click "Copy Blocks" to copy XML for visual blocks
   - Paste into DroneBlocks platform

## Understanding the Visualization

- **Blue Lines**: Your survey area polygon boundary
- **Orange Dashed Rectangle**: Optimal bounding rectangle for coverage
- **Green Lines**: Your drone's flight path (coverage sectors)
- **Red Labels**: Distance measurements between polygon points

## Settings Guide

### Scale (feet per pixel)

Determines how many feet on the ground each pixel represents. Default is 0.1 feet/pixel.

### Speed (feet/second)

Your drone's expected cruising speed. Used to calculate estimated flight time. Default is 30 ft/s.

### FOV (feet between lines)

The spacing between parallel flight lines based on your drone's camera field of view. Default is 5 feet.

## Project Structure

```
wings-of-discovery/
├── plan-path.html          # Main drone path planner application
├── index.html               # Home/landing page
├── find-artifacts.html      # Batch image analyzer for artifacts
├── team.html                # Team information page
├── styles.css               # Global styles
├── README.md                # This file
└── images/                  # Logo and asset files
    └── QC-Logo/
```

## Technical Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Canvas API**: For interactive drawing and visualization
- **No Backend**: Completely client-side, runs entirely in the browser
- **No Dependencies**: Pure vanilla JavaScript - no frameworks required

## Code Generation Details

### JavaScript Export

Generates an async function compatible with DroneBlocks JavaScript API:

```javascript
async function executeCoveragePath() {
  // Takeoff
  await drone.takeoff();

  // Move to survey area
  await drone.moveTo(startX, startY, 10);

  // Execute coverage path
  for (let line of pathLines) {
    await drone.moveTo(line.x1, line.y1, 5);
    await drone.moveTo(line.x2, line.y2, 5);
  }

  // Return and land
  await drone.moveTo(startX, startY, 10);
  await drone.land();
}
```

### DroneBlocks XML Export

Generates visual block format that can be imported into DroneBlocks editor for visual programming with drag-and-drop blocks.

## Troubleshooting

### Drawing Issues

- **Can't add points?** - Make sure you're left-clicking on the white canvas area
- **Want to start over?** - Click the "Clear" button to reset everything

### Code Export Issues

- **Copy buttons disabled?** - Generate a path first using the "Generate Path" button
- **Code not showing?** - Ensure your browser allows clipboard access

### Calculation Issues

- **Odd flight times?** - Double-check your speed and FOV settings
- **Path looks wrong?** - Verify your polygon has at least 3 points

## Tips for Archaeologists

- **Ground Verification**: Always verify scale settings with ground measurements
- **Drone Limitations**: Consider your drone's max flight time and altitude restrictions
- **Weather**: Plan flights during stable weather conditions
- **Permits**: Ensure you have proper permits and permissions for aerial surveys
- **Overlap**: The default FOV creates good photo overlap for photogrammetry
- **Multiple Passes**: Generate separate paths for different altitudes or camera angles

## Made for Archaeologists 🏛️

This tool was created to make drone survey planning accessible and straightforward for field archaeologists, students, and researchers.

## License

MIT License - Feel free to use and modify for educational purposes!

## Contact & Support

**Built by Artynuts for Wings of Discovery**

For questions or suggestions, please open an issue on GitHub.

---

**Happy surveying! 🚁🏛️**
