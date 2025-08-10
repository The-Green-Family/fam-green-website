/**
 * Global Configuration Settings
 * Centralized settings for easy adjustment of scene parameters
 */
const CONFIG = {
    // Performance & Device Settings
    performance: {
        lowEndTreeCountMin: 10,
        lowEndTreeCountMax: 20,
        highEndTreeCountMin: 20,
        highEndTreeCountMax: 40,
        lowEndCloudCount: [4, 8],
        highEndCloudCount: [8, 15],
        lowEndStarCount: 200,
        highEndStarCount: 400,
        lowEndGrassCount: 80,
        highEndGrassCount: 150,
        lowEndGeometryComplexity: 1, // For icosahedron complexity
        highEndGeometryComplexity: 2
    },

    // Scene Dimensions & Limits
    world: {
        cameraMinDistance: 80,
        cameraMaxDistance: 500,
        groundSize: 2200,
        groundSegments: 20,
        treeMinSpacing: 30,
        safeStartDistance: 200,
        groundHeight: -15,
        minCameraHeightAboveGround: 15
    },

    // Fox Movement Settings
    fox: {
        boundaryMargin: 0.75,      // How much of ground size fox can use
        walkZoneMargin: 0.9,       // Percentage of boundary where fox starts walking (0.9 = 90% of boundary)
        turnMovementAmount: 0.3,   // Forward movement when only turning (A/D keys)
        autoReturnTurnMultiplier: 1.5, // Speed multiplier for auto-return turning
        animationFadeTime: 0.3,    // Animation fade in/out duration
        runAnimationSpeed: 1.5,    // Speed multiplier for run animation (1.0 = normal speed)
        treeCollisionRadius: 8,    // Collision radius around trees
        scale: 0.08,               // Fox model scale
        heightOffset: 1.2,         // Height offset above ground to prevent sinking/hovering
        initialPosition: { x: 25, z: 0 },  // Initial fox position (x, z coordinates)

        // Movement configuration
        movement: {
            speed: 0.3,            // Walk speed
            runSpeed: 0.8,         // Run speed
            walkThreshold: 2000,   // ms before switching to run
            turnSpeed: 0.03        // Turning speed for A/D keys
        },

        // Camera following configuration
        cameraFollow: {
            distance: 15,          // Distance behind fox
            height: 15,            // Height above fox
            smoothing: 0.05        // Camera smoothing factor
        },

        // Terrain following configuration
        terrainTilt: {
            enabled: true,         // Enable terrain-based fox tilting
            sampleDistanceMultiplier: 6.25, // Multiplier relative to fox scale (0.5 / 0.08 = 6.25)
            maxTiltAngle: Math.PI / 12, // Maximum tilt angle (15 degrees)
            smoothing: 0.03        // Smoothing factor for tilt transitions
        }
    },

    // Terrain generation parameters inspired by THREE.Terrain
    terrain: {
        heightVariation: 60,        // Maximum height variation for more pronounced hills
        noiseOctaves: 5,           // More noise layers for complexity
        noisePersistence: 0.55,     // Amplitude reduction per octave
        primaryScale: 0.02,        // Increased primary scale for more frequent hills
        secondaryScale: 0.05,      // Increased secondary scale for more variation
        detailScale: 0.1,          // Detail noise scale for finer texture
        elevationColorThresholds: [0.3, 0.7], // Color transition points
        lowAreaIntensity: 0.7,     // Color intensity for low areas
        highAreaBlend: 0.3,         // Blend amount for high areas
        focalHill: {
            radius: 150, // The radius of the hill
            height: 20   // The maximum height of the hill
        }
    },

    // Animation & Timing
    animation: {
        introRotationDuration: 3000,
        foxReturnDuration: 2500,    // Fox return camera transition duration
        birdFlightDuration: 15, // seconds
        particleSpawnChance: 0.6,
        cacheExpireTime: 3600000, // 1 hour in milliseconds
        frameTime: 0.016 // approximate 60fps
    },

    // Interaction Settings
    interactions: {
        cameraTreeSafeDistance: 25,    // Safe distance when camera is near trees
        cameraTreePushAmount: 5,       // Extra push buffer when too close to trees
        focalTreePosition: { x: 0.5, z: 0.5 }, // Focal tree position
        treeSittingOffset: -1.5        // How much trees sink into ground for natural look
    },

    // Tree Properties
    trees: {
        trunkHeightRange: [40, 70],
        trunkRadiusRange: [2, 4],
        foliageRadiusRange: [12, 20],
        supportClustersRange: [3, 5],
        scaleRange: [0.7, 1.0],
        mainTreeScale: 1.2,
        focalTree: {
            scale: 1.3,
            trunkHeightMultiplier: 1.2,
            trunkRadiusMultiplier: 1.3,
            foliageRadiusMultiplier: 1.2,
            supportClustersMin: 5,
            supportClustersMax: 7,
            complexityBonus: 1 // Extra geometry complexity for focal tree
        }
    },

    // Bird Properties
    birds: {
        spawnCountRange: [2, 5],
        spawnDelayMs: 150,
        maxFlightDistance: 1000,
        wingFlapFrequency: 8,
        gravityForce: 0.015,
        liftForce: 0.02
    },

    // Mountain Properties - Procedural terrain-based generation
    mountains: {
        // Terrain generation parameters
        heightVariation: 400,          // Maximum height variation for dramatic peaks
        baseHeight: 50,                // Base mountain height above ground
        noiseOctaves: 4,               // Fewer noise layers for simpler mountains
        noisePersistence: 0.5,         // Amplitude reduction per octave
        primaryScale: 0.004,           // Primary noise scale for main mountain structure
        secondaryScale: 0.01,          // Secondary scale for detail variation
        ridgeStrength: 1.2,            // Strength of ridge generation
        detailOctaves: 4,              // Octaves for secondary detail noise
        detailPersistence: 0.5,        // Persistence for detail noise
        detailMixing: 0.3,             // How much detail noise affects final height
        ridgeSharpness: 2.0,           // Sharpness of mountain ridges (higher = sharper)
        snowLineHeight: 0.75,          // Height threshold for snow (0-1)
        snowBlendRange: 0.15,          // Height range for snow blending

        // Mesh generation
        width: 2400,                   // Mountain range width (wider than terrain)  
        depth: 800,                    // Much deeper mountains to create gradual buildup
        segments: 32,                  // Much lower resolution for simpler shapes
        lowEndSegments: 16,            // Lower resolution for mobile

        // Positioning and layers
        positionY: 0,                  // Ground level positioning
        layers: [
            { distance: 1500, opacity: 0.7, colorIndex: 0, scale: 1.0 }   // Move back from terrain edge
        ],
        segmentCounts: {
            lowEnd: 4,
            highEnd: 8
        }
    },

    // Cloud Layer Configuration
    clouds: {
        layers: [
            { height: 480, distance: 600, size: 80, opacity: 0.4 },
            { height: 520, distance: 900, size: 110, opacity: 0.3 },
            { height: 580, distance: 1200, size: 140, opacity: 0.2 }
        ],
        defaultSize: 50,
        defaultOpacity: 0.6,
        heightVariation: 30,
        positionMultiplierRange: [0.7, 1.4]
    },

    // Grass Configuration
    grass: {
        spawnDistanceRange: [50, 850],
        minDistanceFromTrees: 25,
        heightRange: [0.5, 4],
        baseWidthRange: [0.3, 0.6],
        undergroundRange: [3, 6],
        bladesPerPatchRange: [3, 8],
        patchSpreadRange: [-3, 3],
        swayIntensityRange: [0.15, 0.25],
        swaySpeedRange: [0.8, 1.2]
    },

    // Particle System Configuration
    particles: {
        spawnPositionRange: [-20, 20],
        heightRange: [20, 50],
        fallBoundary: -20,
        worldBoundary: 500
    },

    // Hot Air Balloon Configuration
    hotAirBalloon: {
        balloonRadius: 35,
        balloonHeight: 45,
        basketWidth: 8,
        basketHeight: 5,
        distance: 800,
        height: 320,
        speed: 0.2,
        floatAmplitude: 8,
        colors: [0xff4444, 0x44ff44, 0x4444ff, 0xffff44, 0xff44ff, 0x44ffff, 0xff8844, 0x88ff44]
    },

    // Weather Effects Configuration
    weather: {
        snow: {
            sizeRange: [0.3, 0.8],
            opacityRange: [0.7, 1.0],
            velocityRange: { x: [-0.2, 0.2], y: [-0.3, -0.1], z: [-0.2, 0.2] },
            rotationRange: [-0.05, 0.05],
            spawnRateRange: [0.5, 1.5]
        },
        rain: {
            lengthRange: [2, 4],
            opacityRange: [0.6, 0.9],
            velocityRange: { x: [-0.3, 0.3], y: [-2, -1.5], z: [-0.3, 0.3] },
            mixChance: 0.6,
            color: 0x87ceeb,
            spawnRateRange: [4, 6] // Moderate rainfall particles per frame
        },
        autumn: {
            spawnChance: 0.98, // Nearly 100% for heavy autumn effect
            spawnRateRange: [2, 4] // Increased leaf fall particles per frame
        },
        spawnHeight: { min: 80, max: 400 } // Much higher for camera zoom-out
    },

    // Star Field Configuration
    stars: {
        radiusRange: [1600, 2000],
        heightOffset: 100,
        sizePoints: 4,
        brightnessRange: [0.6, 4.5],
        blueTint: 0.9,
        twinkleIntensity: 0.4,
        twinkleSpeedBase: 1.5,
        twinkleSpeedVariation: 0.5
    },

    // Celestial Objects Configuration
    celestial: {
        sun: {
            radius: 40,
            distance: 1300,
            color: 0xffff99,
            emissiveIntensity: 0.8,
            glowColor: 0xffaa00,
            glowIntensity: 0.3
        },
        moon: {
            radius: 35,
            distance: 1200,
            color: 0xe6e6e6,
            emissiveIntensity: 0.4,
            glowColor: 0xccccff,
            glowIntensity: 0.2
        }
    },

    // Tree Positioning
    treePositioning: {
        randomAreaRange: [-1000, 1000],
        minDistanceFromCenter: 80,
        maxPlacementAttempts: 20,
        fallbackCircleDistanceRange: [120, 180]
    },

    // Scene Lighting & Rendering
    lighting: {
        directionalLightIntensity: 0.8,
        directionalLightPosition: [50, 50, 50],
        ambientLightIntensity: 0.4,
        shadowMapSize: 2048,
        shadowCameraNear: 0.5,
        shadowCameraFar: 500,
        shadowCameraBounds: 250
    },

    // Camera & Scene Setup
    scene: {
        cameraFov: 60,
        cameraNear: 0.1,
        cameraFar: 1700,
        cameraTargetHeight: 40,
        cameraInitialPosition: [0, 100, 200],
        fogNear: 850,
        fogFar: 1900,
        introBaseHeight: 100,
        introHeightVariation: 20
    }
};

// Global variables
let scene, camera, renderer, container, controls;
let trees = [];
let mountains = [];
let clouds = [];
let birds = [];
let grassPatches = [];
let stars = [];
let sun, moon, hotAirBalloon;
let floor;
let mouseX = 0, mouseY = 0;
let windowHalfX, windowHalfY;
let flyingParticles = [];
let waitingParticles = [];
let currentTheme = 'auto';
let introRotation = {
    active: true,
    startTime: 0,
    duration: CONFIG.animation.introRotationDuration,
    direction: Math.random() > 0.5 ? 1 : -1 // Random clockwise or counterclockwise
};

// Fox return "outro" animation - smooth camera transition to focus on focal tree
let foxReturnAnimation = {
    active: false,
    startTime: 0,
    duration: CONFIG.animation.foxReturnDuration,
    startCameraPos: null,
    startCameraTarget: null,
    skipControlsFrames: 0 // Skip controls updates for N frames after animation ends
};

// Color palettes
const Colors = {
    spring: {
        light: {
            bg: 0xf0fff0, trunk: 0x8b4513, foliage: 0x228b22,
            leaves: [0x32cd32, 0x7cfc00, 0x00ff7f], ground: 0x9acd32,
            mountains: [0x9acd32, 0xadff2f, 0xc0ff8c],
            clouds: 0xf8fff8, textColor: 0x1a1a1a
        },
        dark: {
            bg: 0x0a1a0a, trunk: 0x654321, foliage: 0x1a5a1a,
            leaves: [0x228b22, 0x4a7c4a, 0x2f5f2f], ground: 0x4a6b4a,
            mountains: [0x4a6b4a, 0x5a7b5a, 0x6a8b6a],
            clouds: 0x3a4a3a, textColor: 0xffffff
        }
    },
    summer: {
        light: {
            bg: 0x87ceeb, trunk: 0x8b4513, foliage: 0x006400,
            leaves: [0x228b22, 0x32cd32, 0x008000], ground: 0xa0b562,
            mountains: [0x6b8e23, 0x8fbc8f, 0x9acd32],
            clouds: 0xffffff, textColor: 0x1a1a1a
        },
        dark: {
            bg: 0x1a2a3a, trunk: 0x654321, foliage: 0x003200,
            leaves: [0x1a5b1a, 0x228b22, 0x004000], ground: 0x6b7b32,
            mountains: [0x3a4a1a, 0x5a6a4a, 0x6a7a2a],
            clouds: 0x2a3a4a, textColor: 0xffffff
        }
    },
    autumn: {
        light: {
            bg: 0x87ceeb, trunk: 0x8b4513, foliage: 0xb22222,
            leaves: [0xff4500, 0xff8c00, 0xffd700], ground: 0xd2691e,
            mountains: [0xcd853f, 0xdaa520, 0xf4a460],
            clouds: 0xffe4b5, textColor: 0x1a1a1a
        },
        dark: {
            bg: 0x1a2a3a, trunk: 0x654321, foliage: 0x7a1111,
            leaves: [0xcc3300, 0xcc5500, 0xcc8800], ground: 0x8b4513,
            mountains: [0x8b5a2f, 0x9a6520, 0xa67530],
            clouds: 0x4a3a2a, textColor: 0xffffff
        }
    },
    winter: {
        light: {
            bg: 0xb0e0e6, trunk: 0x2f2f2f, foliage: 0x4a5a4a,
            leaves: [0xc0d0d0, 0xe0f0f0, 0xf0f8ff], ground: 0xadd8e6,
            mountains: [0xd3d3d3, 0xe6e6fa, 0xf0f8ff],
            clouds: 0xffffff, textColor: 0x1a1a1a
        },
        dark: {
            bg: 0x1a2030, trunk: 0x1a1a1a, foliage: 0x2a3a2a,
            leaves: [0x6a7a7a, 0x8a9a9a, 0xa0b0b0], ground: 0x4a5a6a,
            mountains: [0x6a6a6a, 0x7a7a8a, 0x8a8a9a],
            clouds: 0x3a4a5a, textColor: 0xffffff
        }
    }
};

/**
 * Utility Functions for Common Operations
 * Centralized functions to reduce code duplication
 */
const Utils = {
    /**
     * Generate random number within range (inclusive)
     * @param {number} min - Minimum value
     * @param {number} max - Maximum value
     * @returns {number} Random number between min and max
     */
    randRange: (min, max) => Math.random() * (max - min) + min,

    /**
     * Generate random integer within range (inclusive)
     * @param {number} min - Minimum integer
     * @param {number} max - Maximum integer
     * @returns {number} Random integer between min and max
     */
    randInt: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,

    /**
     * Get random element from array
     * @param {Array} arr - Array to pick from
     * @returns {*} Random element from array
     */
    getRandomColor: (arr) => arr[Math.floor(Math.random() * arr.length)],

    /**
     * Create cached function that expires after specified time
     * @param {Function} fn - Function to cache
     * @param {number} expireTime - Cache expiration time in milliseconds
     * @returns {Function} Cached version of function
     */
    createCachedFunction: (fn, expireTime = CONFIG.animation.cacheExpireTime) => {
        let cache = null;
        let timestamp = null;

        return (...args) => {
            const now = Date.now();
            if (!cache || !timestamp || (now - timestamp > expireTime)) {
                cache = fn(...args);
                timestamp = now;
            }
            return cache;
        };
    },

    /**
     * Interpolate between two colors
     * @param {number} color1 - First color (hex)
     * @param {number} color2 - Second color (hex)
     * @param {number} factor - Interpolation factor (0-1)
     * @returns {number} Interpolated color
     */
    interpolateColor: (color1, color2, factor) => {
        const r1 = (color1 >> 16) & 255;
        const g1 = (color1 >> 8) & 255;
        const b1 = color1 & 255;

        const r2 = (color2 >> 16) & 255;
        const g2 = (color2 >> 8) & 255;
        const b2 = color2 & 255;

        const r = Math.round(r1 + (r2 - r1) * factor);
        const g = Math.round(g1 + (g2 - g1) * factor);
        const b = Math.round(b1 + (b2 - b1) * factor);

        return (r << 16) | (g << 8) | b;
    },

    /**
     * Create geometry with reduced complexity for low-end devices
     * @param {string} type - Geometry type
     * @param {...any} params - Geometry parameters
     * @returns {THREE.Geometry} Optimized geometry
     */
    createOptimizedGeometry: (type, ...params) => {
        const deviceCaps = getDeviceCapabilities();

        switch (type) {
            case 'sphere':
                const [radius, widthSeg = 8, heightSeg = 6] = params;
                return new THREE.SphereGeometry(
                    radius,
                    deviceCaps.isLowEnd ? Math.max(4, widthSeg / 2) : widthSeg,
                    deviceCaps.isLowEnd ? Math.max(3, heightSeg / 2) : heightSeg
                );
            case 'icosahedron':
                const [icoRadius, detail] = params;
                const complexity = deviceCaps.isLowEnd ?
                    CONFIG.performance.lowEndGeometryComplexity :
                    CONFIG.performance.highEndGeometryComplexity;
                return new THREE.IcosahedronGeometry(icoRadius, Math.min(detail || complexity, complexity));
            default:
                throw new Error(`Unknown geometry type: ${type}`);
        }
    }
};

/**
 * Get current season based on date with caching
 * @returns {string} Current season (spring, summer, autumn, winter)
 */
