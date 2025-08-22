# Documentation Directory

This directory contains auto-generated documentation for the fam.green website project.

## Files

- **[API.md](API.md)** - Comprehensive API documentation extracted from JSDoc comments in the source code

## Generation

The documentation is automatically generated during the build process using `generate-docs.js`.

### Manual Generation
```bash
npm run docs
```

### Watch Mode (for development)
```bash
npm run docs:watch
```

### Build Integration
Documentation is automatically generated when running:
```bash
npm run build
```

## Source Information

The API documentation is extracted from JSDoc comments in `src/main.js` and organized by functionality:

- **Performance & Device Detection** - Device capability detection and caching
- **Theme & Color Management** - Seasonal theming and color schemes  
- **Scene Setup** - Three.js scene initialization and configuration
- **Tree Generation** - Procedural tree and forest creation
- **Fox Character & Animation** - Interactive fox model and movement
- **Terrain & Environment** - Ground, mountains, grass, and boulders
- **Weather & Particle Effects** - Seasonal weather and particle systems
- **Camera Controls** - Orbit controls and camera following
- **Animation Loop** - Main render loop and performance optimizations

The documentation includes function signatures, parameters, return types, and source code line references.