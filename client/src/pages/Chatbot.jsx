import React from 'react'
import Chat from '../components/Chatbot/Chat'
import Sidebar from '../components/Chatbot/Sidebar'

const Chatbot = () => {
  return (
    <div className='bg-[#a7bcff] h-[100vh] flex justify-center items-center'>
        <div className='border-solid border-black rounded-md h-4/5 w-3/5'>
            <Sidebar/>
            <Chat/>
        </div>
    </div>
  )
}

export default Chatbot