const getCurrentSeason = Utils.createCachedFunction(() => {
    const now = new Date();
    const month = now.getMonth(); // 0-11

    // Northern hemisphere seasons
    if (month >= 2 && month <= 4) return 'spring';     // Mar-May
    if (month >= 5 && month <= 7) return 'summer';     // Jun-Aug
    if (month >= 8 && month <= 10) return 'autumn';    // Sep-Nov
    return 'winter';                                   // Dec-Feb
});

/**
 * Device detection utility with caching
 * Detects device capabilities to optimize performance
 * @returns {Object} Device capability information
 */
const getDeviceCapabilities = Utils.createCachedFunction(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isSmallScreen = window.innerWidth < 1024;
    const isLowEnd = isMobile && isSmallScreen;

    return { isMobile, isSmallScreen, isLowEnd };
}, 60000); // Cache for 1 minute (in case window is resized)

/**
 * OrbitControls implementation for camera movement
 * Provides smooth camera controls with collision detection
 */
class OrbitControls {
    /**
     * Create orbit controls for camera
     * @param {THREE.Camera} camera - Camera to control
     * @param {HTMLElement} domElement - DOM element for event handling
     */
    constructor(camera, domElement) {
        this.camera = camera;
        this.domElement = domElement;
        this.target = new THREE.Vector3(0, 20, 0);
        this.minDistance = CONFIG.world.cameraMinDistance;
        this.maxDistance = CONFIG.world.cameraMaxDistance;
        this.minPolarAngle = 0.5;
        this.maxPolarAngle = Math.PI * 0.6;
        this.enableDamping = true;
        this.dampingFactor = 0.05;

        this.minCameraHeightAboveGround = CONFIG.world.minCameraHeightAboveGround;

        this.spherical = new THREE.Spherical();
        this.sphericalDelta = new THREE.Spherical(0, 0, 0);
        this.offset = new THREE.Vector3();

        this.rotateStart = new THREE.Vector2();
        this.rotateEnd = new THREE.Vector2();
        this.rotateDelta = new THREE.Vector2();

        this.isMouseDown = false;
        this.initialTouchDistance = 0;
        this.currentTouchDistance = 0;

        this.init();
    }

    abortIntroRotation() {
        if (introRotation.active) {
            this.offset.copy(camera.position).sub(this.target);
            this.spherical.setFromVector3(this.offset);
            introRotation.active = false;
        }
    }

    init() {
        // Initialize spherical from current camera position
        this.offset.copy(this.camera.position).sub(this.target);
        this.spherical.setFromVector3(this.offset);
        // Ensure radius is clamped
        this.spherical.radius = Math.max(this.minDistance, Math.min(this.maxDistance, this.spherical.radius));

        this.domElement.addEventListener('mousedown', this.onMouseDown.bind(this));
        this.domElement.addEventListener('mousemove', this.onMouseMove.bind(this));
        this.domElement.addEventListener('mouseup', this.onMouseUp.bind(this));
        // allow preventDefault on wheel
        this.domElement.addEventListener('wheel', this.onMouseWheel.bind(this), { passive: false });

        // Touch events
        this.domElement.addEventListener('touchstart', this.onTouchStart.bind(this));
        this.domElement.addEventListener('touchmove', this.onTouchMove.bind(this));
        this.domElement.addEventListener('touchend', this.onTouchEnd.bind(this));

        this.update();
    }

    onMouseDown(event) {
        this.abortIntroRotation();
        this.isMouseDown = true;
        this.rotateStart.set(event.clientX, event.clientY);
    }

    onMouseMove(event) {
        if (!this.isMouseDown) return;

        this.rotateEnd.set(event.clientX, event.clientY);
        this.rotateDelta.subVectors(this.rotateEnd, this.rotateStart);

        const element = this.domElement;

        this.sphericalDelta.theta -= 2 * Math.PI * this.rotateDelta.x / element.clientHeight * 0.3;
        this.sphericalDelta.phi -= 2 * Math.PI * this.rotateDelta.y / element.clientHeight * 0.3;

        this.rotateStart.copy(this.rotateEnd);
    }

    onMouseUp() {
        this.isMouseDown = false;
    }

    zoom(delta, zoomFactor = 0.95) {
        if (delta > 0) {
            this.spherical.radius = Math.min(this.spherical.radius / zoomFactor, this.maxDistance);
        } else {
            this.spherical.radius = Math.max(this.spherical.radius * zoomFactor, this.minDistance);
        }
    }

    onMouseWheel(event) {
        event.preventDefault();
        this.abortIntroRotation();
        const delta = Math.sign(event.deltaY);
        this.zoom(delta);
    }

    onTouchStart(event) {
        this.abortIntroRotation();

        if (event.touches.length === 1) {
            this.rotateStart.set(event.touches[0].pageX, event.touches[0].pageY);
            this.isMouseDown = true;
        } else if (event.touches.length === 2) {
            this.isMouseDown = false;
            const dx = event.touches[0].pageX - event.touches[1].pageX;
            const dy = event.touches[0].pageY - event.touches[1].pageY;
            this.initialTouchDistance = Math.sqrt(dx * dx + dy * dy);
            this.currentTouchDistance = this.initialTouchDistance;
        }
    }

    onTouchMove(event) {
        if (event.touches.length === 1 && this.isMouseDown) {
            event.preventDefault();
            this.rotateEnd.set(event.touches[0].pageX, event.touches[0].pageY);
            this.rotateDelta.subVectors(this.rotateEnd, this.rotateStart);

            const element = this.domElement;

            this.sphericalDelta.theta -= 2 * Math.PI * this.rotateDelta.x / element.clientHeight * 0.3;
            this.sphericalDelta.phi -= 2 * Math.PI * this.rotateDelta.y / element.clientHeight * 0.3;

            this.rotateStart.copy(this.rotateEnd);
        } else if (event.touches.length === 2) {
            event.preventDefault();
            const dx = event.touches[0].pageX - event.touches[1].pageX;
            const dy = event.touches[0].pageY - event.touches[1].pageY;
            this.currentTouchDistance = Math.sqrt(dx * dx + dy * dy);

            const distanceChange = this.currentTouchDistance - this.initialTouchDistance;
            const delta = distanceChange > 0 ? -1 : 1;

            if (Math.abs(distanceChange) > 10) {
                this.zoom(delta, 0.98);
                this.initialTouchDistance = this.currentTouchDistance;
            }
        }
    }

    onTouchEnd(event) {
        this.isMouseDown = false;
        if (event.touches.length === 0) {
            this.initialTouchDistance = 0;
            this.currentTouchDistance = 0;
        }
    }

    update() {
        // Apply rotation deltas
        this.spherical.theta += this.sphericalDelta.theta;
        this.spherical.phi += this.sphericalDelta.phi;

        // Clamp polar angle to static limits first
        this.spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this.spherical.phi));
        this.spherical.radius = Math.max(this.minDistance, Math.min(this.maxDistance, this.spherical.radius));

        const offset = new THREE.Vector3();
        offset.setFromSpherical(this.spherical);
        const proposedPosition = this.target.clone().add(offset);

        // Dynamic ground collision detection
        const groundHeight = getGroundHeightAt(proposedPosition.x, proposedPosition.z);
        const minAllowedY = groundHeight + this.minCameraHeightAboveGround;

        if (proposedPosition.y < minAllowedY) {
            const requiredCos = (minAllowedY - this.target.y) / this.spherical.radius;
            if (Math.abs(requiredCos) <= 1) {
                const maxPhiForGround = Math.acos(requiredCos);
                this.spherical.phi = Math.min(this.spherical.phi, maxPhiForGround);
            }
            offset.setFromSpherical(this.spherical);
        }

        // Tree collision detection - prevent camera from getting too close to trees
        let adjustmentNeeded = false;
        trees.forEach(tree => {
            const treePosition = tree.position;
            const distanceToTree = proposedPosition.distanceTo(treePosition);
            const safeDistance = 25; // Minimum safe distance from the tree

            if (distanceToTree < safeDistance) {
                // Calculate how much we need to push the camera away
                const pushDirection = proposedPosition.clone().sub(treePosition).normalize();
                const pushAmount = safeDistance - distanceToTree + 5; // Extra 5 units buffer

                // Move the proposed position away from the tree
                proposedPosition.add(pushDirection.multiplyScalar(pushAmount));
                adjustmentNeeded = true;
            }
        });

        // If we adjusted the position, recalculate the spherical coordinates
        if (adjustmentNeeded) {
            offset.copy(proposedPosition).sub(this.target);
            this.spherical.setFromVector3(offset);
            // Ensure we stay within bounds
            this.spherical.radius = Math.max(this.minDistance, Math.min(this.maxDistance, this.spherical.radius));
        }

        // Apply final camera position
        this.camera.position.copy(this.target).add(offset);
        this.camera.lookAt(this.target);

        // Damping
        if (this.enableDamping) {
            this.sphericalDelta.theta *= (1 - this.dampingFactor);
            this.sphericalDelta.phi *= (1 - this.dampingFactor);
        } else {
            this.sphericalDelta.set(0, 0, 0);
        }

        return true;
    }

}


// Check system theme preference
function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * Get current color palette based on season and theme
 * @returns {Object} Current color palette
 */
function getCurrentColors() {
    // Get current season
    const currentSeason = getCurrentSeason();

    // Determine theme
    let theme;
    if (currentTheme === 'auto') {
        theme = getSystemTheme();
    } else {
        theme = currentTheme; // Manual light/dark selection
    }

    // Return seasonal colors with proper light/dark variation
    return Colors[currentSeason][theme];
}

function toggleTheme() {
    const themes = ['auto', 'light', 'dark'];
    const currentIndex = themes.indexOf(currentTheme);
    currentTheme = themes[(currentIndex + 1) % themes.length];

    // Update CSS
    if (currentTheme === 'auto') {
        document.body.removeAttribute('data-theme');
    } else {
        document.body.setAttribute('data-theme', currentTheme);
    }

    // Update 3D scene colors
    updateSceneColors();
}

function updateSceneColors() {
    const colors = getCurrentColors();

    if (scene) {
        // Update background
        scene.background = new THREE.Color(colors.bg);
        scene.fog.color = new THREE.Color(colors.bg);

        // Update tree colors
        trees.forEach(tree => updateTreeColors(tree, colors));

        // Update mountain colors and positions
        updateMountainColors(colors);

        // Update cloud colors
        updateCloudColors(colors);

        // Update grass colors
        updateGrassColors(colors);

        // Update star visibility
        updateStarVisibility();

        // Update floor color with new terrain system
        updateTerrainColors(colors);
    }

    // Update text colors
    const textColor = `#${colors.textColor.toString(16).padStart(6, '0')}`;
    const titleElement = document.querySelector('.title');
    const subtitleElement = document.querySelector('.subtitle');
    const separatorElement = document.querySelector('.title-separator');

    if (titleElement) titleElement.style.setProperty('color', textColor, 'important');
    if (subtitleElement) subtitleElement.style.setProperty('color', textColor, 'important');
    if (separatorElement) {
        separatorElement.style.setProperty('background', `linear-gradient(to right, transparent, ${textColor}, transparent)`, 'important');
    }

    // Update modal colors
    const bgColor = `#${colors.bg.toString(16).padStart(6, '0')}`;
    // Determine current theme
    let theme;
    if (currentTheme === 'auto') {
        theme = getSystemTheme();
    } else {
        theme = currentTheme;
    }
    // Create appropriate modal background and text colors
    const modalBg = theme === 'dark'
        ? `rgba(${parseInt(bgColor.slice(1, 3), 16)}, ${parseInt(bgColor.slice(3, 5), 16)}, ${parseInt(bgColor.slice(5, 7), 16)}, 0.95)`
        : `rgba(255, 255, 255, 0.95)`;
    const primaryTextColor = textColor;
    const secondaryTextColor = theme === 'dark' ? '#cccccc' : '#555555';
    const linkColor = theme === 'dark' ? '#60a5fa' : '#2563eb';
    const linkHoverColor = theme === 'dark' ? '#93c5fd' : '#1d4ed8';

    document.documentElement.style.setProperty('--modal-bg', modalBg);
    document.documentElement.style.setProperty('--modal-primary-text', primaryTextColor);
    document.documentElement.style.setProperty('--modal-secondary-text', secondaryTextColor);
    document.documentElement.style.setProperty('--modal-link-color', linkColor);
    document.documentElement.style.setProperty('--modal-link-hover-color', linkHoverColor);
}

function updateTreeColors(object, colors) {
    if (object.material) {
        if (object.userData.type === 'trunk') {
            object.material.color = new THREE.Color(colors.trunk);
        } else if (object.userData.type === 'foliage') {
            object.material.color = new THREE.Color(colors.foliage);
        } else if (object.userData.type === 'particle') {
            object.material.color = new THREE.Color(Utils.getRandomColor(colors.leaves));
        }
    }

    if (object.children) {
        object.children.forEach(child => updateTreeColors(child, colors));
    }
}

function updateMountainColors(colors) {
    mountains.forEach(mountain => {
        if (mountain.userData.type === 'mountain') {
            // For terrain-based mountains, regenerate vertex colors
            const geometry = mountain.geometry;
            const vertices = geometry.attributes.position.array;
            const colorAttribute = geometry.attributes.color.array;

            // Find height range for this mountain (Z coordinate contains height data)
            let minHeight = Infinity;
            let maxHeight = -Infinity;
            for (let i = 2; i < vertices.length; i += 3) {
                const height = vertices[i]; // Z coordinate contains height data
                minHeight = Math.min(minHeight, height);
                maxHeight = Math.max(maxHeight, height);
            }

            // Regenerate colors based on new color scheme using actual Z-coordinate heights
            for (let i = 0; i < vertices.length; i += 3) {
                const height = vertices[i + 2]; // Z coordinate contains height data
                const mountainColor = MountainUtils.getMountainColor(height, maxHeight, colors);

                const colorIndex = i; // Color array matches vertex array
                colorAttribute[colorIndex] = mountainColor.r;
                colorAttribute[colorIndex + 1] = mountainColor.g;
                colorAttribute[colorIndex + 2] = mountainColor.b;
            }

            geometry.attributes.color.needsUpdate = true;
        }
    });
}

function updateCloudColors(colors) {
    clouds.forEach(cloud => {
        if (cloud.userData.type === 'cloud') {
            cloud.children.forEach(puff => {
                if (puff.userData.type === 'cloud-puff') {
                    puff.material.color.setHex(colors.clouds);
                }
            });
        }
    });
}

/**
 * Create connected low-poly foliage with optimized geometry
 * @param {number} radius - Foliage radius
 * @param {number} complexity - Geometry complexity level
 * @returns {THREE.Mesh} Foliage mesh
 */
function createConnectedFoliage(radius = 15, complexity = 1) {
    const colors = getCurrentColors();

    // Use optimized geometry based on device capabilities
    const geometry = Utils.createOptimizedGeometry('icosahedron', radius, complexity);

    const position = geometry.attributes.position;
    const normal = geometry.attributes.normal;
    const noiseScale = 0.01 * radius; // Reduced noise for smoother appearance

    for (let i = 0; i < position.count; i++) {
        const nx = normal.getX(i);
        const ny = normal.getY(i);
        const nz = normal.getZ(i);
        const offset = Utils.randRange(-0.5, 0.5) * noiseScale;

        position.setXYZ(
            i,
            position.getX(i) + nx * offset,
            position.getY(i) + ny * offset,
            position.getZ(i) + nz * offset
        );
    }
    position.needsUpdate = true;
    geometry.computeVertexNormals(); // Ensure smooth shading

    const material = new THREE.MeshLambertMaterial({
        color: colors.foliage,
        side: THREE.DoubleSide
    });

    const foliage = new THREE.Mesh(geometry, material);
    foliage.userData.type = 'foliage';
    foliage.castShadow = true;
    foliage.receiveShadow = true;

    return foliage;
}


/**
 * Create a tree with specified parameters - CLEAN UNIFIED VERSION
 * @param {Object} options - Tree configuration
 * @param {number} options.trunkHeight - Height of the trunk
 * @param {number} options.trunkRadius - Radius of the trunk  
 * @param {number} options.foliageRadius - Radius of foliage
 * @param {boolean} options.isFocal - Whether this is the focal tree
 * @param {number} options.complexity - Geometry complexity level
 * @returns {THREE.Group} Complete tree positioned with base at Y=0
 */
function createUnifiedTree(options = {}) {
    const {
        trunkHeight = 50,
        trunkRadius = 3,
        foliageRadius = 15,
        isFocal = false,
        complexity = 1
    } = options;

    const colors = getCurrentColors();
    const deviceCaps = getDeviceCapabilities();
    const segments = deviceCaps.isLowEnd ? 4 : 6;
    const tree = new THREE.Group();

    // Create trunk geometry centered, then position the mesh instead of translating geometry
    const trunkGeometry = new THREE.CylinderGeometry(
        trunkRadius * 0.75, // Top radius
        trunkRadius,        // Bottom radius  
        trunkHeight,
        segments,
        2
    );

    // Add subtle lean for realism (working with centered geometry)
    const positions = trunkGeometry.attributes.position;
    const leanDirection = Utils.randRange(0, Math.PI * 2);
    const leanAmount = Utils.randRange(0.02, 0.08);

    for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        const z = positions.getZ(i);

        const heightProgress = (y + trunkHeight / 2) / trunkHeight; // 0 at bottom, 1 at top
        const leanOffset = heightProgress * leanAmount * trunkHeight;

        positions.setX(i, x + Math.cos(leanDirection) * leanOffset);
        positions.setZ(i, z + Math.sin(leanDirection) * leanOffset);
    }

    positions.needsUpdate = true;
    trunkGeometry.computeVertexNormals();

    const trunkMaterial = new THREE.MeshLambertMaterial({ color: colors.trunk });
    const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
    trunk.userData.type = 'trunk';
    trunk.castShadow = true;
    trunk.receiveShadow = true;

    // Position trunk mesh so its base is at Y=0 (geometry is centered, so lift by half height)  
    trunk.position.y = trunkHeight / 2;

    // Store trunk height for debugging
    tree.userData.trunkHeight = trunkHeight;
    tree.userData.trunkMeshOffset = trunk.position.y;

    tree.add(trunk);

    // Create main foliage
    const mainFoliage = createConnectedFoliage(foliageRadius * 1.4, complexity);
    mainFoliage.scale.y = isFocal ? 1.3 : 1.2;
    mainFoliage.position.y = trunkHeight * 0.8;
    tree.add(mainFoliage);

    // Add supporting foliage clusters
    const numSupportClusters = isFocal ?
        Utils.randInt(8, 12) :
        Utils.randInt(3, 5);

    for (let i = 0; i < numSupportClusters; i++) {
        const angle = (i / numSupportClusters) * Math.PI * 2;
        const distance = foliageRadius * (isFocal ?
            Utils.randRange(0.6, 0.9) :
            0.7);
        const heightVariation = Utils.randRange(-8, 8);

        const supportCluster = createConnectedFoliage(
            foliageRadius * Utils.randRange(0.8, 1.1),
            complexity
        );
        supportCluster.position.set(
            Math.cos(angle) * distance,
            trunkHeight * 0.7 + heightVariation,
            Math.sin(angle) * distance
        );
        tree.add(supportCluster);
    }

    // Set tree metadata
    tree.userData.windOffset = Utils.randRange(0, Math.PI * 2);
    tree.userData.windStrength = isFocal ?
        Utils.randRange(0.6, 0.8) :
        Utils.randRange(0.8, 1.2);
    tree.userData.isFocalTree = isFocal;

    return tree;
}

