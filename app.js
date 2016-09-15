window.addEventListener("load", function() {
	var superCri = document.getElementById("superCri");
	superCri.addEventListener("click", function() {
		var color = document.getElementById("color").value;

		if(color == "rosado"){
			document.getElementsByClassName("rosado")[0].classList.toggle("borde");
			document.getElementsByClassName("verde")[0].classList.remove("borde");
			document.getElementsByClassName("rojo")[0].classList.remove("borde");
		}
		else if(color == "verde"){
			document.getElementsByClassName("verde")[0].classList.toggle("borde");
			document.getElementsByClassName("rosado")[0].classList.remove("borde");
			document.getElementsByClassName("rojo")[0].classList.remove("borde");
		}
		else if(color == "rojo"){
			document.getElementsByClassName("rojo")[0].classList.toggle("borde");
			document.getElementsByClassName("verde")[0].classList.remove("borde");
			document.getElementsByClassName("rosado")[0].classList.remove("borde");
		}
	});

	var cri = document.getElementById("cri");
	var conta= 1;
	cri.addEventListener("click", function() {
        if(conta == 1){
            document.getElementsByClassName("rosado")[0].classList.toggle("borde");
            document.getElementsByClassName("verde")[0].classList.remove("borde");
			document.getElementsByClassName("rojo")[0].classList.remove("borde");
            document.getElementById("color").placeholder = "Rosado";
        }
        if(conta == 2){
            document.getElementsByClassName("verde")[0].classList.toggle("borde");
            document.getElementById("color").placeholder = "Verde";
            document.getElementsByClassName("rosado")[0].classList.remove("borde");
			document.getElementsByClassName("rojo")[0].classList.remove("borde");
        }
        if(conta == 3){
            document.getElementsByClassName("rojo")[0].classList.toggle("borde");
            document.getElementById("color").placeholder = "Rojo";
            document.getElementsByClassName("verde")[0].classList.remove("borde");
			document.getElementsByClassName("rosado")[0].classList.remove("borde");
            conta = 0;
        }
        conta++;
	});
});