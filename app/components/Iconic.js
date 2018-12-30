import React from 'react';
import '../css/buttons.css';
import '../css/vicons-font.css';
import '../css/iconic.css'

class Iconic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedButton: 'sun'
    }
    this.updateSelectedIconButton = this.updateSelectedIconButton.bind(this);
  }
  updateSelectedIconButton(lang) {
    this.setState(function () {
      return {
        selectedButton: lang
      }
    });
  }
  render() {
    return (
      <>
        <SelectIconButton
          selectedButton={this.state.selectedButton}
          onSelect={this.updateSelectedIconButton}
        />
      </>
    )
  }
}

export default Iconic;

/* SelectIconButton Component */
import PropTypes from 'prop-types';

function SelectIconButton(props) {
  var vicons = ["sun", "moon", "envelope"];
  return (
    <div className="container">
      <div className="container-item">
      <ul className="languages">
        {vicons.map(function (vicon, idx) {
          return (
            <li key={vicon+idx}>
              <button
                className={`button button--viconic button--round-s ${vicon === props.selectedButton ? 'button--inverted' : null}`}
                onClick={props.onSelect.bind(null, vicon)}
              >
                <i className={`button__icon icon icon-${vicon}`}></i>
                <span>{vicon}</span>
              </button>
            </li>
          )
        })}
        </ul>
      </div>
    </div>
  )
}

SelectIconButton.propTypes = {
  selectedButton: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}