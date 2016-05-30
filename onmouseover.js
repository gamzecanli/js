
//Html deki koyu renk yazýlan linkin üzerine gelindiginde koyu renk olan kelimelerin rengini degiþtiren javascript fonksiyonu
<title>Get And Style All Tags</title>  

     
  <p>[<a href="#" id="demo" onMouseOver="highlight()" onMouseOut="return_normal()">On mouse over here bold words of the following paragraph will be highlighted</a>]</p>   
<p><strong>We</strong> have just started <strong>this</strong> section for the users (<strong>beginner</strong> to intermediate) who <strong>want</strong> to work with <strong>various</strong> JavaScript <strong>problems</strong> and write scripts online to <strong>test</strong> their JavaScript <strong>skill</strong>.</p>  

<script>
 bold_Items = document.getElementsByTagName('strong');
 
function highlight(){
  for (var i=0; i<bold_Items.length; i++)
   {                                                    
    bold_Items[i].style.color = "red";
    }
}

function return_normal(){

  for (var i=0; i<bold_Items.length; i++) 
  {
       bold_Items[i].style.color = "black";
  }
}

</script>