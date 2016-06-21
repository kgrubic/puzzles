function swap (str,leftindex,rightindex){
  var temp = str[leftindex];
  str[leftindex] =str[rightindex];
  str[rightindex]=temp;
}

function partition(str,left,right){
  var i = left;
  var j = right;
  var pivot = str[Math.floor((left+right)/2)]
  
  while(i<=j){
    while(str[i] < pivot)
      i++;
    while(str[j] > pivot)
      j--;
    
    if(i<=j){
      swap(str,i,j)
      i++;
      j--;
    }    
  }
      return i;
}

function quicksort(items,left,right){
  var index;
  if(items.length > 1){
    index=partition(items,left,right);

    if(index -1 > left)
      quicksort(items,left,index-1);
    if(index < right)
      quicksort(items,index,right);
  }
  return items;
}

a=[2,6,3,8,9,1];
quicksort(a,0,a.length-1);
