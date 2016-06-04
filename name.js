2)<title>Return first and last name from a form - w3resource</title>  
 
<form id="form1" onsubmit="getFormvalue()">  
First name: <input type="text" id="fname"  ><br>  
Last name: <input type="text" id="lname"  ><br>  
<input type="submit" value="Submit">  
</form>  
 
<script>
function getFormvalue()
{
var fname= document.getElementById("fname").value;
var lname= document.getElementById("lname").value;
alert(fname);
alert(lname);


}

</script>