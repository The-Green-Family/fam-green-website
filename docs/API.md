# API Documentation

A comprehensive Three.js-based 3D forest scene with interactive fox character, dynamic lighting, and seasonal themes.

## Table of Contents

- [Animation Loop](#animation-loop)
- [Camera Controls](#camera-controls)
- [Celestial Objects](#celestial-objects)
- [Configuration](#configuration)
- [Fox Character & Animation](#fox-character-animation)
- [Performance & Device Detection](#performance-device-detection)
- [Procedural Generation](#procedural-generation)
- [Scene Setup](#scene-setup)
- [Terrain & Environment](#terrain-environment)
- [Theme & Color Management](#theme-color-management)
- [Tree Generation](#tree-generation)
- [Utility Functions](#utility-functions)
- [Weather & Particle Effects](#weather-particle-effects)
- [Wildlife & Spawning](#wildlife-spawning)

---

## Animation Loop

### animate
**Main animation loop with performance optimizations Handles intro sequence, camera controls, and all animations /**

```javascript
function animate() {
```

*Source: [main.js:4491](src/main.js#L4491)*

---

## Camera Controls

### updateCameraFollow
**Update camera to follow fox from behind /**

```javascript
function updateCameraFollow() {
```

*Source: [main.js:2502](src/main.js#L2502)*

---

## Celestial Objects

### createStars
**Create star field with performance optimization Uses device-specific star counts for optimal performance /**

```javascript
function createStars() {
```

*Source: [main.js:3303](src/main.js#L3303)*

---

### createSun
**Create sun for light theme Positioned at the directional light source location /**

```javascript
function createSun() {
```

**Returns:** `THREE.Group` - Sun object with glow effect

*Source: [main.js:3360](src/main.js#L3360)*

---

### createMoon
**Create moon for dark theme Positioned at the directional light source location /**

```javascript
function createMoon() {
```

**Returns:** `THREE.Group` - Moon object with subtle glow

*Source: [main.js:3404](src/main.js#L3404)*

---

## Configuration

### CONFIG
**Global Configuration Settings Centralized settings for easy adjustment of scene parameters /**

```javascript
const CONFIG = {
```

*Source: [main.js:8](src/main.js#L8)*

---

## Fox Character & Animation

### createFox
**Create and add a low poly fox model to the scene with animations Loads fox model with Survey, Walk, and Run animations /**

```javascript
function createFox() {
```

*Source: [main.js:1886](src/main.js#L1886)*

---

### calculateFoxHeightOffset
**Calculate the fox's height offset based on its bounding box This ensures the fox sits properly on the ground regardless of terrain Accounts for the fox's scale and caches the result /**

```javascript
function calculateFoxHeightOffset() {
```

*Source: [main.js:1954](src/main.js#L1954)*

---

### getFoxHeightOffset
**Get the appropriate fox height offset Uses cached calculated value if available, otherwise falls back to config This avoids recalculating the bounding box every frame /**

```javascript
function getFoxHeightOffset() {
```

*Source: [main.js:1974](src/main.js#L1974)*

---

### setupMobileFoxControls
**Setup mobile touch controls for fox movement Shows a joystick on mobile devices to control rotation + forward speed /**

```javascript
function setupMobileFoxControls() {
```

*Source: [main.js:2023](src/main.js#L2023)*

---

### updateFoxTerrainTilt
**Update fox terrain tilting with smooth transitions Call this every frame to smoothly adjust fox rotation to match terrain This only handles the visual tilting - ground positioning is handled separately /**

```javascript
function updateFoxTerrainTilt() {
```

*Source: [main.js:2146](src/main.js#L2146)*

---

### switchFoxAnimation
**Switch fox animation (Survey, Walk, Run)**

```javascript
function switchFoxAnimation(animationIndex) {
```

**Parameters:**
- `animationIndex` (`number`) - 0: Survey, 1: Walk, 2: Run

*Source: [main.js:2181](src/main.js#L2181)*

---

### shouldFoxSlowDown
**Check if fox is in the walk zone (near boundary) /**

```javascript
function shouldFoxSlowDown() {
```

**Returns:** `boolean` - True if fox should slow down to walking

*Source: [main.js:2211](src/main.js#L2211)*

---

### updateFoxMovement
**Update fox movement and animation based on input /**

```javascript
function updateFoxMovement() {
```

*Source: [main.js:2260](src/main.js#L2260)*

---

### startFoxReturnAnimation
**Start smooth camera transition when fox returns home /**

```javascript
function startFoxReturnAnimation() {
```

*Source: [main.js:2491](src/main.js#L2491)*

---

## Performance & Device Detection

### getDeviceCapabilities
**Device detection utility with enhanced caching and WebGL capability detection Detects device capabilities to optimize performance /**

```javascript
const getDeviceCapabilities = Utils.createCachedFunction(() => {
```

**Returns:** `Object` - Device capability information

*Source: [main.js:653](src/main.js#L653)*

---

### getCachedDeviceCapabilities
**Get cached device capabilities with minimal overhead This reduces repeated calls to getDeviceCapabilities() in performance-critical functions /**

```javascript
function getCachedDeviceCapabilities() {
```

**Returns:** `Object` - Cached device capability information

*Source: [main.js:693](src/main.js#L693)*

---

### cacheDOMElements
**Cache frequently accessed DOM elements for better performance Avoids repeated querySelector calls during animation loop /**

```javascript
function cacheDOMElements() {
```

*Source: [main.js:4399](src/main.js#L4399)*

---

### getCachedCurrentColors
**Get current colors with frame-level caching to avoid repeated calculations in animate loop /**

```javascript
function getCachedCurrentColors() {
```

**Returns:** `Object` - Current theme colors

*Source: [main.js:4441](src/main.js#L4441)*

---

## Procedural Generation

### NoiseUtils
**Shared noise generation utilities for terrain and mountain generation /**

```javascript
const NoiseUtils = {
```

*Source: [main.js:2530](src/main.js#L2530)*

---

## Scene Setup

### createCloud
**Create cloud with optimized geometry for performance**

```javascript
function createCloud(distance, height, size = CONFIG.clouds.defaultSize, opacity = CONFIG.clouds.defaultOpacity) {
```

**Parameters:**
- `distance` (`number`) - Distance from center
- `height` (`number`) - Cloud height
- `size` (`number`) - Cloud size
- `opacity` (`number`) - Cloud opacity

**Returns:** `THREE.Group` - Cloud group

*Source: [main.js:1419](src/main.js#L1419)*

---

### createClouds
**Create cloud system with performance optimization Adjusts cloud count and complexity based on device capabilities /**

```javascript
function createClouds() {
```

*Source: [main.js:1609](src/main.js#L1609)*

---

## Terrain & Environment

### createMountain
**Create procedural mountain terrain with noise-based height generation**

```javascript
function createMountain(distance, colorIndex = 0, scale = 1.0) {
```

**Parameters:**
- `distance` (`number`) - Distance from center
- `colorIndex` (`number`) - Color index for mountain layers
- `scale` (`number`) - Height scale multiplier

**Returns:** `THREE.Mesh` - Mountain terrain mesh

*Source: [main.js:1467](src/main.js#L1467)*

---

### createMountains
**Create mountain system with procedural terrain generation Places mountains as distant backdrop at the horizon edges /**

```javascript
function createMountains() {
```

*Source: [main.js:1655](src/main.js#L1655)*

---

### calculateTerrainSlope
**Calculate terrain slope angles at the fox's position Returns pitch (X-axis rotation) and roll (Z-axis rotation) in radians /**

```javascript
function calculateTerrainSlope(foxX, foxZ, foxRotationY) {
```

*Source: [main.js:1983](src/main.js#L1983)*

---

### TerrainUtils
**Terrain generation utilities inspired by classic procedural noise algorithms /**

```javascript
const TerrainUtils = {
```

*Source: [main.js:2616](src/main.js#L2616)*

---

### MountainUtils
**Mountain Terrain Generation Utilities Specialized noise functions for creating dramatic mountain landscapes /**

```javascript
const MountainUtils = {
```

*Source: [main.js:2658](src/main.js#L2658)*

---

### createGround
**Create procedural terrain with noise-based height generation Inspired by THREE.Terrain approach /**

```javascript
function createGround() {
```

*Source: [main.js:2813](src/main.js#L2813)*

---

### createGrassPatches
**Create grass patches with performance optimization Adjusts grass count based on device capabilities /**

```javascript
function createGrassPatches() {
```

*Source: [main.js:2902](src/main.js#L2902)*

---

### createBoulder
**Create boulder with natural irregular shape**

```javascript
function createBoulder(scale = 1) {
```

**Parameters:**
- `scale` (`number`) - Boulder scale multiplier

**Returns:** `THREE.Mesh` - Boulder mesh

*Source: [main.js:3014](src/main.js#L3014)*

---

### createBoulders
**Create boulder field with collision avoidance /**

```javascript
function createBoulders() {
```

*Source: [main.js:3093](src/main.js#L3093)*

---

### getGroundHeightAt
**Get ground height at specific world coordinates Uses terrain generation function for consistent height calculation**

```javascript
function getGroundHeightAt(x, z) {
```

**Parameters:**
- `x` (`number`) - World X coordinate
- `z` (`number`) - World Z coordinate

**Returns:** `number` - Ground height at coordinates

*Source: [main.js:3176](src/main.js#L3176)*

---

## Theme & Color Management

### getSystemTheme
**Detect system preferred color scheme /**

```javascript
function getSystemTheme() {
```

**Returns:** `string` - 'dark' if system prefers dark mode, otherwise 'light'

*Source: [main.js:963](src/main.js#L963)*

---

### blendColorPalettes
**Blend two color palettes based on a blend factor**

```javascript
function blendColorPalettes(palette1, palette2, blendFactor) {
```

**Parameters:**
- `palette1` (`Object`) - First color palette
- `palette2` (`Object`) - Second color palette
- `blendFactor` (`number`) - Blend factor (0.0 = palette1, 1.0 = palette2)

**Returns:** `Object` - Blended color palette

*Source: [main.js:974](src/main.js#L974)*

---

### getCurrentColors
**Get current color palette based on season and theme with smooth transitions /**

```javascript
function getCurrentColors() {
```

**Returns:** `Object` - Current color palette with seasonal blending

*Source: [main.js:1000](src/main.js#L1000)*

---

### toggleTheme
**Toggle between light, dark, and auto themes Cycles through available theme options and updates UI /**

```javascript
function toggleTheme() {
```

*Source: [main.js:1029](src/main.js#L1029)*

---

### updateThemeToggleIndicator
**Update theme toggle indicator state to reflect manual/auto mode /**

```javascript
function updateThemeToggleIndicator() {
```

*Source: [main.js:1049](src/main.js#L1049)*

---

### updateSceneColors
**Update all scene elements with current color scheme Applies colors to objects, lighting, fog, and UI elements /**

```javascript
function updateSceneColors() {
```

*Source: [main.js:1063](src/main.js#L1063)*

---

### applyMountainColors
**Apply colors to mountain based on what will be the final Y coordinate after rotation**

```javascript
function applyMountainColors(mountain, colors) {
```

**Parameters:**
- `mountain` (`THREE.Mesh`) - The mountain mesh
- `colors` (`Object`) - Color palette

*Source: [main.js:2774](src/main.js#L2774)*

---

### updateBoulderColors
**Update boulder colors when theme changes /**

```javascript
function updateBoulderColors() {
```

*Source: [main.js:3160](src/main.js#L3160)*

---

### updateTerrainColors
**Update terrain colors based on current color scheme**

```javascript
function updateTerrainColors(colors) {
```

**Parameters:**
- `colors` (`Object`) - Current color palette

*Source: [main.js:3253](src/main.js#L3253)*

---

## Tree Generation

### createConnectedFoliage
**Create connected low-poly foliage with optimized geometry**

```javascript
function createConnectedFoliage(radius = 15, complexity = 1) {
```

**Parameters:**
- `radius` (`number`) - Foliage radius
- `complexity` (`number`) - Geometry complexity level

**Returns:** `THREE.Mesh` - Foliage mesh

*Source: [main.js:1197](src/main.js#L1197)*

---

### createUnifiedTree
**Create a tree with specified parameters - CLEAN UNIFIED VERSION**

```javascript
function createUnifiedTree(options = {}) {
```

**Parameters:**
- `options` (`Object`) - Tree configuration
- `options` (`number`) - .trunkHeight - Height of the trunk
- `options` (`number`) - .trunkRadius - Radius of the trunk
- `options` (`number`) - .foliageRadius - Radius of foliage
- `options` (`boolean`) - .isFocal - Whether this is the focal tree
- `options` (`number`) - .complexity - Geometry complexity level

**Returns:** `THREE.Group` - Complete tree positioned with base at Y=0

*Source: [main.js:1247](src/main.js#L1247)*

---

### createFocalTree
**Create the focal tree using enhanced parameters /**

```javascript
function createFocalTree() {
```

*Source: [main.js:1352](src/main.js#L1352)*

---

### createTree
**Create a tree with backwards-compatible interface /**

```javascript
function createTree(scale = 1, complexity = 1) {
```

*Source: [main.js:1378](src/main.js#L1378)*

---

### getOptimalTreeCount
**Get optimal tree count based on device capabilities Uses CONFIG settings to adjust for performance /**

```javascript
function getOptimalTreeCount() {
```

**Returns:** `number` - Optimal number of trees for current device

*Source: [main.js:1397](src/main.js#L1397)*

---

### createForest
**Create forest with optimized tree placement Uses device-specific tree counts and proper spacing /**

```javascript
function createForest() {
```

*Source: [main.js:1754](src/main.js#L1754)*

---

### enableTreeShadows
**Utility to ensure all meshes in a tree group cast and receive shadows**

```javascript
function enableTreeShadows(treeGroup) {
```

**Parameters:**
- `treeGroup` (`THREE.Object3D`) - 

*Source: [main.js:1840](src/main.js#L1840)*

---

### spawnBirdFromTree
**Spawn birds from a clicked tree**

```javascript
function spawnBirdFromTree(tree) {
```

**Parameters:**
- `tree` (`THREE.Group`) - Tree object to spawn birds from

*Source: [main.js:4339](src/main.js#L4339)*

---

### calculateFocalTreeCameraPosition
**Calculate optimal camera position for focal tree view Extracted to avoid code duplication in animation functions /**

```javascript
function calculateFocalTreeCameraPosition() {
```

**Returns:** `Object` - Camera position and target coordinates

*Source: [main.js:4460](src/main.js#L4460)*

---

## Utility Functions

### Utils
**Utility Functions for Common Operations Centralized functions to reduce code duplication /**

```javascript
const Utils = {
```

*Source: [main.js:494](src/main.js#L494)*

---

### unknown
**Create cached function that expires after specified time**

```javascript
createCachedFunction: (fn, expireTime = CONFIG.animation.cacheExpireTime) => {
```

**Parameters:**
- `fn` (`Function`) - Function to cache
- `expireTime` (`number`) - Cache expiration time in milliseconds

**Returns:** `Function` - Cached version of function

*Source: [main.js:524](src/main.js#L524)*

---

### getSeasonalInfo
**Get comprehensive seasonal information with caching /**

```javascript
const getSeasonalInfo = Utils.createCachedFunction(() => {
```

**Returns:** `Object` - {currentSeason, nextSeason, blendFactor}

*Source: [main.js:594](src/main.js#L594)*

---

### getCurrentSeason
**Get current season name (for backwards compatibility and discrete season logic) /**

```javascript
const getCurrentSeason = () => getSeasonalInfo().currentSeason;
```

**Returns:** `string` - Current season (spring, summer, autumn, winter)

*Source: [main.js:646](src/main.js#L646)*

---

### unknown
**2D Perlin-style noise function that generates smooth, random-like values.**

```javascript
noise2D(x, y, scale = 1) {
```

**Parameters:**
- `x` (`number`) - X coordinate
- `y` (`number`) - Y coordinate
- `scale` (`number`) - Scale multiplier for coordinates

**Returns:** `number` - Noise value between 0 and 1

*Source: [main.js:2566](src/main.js#L2566)*

---

### unknown
**Multi-octave layered noise (Fractional Brownian Motion)**

```javascript
layeredNoise(x, y, octaves = 4, persistence = 0.5) {
```

**Parameters:**
- `x` (`number`) - X coordinate
- `y` (`number`) - Y coordinate
- `octaves` (`number`) - Number of noise layers
- `persistence` (`number`) - Amplitude reduction per octave

**Returns:** `number` - Layered noise value between 0 and 1

*Source: [main.js:2596](src/main.js#L2596)*

---

### unknown
**Generate mountain height using ridge noise for dramatic peaks**

```javascript
generateMountainHeight(x, z, scale = 1.0) {
```

**Parameters:**
- `x` (`number`) - World X coordinate
- `z` (`number`) - World Z coordinate
- `scale` (`number`) - Height scale multiplier

**Returns:** `number` - Mountain height

*Source: [main.js:2666](src/main.js#L2666)*

---

## Weather & Particle Effects

### spawnSnowfall
**Spawns heavy snowfall particles across the entire scene area Called every frame during winter season for continuous snow effect /**

```javascript
function spawnSnowfall() {
```

*Source: [main.js:3776](src/main.js#L3776)*

---

### spawnRainfall
**Spawns rainfall particles when spring weather conditions are met Creates moderate to heavy rain effect across the scene /**

```javascript
function spawnRainfall() {
```

*Source: [main.js:3814](src/main.js#L3814)*

---

### spawnParticle
**Main particle spawning coordinator Routes to appropriate weather or leaf spawning based on current season /**

```javascript
function spawnParticle() {
```

*Source: [main.js:3898](src/main.js#L3898)*

---

## Wildlife & Spawning

### spawnFallingLeaves
**Spawns falling leaf particles from trees based on seasonal intensity**

```javascript
function spawnFallingLeaves(season) {
```

**Parameters:**
- `season` (`string`) - Current season affecting spawn rate

*Source: [main.js:3852](src/main.js#L3852)*

---

### updateBirds
**Update bird physics and animation Uses CONFIG values for realistic flight behavior /**

```javascript
function updateBirds() {
```

*Source: [main.js:3928](src/main.js#L3928)*

---

