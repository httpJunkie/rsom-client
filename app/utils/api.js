import axios from 'axios';

module.exports = {
  fetchPopularRepos: function(lang) {
    var encodeURI = window.encodeURI(`https://api.github.com/search/repositories?q=starts:.1+language:${lang}&sort=starts&order=desc&types=Repositories`);
  }
}