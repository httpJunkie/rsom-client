import axios from 'axios';

const api = {
  fetchPopularRepos: (language) => {
    var encodedURI = window.encodeURI(`https://api.github.com/search/repositories?q=starts:.1+language:${language}&sort=starts&order=desc&types=Repositories`);

    return axios.get(encodedURI)
      .then((response) => {
        return response.data.items;
      })
  }
}

export default api;