# fam.green Website

The Green Family's interactive website featuring a 3D fox in a procedurally generated landscape.

## 🌟 Features

- Interactive 3D fox model with animations
- Procedurally generated terrain with trees, grass, boulders, and particles
- WAD controls for fox movement with collision detection
- Mouse/touch controls for camera
- Light/dark theme toggle
- Responsive design for mobile and desktop

## 🏗️ Project Structure

```
├── src/                    # Source files
│   ├── index.html         # Main HTML file
│   ├── main.css           # Stylesheet
│   └── main.js            # JavaScript application
├── assets/                # Static assets
│   └── glb/
│       └── fox.glb        # 3D fox model
├── dist/                  # Built production files (generated)
├── .github/workflows/     # GitHub Actions
├── build.sh              # Local build script
└── CNAME                  # Custom domain config
```

## 🚀 Development

### Prerequisites

Install dependencies:
```bash
npm install
```

### Local Development

For development, serve source files directly:
```bash
npm run dev
# Serves src/ directory at http://localhost:8000
```

**Note:** A symlink `src/assets` → `../assets` allows the development server to access assets correctly.

### Local Build & Testing

Build minified production files:
```bash
npm run build
# or directly: ./build.sh
```

This creates a `dist/` directory with:
- Minified HTML (removes whitespace, comments)
- Minified CSS (removes whitespace, optimizes properties)  
- Minified JavaScript (removes console.log, mangles variable names)
- Copied assets and LICENSE file

**Test the production build:**
```bash
npm run serve
# Serves dist/ directory at http://localhost:8000
```

**Important:** Always test your production build with `npm run serve` before deploying to ensure minified files work correctly.

### Build Process Details

The build process performs these optimizations:

**HTML Minification:**
- Removes whitespace and comments
- Removes optional tags and redundant attributes
- Minifies inline CSS and JavaScript
- ~15-25% size reduction

**CSS Minification:**
- Removes whitespace and comments
- Optimizes property values and shorthand
- ~20-30% size reduction

**JavaScript Minification:**
- Removes console.log and debugger statements
- Mangles variable names for smaller size
- Compresses code structure
- ~30-50% size reduction

## 🔄 Development Workflow

This project uses Gitflow with automated version management:

### Branch Structure
- `main`: Production branch (tagged releases)
- `develop`: Development branch (latest features)
- `feature/*`: Feature branches (created from develop)

### Workflow Process
1. Create feature branches from `develop`
2. Merge completed features into `develop`
3. Update `CHANGELOG.md`:
   - Move items from `[Unreleased]` section to a new version section
   - Use categories: `Added`, `Changed`, `Fixed`, `Deprecated`, `Removed`, `Security`
   - Add release date in format `[X.Y.Z] - YYYY-MM-DD`
4. Create PR from `develop` → `main`
5. When PR is merged, automation triggers:
   - Tags `main` with current version (e.g., `v1.0.0`)
   - Creates GitHub Release using CHANGELOG.md content
   - Merges `main` back into `develop`
   - Increments version in `package.json`
   - Creates PR for version bump review

### Version Management
- Versions follow [Semantic Versioning](https://semver.org/) (MAJOR.MINOR.PATCH)
- Patch versions auto-increment after each release
- Current version defined in `package.json`
- Release notes maintained in `CHANGELOG.md` following [Keep a Changelog](https://keepachangelog.com/)

## 🌍 Deployment

### GitHub Pages

The site automatically deploys to GitHub Pages when you push to the `main` branch.

**Setup:**
1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"
3. The workflow will build and deploy automatically

**Custom Domain:**
- Site deploys to `https://www.fam.green`
- CNAME file configures the custom domain
- HTTPS is automatically enabled

### Manual Deployment

You can deploy the built files to any static hosting provider:
1. Run `./build.sh` to create the `dist/` folder
2. Upload the contents of `dist/` to your hosting provider

## 🎮 Controls

- **Mouse/Touch**: Drag to rotate camera view
- **WAD Keys**: Guide the fox around the landscape (W=forward, A=turn left, D=turn right)
- **Theme Button**: Toggle between light and dark themes

## 📱 Browser Support

- Modern browsers with WebGL support
- Three.js r128 compatibility
- Mobile responsive design
- Touch controls for mobile devices

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

### Asset Credits
- **Fox Model**: CC0 by PixelMannen, rigged by @tomkranis (CC-BY 4.0)
- **Three.js**: MIT License
