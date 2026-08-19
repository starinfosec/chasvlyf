const fs = require('fs');
let content = fs.readFileSync('/home/anonymous/Downloads/chasvlyf-main/src/pages/Manufacturing.tsx', 'utf8');

// Icons
content = content.replace(/absolute left-0 md:left-1\/2/g, 'absolute left-[31px] md:left-1/2');

// Text left side (Steps 1, 3, 5)
content = content.replace(/className="md:w-1\/2 md:pr-20 mb-8 md:mb-0 text-left md:text-right"/g, 'className="w-full pl-20 md:pl-0 md:w-1/2 md:pr-20 mb-8 md:mb-0 text-left md:text-right"');

// Image right side (Steps 1, 3, 5)
content = content.replace(/className="md:w-1\/2 md:pl-20"/g, 'className="w-full pl-20 md:w-1/2"');

// Text right side (Steps 2, 4, 6)
content = content.replace(/className="md:w-1\/2 md:pl-20 mb-8 md:mb-0 text-left"/g, 'className="w-full pl-20 md:w-1/2 md:pl-20 mb-8 md:mb-0 text-left"');

// Image left side (Steps 2, 4, 6)
content = content.replace(/className="md:w-1\/2 md:pr-20"/g, 'className="w-full pl-20 md:pl-0 md:w-1/2 md:pr-20"');

// Image wrappers
content = content.replace(/h-48 border border-white\/20/g, 'border border-white/20 aspect-video');

fs.writeFileSync('/home/anonymous/Downloads/chasvlyf-main/src/pages/Manufacturing.tsx', content);
console.log("Done");
