import pandas as pd
import json

# Load the Excel file
df = pd.read_excel('Client List Vision Technocrates.xlsx')

# Assuming the client names are in a column named 'Client Name' or similar
# Let's check the columns first
print("Columns in the Excel file:")
print(df.columns.tolist())

# If the column is named 'Client Name', use that; otherwise, adjust accordingly
client_column = 'Client Name' if 'Client Name' in df.columns else df.columns[0]

# Extract unique client names
clients = df[client_column].dropna().unique().tolist()

# Create a JSON structure for the clients
clients_data = {
    "clients": clients
}

# Save to a JSON file
with open('clients.json', 'w') as f:
    json.dump(clients_data, f, indent=4)

print(f"Extracted {len(clients)} unique clients.")
print("Clients saved to clients.json")
