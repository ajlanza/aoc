import csv

with open('2022\day3\input.csv', 'r') as input_csv:
    csv_reader = csv.reader(input_csv)
    total = 0
    values = ['0', 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    for row in csv_reader:
        row_string = str(row)
        first_half = row_string[2:len(row_string)//2]
        second_half = row_string[len(row_string)//2:-2]
        for letter in first_half:
            if (letter in second_half):
                total += values.index(letter)
                break
    print(total)