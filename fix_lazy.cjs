const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Fix duplicate loading="lazy" (it might be separated by other attributes or newlines)
      // Since it's JSX, we can just look for multiple loading="lazy" within a single <img ... /> block.
      // A safe way: use regex to match <img ... /> and inside the match remove duplicates.
      
      content = content.replace(/<img\s+[^>]*>/g, (match) => {
          let loadingCount = (match.match(/loading="lazy"/g) || []).length;
          let newMatch = match;
          while(loadingCount > 1) {
              // replace the last occurrence
              let lastIndex = newMatch.lastIndexOf('loading="lazy"');
              newMatch = newMatch.substring(0, lastIndex) + newMatch.substring(lastIndex + 'loading="lazy"'.length);
              loadingCount--;
          }
          return newMatch;
      });

      fs.writeFileSync(fullPath, content);
    }
  }
}

processDir('./src');
console.log("Fixed duplicates");
