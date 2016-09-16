var color1 = document.getElementsByClassName("rosado")[0];
var color2 = document.getElementsByClassName("verde")[0];
var color3 = document.getElementsByClassName("rojo")[0];

function cambiarColor(color1,color2,color3){
	color1.classList.toggle("borde");
	color2.classList.remove("borde");
	color3.classList.remove("borde");
}


window.addEventListener("load", function() {
	var superCri = document.getElementById("superCri");
	superCri.addEventListener("click", function() {
		var color = document.getElementById("color").value;

		if(color == "rosado")
			cambiarColor(color1, color2, color3);
		else if(color == "verde")
			cambiarColor(color2, color1, color3);
		else if(color == "rojo")
			cambiarColor(color3, color2, color1);
	});

	var cri = document.getElementById("cri");
	var conta= 1;
	cri.addEventListener("click", function() {
        if(conta == 1){
            cambiarColor(color1, color2, color3);
            document.getElementById("color").placeholder = "Rosado";
        }
        if(conta == 2){
            cambiarColor(color2, color1, color3);
            document.getElementById("color").placeholder = "Verde";
        }
        if(conta == 3){
            cambiarColor(color3, color2, color1);
            document.getElementById("color").placeholder = "Rojo";
            conta = 0;
        }
        conta++;
	});
});