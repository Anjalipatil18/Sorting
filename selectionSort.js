//while loop
function selectionSort(array){
  var i=0
  while (i<array.length){
    var min = i
    var j=i+1
    while (j<array.length){
        if (array[j] < array[min]){
            min = j
        }
        j++
    }
    var swap=array[i]
    array[i]=array[min]
    array[min]=swap
    i++
  }
  return data
  }
var data = [-2, 45, 0, 11, -9]
console.log(selectionSort(data)) 

//for loop..
function selectionSort(array){
    for (var i=0; i<array.length; i++){
      var min=i;
      var j=i+1;
      for (var j=i+1;  j<array.length; j++){
        if (array[j]<array[min]){
          min=j;
        }
      }
      var swap=array[i];
      array[i]=array[min];
      array[min]=swap;
      }
    return array;
  }
  var data=[-2,45,11,-9]
  console.log(selectionSort(data))
      