/**
 * Create the focal tree using enhanced parameters
 */
function createFocalTree() {
    const config = CONFIG.trees.focalTree;
    const complexity = Math.min(2, CONFIG.performance.highEndGeometryComplexity + config.complexityBonus);

    // Calculate enhanced dimensions for focal tree
    const baseHeight = Utils.randRange(...CONFIG.trees.trunkHeightRange);
    const baseRadius = Utils.randRange(...CONFIG.trees.trunkRadiusRange);
    const baseFoliageRadius = Utils.randRange(...CONFIG.trees.foliageRadiusRange);

    const trunkHeight = baseHeight * config.trunkHeightMultiplier * config.scale;
    const trunkRadius = baseRadius * config.trunkRadiusMultiplier * config.scale;
    const foliageRadius = baseFoliageRadius * config.foliageRadiusMultiplier * config.scale;

    // Create focal tree with enhanced parameters
    return createUnifiedTree({
        trunkHeight,
        trunkRadius,
        foliageRadius,
        isFocal: true,
        complexity
    });
}

/**
 * Create a tree with backwards-compatible interface
 */
function createTree(scale = 1, complexity = 1) {
    const trunkHeight = Utils.randRange(...CONFIG.trees.trunkHeightRange) * scale;
    const trunkRadius = Utils.randRange(...CONFIG.trees.trunkRadiusRange) * scale;
    const foliageRadius = Utils.randRange(...CONFIG.trees.foliageRadiusRange) * scale;

    return createUnifiedTree({
        trunkHeight,
        trunkRadius,
        foliageRadius,
        isFocal: false,
        complexity
    });
}

/**
 * Get optimal tree count based on device capabilities
 * Uses CONFIG settings to adjust for performance
 * @returns {number} Optimal number of trees for current device
 */
function getOptimalTreeCount() {
    const { isLowEnd } = getDeviceCapabilities();

    if (isLowEnd) {
        return Utils.randInt(CONFIG.performance.lowEndTreeCountMin, CONFIG.performance.lowEndTreeCountMax);
    } else {
        return Utils.randInt(CONFIG.performance.highEndTreeCountMin, CONFIG.performance.highEndTreeCountMax);
    }
}

/**
 * Create cloud with optimized geometry for performance
 * @param {number} distance - Distance from center
 * @param {number} height - Cloud height
 * @param {number} size - Cloud size
 * @param {number} opacity - Cloud opacity
 * @returns {THREE.Group} Cloud group
 */
function createCloud(distance, height, size = CONFIG.clouds.defaultSize, opacity = CONFIG.clouds.defaultOpacity) {
    const colors = getCurrentColors();

    // Create cloud using multiple spheres for volumetric appearance
    const cloud = new THREE.Group();
    const { isLowEnd } = getDeviceCapabilities();
    const numPuffs = isLowEnd ? Utils.randInt(2, 4) : Utils.randInt(3, 6);

    for (let i = 0; i < numPuffs; i++) {
        const puffSize = size * Utils.randRange(0.6, 1.2);
        const geometry = Utils.createOptimizedGeometry('sphere', puffSize, 12, 8);
        const material = new THREE.MeshLambertMaterial({
            color: colors.clouds,
            transparent: true,
            opacity: opacity * Utils.randRange(0.7, 1.0)
        });

        const puff = new THREE.Mesh(geometry, material);
        puff.position.set(
            Utils.randRange(-size * 0.8, size * 0.8),
            Utils.randRange(-size * 0.3, size * 0.3),
            Utils.randRange(-size * 0.5, size * 0.5)
        );
        puff.scale.set(
            Utils.randRange(0.8, 1.2),
            Utils.randRange(0.6, 1.0),
            Utils.randRange(0.8, 1.2)
        );

        puff.userData.type = 'cloud-puff';
        cloud.add(puff);
    }

    cloud.userData.type = 'cloud';
    cloud.userData.windOffset = Utils.randRange(0, Math.PI * 2);
    cloud.userData.windStrength = Utils.randRange(0.3, 0.7);
    cloud.userData.baseOpacity = opacity;

    return cloud;
}

/**
 * Create procedural mountain terrain with noise-based height generation
 * @param {number} distance - Distance from center
 * @param {number} colorIndex - Color index for mountain layers
 * @param {number} scale - Height scale multiplier
 * @returns {THREE.Mesh} Mountain terrain mesh
 */
function createMountain(distance, colorIndex = 0, scale = 1.0) {
    const colors = getCurrentColors();
    const { isLowEnd } = getDeviceCapabilities();
    const mountainConfig = CONFIG.mountains;

    // Use device-appropriate resolution
    const segments = isLowEnd ? mountainConfig.lowEndSegments : mountainConfig.segments;

    // Create plane geometry for the mountain terrain
    const geometry = new THREE.PlaneGeometry(
        mountainConfig.width,
        mountainConfig.depth,
        segments,
        Math.floor(segments * 0.3) // Depth has fewer segments for performance
    );

    // Generate mountain heights and colors using noise
    const vertices = geometry.attributes.position.array;
    const heightValues = [];
    let minHeight = Infinity;
    let maxHeight = -Infinity;

    // Generate terrain heights - PlaneGeometry uses X, Y, Z where:
    // X = horizontal (left-right), Y = depth (in-out), Z = initially up-down
    for (let i = 0; i < vertices.length; i += 3) {
        const x = vertices[i];      // X position
        const y = vertices[i + 1];  // Y position (depth)

        // Generate mountain height using multiple noise layers for randomness
        // Use regular terrain noise but with different scales to avoid banding
        const noise1 = TerrainUtils.layeredNoise(x * 0.006, y * 0.006, 4, 0.5);
        const noise2 = TerrainUtils.layeredNoise(x * 0.012 + 100, y * 0.009 + 50, 3, 0.6);
        const noise3 = TerrainUtils.layeredNoise(x * 0.018 + 200, y * 0.015 + 150, 2, 0.7);

        // Combine multiple noise layers for more random patterns
        const combinedNoise = (noise1 * 0.6 + noise2 * 0.3 + noise3 * 0.1);

        // Create distance-based height gradient for natural mountain buildup
        // Mountains should be low near terrain edge, high at far end
        const distanceFromTerrainEdge = (mountainConfig.depth / 2 - y) / mountainConfig.depth; // 1 at front (near terrain), 0 at back (far)
        const heightMultiplier = 0.1 + (distanceFromTerrainEdge * 0.9); // Low near terrain, high far away

        let terrainHeight = combinedNoise * mountainConfig.heightVariation * scale * heightMultiplier;

        // Add edge falloff to create smooth transitions
        const width = mountainConfig.width;
        const depth = mountainConfig.depth;
        const edgeFalloff = 0.2; // 20% of the edge will fade out

        // Calculate distance from edges
        const xEdgeDist = Math.min(x + width / 2, width / 2 - x) / (width / 2);
        const yEdgeDist = Math.min(y + depth / 2, depth / 2 - y) / (depth / 2);

        // Create falloff factor (0 at edges, 1 in center)
        const xFalloff = Math.min(1, xEdgeDist / edgeFalloff);
        const yFalloff = Math.min(1, yEdgeDist / edgeFalloff);
        const edgeFalloffFactor = Math.min(xFalloff, yFalloff);

        // Apply falloff to height
        terrainHeight *= edgeFalloffFactor;

        vertices[i + 2] = terrainHeight; // Set Z (height) coordinate

        heightValues.push(terrainHeight);
        minHeight = Math.min(minHeight, terrainHeight);
        maxHeight = Math.max(maxHeight, terrainHeight);
    }

    // Find the lowest point to adjust mountain base

    // Check a grid of vertices to see the height pattern
    const totalVertices = vertices.length / 3;
    const segmentsX = Math.sqrt(totalVertices); // Approximate grid size

    // Sample vertices in a cross pattern to see height distribution
    const centerIdx = Math.floor(totalVertices / 2);
    const quarterIdx = Math.floor(totalVertices / 4);
    const threeQuarterIdx = Math.floor(totalVertices * 3 / 4);

    // Sample some vertices along different rows to see the pattern
    const sampleIndices = [
        0, 5, 10,           // Top edge row
        quarterIdx - 2, quarterIdx, quarterIdx + 2, // Quarter way down
        centerIdx - 2, centerIdx, centerIdx + 2,    // Center row
        threeQuarterIdx - 2, threeQuarterIdx, threeQuarterIdx + 2, // Three quarter way
        totalVertices - 10, totalVertices - 5, totalVertices - 1  // Bottom edge row
    ];


    // Adjust all vertices so the lowest point is at Y=0 (ensuring proper grounding)
    const heightAdjustment = minHeight;

    for (let i = 0; i < vertices.length; i += 3) {
        vertices[i + 2] -= heightAdjustment; // Shift all heights so min becomes 0
    }

    // Check Z values after adjustment (same sample points)

    // Update height values array too
    for (let i = 0; i < heightValues.length; i++) {
        heightValues[i] -= heightAdjustment;
    }

    // Recalculate range after adjustment
    const originalMaxHeight = maxHeight;
    minHeight = 0;
    maxHeight = originalMaxHeight - heightAdjustment;

    // Don't generate colors yet - we'll do it after rotation
    // Just create a placeholder color array for now
    const colorAttribute = new Float32Array(vertices.length);

    // Apply color attribute and update geometry
    geometry.setAttribute('color', new THREE.BufferAttribute(colorAttribute, 3));
    geometry.attributes.position.needsUpdate = true;
    geometry.computeVertexNormals();

    // Create material with vertex colors
    const material = new THREE.MeshLambertMaterial({
        vertexColors: true,
        transparent: false, // Make opaque like the ground
        side: THREE.DoubleSide // Ensure visibility from all angles
    });

    const mountain = new THREE.Mesh(geometry, material);

    // Store the height range info for later color calculation
    mountain.userData.heightRange = { min: minHeight, max: maxHeight };
    mountain.userData.type = 'mountain';

    mountain.userData.colorIndex = colorIndex;
    mountain.userData.baseDistance = distance;
    mountain.userData.scale = scale;

    return mountain;
}

/**
 * Create cloud system with performance optimization
 * Adjusts cloud count and complexity based on device capabilities
 */
function createClouds() {
    const { isLowEnd } = getDeviceCapabilities();
    const numClouds = isLowEnd ?
        Utils.randInt(...CONFIG.performance.lowEndCloudCount) :
        Utils.randInt(...CONFIG.performance.highEndCloudCount);

    // Use CONFIG cloud layers
    const layersToUse = isLowEnd ? CONFIG.clouds.layers.slice(0, 2) : CONFIG.clouds.layers;

    layersToUse.forEach((layer, layerIndex) => {
        const cloudsInLayer = Math.ceil(numClouds / layersToUse.length);

        for (let i = 0; i < cloudsInLayer; i++) {
            const cloud = createCloud(layer.distance, layer.height, layer.size, layer.opacity);

            // Scatter clouds around the scene (wider spread)
            const angle = Utils.randRange(0, Math.PI * 2);
            const distance = Utils.randRange(layer.distance * CONFIG.clouds.positionMultiplierRange[0], layer.distance * CONFIG.clouds.positionMultiplierRange[1]);
            const height = layer.height + Utils.randRange(-CONFIG.clouds.heightVariation, CONFIG.clouds.heightVariation);

            cloud.position.set(
                Math.cos(angle) * distance,
                height,
                Math.sin(angle) * distance
            );

            // Add some rotation for variety
            cloud.rotation.y = Utils.randRange(0, Math.PI * 2);

            cloud.userData.layerIndex = layerIndex;
            cloud.userData.angle = angle;
            cloud.userData.baseDistance = distance;
            cloud.userData.baseHeight = height; // Store base height for animation constraint

            clouds.push(cloud);
            scene.add(cloud);
        }
    });
}

/**
 * Create mountain system with procedural terrain generation
 * Places mountains as distant backdrop at the horizon edges
 */
function createMountains() {
    const colors = getCurrentColors();
    const layer = CONFIG.mountains.layers[0]; // Use only the first layer

    // Create 4 mountain ranges at cardinal directions
    const mountainRanges = [
        { angle: 0, name: 'north' },         // North
        { angle: Math.PI / 2, name: 'east' }, // East  
        { angle: Math.PI, name: 'south' },    // South
        { angle: 3 * Math.PI / 2, name: 'west' } // West
    ];

    mountainRanges.forEach((range, i) => {
        // Create mountain with terrain generation
        const mountain = createMountain(layer.distance, layer.colorIndex, layer.scale);

        // Calculate mountain position
        const mountainX = Math.sin(range.angle) * layer.distance;
        const mountainZ = Math.cos(range.angle) * layer.distance;

        // Find the lowest ground height along the terrain edge for this direction
        let lowestGroundHeight = Infinity;
        const terrainHalfSize = CONFIG.world.groundSize / 2; // 1100
        const sampleCount = 20; // Sample points along the edge

        for (let s = 0; s < sampleCount; s++) {
            let sampleX, sampleZ;

            // Sample along the appropriate terrain edge
            if (range.name === 'north') {
                sampleX = -terrainHalfSize + (s / (sampleCount - 1)) * CONFIG.world.groundSize;
                sampleZ = terrainHalfSize;
            } else if (range.name === 'south') {
                sampleX = -terrainHalfSize + (s / (sampleCount - 1)) * CONFIG.world.groundSize;
                sampleZ = -terrainHalfSize;
            } else if (range.name === 'east') {
                sampleX = terrainHalfSize;
                sampleZ = -terrainHalfSize + (s / (sampleCount - 1)) * CONFIG.world.groundSize;
            } else { // west
                sampleX = -terrainHalfSize;
                sampleZ = -terrainHalfSize + (s / (sampleCount - 1)) * CONFIG.world.groundSize;
            }

            try {
                const sampleHeight = getGroundHeightAt(sampleX, sampleZ);
                if (!isNaN(sampleHeight)) {
                    lowestGroundHeight = Math.min(lowestGroundHeight, sampleHeight);
                }
            } catch (e) {
                // Skip this sample point
            }
        }

        // Fallback to base ground height if no valid samples found
        if (lowestGroundHeight === Infinity) {
            lowestGroundHeight = CONFIG.world.groundHeight;
        }

        // Position mountain base at the lowest ground height along the edge
        const mountainBaseY = lowestGroundHeight;

        mountain.position.set(mountainX, mountainBaseY, mountainZ);


        // Set rotation order to avoid gimbal lock issues
        mountain.rotation.order = 'YXZ'; // Apply Y rotation first, then X

        // First: Rotate horizontally to align with terrain edge and orient peaks correctly
        // North/South: width runs East-West, but need to check peak direction
        // East/West: width runs North-South, but need to check peak direction  
        if (range.name === 'north') {
            mountain.rotation.y = 0; // Peaks should face away from terrain (toward north)
        } else if (range.name === 'south') {
            mountain.rotation.y = Math.PI; // Rotate 180° so peaks face away from terrain (toward south)
        } else if (range.name === 'east') {
            mountain.rotation.y = Math.PI / 2; // Peaks should face away from terrain (toward east)
        } else { // west
            mountain.rotation.y = -Math.PI / 2; // Rotate so peaks face away from terrain (toward west)
        }

        // Then: Rotate the PlaneGeometry to be upright (like terrain)
        mountain.rotation.x = -Math.PI / 2; // Makes Z-heights point up in Y direction

        // Now apply colors based on final world coordinates after rotation
        applyMountainColors(mountain, colors);

        mountain.userData.angle = range.angle;
        mountain.userData.rangeName = range.name;

        mountains.push(mountain);
        scene.add(mountain);
    });

}

/**
 * Create forest with optimized tree placement
 * Uses device-specific tree counts and proper spacing
 */
function createForest() {
    const numTrees = getOptimalTreeCount();
    const mainTreeIndex = Math.floor(numTrees / 2);
    const minTreeSpacing = CONFIG.world.treeMinSpacing;

    for (let i = 0; i < numTrees; i++) {
        const isMainTree = i === mainTreeIndex;
        let tree, positionValid;

        do {
            positionValid = true;

            if (isMainTree) {
                // Create the majestic focal tree
                tree = createFocalTree();
                // Position using CONFIG settings
                tree.position.x = CONFIG.interactions.focalTreePosition.x;
                tree.position.z = CONFIG.interactions.focalTreePosition.z;
            } else {
                // Create regular trees with random scale
                const scale = Utils.randRange(...CONFIG.trees.scaleRange);
                tree = createTree(scale);

                // Scatter other trees in a more natural pattern
                // Use multiple attempts to find a good position
                let attempts = 0;
                let validPosition = false;

                while (!validPosition && attempts < CONFIG.treePositioning.maxPlacementAttempts) {
                    // Random position in a wider area with varying density
                    const x = Utils.randRange(...CONFIG.treePositioning.randomAreaRange);
                    const z = Utils.randRange(...CONFIG.treePositioning.randomAreaRange);
                    const distanceFromCenter = Math.sqrt(x * x + z * z);

                    // Avoid placing too close to center (where main tree is)
                    if (distanceFromCenter > CONFIG.treePositioning.minDistanceFromCenter) {
                        tree.position.x = x;
                        tree.position.z = z;
                        validPosition = true;
                    }
                    attempts++;
                }

                // Fallback to old method if no valid position found
                if (!validPosition) {
                    const angle = Utils.randRange(0, Math.PI * 2);
                    const distance = Utils.randRange(...CONFIG.treePositioning.fallbackCircleDistanceRange);
                    tree.position.x = Math.cos(angle) * distance;
                    tree.position.z = Math.sin(angle) * distance;
                }
            }

            // Check for overlap with existing trees
            for (const existingTree of trees) {
                const distanceToExisting = tree.position.distanceTo(existingTree.position);
                if (distanceToExisting < minTreeSpacing) {
                    positionValid = false;
                    break;
                }
            }
        } while (!positionValid);

        // Position tree on terrain (trunk base at ground level)
        const groundHeight = getGroundHeightAt(tree.position.x, tree.position.z);
        tree.position.y = groundHeight + CONFIG.interactions.treeSittingOffset;


        scene.add(tree);
        trees.push(tree);

        // Ensure all tree meshes cast/receive shadows
        enableTreeShadows(tree);
    }
}

