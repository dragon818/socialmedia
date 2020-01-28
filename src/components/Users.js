import React, { useState } from 'react';

function Users (props) {
  const [userName, setUser] = useState('11');
  const [Avatar, setAvatar] = useState('22');

  const handleChangeUser = (e) => {
    setUser(e.target.value);
  } 
  const handleChangeAvatar = (e) => {
    setAvatar(e.target.value); 
  } 

  const submit = () => {
    props.createUser(userName, Avatar)
  }

  return (
    <div>
      <input name = 'userName' value = {userName} onChange = {handleChangeUser} type = 'text' placeholder = 'username'/>
      <input name = 'Avatar' value = {Avatar} onChange = {handleChangeAvatar} type = 'text' placeholder = 'userImageLink'/>
      <button onClick = {submit}>Sign in</ button>
    </div>
  )
}

export default Users;

