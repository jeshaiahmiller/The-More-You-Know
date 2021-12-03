import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <Link to='/ask'>Ask Away!</Link>
      <Link to='/guidelines'>Guidelines</Link>
    </div>
  )
}