/**
 * Utility to ensure all meshes in a tree group cast and receive shadows
 * @param {THREE.Object3D} treeGroup
 */
function enableTreeShadows(treeGroup) {
    treeGroup.traverse(obj => {
        if (obj.isMesh) {
            obj.castShadow = true;
            obj.receiveShadow = true;
        }
    });
}

// Global fox animation variables
let foxMixer = null;
let foxAnimations = [];
let currentFoxAnimation = null;
let foxObject = null;
let foxHeightOffset = null; // Calculated fox height offset

// Fox runtime state (dynamic values that change during gameplay)
let foxMovement = {
    keys: { w: false, a: false, s: false, d: false },
    isMoving: false,
    isReturning: false,
    moveStartTime: 0,
    direction: { x: 0, z: 0 },
    currentTiltX: 0,  // Current tilt around X axis (pitch - up/down hills)
    currentTiltZ: 0   // Current tilt around Z axis (roll - side slopes)
};

// Camera following runtime state
let cameraFollow = {
    enabled: false,
    userOverride: false // True when user is manually controlling camera
};

/**
 * Create and add a low poly fox model to the scene with animations
 * Loads fox model with Survey, Walk, and Run animations
 */
function createFox() {
    const loader = new THREE.GLTFLoader();
    loader.load(
        "assets/glb/fox.glb",
        (gltf) => {
            const fox = gltf.scene;

            // Scale the fox to fit the landscape
            const foxScale = CONFIG.fox.scale;
            fox.scale.set(foxScale, foxScale, foxScale);

            // Position the fox in the landscape (near a tree)
            const foxX = CONFIG.fox.initialPosition.x;
            const foxZ = CONFIG.fox.initialPosition.z;
            const groundHeight = getGroundHeightAt(foxX, foxZ);
            fox.position.set(foxX, groundHeight, foxZ); // Start at ground level temporarily

            // Rotate fox to face towards center
            fox.rotation.y = Math.PI * 0.75;

            // Enable shadows
            fox.traverse(obj => {
                if (obj.isMesh) {
                    obj.castShadow = true;
                    obj.receiveShadow = true;
                }
            });

            // Setup animations
            if (gltf.animations && gltf.animations.length > 0) {
                foxMixer = new THREE.AnimationMixer(fox);

                // Store all available animations
                foxAnimations = gltf.animations.map(clip => {
                    return foxMixer.clipAction(clip);
                });

                // Start with Survey animation (idle state)
                if (foxAnimations.length > 0) {
                    currentFoxAnimation = foxAnimations[0]; // Survey animation
                    currentFoxAnimation.play();
                }
            }

            // Store fox reference for movement
            foxObject = fox;

            scene.add(fox);

            // Calculate and cache the fox's actual height offset after model is loaded and scaled
            foxHeightOffset = calculateFoxHeightOffset();

            // Update fox position with calculated height offset
            const currentGroundHeight = getGroundHeightAt(foxX, foxZ);
            fox.position.y = currentGroundHeight + foxHeightOffset;
        },
        undefined,
        (error) => {
            console.error("Error loading fox model:", error);
        }
    );
}

/**
 * Calculate the fox's height offset based on its bounding box
 * This ensures the fox sits properly on the ground regardless of terrain
 * Accounts for the fox's scale and caches the result
 */
function calculateFoxHeightOffset() {
    if (!foxObject) return CONFIG.fox.heightOffset; // Fallback to config value

    // Calculate bounding box (this accounts for current scale)
    const boundingBox = new THREE.Box3().setFromObject(foxObject);

    // The offset should position the fox so its bottom touches the ground
    // If min.y is negative, the fox extends below its pivot point
    // If min.y is positive, the fox is above its pivot point
    const offsetFromPivot = -boundingBox.min.y; // Negative min.y means we need positive offset

    // Ensure we don't have negative offsets (fox pivot already at bottom)
    return Math.max(0, offsetFromPivot);
}

/**
 * Get the appropriate fox height offset
 * Uses cached calculated value if available, otherwise falls back to config
 * This avoids recalculating the bounding box every frame
 */
function getFoxHeightOffset() {
    return foxHeightOffset !== null ? foxHeightOffset : CONFIG.fox.heightOffset;
}


/**
 * Calculate terrain slope angles at the fox's position
 * Returns pitch (X-axis rotation) and roll (Z-axis rotation) in radians
 */
function calculateTerrainSlope(foxX, foxZ, foxRotationY) {
    if (!CONFIG.fox.terrainTilt.enabled) {
        return { pitch: 0, roll: 0 };
    }

    const sampleDistance = CONFIG.fox.terrainTilt.sampleDistanceMultiplier * CONFIG.fox.scale;

    // Calculate forward and right directions based on fox's rotation
    const forwardX = Math.sin(foxRotationY);
    const forwardZ = Math.cos(foxRotationY);
    const rightX = Math.cos(foxRotationY);
    const rightZ = -Math.sin(foxRotationY);

    // Sample terrain heights in four directions relative to fox's facing direction
    const centerHeight = getGroundHeightAt(foxX, foxZ);
    const forwardHeight = getGroundHeightAt(foxX + forwardX * sampleDistance, foxZ + forwardZ * sampleDistance);
    const backHeight = getGroundHeightAt(foxX - forwardX * sampleDistance, foxZ - forwardZ * sampleDistance);
    const rightHeight = getGroundHeightAt(foxX + rightX * sampleDistance, foxZ + rightZ * sampleDistance);
    const leftHeight = getGroundHeightAt(foxX - rightX * sampleDistance, foxZ - rightZ * sampleDistance);

    // Calculate pitch (forward/back slope) - fox should lean back going uphill, forward going downhill
    const forwardBackSlope = forwardHeight - backHeight;
    const pitch = Math.atan2(forwardBackSlope, sampleDistance * 2); // Positive = lean forward on downhill

    // Calculate roll (left/right slope) - fox should lean away from slope (uphill side)
    const leftRightSlope = leftHeight - rightHeight;
    const roll = -Math.atan2(leftRightSlope, sampleDistance * 2); // Negative = lean right when right is uphill

    // Clamp angles to maximum tilt
    const maxTilt = CONFIG.fox.terrainTilt.maxTiltAngle;
    const clampedPitch = Math.max(-maxTilt, Math.min(maxTilt, pitch));
    const clampedRoll = Math.max(-maxTilt, Math.min(maxTilt, roll));

    return { pitch: clampedPitch, roll: clampedRoll };
}

/**
 * Update fox terrain tilting with smooth transitions
 * Call this every frame to smoothly adjust fox rotation to match terrain
 * This only handles the visual tilting - ground positioning is handled separately
 */
function updateFoxTerrainTilt() {
    if (!foxObject || !CONFIG.fox.terrainTilt.enabled) return;

    // Only calculate tilt when fox is moving (user control or auto-return)
    if (!foxMovement.isMoving && !foxMovement.isReturning) return;

    // Store current rotations
    const currentRotX = foxObject.rotation.x;
    const currentRotZ = foxObject.rotation.z;

    // Temporarily reset tilt rotations for accurate ground positioning
    foxObject.rotation.x = 0;
    foxObject.rotation.z = 0;

    // Recalculate ground position with fox in neutral orientation
    const groundHeight = getGroundHeightAt(foxObject.position.x, foxObject.position.z);
    foxObject.position.y = groundHeight + getFoxHeightOffset();

    // Calculate desired tilt angles based on current terrain
    const targetAngles = calculateTerrainSlope(foxObject.position.x, foxObject.position.z, foxObject.rotation.y);

    // Smooth transition to target angles
    const smoothing = CONFIG.fox.terrainTilt.smoothing;
    foxMovement.currentTiltX += (targetAngles.pitch - foxMovement.currentTiltX) * smoothing;
    foxMovement.currentTiltZ += (targetAngles.roll - foxMovement.currentTiltZ) * smoothing;

    // Apply the tilt to fox rotation (preserving the Y rotation for turning)
    foxObject.rotation.x = foxMovement.currentTiltX;
    foxObject.rotation.z = foxMovement.currentTiltZ;
}

/**
 * Switch fox animation (Survey, Walk, Run)
 * @param {number} animationIndex - 0: Survey, 1: Walk, 2: Run
 */
function switchFoxAnimation(animationIndex) {
    if (!foxMixer || !foxAnimations || animationIndex >= foxAnimations.length) return;

    // Fade out current animation
    if (currentFoxAnimation) {
        currentFoxAnimation.fadeOut(CONFIG.fox.animationFadeTime);
    }

    // Fade in new animation
    currentFoxAnimation = foxAnimations[animationIndex];
    currentFoxAnimation.reset().fadeIn(CONFIG.fox.animationFadeTime).play();

    // Apply speed multiplier for run animation (index 2)
    if (animationIndex === 2) { // Run animation
        currentFoxAnimation.timeScale = CONFIG.fox.runAnimationSpeed;
    } else {
        currentFoxAnimation.timeScale = 1.0; // Normal speed for Survey and Walk
    }
}

/**
 * Check if fox can move to a position (collision detection)
 * @param {number} x - Target X position
 * @param {number} z - Target Z position
 * @returns {boolean} - True if position is valid
 */
/**
 * Check if fox is in the walk zone (near boundary)
 * @returns {boolean} True if fox should slow down to walking
 */
function shouldFoxSlowDown() {
    const stopBoundary = (CONFIG.world.groundSize / 2) * CONFIG.fox.boundaryMargin;
    const walkBoundary = stopBoundary * CONFIG.fox.walkZoneMargin;
    const distanceFromCenter = Math.max(Math.abs(foxObject.position.x), Math.abs(foxObject.position.z));
    return distanceFromCenter > walkBoundary;
}

function canFoxMoveTo(x, z) {
    // Check map boundaries (ground size is total width, so divide by 2, then apply margin)
    const boundary = (CONFIG.world.groundSize / 2) * CONFIG.fox.boundaryMargin;
    if (Math.abs(x) > boundary || Math.abs(z) > boundary) {
        return false;
    }

    // Check tree collisions
    for (let tree of trees) {
        const distance = Math.sqrt((x - tree.position.x) ** 2 + (z - tree.position.z) ** 2);
        if (distance < CONFIG.fox.treeCollisionRadius) {
            return false;
        }
    }

    // Check mountain collisions (basic height check)
    // Only block if terrain is significantly higher than current fox position
    const groundHeight = getGroundHeightAt(x, z);
    const currentHeight = foxObject ? getGroundHeightAt(foxObject.position.x, foxObject.position.z) : 0;
    const heightDifference = Math.abs(groundHeight - currentHeight);
    if (heightDifference > 20) { // Only block steep terrain changes
        return false;
    }

    return true;
}

/**
 * Update fox movement and animation based on input
 */
function updateFoxMovement() {
    if (!foxObject) return;

    // Check if user is controlling fox
    const userControlling = foxMovement.keys.w || foxMovement.keys.a || foxMovement.keys.s || foxMovement.keys.d;

    if (userControlling) {
        // User control mode - stop any auto-return and reset camera override
        foxMovement.isReturning = false;
        cameraFollow.userOverride = false;

        // Handle turning (A/D keys rotate the fox)
        if (foxMovement.keys.a) {
            foxObject.rotation.y += CONFIG.fox.movement.turnSpeed; // Turn left
        }
        if (foxMovement.keys.d) {
            foxObject.rotation.y -= CONFIG.fox.movement.turnSpeed; // Turn right
        }

        // Handle forward/backward movement (W/S keys)
        let moveForward = 0;
        if (foxMovement.keys.w) moveForward = 1;   // W = forward
        if (foxMovement.keys.s) moveForward = -1;  // S = backward

        // If only turning (A/D pressed but no W/S), add small forward movement to avoid spinning in place
        const onlyTurning = (foxMovement.keys.a || foxMovement.keys.d) && !foxMovement.keys.w && !foxMovement.keys.s;
        if (onlyTurning && moveForward === 0) {
            moveForward = CONFIG.fox.turnMovementAmount;
        }

        const isMovingNow = moveForward !== 0;

        // Handle movement state changes
        if (isMovingNow && !foxMovement.isMoving) {
            // Start moving
            foxMovement.isMoving = true;
            foxMovement.moveStartTime = Date.now();
            switchFoxAnimation(1); // Walk
            cameraFollow.enabled = true;
        } else if (!isMovingNow && foxMovement.isMoving) {
            // Stop user movement - start auto-return
            foxMovement.isMoving = false;
            startAutoReturn();
        } else if (isMovingNow) {
            // Check if should switch to run animation (only when moving forward and not near boundary)
            const moveDuration = Date.now() - foxMovement.moveStartTime;
            const isMovingForward = foxMovement.keys.w && !foxMovement.keys.s;

            // Check distance to boundary
            const shouldSlowDown = shouldFoxSlowDown() && isMovingForward;

            if (moveDuration > CONFIG.fox.movement.walkThreshold && currentFoxAnimation === foxAnimations[1] && isMovingForward && !shouldSlowDown) {
                switchFoxAnimation(2); // Run (only if not near boundary)
            }
        }

        // Apply user movement
        if (foxMovement.isMoving && moveForward !== 0) {
            const moveDuration = Date.now() - foxMovement.moveStartTime;
            const isMovingForward = foxMovement.keys.w && !foxMovement.keys.s;

            // Check if fox is in the walk zone (between walk boundary and stop boundary)
            const shouldSlowDown = shouldFoxSlowDown() && isMovingForward;

            // Determine speed (slow down near boundaries)
            const shouldRun = moveDuration > CONFIG.fox.movement.walkThreshold && isMovingForward && !shouldSlowDown;
            const currentSpeed = shouldRun ? CONFIG.fox.movement.runSpeed : CONFIG.fox.movement.speed;

            // Switch to walk animation if running too close to boundary
            if (shouldSlowDown && currentFoxAnimation === foxAnimations[2]) { // If running near edge
                switchFoxAnimation(1); // Switch to walk
            }

            // Calculate movement based on fox's current rotation
            const foxRotation = foxObject.rotation.y;
            const moveDistance = currentSpeed * moveForward;

            // Calculate new position based on fox's facing direction
            const newX = foxObject.position.x + Math.sin(foxRotation) * moveDistance;
            const newZ = foxObject.position.z + Math.cos(foxRotation) * moveDistance;

            // Check collision
            if (canFoxMoveTo(newX, newZ)) {
                foxObject.position.x = newX;
                foxObject.position.z = newZ;
                // Set position first, then apply terrain tilt separately
                foxObject.position.y = getGroundHeightAt(newX, newZ) + getFoxHeightOffset();
            } else {
                // Hit boundary - start auto-return
                foxMovement.isMoving = false;
                startAutoReturn();
            }
        }
    } else if (foxMovement.isReturning) {
        // Auto-return mode
        updateAutoReturn();
    } else {
        // No user input and not returning - check if fox needs to return home
        const distanceFromHome = Math.sqrt(
            (foxObject.position.x - CONFIG.fox.initialPosition.x) ** 2 +
            (foxObject.position.z - CONFIG.fox.initialPosition.z) ** 2
        );

        if (distanceFromHome > 5) { // If more than 5 units from home
            startAutoReturn();
        }
    }
}

function startAutoReturn() {
    foxMovement.isReturning = true;
    foxMovement.isMoving = true;
    foxMovement.moveStartTime = Date.now();
    switchFoxAnimation(1); // Walk

    // Keep camera following during auto-return (can be interrupted by user drag)
    cameraFollow.enabled = true;
    cameraFollow.userOverride = false; // Reset override for new auto-return
}

