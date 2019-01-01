import React from 'react';
import api from '../utils/api';

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
        console.log(repos)
      });
  }
  render() {
    return (
      <>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
      </>
    )
  }
}

export default Popular;

/* SelectLanguage Component */
import PropTypes from 'prop-types';

function SelectLanguage(props) {
  var languages = ["All", "JavaScript", "C#", "Java", "Python", "CSS"];
  return (
    <div className="container">
      <div className="container-item">
        <ul className="languages">
          {languages.map(function (lang) {
            return (
              <li
                style={
                  lang === props.selectedLanguage
                    ? { color: 'rgb(151, 243, 255, 0.5)' }
                    : null
                }
                onClick={props.onSelect.bind(null, lang)}
                key={lang}>
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