const baseUrl = process.env.REACT_APP_BASE_URL;


// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = process.env.REACT_APP_SPOTIFY_TOKEN;
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`${baseUrl}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

const topTracksIds = [
  '2uRo33fBwWmnQAjFW2ukoK','4PHd0jYrg9Xj1clJgmZGD4','7tDASYxj2O3UBK6VTWGaUW','0jLTcpRb5QCgoe6yKTvLqa','45qfKR6AH0iddUNaRUo9Zc'
];

async function getRecommendations(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-recommendations
  return (await fetchWebApi(
    `v1/recommendations?limit=5&seed_tracks=${topTracksIds.join(',')}`, 'GET'
  )).tracks;
}

const recommendedTracks = await getRecommendations();
console.log(
  recommendedTracks.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);