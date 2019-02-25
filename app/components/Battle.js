import React from 'react';
import PropTypes from 'prop-types';

class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOneName: '', playerOneImage: null,
      playerTwoName: '', playerTwoImage: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(id, username) {
    this.setState(function() {
      var newState = {};
      let url = 'https://github.com/', imageType = 'png', size = '200';
      newState[id + 'Name'] = username;
      newState[id + 'Image'] = url + username + imageType +'.?size=' + size;
      return newState;
    });
  }

  render() {
    let playerOneName = this.state.playerOneName;
    let playerTwoName = this.state.playerTwoName;

    return (
      <div className="row">
        {!playerOneName && <PlayerInput id='playerOne' label='Player One' onSubmit={this.handleSubmit} />}
        {!playerTwoName && <PlayerInput id='playerTwo' label='Player Two' onSubmit={this.handleSubmit} />}
      </div>
    )
  }
}

export default Battle;

// Component(s) Only Used In Battle Component

class PlayerInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var value = event.target.value;
    this.setState(function() {
      return {
        username: value
      }
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.props.id, this.state.username);
  }

  render() {
    return (
      <form className='column' onSubmit={this.handleSubmit}>
        <label className='header' htmlFor='username'>
          {this.props.label}
        </label>
        <input 
          id='username'
          placeholder='github username'
          type="text" autoComplete='off'
          value={this.state.username} onChange={this.handleChange}
          />
        <button className='button' type='submit' disabled={!this.state.username}>
          Submit
        </button>
      </form>
    )
  }
}

PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}