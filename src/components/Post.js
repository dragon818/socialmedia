import React, { useState } from 'react';
import Comment from './Comment.js'
import SelectUserForComment from './SelectUserForComment'

function Post (props) {

  const handlePostLikeCilck = (index) => {
    props.setLikeCount(index);
  }

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

  const handleComment = (index) => {
    props.changeCommentStatus(index);
  }

  return (
    <div className = 'post'> 
      <div className = 'postCotent'>
        <div className = 'user'>
            <img src = { (props.users.filter(ele => ele.userId === parseInt(props.post.userId)))[0].Avatar }/> 
            <div> 
              <div>{ (props.users.filter(ele => ele.userId === parseInt(props.post.userId)))[0].userName }</div>
              <div>{timeFun(props.post.time)}</div>
            </div>
          </div>
          <p className = 'postMessage'>{props.post.message}</p>
      </div>
      
      <div className = 'likeAndComment'>
        <button  onClick = {()=>{handlePostLikeCilck(props.index)}}>Like:{props.post.likeCount}</button>
        <button name = {props.post.userId} value = {props.post.commentStauts} onClick = {()=>{handleComment(props.index)}}>Comment</button>
      </div>
      
      {props.post.commentStauts ? 
      <div className ="selectUseAndComment">
        <SelectUserForComment 
          createComment = {props.createComment} 
          clickcode = {props.post.postId} 
          users = {props.users} 
          key = {props.index}/>
        {
          props.post.comment.map((element,i) => {
            return <Comment 
              setCommentLikeCount = {props.setCommentLikeCount}
              changeReplayStatus = {props.changeReplayStatus} 
              y = {i}  
              x = {props.index} 
              createReplay = {props.createReplay} 
              users = {props.users} 
              comment = {element} 
              key = {i}/>
          })
        }
      </div>
       : null
      }
    </div>
  )
}

export default Post;

