sayi1:
<input type="number" id="sayi1"> sayi2:
<input type="number" id="sayi2">
<button onclick=hesapla() type="button">hesapla</button>

<script>
  

  function hesapla() {
  var sayi1 = parseInt(document.getElementById("sayi1").value);
  var sayi2 = parseInt(document.getElementById("sayi2").value);
  var asalcarpan1 = [];
  var asalcarpan2 = [];
    for (i = 2; i <= sayi1; i++) {
      while (sayi1 % i == 0) {
        sayi1 = sayi1 / i;

        if (asalcarpan1.indexOf(i) == -1) {
          asalcarpan1.push(i);
        }
      }
     
    }

    for (i = 2; i <= sayi2; i++) {
      while (sayi2 % i == 0) {
        sayi2 = sayi2 / i;

        if (asalcarpan2.indexOf(i) == -1) {
          asalcarpan2.push(i);
        }
      }
    }
     console.log(asalcarpan1);
     console.log(asalcarpan2);
    var count = 0;
    for (var i = 0; i < asalcarpan1.length; i++) {
      count = count + asalcarpan1[i];
    }
    console.log(count)

    var count1 = 0;
    for (var i = 0; i < asalcarpan2.length; i++) {
      count1 = count1 + asalcarpan2[i];
    }
    console.log(count1)

    if (count == count1) {
      alert("Sayýlar arkadaþ sayýdýr");
    }

  }

</script>