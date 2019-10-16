import React from 'react';
import './reset.css';
import './App.css';

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
            Welcome!
          </div>
          <div className="header-right">
            <button>Halloween</button>
            <button>Thanksgiving</button>
            <button>Christmas</button>
          </div>
        </header>
        <div className="body">
          { this.state.loading ? 
            this.handleLoading()
            :
            <div className="home">
              <button onClick={this.handleStartLoad}>Click me to load</button>
              
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod repudiandae, aperiam perspiciatis vero corporis animi illum? Ab eaque necessitatibus ipsum alias, eius rem. Laboriosam voluptates molestias architecto, at quas perspiciatis!</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptatum eum repellat optio asperiores temporibus itaque nesciunt aperiam iste corrupti, eligendi velit excepturi fuga repudiandae incidunt facere saepe esse quisquam.</p>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default App;
