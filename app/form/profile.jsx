import React from 'react'

const Profile = ({data, setData}) => {
  const {name, age, email} = data;

  const handleDataChange = (e, item) =>{
    setData(prevState => ({
      ...prevState,
      [item]: e.target.value,
    }))
  }
  return (
    <div>
        <label>
        Name :
        </label>
        <input type="text" name="name" value={name} onChange={(e) => handleDataChange(e, "name")}/>
         <label>
        Age :
        </label>
        <input type="number" name="age" value={age} onChange={(e) => handleDataChange(e, "age")}/>
         <label>
        Email :
        </label>
        <input type="text" name="email" value={email} onChange={(e) => handleDataChange(e, "email")}/>
    </div> 
  )
}

export default Profile
