import React, { useState } from 'react';
import Like from './Like.js'
import Comment from './Comment.js'

function Post (props) {
  return (
    <div >
        
      <div>{(props.users.filter(ele => ele.userId === props.post.userId))[0].userName}</div>
      <div> 
        <img src = {(props.users.filter(ele => ele.userId === props.post.userId))[0].Avatar}/>
        <div>{props.post.time}</div>
        {/* <Time /> */}
      </div>
      <p>{props.post.message}</p>
      <div postid = {props.post.time}>
        <Like setLikeCount = {props.setLikeCount} likeCount = {props.post.likeCount}/>
        <Comment />
      </div>
    </div>
  )
}

export default Post;

