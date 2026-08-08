const fs = require('fs');

let content = fs.readFileSync('src/components/Products.tsx', 'utf-8');

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

let parts = content.split('<div className="h-[280px] rounded-[32px] overflow-hidden mb-6 relative">');
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
        parts[i] = `to={\`/product/${linkId}\`} className="block cursor-pointer h-[280px] rounded-[32px] overflow-hidden mb-6 relative"` + parts[i];
        
        // The div ends right before <div className="px-4 pb-4">
        parts[i] = parts[i].replace('</div>\n          <div className="px-4 pb-4">', '</Link>\n          <div className="px-4 pb-4">');
    } else {
        parts[i] = '<div className="h-[280px] rounded-[32px] overflow-hidden mb-6 relative">' + parts[i];
    }
}
content = parts.join('<Link ');

if (!content.includes('import { Link }')) {
    content = content.replace('import { motion }', 'import { Link } from "react-router-dom";\nimport { motion }');
}

fs.writeFileSync('src/components/Products.tsx', content);
