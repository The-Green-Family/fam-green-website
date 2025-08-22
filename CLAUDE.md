# The Green Family Website - Claude Code Instructions

## Project Overview
Interactive 3D website featuring a fox in a procedurally generated landscape using Three.js. The main application is a large single-file JavaScript implementation with WebGL rendering.

## Development Environment

### Commands to Run After Changes
Always run these commands to ensure code quality:
```bash
npm run build    # Build and minify all assets (includes docs generation)
npm run serve    # Test the production build locally
npm run docs     # Generate API documentation manually
```

### Development Workflow
- **Main branch**: `main` (production, tagged releases)
- **Development branch**: `develop` (latest features)
- **Feature branches**: `feature/*` (created from develop)

### Key Scripts
- `npm run dev` - Serve src/ at http://localhost:8000 for development
- `npm run build` - Create minified production build in dist/
- `npm run serve` - Serve dist/ at http://localhost:8000 for testing

## Code Structure & Conventions

### Core Files
- `src/main.js` - Single large file (~47k tokens) containing all JavaScript
- `src/main.css` - Stylesheet with light/dark themes
- `src/index.html` - HTML structure
- `assets/glb/fox.glb` - 3D fox model

### Key Functions & Performance Areas
- `getDeviceCapabilities()` - Device detection for performance optimization
- Three.js scene management and rendering
- WASD movement controls with collision detection
- Procedural terrain generation
- Mobile/touch responsive controls

### Performance Considerations
- Large single JavaScript file requires careful optimization
- WebGL rendering needs device capability detection
- Mobile performance is critical
- Build process includes aggressive minification

### Build Process
The build script performs:
- HTML minification (15-25% reduction)
- CSS minification (20-30% reduction) 
- JavaScript minification with console.log removal (30-50% reduction)
- Asset copying and optimization

## Deployment
- Auto-deploys to GitHub Pages on `main` branch pushes
- Custom domain: https://www.fam.green
- CNAME file configures domain routing

## Performance Optimization Guidelines
- **Frame rate limiting**: Only applied to very low-end devices (mobile + small screen + low DPI)
- **Device capability caching**: Enhanced detection with WebGL capabilities and 5-minute cache duration
- **Animation loop optimization**: Frame-level caching for colors and seasons
- **DOM element caching**: Avoids repeated querySelector calls
- **Geometry optimization**: Reduced complexity for low-end devices across all systems

## Documentation
- **Auto-generated API docs**: `docs/API.md` contains comprehensive function reference
- **Manual generation**: `npm run docs` - extracts JSDoc comments and generates markdown
- **Build integration**: Documentation is automatically updated during `npm run build`

## Testing
Always test production builds with `npm run serve` before deployment to ensure minified files work correctly.