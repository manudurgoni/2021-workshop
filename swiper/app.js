const init = () => {

  const cards = document.querySelectorAll('.carte')

  const nbCards = cards.length - 1
  cards.forEach((card, i) => {
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


init()