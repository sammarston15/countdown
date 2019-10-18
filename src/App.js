import React from 'react';
import './reset.css';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Halloween from './components/halloween/halloween';

class App extends React.Component {

  state = {
    loading: false
  }


  handleLoading = () => {
    return (
      <div className="loading-container">
        <div className="loading">
          <div className="obj"></div>
          <div className="obj"></div>
          <div className="obj"></div>
          <div className="obj"></div>
          <div className="obj"></div>
          <div className="obj"></div>
          <div className="obj"></div>
          <div className="obj"></div>
        </div>
      </div>
    )
  }

  handleStartLoad = () => {
    this.setState({loading: true})
    setTimeout(() => {
      this.setState({loading: false})
    }, 3000)
  }

  render() {
    return (
      <div className="App">
        <header className='header'>
          <div className="header-left">
            <Link to='/' style={{textDecoration: 'none', color: 'black'}}>WELCOME</Link>
          </div>
          <div className="header-right">
            <Link to='/halloween' style={{textDecoration: 'none', color: 'black', height: '100%', width: 'auto'}}>
              <div className="nav-button">Halloween</div>
            </Link>
            <div className="nav-button">Thanksgiving</div>
            <div className="nav-button">Christmas</div>
          </div>
        </header>
        <div className="body">
            <Switch>
              <Route exact path='/'>
                { this.state.loading ? 
                  this.handleLoading()
                  :
                  <div className="home">
                    <button onClick={this.handleStartLoad}>Click me to load</button>
                    
                    
                  </div>
                }
              </Route>
              <Route path='/halloween' component={Halloween}/>
            </Switch>
        </div>
      </div>
    );
  }
}

export default App;
