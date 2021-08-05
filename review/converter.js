function displayDate(){
    document.getElementById("demo").innerHTML = toCelsius();
  
  function toCelsius(f) {
  var f = parseInt(myform.quantity.value);
    return f*380;
  }
}