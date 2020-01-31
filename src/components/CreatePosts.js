import React, { useState } from 'react';

function CreatePosts (props) {
  const [Id, setId] = useState('');
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

        
          <img src = {Id === '' ? "http://placekitten.com/300/300" : props.users.filter(ele => ele.userId === Id)[0].Avatar} />
          <input placeholder = "What's in your mind?" type = 'text' value = {message} onChange = {handleChange}/>
        
        <button onClick = {submit}>Post</button>
      </div>

    </div>
    
  )
}

export default CreatePosts;

