import json

# Opening JSON file
f = open('export.json',)
   
data = json.load(f)['users']

active = 0

for user in data :
    if user['highscore'] > 0 :
        active +=1

print(active)