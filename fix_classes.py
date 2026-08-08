import os
import re

def fix_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    def replace_class(match):
        classes = match.group(1).split()
        new_classes = []
        for cls in classes:
            new_classes.append(cls)
            if 'font-display-' in cls or 'font-headline-' in cls or 'font-title-' in cls:
                prefix = 'md:' if cls.startswith('md:') else ''
                base = cls.replace('md:', '')
                if base.startswith('font-'):
                    text_cls = base.replace('font-', 'text-')
                    if prefix + text_cls not in classes and prefix + text_cls not in new_classes:
                        new_classes.append(prefix + text_cls)
        return 'className="' + ' '.join(new_classes) + '"'
    
    new_content = re.sub(r'className="([^"]+)"', replace_class, content)
    
    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Fixed {filepath}")

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx'):
            fix_file(os.path.join(root, file))

