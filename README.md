# 🎨 Artifact Detector - Wings of Discovery

A simple, kid-friendly web application for detecting and categorizing image artifacts using Google's Teachable Machine AI model.

## Features

- 📁 **Drag & Drop Upload** - Simply drag images onto the page or click to browse
- 🤖 **AI-Powered Detection** - Uses a custom-trained Teachable Machine model
- 📊 **Visual Results** - Color-coded confidence scores with progress bars
- 🐛 **Debug Console** - Built-in debugging tools to monitor image processing
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile devices
- ⚡ **No Server Required** - Runs entirely in the browser

## How It Works

1. **Upload an Image** - Click the upload area or drag & drop a JPG, PNG, or other image file
2. **Preview** - Your image appears immediately after selection
3. **Analyze** - Click the "Analyze Image" button to run detection
4. **View Results** - See artifact categories with confidence percentages

## Getting Started

### Requirements

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (to load the Teachable Machine model)
- Your Teachable Machine model URL

### Setup

1. Clone or download this repository
2. Open `single-viewer.html` in your web browser
3. Update the `MODEL_URL` in the script with your Teachable Machine model URL:
   ```javascript
   const MODEL_URL =
     "https://teachablemachine.withgoogle.com/models/YOUR_MODEL_ID/";
   ```

### Using Your Teachable Machine Model

1. Go to [Teachable Machine](https://teachablemachine.withgoogle.com/)
2. Create a new Image Project
3. Train your model with artifact images
4. Export your model as a "Teachable Machine" link
5. Copy the model URL and paste it into the code (see Setup above)

## Project Structure

```
wings-of-discovery/
├── single-viewer.html  # Single image artifact detector
├── README.md          # This file
└── .git/              # Version control
```

## File Format Support

- JPG/JPEG
- PNG
- GIF
- WebP
- BMP
- TIFF

## Keyboard Shortcuts & Tips

- **Debug Console** - Scroll to the bottom of the page to see live logs (green terminal)
- **Test Mode** - Click "🐛 Test Image Loading" button to test with a sample image
- **Clear** - Use the "🔄 Clear" button to reset and upload a new image

## Technical Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **AI/ML**: TensorFlow.js + Google Teachable Machine
- **Deployment**: Static file (no backend required)

## Troubleshooting

### Model Won't Load

- Check that your model URL is correct
- Ensure the model is set to **Public** in Teachable Machine
- Check your internet connection
- Look at the error message in the debug console (green box at bottom)

### Image Won't Upload

- Make sure the file is a valid image format
- Check file size (extremely large files may be slow)
- Try a different browser if it persists

### Analysis Fails

- Ensure the model has finished loading
- Try a different image
- Check the debug console for error details

## Made for Kids 👶

This project was created with educators and students in mind! The interface is simple, visual, and provides helpful feedback through the built-in debug console.

## License

MIT License - Feel free to use and modify for educational purposes!

## Contributing

Contributions welcome! Please feel free to submit pull requests or open issues.

---

**Built by Artynuts with ❤️ for Wings of Discovery**
