import React, { useState } from 'react';

function SelectUserForComment (props) {
  const [Id, setId] = useState('');
  const [commentMessage, setCommentMessage]= useState('');

  const handleChange = (e) => {
    setCommentMessage(e.target.value);
  } 

  const getUserId = (event) => {
    setId(event.target.value);
  }

  const submit = (index) => {
    const uId = Id;
    const message = commentMessage;
    props.createComment(uId, message, index);
    setCommentMessage('');
  }

  return (
    <div className = 'createComment'>
      <select onChange = {getUserId}>
        <option value="">Choose User</option>
        {props.users.map((ele, i) => <option value = {ele.userId} key = {i}>{ele.userName}</option>)};
      </select>
      <img src = {Id === "" ? "http://placekitten.com/300/300" : props.users.filter(ele => ele.userId === parseInt(Id))[0].Avatar}/>
      <input placeholder = "Write a comment..." type = 'text' value ={commentMessage} onChange = {handleChange}/>
      <button onClick = {() => {submit(props.clickcode)}}>comment</button>
    </div>
  )
}
export default SelectUserForComment;

