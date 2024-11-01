document.addEventListener('DOMContentLoaded', () => {
    //cad options
    const cartaArray = [
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        }
    ]

    cartaArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const telaDeResultado = document.querySelector('#result')
    let cartasEscolhida = []
    let cartasEscolhidaId = []
    let cartasVitoria = []

    //tabuleiro
    function criarTabuleiro() {
        for (let i = 0; i < cartaArray.length; i++) {
            const carta = document.createElement('img')
            carta.setAttribute('src', 'images/blank.png')
            carta.setAttribute('data-id',i)
            carta.addEventListener('click', girarCarta)
            grid.appendChild(carta)
        }
    }

    //checar os pares
    function verificarPares() {
        const cartas = document.querySelectorAll('img')
        const opcaoUmId = cartasEscolhidaId[0]
        const opcaoDoisId = cartasEscolhidaId[1]

        if (cartasEscolhida[0] === cartasEscolhida[1]) {
            alert('Você encontrou o par! ')
            cartas[opcaoUmId].setAttribute('src', 'images/white.png')
            cartas[opcaoDoisId].setAttribute('src', 'images/white.png')
            cartasVitoria.push(cartasEscolhida)
        } else {
            cartas [opcaoUmId].setAttribute('src', 'images/blank.png')
            cartas [opcaoDoisId].setAttribute('src', 'images/blank.png')
        alert('Não foi dessa vez, tente novamente!')
        }
        cartasEscolhida = []
        cartasEscolhidaId = []
        telaDeResultado.textContent = cartasVitoria.length
        if (cartasVitoria.length === cartaArray.length/2) {
            telaDeResultado.textContent = 'GG WP c ganhou'
        }
    }
    //girar a carta
    function girarCarta() {
        var cartaId = this.getAttribute('data-id')
        cartasEscolhida.push(cartaArray[cartaId].name)
        cartasEscolhidaId.push(cartaId)
        this.setAttribute('src', cartaArray[cartaId].img)
        if (cartasEscolhida.length === 2) {
            setTimeout(verificarPares, 500)
        }
    }

    criarTabuleiro()
})