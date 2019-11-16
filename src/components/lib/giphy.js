import {api_key} from './data';

export const search = (term) => {
  let URL       = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=${api_key}`,
        gifs_resp = '';

  fetch(URL).then(
    response => response.json()
  ).then(
    (gifs) => {
      console.log(gifs, "gifs");
      gifs_resp = gifs;
    }
  )

  return gifs_resp;
}