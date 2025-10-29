import React from 'react'

const Interest = ({data, setData}) => {
  const {interest} = data;
  const handleChange = (e, name) =>{
    setData((prev)=> ({
      ...prev,
      interest: e.target.checked ? [...prev.interest, e.target.name] : prev.interest.filter((i) => i!== e.target.name)
    }))
  }
  return (
    <div>
       <div>
        <label>
        React
        <input type="checkbox" name="react" checked={interest.includes("react")} onChange={(e) => handleChange(e, "react")} />
        </label>
        </div>
        <div>
        <label>
        Something
        <input type="checkbox" name="something" checked={interest.includes("something")} onChange={(e) => handleChange(e, "something")} />
        </label>
        </div>
        <div>
        <label>
        Node
        <input type="checkbox" name="node" checked={interest.includes("node")} onChange={(e) => handleChange(e, "node")} />
        </label>
        </div>
        </div>
       
  )
}

export default Interest