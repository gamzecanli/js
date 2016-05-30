
//Listeden seçilen red, green, white, black i listeden kaldýran javascript kodu
<form>
Select a color:
<br>
<select id="colorselect" >
  <option>Red</option>
  <option>Green</option>
  <option>White</option>
  <option>Black</option>
</select>
</form>
<br>

<button onclick="removecolor()">Select and Remove</button>

<script>
function removecolor() {
    var x = document.getElementById("colorselect");
    x.remove(x.selectedIndex);
}
</script>

