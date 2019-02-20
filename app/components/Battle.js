import React from 'react';

class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null
    }
  }
  
  render() {
    return (
      <div className="battle-container">
        <h1>Battle Coming Soon.</h1>
      </div>
    )
  }
}

export default Battle;