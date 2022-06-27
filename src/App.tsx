import React, { useState } from 'react'
import LoginForm from './modules/loginForm/LoginForm'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Link } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar"
import MeetingRoom from './modules/meetingRooms'
import Meeting from './modules/meetings'
import UserProfile from './modules/users'

import Tasks from './modules/tasks'

import './App.css'
// import { isTemplateTail } from 'typescript'

function App() {
  const adminUser = {
    email: 'shubham@admin.com',
    password: 'admin123',
  }

  const [user, setUser] = useState({ name: '', email: '' });
  const [error, setError] = useState('');

  const Login = (details: any) => {
    console.log(details)

    if (
      details.email === adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log('Logged in ')
      setUser({
        name: details.name,
        email: details.email,
      })
    } else {
      console.log('details do not match');
      setError("Details do not match")
    }
  }

  const Logout = () => {
    setUser({
      name: '',
      email: '',
    })
    console.log('Logout')
  }

  return (
    <div className="App">
      {user.email !== '' ? (
        
          <>
          <Router>
          <Navbar />
          <Routes>
            <Route path ='/tasks'  element={<Tasks />} />
            <Route path ='/meetings'   element={<MeetingRoom />} />
            <Route path ='/meetingroom'   element={<Meeting />} />
            <Route path ='/userprofile'   element={<UserProfile />} />
          </Routes>
          </Router>
         
          <div className="homePage">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div></>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  )
}

export default App
