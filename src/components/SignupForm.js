import React from 'react'
import API from '../API'

import { Button } from 'react-bootstrap'

class signupForm extends React.Component {

  state = {
    firstName: '',
    email: '',
    password: ''
  }


  handleChange = (event) => { 
    this.setState( { [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    API.signup(this.state.firstName, this.state.email, this.state.password)
      // .then(resp => console.log(resp))
      .then(user => this.props.login(user))
  }
  
  
  render() {
    const { handleChange, handleSubmit } = this
    const { firstName, email, password } = this.state
    return( 
      <form onSubmit={handleSubmit}>
          <label className="grey-text" margin='normal'> First Name </label>
          <input id='firstNameInput'  name='firstName' className="form-control" onChange={handleChange} value={firstName}/>
        <br/> 
          <label className="grey-text" margin='normal'> Email </label>
          <input id='usernameInput'  name='email' className="form-control" onChange={handleChange} value={email}/>
        <br/> 
          <label className="grey-text" margin='normal'> Password</label>
          <input id='passwordInput' type='password' name='password' className="form-control" onChange={handleChange} value={password} />
        <br/>
          <Button bsStyle="info" type="submit">Submit</Button>  
      </form>
    )
  }

} 


export default signupForm