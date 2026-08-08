import re

with open('src/pages/ProductsPage.tsx', 'r') as f:
    content = f.read()

# Define the replacements
# We'll wrap the <div className="product-image-container ... "> and <h3 ... </h3> in a Link tag.
# Actually, let's wrap the whole inner contents of the article in a Link, except the button?
# Or just wrap the whole motion.article content and change button to a div.

# Another approach: wrap the image and title in Link.
links = {
    "Mustard Oil": "/product/mustard-oil",
    "Groundnut Oil": "/product/groundnut-oil",
    "Besan Laddoo": "/product/besan-laddoo",
    "Motichoor Laddoo": "/product/motichoor-laddoo",
    "Dry Fruit Laddoo": "/product/dry-fruit-laddoo"
}

for title, link in links.items():
    # Find the article containing this title
    pattern = r'(<div className="product-image-container.*?)(<h3.*?>{t\("' + title + '"[^}]+}</h3>)'
    # wait, h3 is after the image container.
    # It is: <div class="product-image-container">...</div> <div class="p-6"> <h3 ...>
    
    # A safer way is to find the title, and then figure out how to add a Link.
    pass

