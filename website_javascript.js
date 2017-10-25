function myFunction() {
    var x = document.getElementById("frm1");
	var x1 = parseFloat(x.elements[1].value);
	var x2 = parseFloat(x.elements[2].value);
    var text = "";
	var prod = x1*x2;
    var i;
    for (i = 0; i < x.length-1 ;i++) {
        text += x.elements[i+1].value + "<br>";
    }
    document.getElementById("demo").innerHTML = prod;
}
