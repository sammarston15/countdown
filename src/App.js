import React from 'react';
import './reset.css';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Halloween from './components/halloween/halloween';
import Thanksgiving from './components/thanksgiving/thanksgiving';
import Christmas from './components/Christmas/Christmas';
import Movies from './components/movies/movies';
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

    const csvMap = this.state.csvData.map((data, i) => {
      return (
        console.log(data),
        <tr style={{height: 'auto', border: '1px solid black'}} key={i}>
          <td style={{padding: '20px', border: '1px solid black', background: 'white'}}>{data[data.length - 3]}</td>
          <td style={{padding: '20px', border: '1px solid black', background: 'white'}}>{data[data.length - 2]}</td>
          <td style={{padding: '20px', border: '1px solid black', background: 'white', width: '200px'}}>{data[data.length - 1]}</td>
        </tr>
      )
    })
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
            <Link to='/thanksgiving' style={{textDecoration: 'none', color: 'black', height: '100%', width: 'auto'}}>
              <div className="nav-button">Thanksgiving</div>
            </Link>
            <Link to='/christmas' style={{textDecoration: 'none', color: 'black', height: '100%', width: 'auto'}}>
              <div className="nav-button">Christmas</div>
            </Link>
            <Link to='/movies/discover/page=1' style={{textDecoration: 'none', color: 'black', height: '100%', width: 'auto'}}>
              <div className="nav-button">Movies</div>
            </Link>
          </div>
        </header>
        <div className="body">
            <Switch>
              <Route exact path='/'>
                { this.state.loading ? 
                  this.handleLoading()
                  :
                  <div className="home">
                    <div style={{fontSize: '50px', color: 'whitesmoke', maxWidth: '600px', height: 'auto', textAlign: 'center'}}>
                      Take a look at the tabs up top to see how much time it takes to get to that holiday. <br/>
                      <br/>
                      Hello all, enter info to put in the csv file
                    </div>
                    <button onClick={this.handleStartLoad}>Click me to load</button>
                    <input name="firstname" value={firstname} placeholder='firstname' onChange={this.handleChange} />
                    <input name="lastname" value={lastname} placeholder='lastname' onChange={this.handleChange} />
                    <input name="email" value={email} placeholder='email' onChange={this.handleChange} onKeyPress={this.onKeyPress}/>
                    <button onClick={this.handleSave}>submit to csv</button>
                    <CSVLink data={this.state.csvData} target='_blank'>
                      <button>download me as .csv file</button>
                    </CSVLink>
                    
                      <table className='csv-report'>
                        <tbody style={{margin: '0 30px'}}>
                          {csvMap}
                        </tbody>
                      </table>
                      
                    
                  </div>
                }
              </Route>
              <Route path='/halloween' component={Halloween} />
              <Route path='/thanksgiving' component={Thanksgiving} />
              <Route path='/christmas' component={Christmas} />
              <Route path='/movies/discover/page=1' component={Movies} />
            </Switch>
        </div>
      </div>
    );
  }
}

export default App;
