let key = "4827f6b2dfb96f9cd4fb364d21442025"

function colocarDadosTela(dados) {
    document.querySelector(".city").innerHTML="Tempo em" + dados.name
    document.querySelector(".temp").innerHTML= Math.floor(dados.main.temp)+"°C"
    document.querySelector(".txt-prev").innerHTML=dados.whater[0].description
    document.querySelector(".umidade").innerHTML=dados.main.humidity + "%"
    document.querySelector(".img-temp").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade){
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}}&appid=${key}`).then(resposta => resposta.json()) }

function cliqueiNoBotao(){
    let cidade = document.querySelector(".input-cidade").value
     
    buscarCidade(cidade)
}
