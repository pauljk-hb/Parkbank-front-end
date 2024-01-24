import openpyxl
import json
import uuid

def create_json_entry(lat_value, long_value):
    unique_id = str(uuid.uuid4())
    json_entry = {
        "id": unique_id,
        "evaluation": {
            "table": False,
            "power": False,
            "condition": 0,
            "full": 0,
            "clean": 0,
            "trashcan": False,
            "view": 0
        },
        "pos": {
            "_lat": float(lat_value),
            "_long": float(long_value)
        }
    }

    return json_entry

file_path = "Bank.xlsx"

workbook = openpyxl.load_workbook(file_path)

worksheet = workbook.active

json_list = []

column_o_values = []
for cell in worksheet["O"]:
    value = cell.value.replace("POINT Z (", "").replace(")", "")
    column_o_values.append(value)

for value in column_o_values:
    array_values = value.split()
    if len(array_values) >= 2:
        json_entry = create_json_entry(array_values[1], array_values[0])
        json_list.append(json_entry)
    else:
        print(f"Ungültiger Wert: {value}")

workbook.close()
with open("output.json", "w") as json_file:
    json.dump(json_list, json_file, indent=2)