function updateAutoReturn() {
    const targetX = CONFIG.fox.initialPosition.x;
    const targetZ = CONFIG.fox.initialPosition.z;

    // Calculate direction to home
    const directionX = targetX - foxObject.position.x;
    const directionZ = targetZ - foxObject.position.z;
    const distance = Math.sqrt(directionX ** 2 + directionZ ** 2);

    if (distance < 1) {
        // Arrived home - stop and survey
        foxMovement.isReturning = false;
        foxMovement.isMoving = false;
        switchFoxAnimation(0); // Survey

        // Reset camera following state
        cameraFollow.enabled = false;
        cameraFollow.userOverride = false;

        // Start smooth return animation only if user wasn't controlling camera
        if (!cameraFollow.userOverride) {
            startFoxReturnAnimation();
        }
        return;
    }

    // Normalize direction
    const normalizedX = directionX / distance;
    const normalizedZ = directionZ / distance;

    // Gradually rotate fox to face home (creates natural turning while walking)
    const targetRotation = Math.atan2(normalizedX, normalizedZ);
    let currentRotation = foxObject.rotation.y;

    // Calculate the shortest rotation difference (handle wrapping around 2π)
    let rotationDiff = targetRotation - currentRotation;
    if (rotationDiff > Math.PI) rotationDiff -= 2 * Math.PI;
    if (rotationDiff < -Math.PI) rotationDiff += 2 * Math.PI;

    // Apply gradual rotation (fox turns while walking)
    const maxTurnSpeed = CONFIG.fox.movement.turnSpeed * CONFIG.fox.autoReturnTurnMultiplier;
    const turnAmount = Math.sign(rotationDiff) * Math.min(Math.abs(rotationDiff), maxTurnSpeed);
    foxObject.rotation.y += turnAmount;

    // Move towards home
    const moveDuration = Date.now() - foxMovement.moveStartTime;

    // Switch to run animation if walking long enough and not near boundary
    const shouldSlowDown = shouldFoxSlowDown();

    if (moveDuration > CONFIG.fox.movement.walkThreshold && currentFoxAnimation === foxAnimations[1] && !shouldSlowDown) {
        switchFoxAnimation(2); // Run (only if not near boundary)
    } else if (shouldSlowDown && currentFoxAnimation === foxAnimations[2]) {
        switchFoxAnimation(1); // Switch from run to walk if near boundary
    }

    // Determine speed based on duration and boundary proximity
    const shouldRun = moveDuration > CONFIG.fox.movement.walkThreshold && !shouldSlowDown;
    const currentSpeed = shouldRun ? CONFIG.fox.movement.runSpeed : CONFIG.fox.movement.speed;

    const newX = foxObject.position.x + normalizedX * currentSpeed;
    const newZ = foxObject.position.z + normalizedZ * currentSpeed;

    // Check if auto-return path is clear (prevent walking through hills)
    if (canFoxMoveTo(newX, newZ)) {
        foxObject.position.x = newX;
        foxObject.position.z = newZ;
        // Set position first, then apply terrain tilt separately
        foxObject.position.y = getGroundHeightAt(newX, newZ) + getFoxHeightOffset();
    } else {
        // Path blocked - try alternative movement strategies

        // Strategy 1: Try moving perpendicular to find a way around
        const perpendicularX = -normalizedZ;
        const perpendicularZ = normalizedX;

        // Try right perpendicular movement
        let alternateX = foxObject.position.x + perpendicularX * currentSpeed;
        let alternateZ = foxObject.position.z + perpendicularZ * currentSpeed;

        if (canFoxMoveTo(alternateX, alternateZ)) {
            foxObject.position.x = alternateX;
            foxObject.position.z = alternateZ;
            foxObject.position.y = getGroundHeightAt(alternateX, alternateZ) + getFoxHeightOffset();
        } else {
            // Try left perpendicular movement
            alternateX = foxObject.position.x - perpendicularX * currentSpeed;
            alternateZ = foxObject.position.z - perpendicularZ * currentSpeed;

            if (canFoxMoveTo(alternateX, alternateZ)) {
                foxObject.position.x = alternateX;
                foxObject.position.z = alternateZ;
                foxObject.position.y = getGroundHeightAt(alternateX, alternateZ) + getFoxHeightOffset();
            }
            // If both perpendicular paths are blocked, fox stays in place this frame
            // and will try again next frame as the situation may change
        }
    }
}

/**
 * Start smooth camera transition when fox returns home
 */
function startFoxReturnAnimation() {
    // Store current camera position and target for smooth interpolation
    foxReturnAnimation.startCameraPos = camera.position.clone();
    foxReturnAnimation.startCameraTarget = controls.target.clone();
    foxReturnAnimation.startTime = Date.now();
    foxReturnAnimation.active = true;
}

/**
 * Update camera to follow fox from behind
 */
function updateCameraFollow() {
    if (!cameraFollow.enabled || !foxObject || cameraFollow.userOverride) return;

    // Calculate target camera position behind the fox
    const foxPosition = foxObject.position;
    const foxRotation = foxObject.rotation.y;

    // Position camera behind fox at specified distance and height
    const targetX = foxPosition.x - Math.sin(foxRotation) * CONFIG.fox.cameraFollow.distance;
    const targetZ = foxPosition.z - Math.cos(foxRotation) * CONFIG.fox.cameraFollow.distance;
    const targetY = foxPosition.y + CONFIG.fox.cameraFollow.height;

    // Smoothly move camera to target position
    camera.position.x += (targetX - camera.position.x) * CONFIG.fox.cameraFollow.smoothing;
    camera.position.y += (targetY - camera.position.y) * CONFIG.fox.cameraFollow.smoothing;
    camera.position.z += (targetZ - camera.position.z) * CONFIG.fox.cameraFollow.smoothing;

    // Make camera look at fox
    const lookAtY = foxPosition.y + 5; // Look slightly above fox
    camera.lookAt(foxPosition.x, lookAtY, foxPosition.z);

    // Update controls target to match fox position (for smooth transitions)
    controls.target.set(foxPosition.x, lookAtY, foxPosition.z);
}

/**
 * Shared noise generation utilities for terrain and mountain generation
 */
const NoiseUtils = {
    /**
     * A pseudo-random number generator for a given 2D coordinate.
     * This creates a deterministic "white noise" value using a hashing algorithm.
     * @param {number} x - Integer X coordinate
     * @param {number} y - Integer Y coordinate
     * @returns {number} A pseudo-random value between 0 and 1
     */
    rand(x, y) {
        // A common hashing function using bitwise operations and large primes
        // to create pseudo-randomness and avoid linear artifacts.
        let n = x + y * 57;
        n = (n << 13) ^ n;
        n = n * (n * n * 15731 + 789221) + 1376312589;
        n = n & 0x7fffffff; // Keep it a positive integer
        return n / 2147483647.0; // Normalize to [0, 1]
    },

    /**
     * Smoothly interpolates between two values.
     * @param {number} a - Start value
     * @param {number} b - End value
     * @param {number} t - Interpolation factor (0-1)
     * @returns {number} The interpolated value
     */
    lerp(a, b, t) {
        return a * (1 - t) + b * t;
    },

    /**
     * 2D Perlin-style noise function that generates smooth, random-like values.
     * @param {number} x - X coordinate
     * @param {number} y - Y coordinate
     * @param {number} scale - Scale multiplier for coordinates
     * @returns {number} Noise value between 0 and 1
     */
    noise2D(x, y, scale = 1) {
        x *= scale;
        y *= scale;
        const ix = Math.floor(x); // Integer part of x
        const iy = Math.floor(y); // Integer part of y
        const fx = x - ix;        // Fractional part of x
        const fy = y - iy;        // Fractional part of y

        // Get random values for the four corners of the grid cell
        const a = this.rand(ix, iy);
        const b = this.rand(ix + 1, iy);
        const c = this.rand(ix, iy + 1);
        const d = this.rand(ix + 1, iy + 1);

        // Smooth the fractional parts for better interpolation
        const u = fx * fx * (3 - 2 * fx);
        const v = fy * fy * (3 - 2 * fy);

        // Bilinear interpolation
        return this.lerp(this.lerp(a, b, u), this.lerp(c, d, u), v);
    },

    /**
     * Multi-octave layered noise (Fractional Brownian Motion)
     * @param {number} x - X coordinate
     * @param {number} y - Y coordinate
     * @param {number} octaves - Number of noise layers
     * @param {number} persistence - Amplitude reduction per octave
     * @returns {number} Layered noise value between 0 and 1
     */
    layeredNoise(x, y, octaves = 4, persistence = 0.5) {
        let total = 0;
        let frequency = 1;
        let amplitude = 1;
        let maxValue = 0; // Used for normalizing to 0-1 range

        for (let i = 0; i < octaves; i++) {
            total += this.noise2D(x * frequency, y * frequency) * amplitude;
            maxValue += amplitude;
            amplitude *= persistence;
            frequency *= 2;
        }

        return total / maxValue;
    }
};

/**
 * Terrain generation utilities inspired by classic procedural noise algorithms
 */
const TerrainUtils = {
    // Use shared noise utilities
    rand: NoiseUtils.rand,
    lerp: NoiseUtils.lerp,
    noise2D: NoiseUtils.noise2D,
    layeredNoise: NoiseUtils.layeredNoise,

    /**
     * Generate terrain height at specific coordinates
     * @param {number} x - World X coordinate
     * @param {number} z - World Z coordinate
     * @returns {number} Terrain height
     */
    generateHeight(x, z) {
        const baseHeight = CONFIG.world.groundHeight;
        const terrainConfig = CONFIG.terrain;

        // Generate noise value using the layered approach
        const noiseValue = this.layeredNoise(
            x * terrainConfig.primaryScale,
            z * terrainConfig.primaryScale,
            terrainConfig.noiseOctaves,
            terrainConfig.noisePersistence
        );

        // Add a hill at the center
        const distanceToCenter = Math.sqrt(x * x + z * z);
        const hillRadius = CONFIG.terrain.focalHill.radius;
        const hillHeight = CONFIG.terrain.focalHill.height;
        const hillInfluence = Math.max(0, 1 - distanceToCenter / hillRadius);
        const hillOffset = hillInfluence * hillHeight;


        // Map the 0-1 noise value to the desired height variation
        return baseHeight + (noiseValue * terrainConfig.heightVariation) + hillOffset;
    }
};

/**
 * Mountain Terrain Generation Utilities
 * Specialized noise functions for creating dramatic mountain landscapes
 */
const MountainUtils = {
    /**
     * Generate mountain height using ridge noise for dramatic peaks
     * @param {number} x - World X coordinate
     * @param {number} z - World Z coordinate
     * @param {number} scale - Height scale multiplier
     * @returns {number} Mountain height
     */
    generateMountainHeight(x, z, scale = 1.0) {
        const mountainConfig = CONFIG.mountains;

        // Primary mountain structure using ridge noise
        const primaryNoise = this.ridgeNoise(
            x * mountainConfig.primaryScale,
            z * mountainConfig.primaryScale,
            mountainConfig.noiseOctaves,
            mountainConfig.noisePersistence
        );

        // Secondary detail noise for variation
        const detailNoise = NoiseUtils.layeredNoise(
            x * mountainConfig.secondaryScale,
            z * mountainConfig.secondaryScale,
            mountainConfig.detailOctaves,
            mountainConfig.detailPersistence
        );

        // Combine noises with ridge emphasis
        const combinedNoise = primaryNoise * mountainConfig.ridgeStrength + detailNoise * mountainConfig.detailMixing;

        // Apply height scaling - heights start from 0 and go up
        return combinedNoise * mountainConfig.heightVariation * scale;
    },

    /**
     * Ridge noise function for creating mountain-like terrain
     * Creates sharp peaks and ridges typical of mountain ranges
     */
    ridgeNoise(x, y, octaves, persistence) {
        const mountainConfig = CONFIG.mountains;
        let total = 0;
        let amplitude = 1;
        let maxValue = 0;
        let frequency = 1;

        for (let i = 0; i < octaves; i++) {
            // Get noise value and apply ridge transformation
            let noiseValue = NoiseUtils.noise2D(x * frequency, y * frequency);

            // Convert from 0-1 to -1-1 for ridge transformation
            noiseValue = (noiseValue - 0.5) * 2;

            // Ridge transformation: abs(noise) creates sharp peaks
            noiseValue = 1 - Math.abs(noiseValue);

            // Apply configurable sharpness for ridges
            noiseValue = Math.pow(noiseValue, mountainConfig.ridgeSharpness);

            total += noiseValue * amplitude;
            maxValue += amplitude;

            amplitude *= persistence;
            frequency *= 2;
        }

        return total / maxValue;
    },

    /**
     * Determine snow coverage based on height and add color variation
     * @param {number} height - Mountain height
     * @param {number} maxHeight - Maximum height in the range
     * @param {Object} colors - Color palette
     * @returns {THREE.Color} Mountain color with snow
     */
    getMountainColor(height, maxHeight, colors) {
        const normalizedHeight = height / maxHeight;
        const mountainConfig = CONFIG.mountains;

        // Use the same color thresholds as terrain for consistency
        const thresholds = CONFIG.terrain.elevationColorThresholds; // [0.3, 0.7]
        let baseColor;

        if (normalizedHeight < thresholds[0]) {
            // Lower areas - match terrain's darker ground color for edge consistency
            baseColor = new THREE.Color(colors.ground).multiplyScalar(CONFIG.terrain.lowAreaIntensity);
        } else if (normalizedHeight < thresholds[1]) {
            // Mid areas - normal ground color transitioning to foliage
            const midBlend = (normalizedHeight - thresholds[0]) / (thresholds[1] - thresholds[0]);
            baseColor = new THREE.Color(colors.ground).lerp(new THREE.Color(colors.foliage), midBlend * 0.5);
        } else {
            // Higher areas - foliage transitioning to rock/trunk
            const highBlend = Math.min(1.0, (normalizedHeight - thresholds[1]) / (1.0 - thresholds[1]));
            baseColor = new THREE.Color(colors.foliage).lerp(new THREE.Color(colors.trunk), highBlend * 0.6);
        }

        // Apply snow at high elevations
        if (normalizedHeight > mountainConfig.snowLineHeight) {
            const snowFactor = Math.min(1.0,
                (normalizedHeight - mountainConfig.snowLineHeight) / mountainConfig.snowBlendRange
            );

            // White snow color
            const snowColor = new THREE.Color(0xffffff);
            baseColor.lerp(snowColor, snowFactor);
        }

        return baseColor;
    }
};

/**
 * Apply colors to mountain based on what will be the final Y coordinate after rotation
 * @param {THREE.Mesh} mountain - The mountain mesh
 * @param {Object} colors - Color palette
 */
function applyMountainColors(mountain, colors) {
    const geometry = mountain.geometry;
    const vertices = geometry.attributes.position.array;
    const colorAttribute = geometry.attributes.color.array;


    // Find the height range in Z coordinates (which become Y after rotation)
    let minZ = Infinity, maxZ = -Infinity;
    let minX = Infinity, maxX = -Infinity;
    let minY = Infinity, maxY = -Infinity;

    for (let i = 0; i < vertices.length; i += 3) {
        minX = Math.min(minX, vertices[i]);
        maxX = Math.max(maxX, vertices[i]);
        minY = Math.min(minY, vertices[i + 1]);
        maxY = Math.max(maxY, vertices[i + 1]);
        minZ = Math.min(minZ, vertices[i + 2]);
        maxZ = Math.max(maxZ, vertices[i + 2]);
    }

    // Apply colors and show examples from the same sample vertices
    let colorExamples = [];
    for (let i = 0; i < vertices.length; i += 3) {
        const height = vertices[i + 2]; // Z coordinate
        const mountainColor = MountainUtils.getMountainColor(height, maxZ, colors);

        colorAttribute[i] = mountainColor.r;
        colorAttribute[i + 1] = mountainColor.g;
        colorAttribute[i + 2] = mountainColor.b;
    }


    geometry.attributes.color.needsUpdate = true;
}

/**
 * Create procedural terrain with noise-based height generation
 * Inspired by THREE.Terrain approach
 */
function createGround() {
    const colors = getCurrentColors();
    const geometry = new THREE.PlaneGeometry(
        CONFIG.world.groundSize,
        CONFIG.world.groundSize,
        CONFIG.world.groundSegments,
        CONFIG.world.groundSegments
    );

    // Generate terrain heights and colors using noise functions
    const vertices = geometry.attributes.position.array;
    const segmentsX = CONFIG.world.groundSegments;
    const segmentsZ = CONFIG.world.groundSegments;
    const sizeX = CONFIG.world.groundSize;
    const sizeZ = CONFIG.world.groundSize;

    // Create color attribute for elevation-based coloring
    const colorAttribute = new Float32Array(vertices.length);
    let minHeight = Infinity;
    let maxHeight = -Infinity;

    // First pass: generate heights and find min/max
    const heightValues = [];
    for (let i = 0; i < vertices.length; i += 3) {
        const x = vertices[i];
        const z = vertices[i + 1]; // Note: PlaneGeometry has Y as up axis before rotation

        // Generate procedural height
        const worldX = x;
        const worldZ = z;
        const terrainHeight = TerrainUtils.generateHeight(worldX, worldZ);
        const adjustedHeight = terrainHeight - CONFIG.world.groundHeight;

        vertices[i + 2] = adjustedHeight;
        heightValues.push(adjustedHeight);

        minHeight = Math.min(minHeight, adjustedHeight);
        maxHeight = Math.max(maxHeight, adjustedHeight);
    }

    // Second pass: assign colors based on elevation
    for (let i = 0; i < vertices.length; i += 3) {
        const height = heightValues[i / 3];
        const normalizedHeight = (height - minHeight) / (maxHeight - minHeight);

        // Create elevation-based color blending using configurable thresholds
        const thresholds = CONFIG.terrain.elevationColorThresholds;
        let terrainColor;
        if (normalizedHeight < thresholds[0]) {
            // Lower areas - darker ground color
            terrainColor = new THREE.Color(colors.ground).multiplyScalar(CONFIG.terrain.lowAreaIntensity);
        } else if (normalizedHeight < thresholds[1]) {
            // Mid areas - normal ground color
            terrainColor = new THREE.Color(colors.ground);
        } else {
            // Higher areas - lighter, more foliage-like
            terrainColor = new THREE.Color(colors.ground).lerp(new THREE.Color(colors.foliage), CONFIG.terrain.highAreaBlend);
        }

        colorAttribute[i] = terrainColor.r;
        colorAttribute[i + 1] = terrainColor.g;
        colorAttribute[i + 2] = terrainColor.b;
    }

    geometry.setAttribute('color', new THREE.BufferAttribute(colorAttribute, 3));
    geometry.attributes.position.needsUpdate = true;
    geometry.computeVertexNormals();

    // Create material with vertex colors enabled
    const material = new THREE.MeshLambertMaterial({
        vertexColors: true
    });

    floor = new THREE.Mesh(geometry, material);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = CONFIG.world.groundHeight;
    floor.receiveShadow = true;
    floor.castShadow = true;

    scene.add(floor);

    // Add grass patches
    createGrassPatches();
}


/**
 * Create grass patches with performance optimization
 * Adjusts grass count based on device capabilities
 */
function createGrassPatches() {
    const colors = getCurrentColors();
    const deviceCaps = getDeviceCapabilities();
    const grassCount = deviceCaps.isLowEnd ?
        CONFIG.performance.lowEndGrassCount :
        CONFIG.performance.highEndGrassCount;

    for (let i = 0; i < grassCount; i++) {
        const grass = createGrassPatch();

        // Random position across the field
        const angle = Utils.randRange(0, Math.PI * 2);
        const distance = Utils.randRange(...CONFIG.grass.spawnDistanceRange);
        grass.position.x = Math.cos(angle) * distance;
        grass.position.z = Math.sin(angle) * distance;

        // Get the approximate ground height at this position
        const groundHeight = getGroundHeightAt(grass.position.x, grass.position.z);
        grass.position.y = groundHeight;

        // Avoid grass too close to trees
        let tooClose = false;
        for (const tree of trees) {
            if (grass.position.distanceTo(tree.position) < CONFIG.grass.minDistanceFromTrees) {
                tooClose = true;
                break;
            }
        }

        if (!tooClose) {
            scene.add(grass);
            grassPatches.push(grass);
        }
    }
}

