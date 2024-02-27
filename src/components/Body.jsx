import React from 'react'
import Sidear from './Sidebar'
import Content from './Content'

const Body = () => {
  return (
    <div className='body'>
        <Sidear />
        <Content/>
    </div>
  )
}

export default Body