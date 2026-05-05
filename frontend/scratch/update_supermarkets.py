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

# Map province name to folder name (as found in filesystem)
province_to_folder = {
    "TUYÊN QUANG": "tuyenquang",
    "CAO BẰNG": "caobang",
    "LAI CHÂU": "laichau",
    "LÀO CAI": "laocai",
    "THÁI NGUYÊN": "thainguyen",
    "ĐIỆN BIÊN": "dienbien",
    "LẠNG SƠN": "langson",
    "SƠN LA": "sonla",
    "PHÚ THỌ": "phutho",
    "BẮC NINH": "bacninh",
    "QUẢNG NINH": "quangninh",
    "TP. HÀ NỘI": "hanoi",
    "TP. HẢI PHÒNG": "haiphong",
    "HƯNG YÊN": "hungyen",
    "NINH BÌNH": "ninhbinh",
    "THANH HOÁ": "thanhhoa",
    "NGHỆ AN": "nghean",
    "HÀ TĨNH": "hatinh",
    "QUẢNG TRỊ": "quangtri",
    "TP. HUẾ": "hue",
    "TP. ĐÀ NẴNG": "danang",
    "QUẢNG NGÃI": "quangngai",
    "GIA LAI": "gialai",
    "ĐẮK LẮK": "daklak",
    "KHÁNH HOÀ": "khanhhoa",
    "LÂM ĐỒNG": "lamdong",
    "TP. ĐỒNG NAI": "dongnai",
    "TÂY NINH": "tayninh",
    "TP. HỒ CHÍ MINH": "hcm",
    "ĐỒNG THÁP": "dongthap",
    "AN GIANG": "angiang",
    "VĨNH LONG": "vinhlong",
    "TP. CẦN THƠ": "cto",
    "CÀ MAU": "camau"
}

with open(data_file, 'r') as f:
    content = f.read()

# Helper function to find existing store properties
def get_existing_store(store_id, stores_data):
    # Match { id: "ID", ... } - handling multiline
    match = re.search(r'\{\s*id:\s*"' + re.escape(store_id) + r'",(.*?)\}', stores_data, re.DOTALL)
    if match:
        props = match.group(1)
        res = {}
        for key in ["objectPosition", "scale", "objectFit", "translateX", "gridObjectFit", "gridObjectPosition", "gridScale"]:
            m = re.search(key + r':\s*(["\'].*?["\']|[\d\.\-]+|scale-[\w\[\]\-\.]+)', props)
            if m:
                res[key] = m.group(1)
            else:
                res[key] = None
        return res
    return None

# Find the start of provinces array
start_marker = "export const provinces: Province[] = ["
start_idx = content.find(start_marker)
if start_idx == -1:
    print("Could not find start marker")
    exit(1)

# Find the end of provinces array by matching brackets correctly
bracket_level = 0
found_start = False
end_idx = -1
for i in range(start_idx, len(content)):
    if content[i] == '[':
        bracket_level += 1
        found_start = True
    elif content[i] == ']':
        bracket_level -= 1
        if found_start and bracket_level == 0:
            end_idx = i + 1
            break

if end_idx == -1:
    print("Could not find end marker")
    exit(1)

provinces_block = content[start_idx:end_idx]

# Extract each province block
# A province block starts with { and ends with }, and is followed by , or ]
province_blocks = []
current_block = ""
bracket_level = 0
in_array = False

# Skip the "export const provinces: Province[] = [" part
array_start = provinces_block.find('[') + 1
for i in range(array_start, len(provinces_block)):
    char = provinces_block[i]
    if char == '{':
        bracket_level += 1
    elif char == '}':
        bracket_level -= 1
    
    current_block += char
    
    if bracket_level == 0 and char in ['}', ',']:
        if current_block.strip() and current_block.strip() not in [',', ']', '};']:
            # Cleanup current_block to be just the object
            clean_block = current_block.strip()
            if clean_block.endswith(','): clean_block = clean_block[:-1].strip()
            if clean_block:
                province_blocks.append(clean_block)
        current_block = ""

new_province_objs = []
for obj_str in province_blocks:
    name_match = re.search(r'name:\s*"(.*?)"', obj_str)
    if not name_match: continue
    name = name_match.group(1)
    
    map_match = re.search(r'map:\s*(encodeURI\(.*?\)|".*?"),', obj_str)
    map_wt_match = re.search(r'mapWithText:\s*(encodeURI\(.*?\)|".*?"),', obj_str)
    
    stores_match = re.search(r'stores:\s*\[(.*?)\]', obj_str, re.DOTALL)
    old_stores_data = stores_match.group(1) if stores_match else ""
    
    folder = province_to_folder.get(name)
    actual_files = files_map.get(folder, [])
    
    new_stores = []
    
    # Existing stores
    old_stores = re.findall(r'\{\s*id:\s*"(.*?)",\s*img:\s*"(.*?)"(.*?)\}', old_stores_data, re.DOTALL)
    used_files = set()
    
    for sid, old_img, rest in old_stores:
        norm_sid = sid.lower().replace(" ", "").replace("-", "")
        match = None
        for f in actual_files:
            # Try to match sid in filename
            norm_f = f.lower().replace(" ", "").replace("-", "").replace("sthi", "").replace("st", "").split('.')[0]
            if norm_sid == norm_f or norm_sid in norm_f or norm_f in norm_sid:
                match = f
                break
        
        if match:
            existing = get_existing_store(sid, old_stores_data)
            new_store = f'{{ id: "{sid}", img: "/images/hethongsieuthi/{folder}/{match}"'
            for key, val in existing.items():
                if val:
                    new_store += f', {key}: {val}'
            new_store += ' }'
            new_stores.append(new_store)
            used_files.add(match)
        else:
            if not actual_files: # Like Dong Nai
                new_stores.append(f'{{ id: "{sid}", img: "{old_img}"{rest} }}')
            else:
                print(f"  [REMOVED] {name} -> {sid} (File not found)")

    # New files
    for f in sorted(actual_files):
        if f not in used_files and not f.startswith("."):
            if any(x in f.lower() for x in ["tap the", "text", "map", "chữ", "thumb"]): continue
            new_id = f.split('.')[0].upper()
            new_stores.append(f'{{ id: "{new_id}", img: "/images/hethongsieuthi/{folder}/{f}" }}')

    new_obj = f'  {{\n    name: "{name}",\n    map: {map_match.group(1) if map_match else "null"},\n    mapWithText: {map_wt_match.group(1) if map_wt_match else "null"},\n    stores: [\n      ' + ',\n      '.join(new_stores) + '\n    ]\n  }}'
    new_province_objs.append(new_obj)

new_provinces_block = "export const provinces: Province[] = [\n" + ",\n".join(new_province_objs) + "\n];"
new_content = content[:start_idx] + new_provinces_block + content[end_idx:]

with open(data_file, 'w') as f:
    f.write(new_content)

print("Updated data.tsx successfully")
