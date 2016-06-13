<script>
  var myArray = [34, 55, 911, 9, 76, 43, 77, 789, 51, 10, 70, 1];
  var i;
  var t, f;
  f = 0;
  while (f == 0) {
    f = 1;
    for (i = 0; i <= myArray.length - 1; i++) {
      if (myArray[i] > myArray[i + 1]) {
        t = myArray[i];
        myArray[i] = myArray[i + 1];
        myArray[i + 1] = t;
        f = 0;
      }
    }
  }
  console.log("Siralama isleminden sonra dizi:");
  console.log(myArray.join(" "));
</script>
