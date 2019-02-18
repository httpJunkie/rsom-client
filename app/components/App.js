import React from 'react';
import Popular from './Popular';
import Iconic from './Iconic';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Nav from './Nav';
import Home from './Home';
import Battle from './Battle';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="popular-container">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/battle" component={Battle} />
            <Route path="/popular" render={(props) =>
              <div>
                <Popular />
                <Iconic />
              </div>
            } />
            <Route render={() => {
              return <h2 className="four-o-four">404 Page Not Found</h2>
            }}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;