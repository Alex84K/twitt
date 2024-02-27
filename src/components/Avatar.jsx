import React, { useContext } from 'react'
import { TwitterContext } from '../utils/context'

const Avatar = ({ size }) => {

  const { user, setName } = useContext(TwitterContext)

  return (
    <img className={`user-avatar ${size ?? ''}`}
      src={user.avatar}
      alt={user.name}
      onClick={setName}
    />
  )
}

export default Avatar