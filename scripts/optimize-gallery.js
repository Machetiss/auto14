const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const GALLERY_DIR = path.join(__dirname, '..', 'public', 'gallery');
const MAX_WIDTH = 1200; // Max width for gallery images
const QUALITY = 80;     // WebP quality (80 is excellent for photos)

async function optimizeGallery() {
    const files = fs.readdirSync(GALLERY_DIR).filter(f => /\.(jpg|jpeg|png)$/i.test(f));
    console.log(`Found ${files.length} images to optimize`);

    for (const file of files) {
        const inputPath = path.join(GALLERY_DIR, file);
        const baseName = path.parse(file).name;
        const outputPath = path.join(GALLERY_DIR, `${baseName}.webp`);

        try {
            const metadata = await sharp(inputPath).metadata();
            const needsResize = metadata.width > MAX_WIDTH;

            let pipeline = sharp(inputPath);
            if (needsResize) {
                pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
            }
            await pipeline.webp({ quality: QUALITY }).toFile(outputPath);

            const inputSize = fs.statSync(inputPath).size;
            const outputSize = fs.statSync(outputPath).size;
            const savings = ((1 - outputSize / inputSize) * 100).toFixed(1);

            console.log(`✓ ${file} (${metadata.width}x${metadata.height}) → ${baseName}.webp | ${(inputSize / 1024).toFixed(0)}KB → ${(outputSize / 1024).toFixed(0)}KB (${savings}% smaller)`);
        } catch (err) {
            console.error(`✗ ${file}: ${err.message}`);
        }
    }
    console.log('\nDone! Now update page.tsx to use .webp files with unoptimized prop.');
}

optimizeGallery();
