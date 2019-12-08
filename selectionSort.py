def selectionSort(array):
    i=0
    while i<len(array):
        min = i
        j=i+1
        while j<len(array):
            if array[j] < array[min]:
                min = j
            j=j+1
        swap=array[i]
        array[i]=array[min]
        array[min]=swap
        i=i+1
    return data
data = [-2, 45, 0, 11, -9]
print(selectionSort(data))                