#!/usr/bin/env node

/**
 * Documentation Generator
 * Automatically extracts JSDoc comments and generates API documentation
 * Usage: node generate-docs.js
 */

const fs = require('fs');
const path = require('path');

const INPUT_FILE = path.join(__dirname, 'src', 'main.js');
const OUTPUT_DIR = path.join(__dirname, 'docs');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'API.md');

/**
 * Extract JSDoc comments and function signatures from JavaScript code
 * @param {string} code - JavaScript source code
 * @returns {Array} Array of documentation objects
 */
function extractDocumentation(code) {
    const docs = [];
    const lines = code.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Look for JSDoc comment start
        if (line.trim().startsWith('/**')) {
            const docComment = [];
            let j = i;
            
            // Extract the entire JSDoc comment
            while (j < lines.length && !lines[j].includes('*/')) {
                docComment.push(lines[j]);
                j++;
            }
            if (j < lines.length) {
                docComment.push(lines[j]); // Include the closing */
            }
            
            // Look for the function/const declaration that follows
            let k = j + 1;
            while (k < lines.length && lines[k].trim() === '') {
                k++; // Skip empty lines
            }
            
            if (k < lines.length) {
                const declaration = lines[k].trim();
                if (declaration.startsWith('function ') || 
                    declaration.startsWith('const ') || 
                    declaration.startsWith('let ') ||
                    declaration.includes('= ')) {
                    
                    docs.push({
                        comment: docComment.join('\n'),
                        declaration: declaration,
                        lineNumber: k + 1
                    });
                }
            }
            
            i = j; // Move past this comment
        }
    }
    
    return docs;
}

/**
 * Parse JSDoc comment into structured data
 * @param {string} comment - Raw JSDoc comment
 * @returns {Object} Parsed documentation data
 */
function parseJSDoc(comment) {
    const lines = comment.split('\n').map(line => line.replace(/^\s*\*\s?/, '').trim());
    
    const result = {
        description: '',
        params: [],
        returns: null,
        type: null
    };
    
    let currentSection = 'description';
    
    for (const line of lines) {
        if (line.startsWith('/**') || line.startsWith('*/')) {
            continue;
        }
        
        if (line.startsWith('@param')) {
            currentSection = 'param';
            const match = line.match(/@param\s+\{([^}]+)\}\s+(\w+)\s*-?\s*(.*)/);
            if (match) {
                result.params.push({
                    type: match[1],
                    name: match[2],
                    description: match[3]
                });
            }
        } else if (line.startsWith('@returns')) {
            const match = line.match(/@returns\s+\{([^}]+)\}\s*(.*)/);
            if (match) {
                result.returns = {
                    type: match[1],
                    description: match[2]
                };
            }
        } else if (currentSection === 'description' && line) {
            result.description += (result.description ? ' ' : '') + line;
        }
    }
    
    return result;
}

/**
 * Extract function name from declaration
 * @param {string} declaration - Function declaration line
 * @returns {string} Function name
 */
function extractFunctionName(declaration) {
    // Handle different declaration patterns
    if (declaration.startsWith('function ')) {
        const match = declaration.match(/function\s+(\w+)/);
        return match ? match[1] : 'unknown';
    } else if (declaration.includes('const ') || declaration.includes('let ')) {
        const match = declaration.match(/(?:const|let)\s+(\w+)/);
        return match ? match[1] : 'unknown';
    }
    return 'unknown';
}

/**
 * Categorize functions based on their names and descriptions
 * @param {string} name - Function name
 * @param {string} description - Function description
 * @returns {string} Category name
 */
