import csv

with open('2022\day2\input.csv', 'r') as input_csv:
    csv_reader = csv.reader(input_csv)

    def part1():
        my_total = 0
        for row in input_csv:
            opponent = row[0]
            me = row[2]
            match opponent:
                case "A":
                # print (opponent, me)
                    match me:
                        case "X":
                            my_total += 4
                        case "Y":
                            my_total += 8
                        case "Z":
                            my_total += 3
                        case _:
                            print('error')
                case "B":
                # print (opponent, me)
                    match me:
                        case "X":
                            my_total += 1
                        case "Y":
                            my_total += 5
                        case "Z":
                            my_total += 9
                        case _:
                            print('error')
                case "C":
                # print (opponent, me)
                    match me:
                        case "X":
                            my_total += 7
                        case "Y":
                            my_total += 2
                        case "Z":
                            my_total += 6
                        case _:
                            print('error')
        print('part1 total: {}'.format(my_total))

    def part2():
        my_total = 0
        for row in input_csv:
            print(row)
            opponent = row[0]
            me = row[2]
            match opponent:
                case "A":
                # print (opponent, me)
                    match me:
                        case "X":
                            my_total += 3
                        case "Y":
                            my_total += 4
                        case "Z":
                            my_total += 8
                        case _:
                            print('error')
                case "B":
                # print (opponent, me)
                    match me:
                        case "X":
                            my_total += 1
                        case "Y":
                            my_total += 5
                        case "Z":
                            my_total += 9
                        case _:
                            print('error')
                case "C":
                # print (opponent, me)
                    match me:
                        case "X":
                            my_total += 2
                        case "Y":
                            my_total += 6
                        case "Z":
                            my_total += 7
                        case _:
                            print('error')
        print('part2 total: {}'.format(my_total))

    # part1()
    part2()