const btnPrev = document.querySelector('.fleche--prev')
const btnNext = document.querySelector('.fleche--next')

const cards = document.querySelectorAll('.carte')
let currentCardIndex

const init = () => {
  currentCardIndex = 0
  const nbCards = cards.length - 1
  cards.forEach((card, i) => {
    // On applique la class active au premier item du tableau
    if (i === currentCardIndex) card.classList.add('active')

    // On stock si l'index et pair ou impar
    const isEven = i % 2 === 0
    // On créé un multiplicateur positif ou negatif
    const mult = (isEven ? 1 : -1)

    const spaceX = (0.6 * Math.random() * mult) + 4
    const spaceY = (Math.random() * mult) + 2
    
    const offsetX = `${i * spaceX}px`
    const offsetY = `${i * spaceY}px`
    
    card.style.setProperty('--offsetX', offsetX)
    card.style.setProperty('--offsetY', offsetY)

    const color = `rgb(0, ${255 - (i/30 * 255)}, 0)`
    card.style.setProperty('--color', color)

    const z = nbCards - i
    card.style.setProperty('--zIndex', z)


    //Rotation
    const rotationX = (i + 1) * Math.PI * 0.5
    card.style.setProperty('--rotationX', `${rotationX}deg`)

    card.style.setProperty('--left', '50%')


    card.innerHTML = `<span class="carte__number">${i}</span>`

    // card.innerHTML = `<img class="carte__number" src="https://www.placecage.com/${350 + Math.floor(Math.random() * 40)}/360" />`
  })
}

// const goPrev = () => {
//   const activeCard = cards[currentCardIndex]
//   activeCard.classList.remove('active')
  
//   currentCardIndex -= 1
//   currentCardIndex = Math.max(currentCardIndex, 0)

//   const prevCard = cards[currentCardIndex]
//   prevCard.classList.add('active')
// }

const goNextCard = (isNext) => {
  if (currentCardIndex === cards.length) {
    init()
    return
  }

  const activeCard = cards[currentCardIndex]

  const left = isNext ? 80 : 20
  activeCard.style.setProperty('--left', `${left}%`)

  const mult = Math.random() > 0.5 ? 1 : -1
  const rotationX = Math.random() * 3 * mult 
  activeCard.style.setProperty('--rotationX', `${rotationX}deg`)

  currentCardIndex += 1

  activeCard.style.setProperty('--zIndex', cards.length + currentCardIndex)
  // setTimeout(() => {
  // }, 1000)
}

const addListeners = () => {
  btnPrev.addEventListener('click', () => {
    goNextCard(false)
  })
  btnNext.addEventListener('click', () => {
    goNextCard(true)
  })
}


init()
addListeners()