function categorizeFunction(name, description) {
    const nameLC = name.toLowerCase();
    
    if (nameLC.includes('config') || name === 'CONFIG') return 'Configuration';
    if (nameLC.includes('cache') || nameLC.includes('device') || nameLC.includes('performance')) return 'Performance & Device Detection';
    if (nameLC.includes('theme') || nameLC.includes('color')) return 'Theme & Color Management';
    if (nameLC.includes('tree') || nameLC.includes('forest') || nameLC.includes('foliage')) return 'Tree Generation';
    if (nameLC.includes('fox') || nameLC.includes('animal')) return 'Fox Character & Animation';
    if (nameLC.includes('camera') || nameLC.includes('control') || nameLC.includes('orbit')) return 'Camera Controls';
    if (nameLC.includes('mountain') || nameLC.includes('terrain') || nameLC.includes('ground') || nameLC.includes('grass') || nameLC.includes('boulder')) return 'Terrain & Environment';
    if (nameLC.includes('particle') || nameLC.includes('weather') || nameLC.includes('snow') || nameLC.includes('rain') || nameLC.includes('leaf')) return 'Weather & Particle Effects';
    if (nameLC.includes('sun') || nameLC.includes('moon') || nameLC.includes('star') || nameLC.includes('balloon')) return 'Celestial Objects';
    if (nameLC.includes('bird') || nameLC.includes('spawn')) return 'Wildlife & Spawning';
    if (nameLC.includes('noise') || nameLC.includes('random') || nameLC.includes('procedural')) return 'Procedural Generation';
    if (nameLC.includes('animate') || nameLC.includes('update') || nameLC.includes('render')) return 'Animation Loop';
    if (nameLC.includes('event') || nameLC.includes('click') || nameLC.includes('mouse') || nameLC.includes('resize')) return 'Event Handling';
    if (nameLC.includes('init') || nameLC.includes('create') || nameLC.includes('setup')) return 'Scene Setup';
    if (nameLC.includes('util') || nameLC.includes('helper') || nameLC.includes('rand')) return 'Utility Functions';
    
    return 'Utility Functions';
}

/**
 * Generate markdown documentation
 * @param {Array} docs - Array of documentation objects
 * @returns {string} Generated markdown content
 */
function generateMarkdown(docs) {
    const categories = {};
    
    // Parse and categorize all functions
    docs.forEach(doc => {
        const parsed = parseJSDoc(doc.comment);
        const name = extractFunctionName(doc.declaration);
        const category = categorizeFunction(name, parsed.description);
        
        if (!categories[category]) {
            categories[category] = [];
        }
        
        categories[category].push({
            name,
            declaration: doc.declaration,
            parsed,
            lineNumber: doc.lineNumber
        });
    });
    
    // Generate table of contents
    let markdown = '# API Documentation\n\n';
    markdown += 'A comprehensive Three.js-based 3D forest scene with interactive fox character, dynamic lighting, and seasonal themes.\n\n';
    markdown += '## Table of Contents\n\n';
    
    Object.keys(categories).sort().forEach(category => {
        markdown += `- [${category}](#${category.toLowerCase().replace(/[^a-z0-9]+/g, '-')})\n`;
    });
    
    markdown += '\n---\n\n';
    
    // Generate documentation for each category
    Object.keys(categories).sort().forEach(category => {
        markdown += `## ${category}\n\n`;
        
        categories[category].forEach(func => {
            markdown += `### ${func.name}\n`;
            
            if (func.parsed.description) {
                markdown += `**${func.parsed.description}**\n\n`;
            }
            
            // Function signature
            markdown += '```javascript\n';
            markdown += func.declaration + '\n';
            markdown += '```\n\n';
            
            // Parameters
            if (func.parsed.params.length > 0) {
                markdown += '**Parameters:**\n';
                func.parsed.params.forEach(param => {
                    markdown += `- \`${param.name}\` (\`${param.type}\`) - ${param.description}\n`;
                });
                markdown += '\n';
            }
            
            // Returns
            if (func.parsed.returns) {
                markdown += `**Returns:** \`${func.parsed.returns.type}\` - ${func.parsed.returns.description}\n\n`;
            }
            
            markdown += `*Source: [main.js:${func.lineNumber}](src/main.js#L${func.lineNumber})*\n\n`;
            markdown += '---\n\n';
        });
    });
    
    return markdown;
}

/**
 * Main execution function
 */
function main() {
    try {
        console.log('📚 Generating API documentation...');
        
        // Read the source file
        if (!fs.existsSync(INPUT_FILE)) {
            throw new Error(`Source file not found: ${INPUT_FILE}`);
        }
        
        const sourceCode = fs.readFileSync(INPUT_FILE, 'utf8');
        
        // Extract documentation
        const docs = extractDocumentation(sourceCode);
        console.log(`   Found ${docs.length} documented functions`);
        
        // Generate markdown
        const markdown = generateMarkdown(docs);
        
        // Ensure output directory exists
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR, { recursive: true });
        }
        
        // Write output file
        fs.writeFileSync(OUTPUT_FILE, markdown);
        
        console.log(`✅ Documentation generated: ${OUTPUT_FILE}`);
        console.log(`   Size: ${(markdown.length / 1024).toFixed(1)}KB`);
        
    } catch (error) {
        console.error('❌ Documentation generation failed:', error.message);
        process.exit(1);
    }
}

// Run if called directly
if (require.main === module) {
    main();
}

module.exports = { main, extractDocumentation, parseJSDoc, generateMarkdown };