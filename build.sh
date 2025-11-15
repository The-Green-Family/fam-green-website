#!/bin/bash

# Build script for fam.green website
# Creates minified production build in dist/ directory

set -e  # Exit on any error

echo "🚀 Building fam.green website..."

# Check for node_modules or suggest install
if [ ! -d "node_modules" ]; then
    echo "❌ Dependencies not installed. Run: npm install"
    exit 1
fi

# Use local binaries from node_modules
HTML_MINIFIER="./node_modules/.bin/html-minifier-terser"
CLEANCSS="./node_modules/.bin/cleancss"
TERSER="./node_modules/.bin/terser"

# Clean and create dist directory
echo "📁 Creating dist directory..."
rm -rf dist
mkdir -p dist

# Copy static assets
echo "📋 Copying static assets..."
cp -r assets/* assets/.* dist/ 2> /dev/null || true
cp LICENSE dist/
cp src/favicon.svg dist/

# Minify HTML
echo "🗜️  Minifying HTML..."
$HTML_MINIFIER \
  --collapse-whitespace \
  --remove-comments \
  --remove-optional-tags \
  --remove-redundant-attributes \
  --remove-script-type-attributes \
  --remove-tag-whitespace \
  --use-short-doctype \
  --minify-css true \
  --minify-js true \
  src/index.html \
  --output dist/index.html

# Minify CSS
echo "🎨 Minifying CSS..."
$CLEANCSS -o dist/main.css src/main.css

# Generate documentation
echo "📚 Generating API documentation..."
node generate-docs.js

# Minify JavaScript
echo "⚡ Minifying JavaScript..."
$TERSER src/main.js \
  --module \
  --compress drop_console=true,drop_debugger=true \
  --mangle \
  --output dist/main.js

# Display file sizes
echo ""
echo "📊 Build completed! File sizes:"
echo "HTML: $(du -h dist/index.html | cut -f1) ($(du -h src/index.html | cut -f1) → $(du -h dist/index.html | cut -f1))"
echo "CSS:  $(du -h dist/main.css | cut -f1) ($(du -h src/main.css | cut -f1) → $(du -h dist/main.css | cut -f1))"
echo "JS:   $(du -h dist/main.js | cut -f1) ($(du -h src/main.js | cut -f1) → $(du -h dist/main.js | cut -f1))"
echo ""
echo "✅ Production build ready in dist/ directory"
echo "💡 To test locally: cd dist && python3 -m http.server 8000"
