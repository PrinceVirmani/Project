"use client";
import React from 'react'
import useNotification from '../hooks/useNotification'

const page = () => {
    const {NotificationComponent, triggerNotification} = useNotification('top-right');
  return (
    <div style={{padding:24}} className='items-center justify-center'>

    <button 
    className='border-4 border-black p-4 m-5 items-center justify-center cursor-pointer'
        onClick={()=>triggerNotification({
            type:"success",
            message:"Done",
            duration: 2000
        })}>
        Trigger Notification
    </button>

        {NotificationComponent}
    </div>
  )
}

export default page