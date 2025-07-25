/*let webhook = "https://cesardev38.app.n8n.cloud/webhook-test/animacao-css"

function cliqueiNoBotao() {
let textoInput = document.querySelector(".input-animacao").value 

let resposta = fetch()


console.log(textoInput)


}    
*/



let webhook = "https://cesardev38.app.n8n.cloud/webhook/animacao-css"

async function cliqueiNobotao() {
    let textoInput = document.querySelector(".input-animacao").value
    let codigo = document.querySelector(".area-codigo")
    let areaResultado = document.querySelector(".area-resultado")

    let botao = document.querySelector(".botao-magica")
    botao.disabled = true;
    botao.textContent = "Criando.."
    botao.style.backgroud = "#88888"

    let resposta = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json'},
        body: JSON.stringify({ pergunta: textoInput })
    })

    let resultado = await resposta.json()

    let info = JSON.parse(resultado.resposta)

    codigo.innerHTML = info.code
    areaResultado.innerHTML = info.preview

    document.head.insertAdjacentHTML('beforeend', "<style>" + info.style + "</style>")

    botao.disabled = true;
    botao.textContent = "Criar Mágica"
    botao.style.backgroud = "#37e359"
    
}
