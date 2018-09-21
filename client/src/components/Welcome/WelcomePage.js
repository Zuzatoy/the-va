import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

export default function WelcomePage (props) {
  return (
    <div className='container'>
      <h1>The Vā</h1>
      <Link to="/login">
        <Button>Log in</Button>
      </Link>
      <Link to="/register">
        <Button>Register</Button>
      </Link>
    </div>
  )
}
