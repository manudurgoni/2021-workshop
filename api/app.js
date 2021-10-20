let accessToken

const getUrlParameter = (sParam) => {
  let sPageURL = window.location.search.substring(1),////substring will take everything after the https link and split the #/&
      sURLVariables = sPageURL != undefined && sPageURL.length > 0 ? sPageURL.split('#') : [],
      sParameterName,
      i;
  let split_str = window.location.href.length > 0 ? window.location.href.split('#') : [];
  sURLVariables = split_str != undefined && split_str.length > 1 && split_str[1].length > 0 ? split_str[1].split('&') : [];
  for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');
      if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
      }
  }
};

const auth = () => {
  accessToken = getUrlParameter('access_token');
  console.log(accessToken)
  let client_id = "91eb4c0b666d43b796dd8f2a6aa6bb95"
  let redirect_uri = "http://localhost:5500/api/"

  const redirect = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}`;
  // Don't authorize if we have an access token already
  if (accessToken == null || accessToken == "" || accessToken == undefined) {
    window.location.replace(redirect);
  }
};

const getRecommandations = async () => {
  const response = await fetch("fakeData.json");
  const json = await response.json();

  // Afficher le contenu de la propriete 1 dans un H1
  // Afficher le contenu de la propriete 2 dans un p

  writeText(json);
  console.log(json);
};

const writeText = (json) => {
  const title = document.querySelector(".title");
  const text = document.querySelector(".text");

  title.innerHTML = json.id;
  text.innerHTML = json.artist;
};

auth()
// getRecommandations();
