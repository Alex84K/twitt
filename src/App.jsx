
import { useEffect, useState } from 'react'
import './App.css'
import Body from './components/Body'
import Navigation from './components/Navigation'
import { TwitterContext } from './utils/context'

function App() {

  const [user, setUser] = useState({
    name: 'Bobbi',
    avatar: 'https://gravatar.com/avatar/000?d=robohash'
  })

  const [stats, setStats] = useState({
    followers: 100,
    following: 1000
  })

  const changeAvatar = (url) => {
    setUser(user => ({ ...user, avatar: url || prevUser.avatar }));
  }

  const setName = () => {
    let newName = prompt('Want to change your name? Enter new');
    setUser(user => ({...user, name: newName}))
  }

  return (
    <div className='app'>
      <TwitterContext.Provider value={{
        /*user: user,
        stats: stats*/
        user, stats, changeAvatar, setName
      }}>
        <Navigation />
        <Body />
      </TwitterContext.Provider>
    </div>
  )
}

export default App
