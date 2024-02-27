import React, { useContext, useEffect, useState } from 'react'
import Avatar from './Avatar'
import { TwitterContext } from '../utils/context'

const Stats = () => {

  const { user, stats } = useContext(TwitterContext);

  let [followS, setFolowS] = useState(stats.followers)


  useEffect(() => {
    setFolowS(stats.followers)
  }, [])

  const myaction = (e) => {
    console.log(e);
    setFolowS(stats.followers++)
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
        <div onContextMenu={handleRightClick} >Followers: {followS}</div>
        <div>Following: {stats.following}</div>
      </div>
    </div>
  )
}

export default Stats