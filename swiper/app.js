const btnPrev = document.querySelector('.fleche--prev')
const btnNext = document.querySelector('.fleche--next')

const cards = document.querySelectorAll('.carte')
let currentCardIndex = 0

const init = () => {

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
  })
}

const goPrev = () => {
  const activeCard = cards[currentCardIndex]
  activeCard.classList.remove('active')
  
  currentCardIndex -= 1
  currentCardIndex = Math.max(currentCardIndex, 0)

  const prevCard = cards[currentCardIndex]
  prevCard.classList.add('active')
}

const goNext = () => {
  const activeCard = cards[currentCardIndex]
  activeCard.classList.remove('active')

  currentCardIndex += 1
  currentCardIndex = Math.min(currentCardIndex, cards.length - 1)

  const nextCard = cards[currentCardIndex]
  nextCard.classList.add('active')
}

const addListeners = () => {
  btnPrev.addEventListener('click', goPrev)
  btnNext.addEventListener('click', goNext)
}


init()
addListeners()