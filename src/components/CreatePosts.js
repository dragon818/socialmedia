import React, { useState } from 'react';

function CreatePosts (props) {
  const [Id, setId] = useState('');
  const [message, setMessage] = useState('');

  const getUserId = (event) => {
    const name = event.target.value;
    setId(props.users.filter(ele => ele.userName === name)[0].userId)
  }

  const handleChange = (event) => {
    const message = event.target.value;
    setMessage(message);
  }
  const submit = () => {
    props.createPost(Id, message)
  }

  return (
    <div>
      
      <p>Create post</p>
      <select value = {props.users.userName}  onChange = {getUserId}>
          <option value="">Choose User</option>
          {props.users.map((ele, index) => <option key = {index}>{ele.userName}</option>)};
      </select>
      <div>
        <img src = {props.users.name}/>
        <input type = 'text' value = {message} onChange = {handleChange} placeholder = "What's on your mind?"/>
      </div>
      <button onClick = {submit}>Post</button>

    </div>
    
  )
}

export default CreatePosts;

