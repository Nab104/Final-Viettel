import os
import re

base_path = "/Users/duyhoangle/Viettel/viettel/frontend/public/images/hethongsieuthi"
data_file = "/Users/duyhoangle/Viettel/viettel/frontend/src/app/con-nguoi/data.tsx"

# List all files in the supermarket directory
files_map = {}
for root, dirs, files in os.walk(base_path):
    province = os.path.basename(root)
    if province == "hethongsieuthi": continue
    files_map[province] = files

# Read data.tsx
with open(data_file, 'r') as f:
    content = f.read()

# Find the provinces array
provinces_match = re.search(r'export const provinces: Province\[\] = \[(.*?)\];', content, re.DOTALL)
if not provinces_match:
    print("Could not find provinces array")
    exit(1)

provinces_data = provinces_match.group(1)

# Analyze each province block
province_blocks = re.findall(r'\{.*?name: "(.*?)".*?stores: \[(.*?)\]\s*\},', provinces_data, re.DOTALL)

for province_name, stores_data in province_blocks:
    # Map province name to folder name (simple mapping for now)
    folder_name = province_name.lower().replace("tp. ", "").replace(" ", "").replace("á", "a").replace("à", "a").replace("ả", "a").replace("ã", "a").replace("ạ", "a").replace("ă", "a").replace("ắ", "a").replace("ằ", "a").replace("ẳ", "a").replace("ẵ", "a").replace("ặ", "a").replace("â", "a").replace("ấ", "a").replace("ầ", "a").replace("ẩ", "a").replace("ẫ", "a").replace("ậ", "a").replace("é", "e").replace("è", "e").replace("ẻ", "e").replace("ẽ", "e").replace("ẹ", "e").replace("ê", "e").replace("ế", "e").replace("ề", "e").replace("ể", "e").replace("ễ", "e").replace("ệ", "e").replace("í", "i").replace("ì", "i").replace("ỉ", "i").replace("ĩ", "i").replace("ị", "i").replace("ó", "o").replace("ò", "o").replace("ỏ", "o").replace("õ", "o").replace("ọ", "o").replace("ô", "o").replace("ố", "o").replace("ồ", "o").replace("ổ", "o").replace("ỗ", "o").replace("ộ", "o").replace("ơ", "o").replace("ớ", "o").replace("ờ", "o").replace("ở", "o").replace("ỡ", "o").replace("ợ", "o").replace("ú", "u").replace("ù", "u").replace("ủ", "u").replace("ũ", "u").replace("ụ", "u").replace("ư", "u").replace("ứ", "u").replace("ừ", "u").replace("ử", "u").replace("ữ", "u").replace("ự", "u").replace("ý", "y").replace("ỳ", "y").replace("ỷ", "y").replace("ỹ", "y").replace("ỵ", "y").replace("đ", "d")
    
    # Special cases for folder names
    if folder_name == "dongnai": folder_name = "đồng nai_ đni"
    if folder_name == "cantho": folder_name = "cto"
    
    actual_files = files_map.get(folder_name, [])
    
    stores = re.findall(r'\{ id: "(.*?)", img: "(.*?)"(.*?)\}', stores_data)
    
    print(f"\nProvince: {province_name} (Folder: {folder_name})")
    for store_id, img_path, rest in stores:
        filename = os.path.basename(img_path)
        if filename not in actual_files:
            print(f"  [MISSING] {store_id}: {filename} (Path: {img_path})")
            # Try to find a match
            matches = [f for f in actual_files if store_id.lower() in f.lower() or f.lower() in store_id.lower()]
            if matches:
                print(f"    Suggested: {matches}")
        else:
            # Check if there are multiple files that could match
            potential = [f for f in actual_files if store_id.lower() in f.lower().replace("sthi ", "").replace("st ", "")]
            if len(potential) > 1 or (len(potential) == 1 and potential[0] != filename):
                 print(f"  [POTENTIAL CHANGE] {store_id}: Current {filename} -> Suggestions {potential}")

    # Check for files not in data.tsx
    mapped_files = [os.path.basename(s[1]) for s in stores]
    extra = [f for f in actual_files if f not in mapped_files]
    if extra:
        print(f"  [EXTRA FILES] {extra}")
