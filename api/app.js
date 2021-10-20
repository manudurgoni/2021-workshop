let isFetching = false
let accessToken
let tracksContainer = document.querySelector('.tracks')
let button = document.querySelector('.reload')

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
  let client_id = "91eb4c0b666d43b796dd8f2a6aa6bb95"
  let redirect_uri = "http://localhost:5500/api/"

  const redirect = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}`;
  // Don't authorize if we have an access token already
  if (accessToken == null || accessToken == "" || accessToken == undefined) {
    window.location.replace(redirect);
  }
};

const getRecommandations = async () => {
  console.log('isFetching', isFetching)
  if (isFetching) return
  isFetching = true

  tracksContainer.innerHTML = ''

  const params = {
    params: {
      limit: 9,
      market: 'FR',
      popularity: '85',
      seed_genres: 'hip-hop'
    },
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
}

  const response = await axios.get("https://api.spotify.com/v1/recommendations", params);
  const recommendations = response.data

  isFetching = false

  recommendations.tracks.forEach((track) => {
    createTrack(track)
  })
};

const createTrack = (track) => {
  const el = document.createElement('div')
  el.classList.add('track')

  const album = track.album
  const artists = track.artists.map((artist) => {
    return artist.name
  })


  const inner = /*html*/`
    <div class="track__album">
      <img src="${album.images[0].url}" alt="">
    </div>
    <div class="track__infos">
      <p class="name">${track.name}</p>

      <div class="artists">${artists}</div>
    </div>
  `

  el.innerHTML = inner

  tracksContainer.append(el)
}

auth()

if (accessToken) {
  getRecommandations()

  const btn = document.querySelector('.reload')
  btn.addEventListener('click', getRecommandations)
}
// getRecommandations();
