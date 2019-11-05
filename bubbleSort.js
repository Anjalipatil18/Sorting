var array=[74,2,38,7,99,100];
var i=0;
while (i<array.length){
    var j=0
    while (j<array.length){
        if (array[i]<array[j]){
            var next=array[i]
            array[i]=array[j]
            array[j]=next
        }
        j++;
    } 
    i++;
} 
console.log(array)
