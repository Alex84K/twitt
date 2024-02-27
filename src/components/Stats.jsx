import React, { useContext, useEffect, useState } from 'react'
import Avatar from './Avatar'
import { TwitterContext } from '../utils/context'

const Stats = () => {

  const { user, stats, handleRLClick } = useContext(TwitterContext);

  let [followS, setFolowS] = useState(stats.followers);
  let [followG, setFolowG] = useState(stats.following);

  const myactionS = () => {
    setFolowS(stats.followers++)
  }

  const myactionG = () => {
    setFolowG(stats.following++)
  }

  let handleRLClick1 = (e) => {
    e.preventDefault();
    if(stats.following >= 0) {
      setFolowG(stats.following--)
    }
  }

  let handleRLClick2 = (e) => {
    e.preventDefault();
    if(stats.followers >= 0) {
      setFolowS(stats.followers--)
    }
  }

  return (
    <div className='user-stats'>
      <div>
        <Avatar />
        {user.name}
      </div>
      <div className='stats'>
        <div onContextMenu={handleRLClick2} onClick={myactionS}>Followers: {followS}</div>
        {/* <div onClick={myactionS} >Followers: {followS}</div>*/}
        <div onContextMenu={handleRLClick1} onClick={myactionG}>Following: {followG}</div>
      </div>
    </div>
  )
}

export default Stats