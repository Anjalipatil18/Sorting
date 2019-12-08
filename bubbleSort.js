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

let a=[4,-1,0,4,2,-9]
for (let i=0; i<a.length; i++){
  for (let j=i+1; j<a.length; j++){
    if (a[i]>a[j]){
      let swap=a[i]
          a[i]=a[j]
          a[j]=swap
    }
  }
}
console.log(a);
