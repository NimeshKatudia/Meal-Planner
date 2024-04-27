import json
from g4f.client import Client

var = "Genrate an Meal Plan For me i am alergic to Peaunts"

client = Client()
response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[{"role": "user", "content": var + "For 7 Days" + "Respond in English" + "Genrate it in a way that i can Jsonify that content" + "Dont write it like Code Block or anything and Just give main content dont write anything else"}],
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