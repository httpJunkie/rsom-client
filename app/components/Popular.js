import React from 'react';
import api from '../utils/api';
import PropTypes from 'prop-types';

function SelectLanguage(props) {
  var languages = ['All', 'JavaScript', 'C#', 'Java', 'Python', 'CSS'];

  return (
    <div className='container'>
      <div className='container-item'>
        <ul className='languages'>
          {languages.map(function (lang) {
            return (
              <li
                style={
                  lang === props.selectedLanguage
                    ? { color: 'rgb(151, 243, 255, 0.5)' }
                    : null
                }
                onClick={props.onSelect.bind(null, lang)}
                key={lang}
              >
                {lang}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

function RepoGrid(props) {
  return (
    <ul className='popular-list'>
      {props.repos.map(function (repo, index) {
        return (
          <li key={repo.name} className='popular-item'>
            <div className='popular-rank'>#{index + 1}</div>
            <ul className="space-list-items">
              <li>
                <img
                  src={repo.owner.avatar_url}
                  className='avatar'
                  alt={'avatar for ' + repo.owner.login} />
              </li>
              <li><a href={repo.html_url}>{repo.name}</a></li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count} stars</li>
            </ul>
          </li>
        )
      })}
    </ul>
  )
}
RepoGrid.propTypes = {
  repo: PropTypes.array.isRequired
}

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All',
      repos: null
    }
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() {
    // AJAX SHIT HERE
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(lang) {
    this.setState(() => {
      return {
        selectedLanguage: lang,
        repos: null
      }
    });
    api.fetchPopularRepos(lang)
      .then((repos) => {
        this.setState(function() {
          return {
            repos: repos
          }
        }.bind(this))
      });
  }
  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
        {!this.state.repos
          ? <p>loading..</p>
          : <RepoGrid repos={this.state.repos} />}
      </div>
    )
  }
}

export default Popular;