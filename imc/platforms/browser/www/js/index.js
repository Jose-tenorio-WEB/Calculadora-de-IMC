document.addEventListener("deviceready", function() {
    document.getElementById("btn-calcular").addEventListener("click", function() {
        // criando as variaveis que receberá os valores inserido nos inputs dentro do div.forms 
        var peso = document.getElementById("txt-peso").value;
        var altura = document.getElementById("txt-altura").value;

        // criando a variavel que recebera  o valor do peso e execultar a formula matematica de calculo do imc 
        var imc = peso / Math.pow(altura / 100, 2);
        // imc = imc.toFixed(2) //  irá apresentar somente dois numeros apos o ponto.
        imc = imc.toFixed(2);
        // declarando uma variavel global com o valor Null
        var resultado = "";
        // instalei um plugin para gera notificação  quando os campos estiverem vazios como o peso ou altura apresentara uma notificação 
        //para preencher os campos
        if (peso == "" || altura == "") {
            navigator.notification.alert("Preencha o peso e a altura", function() {}, "Aviso", "ok");
            return;
        }


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
        // inserindo os resultados através do id utilizando o innerHTML
        document.getElementById("lbl-imc").innerHTML = imc.toString().replace(".", ".");
        document.getElementById("lbl-resultado").innerHTML = resultado;
        document.getElementsByClassName("result")[0].style.display = "block"

    });
    // adicionando um evento "click" para limpar os campos e deixando com os valores "" ao clickar no botão limpar
    document.getElementById("btn-limpar").addEventListener("click", function() {
        document.getElementById("txt-peso").value = "";
        document.getElementById("txt-altura").value = "";
        document.getElementsByClassName("result")[0].style.display = "none";


    });

});