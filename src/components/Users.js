import React, { useState } from 'react';

function Users (props) {
  const [userName, setUser] = useState('');
  const [Avatar, setAvatar] = useState('');

  const handleChangeUser = (e) => {
    setUser(e.target.value);   
  } 
  const handleChangeAvatar = (e) => {
    setAvatar(e.target.value); 
  } 

  const submit = (e) => {
    props.createUser(userName, Avatar)
    setAvatar('');
    setUser('');
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

