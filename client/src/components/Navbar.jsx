import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="navbar">
  
      <Link to='/ask/:id' className="link1">Ask Away!</Link>
      <Link to='/guidelines' className="link2">Guidelines</Link>
  
    </div>
  )

}
