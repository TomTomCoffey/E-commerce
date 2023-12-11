'use client'
import React from 'react'
import { useState } from 'react'

const LoginClient = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)



  return (
    <div>
      <div className="box">
      <div className="h1">Login</div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
      </div>
      <div className="form-group">
        <button className="btn btn-primary btn-block" onClick={e => {
          e.preventDefault()
          setLoading(true)
          fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
          }).then(res => res.json())
            .then(data => {
              if (data.error) {
                setError(data.error)
                setLoading(false)
              } else {
                setToken(data.token)
                setLoading(false)
              }
            })
        }}>Login</button>
      </div>
      {loading && <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>}
      {error && <div className="alert alert-danger" role="alert">
        {error}
      </div>}
      {token && <div className="alert alert-success" role="alert">
        {token}
      </div>}
    </div>
    </div>
  )
}

export default LoginClient