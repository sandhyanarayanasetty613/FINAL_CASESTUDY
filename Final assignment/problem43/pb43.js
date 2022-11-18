list_of_marks=(12,18,25,24,2,5,18,20,20,21)

function find_more_than_average()
    sumi=0;
    count=0;
    sumi=sum(list_of_marks)
    avg=sumi/len(list_of_marks)
    for (i in list_of_marks){
        if(i>avg)
            count=count+1
    morethanavg=(count/len(list_of_marks))*100
    return morethanavg
}
function sort_marks()
    return sorted(list_of_marks)
 function generate_frequency()
    gener = [0] * 26
    for (m in list_of_marks){
        gener[m] += 1
    return gener

    }
print(find_more_than_average())
print(generate_frequency())
print(sort_marks())