import React from 'react'
import "./landing.css"
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <div className='land'>
      <Link className="first" to="/farmer"><p>FARMER</p></Link>
      <Link className="second" to="/customer"><p>CUSTOMER</p></Link>
    </div>
  )
}

export default Landing
