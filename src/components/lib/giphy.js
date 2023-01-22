import {api_key} from './data';

export const search = (term) => {
  let URL = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=${api_key}`;

  fetch(URL).then(
    response => response.json()
  ).then(
    (gifs) => {
      gifs_resp = gifs;
    }
  )



export const searchId = (id) => {
  let URL = `https://api.giphy.com/v1/gifs/${id}?api_key=${api_key}`;

  return Promise.resolve(
    fetch(URL).then(
      response => response.json()
    ).then(gif => gif));
}