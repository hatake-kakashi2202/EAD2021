import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
class Roomiereg extends Component {
  state = {
    credentials: {
      user: localStorage.getItem('id'),
      name: '',
      gender: '',
      hometown: '',
      roomtown: '',
      language: '',
      occupation: '',
      course: '',
      alcohol: '',
      smoking: '',
      food_preference: '',
      culinary: '',
    },
    message: '',
    registered: false,
  }

  register = (event) => {
    let message1 = ''
    event.preventDefault()
    console.log(this.state.credentials)

    var data = this.state.credentials
    axios
      .post('http://localhost:5000/api/roommates/roomiereg', data)
      .then((res) => {
        console.log(res)
        this.setState({
          registered: true,
        })
      })
      .catch((err) => {
        if (err.response && err.response.data.name) {
          message1 = err.response.data.name
        } else if (err.response && err.response.data.gender) {
          message1 = err.response.data.gender
        } else if (err.response && err.response.data.hometown) {
          message1 = err.response.data.hometown
        } else if (err.response && err.response.data.roomtown) {
          message1 = err.response.data.town
        } else if (err.response && err.response.data.language) {
          message1 = err.response.data.language
        } else if (err.response && err.response.data.occupation) {
          message1 = err.response.data.occupation
        } else if (err.response && err.response.data.course) {
          message1 = err.response.data.course
        } else if (err.response && err.response.data.alcohol) {
          message1 = err.response.data.alcohol
        } else if (err.response && err.response.data.smoking) {
          message1 = err.response.data.smoking
        } else if (err.response && err.response.data.culinary) {
          message1 = err.response.data.culinary
        } else {
          if (err.response && err.response.data.food_preference) {
            message1 = err.response.data.food_preference
          }
        }
        this.setState({
          message: message1,
        })
      }, console.log(this.state.message))
  }

  inputChanged = (event) => {
    const cred = this.state.credentials
    cred[event.target.name] = event.target.value
    this.setState({ credentials: cred })
  }

