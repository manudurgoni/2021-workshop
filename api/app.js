const timeout = (t, val) => {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(val);
    }, t);
  });
};

const getRecommandations = async () => {
  const response = await fetch('fakeData.json')
  const json = await response.json()

  // Afficher le contenu de la propriete 1 dans un H1
  // Afficher le contenu de la propriete 2 dans un p

  writeText(json)
  console.log(json)
};

const writeText = (json) => {
  const title = document.querySelector('.title')
  const text = document.querySelector('.text')

  title.innerHTML = json.id
  text.innerHTML = json.artist
}


getRecommandations();
