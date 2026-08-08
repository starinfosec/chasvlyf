import re
import os
import random

images = [
    "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?q=80&w=800&auto=format&fit=crop", # olive oil
    "https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?q=80&w=800&auto=format&fit=crop", # sunflower
    "https://images.unsplash.com/photo-1600862080031-bb96db298c47?q=80&w=800&auto=format&fit=crop", # olive tree
    "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?q=80&w=800&auto=format&fit=crop", # pouring oil
    "https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?q=80&w=800&auto=format&fit=crop", # making
    "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=800&auto=format&fit=crop", # cooking
    "https://images.unsplash.com/photo-1558237588-410cce508b47?q=80&w=800&auto=format&fit=crop" # farm
]

pattern = re.compile(r'https://lh3.googleusercontent.com/aida-public/[A-Za-z0-9_-]+')

for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                content = f.read()
            
            def replace_func(match):
                return random.choice(images)
            
            new_content = pattern.sub(replace_func, content)
            
            if new_content != content:
                with open(filepath, 'w') as f:
                    f.write(new_content)
                print(f"Updated {filepath}")