  render() {
    if (this.state.registered) {
      return <Redirect to={'/roommates/'} />
    }
    let error = ''
    if (this.state.message) {
      error = <div>{this.state.message}</div>
    }
    return (
      <div class='roomie'>
        <div class='container'>
          <br />
          <br />
          <br />
          <Link className='btn btn-light my-3' to='/roommates/'>
            Go Back
          </Link>
          <div class='row py-2 mt-4 align-items-center'>
            <div class='col-md-5 pr-lg-5 mb-5 mb-md-0'>
              <img
                src='https://res.cloudinary.com/mhmd/image/upload/v1569543678/form_d9sh6m.svg'
                alt=''
                class='img-fluid mb-3 d-none d-md-block'
              />

              <h3 className='text-center'>Register As a Roomie</h3>
            </div>
            <div class='col-md-7 col-lg-5 ml-auto'>
              <form onSubmit={this.register}>
                {error}
                <div class='row'>
                  <div class='input-group col-lg-12 mb-4'>
                    <div class='input-group-prepend'>
                      <span class='input-group-text bg-white px-4 border-md border-right-0'>
                        <i class='fa fa-user text-muted'></i>
                      </span>
                    </div>
                    <input
                      placeholder='First Name'
                      class='form-control bg-white border-left-0 border-md'
                      type='text'
                      name='name'
                      value={this.state.credentials.name}
                      onChange={this.inputChanged}
                    />
                  </div>
                  <br />
                  <div class='input-group col-lg-12 mb-4'>
                    <div class='input-group-prepend'>
                      <span class='input-group-text bg-white px-4 border-md border-right-0'>
                        <i class='fa fa-user text-muted'></i>
                      </span>
                    </div>
                    <select
                      class='form-control custom-select bg-white border-left-0 border-md'
                      value={this.state.credentials.gender}
                      id='gender'
                      name='gender'
                      type='text'
                      onChange={this.inputChanged}
                    >
                      <option value='0'>choose</option>
                      <option value='male'>Male</option>
                      <option value='female'>Female</option>
                      <option value='non-binary'>Non-Binary</option>
                    </select>
                  </div>
                  <br />
                  <div class='input-group col-lg-12 mb-4'>
                    <div class='input-group-prepend'>
                      <span class='input-group-text bg-white px-4 border-md border-right-0'>
                        <i class='fa fa-user text-muted'></i>
                      </span>
                    </div>
                    <input
                      placeholder='Home Town'
                      class='form-control bg-white border-left-0 border-md'
                      type='text'
                      name='hometown'
                      value={this.state.credentials.hometown}
                      onChange={this.inputChanged}
                    />
                  </div>
                  <br />
                  <div class='input-group col-lg-12 mb-4'>
                    <div class='input-group-prepend'>
                      <span class='input-group-text bg-white px-4 border-md border-right-0'>
                        <i class='fa fa-user text-muted'></i>
                      </span>
                    </div>
                    <input
                      class='form-control bg-white border-left-0 border-md'
                      placeholder='Room Town'
                      type='text'
                      name='roomtown'
                      value={this.state.credentials.roomtown}
                      onChange={this.inputChanged}
                    />
                  </div>
                  <br />
                  <div class='input-group col-lg-12 mb-4'>
                    <div class='input-group-prepend'>
                      <span class='input-group-text bg-white px-4 border-md border-right-0'>
                        <i class='fa fa-user text-muted'></i>
                      </span>
                    </div>
                    <input
                      class='form-control bg-white border-left-0 border-md'
                      placeholder='Language'
                      type='text'
                      name='language'
                      value={this.state.credentials.langauge}
                      onChange={this.inputChanged}
                    />
                  </div>
                  <br />
                  <div class='input-group col-lg-12 mb-4'>
                    <div class='input-group-prepend'>
                      <span class='input-group-text bg-white px-4 border-md border-right-0'>
                        <i class='fa fa-user text-muted'></i>
                      </span>
                    </div>
                    <select
                      class='form-control custom-select bg-white border-left-0 border-md'
                      value={this.state.credentials.occupation}
                      id='occupation'
                      name='occupation'
                      type='text'
                      onChange={this.inputChanged}
                    >
                      <option value='0'>Occupation</option>
                      <option value='student'>Student</option>
                      <option value='working'>Working</option>
                    </select>
                  </div>
                  <br />
                  <div class='input-group col-lg-12 mb-4'>
                    <div class='input-group-prepend'>
                      <span class='input-group-text bg-white px-4 border-md border-right-0'>
                        <i class='fa fa-user text-muted'></i>
                      </span>
                    </div>
                    <input
                      class='form-control bg-white border-left-0 border-md'
                      placeholder='Course'
                      type='text'
                      name='course'
                      value={this.state.credentials.course}
                      onChange={this.inputChanged}
                    />
                  </div>
                  <br />
                  <div class='input-group col-lg-6 mb-4'>
                    <div class='input-group-prepend'>
                      <span class='input-group-text bg-white px-4 border-md border-right-0'>
                        <i class='fa fa-user text-muted'></i>
                      </span>
                    </div>
                    <select
                      class='form-control custom-select bg-white border-left-0 border-md'
                      value={this.state.credentials.alcohol}
                      id='alcohol'
                      name='alcohol'
                      type='text'
                      onChange={this.inputChanged}
                    >
                      <option value='0'>Alcohol</option>
                      <option value='yes'>Yes</option>
                      <option value='flexible'>Flexible</option>
                      <option value='no'>No</option>
                    </select>
                  </div>
                  <br />
                  <div class='input-group col-lg-6 mb-4'>
                    <div class='input-group-prepend'>
                      <span class='input-group-text bg-white px-4 border-md border-right-0'>
                        <i class='fa fa-user text-muted'></i>
                      </span>
                    </div>
                    <select
                      class='form-control custom-select bg-white border-left-0 border-md'
                      value={this.state.credentials.smoking}
                      id='smoking'
                      name='smoking'
                      type='text'
                      onChange={this.inputChanged}
                    >
                      <option value='0'>Smoking</option>
                      <option value='yes'>Yes</option>
                      <option value='flexible'>Flexible</option>
                      <option value='no'>No</option>
                    </select>
                  </div>
                  <br />
                  <div class='input-group col-lg-6 mb-4'>
                    <div class='input-group-prepend'>
                      <span class='input-group-text bg-white px-4 border-md border-right-0'>
                        <i class='fa fa-user text-muted'></i>
                      </span>
                    </div>
                    <select
                      class='form-control custom-select bg-white border-left-0 border-md'
                      value={this.state.credentials.food_preference}
                      id='food_preference'
                      name='food_preference'
                      type='text'
                      onChange={this.inputChanged}
                    >
                      <option value='0'>Food Preference</option>
                      <option value='flexible'>Flexible</option>
                      <option value='strictly veg'>Strictly Veg</option>
                      <option value='strictly non veg'>Strictly Non-Veg</option>
                    </select>
                  </div>
                  <br />
                  <div class='input-group col-lg-6 mb-4'>
                    <div class='input-group-prepend'>
                      <span class='input-group-text bg-white px-4 border-md border-right-0'>
                        <i class='fa fa-user text-muted'></i>
                      </span>
                    </div>
                    <select
                      class='form-control custom-select bg-white border-left-0 border-md'
                      value={this.state.credentials.culinary}
                      id='culinary'
                      name='culinary'
                      type='text'
                      onChange={this.inputChanged}
                    >
                      <option value='0'>Culinary Skills</option>
                      <option value='can'>Can Cook</option>
                      <option value='sometimes'>Sometimes</option>
                      <option value='cannot'>Cannot Cook</option>
                    </select>
                  </div>
                  <br />
                  {/* onValueChange */}
                  <div class='form-group col-lg-12 mx-auto mb-0'>
                    <button
                      class='btn btn-primary btn-block py-2'
                      type='submit'
                    >
                      <span class='font-weight-bold'>Become a Roomie</span>
                    </button>
                    <br />
                    <br />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Roomiereg
