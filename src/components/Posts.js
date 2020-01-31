import React, { useState } from 'react';
import Like from './Like.js'

function Posts (props) {
  const [Id, setId] = useState('');
  const [replayUserId, setReplayUserId] = useState('');
  const [commentMessage, setCommentMessage]= useState('');
  const [replayMessage, setReplayMessage]= useState('');


  const handlePostLikeCilck = (index) => {
    console.log(index);
    props.setLikeCount(index);
  }

  const getUserId = (event) => {
    setId(event.target.value);
  }
  const getReplayUserId = (event) => {
    setReplayUserId(event.target.value);
  }
  const handleCommentLikeCilck = (index,i) => {
    props.setCommentLikeCount(index,i);
  }

  const replay = (index, i) => {
    const uId = replayUserId;
    const ReplayMessage =  replayMessage;
    props.createReplay(uId,ReplayMessage,index, i);
    setReplayMessage('');
  }

  const handleReplay = (index,i)=> {
    props.changeReplayStatus(index,i);
  }

  const submit = (index) => {
    const uId = Id;
    const message = commentMessage;
    props.createComment(uId, message, index);
    setCommentMessage('');
  }

  const handleChange = (e) => {
    setCommentMessage(e.target.value);
  } 
  const handleReplayChange = (e) => {
    setReplayMessage(e.target.value);
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
                <p className = 'postMessage'>{post.message}</p>
            </div>
            
            <div className = 'likeAndComment'>
              <button  onClick = {()=>{handlePostLikeCilck(index)}}>Like:{post.likeCount}</button>
              <button name = {post.userId} value = {post.commentStauts} onClick = {()=>{handleComment(index)}}>Comment</button>
            </div>
            
            {post.commentStauts ? 
            <div className ="selectUseAndComment">

              <div key = {index} className = 'createComment'>
                <select onChange = {getUserId}>
                  <option value="">Choose User</option>
                  {props.users.map((ele, i) => <option value = {ele.userId} key = {i}>{ele.userName}</option>)};
                </select>
                <img src = {Id === "" ? "http://placekitten.com/300/300" : props.users.filter(ele => ele.userId === parseInt(Id))[0].Avatar}/>
                <input placeholder = "Write a comment..." type = 'text' value ={commentMessage} onChange = {handleChange}/>
                <button onClick = {() => {submit(index)}}>comment</button>
              </div>

              {
                post.comment.map((element,i) => {
                  return (
                    <div className = 'comment' key = {i}>

                      <div className = 'commentInfo'>
                        <img src = { (props.users.filter(ele => ele.userId === parseInt(element.userId)))[0].Avatar }/>
                        <p>{ (props.users.filter(ele => ele.userId === parseInt(element.userId)))[0].userName }·</p>
                        <span>{element.commentMessage}·</span><span>{element.time}</span>
                      </div>

                      <button onClick = {()=>{handleCommentLikeCilck(index,i)}}>Like:{element.commentLikeCount}</button>
                      <button onClick = {()=>{handleReplay(index,i)}}>replay</button>


                      {element.replayStauts ? 
                      <div className ="selectUseAndReplay">
                        <div key = {i} className = 'createReplay'>
                          <select onChange = {getReplayUserId}>
                            <option value="">Choose User</option>
                            {props.users.map((ele, i) => <option value = {ele.userId} key = {i}>{ele.userName}</option>)};
                          </select>
                          <img src = {replayUserId === "" ? "http://placekitten.com/300/300" : props.users.filter(ele => ele.userId === parseInt(replayUserId))[0].Avatar}/>
                          <input type = 'text' value ={replayMessage} onChange = {handleReplayChange}/>
                          <button onClick = {() => {replay(index,i)}}>submitReplay</button>
                        </div>

                        <div className ="replayContainer">
                          {element.replay.map((replay, j) => {
                            return (
                              <div className = 'replay'key = {j}>
                                <img src = { (props.users.filter(ele => ele.userId === parseInt(replay.userId)))[0].Avatar }/>
                                
                                <div>{ (props.users.filter(ele => ele.userId === parseInt(replay.userId)))[0].userName }·</div>
                                <p>{replay.replayMessage}·</p>
                                <div>{replay.time}</div>
                                
                                {/* <button>Like:0</button>
                                <button>Replay</button> */}
                              </div>
                            )
                          })}
                        </div>
                      </div>
                      : null}
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

    return (
    props.posts.map((post, index) => {
      
      if (post.userId === parseInt(props.selecedUserId)){
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
                  <button  onClick = {()=>{handlePostLikeCilck(index)}}>Like:{post.likeCount}</button>
                  <button name = {post.userId} value = {post.commentStauts} onClick = {()=>{handleComment(index)}}>Comment</button>
                </div>
                
                {post.commentStauts ? 
                <div>
                  <div key = {index} className = 'createComment'>
                    <select onChange = {getUserId}>
                      <option value="">Choose User</option>
                      {props.users.map((ele, i) => <option value = {ele.userId} key = {i}>{ele.userName}</option>)};
                    </select>
                    <img src = {Id === "" ? "http://placekitten.com/300/300" : props.users.filter(ele => ele.userId === parseInt(Id))[0].Avatar}/>
                    <input type = 'text' value ={commentMessage} onChange = {handleChange}/>
                    <button onClick = {() => {submit(index)}}>comment</button>
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
    
                          <button onClick = {()=>{handleCommentLikeCilck(index,i)}}>Like:{element.commentLikeCount}</button>
                          <button onClick = {()=>{handleReplay(index,i)}}>replay</button>
    
    
                          {element.replayStauts ? 
                          <div>
                            <div key = {i} className = 'createComment'>
                              <select onChange = {getReplayUserId}>
                                <option value="">Choose User</option>
                                {props.users.map((ele, i) => <option value = {ele.userId} key = {i}>{ele.userName}</option>)};
                              </select>
                              <img src = {replayUserId === "" ? "http://placekitten.com/300/300" : props.users.filter(ele => ele.userId === parseInt(replayUserId))[0].Avatar}/>
                              <input type = 'text' value ={replayMessage} onChange = {handleReplayChange}/>
                              <button onClick = {() => {replay(index,i)}}>submitReplay</button>
                            </div>
    
                            <div className ="replay">
                              {element.replay.map((replay, j) => {
                                return (
                                  <div key = {j}>
                                    <img src = { (props.users.filter(ele => ele.userId === parseInt(replay.userId)))[0].Avatar }/>
                                    <div> 
                                      <div>{ (props.users.filter(ele => ele.userId === parseInt(replay.userId)))[0].userName }</div>
                                      <p>{replay.replayMessage}</p>
                                      <div>{replay.time}</div>
                                    </div>
                                    <button>Like:0</button>
                                    <button>Replay</button>
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                          : null}
                        </div>
                      )
                    })
                  }
                </div> : null
                }
              </div>
            )
      }
      })
    
  )}
}
export default Posts;

