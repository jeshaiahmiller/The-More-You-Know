import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
    <div>
      <Link to='/ask/:id'>Ask Away!</Link>
      </div>
    <div>
      <Link to='/guidelines'>Guidelines</Link>
    </div>
    </div>
  )

}
