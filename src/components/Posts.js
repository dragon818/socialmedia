import React, { useState } from 'react';
import CreateComment from './CreateComment.js'

function Posts (props) {
  const [Id, setId] = useState(0);

  const getUserId = (event) => {
    console.log(event.target.value);
    setId(event.target.value);
  }

  const handlePostLikeCilck = (index) => {
    props.setLikeCount(index);
  }
  const handleCommentLikeCilck = (index,i) => {
    props.setCommentLikeCount(index,i);

  }

  const [commentMessage, setCommentMessage]= useState('');

  const submit = (index) => {
    const uId = Id;
    const message = commentMessage;
    props.createComment(uId, message, index);
    setCommentMessage('');
  }

  const handleChange = (e) => {
    setCommentMessage(e.target.value);
  } 

  const handleComment = (index) => {
    props.changeCommentStatus(index);
  }

  if (!props.selecedUserId) {
    return (
      props.posts.map((post, index) => {
        return (
          <div className = 'post' key = {index}> 
            <div className = 'postCotent'>
              <div className = 'user'>
                  <img src = { (props.users.filter(ele => ele.userId === parseInt(post.userId)))[0].Avatar }/>
                  
                  <div> 
                    <div>{ (props.users.filter(ele => ele.userId === parseInt(post.userId)))[0].userName }</div>
                    <div>{post.time}</div>
                  </div>
                </div>
                <p>{post.message}</p>
            </div>
            
            <div>
              <button name = {post.userId} value = {post.likeCount} onClick = {()=>{handlePostLikeCilck(index)}}>Like:{post.likeCount}</button>
              <button name = {post.userId} value = {post.commentStauts} onClick = {()=>{handleComment(index)}}>Comment</button>
            </div>
            
            {post.commentStauts ? 
            <div>
              <div key = {index} className = 'createComment'>
                <select onChange = {getUserId}>
                  <option value="">Choose User</option>
                  {props.users.map((ele, i) => <option value = {ele.userId} key = {i}>{ele.userName}</option>)};
                </select>
                <img src = {props.users.filter(ele => ele.userId === parseInt(Id))[0].Avatar}/>
                <input type = 'text' value ={commentMessage} onChange = {handleChange}/>
                <button onClick = {() => {submit(index)}}>发送</button>
              </div>

              {
                post.comment.map((element,i) => {
                  return (
                    <div key = {i}>
                      <div className = 'commentInfo'>
                        <img src = { (props.users.filter(ele => ele.userId === parseInt(element.userId)))[0].Avatar }/>
                        <p>{ (props.users.filter(ele => ele.userId === parseInt(element.userId)))[0].userName }:</p>
                        <span>{element.commentMessage}:</span><span>{element.time}</span>
                        
                      </div>
                      <button onClick = {()=>{handleCommentLikeCilck(index,i)}} value = {element.commentLikeCount} >Like:{element.commentLikeCount}</button>
                      <button>replay</button>
                    </div>
                  )
                })
              }
            </div> : null
            }
          </div>
        )
      }) 
    )
  } else {
    console.log(props.posts);
    const newPosts = props.posts.filter(post => post.userId === parseInt(props.selecedUserId));
    console.log(newPosts);
    return (
      newPosts.map((post, index) => {
        return (
          <div className = 'post' key = {index}> 
            <div className = 'postCotent'>
              <div className = 'user'>
                  <img src = { (props.users.filter(ele => ele.userId === parseInt(post.userId)))[0].Avatar }/>
                  
                  <div> 
                    <div>{ (props.users.filter(ele => ele.userId === parseInt(post.userId)))[0].userName }</div>
                    <div>{post.time}</div>
                  </div>
                </div>
                <p>{post.message}</p>
            </div>
            
            <div>
              <button name = {post.userId} value = {post.likeCount} onClick = {()=>{handlePostLikeCilck(index)}}>Like:{post.likeCount}</button>
              <button name = {post.userId} value = {post.commentStauts} onClick = {()=>{handleComment(index)}} >Comment</button>
            </div>
            
            {post.commentStauts ? 
            <div>
              <div key = {index} className = 'createComment'>
                <select onChange = {getUserId}>
                  <option value="">Choose User</option>
                  {props.users.map((ele, i) => <option value = {ele.userId} key = {i}>{ele.userName}</option>)};
                </select>
                <img src = {props.users.filter(ele => ele.userId === parseInt(Id))[0].Avatar}/>
                <input type = 'text' value ={commentMessage} onChange = {handleChange}/>
                <button onClick = {() => {submit(index)}}>发送</button>
              </div>

              {
                post.comment.map((element,i) => {
                  return (
                    <div key = {i}>
                      <div className = 'commentInfo'>
                        <img src = { (props.users.filter(ele => ele.userId === parseInt(element.userId)))[0].Avatar }/>
                        <p>{ (props.users.filter(ele => ele.userId === parseInt(element.userId)))[0].userName }:</p>
                        <span>{element.commentMessage}:</span><span>{element.time}</span>
                        
                      </div>
                      <button onClick = {()=>{handleCommentLikeCilck(index,i)}} value = {element.commentLikeCount} >Like:{element.commentLikeCount}</button>
                      <button>replay</button>
                    </div>
                  )
                })
              }
            </div> : null
            }
          </div>
        )
      })
    )
  }
}
export default Posts;

