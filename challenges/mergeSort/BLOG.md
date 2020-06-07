ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
---------------------------------------


In the above pseudo code the merge sort is given. It works by dividing the unsorted array from the middle until we get arrays of 1 index, then sorting the the single values, and reversing the divide method, by merging the array back together, this time sorted. 

example array is [8,4,23,42,16,15]

arr.length = 6
middleValue = 3 (index)

the array is divided on this base 
left = [8,4,23]
right = [42,16,15]

then the cycle repeat again this time the middleValue is 1. and again for the arrays of 2 index the middle will be 1. sort the values then merge them again.