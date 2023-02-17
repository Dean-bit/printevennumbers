
      document.getElementById("convert").onclick = function() {
        var km = document.getElementById("km").value;
        var miles = km / 1.609;
        miles = miles.toFixed(4);
        document.getElementById("res").innerHTML = ' ' + miles + ' miles'; 
      }
    