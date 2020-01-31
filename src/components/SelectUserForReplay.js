import React, { useState } from 'react';

function SelectUserForReplay (props) {
  const [replayUserId, setReplayUserId] = useState('');
  const [replayMessage, setReplayMessage]= useState('');

  const getReplayUserId = (event) => {
    setReplayUserId(event.target.value);
  }

  const replay = (index, i) => {
    const uId = replayUserId;
    const ReplayMessage =  replayMessage;
    console.log(uId,ReplayMessage,i,index);
    props.createReplay(uId,ReplayMessage,index, i);
    setReplayMessage('');
  }

  const handleReplayChange = (e) => {
    setReplayMessage(e.target.value);
  } 


  return (
    <div className = 'createReplay'>
      <select onChange = {getReplayUserId}>
        <option value="">Choose User</option>
        {props.users.map((ele, i) => <option value = {ele.userId} key = {i}>{ele.userName}</option>)};
      </select>
      <img src = {replayUserId === "" ? "http://placekitten.com/300/300" : props.users.filter(ele => ele.userId === parseInt(replayUserId))[0].Avatar}/>
      <input type = 'text' value ={replayMessage} onChange = {handleReplayChange}/>
      <button onClick = {() => {replay(props.x, props.y)}}>submitReplay</button>
    </div>
  )
}
export default SelectUserForReplay;

