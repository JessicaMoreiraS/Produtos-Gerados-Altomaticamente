var todosProdutos = [["Italle", "italle.png", "extraforte", 50], 
                    ["Biangini", "biangini.png", "Café torrado e moído", 42],
                    ["Utam", "utam.png", "Café torrado em Grãos - gourmet", 36],
                    ["Bom Dia", "bomDia.png", "extraforte", 29],
                    ["Melita", "melita.png", "Mogiana- gourmet", 45],
                    ["Café do Mercado", "cafeDoMercado.png", "Chapada Diamantina", 32],
                    ["Agrocoop", "agrocoop.png", "100% canilon", 99],
                    ["Kit Baggio", "baggioKit.png", "Kit diverso", 200],
                    ["Duas Marias", "duasMarias.png", "100% arábica - extraforte", 25]]

function carregarProdutos(){
    for(i=0; i<todosProdutos.length; i++){
            const card = document.createElement("div");
            card.classList.add("card")
            card.innerHTML=`<div class="areaImagem"><img src="imagens/${todosProdutos[i][1]}"></div>
                            <h3>${todosProdutos[i][0]}</h3>
                            <p>${todosProdutos[i][2]}</p>
                            <h4>R$${todosProdutos[i][3].toFixed(2)}</h4>
                            <button class="c-button c-button--gooey"> Comprar
                                <div class="c-button__blobs">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </button>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="display: block; height: 0; width: 0;">
                                <defs>
                                    <filter id="goo">
                                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
                                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
                                        <feBlend in="SourceGraphic" in2="goo"></feBlend>
                                    </filter>
                                </defs>
                            </svg>`;
            document.getElementById("containerPrincipal").appendChild(card);
    }
}

function opcoesProdutos(){
    document.getElementById("myDropdown").classList.toggle("show");
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
}