function createGrassPatch() {
    const colors = getCurrentColors();
    const group = new THREE.Group();
    const grassBlades = Utils.randInt(...CONFIG.grass.bladesPerPatchRange);

    for (let i = 0; i < grassBlades; i++) {
        const blade = createGrassBlade();

        // Random positioning within small patch
        blade.position.x = Utils.randRange(...CONFIG.grass.patchSpreadRange);
        blade.position.z = Utils.randRange(...CONFIG.grass.patchSpreadRange);
        blade.rotation.y = Utils.randRange(0, Math.PI * 2);

        group.add(blade);
    }

    return group;
}

function createGrassBlade() {
    const colors = getCurrentColors();
    const height = Utils.randRange(...CONFIG.grass.heightRange);
    const baseWidth = Utils.randRange(...CONFIG.grass.baseWidthRange);
    const underground = Utils.randRange(...CONFIG.grass.undergroundRange); // Extend below ground

    // Create triangular blade shape - extends below ground, tapering to point above
    const shape = new THREE.Shape();
    shape.moveTo(-baseWidth / 2, -underground); // Bottom left (underground)
    shape.lineTo(baseWidth / 2, -underground);  // Bottom right (underground)
    shape.lineTo(0, height);                  // Top point (above ground)
    shape.lineTo(-baseWidth / 2, -underground); // Back to start

    const geometry = new THREE.ShapeGeometry(shape);

    // Move pivot point to ground level (where grass meets ground)
    // This shifts all vertices so the ground line becomes the pivot
    geometry.translate(0, underground, 0);

    // Add slight bend to the grass blade
    const vertices = geometry.attributes.position.array;
    for (let i = 0; i < vertices.length; i += 3) {
        const y = vertices[i + 1];
        const bendFactor = (y + underground) / (height + underground); // 0 at underground bottom, 1 at top
        vertices[i] += bendFactor * Utils.randRange(-0.5, 0.5); // Slight bend
    }
    geometry.attributes.position.needsUpdate = true;
    geometry.computeVertexNormals();

    // Use foliage color with some variation
    const grassColor = new THREE.Color(colors.foliage);
    grassColor.offsetHSL(Utils.randRange(-0.1, 0.1), Utils.randRange(-0.2, 0.2), Utils.randRange(-0.1, 0.1));

    const material = new THREE.MeshLambertMaterial({
        color: grassColor,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.9
    });

    const blade = new THREE.Mesh(geometry, material);
    blade.castShadow = true;
    blade.userData.type = 'grass';
    blade.userData.swayPhase = Utils.randRange(0, Math.PI * 2);
    blade.userData.swaySpeed = Utils.randRange(...CONFIG.grass.swaySpeedRange);
    blade.userData.swayIntensity = Utils.randRange(...CONFIG.grass.swayIntensityRange);

    return blade;
}

/**
 * Get ground height at specific world coordinates
 * Uses terrain generation function for consistent height calculation
 * @param {number} x - World X coordinate
 * @param {number} z - World Z coordinate
 * @returns {number} Ground height at coordinates
 */
function getGroundHeightAt(x, z) {
    // Always use geometry interpolation for consistency with actual terrain mesh
    if (!floor || !floor.geometry) {
        return CONFIG.world.groundHeight;
    }

    const geometry = floor.geometry;
    const vertices = geometry.attributes.position.array;

    // Use CONFIG values for consistent calculations
    const segmentsX = CONFIG.world.groundSegments;
    const segmentsZ = CONFIG.world.groundSegments;
    const verticesX = segmentsX + 1; // 21 vertices along X
    const verticesZ = segmentsZ + 1; // 21 vertices along Z
    const sizeX = CONFIG.world.groundSize;
    const sizeZ = CONFIG.world.groundSize;

    // Convert world coordinates to normalized coordinates (0 to 1)
    const normalizedX = (x + sizeX / 2) / sizeX; // 0 to 1
    const normalizedZ = (z + sizeZ / 2) / sizeZ; // 0 to 1

    // Convert to vertex grid coordinates (0 to segmentsX/Z)
    const gridX = normalizedX * segmentsX;
    const gridZ = normalizedZ * segmentsZ;


    // Get the four surrounding vertices for bilinear interpolation
    const x1 = Math.floor(gridX);
    const x2 = Math.min(x1 + 1, segmentsX);
    const z1 = Math.floor(gridZ);
    const z2 = Math.min(z1 + 1, segmentsZ);

    // Get heights at the four corners
    const getVertexHeight = (vx, vz) => {
        const index = (vz * verticesX + vx) * 3 + 2; // +2 for Z coordinate (height)
        return index < vertices.length ? vertices[index] : 0;
    };

    const h1 = getVertexHeight(x1, z1); // bottom-left
    const h2 = getVertexHeight(x2, z1); // bottom-right
    const h3 = getVertexHeight(x1, z2); // top-left
    const h4 = getVertexHeight(x2, z2); // top-right


    // Bilinear interpolation
    const fx = gridX - x1;
    const fz = gridZ - z1;

    const h12 = h1 * (1 - fx) + h2 * fx; // interpolate bottom edge
    const h34 = h3 * (1 - fx) + h4 * fx; // interpolate top edge
    const finalHeight = h12 * (1 - fz) + h34 * fz; // interpolate between edges


    // Add floor position offset
    return finalHeight + floor.position.y;
}

function updateGrassColors(colors) {
    grassPatches.forEach(patch => {
        patch.children.forEach(blade => {
            if (blade.userData.type === 'grass') {
                const grassColor = new THREE.Color(colors.foliage);
                grassColor.offsetHSL(Utils.randRange(-0.1, 0.1), Utils.randRange(-0.2, 0.2), Utils.randRange(-0.1, 0.1));
                blade.material.color = grassColor;
            }
        });
    });
}

/**
 * Update terrain colors based on current color scheme
 * @param {Object} colors - Current color palette
 */
function updateTerrainColors(colors) {
    if (!floor || !floor.geometry || !floor.geometry.attributes.color) {
        return;
    }

    const geometry = floor.geometry;
    const colorAttribute = geometry.attributes.color;
    const vertices = geometry.attributes.position.array;

    // Recalculate height bounds for color mapping
    let minHeight = Infinity;
    let maxHeight = -Infinity;

    for (let i = 0; i < vertices.length; i += 3) {
        const height = vertices[i + 2]; // Z coordinate after rotation
        minHeight = Math.min(minHeight, height);
        maxHeight = Math.max(maxHeight, height);
    }

    // Update vertex colors based on elevation
    for (let i = 0; i < vertices.length; i += 3) {
        const height = vertices[i + 2];
        const normalizedHeight = (height - minHeight) / (maxHeight - minHeight);

        // Use configurable thresholds for color blending
        const thresholds = CONFIG.terrain.elevationColorThresholds;
        let terrainColor;
        if (normalizedHeight < thresholds[0]) {
            // Lower areas - darker ground color
            terrainColor = new THREE.Color(colors.ground).multiplyScalar(CONFIG.terrain.lowAreaIntensity);
        } else if (normalizedHeight < thresholds[1]) {
            // Mid areas - normal ground color
            terrainColor = new THREE.Color(colors.ground);
        } else {
            // Higher areas - lighter, more foliage-like
            terrainColor = new THREE.Color(colors.ground).lerp(new THREE.Color(colors.foliage), CONFIG.terrain.highAreaBlend);
        }

        colorAttribute.array[i] = terrainColor.r;
        colorAttribute.array[i + 1] = terrainColor.g;
        colorAttribute.array[i + 2] = terrainColor.b;
    }

    colorAttribute.needsUpdate = true;
}

/**
 * Create star field with performance optimization
 * Uses device-specific star counts for optimal performance
 */
function createStars() {
    const deviceCaps = getDeviceCapabilities();
    const starCount = deviceCaps.isLowEnd ?
        CONFIG.performance.lowEndStarCount :
        CONFIG.performance.highEndStarCount;

    // Create star field as a single geometry for better performance
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = [];
    const starColors = [];

    for (let i = 0; i < starCount; i++) {
        // Position stars in a large sphere around the scene
        const radius = Utils.randRange(...CONFIG.stars.radiusRange);
        const theta = Utils.randRange(0, Math.PI * 2);
        const phi = Utils.randRange(0, Math.PI);

        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = Math.abs(radius * Math.cos(phi)) + CONFIG.stars.heightOffset; // Keep stars above ground
        const z = radius * Math.sin(phi) * Math.sin(theta);

        starPositions.push(x, y, z);

        // Random star brightness/color
        const brightness = Utils.randRange(...CONFIG.stars.brightnessRange);
        starColors.push(brightness, brightness, brightness * CONFIG.stars.blueTint); // Slight blue tint
    }

    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.Float32BufferAttribute(starColors, 3));

    // Store original colors for twinkling animation
    starGeometry.userData = { originalColors: [...starColors] };

    const starMaterial = new THREE.PointsMaterial({
        size: CONFIG.stars.sizePoints,
        vertexColors: true,
        transparent: true,
        opacity: 1.0,
        sizeAttenuation: false
    });

    const starField = new THREE.Points(starGeometry, starMaterial);
    starField.userData.type = 'stars';
    starField.visible = false; // Hidden by default

    stars.push(starField);
    scene.add(starField);
}

/**
 * Create sun for light theme
 * Positioned at the directional light source location
 * @returns {THREE.Group} Sun object with glow effect
 */
function createSun() {
    const config = CONFIG.celestial.sun;
    const lightPos = CONFIG.lighting.directionalLightPosition;

    const sunGroup = new THREE.Group();

    // Main sun sphere
    const sunGeometry = new THREE.SphereGeometry(config.radius, 32, 16);
    const sunMaterial = new THREE.MeshLambertMaterial({
        color: config.color,
        emissive: config.color,
        emissiveIntensity: config.emissiveIntensity
    });

    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    sunGroup.add(sun);

    // Add glow effect
    const glowGeometry = new THREE.SphereGeometry(config.radius * 1.3, 32, 16);
    const glowMaterial = new THREE.MeshBasicMaterial({
        color: config.glowColor,
        transparent: true,
        opacity: config.glowIntensity,
        side: THREE.BackSide
    });

    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    sunGroup.add(glow);

    // Position at light source location
    const direction = new THREE.Vector3(...lightPos).normalize();
    sunGroup.position.copy(direction.multiplyScalar(config.distance));

    sunGroup.userData.type = 'sun';
    sunGroup.visible = false; // Hidden by default

    return sunGroup;
}

/**
 * Create moon for dark theme
 * Positioned at the directional light source location
 * @returns {THREE.Group} Moon object with subtle glow
 */
function createMoon() {
    const config = CONFIG.celestial.moon;
    const lightPos = CONFIG.lighting.directionalLightPosition;

    const moonGroup = new THREE.Group();

    // Main moon sphere
    const moonGeometry = new THREE.SphereGeometry(config.radius, 32, 16);
    const moonMaterial = new THREE.MeshLambertMaterial({
        color: config.color,
        emissive: config.color,
        emissiveIntensity: config.emissiveIntensity
    });

    const moon = new THREE.Mesh(moonGeometry, moonMaterial);
    moonGroup.add(moon);

    // Add subtle glow
    const glowGeometry = new THREE.SphereGeometry(config.radius * 1.2, 32, 16);
    const glowMaterial = new THREE.MeshBasicMaterial({
        color: config.glowColor,
        transparent: true,
        opacity: config.glowIntensity,
        side: THREE.BackSide
    });

    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    moonGroup.add(glow);

    // Position at light source location
    const direction = new THREE.Vector3(...lightPos).normalize();
    moonGroup.position.copy(direction.multiplyScalar(config.distance));

    moonGroup.userData.type = 'moon';
    moonGroup.visible = false; // Hidden by default

    return moonGroup;
}

function createHotAirBalloon() {
    const config = CONFIG.hotAirBalloon;

    const balloonGroup = new THREE.Group();

    // Create realistic balloon envelope with proper shape and gores
    const balloonGeometry = new THREE.SphereGeometry(config.balloonRadius, 16, 16);

    // Modify vertices to create proper balloon shape (bulbous top, tapered bottom)
    const positions = balloonGeometry.attributes.position;
    for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        const z = positions.getZ(i);

        // Get normalized position
        const normalizedY = y / config.balloonRadius;

        // Create balloon shape: wider at top, tapered toward bottom
        let scaleFactor = 1.0;
        if (normalizedY > 0) {
            // Top half - bulbous
            scaleFactor = 1.0 + (normalizedY * 0.3);
        } else {
            // Bottom half - tapered
            scaleFactor = 1.0 + (normalizedY * 0.7);
        }

        positions.setX(i, x * scaleFactor);
        positions.setZ(i, z * scaleFactor);

        // Stretch vertically for proper balloon proportions
        positions.setY(i, y * 1.3);
    }

    balloonGeometry.attributes.position.needsUpdate = true;
    balloonGeometry.computeVertexNormals();

    // Create multiple colored gores (vertical sections)
    const goreColors = config.colors;
    const goresPerSection = 2; // Number of longitude divisions per gore

    for (let goreIndex = 0; goreIndex < 8; goreIndex++) {
        const balloonMaterial = new THREE.MeshLambertMaterial({
            color: goreColors[goreIndex],
            transparent: true,
            opacity: 0.9
        });

        // Create geometry for this gore section
        const goreGeometry = balloonGeometry.clone();
        const gorePositions = goreGeometry.attributes.position;
        const goreUvs = goreGeometry.attributes.uv;

        // Hide vertices not belonging to this gore
        for (let i = 0; i < gorePositions.count; i++) {
            const u = goreUvs.getX(i);
            const goreStart = goreIndex / 8;
            const goreEnd = (goreIndex + 1) / 8;

            if (u < goreStart || u > goreEnd) {
                // Move vertices inside to hide them
                gorePositions.setX(i, 0);
                gorePositions.setY(i, 0);
                gorePositions.setZ(i, 0);
            }
        }

        goreGeometry.attributes.position.needsUpdate = true;
        const goreMesh = new THREE.Mesh(goreGeometry, balloonMaterial);
        balloonGroup.add(goreMesh);
    }

    // Create basket
    const basketGeometry = new THREE.BoxGeometry(config.basketWidth, config.basketHeight, config.basketWidth);
    const basketMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
    const basket = new THREE.Mesh(basketGeometry, basketMaterial);
    const basketDistance = config.balloonRadius * 1.8; // Increased distance for taller balloon
    basket.position.set(0, -basketDistance, 0);
    balloonGroup.add(basket);

    // Create sandbags on each side of the basket
    const sandbagCount = 4;
    const sandbagSize = config.basketWidth * 0.15;
    const sandbagMaterial = new THREE.MeshLambertMaterial({ color: 0x8B7355 }); // Sandy brown color

    for (let i = 0; i < sandbagCount; i++) {
        const angle = (i / sandbagCount) * Math.PI * 2;
        const sandbagX = Math.cos(angle) * (config.basketWidth * 0.45);
        const sandbagZ = Math.sin(angle) * (config.basketWidth * 0.45);

        // Create sandbag with slightly flattened sphere shape
        const sandbagGeometry = new THREE.SphereGeometry(sandbagSize, 8, 6);
        sandbagGeometry.scale(1, 0.7, 1); // Flatten slightly for realistic sandbag look

        const sandbag = new THREE.Mesh(sandbagGeometry, sandbagMaterial);
        sandbag.position.set(
            sandbagX,
            basket.position.y - config.basketHeight * 0.3, // Slightly below basket rim
            sandbagZ
        );

        balloonGroup.add(sandbag);
    }

    // Create ropes connecting balloon to basket
    for (let i = 0; i < 8; i++) { // More ropes for realism
        const angle = (i / 8) * Math.PI * 2;

        // Attach ropes to bottom edge of balloon envelope
        const balloonAttachY = -config.balloonRadius * 0.70; // Closer to balloon bottom
        const balloonX = Math.cos(angle) * (config.balloonRadius * 0.5); // Smaller radius for bottom
        const balloonZ = Math.sin(angle) * (config.balloonRadius * 0.5);

        // Attach to top rim of basket (not center or bottom)
        const basketRadius = i % 2 === 0 ? config.basketWidth * 0.4 : config.basketWidth * 0.3;
        const basketX = Math.cos(angle) * basketRadius;
        const basketZ = Math.sin(angle) * basketRadius;
        const basketAttachY = basket.position.y + config.basketHeight / 2; // Top of basket

        // Calculate rope length based on actual distance
        const ropeVector = new THREE.Vector3(
            basketX - balloonX,
            basketAttachY - balloonAttachY,
            basketZ - balloonZ
        );
        const ropeLength = ropeVector.length();

        const ropeGeometry = new THREE.CylinderGeometry(0.08, 0.08, ropeLength);
        const ropeMaterial = new THREE.MeshLambertMaterial({ color: 0x654321 });
        const rope = new THREE.Mesh(ropeGeometry, ropeMaterial);

        // Position rope at midpoint
        rope.position.set(
            (balloonX + basketX) / 2,
            (balloonAttachY + basketAttachY) / 2,
            (balloonZ + basketZ) / 2
        );

        // Orient rope correctly
        rope.lookAt(basketX, basketAttachY, basketZ);
        rope.rotateX(Math.PI / 2);

        balloonGroup.add(rope);
    }

    // Position the balloon in the sky
    balloonGroup.position.set(-config.distance, config.height, -config.distance * 0.3);
    balloonGroup.userData.type = 'hotAirBalloon';
    balloonGroup.userData.startX = -config.distance;
    balloonGroup.userData.speed = config.speed;
    balloonGroup.visible = false; // Hidden by default

    return balloonGroup;
}

function updateStarVisibility() {
    const colors = getCurrentColors();
    let theme;

    if (currentTheme === 'auto') {
        theme = getSystemTheme();
    } else {
        theme = currentTheme;
    }

    const isDarkTheme = theme === 'dark';

    // Update stars visibility
    stars.forEach(starField => {
        starField.visible = isDarkTheme;
    });

    // Update celestial objects visibility
    if (sun) {
        sun.visible = !isDarkTheme; // Show sun in light mode
    }
    if (moon) {
        moon.visible = isDarkTheme; // Show moon in dark mode
    }
    if (hotAirBalloon) {
        const currentSeason = getCurrentSeason();
        const isBallooningSeason = currentSeason !== 'winter'; // Hide during winter
        const isRainySpringWeather = currentSeason === 'spring' && isRainySpringDay; // Hide during rainy spring
        hotAirBalloon.visible = !isDarkTheme && isBallooningSeason && !isRainySpringWeather; // Show in light mode and good weather only
    }
}


