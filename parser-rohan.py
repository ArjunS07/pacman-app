import html2text

with open('list.txt', 'r') as file:
    data = file.read().replace('\n', '')

parsed = html2text.html2text(data)

print( "PARSED")

with open('smaller-list.txt', 'r') as file:
    data2 = file.read().replace('\n', '')

parsed2 = html2text.html2text(data2)

print( "PARSED2")
with open("Output.txt", "w") as text_file:
    text_file.write(parsed + parsed2)