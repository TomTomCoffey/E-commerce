'use client'
import React from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react'

const SignUpClient = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')


  return (
    <div>
    <div>
      <div className="box ">
      <div className="h1">Sign Up</div>
        <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" placeholder="Enter name" onChange={e => setName(e.target.value)} />
        </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
      </div>
      <div className="form-group">
        <button className="btn btn-primary btn-block">Sign Up</button>
      </div>
    </div>
    </div>
    </div>
  )
}

export default SignUpClient