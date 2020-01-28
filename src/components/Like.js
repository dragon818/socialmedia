import React, { useState } from 'react';


function Like (props) {

  const changeLikeCount = (event) => {
    const name = event.target.parentNode.getAttribute('postid');
    console.log(name);
    props.setLikeCount(name);
  }

  return ( 
    <button onClick = {changeLikeCount} name = {props.userId} value = {props.likeCount}>Like:{props.likeCount}</button>
    // props.posts.map( (ele, index) => <Post users = {props.users} key = {index} post = {ele}/> )
  )
}
export default Like;

