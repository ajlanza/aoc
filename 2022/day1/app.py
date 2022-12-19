import csv

with open('2022\day1\input.csv', 'r') as input_csv:
    csv_reader = csv.reader(input_csv)
    group = 0
    max_calories = 0
    max_elf = 0
    current_calories = 0
    all_calories = []
    total_three_highest = 0
    for row in input_csv:
        if row == '\n':
            group += 1
            if current_calories > max_calories:
                max_calories = current_calories
                max_elf = group
            all_calories.append(current_calories)  
            current_calories = 0     
        else:
            current_calories += int(row)
    print('max calories: {} held by elf {}.'.format(max_calories, max_elf))
    for i in range(3):
        total_three_highest += max(all_calories)
        all_calories.remove(max(all_calories))
        
    print('total of three highest calorie holders: {}.'.format(total_three_highest))