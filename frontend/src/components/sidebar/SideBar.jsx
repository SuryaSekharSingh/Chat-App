import React from 'react'
import Conversation from './Conversation'
import Conversations from './Conversations'
import SearchInput from './SearchInput';
import LogoutButton from './LogoutButton';
const SideBar = () => {
  return (
    <div className='flex flex-col h-full'>
        <SearchInput />
        <div className="divider px-3"></div>
        <Conversations />
        <LogoutButton />
    </div>
  )
}

export default SideBar