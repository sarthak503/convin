import React from 'react'
import './style.css'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
function Btn() {
  return (
    <div className='btn'>
      <Link to={`/users/`}>
      <Button primary >
      Page 1
     </Button>
      </Link>
      <Link to={`/users?page=2`}>
      <Button primary >
      Page 2
     </Button>
      </Link>
    
    
     </div>
  )
}

export default Btn