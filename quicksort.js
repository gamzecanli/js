<script>
 var myArray = [4,2,5,63,34,5,63,2,49,43];
function quicksort(arr)
{
    if (arr.length == 0)
        return [];
 
    var left = new Array();
    var right = new Array();
    var pivot = arr[0];
 
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
           left.push(arr[i]);
           
        } else {
           right.push(arr[i]);
           console.log(arr)
        }
    }
 
    return quicksort(left).concat(pivot, quicksort(right));
}
 
console.log(quicksort(myArray));
</script>