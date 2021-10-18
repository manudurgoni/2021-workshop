const init = () => {

  const cards = document.querySelectorAll('.carte')

  const nbCards = cards.length - 1
  cards.forEach((card, i) => {
    // 10, c'est l'offset entre chaque carte
    const offset = `${i * 5}px`
    card.style.setProperty('--offset', offset)

    const color = `rgb(0, ${255 - (i/30 * 255)}, 0)`
    console.log(color)
    card.style.setProperty('--color', color)

    const z = nbCards - i
    card.style.setProperty('--zIndex', z)
  })
}


init()