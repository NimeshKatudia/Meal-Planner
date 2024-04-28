import json
import os
import time

# Define the source and destination file paths
source_file_path = 'meal_plan.json'
destination_file_path = 'src/Components/meal_planer.json'

# Function to copy content from source to destination
def copy_content():
    # Check if the source file exists
    if os.path.exists(source_file_path):
        # Open the source file and read its content
        with open(source_file_path, 'r') as source_file:
            data = json.load(source_file)

        # Open the destination file and write the content
        with open(destination_file_path, 'w') as destination_file:
            json.dump(data, destination_file, indent=4)

        print(f"Content copied from {source_file_path} to {destination_file_path}")
    else:
        print(f"Source file {source_file_path} does not exist.")

# Run the copy_content function every 5 seconds
while True:
    copy_content()
    time.sleep(5) # Wait for 5 seconds before the next iteration