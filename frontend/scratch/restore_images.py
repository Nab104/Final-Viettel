import os
import shutil
import re

# Paths
source_root = r'C:\Users\Admin\Desktop\Viettel\MapVietNamPictures'
target_root = r'c:\Users\Admin\Desktop\Viettel\frontend\public\images\story-map'
content_file = r'c:\Users\Admin\Desktop\Viettel\frontend\src\components\story\map-data\provincesContent.ts'

# Create target root
if not os.path.exists(target_root):
    os.makedirs(target_root)

# Read provincesContent.ts to find all image paths
with open(content_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Find all image paths like "/images/story-map/province/name.ext"
# Using regex to catch /images/story-map/([a-z-]+)/([a-z-]+)\.(png|jpg|jpeg)
image_paths = re.findall(r'/images/story-map/([a-z0-9-]+)/([a-z0-9-]+)\.(png|jpg|jpeg)', content)

# Also catch special cases like "/images/story-map/hue.jpg"
single_paths = re.findall(r'/images/story-map/([a-z0-9-]+)\.(png|jpg|jpeg)', content)

# Map province IDs to source folder names (since they might differ)
province_map = {
    'an-giang': 'An Giang',
    'ca-mau': 'Ca Mau',
    'can-tho': 'Can Tho',
    'dak-lak': 'Dak Lak',
    'dong-thap': 'Dong Thap',
    'dong-nai': 'DongNai',
    'gia-lai': 'Gia Lai',
    'hue': 'Hue',
    'khanh-hoa': 'Khanh Hoa',
    'lam-dong': 'Lam Dong',
    'quang-ngai': 'Quang Ngai',
    'ho-chi-minh': 'TPHCM',
    'vinh-long': 'Vinh Long',
    'tuyen-quang': 'Tuyen Quang',
    'bac-ninh': 'Bac Ninh',
    'ha-noi': 'Ha Noi',
    'hai-phong': 'Hai Phong',
    'lao-cai': 'Lao Cai',
    'quang-ninh': 'Quang Ninh',
    'thai-nguyen': 'Thai Nguyen'
}

def kebab_to_title(s):
    # This is a bit tricky since "tran-phu-loi" -> "Tran Phu Loi"
    # and "chau-trinh" -> "chau trinh" or "Vo Thi Chau Trinh"
    # Let's just try to find a file that matches partially
    return s.replace('-', ' ')

def find_file(source_dir, target_name_kebab, ext):
    if not os.path.exists(source_dir):
        return None
    
    files = os.listdir(source_dir)
    # Try exact kebab match (unlikely)
    # Try case-insensitive space-replaced match
    target_space = target_name_kebab.replace('-', ' ').lower()
    
    for f in files:
        if f.lower().endswith(ext.lower()):
            f_base = os.path.splitext(f)[0].lower()
            # Check if target_space is in f_base or vice versa
            if target_space in f_base or f_base in target_space:
                return f
            # Also check if it's something like "chau trinh.jpg" vs "chau-trinh.jpg"
            if f_base.replace(' ', '-') == target_name_kebab.lower():
                return f
    return None

# Process nested paths: /images/story-map/province/name.ext
for prov_id, img_name, ext in image_paths:
    src_folder = province_map.get(prov_id, prov_id)
    src_dir = os.path.join(source_root, src_folder)
    dest_dir = os.path.join(target_root, prov_id)
    
    if not os.path.exists(dest_dir):
        os.makedirs(dest_dir)
        
    src_file = find_file(src_dir, img_name, ext)
    if src_file:
        src_path = os.path.join(src_dir, src_file)
        dest_path = os.path.join(dest_dir, f"{img_name}.{ext}")
        shutil.copy2(src_path, dest_path)
        print(f"Copied: {src_path} -> {dest_path}")
    else:
        print(f"Missing: {prov_id}/{img_name}.{ext} (not found in {src_dir})")

# Process single paths: /images/story-map/name.ext
for img_name, ext in single_paths:
    # Example: hue.jpg
    src_folder = province_map.get(img_name, img_name)
    src_dir = os.path.join(source_root, src_folder)
    
    # If it's a file directly in the folder like Hue/hue.jpg
    src_file = find_file(src_dir, img_name, ext)
    if src_file:
        src_path = os.path.join(src_dir, src_file)
        dest_path = os.path.join(target_root, f"{img_name}.{ext}")
        shutil.copy2(src_path, dest_path)
        print(f"Copied: {src_path} -> {dest_path}")
    else:
        print(f"Missing: {img_name}.{ext} (not found in {src_dir})")
