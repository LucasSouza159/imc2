function option(event){
    event.preventDefault();

    let peso = document.querySelector("#peso").value;
    let altura = document.querySelector("#altura").value;
    let imc = peso / (altura * altura);
    let resultado = document.querySelector(".resultado");

    if(imc < 17.99){
        resultado.style.color = "red";
        resultado.innerHTML = `O seu IMC é -> (${imc.toFixed(2)})  e você está abaixo do peso ideal`;
    }else if(imc >= 18 && imc <= 24.99 ){
        resultado.style.color = "green";
        resultado.innerHTML = `O seu IMC é -> (${imc.toFixed(2)}) e você está com o peso ideal`;
    }else if(imc > 25 && imc <= 29.99){
        resultado.style.color = "yellow";
        resultado.innerHTML = `O seu IMC é -> (${imc.toFixed(2)}) e você está acima do peso ideal`;
    }else if(imc > 30){
        resultado.style.color = "red";
        resultado.innerHTML = `O seu IMC é -> (${imc.toFixed(2)}) e você está obeso. Procure um médico`;
    }

    setTimeout(() => {
        let sair = document.querySelector(".sair");
        sair.innerHTML = "Obrigado por utilizar nosso serviços, tenha um ótimo dia!"
    }, 5000);

    setInterval(() => {
        location.reload()
    }, 10000);
}