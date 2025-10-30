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
    interest: ["react", "music", "node"],
    theme: "dark"
  })
  const [activeTab, setActiveTab] = useState(0);
  const [error, setError] = useState({});
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

  const handleNextClick = (e) => {
    e.preventDefault();
    if(activeTab < tabs.length-1){
      setActiveTab(activeTab + 1);
    }
  }

  const handlePrevClick = (e) => {
    e.preventDefault();
    if(activeTab >0){
      setActiveTab(activeTab -1);
    }
  }

  const handleSubmitClick = (e) =>{
    e.preventDefault();
    // make api call
    console.log(data);
    alert("Form submitted successfully");
  }

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
      <div>
      { activeTab > 0 && <button onClick={handlePrevClick}>Prev</button>}
      { activeTab <tabs.length-1 && <button onClick={handleNextClick}>Next</button>}
      { activeTab === tabs.length-1 && <button onClick={handleSubmitClick}>Submit</button>}
      </div>
    </div>
  )
}

export default Tabform