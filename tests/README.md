# Unit Tests for Wings of Discovery

This directory contains unit tests for the Wings of Discovery drone path planner application.

## Test Coverage

The test suite covers:

- **Bounding Rectangle Calculations**: Tests for calculating the minimum bounding rectangle around polygon points
- **Path Generation**: Tests for generating flight paths with proper sector spacing
- **Point Management**: Tests for adding, removing, and detecting points on the canvas
- **Flight Time Calculations**: Tests for calculating estimated flight time based on path length and drone speed
- **Coverage Area Calculations**: Tests for calculating the total area covered by the flight path
- **Code Generation**: Tests for generating valid Tello Python and DroneBlocks XML code structures
- **File Download Functions**: Tests for creating downloadable files with correct content and filenames

## Running Tests

### Option 1: Browser-Based Testing (No Installation Required)

Simply open `tests/test-runner.html` in your web browser. This will run all tests and display the results directly in the browser.

**Advantages:**
- No npm or Node.js installation required
- Instant feedback
- Works anywhere
- Great for quick testing

### Option 2: Jest (Requires Node.js/npm)

#### Install Dependencies

```bash
npm install
```

#### Run All Tests

```bash
npm test
```

#### Run Tests in Watch Mode

```bash
npm run test:watch
```

#### Run Tests with Coverage Report

```bash
npm run test:coverage
```

## Test Framework

The tests use [Jest](https://jestjs.io/) with jsdom environment for DOM manipulation testing.

## Test Structure

- `tests/plan-path.test.js` - Main test suite for the drone path planner functionality

## Adding New Tests

When adding new features to the plan-path.html file, please add corresponding tests:

1. Create a new `describe` block for the feature
2. Write individual `test` cases for each function or behavior
3. Use `beforeEach` to set up any required DOM elements or state
4. Run tests to ensure they pass before committing

## Coverage Goals

- Aim for >80% code coverage
- All critical path generation logic should be tested
- All user interaction functions should have test coverage
