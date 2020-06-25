import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import ProfileContainer from './components/Profile/ProfileContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import NavContainer from './components/Nav/NavContainer'
import UsersContainer from './components/Users/UsersContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'

const App = () => {
  return (
    <BrowserRouter>
      <HeaderContainer />
      <div className="container">
        <div className="row">
          <NavContainer />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <Login />} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