function createBird() {
    const colors = getCurrentColors();
    const bird = new THREE.Group();

    // Simple bird body using ellipsoid
    const bodyGeometry = new THREE.SphereGeometry(1.5, 6, 4);
    bodyGeometry.scale(1, 0.7, 2); // Make it more bird-like
    const bodyMaterial = new THREE.MeshLambertMaterial({
        color: Utils.getRandomColor([0x8B4513, 0x654321, 0x2F4F4F, 0x696969])
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    bird.add(body);

    // Wings (made larger)
    const wingGeometry = new THREE.ConeGeometry(1.5, 4, 3);
    const wingMaterial = new THREE.MeshLambertMaterial({
        color: bodyMaterial.color.getHex()
    });

    const leftWing = new THREE.Mesh(wingGeometry, wingMaterial);
    leftWing.position.set(-1.2, 0, 0);
    leftWing.rotation.z = Math.PI / 6;
    leftWing.rotation.x = Math.PI / 2;
    bird.add(leftWing);

    const rightWing = new THREE.Mesh(wingGeometry, wingMaterial);
    rightWing.position.set(1.2, 0, 0);
    rightWing.rotation.z = -Math.PI / 6;
    rightWing.rotation.x = Math.PI / 2;
    bird.add(rightWing);

    // Bird flight data
    bird.userData.type = 'bird';
    bird.userData.velocity = {
        x: Utils.randRange(-0.5, 0.5),
        y: Utils.randRange(0.3, 0.8),
        z: Utils.randRange(-0.5, 0.5)
    };
    bird.userData.wingPhase = Utils.randRange(0, Math.PI * 2);
    bird.userData.flightTime = 0;
    bird.userData.leftWing = leftWing;
    bird.userData.rightWing = rightWing;

    return bird;
}

function createParticle() {
    const colors = getCurrentColors();
    const shapes = ['triangle', 'square', 'diamond'];
    const shape = shapes[Utils.randInt(0, shapes.length - 1)];
    let geometry;

    const size = Utils.randRange(0.5, 1.5);

    switch (shape) {
        case 'triangle':
            geometry = new THREE.ConeGeometry(size, size * 1.5, 3);
            break;
        case 'square':
            geometry = new THREE.BoxGeometry(size, size, 0.1);
            break;
        case 'diamond':
        default:
            geometry = new THREE.OctahedronGeometry(size);
            break;
    }

    const material = new THREE.MeshLambertMaterial({
        color: Utils.getRandomColor(colors.leaves)
    });

    const particle = new THREE.Mesh(geometry, material);
    particle.userData.type = 'particle';
    particle.userData.velocity = {
        x: Utils.randRange(-0.5, 0.5),
        y: Utils.randRange(-1, -0.5),
        z: Utils.randRange(-0.5, 0.5)
    };
    particle.userData.rotation = {
        x: Utils.randRange(-0.1, 0.1),
        y: Utils.randRange(-0.1, 0.1),
        z: Utils.randRange(-0.1, 0.1)
    };

    return particle;
}

function createSnowflake() {
    const config = CONFIG.weather.snow;
    const size = Utils.randRange(...config.sizeRange);
    const geometry = new THREE.SphereGeometry(size, 6, 4); // Low-poly snowflake

    const material = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: Utils.randRange(...config.opacityRange)
    });

    const snowflake = new THREE.Mesh(geometry, material);
    snowflake.userData.type = 'snow';
    snowflake.userData.velocity = {
        x: Utils.randRange(...config.velocityRange.x),
        y: Utils.randRange(...config.velocityRange.y),
        z: Utils.randRange(...config.velocityRange.z)
    };
    snowflake.userData.rotation = {
        x: Utils.randRange(...config.rotationRange),
        y: Utils.randRange(...config.rotationRange),
        z: Utils.randRange(...config.rotationRange)
    };

    return snowflake;
}

function createRaindrop() {
    const config = CONFIG.weather.rain;
    const geometry = new THREE.CylinderGeometry(0.1, 0.15, Utils.randRange(...config.lengthRange), 4); // Elongated drop

    const material = new THREE.MeshLambertMaterial({
        color: config.color,
        transparent: true,
        opacity: Utils.randRange(...config.opacityRange)
    });

    const raindrop = new THREE.Mesh(geometry, material);
    raindrop.userData.type = 'rain';
    raindrop.userData.velocity = {
        x: Utils.randRange(...config.velocityRange.x),
        y: Utils.randRange(...config.velocityRange.y),
        z: Utils.randRange(...config.velocityRange.z)
    };
    raindrop.userData.rotation = {
        x: 0, // No rotation for rain - falls straight
        y: 0,
        z: 0
    };

    return raindrop;
}

/**
 * Spawns heavy snowfall particles across the entire scene area
 * Called every frame during winter season for continuous snow effect
 */
function spawnSnowfall() {
    // Heavy snowfall - spawn configurable snowflakes per frame for intense effect
    const { isLowEnd } = getDeviceCapabilities();
    const baseRange = CONFIG.weather.snow.spawnRateRange;
    const spawnRate = isLowEnd ?
        [Math.max(1, Math.floor(baseRange[0] * 0.5)), Math.max(2, Math.floor(baseRange[1] * 0.5))] :
        baseRange;
    const snowflakesPerFrame = Utils.randInt(...spawnRate);

    for (let i = 0; i < snowflakesPerFrame; i++) {
        const snowflake = createSnowflake();
        const boundary = CONFIG.particles.worldBoundary;
        const height = CONFIG.weather.spawnHeight;

        snowflake.position.set(
            Utils.randRange(-boundary, boundary),
            Utils.randRange(height.min, height.max),
            Utils.randRange(-boundary, boundary)
        );

        snowflake.visible = true;
        flyingParticles.push(snowflake);
        scene.add(snowflake);
    }
}

/**
 * Spawns rainfall particles when spring weather conditions are met
 * Creates moderate to heavy rain effect across the scene
 */
function spawnRainfall() {
    // Moderate to heavy rain - spawn configurable raindrops per frame
    const { isLowEnd } = getDeviceCapabilities();
    const baseRange = CONFIG.weather.rain.spawnRateRange;
    const spawnRate = isLowEnd ?
        [Math.max(1, Math.floor(baseRange[0] * 0.6)), Math.max(2, Math.floor(baseRange[1] * 0.6))] :
        baseRange;
    const raindropsPerFrame = Utils.randInt(...spawnRate);

    for (let i = 0; i < raindropsPerFrame; i++) {
        const raindrop = createRaindrop();
        const boundary = CONFIG.particles.worldBoundary;
        const height = CONFIG.weather.spawnHeight;

        raindrop.position.set(
            Utils.randRange(-boundary, boundary),
            Utils.randRange(height.min, height.max),
            Utils.randRange(-boundary, boundary)
        );

        raindrop.visible = true;
        flyingParticles.push(raindrop);
        scene.add(raindrop);
    }
}

/**
 * Spawns falling leaf particles from trees based on seasonal intensity
 * @param {string} season - Current season affecting spawn rate
 */
function spawnFallingLeaves(season) {
    let leafSpawnChance = CONFIG.animation.particleSpawnChance;
    let leavesPerFrame = 1; // Default single leaf spawn

    if (season === 'autumn') {
        leafSpawnChance = CONFIG.weather.autumn.spawnChance;
        const { isLowEnd } = getDeviceCapabilities();
        const baseRange = CONFIG.weather.autumn.spawnRateRange;
        const spawnRate = isLowEnd ?
            [Math.max(1, Math.floor(baseRange[0] * 0.7)), Math.max(1, Math.floor(baseRange[1] * 0.7))] :
            baseRange;
        leavesPerFrame = Utils.randInt(...spawnRate);
    }

    if (Math.random() < leafSpawnChance && trees.length > 0) {
        for (let i = 0; i < leavesPerFrame; i++) {
            let particle;
            if (waitingParticles.length > 0) {
                particle = waitingParticles.pop();
                updateTreeColors(particle, getCurrentColors());
            } else {
                particle = createParticle();
            }

            // Spawn from random tree
            const sourceTree = trees[Utils.randInt(0, trees.length - 1)];
            const treePos = sourceTree.position;
            particle.position.set(
                treePos.x + Utils.randRange(...CONFIG.particles.spawnPositionRange),
                Utils.randRange(...CONFIG.particles.heightRange),
                treePos.z + Utils.randRange(...CONFIG.particles.spawnPositionRange)
            );

            particle.visible = true;
            flyingParticles.push(particle);
            scene.add(particle);
        }
    }
}

/**
 * Main particle spawning coordinator
 * Routes to appropriate weather or leaf spawning based on current season
 */
function spawnParticle() {
    const currentSeason = getCurrentSeason();

    switch (currentSeason) {
        case 'winter':
            spawnSnowfall();
            break;

        case 'spring':
            // Check if this is a rainy spring day (determined at page load)
            if (isRainySpringDay) {
                spawnRainfall();
            } else {
                spawnFallingLeaves(currentSeason);
            }
            break;

        case 'autumn':
        case 'summer':
        default:
            spawnFallingLeaves(currentSeason);
            break;
    }
}


/**
 * Update bird physics and animation
 * Uses CONFIG values for realistic flight behavior
 */
function updateBirds() {
    for (let i = birds.length - 1; i >= 0; i--) {
        const bird = birds[i];
        const time = Date.now() * 0.001;

        // Update flight time
        bird.userData.flightTime += CONFIG.animation.frameTime;

        // Enhanced wing flapping animation
        const wingFlap = Math.sin(time * CONFIG.birds.wingFlapFrequency + bird.userData.wingPhase);
        const flapIntensity = 0.8; // More dramatic wing movement

        // Wings rotate more dramatically and asymmetrically for realistic flight
        bird.userData.leftWing.rotation.z = Math.PI / 6 + wingFlap * flapIntensity;
        bird.userData.rightWing.rotation.z = -Math.PI / 6 - wingFlap * flapIntensity;

        // Add slight forward/backward wing movement
        bird.userData.leftWing.rotation.x = Math.PI / 2 + wingFlap * 0.2;
        bird.userData.rightWing.rotation.x = Math.PI / 2 + wingFlap * 0.2;

        // Update position with physics
        bird.position.x += bird.userData.velocity.x;
        bird.position.y += bird.userData.velocity.y;
        bird.position.z += bird.userData.velocity.z;

        // Bird flight physics with lift from wing flapping
        const flapCycle = Math.sin(time * CONFIG.birds.wingFlapFrequency + bird.userData.wingPhase);
        const isFlapping = flapCycle > 0; // Bird generates lift when wings go down

        if (isFlapping) {
            // Wing downstroke provides lift and forward thrust
            bird.userData.velocity.y += CONFIG.birds.liftForce;
            // Add forward momentum in current direction
            const currentSpeed = Math.sqrt(
                bird.userData.velocity.x * bird.userData.velocity.x +
                bird.userData.velocity.z * bird.userData.velocity.z
            );
            if (currentSpeed > 0.1) {
                const normalizedX = bird.userData.velocity.x / currentSpeed;
                const normalizedZ = bird.userData.velocity.z / currentSpeed;
                bird.userData.velocity.x += normalizedX * 0.01;
                bird.userData.velocity.z += normalizedZ * 0.01;
            }
        }

        // Gentle gravity (birds are good at flying!)
        bird.userData.velocity.y -= CONFIG.birds.gravityForce;

        // Slight air resistance
        bird.userData.velocity.x *= 0.999;
        bird.userData.velocity.z *= 0.999;

        // Natural flight wobble and direction changes
        bird.userData.velocity.x += Math.sin(time * 2 + bird.userData.wingPhase) * 0.01;
        bird.userData.velocity.z += Math.cos(time * 1.8 + bird.userData.wingPhase) * 0.01;

        // Prevent birds from diving too steeply
        if (bird.userData.velocity.y < -1) {
            bird.userData.velocity.y = -1;
        }

        // Orient bird in flight direction
        const velocity = bird.userData.velocity;
        const angle = Math.atan2(velocity.x, velocity.z);
        bird.rotation.y = angle;

        // Pitch based on vertical velocity
        const pitch = Math.atan2(velocity.y, Math.sqrt(velocity.x * velocity.x + velocity.z * velocity.z));
        bird.rotation.x = -pitch * 0.5;

        // Remove bird if it's too far away or been flying too long
        const distanceFromCenter = bird.position.distanceTo(new THREE.Vector3(0, 0, 0));
        if (distanceFromCenter > CONFIG.birds.maxFlightDistance || bird.userData.flightTime > CONFIG.animation.birdFlightDuration) {
            scene.remove(bird);
            birds.splice(i, 1);
        }
    }
}

function updateParticles() {
    for (let i = flyingParticles.length - 1; i >= 0; i--) {
        const particle = flyingParticles[i];

        // Update position
        particle.position.x += particle.userData.velocity.x;
        particle.position.y += particle.userData.velocity.y;
        particle.position.z += particle.userData.velocity.z;

        // Update rotation
        particle.rotation.x += particle.userData.rotation.x;
        particle.rotation.y += particle.userData.rotation.y;
        particle.rotation.z += particle.userData.rotation.z;

        // Add some wind effect
        particle.userData.velocity.x += Math.sin(Date.now() * 0.001) * 0.01;

        // Remove if too far down or out of bounds
        if (particle.position.y < CONFIG.particles.fallBoundary ||
            Math.abs(particle.position.x) > CONFIG.particles.worldBoundary ||
            Math.abs(particle.position.z) > CONFIG.particles.worldBoundary) {

            scene.remove(particle);
            flyingParticles.splice(i, 1);
            waitingParticles.push(particle);
            particle.visible = false;
        }
    }
}

function init() {
    // Determine if this is a rainy spring day (random chance on page load)
    isRainySpringDay = Math.random() < CONFIG.weather.rain.mixChance;

    container = document.getElementById('world');

    // Scene setup
    scene = new THREE.Scene();
    const colors = getCurrentColors();
    scene.background = new THREE.Color(colors.bg);
    scene.fog = new THREE.Fog(colors.bg, CONFIG.scene.fogNear, CONFIG.scene.fogFar);

    // Camera setup
    camera = new THREE.PerspectiveCamera(CONFIG.scene.cameraFov, window.innerWidth / window.innerHeight, CONFIG.scene.cameraNear, CONFIG.scene.cameraFar);

    // Ensure camera starts outside trees using CONFIG
    camera.position.set(CONFIG.world.safeStartDistance, 80, CONFIG.world.safeStartDistance);

    // Renderer setup
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Orbit Controls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, CONFIG.scene.cameraTargetHeight, 0);


    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, CONFIG.lighting.ambientLightIntensity);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, CONFIG.lighting.directionalLightIntensity);
    directionalLight.position.set(...CONFIG.lighting.directionalLightPosition);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = CONFIG.lighting.shadowMapSize;
    directionalLight.shadow.mapSize.height = CONFIG.lighting.shadowMapSize;
    directionalLight.shadow.camera.near = CONFIG.lighting.shadowCameraNear;
    directionalLight.shadow.camera.far = CONFIG.lighting.shadowCameraFar;
    directionalLight.shadow.camera.left = -CONFIG.lighting.shadowCameraBounds;
    directionalLight.shadow.camera.right = CONFIG.lighting.shadowCameraBounds;
    directionalLight.shadow.camera.top = CONFIG.lighting.shadowCameraBounds;
    directionalLight.shadow.camera.bottom = -CONFIG.lighting.shadowCameraBounds;
    scene.add(directionalLight);

    // Create objects
    createGround();
    createMountains();
    createClouds();
    createStars();

    // Create celestial objects
    sun = createSun();
    moon = createMoon();
    hotAirBalloon = createHotAirBalloon();
    scene.add(sun);
    scene.add(moon);
    scene.add(hotAirBalloon);

    createForest();
    createFox();

    // Event listeners
    window.addEventListener('resize', onWindowResize);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('click', onTreeClick);

    // Fox movement controls (WASD + number keys for manual animation)
    document.addEventListener('keydown', (event) => {
        switch (event.key.toLowerCase()) {
            case 'w':
                foxMovement.keys.w = true;
                break;
            case 'a':
                foxMovement.keys.a = true;
                break;
            case 's':
                foxMovement.keys.s = true;
                break;
            case 'd':
                foxMovement.keys.d = true;
                break;
        }
    });

    document.addEventListener('keyup', (event) => {
        switch (event.key.toLowerCase()) {
            case 'w':
                foxMovement.keys.w = false;
                break;
            case 'a':
                foxMovement.keys.a = false;
                break;
            case 's':
                foxMovement.keys.s = false;
                break;
            case 'd':
                foxMovement.keys.d = false;
                break;
        }
    });

    // Camera override detection for auto-return
    let isMouseDown = false;
    document.addEventListener('mousedown', () => {
        isMouseDown = true;
        // If fox is auto-returning and user starts dragging, override camera following
        if (foxMovement.isReturning && cameraFollow.enabled) {
            cameraFollow.userOverride = true;
        }
    });

    document.addEventListener('mouseup', () => {
        isMouseDown = false;
    });

    document.addEventListener('wheel', () => {
        // Zoom also overrides camera following during auto-return
        if (foxMovement.isReturning && cameraFollow.enabled) {
            cameraFollow.userOverride = true;
        }
    });

    // License popup controls
    const licensePopup = document.getElementById('licensePopup');
    const licenseInfo = document.getElementById('licenseInfo');
    const closePopup = document.getElementById('closePopup');

    function openLicenseModal() {
        licensePopup.style.display = 'block';
        licensePopup.setAttribute('aria-hidden', 'false');
        closePopup.focus();
        document.addEventListener('keydown', handleModalKeydown);
    }

    function closeLicenseModal() {
        licensePopup.style.display = 'none';
        licensePopup.setAttribute('aria-hidden', 'true');
        licenseInfo.focus();
        document.removeEventListener('keydown', handleModalKeydown);
    }

    function handleModalKeydown(event) {
        if (licensePopup.style.display === 'none') return;

        if (event.key === 'Escape') {
            closeLicenseModal();
            return;
        }

        if (event.key === 'Tab') {
            const focusableElements = licensePopup.querySelectorAll('button, a, [tabindex="0"]');
            const firstFocusable = focusableElements[0];
            const lastFocusable = focusableElements[focusableElements.length - 1];

            if (event.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    event.preventDefault();
                    lastFocusable.focus();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    event.preventDefault();
                    firstFocusable.focus();
                }
            }
        }
    }

    licenseInfo.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        openLicenseModal();
    });

    licenseInfo.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openLicenseModal();
        }
    });

    closePopup.addEventListener('click', closeLicenseModal);

    // Close popup when clicking outside
    licensePopup.addEventListener('click', (event) => {
        if (event.target.id === 'licensePopup') {
            closeLicenseModal();
        }
    });

    licensePopup.setAttribute('aria-hidden', 'true');

    // Window size
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (currentTheme === 'auto') {
            updateSceneColors();
            updateStarVisibility(); // Make sure stars update in auto mode
        }
    });

    // Initial star visibility check
    updateStarVisibility();
    // Initialize modal colors
    updateSceneColors();
}

