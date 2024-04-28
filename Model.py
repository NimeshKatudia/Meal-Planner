import json
from g4f.client import Client
from g4f.Provider.GeminiPro import GeminiPro
from flask import Flask
from flask import send_file

app = Flask(__name__)



import os
import glob

content = ""

# Path to the downloads folder
downloads_path = r"C:\Users\Abhishek Sharma\output.txt"

# Read all files in downloads folder and concatenate the content into a single string
for file_path in glob.glob(os.path.join(downloads_path, '*.txt')):
    with open(file_path, 'r') as file:
        content += file.read()

    # Delete the file after reading
    os.remove(downloads_path)





var = "Genrate an Meal Plan For me i am alergic to Peaunts"

client = Client()
response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[{"role": "user", "content": content + "JSON RESPONCE ONLY NO CODE BLOCK For 7 Days and Snaks section as Well along with Break Fast, Lunch, Dinner " + "Respond in English" + "Genrate it in a way that i can Jsonify that content" + "Dont write it like Code Block or anything and Just give main content dont write anything else"}],
    language = "en",
)
print(response.choices[0].message.content)
var1 = response.choices[0].message.content
# var1 = json.loads(var1)
print(type(var1))

data_dict = json.loads(var1)
with open('meal_plan.json', 'w') as json_file:
    json.dump(data_dict, json_file, indent=4)

print("Meal plan has been written to 'meal_plan.json'")


client = Client(
  api_key="AIzaSyDptjvhpE4lYnD0ln5NbpZ74L8DvT9Kfp8",
  provider=GeminiPro
)

response = client.chat.completions.create(
    model="gemini-pro-vision",
    messages=[{"role": "user", "content": "How many Calories dose it have you dont have to be 100% true just state whay you see and add them JUST PRINT CALORIES NOTHING ELES"}],
    image=open("download.jpeg", "rb"))

print(response.choices[0].message.content)

@app.route('/meal')
def send_json():
    return send_file('meal_plan.json', download_name='meal_plan.json')

if __name__ == "__main__":
    app.run(debug=True, port=5000)
