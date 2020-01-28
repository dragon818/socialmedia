import React, { useState } from 'react';
import Post from './Post.js';

function Timeline (props) {
  return ( 
    props.posts.map( (ele, index) => <Post setLikeCount = {props.setLikeCount} users = {props.users} key = {index} post = {ele}/> )
  )
}
export default Timeline;

