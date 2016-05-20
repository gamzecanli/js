sayi1: <input type="number" id="sayi1"/>
sayi2: <input type="number" id="sayi2"/>
  <select id="hesaplama">
    <option value="topla">topla</option>
    <option value="cikar">çýkar</option>
    <option value="carp">çarp</option>
    <option value="bol">böl</option>
  </select>
<br><br>
  <button onclick="hesapla()">hesapla</button> 

<br>
sonuc: <input id="sonuc" name="sonuc"/>
<br>
<script>

function hesapla() {

var sayi1= document.getElementById("sayi1").value;
var sayi2= document.getElementById("sayi2").value;
var islem=document.getElementById("hesaplama").value;
console.log(islem)
 if (islem == 'topla')
sonuc= parseInt(sayi1)+parseInt(sayi2);

if (islem == 'cikar')
sonuc=sayi1-sayi2;

if (islem == 'carp')
sonuc=sayi1*sayi2;

if (islem == 'bol')
sonuc=sayi1/sayi2;
document.getElementById("sonuc").value=sonuc;
}
</script>