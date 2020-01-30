import React, { useState } from 'react';

function CreatePosts (props) {
  const [Id, setId] = useState(0);
  const [message, setMessage] = useState('');

  const getUserId = (event) => {
    setId(parseInt(event.target.value));
  }

  const handleChange = (event) => {
    const message = event.target.value;
    setMessage(message);
  }
  const submit = () => {
    props.createPost(Id, message)
  }

  return (
    <div className="createPosts">
      
      <p>Create post</p>
      <div className="userInfo">
        <select onChange = {getUserId}>
            <option value="">Choose User</option>
            {props.users.map((ele, index) => <option value = {ele.userId} key = {index}>{ele.userName}</option>)};
        </select>

        <div>
          <img src = {props.users.filter(ele => ele.userId === parseInt(Id))[0].Avatar}/>
          <input type = 'text' value = {message} onChange = {handleChange} placeholder = "What's on your mind?"/>
        </div>
        <button onClick = {submit}>Post</button>
      </div>

    </div>
    
  )
}

export default CreatePosts;

