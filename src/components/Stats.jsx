import React, { useContext, useEffect, useState } from 'react'
import Avatar from './Avatar'
import { TwitterContext } from '../utils/context'

const Stats = () => {

  const { user, stats } = useContext(TwitterContext);

  let [followS, setFolowS] = useState(stats.followers);
  let [followG, setFolowG] = useState(stats.following);

  const myactionS = (e) => {
    console.log(e);
    setFolowS(stats.followers++)
  }

  const myactionG = (e) => {
    console.log(e);
    setFolowG(stats.following++)
  }

  function handleRightClick(e){
    e.preventDefault(); // предотвращаем показ контекстного меню по умолчанию
    if(e.which == 3){
      console.log(888);
    }
  };

  return (
    <div className='user-stats'>
      <div>
        <Avatar />
        {user.name}
      </div>
      <div className='stats'>
        {/*<div onContextMenu={handleRightClick} >Followers: {followS}</div>*/}
        <div onClick={myactionS} >Followers: {followS}</div>
        <div onClick={myactionG}>Following: {followG}</div>
      </div>
    </div>
  )
}

export default Stats