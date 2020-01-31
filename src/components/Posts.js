import React, { useState } from 'react';
import Post from './Post.js'

function Posts (props) {

  if (!props.selecedUserId) {
    return (
      props.posts.map((post, index) => {
        return <Post 
          createComment = {props.createComment}
          createReplay = {props.createReplay}
          setLikeCount = {props.setLikeCount} 
          setCommentLikeCount = {props.setCommentLikeCount}
          changeCommentStatus = {props.changeCommentStatus} 
          changeReplayStatus = {props.changeReplayStatus}
          users = {props.users} 
          index = {index} 
          key = {index} 
          post = {post}/>
      }) 
    )
  } else {
    return (
    props.posts.map((post, index) => {
      if (post.userId === parseInt(props.selecedUserId)){
        return <Post 
          createComment = {props.createComment}
          createReplay = {props.createReplay}
          setLikeCount = {props.setLikeCount} 
          setCommentLikeCount = {props.setCommentLikeCount}
          changeCommentStatus = {props.changeCommentStatus}
          changeReplayStatus = {props.changeReplayStatus} 
          users = {props.users} 
          index = {index} 
          key = {index} 
          post = {post}/>
      }
      })
    
  )}
}
export default Posts;

