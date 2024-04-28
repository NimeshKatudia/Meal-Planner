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
################################################
client = Client()
response = client.chat.completions.create(
    model="gpt-3.5-turbo",
<<<<<<< HEAD
    messages=[{"role": "user", "content": content + "JSON RESPONCE ONLY NO CODE BLOCK For 7 Days and Snaks section as Well along with Break Fast, Lunch, Dinner " + "Respond in English" + "Genrate it in a way that i can Jsonify that content" + "Dont write it like Code Block or anything and Just give main content dont write anything else"}],
=======
    messages=[{"role": "user", "content": var + "For 7 Days and Snaks section as Well along with Break Fast, Lunch, Dinner " + "Respond in English" + "Genrate it in a way that i can Jsonify that content" + "Dont write it like Code Block or anything and Just give main content dont write anything else"}],
>>>>>>> 63889f482da8050ec71260f3c8f212291d7c7831
    language = "en",
)
print(response.choices[0].message.content)
var1 = response.choices[0].message.content
var1 = json.loads(var1)
print(type(var1))

data_dict = var1
oldvar = var1
with open('meal_plan.json', 'w') as json_file:
    json.dump(data_dict, json_file, indent=4)

print("Meal plan has been written to 'meal_plan.json'")

########################################################
client = Client(
  api_key="AIzaSyDptjvhpE4lYnD0ln5NbpZ74L8DvT9Kfp8",
  provider=GeminiPro
)

response = client.chat.completions.create(
    model="gemini-pro-vision",
    messages=[{"role": "user", "content": "How many Calories dose it have you dont have to be 100% true just state whay you see and add them JUST PRINT CALORIES NOTHING ELES"}],
    image=open("download.jpg", "rb"))

print(response.choices[0].message.content)

#########################################################
var = "Weight loss"

client = Client()
response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[{"role": "user", "content": var + " Exersice For 7 Days " + "Respond in English" + "Genrate it in a way that i can Jsonify that content" + "Dont write it like Code Block or anything and Just give main content dont write anything else NO PLAIN TEXT JSON FORMAT ONLY"}],
    language = "en",
)
print(response.choices[0].message.content)
var1 = response.choices[0].message.content
var1 = json.loads(var1)
print(type(var1))

data_dict = var1
with open('exercise_plan.json', 'w') as json_file:
    json.dump(data_dict, json_file, indent=4)

print("Meal plan has been written to 'exersice_plan.json'")
##########################################################################
def calculate_bmi(weight, height):
    """
    Calculate BMI based on weight and height.
    
    Parameters:
    weight (float): Weight in kilograms.
    height (float): Height in meters.
    
    Returns:
    float: BMI value.
    """
    return weight / (height ** 2)

# def suggest_calorie_intake(bmi, goal, current_calorie_intake):
#     """
#     Suggest calorie intake based on BMI and goal.
    
#     Parameters:
#     bmi (float): BMI value.
#     goal (str): Goal (e.g., 'weight gain', 'weight loss', 'maintain weight').
#     current_calorie_intake (int): Current daily calorie intake.
    
#     Returns:
#     int: Suggested daily calorie intake.
#     """
#     if goal.lower() == 'weight gain':
#         return current_calorie_intake + 500
#     elif goal.lower() == 'weight loss':
#         return current_calorie_intake - 500
#     elif goal.lower() == 'maintain weight':
#         return current_calorie_intake
#     else:
#         return "Invalid goal. Please choose from 'weight gain', 'weight loss', 'maintain weight'."

# Example usage
weight = 70 # Weight in kilograms
height = 1.75 # Height in meters
goal = 'weight gain' # Goal: 'weight gain', 'weight loss', 'maintain weight'
current_calorie_intake = 2000 # Current daily calorie intake

bmi = calculate_bmi(weight, height)
print(f"BMI: {bmi}")
bmi = str(bmi)
client = Client()
response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[{"role": "user", "content": "BASED ON BMI"+ bmi + "Provide me an Calories i should consume for " + var + "PRINT ONLY THE CALORY CONT NOTHING ELES PRINT IN JSONIFY WAY ONLY NOT IN PLAIN TEXT"}],
    language = "en",
)
print(response.choices[0].message.content)
var1 = response.choices[0].message.content
# var1 = json.loads(var1)
print(type(var1))
current_calorie_intake = var1
print(current_calorie_intake)

# suggested_calorie_intake = suggest_calorie_intake(bmi, goal, current_calorie_intake)
# print(f"Suggested Calorie Intake: {suggested_calorie_intake}")
#######################################################

client = Client()

response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[{"role": "user", "content": f"For Day 1 ONLY Create a recipie form {oldvar}For all Meals " + "Respond in English" + "Genrate it in a way that i can Jsonify that content" + "Dont write it like Code Block or anything and Just give main content dont write anything else"}],
    language = "en",
)
print(response.choices[0].message.content)
var1 = response.choices[0].message.content
var1 = json.loads(var1)
print(type(var1))

data_dict = var1
with open('recipie_plan.json', 'w') as json_file:
    json.dump(data_dict, json_file, indent=4)

print("Recipie plan has been written to 'recipie_plan.json'")

####################################################


@app.route('/meal')
def send_json():
    return send_file('meal_plan.json', download_name='meal_plan.json')

if __name__ == "__main__":
    app.run(debug=True, port=5000)
