import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {loginUser} from '../../actions/login'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
      // login: true
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit (e) {
    //   this.setState({
    //     login: !this.state.login
    //   })
    e.preventDefault()
    this.props.dispatch(loginUser(this.state.username, this.state.password))
  }

  render () {
    return (
      <div className='login-container'>
        <h1>
          Log into <br />
          The Vā
        </h1>
        <form>
          <p>
            Username:<br /><input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Enter your username..." /><br />
            Password:<br /><input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter your password..." />
          </p>
          {/* TODO: Wire up login button */}
          <button onClick={this.handleSubmit}>Log in</button>
          <Link to="/">
            <button>Back</button>
          </Link>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Login)
