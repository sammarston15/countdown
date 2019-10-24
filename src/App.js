import React from 'react';
import './reset.css';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Halloween from './components/halloween/halloween';
import {CSVLink} from 'react-csv';

class App extends React.Component {

  state = {
    loading: false,
    csvData: [
      ['FIRSTNAME', 'LASTNAME', 'EMAIL']
    ],
    firstname: '',
    lastname: '', 
    email: ''
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

  handleChange = e => this.setState({[e.target.name]: e.target.value})

  handleSave = () => {
    this.state.csvData.push([this.state.firstname, this.state.lastname, this.state.email])
    this.setState({
      firstname: '',
      lastname: '', 
      email: ''
    })
  }

  onKeyPress = (e) => {
    if (e.which === 13) {
      this.handleSave();
    }
  }

  render() {
    
    const {firstname, lastname, email} = this.state
    console.log(this.state)

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
                    <div style={{fontSize: '50px', color: 'whitesmoke', maxWidth: '400px', height: 'auto', textAlign: 'center'}}>Hello all, enter info to put in the csv file</div>
                    <button onClick={this.handleStartLoad}>Click me to load</button>
                    <input name="firstname" value={firstname} placeholder='firstname' onChange={this.handleChange} />
                    <input name="lastname" value={lastname} placeholder='lastname' onChange={this.handleChange} />
                    <input name="email" value={email} placeholder='email' onChange={this.handleChange} onKeyPress={this.onKeyPress}/>
                    <button onClick={this.handleSave}>submit to csv</button>
                    <CSVLink data={this.state.csvData} target='_blank'>
                      <button>download me as .csv file</button>
                    </CSVLink>
                  </div>
                }
              </Route>
              <Route path='/halloween'>
                <Halloween timeTillDate="10 31 2019, 12:00 am" timeFormat="MM DD YYYY, h:mm a" />
              </Route>
            </Switch>
        </div>
      </div>
    );
  }
}

export default App;
