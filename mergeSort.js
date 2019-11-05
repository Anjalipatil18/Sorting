function mergeShort(array){
    if (array.length>1){
        var mid=array.length/2;
        var LeftPart=array.slice(0,mid);
        var RightPart=array.slice(mid,array.length);

        mergeShort(LeftPart)
        mergeShort(RightPart)
        var i=0;
        var j=0;
        var k=0;
        while (i<LeftPart.length && j<RightPart.length){
            if (LeftPart[i]<RightPart[j]){
                array[k]=LeftPart[i];
                i++;
            }else{
                array[k]=RightPart[j];
                j++;
            } k++;
        }
        while (i<LeftPart.length){
            array[k]=LeftPart[i];
            i++;
            k++;
        }
        while (j<RightPart.length){
            array[k]=RightPart[j];
            j++;
            k++;
        }   
    return array;
    }
    
}
console.log(mergeShort([1,3,2,4]))