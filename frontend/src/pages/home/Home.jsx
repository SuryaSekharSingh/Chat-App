import React from 'react'
import SideBar from '../../components/sidebar/SideBar'
import MessageContainer from '../../components/messages/MessageContainer'

export const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-clip-padding shadow-lg bg-white/10 backdrop-blur-md border border-white/20 bg-opacity-30'>
      <SideBar />
      <MessageContainer />
    </div>
  )
}
