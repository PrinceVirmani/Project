"use client"
import React, { useState } from 'react'


const page = () => {
  const items = [{
    id:1,
    title: "First Item",
    content: "qwertyuioplkjhgfdsa zxcvbnm lkjhgfdsa qwertyuiopp"
  },
{
  id:2,
  title: "Second Itmem",
  content: "qwertyuioplkjhgfdsa zxcvbnm lkjhgfdsa qwertyuiopp"
},
{
  id:3,
  title: "Third Itmem",
  content: "qwertyuioplkjhgfdsa zxcvbnm lkjhgfdsa qwertyuiopp"
}
]

const [openIndex, setOpenIndex] = useState(null);
  const handleClick = (idx) =>{
    setOpenIndex(openIndex === idx ? null : idx);
  }
  return (
    <div>
      Acordion
      {items.map((i, idx)=>{
        return <div key={i.id}>
          <button onClick={() =>handleClick(idx)}> {i.title} </button>
         {openIndex === idx &&  <div> {i.content} </div>}
          </div>
      })}
    </div>
  )
}

export default page