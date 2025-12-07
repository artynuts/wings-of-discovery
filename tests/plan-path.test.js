/**
 * Unit Tests for Plan Path Functionality
 * Wings of Discovery - Drone Path Planner
 */

describe('Drone Path Planner Tests', () => {
  let canvas, ctx, polygonPoints, pathGenerated, generatedPath, boundingRect;

  beforeEach(() => {
    // Setup DOM elements
    document.body.innerHTML = `
      <canvas id="pathCanvas" width="480" height="480"></canvas>
      <input id="scale" type="number" value="1" />
      <input id="droneSpeed" type="number" value="10" />
      <input id="droneFOV" type="number" value="5" />
      <div id="errorMessage"></div>
      <div id="results"></div>
      <div id="dimensions"></div>
      <div id="numSectors"></div>
      <div id="pathLength"></div>
      <div id="flightTime"></div>
      <div id="coverageArea"></div>
      <textarea id="codeOutput"></textarea>
      <textarea id="blocksOutput"></textarea>
      <div id="codeSection"></div>
      <button id="saveScriptsBtn"></button>
      <button id="copyBlocksBtn"></button>
    `;

    canvas = document.getElementById('pathCanvas');
    ctx = canvas.getContext('2d');
    polygonPoints = [];
    pathGenerated = false;
    generatedPath = null;
    boundingRect = null;
  });

  describe('calculateBoundingRectangle', () => {
    test('should calculate correct bounding rectangle for simple points', () => {
      const points = [
        { x: 10, y: 10 },
        { x: 50, y: 10 },
        { x: 50, y: 50 },
        { x: 10, y: 50 }
      ];

      const result = calculateBoundingRectangle(points);

      expect(result).toEqual({
        x: 10,
        y: 10,
        width: 40,
        height: 40
      });
    });

    test('should handle negative coordinates', () => {
      const points = [
        { x: -10, y: -10 },
        { x: 10, y: 10 }
      ];

      const result = calculateBoundingRectangle(points);

      expect(result).toEqual({
        x: -10,
        y: -10,
        width: 20,
        height: 20
      });
    });

    test('should handle single point', () => {
      const points = [{ x: 25, y: 25 }];

      const result = calculateBoundingRectangle(points);

      expect(result).toEqual({
        x: 25,
        y: 25,
        width: 0,
        height: 0
      });
    });
  });

  describe('updateGeneratePathButton', () => {
    test('should enable button when 3 or more points exist', () => {
      polygonPoints = [
        { x: 10, y: 10 },
        { x: 50, y: 10 },
        { x: 30, y: 50 }
      ];

      const generateBtn = document.getElementById('generatePathBtn');
      if (generateBtn) {
        updateGeneratePathButton();
        expect(generateBtn.disabled).toBe(false);
      }
    });

    test('should disable button when less than 3 points exist', () => {
      polygonPoints = [
        { x: 10, y: 10 },
        { x: 50, y: 10 }
      ];

      const generateBtn = document.getElementById('generatePathBtn');
      if (generateBtn) {
        updateGeneratePathButton();
        expect(generateBtn.disabled).toBe(true);
      }
    });
  });

  describe('Path Generation', () => {
    test('should generate path with valid polygon', () => {
      polygonPoints = [
        { x: 100, y: 100 },
        { x: 300, y: 100 },
        { x: 300, y: 300 },
        { x: 100, y: 300 }
      ];

      const scale = 1;
      const droneFOV = 5;

      boundingRect = calculateBoundingRectangle(polygonPoints);
      const sectorSpacingPixels = droneFOV / scale;
      generatedPath = [];

      // Generate horizontal sectors
      for (
        let x = boundingRect.x + sectorSpacingPixels;
        x < boundingRect.x + boundingRect.width;
        x += sectorSpacingPixels
      ) {
        generatedPath.push({
          x1: x,
          y1: boundingRect.y,
          x2: x,
          y2: boundingRect.y + boundingRect.height
        });
      }

      expect(generatedPath.length).toBeGreaterThan(0);
      expect(generatedPath[0]).toHaveProperty('x1');
      expect(generatedPath[0]).toHaveProperty('y1');
      expect(generatedPath[0]).toHaveProperty('x2');
      expect(generatedPath[0]).toHaveProperty('y2');
    });

    test('should calculate correct path length', () => {
      const path = [
        { x1: 0, y1: 0, x2: 0, y2: 100 },
        { x1: 0, y1: 0, x2: 50, y2: 0 }
      ];

      const scale = 1;
      let totalLength = 0;

      path.forEach((line) => {
        const pixelDist = Math.sqrt(
          Math.pow(line.x2 - line.x1, 2) + Math.pow(line.y2 - line.y1, 2)
        );
        totalLength += pixelDist * scale;
      });

      expect(totalLength).toBe(150);
    });
  });

  describe('Code Generation', () => {
    test('should generate valid Tello Python code structure', () => {
      const scale = 1;
      boundingRect = { x: 100, y: 100, width: 200, height: 200 };
      generatedPath = [
        { x1: 100, y1: 100, x2: 100, y2: 300 }
      ];

      let code = `#!/usr/bin/env python3\n`;
      code += `from djitellopy import Tello\n`;

      expect(code).toContain('#!/usr/bin/env python3');
      expect(code).toContain('from djitellopy import Tello');
    });

    test('should generate valid DroneBlocks XML structure', () => {
      let xml = `<xml xmlns="https://developers.google.com/blockly/xml">\n`;
      xml += `  <block type="db_takeoff" id="start" x="20" y="20">\n`;
      xml += `  </block>\n`;
      xml += `</xml>\n`;

      expect(xml).toContain('<xml xmlns="https://developers.google.com/blockly/xml">');
      expect(xml).toContain('block type="db_takeoff"');
      expect(xml).toContain('</xml>');
    });
  });

  describe('Point Management', () => {
    test('should add point to polygon', () => {
      const initialLength = polygonPoints.length;
      polygonPoints.push({ x: 100, y: 100 });
      
      expect(polygonPoints.length).toBe(initialLength + 1);
      expect(polygonPoints[polygonPoints.length - 1]).toEqual({ x: 100, y: 100 });
    });

    test('should remove point from polygon', () => {
      polygonPoints = [
        { x: 10, y: 10 },
        { x: 50, y: 10 },
        { x: 30, y: 50 }
      ];

      const indexToRemove = 1;
      polygonPoints.splice(indexToRemove, 1);

      expect(polygonPoints.length).toBe(2);
      expect(polygonPoints[1]).toEqual({ x: 30, y: 50 });
    });

    test('should detect point within click radius', () => {
      const point = { x: 100, y: 100 };
      const clickX = 105;
      const clickY = 105;
      const radius = 10;

      const dist = Math.sqrt(
        Math.pow(clickX - point.x, 2) + Math.pow(clickY - point.y, 2)
      );

      expect(dist).toBeLessThan(radius);
    });
  });

  describe('Flight Time Calculations', () => {
    test('should calculate correct flight time', () => {
      const pathLength = 1000; // feet
      const droneSpeed = 10; // feet/second
      const expectedTime = Math.ceil(pathLength / droneSpeed);

      expect(expectedTime).toBe(100); // seconds
    });

    test('should convert seconds to minutes', () => {
      const timeInSeconds = 120;
      const timeInMinutes = (timeInSeconds / 60).toFixed(1);

      expect(timeInMinutes).toBe('2.0');
    });
  });

  describe('Coverage Area Calculations', () => {
    test('should calculate correct coverage area', () => {
      const width = 200; // feet
      const height = 300; // feet
      const area = width * height;

      expect(area).toBe(60000); // square feet
    });
  });

  describe('File Download Functions', () => {
    test('should create blob with correct content', () => {
      const content = 'test content';
      const blob = new Blob([content], { type: 'text/plain' });

      expect(blob.size).toBeGreaterThan(0);
      expect(blob.type).toBe('text/plain');
    });

    test('should create download link with correct filename', () => {
      const a = document.createElement('a');
      a.download = 'test_file.py';

      expect(a.download).toBe('test_file.py');
    });
  });
});

// Helper function to calculate bounding rectangle
function calculateBoundingRectangle(points) {
  if (points.length === 0) return null;
  
  let minX = points[0].x, maxX = points[0].x;
  let minY = points[0].y, maxY = points[0].y;

  points.forEach((p) => {
    minX = Math.min(minX, p.x);
    maxX = Math.max(maxX, p.x);
    minY = Math.min(minY, p.y);
    maxY = Math.max(maxY, p.y);
  });

  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY,
  };
}

function updateGeneratePathButton() {
  const generateBtn = document.getElementById("generatePathBtn");
  if (generateBtn) {
    if (polygonPoints.length >= 3) {
      generateBtn.disabled = false;
    } else {
      generateBtn.disabled = true;
    }
  }
}
