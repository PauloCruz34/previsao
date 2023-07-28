let key = "4827f6b2dfb96f9cd4fb364d21442025"

function colocarDadosTela(dados) {
    document.querySelector(".city").innerHTML="Tempo em" + dados.name
    document.querySelector(".temp").innerHTML= Math.floor(dados.main.temp)
    document.querySelector(".txt-prev").innerHTML=dados.whater[0].description
    document.querySelector(".umidade").innerHTML=dados.main.humidity
}

async function searchCity(){
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json{})
    
}

function clickOfButton() {
   let cidade = document.querySelector(".input-cidade").value
    searchCity(cidade)
}