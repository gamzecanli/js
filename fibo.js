sayi:
<input type="number" id="sayi" />
<button onclick="hesapla()">hesapla</button>
sonuc:
<input type="text" id="result" />
<script>
var array=[];
  function hesapla() {
    var result = 1;

    term1 = 0;

    term2 = 1;

    i = 1;
    var sayi = document.getElementById("sayi").value;

    while (i <= sayi)

    {

      result = term1 + term2;
      
      console.log(result);
      array.push(result);

      term1 = term2;

      term2 = result;

      i++;

    }
    document.getElementById("result").value = array;
    console.log(array);
    
  }

</script>