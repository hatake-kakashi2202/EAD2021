import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style2.css'
class Navbar extends Component {
  state = {
    navbar: false,
  }
  changeBackground = () => {
    if (window.scrollY >= 80) {
      this.setState({ navbar: true })
    } else {
      this.setState({ navbar: true })
    }
  }

  handleLogout = () => {
    localStorage.clear()
    this.props.setUser(null)
  }

  render() {
    if (window.addEventListener) {
      window.addEventListener('scroll', this.changeBackground)
    }

    let buttons
    if (this.props.user) {
      buttons = (
        <div>
          <nav
            className={
              this.state.navbar
                ? 'navbar navbar-expand-lg navbar-light fixed-top py-3 navbar-scrolled'
                : 'navbar navbar-expand-lg navbar-light fixed-top py-3'
            }
            id='mainNav'
          >
            <div className='container'>
              <br />
              <Link className='navbar-brand js-scroll-trigger' to={'/'}>
                findR
              </Link>
              <button
                className='navbar-toggler navbar-toggler-right'
                type='button'
                data-toggle='collapse'
                data-target='#navbarResponsive'
                aria-controls='navbarResponsive'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='navbar-toggler-icon' />
              </button>
              <div className='collapse navbar-collapse' id='navbarResponsive'>
                <ul className='navbar-nav ml-auto my-2 my-lg-0'>
                  <li className='nav-item'>
                    <Link className='nav-link js-scroll-trigger' to={'/'}>
                      About
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link
                      className='nav-link js-scroll-trigger'
                      to={'/ldprofile'}
                    >
                      Profile
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link
                      className='nav-link js-scroll-trigger'
                      to={'/'}
                      onClick={this.handleLogout}
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      )
    } else {
      buttons = (
        <div>
          <nav
            className={
              this.state.navbar
                ? 'navbar navbar-expand-lg navbar-light fixed-top py-3 navbar-scrolled'
                : 'navbar navbar-expand-lg navbar-light fixed-top py-3'
            }
            id='mainNav'
          >
            <div className='container'>
              <Link className='navbar-brand js-scroll-trigger' to={'/'}>
                findR
              </Link>
              <button
                className='navbar-toggler navbar-toggler-right'
                type='button'
                data-toggle='collapse'
                data-target='#navbarResponsive'
                aria-controls='navbarResponsive'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='navbar-toggler-icon' />
              </button>
              <div className='collapse navbar-collapse' id='navbarResponsive'>
                <ul className='navbar-nav ml-auto my-2 my-lg-0'>
                  <li className='nav-item'>
                    <Link className='nav-link js-scroll-trigger' to={'/'}>
                      About
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link
                      className='nav-link js-scroll-trigger'
                      to={'/register'}
                    >
                      Register
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link className='nav-link js-scroll-trigger' to={'/login'}>
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      )
    }

    return <div>{buttons}</div>
  }
}

export default Navbar
