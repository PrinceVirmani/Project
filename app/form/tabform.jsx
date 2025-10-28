"use client"
import React, { useState } from 'react'
import Profile from './profile'
import Interest from './interest'
import Settings from './settings'

const Tabform = () => {
  const [data, setData] = useState({
    name: "Prince",
    age: 23,
    email: "prince@gmail.com",
    interest: ["React", "Node", "MongoDB"],
    theme: "Dark"
  })
  const [activeTab, setActiveTab] = useState(0);
  const tabs=[
    {
      name: "Profile",
      component: Profile
    },
    {
      name: "Interest",
      component: Interest
    },
    {
      name: "Settings",
      component: Settings
    }
  ];

  const ActiveTabComponent = tabs[activeTab].component;

  return (
    <div>
      <div className='flex'>
        {tabs.map((t, index) => (<div key={index} onClick={() => setActiveTab(index)} className='p-5 border-1 black hover:cursor-pointer'>
          {t.name}
          </div>))}
      </div>
      <div className='flex border-1 black h-[200px] p-5'>
        <ActiveTabComponent data={data} setData={setData} />
      </div>
    </div>
  )
}

export default Tabform