function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onMouseMove(event) {
    mouseX = (event.clientX - windowHalfX) / windowHalfX;
    mouseY = (event.clientY - windowHalfY) / windowHalfY;
}

function onTreeClick(event) {
    // Skip if user is actively dragging the camera
    if (controls.isMouseDown) return;

    // Create raycaster for click detection
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // Calculate mouse position in normalized device coordinates
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    // Check for tree intersections
    const treeObjects = [];
    trees.forEach(tree => {
        tree.traverse(child => {
            if (child.isMesh && (child.userData.type === 'trunk' || child.userData.type === 'foliage')) {
                treeObjects.push(child);
            }
        });
    });

    const intersects = raycaster.intersectObjects(treeObjects);

    if (intersects.length > 0) {
        // Find which tree was clicked
        let clickedTree = intersects[0].object;
        while (clickedTree && !trees.includes(clickedTree)) {
            clickedTree = clickedTree.parent;
        }

        if (clickedTree) {
            spawnBirdFromTree(clickedTree);
        }
    }
}

/**
 * Spawn birds from a clicked tree
 * @param {THREE.Group} tree - Tree object to spawn birds from
 */
function spawnBirdFromTree(tree) {
    const numBirds = Utils.randInt(...CONFIG.birds.spawnCountRange);
    const treePos = tree.position;

    for (let i = 0; i < numBirds; i++) {
        const bird = createBird();

        // Position birds near the top of the tree's foliage with slight spread
        bird.position.set(
            treePos.x + Utils.randRange(-12, 12),
            treePos.y + Utils.randRange(40, 65), // Near tree top
            treePos.z + Utils.randRange(-12, 12)
        );

        // Birds spread out in different directions
        const spreadAngle = (i / numBirds) * Math.PI * 2 + Utils.randRange(-0.5, 0.5);
        const spreadDistance = Utils.randRange(0.3, 0.8);

        // Give each bird initial velocity to burst out in different directions
        bird.userData.velocity.y = Utils.randRange(1, 2.5); // Slightly more upward burst
        bird.userData.velocity.x = Math.cos(spreadAngle) * spreadDistance;
        bird.userData.velocity.z = Math.sin(spreadAngle) * spreadDistance;

        // Slight delay for more natural burst effect
        setTimeout(() => {
            birds.push(bird);
            scene.add(bird);
        }, i * CONFIG.birds.spawnDelayMs);
    }
}

/**
 * Main animation loop with performance optimizations
 * Handles intro sequence, camera controls, and all animations
 */
function animate() {
    requestAnimationFrame(animate);

    // Fox return animation
    if (foxReturnAnimation.active) {
        const elapsed = Date.now() - foxReturnAnimation.startTime;
        const progress = Math.min(elapsed / foxReturnAnimation.duration, 1);
        const extendedProgress = Math.min(elapsed / (foxReturnAnimation.duration + 200), 1); // Add 200ms buffer

        if (extendedProgress < 1) {
            // Smooth camera transition to focus on focal tree (use clamped progress for movement)
            const clampedProgress = Math.min(progress, 1);
            const easeOut = 1 - Math.pow(1 - clampedProgress, 3); // Smooth ease-out

            // Target: Position camera to showcase the focal tree (similar to intro)
            const focalTreePosition = CONFIG.interactions.focalTreePosition;
            const focalTreeGroundHeight = getGroundHeightAt(focalTreePosition.x, focalTreePosition.z);
            const focalTreeY = focalTreeGroundHeight + CONFIG.interactions.treeSittingOffset;

            const minDistance = CONFIG.world.cameraMinDistance; // 80 units minimum

            // Position camera around the focal tree (same distance as intro animation)
            const introRadius = CONFIG.world.safeStartDistance; // 200 units - same as intro
            const introBaseHeight = CONFIG.scene.introBaseHeight; // Same base height as intro

            // Use a fixed angle for consistent positioning (45 degrees from focal tree)
            const angle = Math.PI * 0.25; // 45 degrees
            let targetCameraX = focalTreePosition.x + Math.cos(angle) * introRadius;
            let targetCameraY = introBaseHeight; // Same height as intro
            let targetCameraZ = focalTreePosition.z + Math.sin(angle) * introRadius;

            // Distance check - intro radius should already be safe, but verify
            const currentDistance = introRadius;
            const safeMinDistance = minDistance * 1.05; // Add 5% buffer
            if (currentDistance < safeMinDistance) {
                const scale = safeMinDistance / currentDistance;
                targetCameraX = focalTreePosition.x + Math.cos(angle) * introRadius * scale;
                targetCameraY = introBaseHeight;
                targetCameraZ = focalTreePosition.z + Math.sin(angle) * introRadius * scale;
            }

            // Target look-at point (focal tree trunk/middle area)
            const targetLookAtX = focalTreePosition.x;
            const targetLookAtY = focalTreeY + 10; // Look at tree middle area
            const targetLookAtZ = focalTreePosition.z;

            // Interpolate camera position
            camera.position.x = foxReturnAnimation.startCameraPos.x + (targetCameraX - foxReturnAnimation.startCameraPos.x) * easeOut;
            camera.position.y = foxReturnAnimation.startCameraPos.y + (targetCameraY - foxReturnAnimation.startCameraPos.y) * easeOut;
            camera.position.z = foxReturnAnimation.startCameraPos.z + (targetCameraZ - foxReturnAnimation.startCameraPos.z) * easeOut;

            // Interpolate look-at target
            const currentTargetX = foxReturnAnimation.startCameraTarget.x + (targetLookAtX - foxReturnAnimation.startCameraTarget.x) * easeOut;
            const currentTargetY = foxReturnAnimation.startCameraTarget.y + (targetLookAtY - foxReturnAnimation.startCameraTarget.y) * easeOut;
            const currentTargetZ = foxReturnAnimation.startCameraTarget.z + (targetLookAtZ - foxReturnAnimation.startCameraTarget.z) * easeOut;

            camera.lookAt(currentTargetX, currentTargetY, currentTargetZ);
            controls.target.set(currentTargetX, currentTargetY, currentTargetZ);
        } else {
            // Animation complete - ensure final frame focuses on focal tree
            const focalTreePosition = CONFIG.interactions.focalTreePosition;
            const focalTreeGroundHeight = getGroundHeightAt(focalTreePosition.x, focalTreePosition.z);
            const focalTreeY = focalTreeGroundHeight + CONFIG.interactions.treeSittingOffset;

            const minDistance = CONFIG.world.cameraMinDistance; // 80 units minimum

            // Use same positioning logic as animation (same distance as intro)
            const introRadius = CONFIG.world.safeStartDistance; // 200 units - same as intro
            const introBaseHeight = CONFIG.scene.introBaseHeight; // Same base height as intro

            // Use the same fixed angle for consistent positioning
            const angle = Math.PI * 0.25; // 45 degrees
            let targetCameraX = focalTreePosition.x + Math.cos(angle) * introRadius;
            let targetCameraY = introBaseHeight;
            let targetCameraZ = focalTreePosition.z + Math.sin(angle) * introRadius;

            // Distance check - intro radius should already be safe, but verify
            const currentDistance = introRadius;
            const safeMinDistance = minDistance * 1.05; // Add 5% buffer
            if (currentDistance < safeMinDistance) {
                const scale = safeMinDistance / currentDistance;
                targetCameraX = focalTreePosition.x + Math.cos(angle) * introRadius * scale;
                targetCameraY = introBaseHeight;
                targetCameraZ = focalTreePosition.z + Math.sin(angle) * introRadius * scale;
            }
            const targetLookAtX = focalTreePosition.x;
            const targetLookAtY = focalTreeY + 10;
            const targetLookAtZ = focalTreePosition.z;

            // Set exact final positions
            camera.position.set(targetCameraX, targetCameraY, targetCameraZ);
            camera.lookAt(targetLookAtX, targetLookAtY, targetLookAtZ);

            // Set controls target and sync internal state (same method as intro)
            controls.target.set(targetLookAtX, targetLookAtY, targetLookAtZ);

            // Update controls to match final camera position (exact same as intro fix)
            controls.offset.copy(camera.position).sub(controls.target);
            controls.spherical.setFromVector3(controls.offset);

            // Deactivate animation and skip controls updates for a few frames
            foxReturnAnimation.active = false;
            foxReturnAnimation.skipControlsFrames = 3; // Skip 3 frames to prevent jump
        }
    }

    // Intro rotation animation
    if (introRotation.active) {
        if (introRotation.startTime === 0) {
            introRotation.startTime = Date.now();
        }

        const elapsed = Date.now() - introRotation.startTime;
        const progress = Math.min(elapsed / introRotation.duration, 1);

        if (progress < 1) {
            // Smooth rotation around the scene with ease-out
            const easedRotation = 1 - Math.pow(1 - progress, 4); // Stronger ease-out for rotation
            const angle = easedRotation * Math.PI * 0.5 * introRotation.direction; // Quarter rotation in random direction
            const radius = CONFIG.world.safeStartDistance;
            const baseHeight = CONFIG.scene.introBaseHeight;

            // Smooth easing function for height variation
            const easedHeight = 1 - Math.pow(1 - progress, 3);

            camera.position.x = Math.cos(angle) * radius;
            camera.position.z = Math.sin(angle) * radius;
            camera.position.y = baseHeight + Math.sin(easedHeight * Math.PI) * CONFIG.scene.introHeightVariation;

            camera.lookAt(0, CONFIG.scene.cameraTargetHeight, 0);
        } else {
            // Ensure controls target is at scene center before syncing
            controls.target.set(0, CONFIG.scene.cameraTargetHeight, 0);
            // Update controls to match final camera position
            controls.offset.copy(camera.position).sub(controls.target);
            controls.spherical.setFromVector3(controls.offset);
            controls.update();
            introRotation.active = false;
            // Reset any fox-related camera state that might interfere
            cameraFollow.enabled = false;
            cameraFollow.userOverride = false;

            // Force colors to reset to current season after intro
            if (currentTheme === 'auto') {
                // Use the same getCurrentColors() function that the rest of the app uses
                const currentSeasonColors = getCurrentColors();

                // Apply current season colors with proper theme
                scene.background.setHex(currentSeasonColors.bg);
                scene.fog.color.setHex(currentSeasonColors.bg);
                trees.forEach(tree => updateTreeColors(tree, currentSeasonColors));
                updateMountainColors(currentSeasonColors);
                updateCloudColors(currentSeasonColors);
                updateTerrainColors(currentSeasonColors);

                // Update text color for contrast
                const textColor = `#${currentSeasonColors.textColor.toString(16).padStart(6, '0')}`;
                const titleElement = document.querySelector('.title');
                const subtitleElement = document.querySelector('.subtitle');
                const separatorElement = document.querySelector('.title-separator');
                if (titleElement) titleElement.style.setProperty('color', textColor, 'important');
                if (subtitleElement) subtitleElement.style.setProperty('color', textColor, 'important');
                if (separatorElement) separatorElement.style.setProperty('background', `linear-gradient(to right, transparent, ${textColor}, transparent)`, 'important');
            }
        }
    }

    // Update controls (disabled during intro, fox return animation, but allow during fox following if user overrides)
    if (!introRotation.active && !foxReturnAnimation.active && (!cameraFollow.enabled || cameraFollow.userOverride)) {
        // Skip controls update for a few frames after fox return animation ends
        if (foxReturnAnimation.skipControlsFrames > 0) {
            foxReturnAnimation.skipControlsFrames--;
        } else {
            controls.update();
        }
    }

    // Reset text color for manual themes (let CSS handle it)
    if (currentTheme !== 'auto') {
        const titleElement = document.querySelector('.title');
        const subtitleElement = document.querySelector('.subtitle');
        const separatorElement = document.querySelector('.title-separator');

        if (titleElement) titleElement.style.removeProperty('color');
        if (subtitleElement) subtitleElement.style.removeProperty('color');
        if (separatorElement) separatorElement.style.removeProperty('background');
    }

    // Tree swaying animation
    const time = Date.now() * 0.002;

    // Cloud floating animation
    clouds.forEach((cloud, index) => {
        const windOffset = cloud.userData.windOffset;
        const windStrength = cloud.userData.windStrength;

        // Gentle floating motion with minimum height constraint
        const baseY = cloud.userData.baseHeight || 180;
        const floatOffset = Math.sin(time * 0.3 + windOffset) * 15 * windStrength;
        cloud.position.y = Math.max(baseY + floatOffset, 160); // Minimum height of 160
        cloud.rotation.y += 0.001 * windStrength;

        // Subtle opacity variation
        cloud.children.forEach(puff => {
            const baseOpacity = cloud.userData.baseOpacity * 0.8;
            const variation = Math.sin(time * 0.2 + windOffset + index) * 0.2;
            puff.material.opacity = Math.max(0.1, baseOpacity + variation * baseOpacity);
        });
    });

    // Hot air balloon animation
    if (hotAirBalloon && hotAirBalloon.visible) {
        const speed = hotAirBalloon.userData.speed;
        hotAirBalloon.position.x += speed;

        // Add gentle floating motion
        const floatOffset = Math.sin(time * 0.1) * CONFIG.hotAirBalloon.floatAmplitude;
        hotAirBalloon.position.y = CONFIG.hotAirBalloon.height + floatOffset;

        // Reset position when it moves too far to the right
        if (hotAirBalloon.position.x > 800) {
            hotAirBalloon.position.x = hotAirBalloon.userData.startX;
        }
    }

    // Grass swaying animation
    grassPatches.forEach(patch => {
        patch.children.forEach(blade => {
            if (blade.userData.type === 'grass' && blade.userData.swayPhase !== undefined) {
                const sway = Math.sin(time * blade.userData.swaySpeed + blade.userData.swayPhase) * blade.userData.swayIntensity;
                blade.rotation.z = sway;
            }
        });
    });

    // Star twinkling animation - individual star brightness variation
    stars.forEach(starField => {
        if (starField.visible && starField.geometry.userData.originalColors) {
            const positions = starField.geometry.attributes.position.array;
            const colors = starField.geometry.attributes.color.array;
            const originalColors = starField.geometry.userData.originalColors;

            for (let i = 0; i < positions.length; i += 3) {
                // Individual twinkling based on position and time with random phase offset
                const phaseOffset = positions[i] * 0.01 + positions[i + 1] * 0.007 + positions[i + 2] * 0.013;
                const twinkleSpeed = CONFIG.stars.twinkleSpeedBase + Math.sin(phaseOffset) * CONFIG.stars.twinkleSpeedVariation;
                const twinkle = Math.sin(time * twinkleSpeed + phaseOffset) * CONFIG.stars.twinkleIntensity + (1 - CONFIG.stars.twinkleIntensity);

                // Apply twinkling to each color component using original colors
                const colorIndex = (i / 3) * 3; // Convert position index to color index
                colors[colorIndex] = originalColors[colorIndex] * twinkle;         // R
                colors[colorIndex + 1] = originalColors[colorIndex + 1] * twinkle; // G
                colors[colorIndex + 2] = originalColors[colorIndex + 2] * twinkle; // B
            }

            // Update the color attribute
            starField.geometry.attributes.color.needsUpdate = true;
        }
    });

    trees.forEach((tree, index) => {
        const windOffset = tree.userData.windOffset;
        const windStrength = tree.userData.windStrength;

        // Base swaying motion with individual variation
        tree.rotation.z = Math.sin(time * 0.7 + windOffset) * 0.015 * windStrength;
        tree.rotation.x = Math.sin(time * 0.5 + windOffset) * 0.01 * windStrength;

        // Subtle mouse interaction for trees (reduced when controls are active)
        if (!controls.isMouseDown) {
            const mouseInfluence = 0.02;
            const targetRotationY = mouseX * mouseInfluence;
            const targetRotationX = mouseY * mouseInfluence * 0.5;

            tree.rotation.y += (targetRotationY - tree.rotation.y) * 0.01;
            tree.rotation.x += (targetRotationX - tree.rotation.x) * 0.01;
        }

        // Individual foliage movement
        tree.children.forEach((child, childIndex) => {
            if (child.userData.type === 'foliage') {
                child.rotation.z = Math.sin(time * 0.8 + windOffset + childIndex) * 0.025;
                child.rotation.y = Math.sin(time * 0.6 + windOffset + childIndex) * 0.015;
            }
        });
    });

    // Particle system
    spawnParticle();
    updateParticles();

    // Bird system
    updateBirds();

    // Fox animation system (disabled during intro to prevent camera interference)
    if (foxMixer && !introRotation.active) {
        foxMixer.update(0.016); // 60 FPS delta time
    }

    // Fox movement system (disabled during intro to prevent camera interference)
    if (!introRotation.active) {
        updateFoxMovement();
        // Update fox terrain tilting after movement positioning is complete
        updateFoxTerrainTilt();
    }

    // Camera following system (disabled during intro to prevent camera interference)
    if (!introRotation.active) {
        updateCameraFollow();
    }

    renderer.render(scene, camera);
}

// Respect reduced motion preference
function checkReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Initialize when page loads
window.addEventListener('load', () => {
    init();
    if (!checkReducedMotion()) {
        animate();
    } else {
        // Single render for reduced motion
        controls.update();
        renderer.render(scene, camera);
    }
});