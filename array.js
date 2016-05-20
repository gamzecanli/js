<input id="element" name="dizi" />

<button onclick="ekle()">ekle</button>

<div id="dizi1">

</div>
<script>
  var dizi = [];

  function ekle() {

    var element = document.getElementById("element").value;

    dizi.push(element)

    var node = document.createElement("div");
    var textNode = document.createTextNode(dizi);
    node.appendChild(textNode);
    
    
    document.getElementById("dizi1").appendChild(node);

    console.log(dizi)
  }

</script>