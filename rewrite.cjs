const fs = require('fs');

function processFile(filename) {
    let content = fs.readFileSync(filename, 'utf-8');
    
    // Maps of alt text to product id
    const altMap = [
        ['Virgin Mustard Oil', 'mustard-oil'],
        ['Mustard Oil', 'mustard-oil'],
        ['Wood-Pressed Groundnut', 'groundnut-oil'],
        ['Groundnut Oil', 'groundnut-oil'],
        ['Sunflower Oil', 'sunflower-oil'],
        ['Sesame Oil', 'sesame-oil'],
        ['Coconut Oil', 'coconut-oil'],
        ['Besan Laddoo', 'besan-laddoo'],
        ['Motichoor Laddoo', 'motichoor-laddoo'],
        ['Dry Fruit Laddoo', 'dry-fruit-laddoo'],
    ];

    let parts = content.split('<div className="product-image-container');
    for (let i = 1; i < parts.length; i++) {
        let snippet = parts[i].substring(0, 500);
        let linkId = null;
        for (let [alt, id] of altMap) {
            if (snippet.includes(`alt="${alt}"`)) {
                linkId = id;
                break;
            }
        }
        if (linkId) {
            parts[i] = parts[i].replace(
                'relative h-72',
                `block cursor-pointer relative h-72`
            );
            parts[i] = 'to={`/product/' + linkId + '`} className="product-image-container' + parts[i];
            
            // Need to close Link instead of div
            // The div ends right before <div className="p-6">
            parts[i] = parts[i].replace('</div>\n                  <div className="p-6">', '</Link>\n                  <div className="p-6">');
        } else {
            parts[i] = '<div className="product-image-container' + parts[i];
        }
    }
    content = parts.join('<Link ');
    
    // Now we must import Link if not imported
    if (!content.includes('import { Link }')) {
        content = content.replace('import { motion }', 'import { Link } from "react-router-dom";\nimport { motion }');
    }

    fs.writeFileSync(filename, content);
}

processFile('src/pages/ProductsPage.tsx');
processFile('src/components/Products.tsx');
