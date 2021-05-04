import React, { Component } from 'react'
import './bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import LDprofie from './components/LDprofile'
import Register from './components/Register'
import Landlord from './components/Landlord'
import ResetPassword from './components/ResetPassword'
import ResetPasswordConfirm from './components/ResetPasswordConfirm'
import axios from 'axios'
import Navbar from './components/Navbar'
import Page1 from './components/page1'
import Vish from './components/Vish'
import Contact from './components/Contact'
import Interior from './components/Interior'
import Profile from './components/Profile'
import Roomies from './components/Roomies'
import Roommates from './components/roommates'
import Roomiereg from './components/Roomiereg'
class App extends Component {
  state = {}
  componentDidMount = () => {
    const config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    }

    axios
      .get('http://localhost:5000/' + localStorage.getItem('id'), config)
      .then(
        (res) => {
          this.setUser(res.data)
        },
        (err) => {
          console.log(err)
        }
      )
  }

  setUser = (user) => {
    this.setState({
      user: user,
    })
  }

  render() {
    return (
      <div>
       
        <Router>
          <Navbar user={this.state.user} setUser={this.setUser} />

          <Switch>
            <Route
              exact
              path='/'
              component={() => <Home user={this.state.user} />}
            />
            <Route
              exact
              path='/login'
              component={() => <Login setUser={this.setUser} />}
            />
            <Route exact path='/register' component={Register} />
            <Route exact path='/posts' component={Vish} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/password-reset/' component={ResetPassword} />
            <Route
             
              path='/changepassword/:'
              component={ResetPasswordConfirm}
            />
            <Route
              exact
              path='/landlord/'
              component={() => <Landlord user={this.state.user} />}
            />
            <Route
              exact
              path='/ldprofile/'
              component={() => <LDprofie user={this.state.user} />}
            />
            <Route exact path='/roommates/' component={Roommates}></Route>
            <Route exact path='/roommates/:id' component={Roomies} />
            <Route exact path='/roomiereg' 
            component={() => <Roomiereg user={this.state.user}/>}
             />
            <Route
              exact
              path='/interior/'
              component={() => <Interior user={this.state.user} />}
            />
            <Route
              exact
              path='/page1'
              component={() => <Page1 user={this.state.user} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
