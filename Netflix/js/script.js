let legends = document.querySelectorAll(".descricoes")
let legendas = Array.from(legends)
let imgs = document.querySelectorAll(".imagens")
let imagens = Array.from(imgs)

legendas[0].classList.add("filme_ativo")
imagens[0].classList.add("ativo")

TempoLegendas()

function TempoLegendas(){
  legendas[legendas.length - 1].classList.remove("filme_ativo")
  legendas.forEach((legenda, i)=>{
    setTimeout(()=>{
      legendas[i].classList.add("filme_ativo")
      if (i > 0) {
        legendas[i - 1].classList.remove("filme_ativo")
      }
    },10000 * i) 
  })
}


setInterval(TempoLegendas, 150000)

TempoImagens()

function TempoImagens(){
  imagens[imagens.length - 1].classList.remove("ativo")
  imagens.forEach((imagem, i)=>{
    setTimeout(()=>{
      imagens[i].classList.add("ativo")
      if (i > 0) {
        imagens[i - 1].classList.remove("ativo")
      }
    },10000 * i) 
  })
}


setInterval(TempoImagens, 150000)
