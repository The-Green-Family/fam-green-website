# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- CHANGELOG.md following Keep a Changelog format for manual release notes

### Changed
- Upgraded frontend scripts to use Three.js r181 via import maps for module loading
- Build pipeline now minifies ES modules to keep dist/ deploy-ready
- Theme toggle button now displays an “A” badge when automatic mode is active for better clarity
- Gitflow automation workflow now reads release notes from CHANGELOG.md instead of auto-generating from PRs
- Updated CLAUDE.md with documentation workflow and changelog management guidelines

## [1.0.4] - 2025-08-25

### Added
- Mobile fox controls with realistic movement and touch support

### Changed
- Adjusted seasonal transitions to match real-world timing (start later in season)

## [1.0.3] - 2025-08-22

### Added
- CLAUDE.md project documentation for development guidelines
- Enhanced performance optimizations for low-end devices

### Changed
- Improved device capability detection with WebGL capabilities
- Optimized animation loop with frame-level caching
- Enhanced geometry optimization across all systems

### Fixed
- DOM element caching to avoid repeated querySelector calls
- Frame rate limiting applied more selectively

## [1.0.2] - 2025-08-22

### Changed
- Improved changelog filtering in release automation

### Fixed
- GitHub Actions workflow to remove noise and duplicates from release notes

## [1.0.1] - 2025-08-22

### Fixed
- Gitflow automation: Tag handling for both annotated and lightweight tags
- GitHub API search query for proper PR retrieval

## [1.0.0] - 2025-08-22

### Added
- Initial release of The Green Family Website
- Interactive 3D fox in procedurally generated landscape
- Three.js WebGL rendering
- WASD movement controls with collision detection
- Mobile/touch responsive controls
- Light/dark theme support
- Automated build and deployment pipeline

[Unreleased]: https://github.com/The-Green-Family/fam-green-website/compare/v1.0.4...HEAD
[1.0.4]: https://github.com/The-Green-Family/fam-green-website/compare/v1.0.3...v1.0.4
[1.0.3]: https://github.com/The-Green-Family/fam-green-website/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/The-Green-Family/fam-green-website/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/The-Green-Family/fam-green-website/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/The-Green-Family/fam-green-website/releases/tag/v1.0.0
