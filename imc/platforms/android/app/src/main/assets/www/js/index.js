document.addEventListener("deviceready", function() {
    document.getElementById("btn-calcular").addEventListener("click", function() {

        var peso = document.getElementById("txt-peso").value;
        var altura = document.getElementById("txt-altura").value;

        var imc = peso / Math.pow(altura / 100, 2);
        imc = imc.toFixed(2);
        var resultado = "";

        if (imc < 17)
            resultado = "Muito abaixo do peso ";
        else if (imc >= 17 && imc < 18.5)
            resultado = "Abaixo do peso";
        else if (imc >= 18.5 && imc < 25)
            resultado = " Peso Normal";
        else if (imc >= 25 && imc < 30)
            resultado = " Acima do Peso";
        else if (imc >= 30 && imc < 35)
            resultado = " Obesidade I";
        else if (imc >= 35 && imc < 40)
            resultado = "Obesidade II (Severa)";
        else if (imc >= 40)
            resultado = "Obesidade III (Mórbida)";

        document.getElementById("lbl-imc").innerHTML = imc.toString().replace(".", ".");
        document.getElementById("lbl-resultado").innerHTML = resultado;
        document.getElementsByClassName("result")[0].style.display = "block"

    });
});