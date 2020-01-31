import React, { useState } from 'react';
import Replay from './Replay.js'
import SelectUserForReplay from './SelectUserForReplay.js'

function Comment (props) {

  const timeFun = (time)=> {

    let currentTime = new Date().getTime()
    let result = currentTime - time;
    console.log(result);
    if (result/6000 > 1440 ) { 
      return (new Date(time).toLocaleDateString() + "---" + new Date(time).toLocaleTimeString())
    } else if (result/6000 > 720 ) { 
      return 'yesterday'
    } else if (result/6000 > 600) {
      return '10h ago'
    } else if (result/6000 > 300) {
      return '5h ago'
    } else if (result/6000 > 240) {
      return '4h ago'
    } else if (result/6000 > 180) {
      return '3h ago'
    } else if (result/6000 > 120) {
      return '2h ago'
    } else if (result/6000 > 60) {
      return '1h ago'
    } else if (result/6000 > 5) {
      return '5m ago'
    } else if (result/6000 > 0) {
      return 'Just Now'
    }

  }

  const handleReplay = (index,i)=> {
    props.changeReplayStatus(index,i);
  }

  const handleCommentLikeCilck = (index,i) => {
    props.setCommentLikeCount(index,i);
  }
  
  return (
    <div className = 'comment'>

      <div className = 'commentInfo'>
        <img src = { (props.users.filter(ele => ele.userId === parseInt(props.comment.userId)))[0].Avatar }/>
        <p>{ (props.users.filter(ele => ele.userId === parseInt(props.comment.userId)))[0].userName }·</p>
        <span>{props.comment.commentMessage}·</span><span>{timeFun(props.comment.time)}</span>
      </div>

      <button onClick = {()=>{handleCommentLikeCilck(props.x, props.y)}}>Like:{props.comment.commentLikeCount}</button>
      <button onClick = {()=>{handleReplay(props.x, props.y)}}>replay</button>

      {props.comment.replayStauts ? 
      <div className ="selectUseAndReplay">
        <SelectUserForReplay 
          createReplay = {props.createReplay} 
          users = {props.users} 
          x = {props.x} 
          y = {props.y} 
          key = {props.y}/>
        
        <div className ="replayContainer">
          {props.comment.replay.map((replay, j) => {
            return <Replay users = {props.users} replay = {replay} key = {j}/>
          })}
        </div>
      </div>
      : null}
    </div>
  )

  
}
export default Comment;

