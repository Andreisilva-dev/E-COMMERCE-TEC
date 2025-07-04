let cards = document.querySelector('.cards')

fetch('produtos.json')
    .then(response => response.json())
    .then(dados => {
        //console.log(dados)

        dados.forEach(elemento => {
            //console.log(elemento.nome)
            // criando o card
            cards.classList.add('container')
            let card = document.createElement('div')
            // colocando o card dentro do container
            cards.appendChild(card)
            // criando o elemento img
            let img = document.createElement('img')
            img.classList.add('imagemDosCard')
            // colocar o img dentro do card
            card.appendChild(img)
            // colocando src dentro do img
            img.src = elemento.imagem
            // colocando 0 css da caixa
            card.classList.add('card')
            // criando o elemento paragrafo
            let nomeProduto = document.createElement('p')
            // adicionando dentro do P o texto
            nomeProduto.textContent = elemento.nome
            // adicionando dentro da caixa o paragrafo
            card.appendChild(nomeProduto)
            // criando elemento estrela
            // criando o elemento p preco
            let precoProduto = document.createElement('p')
            card.appendChild(precoProduto)
            let valorProduto = elemento.preco
            precoProduto.textContent = valorProduto.toLocaleString('pt-BR', {style : 'currency', currency : 'BRL'})
            
        })
    })