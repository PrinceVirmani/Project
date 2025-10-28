import React from 'react'

const Profile = ({data}) => {
  const {name, age, email} = data;

  const handleDataChange = () =>{
    
  }
  return (
    <div>
        <label>
        Name :
        </label>
        <input type="text" name="name" value={name}/>
         <label>
        Age :
        </label>
        <input type="text" name="age" value={age}/>
         <label>
        Email :
        </label>
        <input type="text" name="email" value={email}/>
    </div> 
  )
}

export default Profile
