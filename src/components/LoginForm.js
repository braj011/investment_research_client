import React from 'react'
import API from '../API'
import { Button, Form } from 'semantic-ui-react' 

class LoginForm extends React.Component {

  state = {
    email: '',
    password: ''
  }

  // login = (user) => {
  //   if (user.error) {
  //     alert(user.error) 
  //   } else {
  //     localStorage.setItem('token', user.token)
  //     this.props.loginAction(user)
  //     console.log("User:", user, "Logged in...")
  //   }
  // } 

  handleChange = (event) => { 
    this.setState( { [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    API.login(this.state.email, this.state.password)
    .then(user => this.props.login(user))
  } 
  
  render() {
    console.log('loginform rendered')
    const { handleChange, handleSubmit } = this
    const { email, password } = this.state
    return( 
      <Form onSubmit={handleSubmit}>
          <label className="grey-text" margin='normal'> Email </label>
          <input id='usernameInput'  name='email' className="form-control" onChange={handleChange} 
          value={email} />
         <p></p> 
          <label className="grey-text" margin='normal'> Password</label>
          <input id='passwordInput' type='password' name='password' className="form-control" onChange={handleChange} 
          value={password} />
        <br/>
          <Button className="auth-submit" bsStyle="info" type="submit">Submit</Button>  
      </Form>
    )
  }

} 

export default LoginForm