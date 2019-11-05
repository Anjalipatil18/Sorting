var array=[5,4,10,1,6,2];
for(var i=1; i<array.length; i++) {
  var temp=array[i];
  var j=i-1;
  while(j>=0 && array[j]>temp){
    array[j+1]=array[j];
    j--;
  }
  array[j+1]=temp;
}
console.log(array);